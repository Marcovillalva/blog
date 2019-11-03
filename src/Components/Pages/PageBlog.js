import React, { Component } from 'react';
import BarNav from '../Layout/Barnav';
import TemplateBlog from '../Templates/TemplateBlog';

class PageBlog extends Component {
    render() {
        return (
            <div>
                <BarNav/>
                <TemplateBlog/>
            </div>
        );
    }
}

export default PageBlog;