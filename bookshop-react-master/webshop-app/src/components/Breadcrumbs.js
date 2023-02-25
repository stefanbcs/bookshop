import { Link } from 'react-router-dom'
import useBreadcrumbs from 'use-react-router-breadcrumbs';

export default function Breadcrumbs() {
    const breadcrumbs = useBreadcrumbs();
    const lastBreadcrumbs = breadcrumbs.slice(-1);

    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    let formattedBreadcrumbs = lastBreadcrumbs[0].key.split('/');
    let formattedBreadcrumb = capitalizeFirstLetter(formattedBreadcrumbs[formattedBreadcrumbs.length -1].replaceAll('%20', ' '));


    const firstBreadcrumbs = breadcrumbs.slice(0, breadcrumbs.length - 1);

    return (
        <div className='container p-4'>
            {firstBreadcrumbs.map(({ breadcrumb }) => <span key={breadcrumb.key}><Link to={breadcrumb.key}>{breadcrumb}</Link> / </span>)}
            <span>{formattedBreadcrumb}</span>
        </div>
    )
}