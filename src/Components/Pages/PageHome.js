import React, { Component } from 'react';
import BarNav from '../Layout/Barnav';
import TemplateHome from '../Templates/TemplateHome';

class PageHome extends Component {
    render() {
        return (
            <div>
                <BarNav/>
                <TemplateHome/>
            </div>
        );
    }
}

export default PageHome;