import React from 'react';

import MenuItem from '../menu-item/menu-item.component';
import './directory.styles.scss';
import Sections from './directory.data';

class Directory extends React.Component {
    constructor() {
        super();
        this.state = {
            sections: Sections,
        }
    }

    render() {
        return (
            <div className="directory-menu">
                {
                    this.state.sections.map(({ id, ...secProps }) => (
                        <MenuItem key={id} {...secProps} />
                    ))
                }
            </div>
        )
    }
}

export default Directory;