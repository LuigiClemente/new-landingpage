import React from "react";
import Image from 'next/image';


interface InfiniteLoopSliderProps {
    children: React.ReactNode;
    duration: number;
    reverse?: boolean;
  }
  
  interface TagProps {
    text: string;
  }
  
  interface ScrollProps {
    items: string[];
  }


  
const COLORS: string[] = ['#bbf7d0', '#99f6e4', '#bfdbfe', '#ddd6fe', '#f5d0fe', '#fed7aa', '#fee2e2'];
const TAGS: string[] = ['HTML', 'CSS', 'JavaScript', 'Typescript', 'Tailwind', 'React', 'Next.js', 'Gatsby', 'UI/UX', 'SVG', 'animation', 'webdev'];
const DURATION: number = 12000;

const random = (min: number, max: number): number => Math.floor(Math.random() * (max - min)) + min;
const shuffle = (arr: any[]): any[] => [...arr].sort(() => 0.5 - Math.random());

const InfiniteLoopSlider: React.FC<InfiniteLoopSliderProps> = ({ children, duration, reverse = false }) => {
    return (
        <div className='loop-slider' style={{
            '--duration': `${duration}ms`,
            '--direction': reverse ? 'reverse' : 'normal'
        } as React.CSSProperties}>
            <div className='inner gap-6'>
                {children}
            </div>
        </div>
    );
};

const Tag: React.FC<TagProps> = ({ text }) => (
    <div className='tag'><span>#</span> {text}</div>
);

export const Scroll: React.FC<ScrollProps> = ({ items }) => {
    return (
        <div className='tag-list'>
            <InfiniteLoopSlider duration={DURATION} >
                {items.map((tag, index) => (
                    <React.Fragment key={index}>
                        <Image alt={`Tag ${tag}`} style={{ borderRadius: '10px' }} src={tag} width={340} height={400} />
                    </React.Fragment>
                ))}
            </InfiniteLoopSlider>
            <div className='fade' />
        </div>
    );
};
