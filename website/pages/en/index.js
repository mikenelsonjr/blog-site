/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');

const MarkdownBlock = CompLibrary.MarkdownBlock; /* Used to read markdown */
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

class HomeSplash extends React.Component {
  render() {
    const {siteConfig, language = ''} = this.props;
    const {baseUrl, docsUrl} = siteConfig;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
    const langPart = `${language ? `${language}/` : ''}`;
    const docUrl = doc => `${baseUrl}${docsPart}${langPart}${doc}`;

    const SplashContainer = props => (
      <div className="homeContainer">
        <div className="homeSplashFade">
          <div className="wrapper homeWrapper">{props.children}</div>
        </div>
      </div>
    );

    const Logo = props => (
      <div className="projectLogo">
        <img src={props.img_src} alt="Project Logo" />
      </div>
    );

    const ProjectTitle = () => (
      <h2 className="projectTitle">
        {siteConfig.title}
        <small>{siteConfig.tagline}</small>
      </h2>
    );

    const PromoSection = props => (
      <div className="section promoSection">
        <div className="promoRow">
          <div className="pluginRowBlock">{props.children}</div>
        </div>
      </div>
    );

    const Button = props => (
      <div className="pluginWrapper buttonWrapper">
        <a className="button" href={props.href} target={props.target}>
          {props.children}
        </a>
      </div>
    );

    return (
      <SplashContainer>
        <Logo img_src={`${baseUrl}img/undraw_monitor.svg`} />
        <div className="inner">
          <ProjectTitle siteConfig={siteConfig} />
          <PromoSection>
            {/* <Button href="#try">Try It Out</Button>
            <Button href={docUrl('doc1.html')}>Example Link</Button>
            <Button href={docUrl('doc2.html')}>Example Link 2</Button> */}
          </PromoSection>
        </div>
      </SplashContainer>
    );
  }
}

class Index extends React.Component {
  render() {
    const {config: siteConfig, language = ''} = this.props;
    const {baseUrl} = siteConfig;

    const Block = props => (
      <Container
        padding={['bottom', 'top']}
        id={props.id}
        background={props.background}>
        <GridBlock
          align="center"
          contents={props.children}
          layout={props.layout}
        />
      </Container>
    );

    const Welcome = () => (
        <Block id="overview" background="light">
        {[
          {
            content:
              'The journey to Modern Management is not always simple or easy. ' +
              'The tools documented on this site help ease the transition to a Modern method of ' +
              'delivering Endpoint services',
            image: `${baseUrl}img/undraw_master_plan_95wa.svg`,
            imageAlign: 'left',
            title: 'Overview',
          },
        ]}
      </Block>
    )

    const Tools = () => (
      <Block layout="fourColumn">
        {[
          {
            content: 'The Workload Migration Tool helps move Profiles, Apps, & Baselines ' +
            'to new Workspace ONE UEM Tenants. Additionally, quickly deploy workloads that have been saved/backed up' +
            'to new tenants in a matter of moments'+
            '<br/><br/>' + `[Read the Docs](${baseUrl}docs/workload-migration/workload-mig-env-setup)` +
            '<br/>' + `[Download Tool](https://flings.vmware.com/workspace-one-uem-workload-migration-tool)`,
            image: `${baseUrl}img/undraw_moving_forward_lhhd.svg`,
            imageAlign: 'top',
            title: 'Workspace ONE UEM Workload Migration Tool',
          },
          {
            content: 'VMware Policy Enforcer is used to enforce local MDM policy on a Windows 10 Endpoint. ' +
            'Policy Enforcer will detect policy drift and automatically reapply the policy setting to the MDM configuration value.' +
            '<br/><br/>' + `[Read the Docs](${baseUrl}docs/policy-enforcer/policy-enforcer)` +
            '<br/>' + `[Download Tool](https://flings.vmware.com/policy-enforcer)`,
            image: `${baseUrl}img/undraw_sync4_xlc6.svg`,
            imageAlign: 'top',
            title: 'VMware Policy Enforcer',
          },
          // {
          //   content: 'Supply Drop is a packaging tool that can quickly package scripts and content ' +
          //   'so that they can be delivered as an App to Windows 10 Endpoints via Workspace ONE UEM.' + 
          //   '<br/><br/>' + `[Read the Docs](${baseUrl}docs/workload-migration/workload-mig-env-setup)` +
          //   '<br/>' + `[Download Tool](https://flings.vmware.com/workspace-one-uem-workload-migration-tool)`,
          //   image: `${baseUrl}img/undraw_drone_delivery_5vrm.svg`,
          //   imageAlign: 'top',
          //   title: 'VMware Supply Drop',
          // },
        ]}   
      </Block>
    )

    // const TryOut = () => (
    //   <Block id="try">
    //     {[
    //       {
    //         content:
    //           'To make your landing page more attractive, use illustrations! Check out ' +
    //           '[**unDraw**](https://undraw.co/) which provides you with customizable illustrations which are free to use. ' +
    //           'The illustrations you see on this page are from unDraw.',
    //         image: `${baseUrl}img/undraw_code_review.svg`,
    //         imageAlign: 'left',
    //         title: 'Wonderful SVG Illustrations',
    //       },
    //     ]}
    //   </Block>
    // );

    return (
      <div>
        <HomeSplash siteConfig={siteConfig} language={language} />
        <div className="mainContainer">
          <Welcome />
          <Tools />
          {/* <MigrationTool />
          <SupplyDrop /> */}
        </div>
      </div>
    );
  }
}

module.exports = Index;
