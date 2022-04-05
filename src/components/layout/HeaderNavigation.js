import {Menu} from "antd";
import {useRouter} from "next/router";

const HeaderNavigation = () => {
  return (
      <>
        <Menu theme={'light'} mode={'horizontal'}>
          <Menu.Item>Home</Menu.Item>
          <Menu.Item>
            <a href={'/author'}>
              About me
            </a>
          </Menu.Item>
        </Menu>
      </>
      )
}

export default HeaderNavigation;