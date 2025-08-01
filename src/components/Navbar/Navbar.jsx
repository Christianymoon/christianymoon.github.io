import React from 'react';
import { Link } from 'react-router';

export function Navbar(props) {

  return (
    <nav className="navbar w-full">
      <div className="flex flex-col md:flex-row md:items-center">
        <a className="navbar-brand md:ml-10" href="#">
          <svg className="main-svg" xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve" width="66.9208mm"
            height="8.1517mm" version="1.1"
            style={{
              shapeRendering: "geometricPrecision",
              textRendering: "geometricPrecision",
              imageRendering: "optimizeQuality",
              fillRule: "evenodd",
              clipRule: "evenodd"
            }}
            viewBox="0 0 6692.08 815.17" xmlnsXlink="http://www.w3.org/1999/xlink"
            xmlns:xodm="http://www.corel.com/coreldraw/odm/2003">
            <g id="Capa_x0020_1">
              <metadata id="CorelCorpID_0Corel-Layer" />
              <g id="_1566764992992">
                <g>
                  <polygon className="fil0" points="-0,0.77 407.2,815.17 488.36,673.17 151.68,0.77 " />
                  <path className="fil0"
                    d="M504.12 424.51c-32.58,-45.81 -47.85,-96.72 -47.85,-153.72 0,-74.32 26.48,-137.43 79.4,-191.39 52.94,-52.93 117.08,-79.4 191.4,-79.4l357.31 0 -70.24 121.15 -15.27 15.27 -271.8 0c-36.65,0 -68.21,13.22 -94.68,39.7 -27.48,26.46 -40.72,58.02 -40.72,94.67 0,37.67 13.24,70.24 40.72,96.71 26.47,26.47 58.03,39.7 94.68,39.7l121.13 -1.01 -236.16 408.21 -155.77 0 166.96 -292.16c-47.85,-19.35 -87.56,-51.92 -119.11,-97.73z" />
                </g>
                <path className="fil0"
                  d="M1447.83 577.77c14.54,6.36 30.28,9.69 46.93,9.69 16.65,0 32.39,-3.03 46.92,-9.38l-46.92 -31.19c-11.2,0 -21.5,-2.12 -31.49,-6.05 -9.68,-4.24 -18.16,-9.99 -25.43,-17.56 -7.56,-7.27 -13.32,-15.74 -17.56,-25.43 -4.23,-9.99 -6.35,-20.28 -6.35,-31.49 0,-11.2 2.12,-21.49 6.35,-31.48 4.24,-9.69 10,-18.17 17.26,-25.43 7.27,-7.57 15.74,-13.32 25.73,-17.56 9.69,-3.94 20.29,-6.05 31.49,-6.05 21.8,0 40.87,7.56 56.91,23.31l28.76 -28.16c-11.2,-11.2 -24.22,-19.98 -38.75,-26.34 -14.53,-6.35 -30.27,-9.38 -46.92,-9.38 -16.65,0 -32.39,3.33 -46.93,9.69 -14.83,6.35 -27.55,14.83 -38.75,26.03 -10.9,10.9 -19.67,23.62 -26.03,38.15 -6.36,14.83 -9.69,30.57 -9.69,47.22 0,16.35 3.33,31.79 9.69,46.63 6.36,14.83 15.13,27.55 26.03,38.75 11.2,10.9 23.92,19.67 38.75,26.03l0 0z" />
                <polygon id="_1" className="fil0"
                  points="1880.54,345.27 1880.54,446.08 1759.44,446.08 1719.18,486.65 1719.18,587.46 1759.44,587.46 1759.44,486.65 1880.54,486.65 1880.54,587.46 1920.8,587.46 1920.8,345.27 " />
                <path id="_2" className="fil0"
                  d="M2267.53 471.51c9.69,-13.62 14.23,-28.76 14.23,-45.71 0,-22.1 -7.87,-40.87 -23.61,-56.92 -15.75,-15.74 -34.82,-23.61 -56.92,-23.61l-106.26 0 20.89 36.02 4.54 4.55 80.83 0c10.9,0 20.29,3.93 28.16,11.8 8.17,7.87 12.11,17.26 12.11,28.16 0,11.2 -3.94,20.89 -12.11,28.76 -7.87,7.87 -17.26,11.8 -28.16,11.8l-36.02 -0.3 70.23 121.4 46.32 0 -49.65 -86.89c14.23,-5.75 26.04,-15.44 35.42,-29.06z" />
                <polygon id="_3" className="fil0"
                  points="2493.47,385.23 2453.21,345.27 2453.21,587.46 2453.21,587.46 2493.47,546.89 " />
                <path id="_4" className="fil0"
                  d="M2754.22 486.65c8.48,0 15.44,3.02 21.5,9.08 5.75,6.05 9.08,13.02 9.08,21.19 0,4.24 -0.91,8.18 -2.42,11.81 -1.52,3.93 -3.63,6.96 -6.36,9.69 -2.72,2.72 -6.05,4.84 -9.99,6.35 -3.63,1.52 -7.57,2.12 -11.81,2.12l0 40.57c19.68,0 36.33,-6.96 49.96,-20.59 13.92,-13.92 20.88,-30.57 20.88,-49.95 0,-19.37 -6.96,-36.02 -20.88,-49.95 -13.63,-13.62 -30.28,-20.59 -49.96,-20.59l-60.24 0c-8.78,0 -15.74,-3.02 -21.8,-9.08 -5.75,-6.05 -8.48,-13.02 -8.48,-21.49 0,-3.94 0.61,-7.87 2.12,-11.51 1.52,-3.63 3.64,-6.96 6.36,-9.69 3.03,-3.02 6.06,-5.14 9.99,-6.66 3.63,-1.51 7.57,-2.11 11.81,-2.11l0 -40.57c-19.68,0 -36.33,6.96 -49.95,20.89 -13.63,13.92 -20.59,30.27 -20.59,49.65 0,19.67 6.96,36.33 20.59,50.25 13.62,13.62 30.27,20.59 49.95,20.59l60.24 0z" />
                <polygon id="_5" className="fil0"
                  points="2994.39,345.27 2994.39,385.84 2994.39,587.46 3034.96,587.46 3034.96,385.84 3115.49,385.84 3115.49,345.27 " />
                <polygon id="_6" className="fil0"
                  points="3316.9,385.23 3276.64,345.27 3276.64,587.46 3276.64,587.46 3316.9,546.89 " />
                <path id="_7" className="fil0"
                  d="M3547.38 506.93l0 0 35.72 -71.14 35.42 71.14 45.41 0 -80.83 -161.66 -121.09 242.19 44.8 0 20.59 -40.57 19.98 -39.96zm136.54 40.27l-44.81 0 0 0 19.98 40.26 45.11 0 -20.28 -40.26z" />
                <polygon id="_8" className="fil0"
                  points="4007.94,345.27 4007.94,490.28 3846.88,345.27 3846.88,406.42 4048.2,587.46 4048.2,587.16 4048.2,586.85 4048.2,345.27 " />
                <polygon id="_9" className="fil0" points="4298.05,345.27 4419.15,587.46 4441.85,542.35 4343.16,345.27 " />
                <path id="_10" className="fil0"
                  d="M4605.12 584.13l0 3.33 161.36 0 0 -40.57 -121.1 0 -40.26 37.24zm0 -238.86l40.26 40.57 121.1 0 0 -40.57 -161.36 0zm0 101.11l0 40.27 40.26 0 121.1 0 0 -40.27 -121.1 0 -40.26 0z" />
                <path id="_11" className="fil0"
                  d="M5098.07 471.51c9.69,-13.62 14.23,-28.76 14.23,-45.71 0,-22.1 -7.87,-40.87 -23.61,-56.92 -15.75,-15.74 -34.82,-23.61 -56.92,-23.61l-106.26 0 20.89 36.02 4.54 4.55 80.83 0c10.9,0 20.29,3.93 28.16,11.8 8.17,7.87 12.11,17.26 12.11,28.16 0,11.2 -3.94,20.89 -12.11,28.76 -7.87,7.87 -17.26,11.8 -28.16,11.8l-36.02 -0.3 70.23 121.4 46.32 0 -49.65 -86.89c14.23,-5.75 26.04,-15.44 35.42,-29.06z" />
                <path id="_12" className="fil0"
                  d="M5438.45 539.93c-10.29,4.54 -21.49,6.96 -33.6,6.96 -22.1,0 -41.48,-7.57 -57.22,-23.31 -15.74,-15.74 -23.31,-35.12 -23.31,-57.22 0,-22.1 7.57,-41.17 23.31,-56.91 16.04,-16.05 35.12,-23.61 57.22,-23.61 22.4,0 41.17,7.87 56.91,23.61l29.06 -28.46c-11.2,-11.2 -24.22,-19.98 -38.75,-26.34 -14.83,-6.35 -30.57,-9.38 -47.22,-9.38 -33.61,0 -62.07,11.8 -85.38,35.72 -23.91,23.62 -35.72,52.07 -35.72,85.37 0,33.61 12.11,61.76 35.72,85.38 23.62,23.61 51.77,35.72 85.38,35.72 10.59,0 20.58,-1.21 30.27,-3.94 9.99,-2.42 19.07,-6.05 27.55,-10.89 8.78,-4.85 16.65,-10.6 23.92,-17.26 7.56,-6.66 13.92,-14.23 19.37,-22.4l-40.26 -13.32c-7.87,8.78 -16.96,15.44 -27.25,20.28zm-33.6 -53.28l60.85 0 40.26 -40.27 -101.11 0 0 40.27z" />
                <path id="_13" className="fil0"
                  d="M5777.01 506.93l0 0 35.72 -71.14 35.42 71.14 45.41 0 -80.83 -161.66 -121.09 242.19 44.8 0 20.59 -40.57 19.98 -39.96zm136.54 40.27l-44.81 0 0 0 19.98 40.26 45.11 0 -20.28 -40.26z" />
                <path id="_14" className="fil0"
                  d="M6249.07 471.51c9.69,-13.62 14.23,-28.76 14.23,-45.71 0,-22.1 -7.87,-40.87 -23.61,-56.92 -15.75,-15.74 -34.82,-23.61 -56.92,-23.61l-106.26 0 20.89 36.02 4.54 4.55 80.83 0c10.9,0 20.29,3.93 28.16,11.8 8.17,7.87 12.11,17.26 12.11,28.16 0,11.2 -3.94,20.89 -12.11,28.76 -7.87,7.87 -17.26,11.8 -28.16,11.8l-36.02 -0.3 70.23 121.4 46.32 0 -49.65 -86.89c14.23,-5.75 26.04,-15.44 35.42,-29.06z" />
                <path id="_15" className="fil0"
                  d="M6535.26 506.93l0 0 35.72 -71.14 35.42 71.14 45.41 0 -80.83 -161.66 -121.09 242.19 44.8 0 20.59 -40.57 19.98 -39.96zm136.54 40.27l-44.81 0 0 0 19.98 40.26 45.11 0 -20.28 -40.26z" />
              </g>
            </g>
          </svg>
        </a>

        <div className="items flex justify-center w-full md:justify-end md:mr-10">
          <div className="nav-items grid grid-cols-3 gap-4 
          md:flex md:flex-row md:justify-center" id="">
            {
              props.links.map((link, index) => (
                <Link key={index} className="nav-link flex p-2 text-white
                md:flex-row md:px-2" to={link.href}>
                  {link.name}
                </Link>
              ))
            }
          </div>
        </div>
      </div>
    </nav>
  );
}