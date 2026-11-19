# Come mettere il sito Waqf-e-Nau su alislam.it (WordPress)

Prima fate vedere la versione online per l'approvazione; poi:

1. **Pagine → Aggiungi nuova**, titolo «Waqf-e-Nau Italia 2026».
2. Aggiungete un blocco **HTML personalizzato**.
3. Aprite `wordpress/waqfe-nau-embed.html` in questo repository, cliccate **Raw**, copiate tutto e incollate nel blocco.
4. **Anteprima**, poi **Pubblica**. Gli stili sono isolati (`.wn`), non toccano il resto del sito.

**Alternativa senza copiare:** blocco HTML personalizzato con
`<iframe src="https://ataulwasihtariq.github.io/waqfe-nau/" style="width:100%;height:2600px;border:0" title="Waqf-e-Nau"></iframe>`

Se il vostro ruolo non permette l'HTML personalizzato, chiedete all'amministratore di incollare il blocco.
Il blocco include programma, quiz e link ai PDF pubblici su GitHub Pages. Nell’anteprima, verificate che WordPress consenta gli script e che i pulsanti e i PDF si aprano. Se gli script vengono rimossi, usate l’iframe.
