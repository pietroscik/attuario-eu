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
        <h3>Parte 1: Tavole di mortalità e valori attuariali</h3>
        <p>
          La teoria attuariale è la base matematica per la valutazione di contratti
          assicurativi e previdenziali. Questa prima parte introduce tavole di mortalità,
          probabilità di sopravvivenza, funzioni di commutazione e valori attuariali
          fondamentali.
        </p>
        <h4>📊 Tavole di mortalità</h4>
        <p>Le tavole di mortalità rappresentano la distribuzione della durata della vita in una popolazione ipotetica.</p>
        <h5>Simboli principali</h5>
        <ul className="list">
          <li>
            <InlineCode>{'l_x'}</InlineCode>: numero di sopravviventi all’età <InlineCode>{'x'}</InlineCode>
          </li>
          <li>
            <InlineCode>{'q_x'}</InlineCode>: probabilità di morte tra età <InlineCode>{'x'}</InlineCode> e <InlineCode>{'x + 1'}</InlineCode>
          </li>
          <li>
            <InlineCode>{'p_x = 1 - q_x'}</InlineCode>: probabilità di sopravvivenza
          </li>
        </ul>
        <h5>Relazioni</h5>
        <FormulaBlock>
{`l_{x+1} = l_x \cdot p_x    ,    d_x = l_x \cdot q_x`}
        </FormulaBlock>
        <h4>📉 Forza di mortalità</h4>
        <p>La forza istantanea di mortalità \( \mu(x) \) rappresenta il tasso istantaneo di decesso:</p>
        <FormulaBlock>
{`mu(x) = - \\frac{d}{dx} \\ln(\\ell(x))`}
        </FormulaBlock>
        <p>e in forma integrale:</p>
        <FormulaBlock>
{`\\ell(x) = \\ell(0) \\cdot \\exp\\left(- \\int_0^x mu(t)\\, dt\\right)`}
        </FormulaBlock>
        <h4>💸 Valori attuariali fondamentali</h4>
        <ol className="list">
          <li>
            <strong>Capitale assicurativo temporaneo.</strong> Pagamento di 1 unità in caso di morte entro <InlineCode>{'n'}</InlineCode> anni.
            <FormulaBlock>
{`A_x^{(n)} = \\sum_{k=0}^{n-1} v^{k+1} \\cdot {}_k p_x \\cdot q_{x+k}`}
            </FormulaBlock>
          </li>
          <li>
            <strong>Rendita temporanea annua.</strong> Rendita pagata fino a <InlineCode>{'n'}</InlineCode> anni.
            <FormulaBlock>
{`a_{\\overline{n}|x} = \\sum_{k=1}^{n} v^k \\cdot {}_k p_x`}
            </FormulaBlock>
            <p>
              con <InlineCode>{'v = 1 / (1 + i)'}</InlineCode>.
            </p>
          </li>
        </ol>
        <h4>🔄 Funzioni di commutazione</h4>
        <p>Definizioni utili per semplificare i calcoli:</p>
        <ul className="list">
          <li>
            <InlineCode>{'D_x = l_x * v^x'}</InlineCode>
          </li>
          <li>
            <InlineCode>{'N_x = sum_{k=x}^{infty} D_k'}</InlineCode>
          </li>
          <li>
            <InlineCode>{'S_x = sum_{k=x}^{infty} N_k'}</InlineCode>
          </li>
        </ul>
        <h4>💰 Premi attuariali</h4>
        <ul className="list">
          <li>
            <strong>Premio puro unico</strong>
            <FormulaBlock>
{`P = A_x`}
            </FormulaBlock>
          </li>
          <li>
            <strong>Premio annuo costante per n anni</strong>
            <FormulaBlock>
{`P = \\frac{A_x}{a_{\\overline{n}|x}}`}
            </FormulaBlock>
          </li>
        </ul>
        <h4>🧠 Esempio pratico</h4>
        <p>
          Dati: età <InlineCode>{'x = 30'}</InlineCode>, durata <InlineCode>{'n = 10'}</InlineCode>, <InlineCode>{'q_{30} = 0.0012'}</InlineCode>, tasso <InlineCode>{'i = 2%'}</InlineCode>.
        </p>
        <p>
          <InlineCode>{'v = 1 / (1 + 0.02) = 0.98039'}</InlineCode> e
          <InlineCode>{'a_bar_{10|30} ≈ sum_{k=1}^{10} 0.98039^k * p_{30}^{(k)}'}</InlineCode>.
        </p>
      </section>

      <section className="section">
        <h3>Parte 2: Riserve, bilancio tecnico e modelli multi-stato</h3>
        <h4>🧾 Riserve attuariali</h4>
        <p>
          Le riserve sono gli accantonamenti che un’impresa assicurativa deve costituire per
          far fronte agli impegni futuri verso gli assicurati.
        </p>
        <h5>1. Riserva matematica prospettica</h5>
        <FormulaBlock>
{`V_t = A_{x+t} - P \\cdot a_{\\overline{n-t}|x+t}`}
        </FormulaBlock>
        <h5>2. Riserva retrospettiva</h5>
        <FormulaBlock>
{`V_t = P \\cdot s_{\\overline{t}|x} - \\text{prestazioni già erogate attualizzate}`}
        </FormulaBlock>
        <h5>Equazione ricorrente</h5>
        <FormulaBlock>
{`V_{t+1} = (V_t + P) \\cdot (1 + i) - B_{t+1} \\cdot q_{x+t}`}
        </FormulaBlock>
        <h4>📊 Bilancio tecnico attuariale</h4>
        <p>Il bilancio proietta entrate, uscite, rendimento tecnico e variazione delle riserve.</p>
        <FormulaBlock>
{`Entrate + Rendimento = Uscite + \\Delta Riserve`}
        </FormulaBlock>
        <h4>🔁 Modelli multi-stato</h4>
        <p>Stati possibili: <InlineCode>{'S'}</InlineCode> (sano), <InlineCode>{'I'}</InlineCode> (invalido), <InlineCode>{'D'}</InlineCode> (deceduto).</p>
        <FormulaBlock>
{`P(t) = \\begin{bmatrix} P_{SS}(t) & P_{SI}(t) & P_{SD}(t) \\cr 0 & P_{II}(t) & P_{ID}(t) \\cr 0 & 0 & 1 \\end{bmatrix}`}
        </FormulaBlock>
        <h4>📘 Esempio pratico: Riserva prospettica</h4>
        <p>
          Dati: <InlineCode>{'x = 40'}</InlineCode>, <InlineCode>{'n = 20'}</InlineCode>, premio annuo <InlineCode>{'P = 450'}</InlineCode>,
          capitale <InlineCode>{'B = 10.000'}</InlineCode>, <InlineCode>{'i = 2%'}</InlineCode>, <InlineCode>{'q_{40} = 0.002'}</InlineCode>.
        </p>
        <FormulaBlock>
{`A_{40}^{(20)} = \\sum_{k=0}^{19} v^{k+1} \\cdot {}_k p_{40} \\cdot q_{40+k}`}
        </FormulaBlock>
        <FormulaBlock>
{`a_{\\overline{20}|40} = \\sum_{k=1}^{20} v^k \\cdot {}_k p_{40}`}
        </FormulaBlock>
        <FormulaBlock>
{`V_0 = B \\cdot A_{40}^{(20)} - P \\cdot a_{\\overline{20}|40}`}
        </FormulaBlock>
      </section>

      <section className="section">
        <h2>📖 Sezione 2 – Finanza attuariale</h2>
        <h3>Parte 3: Tassi, rendite, ALM e derivati assicurativi</h3>
        <p>
          La finanza attuariale integra concetti finanziari con strumenti assicurativi per
          modellare i flussi futuri e le garanzie contrattuali.
        </p>
        <h4>📈 Tassi d’interesse</h4>
        <ul className="list">
          <li><strong>Nominale (j):</strong> con capitalizzazione <InlineCode>{'m'}</InlineCode>-esima.</li>
          <li>
            <strong>Tasso effettivo (i):</strong> <InlineCode>{'i = (1 + j / m)^m - 1'}</InlineCode>.
          </li>
          <li>
            <strong>Tasso continuo (δ):</strong> <InlineCode>{'δ = ln(1 + i)'}</InlineCode> e <InlineCode>{'v = e^{-δ}'}</InlineCode>.
          </li>
        </ul>
        <p>Attualizzazione: <InlineCode>{'v = 1 / (1 + i)'}</InlineCode>, <InlineCode>{'PV = C * v^t'}</InlineCode>.</p>
        <h4>💸 Rendite</h4>
        <ul className="list">
          <li>
            <strong>Rendita posticipata temporanea</strong>
            <FormulaBlock>
{`a_{\\overline{n}} = \\frac{1 - v^n}{i}`}
            </FormulaBlock>
          </li>
          <li>
            <strong>Rendita perpetua</strong>
            <FormulaBlock>
{`a_{\\infty} = \\frac{1}{i}`}
            </FormulaBlock>
          </li>
          <li>
            <strong>Rendita anticipata</strong>
            <FormulaBlock>
{`\\ddot{a}_{\\overline{n}} = a_{\\overline{n}} \\cdot (1 + i)`}
            </FormulaBlock>
          </li>
          <li>
            <strong>Rendita frazionata (m rate/anno)</strong>
            <FormulaBlock>
{`a_{\\overline{n}}^{(m)} = \\frac{1 - v^n}{i^{(m)}},    i^{(m)} = m[(1 + i)^{1/m} - 1]`}
            </FormulaBlock>
          </li>
        </ul>
        <h4>🧠 Modelli stocastici sui tassi</h4>
        <ul className="list">
          <li>
            <strong>Vasicek</strong>
            <FormulaBlock>
{`dr_t = a(b - r_t) dt + \\sigma dW_t`}
            </FormulaBlock>
          </li>
          <li>
            <strong>Cox-Ingersoll-Ross (CIR)</strong>
            <FormulaBlock>
{`dr_t = a(b - r_t) dt + \\sigma\\sqrt{r_t} dW_t`}
            </FormulaBlock>
          </li>
        </ul>
        <p>Applicazioni: pricing di garanzie, simulazioni e Asset Liability Management (ALM).</p>
        <h4>📊 ALM – Asset Liability Management</h4>
        <p>Obiettivo: allineare il portafoglio attivo con le obbligazioni verso i passivi.</p>
        <ul className="list">
          <li><strong>Matching:</strong> selezionare attivi con flussi coerenti con i passivi.</li>
          <li><strong>Immunizzazione:</strong> minimizzare l’impatto delle variazioni di tasso.</li>
        </ul>
        <p>
          Misure chiave: durata di Macaulay
          <InlineCode>{'D = (Σ t · PV_t) / (Σ PV_t)'}</InlineCode> e convessità.
        </p>
        <h4>⚙️ Derivati assicurativi</h4>
        <ul className="list">
          <li>GAO – Guaranteed Annuity Options.</li>
          <li>GMxB – garanzie minime sui benefici.</li>
          <li>Total Return Swaps su attivi a supporto delle riserve.</li>
        </ul>
        <p>
          La valutazione combina modelli Black-Scholes con dinamiche stocastiche di longevità e tassi.
        </p>
        <h4>💻 Esempio pratico</h4>
        <p>Rendita di €1.000 annui per 10 anni con <InlineCode>{'i = 3%'}</InlineCode>.</p>
        <FormulaBlock>
{`a_{\\overline{10}} = \\frac{1 - (1.03)^{-10}}{0.03} ≈ 8.5302`}
        </FormulaBlock>
      </section>

      <section className="section">
        <h2>📖 Sezione 3 – Normativa e regolamentazione</h2>
        <h3>Parte 4: IFRS 17, Solvency II e normativa attuariale</h3>
        <p>
          Il contesto normativo stabilisce i criteri per misurare passività, capitale, informativa
          e vigilanza sulle compagnie assicurative.
        </p>
        <h4>📘 IFRS 17 – Contratti assicurativi</h4>
        <p>Struttura della passività:</p>
        <ul className="list">
          <li>BEL – Best Estimate Liability.</li>
          <li>RA – Risk Adjustment.</li>
          <li>CSM – Contractual Service Margin.</li>
        </ul>
        <FormulaBlock>
{`Liability = BEL + RA + CSM`}
        </FormulaBlock>
        <p>Approcci: GMM, PAA, VFA. Modalità di transizione: completo, modificato, fair value.</p>
        <h4>🧮 Solvency II – Adeguatezza patrimoniale</h4>
        <ul className="list">
          <li>SCR – Solvency Capital Requirement (confidenza 99.5%).</li>
          <li>MCR – Minimum Capital Requirement.</li>
          <li>Technical Provisions = BEL + Risk Margin.</li>
        </ul>
        <FormulaBlock>
{`RM = CoC \\cdot \\sum_{t=1}^T \\frac{SCR_t}{(1 + r)^t}`}
        </FormulaBlock>
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
                <td>Contabile / informativa</td>
                <td>Regolamentare / solvibilità</td>
              </tr>
              <tr>
                <td>Margine</td>
                <td>CSM (differito)</td>
                <td>Risk Margin (esplicito)</td>
              </tr>
              <tr>
                <td>Scope</td>
                <td>Contratti assicurativi</td>
                <td>Tutti i rischi / passività</td>
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
            <FormulaBlock>
{`P = A_{40}^{(10)} \\cdot 100.000`}
            </FormulaBlock>
          </li>
          <li>
            <strong>Esercizio 2 – Riserva prospettica a t = 5.</strong>
            <FormulaBlock>
{`V_5 = A_{45}^{(5)} \\cdot 100.000 - P \\cdot a_{\\overline{5}|45}`}
            </FormulaBlock>
          </li>
          <li>
            <strong>Esercizio 3 – Tasso implicito di rendita.</strong>
            <FormulaBlock>
{`\\frac{1 - (1 + i)^{-10}}{i} = 8.5302    \\Rightarrow    i ≈ 0.03`}
            </FormulaBlock>
          </li>
          <li>
            <strong>Esercizio 4 – Bilancio tecnico.</strong> Contributi €1.200.000, prestazioni €900.000, riserve iniziali €5.000.000, rendimento 2%.
            <p>
              Entrate totali = 1.200.000 + 0.02 × 5.000.000 = 1.300.000. Uscite = 900.000. Variazione = 400.000.
            </p>
          </li>
          <li>
            <strong>Esercizio 5 – Riscatto.</strong> Riscatto a t = 5 per €4.000, premio iniziale €5.000.
            <FormulaBlock>
{`(1 + i)^5 = 1.25    \\Rightarrow    i ≈ 0.0456`}
            </FormulaBlock>
          </li>
        </ol>
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
        <p>Funzioni utili: <InlineCode>{'=NPV'}</InlineCode>, <InlineCode>{'=IRR'}</InlineCode>, attualizzazione con <InlineCode>{'1/(1+i)^n'}</InlineCode>.</p>
        <p>
          Template suggerito con colonne: Età, <InlineCode>{'q_x'}</InlineCode>, <InlineCode>{'l_x'}</InlineCode>, <InlineCode>{'d_x'}</InlineCode>,
          <InlineCode>{'p_x'}</InlineCode>, <InlineCode>{'v^t'}</InlineCode>, <InlineCode>{'v^t * p_x'}</InlineCode>.
        </p>
        <h4>📐 R</h4>
        <p>Pacchetti utili: <InlineCode>{'lifecontingencies'}</InlineCode>, <InlineCode>{'actuar'}</InlineCode>.</p>
        <p>
          Esempio: <InlineCode>{'Axt(soa08, x = 40, n = 10, i = 0.02)'}</InlineCode>.
        </p>
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
    n = len(qx_list)
    premi = P * sum(v**(k + 1) for k in range(n))
    prestazioni = sum(v**(k + 1) * qx_list[k] * 100000 for k in range(n))
    return prestazioni - premi
`}
        </pre>
      </section>

      <section className="section">
        <h2>📖 Sezione 6 – Glossario attuariale</h2>
        <h3>Parte 7: Termini tecnici, definizioni e formule</h3>
        <ul className="list glossary-list">
          <li>
            <strong>Aₓ⁽ⁿ⁾:</strong> capitale assicurativo temporaneo
          </li>
          <li>
            <strong>BEL:</strong> best estimate liability
          </li>
          <li>
            <strong>Convessità, Durata:</strong> misure di sensibilità dei flussi finanziari
          </li>
          <li>
            <strong>Forza di mortalità (μ(x)):</strong> intensità di decesso istantanea
          </li>
          <li>
            <strong>lₓ, qₓ, pₓ:</strong> grandezze base delle tavole di mortalità
          </li>
          <li>
            <strong>Premio puro:</strong> valore atteso della prestazione assicurativa
          </li>
          <li>
            <strong>Riserva:</strong> accantonamento tecnico
          </li>
          <li>
            <strong>SCR:</strong> Solvency Capital Requirement
          </li>
          <li>
            <strong>Tasso tecnico:</strong> tasso di attualizzazione utilizzato nei calcoli
          </li>
          <li>
            <strong>v:</strong> fattore di attualizzazione
          </li>
        </ul>
      </section>

      <section className="section">
        <h2>📖 Sezione 7 – Percorso formativo attuario</h2>
        <h3>Parte 8: Studi, esame di Stato, carriera</h3>
        <h4>🎓 Formazione</h4>
        <ul className="list">
          <li>Laurea triennale in materie quantitative.</li>
          <li>Laurea magistrale in scienze attuariali o statistica attuariale.</li>
        </ul>
        <h4>🧪 Esame di Stato</h4>
        <ul className="list">
          <li>Prova scritta 1: matematica attuariale, finanza, statistica.</li>
          <li>Prova scritta 2: bilancio tecnico, riserve, normativa.</li>
          <li>Prova orale interdisciplinare con deontologia professionale.</li>
        </ul>
        <h4>🏛️ Iscrizione all’Albo</h4>
        <p>Sezione A (attuario) gestita dal Consiglio Nazionale degli Attuari (CNA).</p>
        <h4>💼 Carriera</h4>
        <p>Settori: assicurazioni, previdenza, consulenza, risk management, vigilanza.</p>
        <p>Ruoli: pricing, reserving, valuation, ALM, attuario incaricato.</p>
        <h4>🧾 Formazione continua (ECM)</h4>
        <p>Obbligatoria: 60 crediti triennali con corsi online, seminari e master.</p>
      </section>

      <section className="section">
        <h2>📖 Sezione 8 – News, risorse &amp; link utili</h2>
        <p>
          Inserisci aggiornamenti normativi, modifiche regolamentari, eventi e convegni
          attuariali, oltre a pubblicazioni e studi recenti.
        </p>
        <p>Link consigliati:</p>
        <ul className="list">
          <li>Ordine degli Attuari.</li>
          <li>EIOPA.</li>
          <li>SOA Mortality Tables.</li>
          <li>Actuview.</li>
        </ul>
      </section>

      <section className="section">
        <h2>📖 Sezione 9 – Bibliografia e risorse</h2>
        <ul className="list">
          <li>Bowers, Gerber, Hickman, Jones, Nesbitt – <em>Actuarial Mathematics</em>.</li>
          <li>Baxter &amp; Rennie – <em>Financial Calculus</em>.</li>
          <li>Documenti EIOPA e IFRS.</li>
          <li>Manuali e paper accademici disponibili in open access.</li>
          <li>Corsi universitari e dispense.</li>
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
