import React, { Component } from 'react'
import { loadGetInitialProps } from 'next/dist/lib/utils'
import ReactGA from 'react-ga'

export default () => Composed =>
  class extends Component {
    static getInitialProps(ctx) {
      return loadGetInitialProps(Composed, ctx)
    }

    componentDidMount() {
      console.log('object')
      ReactGA.initialize('UA-91668255-1')
      ReactGA.pageview(window.location.pathname)
    }

    render() {
      return <Composed {...this.props} />
    }
  }
