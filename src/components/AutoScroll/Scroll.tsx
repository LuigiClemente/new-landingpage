import React from "react";
import Image from 'next/image'

const COLORS = ['#bbf7d0', '#99f6e4', '#bfdbfe', '#ddd6fe', '#f5d0fe', '#fed7aa', '#fee2e2'];
const TAGS = ['HTML', 'CSS', 'JavaScript', 'Typescript', 'Tailwind', 'React', 'Next.js', 'Gatsby', 'UI/UX', 'SVG', 'animation', 'webdev'];
const DURATION = 12000;
const ROWS = 1;
const TAGS_PER_ROW = 11;

const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;
const shuffle = (arr) => [...arr].sort(() => .5 - Math.random());

const InfiniteLoopSlider = ({ children, duration, reverse = false }) => {
    return (
        <div className='loop-slider' style={{
            '--duration': `${duration}ms`,
            '--direction': 'normal'
        }}>
            <div className='inner gap-6'>
                {children}
            </div>
        </div>
    );
};

const Tag = ({ text }) => (
    <div className='tag'><span>#</span> {text}</div>
);

export const Scroll = ({ items }) => {
    return (
        <div className='tag-list'>
        
                <InfiniteLoopSlider key={'cards'} duration={DURATION} >
                    {items.map(tag => (
                        <>
                        {console.log(tag,'tagtag')}
                        
                            <img  style={{borderRadius:'10px'}}src={tag} width={340} height={400} />
                            </>
                    ))}
                </InfiniteLoopSlider>

            <div className='fade' />
        </div>
    )
}