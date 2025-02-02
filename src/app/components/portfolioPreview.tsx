import React from 'react';
import Link from 'next/link';
import style from './portfolioPreview.module.css';
import {IProject} from '@/database/projectSchema'

export default function PortfolioPreview(props: IProject) {
    return (
    <div className={style.project}>
        <div>
            <h3>{props.title}</h3>
            <p>{props.date.toDateString()}</p>
            <p>{props.description}</p>
            <Link className="Read More" href={`portfolio/${props.slug}`}>Read More</Link>
      </div>
	</div>
    )
}