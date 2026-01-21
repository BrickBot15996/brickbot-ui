import React from 'react';
import { CiLink, CiStar } from 'react-icons/ci';
import { VscLinkExternal } from 'react-icons/vsc';

type LinkCardProps = {
  title?: string;
  displayLink?: string;
  icon?: React.ReactElement<{
    className?: string;
  }>;
  highlighted?: boolean;
  className?: string;
  style?: React.CSSProperties;
};

export function LinkCard({
  title = 'Link Card Title',
  displayLink = 'link.com/page',
  icon,
  highlighted = false,
  className = 'w-full h-auto',
  style = {},
}: LinkCardProps) {
  const styledIcon = icon ? (
    React.cloneElement(icon, {
      className: icon.props.className + ' mr-auto',
    })
  ) : highlighted ? (
    <CiStar className="h-(--icon-size) w-(--icon-size) fill-(--text) group-active:fill-(--primary-bg) mr-auto transition-colors duration-200" />
  ) : (
    <CiLink className="h-(--icon-size) w-(--icon-size) fill-(--text) rotate-115 mr-auto transition-colors duration-200" />
  );
  return (
    <button
      className={
        `transition-colors duration-200 cursor-pointer group overflow-hidden relative` +
        ' ' +
        (highlighted
          ? 'bg-(--primary)'
          : 'bg-(--border) hover:bg-(--border-light) active:bg-(--border-light)') +
        ' ' +
        className
      }
      style={{ ...style }}
    >
      <div
        className={
          `h-auto w-auto absolute inset-[0.125rem] group-hover:inset-[0.205rem] transition-[inset, colors] duration-200` +
          ' ' +
          (highlighted
            ? 'bg-(--primary-bg) group-hover:bg-(--primary-bg-light) group-active:bg-(--primary)'
            : 'bg-(--bg) group-hover:bg-(--bg-light) group-active:bg-(--border-light)')
        }
      />
      <div
        className={`h-auto w-full p-[1rem] flex flex-row items-center justify-center gap-[1rem] relative`}
      >
        <div
          className={
            `absolute left-[-0.375rem] top-auto bottom-auto h-[100%] w-[0.9rem] group-hover:w-[1.05rem] rotate-3 transition-[width, colors] duration-200` +
            ' ' +
            (highlighted
              ? 'bg-(--primary)'
              : 'bg-(--border) group-hover:bg-(--border-light) group-active:bg-(--border-light)')
          }
        />
        {styledIcon}
        <div className="flex flex-col mr-auto w-full">
          <p
            className={
              `text-left text-xs text-(--text) font-semibold transition-colors duration-200 ` +
              (highlighted ? 'group-active:text-(--primary-bg)' : '')
            }
          >
            {title}
          </p>
          <p
            className={
              `text-left text-xs transition-colors duration-200 font-regular ` +
              (highlighted
                ? 'text-(--primary) group-active:text-(--primary-bg)'
                : 'text-(--text-alternate) group-active:text-(--text)')
            }
          >
            {displayLink}
          </p>
        </div>
        <VscLinkExternal
          className={
            `p-[0.2rem] h-(--icon-size) w-(--icon-size) transition-colors duration-200 ml-auto` +
            ' ' +
            (highlighted
              ? 'fill-(--primary) group-active:fill-(--primary-bg)'
              : 'fill-(--text)')
          }
        />
      </div>
    </button>
  );
}
