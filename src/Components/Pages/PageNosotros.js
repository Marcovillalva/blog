import React, { Component } from 'react';
import BarNav from '../Layout/Barnav';
import TemplateNosotros from '../Templates/TemplateNosotros';

class PageNosotros extends Component {
    render() {
        return (
            <div>
                <BarNav/>
                <TemplateNosotros/>
            </div>
        );
    }
}

export default PageNosotros;