import React from 'react'

import './styles/BadgeNew.css'
import header from '../images/badge-header.svg'
import Navbar from '../components/Navbar'
import Badge from '../components/Badge'
import BadgeForm from '../components/BadgeForm'

class BadgeNew extends React.Component {
    render() {
        return (

            <div>
                <Navbar />
                <div className="BadgeNew__hero">
                    <img className="img-fluid" src={header} alt="" />
                </div>


                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <Badge
                                firstName="Felipe"
                                lastName="Jurado"
                                twitter="felipej9805"
                                jobTitle="SRE"
                                avatarUrl="https://s.gravatar.com/avatar/eef6e63767be8cd49add27c035589294?s=80">
                            </Badge>
                        </div>

                        <div className="col-6">
                            <BadgeForm>


                            </BadgeForm>
                        </div>
                    </div>
                </div>


            </div>
        )
    }
}

export default BadgeNew