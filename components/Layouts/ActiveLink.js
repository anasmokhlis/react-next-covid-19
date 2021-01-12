import { useRouter } from 'next/router'
import PropTypes from 'prop-types'
import Link from 'next/link'
import React, { Children } from 'react'

const ActiveLink = ({ children, activeClassName, ...props }) => {
    const {pathname} = useRouter();
    const child = Children.only(children);
    const childClasssName = child.props.className || '';

    const className = pathname === props.href ? `${childClasssName} ${activeClassName}`.trim() : childClasssName;

    return(
        <Link {...props}>
            {React.cloneElement(child, {
                className: className || null,
            })}
        </Link>
    )

}

ActiveLink.propTypes = {
    activeClassName : PropTypes.string.isRequired,
}

export default ActiveLink;