const PLATFORM_URL = "https://experts.snorkel-ai.com/";
const FAQ_URL = "https://tinyurl.com/snorkelexpertFAQ";

function GuideImage({ src, alt }) {
  return (
    <figure className="guide-figure">
      <img
        src={`${import.meta.env.BASE_URL}images/${src}`}
        alt={alt}
        className="guide-img"
      />
    </figure>
  );
}

function PlatformAccessSection() {
  return (
    <>
      <section className="section">
        <h2>Welcome to Snorkel!</h2>
        <div className="section-body">
          <p>
            We are happy to have you aboard. This document will guide you through
            the necessary steps to start contributing to our projects. Any
            additional questions can be answered in our{" "}
            <a href={FAQ_URL} target="_blank" rel="noopener noreferrer">
              FAQ
            </a>
            .
          </p>
        </div>
      </section>

      <section className="section">
        <h2>Platform Navigation &amp; Functionality</h2>
        <div className="section-body">
          <p>
            Sign into our platform —{" "}
            <a href={PLATFORM_URL} target="_blank" rel="noopener noreferrer">
              Snorkel Expert Platform
            </a>
            . You will see this landing page;{" "}
            <mark className="guide-mark">
              sign in with the email address where you received your project
              invite
            </mark>
            .
          </p>
          <GuideImage
            src="platform-signin.png"
            alt="Snorkel Expert Platform sign-in page with Google, Okta SSO, and email options"
          />
        </div>
      </section>

      <section className="section">
        <h2>First-time User Sign-In</h2>
        <div className="section-body">
          <p>
            Once you&apos;re added to your first project in the Snorkel Expert
            Platform, you will{" "}
            <strong>
              receive an email with your login credentials and a temporary
              password
            </strong>
            .
          </p>
          <p>
            The temporary password will be a string of characters that may
            include punctuation marks at the end — you will need to include all
            letters, numbers, punctuation, and special characters in the
            password.
          </p>
          <p>You will be asked to change your password once you login.</p>
          <p className="callout callout-warn">
            If you don&apos;t receive a temporary password, contact the support
            team.
          </p>
        </div>
      </section>

      <section className="section">
        <h2>Start Collaborating</h2>
        <div className="section-body">
          <p>
            Once you are logged in you will see our home screen; here you will
            see three options per project.
          </p>
          <p className="callout callout-warn">
            At the start of every project you will only be enabled to do the{" "}
            <strong>SUBMISSION</strong> task.
          </p>
          <GuideImage
            src="platform-home-projects.png"
            alt="My projects home screen for Project Copperhead_Production showing Review, Adjudication, and Submission tasks"
          />
        </div>
      </section>
    </>
  );
}

function SlackSection() {
  return (
    <>
      <section className="section">
        <h2>Slack</h2>
        <div className="section-body">
          <p>
            We use Slack as our main communication tool. You can use Slack on
            your browser or download the app.
          </p>
          <p className="callout callout-warn">
            If this is your first time using Slack or working with Snorkel, you
            will receive an invitation to join the workspace — please check your
            email.
          </p>

          <div className="info-box">
            <h3>Accept the invite to Snorkel Expert Contributors</h3>
            <p>
              Once you&apos;re added to your first project in the Snorkel Expert
              Platform, you will receive an email with your login credentials and
              a temporary password.
            </p>
            <p>
              The temporary password will be a string of characters that may
              include punctuation marks at the end — you will need to include all
              letters, numbers, punctuation, and special characters in the
              password.
            </p>
            <p>You will be asked to change your password once you login.</p>
          </div>

          <ol className="numbered-steps">
            <li>
              Once you are assigned to the project you will be added to the{" "}
              <mark className="guide-mark">#copperhead-ec-announcements</mark>{" "}
              channel. On this channel we will share updates, feedback, and
              general project announcements.
            </li>
          </ol>
        </div>
      </section>

      <section className="section">
        <h2>Project Canvas &amp; Resources</h2>
        <div className="section-body">
          <p>
            Once added to the Slack channel it&apos;s important to navigate to
            our{" "}
            <mark className="guide-mark">Copperhead channel canvas</mark>. There
            you will find everything to start your project onboarding.
          </p>
          <GuideImage
            src="slack-copperhead-channels.png"
            alt="Slack sidebar showing Copperhead announcement and helpdesk channels"
          />
        </div>
      </section>

      <section className="section">
        <h2>Slack Code of Conduct</h2>
        <div className="section-body">
          <p>
            It is important to the Snorkel team that our Slack channels remain a
            comfortable and welcoming environment for communication between
            Expert Contributors (ECs) and Snorkelers. The channels are intended
            to provide an accessible way for ECs to receive updates, ask
            questions, raise concerns, and collaborate with other experts and
            the Snorkel team.
          </p>
          <p>To maintain that environment, we are dedicated to the following:</p>
          <ul className="plain-list">
            <li>
              We will maintain respectful and professional relations with
              Snorkel staff and other ECs.
            </li>
            <li>
              Any threats against Snorkel staff and/or other ECs will not be
              tolerated.
            </li>
            <li>
              Use of profane and/or obscene comments will not be tolerated.
            </li>
          </ul>
          <p>
            The purpose of the Code of Conduct is not to prevent ECs from
            voicing dissatisfaction; if an EC feels something is wrong we
            encourage them to report it. We ask that ECs do so in a manner
            aligned with the ethos for this community &amp; that promotes a
            productive dialogue amongst peers and/or Snorkel.
          </p>
          <p>
            If violations of this code of conduct occur, we will address the
            initial violation with the EC privately.
          </p>
          <p>
            <em>
              If the violations persist, Snorkel will take action up to and
              including revoking an EC&apos;s Slack access or offboarding them
              from further Snorkel work. ECs will still be able to communicate
              with Snorkel staff via email.
            </em>
          </p>
          <p>
            Thank you all for continuing to participate in polite and
            constructive conversations on Slack. We truly appreciate your
            contributions to both the project and to our EC community!
          </p>
        </div>
      </section>
    </>
  );
}

export function GettingStartedSection({ focus = "all" }) {
  const showAccess = focus === "all" || focus === "access";
  const showSlack = focus === "all" || focus === "slack";

  return (
    <div className="workflow-content">
      {showAccess ? <PlatformAccessSection /> : null}
      {showSlack ? <SlackSection /> : null}
    </div>
  );
}
