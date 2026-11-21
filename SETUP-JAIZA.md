# Jaiza 2026 – registro digitale (guida di attivazione, ~10 minuti)

**Come funziona**
- Gli insegnanti aprono `…/waqfe-nau/jaiza/` sul telefono, scelgono il bambino e toccano *Non ancora / In parte / Sa* per ogni voce. Il punteggio (A 70 · B 25 · C 5) si calcola da solo.
- «Salva bambino» manda i dati al **foglio Google privato** «Waqf-e-Nau Jaiza 2026 – Registro (PRIVATO)» (cartella *Waqf-e-Nau 2026 – Nisab e Jaiza*). Senza rete i dati restano sul telefono e partono dopo.
- Le famiglie aprono `…/waqfe-nau/famiglia/`, inseriscono **codice + PIN** e vedono solo il proprio figlio: cosa sa, cosa deve imparare.
- Nomi, PIN e valutazioni stanno **solo nel foglio**. GitHub contiene solo il programma (nessun dato personale).

**Attivazione (una volta)**
1. Aprire il foglio Registro → **Estensioni → Apps Script**.
2. Cancellare il contenuto e incollare `apps-script/Code.gs` di questo repository. Salvare.
3. Scegliere la funzione `setup` → **Esegui** → concedere i permessi (account proprio). Aprire *Visualizza → Log*: compare il **codice insegnanti** (10 caratteri).
4. **Distribuisci → Nuova distribuzione → App web** · Esegui come: *me* · Chi ha accesso: *Chiunque*. Copiare l'indirizzo che finisce con `/exec`.
5. In GitHub aprire `jaiza/config.js` e scrivere l'indirizzo: `window.WN_API = 'https://script.google.com/macros/s/…/exec';` poi *Commit*.
6. Agli insegnanti dare: il link `…/jaiza/` e il codice insegnanti. Alle famiglie: codice (WN-01…) e PIN dal foglio, scheda *Bambini*.

**Sicurezza e privacy**
- I PIN a 4 cifre proteggono da curiosi, non da attacchi: per questo la pagina famiglia mostra solo il **nome proprio** e lo stato delle voci, mai telefoni o cognomi.
- Se il codice insegnanti circola troppo: in Apps Script → *Impostazioni progetto → Proprietà dello script* cambiare `TEACHER_TOKEN`.
- Per i bambini non presenti nell'elenco: aggiungere una riga in *Bambini* (codice nuovo, età, gruppo, PIN).

**Il giorno dell'Ijtema – piano di riserva**
Se la rete o l'attivazione non sono pronte, l'app funziona lo stesso: «Invio → Scarica CSV» salva una copia sul telefono; poi si incolla nel foglio.

**Domande con risposta**
La scheda *Domande* contiene i quiz A/B/C dell'Ijtema: toccando una risposta compare quella corretta. Per Corano, preghiere, hadith e qaseeda ogni voce del modulo ha il link a Tilawat o alla pagina del Nisab italiano; le risposte testuali del Nisab non sono state copiate nell'app perché vanno verificate sul testo ufficiale.
