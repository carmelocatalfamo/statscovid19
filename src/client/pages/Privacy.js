import React, { Component } from 'react'
import styled from 'styled-components'
import { Helmet } from 'react-helmet'

import WithNavbar from '../components/WithNavbar'
import { Container } from '../styles/components'

export default class Privacy extends Component {
  render () {
    return (
      <WithNavbar>
        <Helmet>
          <title>Privacy Policy - Statistiche COVID-19 Italia</title>
        </Helmet>

        <StyledContainer>
          <Header>Privacy Policy di www.statscovid19.it</Header>
          <Text>Questa Applicazione raccoglie alcuni Dati Personali dei propri Utenti.</Text>
          <Divider />

          <Title>Titolare del Trattamento dei Dati</Title>
          <Text>
            Carmelo Catalfamo - Via Goffredo Mameli 51 Roma
            <br />
            <strong>Indirizzo email del Titolare:</strong> carmelo.catalfamo92@gmail.com
          </Text>
          <Divider />

          <Title>Tipologie di Dati raccolti</Title>
          <Text>Fra i Dati Personali raccolti da questa Applicazione, in modo autonomo o tramite terze parti, ci sono: Cookie; Dati di utilizzo.</Text>
          <Text>
            Dettagli completi su ciascuna tipologia di dati raccolti sono forniti nelle sezioni dedicate di questa privacy policy o mediante specifici testi informativi visualizzati prima della raccolta dei dati stessi.
            <br />
            I Dati Personali possono essere liberamente forniti dall'Utente o, nel caso di Dati di Utilizzo, raccolti automaticamente durante l'uso di questa Applicazione.
            <br />
            Se non diversamente specificato, tutti i Dati richiesti da questa Applicazione sono obbligatori. Se l’Utente rifiuta di comunicarli, potrebbe essere impossibile per questa Applicazione fornire il Servizio. Nei casi in cui questa Applicazione indichi alcuni Dati come facoltativi, gli Utenti sono liberi di astenersi dal comunicare tali Dati, senza che ciò abbia alcuna conseguenza sulla disponibilità del Servizio o sulla sua operatività.
            <br />
            Gli Utenti che dovessero avere dubbi su quali Dati siano obbligatori, sono incoraggiati a contattare il Titolare.
            <br />
            L’eventuale utilizzo di Cookie - o di altri strumenti di tracciamento - da parte di questa Applicazione o dei titolari dei servizi terzi utilizzati da questa Applicazione, ove non diversamente precisato, ha la finalità di fornire il Servizio richiesto dall'Utente, oltre alle ulteriori finalità descritte nel presente documento e nella Cookie Policy, se disponibile.
          </Text>
          <Text>L'Utente si assume la responsabilità dei Dati Personali di terzi ottenuti, pubblicati o condivisi mediante questa Applicazione e garantisce di avere il diritto di comunicarli o diffonderli, liberando il Titolare da qualsiasi responsabilità verso terzi.</Text>
          <Divider />

          <Title>Modalità e luogo del trattamento dei Dati raccolti</Title>
          <Text>
            <strong>Modalità di trattamento</strong>
            <br />
            Il Titolare adotta le opportune misure di sicurezza volte ad impedire l’accesso, la divulgazione, la modifica o la distruzione non autorizzate dei Dati Personali.
            <br />
            Il trattamento viene effettuato mediante strumenti informatici e/o telematici, con modalità organizzative e con logiche strettamente correlate alle finalità indicate. Oltre al Titolare, in alcuni casi, potrebbero avere accesso ai Dati altri soggetti coinvolti nell’organizzazione di questa Applicazione (personale amministrativo, commerciale, marketing, legali, amministratori di sistema) ovvero soggetti esterni (come fornitori di servizi tecnici terzi, corrieri postali, hosting provider, società informatiche, agenzie di comunicazione) nominati anche, se necessario, Responsabili del Trattamento da parte del Titolare. L’elenco aggiornato dei Responsabili potrà sempre essere richiesto al Titolare del Trattamento.
          </Text>
          <Text>
            <strong>Base giuridica del trattamento</strong>
            <br />
            Il Titolare tratta Dati Personali relativi all’Utente in caso sussista una delle seguenti condizioni:
            <br />
            <ul>
              <li>l’Utente ha prestato il consenso per una o più finalità specifiche; Nota: in alcuni ordinamenti il Titolare può essere autorizzato a trattare Dati Personali senza che debba sussistere il consenso dell’Utente o un’altra delle basi giuridiche specificate di seguito, fino a quando l’Utente non si opponga (“opt-out”) a tale trattamento. Ciò non è tuttavia applicabile qualora il trattamento di Dati Personali sia regolato dalla legislazione europea in materia di protezione dei Dati Personali;</li>
              <li>il trattamento è necessario all'esecuzione di un contratto con l’Utente e/o all'esecuzione di misure precontrattuali;</li>
              <li>il trattamento è necessario per adempiere un obbligo legale al quale è soggetto il Titolare;</li>
              <li>il trattamento è necessario per l'esecuzione di un compito di interesse pubblico o per l'esercizio di pubblici poteri di cui è investito il Titolare;</li>
              <li>il trattamento è necessario per il perseguimento del legittimo interesse del Titolare o di terzi.</li>
            </ul>
            È comunque sempre possibile richiedere al Titolare di chiarire la concreta base giuridica di ciascun trattamento ed in particolare di specificare se il trattamento sia basato sulla legge, previsto da un contratto o necessario per concludere un contratto.
          </Text>
          <Text>
            <strong>Luogo</strong>
            <br />
            I Dati sono trattati presso le sedi operative del Titolare ed in ogni altro luogo in cui le parti coinvolte nel trattamento siano localizzate. Per ulteriori informazioni, contatta il Titolare.
          </Text>
          <Text>I Dati Personali dell’Utente potrebbero essere trasferiti in un paese diverso da quello in cui l’Utente si trova. Per ottenere ulteriori informazioni sul luogo del trattamento l’Utente può fare riferimento alla sezione relativa ai dettagli sul trattamento dei Dati Personali.</Text>
          <Text>L’Utente ha diritto a ottenere informazioni in merito alla base giuridica del trasferimento di Dati al di fuori dell’Unione Europea o ad un’organizzazione internazionale di diritto internazionale pubblico o costituita da due o più paesi, come ad esempio l’ONU, nonché in merito alle misure di sicurezza adottate dal Titolare per proteggere i Dati.</Text>
          <Text>L’Utente può verificare se abbia luogo uno dei trasferimenti appena descritti esaminando la sezione di questo documento relativa ai dettagli sul trattamento di Dati Personali o chiedere informazioni al Titolare contattandolo agli estremi riportati in apertura.</Text>

          <Text>
            <strong>Periodo di conservazione</strong>
            <br />
            I Dati sono trattati e conservati per il tempo richiesto dalle finalità per le quali sono stati raccolti.
          </Text>
          <Text>
            Pertanto:
            <br />
            <ul>
              <li>I Dati Personali raccolti per scopi collegati all’esecuzione di un contratto tra il Titolare e l’Utente saranno trattenuti sino a quando sia completata l’esecuzione di tale contratto.</li>
              <li>I Dati Personali raccolti per finalità riconducibili all’interesse legittimo del Titolare saranno trattenuti sino al soddisfacimento di tale interesse. L’Utente può ottenere ulteriori informazioni in merito all’interesse legittimo perseguito dal Titolare nelle relative sezioni di questo documento o contattando il Titolare.</li>
            </ul>
          </Text>
          <Text>Quando il trattamento è basato sul consenso dell’Utente, il Titolare può conservare i Dati Personali più a lungo sino a quando detto consenso non venga revocato. Inoltre, il Titolare potrebbe essere obbligato a conservare i Dati Personali per un periodo più lungo in ottemperanza ad un obbligo di legge o per ordine di un’autorità.</Text>
          <Text>Al termine del periodo di conservazione i Dati Personali saranno cancellati. Pertanto, allo spirare di tale termine il diritto di accesso, cancellazione, rettificazione ed il diritto alla portabilità dei Dati non potranno più essere esercitati.</Text>
          <Divider />

          <Title>Finalità del Trattamento dei Dati raccolti</Title>
          <Text>I Dati dell’Utente sono raccolti per consentire al Titolare di fornire il Servizio, adempiere agli obblighi di legge, rispondere a richieste o azioni esecutive, tutelare i propri diritti ed interessi (o quelli di Utenti o di terze parti), individuare eventuali attività dolose o fraudolente, nonché per le seguenti finalità: Statistica.</Text>
          <Text>Per ottenere informazioni dettagliate sulle finalità del trattamento e sui Dati Personali trattati per ciascuna finalità, l’Utente può fare riferimento alla sezione “Informazioni dettagliate sul trattamento dei Dati Personali”.</Text>
          <Divider />

          <Title>Dettagli sul trattamento dei Dati Personali</Title>
          <Text>I Dati Personali sono raccolti per le seguenti finalità ed utilizzando i seguenti servizi:</Text>
          <Text>
            <ul>
              <li>
                <strong>Statistica</strong>
                <br />
                I servizi contenuti nella presente sezione permettono al Titolare del Trattamento di monitorare e analizzare i dati di traffico e servono a tener traccia del comportamento dell’Utente.
                <br />
                <br />
                <strong>Google Analytics</strong>
                <br />
                <br />
                Google Analytics è un servizio di analisi web fornito da Google LLC oppure da Google Ireland Limited, a seconda della posizione in cui questa Applicazione viene utilizzata, (“Google”). Google utilizza i Dati Personali raccolti allo scopo di tracciare ed esaminare l’utilizzo di questa Applicazione, compilare report e condividerli con gli altri servizi sviluppati da Google.
                <br />
                Google potrebbe utilizzare i Dati Personali per contestualizzare e personalizzare gli annunci del proprio network pubblicitario.
                <br />
                <br />
                Dati Personali trattati: Cookie; Dati di utilizzo.
              </li>
            </ul>
          </Text>
          <Divider />

          <Title>Diritti dell’Utente</Title>
          <Text>Gli Utenti possono esercitare determinati diritti con riferimento ai Dati trattati dal Titolare.</Text>
          <Text>
            In particolare, l’Utente ha il diritto di:
            <br />
            <ul>
              <li><strong>revocare il consenso in ogni momento.</strong> L’Utente può revocare il consenso al trattamento dei propri Dati Personali precedentemente espresso.</li>
              <li><strong>opporsi al trattamento dei propri Dati.</strong> L’Utente può opporsi al trattamento dei propri Dati quando esso avviene su una base giuridica diversa dal consenso. Ulteriori dettagli sul diritto di opposizione sono indicati nella sezione sottostante.</li>
              <li><strong>accedere ai propri Dati.</strong> L’Utente ha diritto ad ottenere informazioni sui Dati trattati dal Titolare, su determinati aspetti del trattamento ed a ricevere una copia dei Dati trattati.</li>
              <li><strong>verificare e chiedere la rettificazione.</strong> L’Utente può verificare la correttezza dei propri Dati e richiederne l’aggiornamento o la correzione.</li>
              <li><strong>ottenere la limitazione del trattamento.</strong> Quando ricorrono determinate condizioni, l’Utente può richiedere la limitazione del trattamento dei propri Dati. In tal caso il Titolare non tratterà i Dati per alcun altro scopo se non la loro conservazione.</li>
              <li><strong>ottenere la cancellazione o rimozione dei propri Dati Personali.</strong> Quando ricorrono determinate condizioni, l’Utente può richiedere la cancellazione dei propri Dati da parte del Titolare.</li>
              <li><strong>ricevere i propri Dati o farli trasferire ad altro titolare.</strong> L’Utente ha diritto di ricevere i propri Dati in formato strutturato, di uso comune e leggibile da dispositivo automatico e, ove tecnicamente fattibile, di ottenerne il trasferimento senza ostacoli ad un altro titolare. Questa disposizione è applicabile quando i Dati sono trattati con strumenti automatizzati ed il trattamento è basato sul consenso dell’Utente, su un contratto di cui l’Utente è parte o su misure contrattuali ad esso connesse.</li>
              <li><strong>proporre reclamo.</strong> L’Utente può proporre un reclamo all’autorità di controllo della protezione dei dati personali competente o agire in sede giudiziale.</li>
            </ul>
          </Text>
          <Text>
            <strong>Dettagli sul diritto di opposizione</strong>
            <br />
            Quando i Dati Personali sono trattati nell’interesse pubblico, nell’esercizio di pubblici poteri di cui è investito il Titolare oppure per perseguire un interesse legittimo del Titolare, gli Utenti hanno diritto ad opporsi al trattamento per motivi connessi alla loro situazione particolare.
            <br />
            <br />
            Si fa presente agli Utenti che, ove i loro Dati fossero trattati con finalità di marketing diretto, possono opporsi al trattamento senza fornire alcuna motivazione. Per scoprire se il Titolare tratti dati con finalità di marketing diretto gli Utenti possono fare riferimento alle rispettive sezioni di questo documento.
          </Text>
          <Text>
            <strong>Come esercitare i diritti</strong>
            <br />
            Per esercitare i diritti dell’Utente, gli Utenti possono indirizzare una richiesta agli estremi di contatto del Titolare indicati in questo documento. Le richieste sono depositate a titolo gratuito e evase dal Titolare nel più breve tempo possibile, in ogni caso entro un mese.
          </Text>
          <Divider />

          <Title>Ulteriori informazioni sul trattamento</Title>
          <Text>
            <strong>Difesa in giudizio</strong>
            <br />
            I Dati Personali dell’Utente possono essere utilizzati da parte del Titolare in giudizio o nelle fasi preparatorie alla sua eventuale instaurazione per la difesa da abusi nell'utilizzo di questa Applicazione o dei Servizi connessi da parte dell’Utente.
            <br />
            L’Utente dichiara di essere consapevole che il Titolare potrebbe essere obbligato a rivelare i Dati per ordine delle autorità pubbliche.
          </Text>
          <Text>
            <strong>Informative specifiche</strong>
            <br />
            Su richiesta dell’Utente, in aggiunta alle informazioni contenute in questa privacy policy, questa Applicazione potrebbe fornire all'Utente delle informative aggiuntive e contestuali riguardanti Servizi specifici, o la raccolta ed il trattamento di Dati Personali.
          </Text>
          <Text>
            <strong>Log di sistema e manutenzione</strong>
            <br />
            Per necessità legate al funzionamento ed alla manutenzione, questa Applicazione e gli eventuali servizi terzi da essa utilizzati potrebbero raccogliere log di sistema, ossia file che registrano le interazioni e che possono contenere anche Dati Personali, quali l’indirizzo IP Utente.
          </Text>
          <Text>
            <strong>Informazioni non contenute in questa policy</strong>
            <br />
            Ulteriori informazioni in relazione al trattamento dei Dati Personali potranno essere richieste in qualsiasi momento al Titolare del Trattamento utilizzando gli estremi di contatto.
          </Text>
          <Text>
            <strong>Risposta alle richieste “Do Not Track”</strong>
            <br />
            Questa Applicazione non supporta le richieste “Do Not Track”.
            <br />
            Per scoprire se gli eventuali servizi di terze parti utilizzati le supportino, l'Utente è invitato a consultare le rispettive privacy policy.
          </Text>
          <Text>
            <strong>Modifiche a questa privacy policy</strong>
            <br />
            Il Titolare del Trattamento si riserva il diritto di apportare modifiche alla presente privacy policy in qualunque momento notificandolo agli Utenti su questa pagina e, se possibile, su questa Applicazione nonché, qualora tecnicamente e legalmente fattibile, inviando una notifica agli Utenti attraverso uno degli estremi di contatto di cui è in possesso. Si prega dunque di consultare con frequenza questa pagina, facendo riferimento alla data di ultima modifica indicata in fondo.
            <br />
            Qualora le modifiche interessino trattamenti la cui base giuridica è il consenso, il Titolare provvederà a raccogliere nuovamente il consenso dell’Utente, se necessario.
          </Text>
          <br />
          <br />
        </StyledContainer>
      </WithNavbar>
    )
  }
}

const Text = styled.div`
  font-family: ${props => props.theme.fonts.text.family};
  color: ${props => props.theme.fonts.text.color};
  font-size: 19px;
  line-height: 29px;
  margin-bottom: 15px;
`

const Header = styled.h2`
  font-family: ${props => props.theme.fonts.title.family};
  font-weight: ${props => props.theme.fonts.title.weight.bold};
  color: ${props => props.theme.fonts.title.color};
  font-size: 42px;
  margin-top: 70px;
  line-height: 52px;
`

const Title = styled.h3`
  font-family: ${props => props.theme.fonts.title.family};
  font-weight: ${props => props.theme.fonts.title.weight.bold};
  color: ${props => props.theme.fonts.title.color};
  text-transform: uppercase;
  font-size: 22px;
  line-height: 32px;
`

const StyledContainer = styled(Container)`
  ul {
    list-style: disc;
    padding-left: 25px;
  }
`

const Divider = styled.div`
  border-bottom: 1px dotted ${props => props.theme.fonts.text.color};
  margin: 50px 0px;
`
