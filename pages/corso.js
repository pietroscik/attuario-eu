import Layout from "../components/Layout";

function FormulaBlock({ children }) {
  return (
    <pre className="formula-block">
      <code>{children}</code>
    </pre>
  );
}

function InlineCode({ children }) {
  return <code className="inline-code">{children}</code>;
}

export default function CorsoAttuarialeCompleto() {
  return (
    <Layout
      title="Corso attuariale completo"
      eyebrow="Percorso guidato"
      intro="Versione unica in formato web del corso completo di attuario.eu: teoria, riserve, finanza, normativa, esercizi, strumenti e percorsi professionali."
      metaDescription="Corso attuariale completo con tavole di mortalità, valori attuariali, riserve, ALM, normativa, esercizi pratici e strumenti operativi."
      width="narrow"
    >
      <section className="section">
        <h2>📖 Sezione 1 – Teoria attuariale</h2>
        <p className="small-print">
          Ogni sezione di questo corso è collegata alle altre pagine di attuario.eu: puoi passare alla sezione{" "}
          <InlineCode>Teoria</InlineCode>, ai <InlineCode>Case study</InlineCode> o ai{" "}
          <InlineCode>Calcolatori</InlineCode> per vedere gli stessi concetti applicati nella pratica.
        </p>
        <h3>Parte 1: Tavole di mortalità e valori attuariali</h3>
        <p>
          La teoria attuariale fornisce il linguaggio matematico per valutare contratti
          assicurativi e previdenziali. Si parte dalle tavole di mortalità, dalle funzioni di
          sopravvivenza e dalle funzioni di commutazione che permettono di ricondurre il valore
          atteso delle prestazioni assicurate.
        </p>
        <h4>📊 Tavole di mortalità</h4>
        <p>Ogni tavola descrive l’evoluzione di una coorte ipotetica di assicurati.</p>
        <h5>Simboli principali</h5>
        <ul className="list">
          <li>
            <InlineCode>{'lₓ'}</InlineCode>: numero di sopravviventi all’età <InlineCode>{'x'}</InlineCode>
          </li>
          <li>
            <InlineCode>{'qₓ'}</InlineCode>: probabilità di decesso tra <InlineCode>{'x'}</InlineCode> e <InlineCode>{'x + 1'}</InlineCode>
          </li>
          <li>
            <InlineCode>{'pₓ = 1 - qₓ'}</InlineCode>: probabilità di sopravvivenza
          </li>
        </ul>
        <h5>Relazioni chiave</h5>
        <FormulaBlock>l(x + 1) = l(x) · pₓ │ dₓ = l(x) · qₓ</FormulaBlock>
        <h4>📉 Forza di mortalità</h4>
        <p>La forza istantanea di mortalità misura l’intensità di decesso a età continua.</p>
        <FormulaBlock>μ(x) = − d/dx [ln ℓ(x)]</FormulaBlock>
        <p>In forma integrale:</p>
        <FormulaBlock>ℓ(x) = ℓ(0) · exp(−∫₀ˣ μ(t) dt)</FormulaBlock>
        <h4>💸 Valori attuariali fondamentali</h4>
        <ol className="list">
          <li>
            <strong>Capitale assicurativo temporaneo.</strong> Prestazione unitaria in caso di decesso entro
            <InlineCode>{'n'}</InlineCode> anni.
            <FormulaBlock>{"Aₓ⁽ⁿ⁾ = Σ_{k=0}^{n-1} v^(k+1) · pₓ(k) · q_{x+k}"}</FormulaBlock>
          </li>
          <li>
            <strong>Rendita temporanea annua.</strong> Pagamenti ricorrenti per <InlineCode>{'n'}</InlineCode> anni.
            <FormulaBlock>{"a̅ₙ|ₓ = Σ_{k=1}^{n} v^k · pₓ(k)"}</FormulaBlock>
          </li>
        </ol>
        <h4>🔄 Funzioni di commutazione</h4>
        <p>Le funzioni di commutazione semplificano i calcoli di premio e riserva.</p>
        <ul className="list">
          <li>
            <InlineCode>{'Dₓ = lₓ · vˣ'}</InlineCode>
          </li>
          <li>
            <InlineCode>{'Nₓ = Σ_{k=x}^{∞} D_k'}</InlineCode>
          </li>
          <li>
            <InlineCode>{'Sₓ = Σ_{k=x}^{∞} N_k'}</InlineCode>
          </li>
        </ul>
        <h4>💰 Premi attuariali</h4>
        <ul className="list">
          <li>
            <strong>Premio puro unico:</strong>
            <FormulaBlock>P = Aₓ</FormulaBlock>
          </li>
          <li>
            <strong>Premio annuo costante per n anni:</strong>
            <FormulaBlock>P = Aₓ / a̅ₙ|ₓ</FormulaBlock>
          </li>
        </ul>
        <h4>🧠 Esempio pratico</h4>
        <p>
          Dati: <InlineCode>{'x = 30'}</InlineCode>, <InlineCode>{'n = 10'}</InlineCode>, <InlineCode>{'q₃₀ = 0,0012'}</InlineCode>,
          <InlineCode>{'i = 2%'}</InlineCode>.
        </p>
        <p>
          <InlineCode>{'v = 1 / (1 + 0,02) = 0,98039'}</InlineCode> e
          <InlineCode>{'a̅₁₀|₃₀ ≈ Σ_{k=1}^{10} 0,98039^k · p₃₀(k)'}</InlineCode>.
        </p>
      </section>

      <section className="section">
        <h3>Parte 2: Riserve, bilancio tecnico e modelli multi-stato</h3>
        <h4>🧾 Riserve attuariali</h4>
        <p>Le riserve rappresentano gli accantonamenti a garanzia degli impegni verso gli assicurati.</p>
        <h5>1. Riserva matematica prospettica</h5>
        <FormulaBlock>{"Vₜ = A_{x+t} − P · a̅ₙ₋ₜ|_{x+t}"}</FormulaBlock>
        <h5>2. Riserva retrospettiva</h5>
        <FormulaBlock>Vₜ = P · s̅ₜ|ₓ − prestazioni attualizzate</FormulaBlock>
        <h5>Equazione ricorrente</h5>
        <FormulaBlock>{"V_{t+1} = (Vₜ + P) · (1 + i) − B_{t+1} · q_{x+t}"}</FormulaBlock>
        <h4>📊 Bilancio tecnico attuariale</h4>
        <p>Il bilancio proietta entrate, rendimento tecnico e variazione delle riserve.</p>
        <FormulaBlock>Entrate + Rendimento = Uscite + ΔRiserve</FormulaBlock>
        <h4>🔁 Modelli multi-stato</h4>
        <p>
          Stati: <InlineCode>{'S'}</InlineCode> (sano), <InlineCode>{'I'}</InlineCode> (invalido),
          <InlineCode>{'D'}</InlineCode> (deceduto).
        </p>
        <FormulaBlock>P(t) = | P_SS  P_SI  P_SD ; 0  P_II  P_ID ; 0  0  1 |</FormulaBlock>
        <h4>📘 Esempio applicativo</h4>
        <p>
          Parametri: <InlineCode>{'x = 40'}</InlineCode>, <InlineCode>{'n = 20'}</InlineCode>,
          <InlineCode>{'P = 450'}</InlineCode>, <InlineCode>{'B = 10.000'}</InlineCode>, <InlineCode>{'i = 2%'}</InlineCode>.
        </p>
        <FormulaBlock>{"A₄₀⁽²⁰⁾ = Σ_{k=0}^{19} v^(k+1) · p₄₀(k) · q_{40+k}"}</FormulaBlock>
        <FormulaBlock>{"a̅₂₀|₄₀ = Σ_{k=1}^{20} v^k · p₄₀(k)"}</FormulaBlock>
        <FormulaBlock>V₀ = B · A₄₀⁽²⁰⁾ − P · a̅₂₀|₄₀</FormulaBlock>
      </section>

      <section className="section">
        <h2>📖 Sezione 2 – Finanza attuariale</h2>
        <h3>Parte 3: Tassi, rendite, ALM e derivati assicurativi</h3>
        <p>
          La finanza attuariale integra concetti di matematica finanziaria con la gestione delle
          passività assicurative.
        </p>
        <h4>📈 Tassi d’interesse</h4>
        <ul className="list">
          <li><strong>Nominale (j):</strong> capitalizzazione <InlineCode>{'m'}</InlineCode>-esima.</li>
          <li>
            <strong>Tasso effettivo (i):</strong> <InlineCode>{'i = (1 + j / m)^m − 1'}</InlineCode>
          </li>
          <li>
            <strong>Tasso continuo (δ):</strong> <InlineCode>{'δ = ln(1 + i)'}</InlineCode> con <InlineCode>{'v = e^{−δ}'}</InlineCode>
          </li>
        </ul>
        <p>
          Attualizzazione di un flusso: <InlineCode>{'v = 1 / (1 + i)'}</InlineCode>,
          <InlineCode>{'PV = C · v^t'}</InlineCode>.
        </p>
        <h4>💸 Rendite</h4>
        <ul className="list">
          <li>
            <strong>Posticipata temporanea:</strong>
            <FormulaBlock>a̅ₙ = (1 − vⁿ) / i</FormulaBlock>
          </li>
          <li>
            <strong>Perpetua:</strong>
            <FormulaBlock>a̅∞ = 1 / i</FormulaBlock>
          </li>
          <li>
            <strong>Anticipata:</strong>
            <FormulaBlock>ä̅ₙ = a̅ₙ · (1 + i)</FormulaBlock>
          </li>
          <li>
            <strong>Rendita frazionata (m rate/anno):</strong>
            <FormulaBlock>{"a̅ₙ^(m) = (1 − vⁿ) / i^(m) con i^(m) = m[(1 + i)^{1/m} − 1]"}</FormulaBlock>
          </li>
        </ul>
        <h4>🧠 Modelli stocastici sui tassi</h4>
        <ul className="list">
          <li>
            <strong>Vasicek:</strong>
            <FormulaBlock>drₜ = a(b − rₜ) dt + σ dWₜ</FormulaBlock>
          </li>
          <li>
            <strong>Cox–Ingersoll–Ross:</strong>
            <FormulaBlock>drₜ = a(b − rₜ) dt + σ√rₜ dWₜ</FormulaBlock>
          </li>
        </ul>
        <p>Utilizzi: pricing di garanzie, simulazioni stocastiche e Asset Liability Management.</p>
        <h4>📊 Asset Liability Management</h4>
        <p>Obiettivo: allineare attivi e passivi riducendo la volatilità del margine tecnico.</p>
        <ul className="list">
          <li><strong>Matching:</strong> selezionare attivi con flussi coerenti con i passivi.</li>
          <li><strong>Immunizzazione:</strong> minimizzare l’impatto delle variazioni di tasso.</li>
        </ul>
        <p>
          Indicatore chiave: durata di Macaulay <InlineCode>{'D = (Σ t · PV_t) / (Σ PV_t)'}</InlineCode> e relativa convessità.
        </p>
        <h4>⚙️ Derivati assicurativi</h4>
        <ul className="list">
          <li>Garanzie GAO e GMxB.</li>
          <li>Total Return Swap su portafogli a copertura delle riserve.</li>
        </ul>
        <p>La valutazione integra modelli di mercato e proiezioni di longevità.</p>
        <h4>💻 Esempio numerico</h4>
        <p>Rendita di €1.000 annui per 10 anni con <InlineCode>{'i = 3%'}</InlineCode>.</p>
        <FormulaBlock>{"a̅₁₀ = [1 − (1,03)^{-10}] / 0,03 ≈ 8,53"}</FormulaBlock>
      </section>

      <section className="section">
        <h2>📖 Sezione 3 – Normativa e regolamentazione</h2>
        <h3>Parte 4: IFRS 17, Solvency II e normativa attuariale</h3>
        <p>Il quadro normativo disciplina criteri valutativi, capitale richiesto e informativa verso il mercato.</p>
        <h4>📘 IFRS 17 – Contratti assicurativi</h4>
        <p>Struttura della passività:</p>
        <ul className="list">
          <li>BEL – Best Estimate Liability.</li>
          <li>RA – Risk Adjustment.</li>
          <li>CSM – Contractual Service Margin.</li>
        </ul>
        <FormulaBlock>Passività = BEL + RA + CSM</FormulaBlock>
        <p>Approcci: General Measurement Model, Premium Allocation Approach, Variable Fee Approach.</p>
        <h4>🧮 Solvency II – Adeguatezza patrimoniale</h4>
        <ul className="list">
          <li>SCR – Solvency Capital Requirement al 99,5%.</li>
          <li>MCR – Minimum Capital Requirement.</li>
          <li>Technical Provisions = BEL + Risk Margin.</li>
        </ul>
        <FormulaBlock>{"RM = CoC · Σ_{t=1}^{T} [SCRₜ / (1 + r)^t]"}</FormulaBlock>
        <h4>🧷 Confronto IFRS 17 vs Solvency II</h4>
        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>Aspetto</th>
                <th>IFRS 17</th>
                <th>Solvency II</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Finalità</td>
                <td>Bilancio e trasparenza</td>
                <td>Solidità patrimoniale</td>
              </tr>
              <tr>
                <td>Margine</td>
                <td>Contractual Service Margin</td>
                <td>Risk Margin esplicito</td>
              </tr>
              <tr>
                <td>Scope</td>
                <td>Contratti assicurativi</td>
                <td>Tutti i rischi e passività</td>
              </tr>
            </tbody>
          </table>
        </div>
        <h4>⚖️ Normativa italiana – IVASS</h4>
        <ul className="list">
          <li>Regolamento 22/2008 – Attuario incaricato.</li>
          <li>Provvedimento 114/2023 – Bilancio IFRS 17.</li>
          <li>Regolamento 50/2022 – Governance e ORSA.</li>
        </ul>
      </section>

      <section className="section">
        <h2>📖 Sezione 4 – Casi pratici ed esercizi</h2>
        <h3>Parte 5: Esempi numerici, esercizi spiegati e simulazioni</h3>
        <ol className="list">
          <li>
            <strong>Esercizio 1 – Premio puro.</strong> Età 40, capitale €100.000, durata 10 anni, tasso 2%.
            <FormulaBlock>P = A₄₀⁽¹⁰⁾ · 100.000</FormulaBlock>
          </li>
          <li>
            <strong>Esercizio 2 – Riserva prospettica.</strong>
            <FormulaBlock>V₅ = A₄₅⁽⁵⁾ · 100.000 − P · a̅₅|₄₅</FormulaBlock>
          </li>
          <li>
            <strong>Esercizio 3 – Tasso implicito di rendita.</strong>
            <FormulaBlock>{"[1 − (1 + i)^{-10}] / i = 8,53 ⇒ i ≈ 3%"}</FormulaBlock>
          </li>
          <li>
            <strong>Esercizio 4 – Bilancio tecnico.</strong> Contributi €1.200.000, prestazioni €900.000, riserve iniziali €5.000.000, rendimento 2%.
            <p>Entrate totali = 1.200.000 + 0,02 × 5.000.000 = 1.300.000. Uscite = 900.000. Variazione = +400.000.</p>
          </li>
          <li>
            <strong>Esercizio 5 – Riscatto.</strong> Valore di riscatto a t = 5 pari a €4.000 su premio €5.000.
            <FormulaBlock>(1 + i)^5 = 1,25 ⇒ i ≈ 4,56%</FormulaBlock>
          </li>
        </ol>
        <p className="small-print">
          Puoi confrontare i risultati di questi esercizi con i calcoli effettuati tramite i calcolatori online nella sezione{" "}
          <InlineCode>Strumenti &amp; calcolatori</InlineCode> del sito.
        </p>
      </section>

      <section className="section">
        <h2>📖 Sezione 5 – Strumenti &amp; codici attuariali</h2>
        <h3>Parte 6: Python, R, Excel e tool online</h3>
        <h4>🐍 Python</h4>
        <pre className="code-block">
{`def rendita_temporanea(n, i):
    v = 1 / (1 + i)
    return sum(v**k for k in range(1, n + 1))

def premio_puro(qx_list, i, capitale=100000):
    v = 1 / (1 + i)
    return capitale * sum(v**(k + 1) * qx for k, qx in enumerate(qx_list))
`}
        </pre>
        <h4>📊 Excel</h4>
        <p>Funzioni utili: <InlineCode>{'=NPV'}</InlineCode>, <InlineCode>{'=IRR'}</InlineCode>, formule di attualizzazione con <InlineCode>{'1/(1+i)^n'}</InlineCode>.</p>
        <p>Template consigliato con colonne: Età, <InlineCode>{'qₓ'}</InlineCode>, <InlineCode>{'lₓ'}</InlineCode>, <InlineCode>{'dₓ'}</InlineCode>, <InlineCode>{'pₓ'}</InlineCode>, <InlineCode>{'v^t'}</InlineCode>, <InlineCode>{'v^t · pₓ'}</InlineCode>.</p>
        <h4>📐 R</h4>
        <p>Pacchetti: <InlineCode>{'lifecontingencies'}</InlineCode>, <InlineCode>{'actuar'}</InlineCode>. Esempio: <InlineCode>{'Axt(soa08, x = 40, n = 10, i = 0.02)'}</InlineCode>.</p>
        <h4>🌐 Calcolatori online</h4>
        <ul className="list">
          <li>OpenActTexts Tools.</li>
          <li>Mortality Table Explorer.</li>
          <li>Excel Tools – Life Contingencies.</li>
          <li>Actuview (video e tutorial).</li>
        </ul>
        <h4>🧾 Esempio combinato – Riserva in Python</h4>
        <pre className="code-block">
{`def riserva_attuariale(P, qx_list, i):
    v = 1 / (1 + i)
    premi = P * sum(v**(k + 1) for k in range(len(qx_list)))
    prestazioni = sum(v**(k + 1) * qx_list[k] * 100000 for k in range(len(qx_list)))
    return prestazioni - premi
`}
        </pre>
        <p className="small-print">
          Nel sito, la sezione <InlineCode>Strumenti</InlineCode> e la pagina <InlineCode>Calcolatori</InlineCode> raccolgono esempi di codice,
          dataset e tool interattivi che seguono lo stesso impianto teorico di questo corso.
        </p>
      </section>

      <section className="section">
        <h2>📖 Sezione 6 – Glossario attuariale</h2>
        <h3>Parte 7: Termini tecnici, definizioni e formule</h3>
        <ul className="list glossary-list">
          <li><strong>Aₓ⁽ⁿ⁾:</strong> capitale assicurativo temporaneo</li>
          <li><strong>BEL:</strong> Best Estimate Liability</li>
          <li><strong>Convessità / Durata:</strong> sensibilità ai tassi di interesse</li>
          <li><strong>Forza di mortalità μ(x):</strong> intensità istantanea di decesso</li>
          <li><strong>lₓ, qₓ, pₓ:</strong> grandezze base delle tavole di mortalità</li>
          <li><strong>Premio puro:</strong> valore atteso della prestazione</li>
          <li><strong>Riserva:</strong> accantonamento tecnico</li>
          <li><strong>SCR:</strong> Solvency Capital Requirement</li>
          <li><strong>Tasso tecnico:</strong> tasso di attualizzazione utilizzato nei calcoli</li>
          <li><strong>v:</strong> fattore di attualizzazione</li>
        </ul>
        <p className="small-print">
          Il glossario completo, con ulteriori termini e collegamenti a paper e fonti istituzionali, è in preparazione nella sezione{" "}
          <InlineCode>Wiki attuariale</InlineCode> del sito.
        </p>
      </section>

      <section className="section">
        <h2>📖 Sezione 7 – Percorso formativo attuario</h2>
        <h3>Parte 8: Studi, esame di Stato, carriera</h3>
        <h4>🎓 Formazione</h4>
        <ul className="list">
          <li>Laurea triennale in discipline quantitative.</li>
          <li>Laurea magistrale in scienze attuariali o statistica attuariale.</li>
        </ul>
        <h4>🧪 Esame di Stato</h4>
        <ul className="list">
          <li>Prova scritta 1: matematica attuariale, finanza, statistica.</li>
          <li>Prova scritta 2: bilancio tecnico, riserve, normativa.</li>
          <li>Prova orale interdisciplinare con deontologia professionale.</li>
        </ul>
        <h4>🏛️ Iscrizione all’Albo</h4>
        <p>Sezione A dell’Albo gestita dal Consiglio Nazionale degli Attuari.</p>
        <h4>💼 Carriera</h4>
        <p>Ambiti: assicurazioni, previdenza, consulenza, risk management, vigilanza.</p>
        <p>Ruoli: pricing, reserving, valuation, ALM, attuario incaricato.</p>
        <h4>🧾 Formazione continua</h4>
        <p>Obbligo di 60 crediti formativi triennali tra corsi online, seminari e master.</p>
        <p className="small-print">
          Nella sezione <InlineCode>Attuari nel mondo reale</InlineCode> trovi una panoramica più estesa dei ruoli, delle competenze richieste e
          dei percorsi di carriera possibili in Italia e all&apos;estero.
        </p>
      </section>

      <section className="section">
        <h2>📖 Sezione 8 – News, risorse &amp; link utili</h2>
        <p>
          Aggiornamenti normativi, eventi, pubblicazioni specialistiche e occasioni di networking
          utili alla comunità attuariale.
        </p>
        <ul className="list">
          <li>Ordine degli Attuari.</li>
          <li>EIOPA.</li>
          <li>SOA Mortality Tables.</li>
          <li>Actuview.</li>
        </ul>
        <p className="small-print">
          Per un monitoraggio strutturato di novità regolamentari, ricerca e mercato del lavoro puoi consultare anche le sezioni{" "}
          <InlineCode>Notizie</InlineCode> e <InlineCode>Risorse</InlineCode> del sito.
        </p>
      </section>

      <section className="section">
        <h2>📖 Sezione 9 – Bibliografia e risorse</h2>
        <ul className="list">
          <li>Bowers, Gerber, Hickman, Jones, Nesbitt – <em>Actuarial Mathematics</em>.</li>
          <li>Baxter &amp; Rennie – <em>Financial Calculus</em>.</li>
          <li>Documentazione EIOPA, IASB e IVASS.</li>
          <li>Paper accademici open access e materiali universitari.</li>
        </ul>
      </section>

      <style jsx>{`
        .formula-block {
          background: rgba(30, 64, 175, 0.08);
          border-left: 4px solid #1d4ed8;
          border-radius: 12px;
          font-family: "Fira Code", "SFMono-Regular", Consolas, "Liberation Mono", Menlo, monospace;
          font-size: 0.95rem;
          margin: 16px 0;
          overflow-x: auto;
          padding: 12px 16px;
          white-space: pre-wrap;
        }

        .inline-code {
          background: rgba(148, 163, 184, 0.2);
          border-radius: 6px;
          font-family: "Fira Code", "SFMono-Regular", Consolas, "Liberation Mono", Menlo, monospace;
          padding: 0.1rem 0.35rem;
        }

        .code-block {
          background: #0f172a;
          border-radius: 12px;
          color: #f8fafc;
          font-family: "Fira Code", "SFMono-Regular", Consolas, "Liberation Mono", Menlo, monospace;
          font-size: 0.9rem;
          margin: 16px 0;
          overflow-x: auto;
          padding: 16px;
        }

        .table-wrapper {
          margin: 16px 0;
          overflow-x: auto;
        }

        table {
          border-collapse: collapse;
          min-width: 320px;
          width: 100%;
        }

        th,
        td {
          border: 1px solid rgba(148, 163, 184, 0.4);
          padding: 8px 12px;
          text-align: left;
        }

        thead {
          background: rgba(59, 130, 246, 0.12);
        }

        .glossary-list {
          columns: 1;
        }

        @media (min-width: 768px) {
          .glossary-list {
            columns: 2;
            column-gap: 2rem;
          }
        }
      `}</style>
    </Layout>
  );
}
