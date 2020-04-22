import App from "next/app";
import config from "../auth_config.json"
import { Auth0Provider } from "use-auth0-hooks";

/**
 * Create a page which wraps the Auth0 provider.
 */
export default class Root extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <Auth0Provider
        domain={config.domain}
        client_id={config.clientId}
        redirect_uri={process.env.URL || config.redirectUri}
      >
        <Component {...pageProps} />
      </Auth0Provider>
    );
  }
}
