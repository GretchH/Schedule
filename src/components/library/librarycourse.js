import React, { Component } from 'react';

import Icon from '../icon';

class LibraryCourse extends Component {
    render() {
        return (-
            <div className="library-course">
                <label className="library-course_title">Problem solving</label>
                { Icon('fas fa-check', 'library-course__icon') }
                {/* arrow component */}
                {/* action button component */}
                <div className="library-course_description">
                    <label>Course Description</label>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vitae urna pellentesque, accumsan arcu non, tincidunt ex. Nam at justo eget risus finibus malesuada.</p>
                    
                </div>
            </div>
        )
    }
}

export default LibraryCourse;