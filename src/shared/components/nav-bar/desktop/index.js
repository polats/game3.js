import React, { Component } from 'react'
import classNames from 'classnames'
import { injectIntl } from 'react-intl'
import PropTypes from 'prop-types'

import Link from 'shared/components/link'
import styles from './index.module.css'

class DesktopNavBar extends Component {
  render () {
    const { isSticky, intl: { messages } } = this.props
    const navBarClasses = classNames(styles.container,
      {
        [styles.sticky]: isSticky
      })

    return (
      <div className={ navBarClasses } >
        <div className={ styles.navBarMenu }>
          <div className={ styles.link } onClick={ this.handleGettingStartedClick }> { messages.navBar.item1 } </div>
          <Link>
            { messages.navBar.item2 }
          </Link>
          <Link>
            { messages.navBar.item3 }
          </Link>
          <Link>
            { messages.navBar.item4 }
          </Link>
          <Link>
            { messages.navBar.item5 }
          </Link>
          <div className={ styles.starContainer }>
            <iframe title="desktop-github-stars" src="https://ghbtns.com/github-btn.html?user=polats&repo=game3.js&type=star&count=true" frameBorder="0" scrolling="0" sandbox="allow-scripts" />
          </div>
        </div>
      </div>
    )
  }

  handleGettingStartedClick = () => {
    this.props.onGoToGettingStarted()
  }
}

DesktopNavBar.propTypes = {
  isSticky: PropTypes.bool.isRequired,
  intl: PropTypes.object.isRequired,
  onGoToGettingStarted: PropTypes.func
}

export default injectIntl(DesktopNavBar)
