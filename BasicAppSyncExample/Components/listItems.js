import React, { Component } from 'react'
import { SimpleList } from 'packlist-components'

export default class ListItems extends Component {
  render () {
    return (
      <SimpleList
        value={this.props.allItems && this.props.allItems.map(item => item.name) || []}
      />
    )
  }
}
