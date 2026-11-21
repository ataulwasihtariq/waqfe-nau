/**
 * Waqf-e-Nau Jaiza 2026 – backend (Google Apps Script, legato al foglio Google).
 *
 * Fogli:
 *   Bambini      Codice | Nome | Eta | Gruppo | PIN            (nomi SOLO qui, mai su GitHub)
 *   Valutazioni  Data | Codice | Insegnante | Sezione | VoceID | Voce | Stato | Nota   (registro, si aggiunge sempre)
 *   Stato        Chiave | Codice | VoceID | Sezione | Voce | Stato | Aggiornato        (ultimo stato di ogni voce)
 *   Punteggi     Codice | Nome | A (70) | B (25) | C (5) | Totale | Giudizio | Insegnante | Aggiornato
 *
 * Stato voce: 0 = non ancora, 1 = in parte, 2 = sa.
 * Segreti (Proprietà dello script): TEACHER_TOKEN (insegnanti), nessuna password nel codice.
 */
var SH = { kids: 'Bambini', log: 'Valutazioni', state: 'Stato', score: 'Punteggi' };

function setup() { // eseguire UNA volta dall'editor
  var ss = SpreadsheetApp.getActive();
  function ensure(name, head) {
    var s = ss.getSheetByName(name) || ss.insertSheet(name);
    if (s.getLastRow() === 0) { s.appendRow(head); s.setFrozenRows(1); s.getRange(1, 1, 1, head.length).setFontWeight('bold'); }
  }
  ensure(SH.kids, ['Codice', 'Nome', 'Eta', 'Gruppo', 'PIN']);
  ensure(SH.log, ['Data', 'Codice', 'Insegnante', 'Sezione', 'VoceID', 'Voce', 'Stato', 'Nota']);
  ensure(SH.state, ['Chiave', 'Codice', 'VoceID', 'Sezione', 'Voce', 'Stato', 'Aggiornato']);
  ensure(SH.score, ['Codice', 'Nome', 'A (70)', 'B (25)', 'C (5)', 'Totale', 'Giudizio', 'Insegnante', 'Aggiornato']);
  var p = PropertiesService.getScriptProperties();
  if (!p.getProperty('TEACHER_TOKEN')) {
    p.setProperty('TEACHER_TOKEN', Utilities.getUuid().replace(/-/g, '').slice(0, 10));
  }
  Logger.log('Codice insegnanti (TEACHER_TOKEN): ' + p.getProperty('TEACHER_TOKEN'));
}

function json_(o) { return ContentService.createTextOutput(JSON.stringify(o)).setMimeType(ContentService.MimeType.JSON); }
function token_() { return PropertiesService.getScriptProperties().getProperty('TEACHER_TOKEN'); }
function rows_(name) { var s = SpreadsheetApp.getActive().getSheetByName(name); return s.getLastRow() < 2 ? [] : s.getRange(2, 1, s.getLastRow() - 1, s.getLastColumn()).getValues(); }
function grade_(t) { return t >= 85 ? 'Mumtaz' : t >= 70 ? 'Molto buono' : t >= 50 ? 'Buono' : 'Da esercitare ancora'; }

function doGet(e) {
  var a = (e.parameter.action || '');
  try {
    if (a === 'roster') { // solo insegnanti
      if (e.parameter.token !== token_()) return json_({ ok: false, error: 'token' });
      return json_({ ok: true, kids: rows_(SH.kids).map(function (r) { return { code: r[0], name: r[1], age: r[2], group: r[3] }; }) });
    }
    if (a === 'child') { // famiglie: codice + PIN
      var code = String(e.parameter.code || '').trim().toUpperCase(), pin = String(e.parameter.pin || '').trim();
      var kid = rows_(SH.kids).filter(function (r) { return String(r[0]).toUpperCase() === code && String(r[4]) === pin; })[0];
      if (!kid) return json_({ ok: false, error: 'codice o PIN non validi' });
      var items = rows_(SH.state).filter(function (r) { return String(r[1]).toUpperCase() === code; })
        .map(function (r) { return { id: r[2], sec: r[3], label: r[4], s: Number(r[5]), at: r[6] }; });
      var sc = rows_(SH.score).filter(function (r) { return String(r[0]).toUpperCase() === code; })[0];
      return json_({ ok: true, first: String(kid[1]).split(' ')[0], age: kid[2], items: items,
        score: sc ? { a: sc[2], b: sc[3], c: sc[4], total: sc[5], grade: sc[6] } : null });
    }
    return json_({ ok: true, service: 'waqf-e-nau-jaiza' });
  } catch (err) { return json_({ ok: false, error: String(err) }); }
}

function doPost(e) { // JSON come testo semplice (nessun preflight CORS)
  var lock = LockService.getScriptLock(); lock.waitLock(20000);
  try {
    var d = JSON.parse(e.postData.contents);
    if (d.token !== token_()) return json_({ ok: false, error: 'token' });
    var ss = SpreadsheetApp.getActive(), now = new Date();
    var code = String(d.code).toUpperCase();
    var kid = rows_(SH.kids).filter(function (r) { return String(r[0]).toUpperCase() === code; })[0];
    if (!kid) return json_({ ok: false, error: 'codice sconosciuto' });
    var log = ss.getSheetByName(SH.log), st = ss.getSheetByName(SH.state);
    var map = {}; // chiave -> riga nel foglio Stato
    rows_(SH.state).forEach(function (r, i) { map[r[0]] = i + 2; });
    (d.items || []).forEach(function (it) {
      log.appendRow([now, code, d.teacher || '', it.sec, it.id, it.label, it.s, it.note || '']);
      var key = code + '|' + it.id, row = [key, code, it.id, it.sec, it.label, it.s, now];
      if (map[key]) st.getRange(map[key], 1, 1, 7).setValues([row]); else { st.appendRow(row); map[key] = st.getLastRow(); }
    });
    var sc = d.score || {}, total = Math.round((sc.a || 0) + (sc.b || 0) + (sc.c || 0));
    var sh = ss.getSheetByName(SH.score), data = rows_(SH.score), line = -1;
    data.forEach(function (r, i) { if (String(r[0]).toUpperCase() === code) line = i + 2; });
    var out = [code, kid[1], sc.a || 0, sc.b || 0, sc.c || 0, total, grade_(total), d.teacher || '', now];
    if (line > 0) sh.getRange(line, 1, 1, 9).setValues([out]); else sh.appendRow(out);
    return json_({ ok: true, total: total, grade: grade_(total) });
  } catch (err) { return json_({ ok: false, error: String(err) }); }
  finally { lock.releaseLock(); }
}
