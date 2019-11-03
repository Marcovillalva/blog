import React, { Component } from 'react';
import BarNav from '../Layout/Barnav';
import TemplateContacto from '../Templates/TemplateContacto';

class PageContacto extends Component {
    render() {
        return (
            <div>
                <BarNav/>
                <TemplateContacto/>
            </div>
        );
    }
}

export default PageContacto;