import { APP_NAME } from '../../data/menu';

const Footer = () => (
  <footer className="bg-body-tertiary text-center py-3 mt-5">
    &copy; {new Date().getFullYear()} {APP_NAME}. All rights reserved.
  </footer>
);

export default Footer;
