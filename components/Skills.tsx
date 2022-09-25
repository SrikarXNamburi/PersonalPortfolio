import React from 'react';

type Props = {};
import { motion } from 'framer-motion';
import Skill from './Skill';
export default function Skills({}: Props) {
  return (
    <motion.div
      className="flex relative flex-col text-center md:text-left xl:flex-row 
    max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Skills
      </h3>
      <h3 className="absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm">
        Hover over a skill for currency proficiency
      </h3>
      <div className="grid grid-cols-4 gap-5">
        <Skill
          imageSrc="https://logos-world.net/wp-content/uploads/2022/07/Java-Logo.png"
          amount="95%"
        />
        <Skill
          imageSrc="https://www.pngfind.com/pngs/m/62-626208_python-logo-png-transparent-background-python-logo-png.png"
          amount="85%"
        />
        <Skill
          imageSrc="data:image/png;base64,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"
          amount="85%"
        />
        <Skill
          imageSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1024px-Typescript_logo_2020.svg.png"
          amount="85%"
        />
        <Skill
          imageSrc="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"
          amount="88%"
        />
        <Skill
          imageSrc="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPcAAADMCAMAAACY78UPAAAAeFBMVEX///8AAADp6elGRkbj4+P09PTx8fHLy8twcHAnJyf8/Pzs7Oz29vYsLCzFxcWZmZmsrKyKioplZWXY2Ng9PT2np6eQkJB2dnZgYGDd3d2Dg4NpaWlCQkK3t7eqqqqYmJhXV1dPT0+9vb0LCws1NTXS0tIbGxsiIiLl03DCAAAEcElEQVR4nO2c2XriMAxGrQBpy1b2tQsUmL7/G44MhZJESvLNlMqt/3NFs4BOojiy49Q5AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPgnUusAbBhbB2DDOM7T3bmzjsCGR+sAbBi2rSMwYXCwjsCE5co6AhPaE+sIbHhqWkdgwjDOtrzfs47AhJRa1iGYQM/WEZgw2lhHYMKUoizUxhRld6RLc+sQTJiQdQQmrCjKMZZnmlmHUMGeSu+yCWl03IFooO3FhdqLuiuV/+a30OAguvrqMm/3SpSIez345YPgvTf66kRT+9hZLMDnNM0valJgNWuDVr2So1/u3SIShhXeqFFY1izNKgMaNFuWxFTuzYrF6iQlKo4bB3i+h25IG211hTendKEanUjpE6Q3t0Napld5uz+0yS4Y0kLYLExvPapKb94104jdFRPgY7MAvd0jbeXVld7c7aKrMbSucMF7AvXmi1IuQaq93Zber/+QuyOhenekRtjV8uZTfHF9pJ28UajeXF2JmV7D21/S/dOnMWndkWC9OUOlTK/jzZ2vjwKAzl9WIFzvlpjptbxd75QsC7ls9QTofe4xSuVlTW/e6vHYEVG3DdibT9dLYXU9b6/cTKjYHbkQsnf72LnMkijtfJ4F7SdSvpwJ2Zsb5kLk7P0g8J6vRds7Kj1CQXsLHWdt3OEp/z1DonXJz4Tt7Xb5TGfvZSstkpcY+4Pxpv9M4N7j/Ims2a5x0zCflyV64N6crtlMr+m98PXpjvTJDaF7u/dsptfz5tvY0rkl6aPHAXq/Zv5uZk9aLe/msWzxvRLSJi8F783BX2d6Le/38/1vKw86uJ/gzV3xK9M63vPLuCR3SaVBJvcjvDvXmV7D+3pMta89QpG9O/54HfoW03aL3u6FPmchVXunmTH0lbK97L0b+G7gvqSuvxkNKk612n7GXu09yXY+e/QgbSV79wZutfFVw/dfA5J3i/bnj5Xes9wGifgIRfe+L+nM3BLJ2z1fFlZ5HwqP+AaXUadrVG9esZ0aTIQRvbn++rCt8Ob6dFTcV3jspHpzWzhU7343RPZunzO9wnsjjZ+S/Fww593tHr2XXlnKkBsje/MN6bS43Ht6rE/zjKn4nTnvw5Tro3aHb4CTjb9Y6vQBvhbFm4uR41OQRBiDudAUBD2z4nByzntF/kbgr5G0R+q0iVuiebvT7Ym9n+9EEv9MUGmMnyg/m0m6vjuneiX9/pPt/FFXvA/Hgkaf5zFwa/W5eVqoV4OrU4drbZRk5TM9Hd3LrO+Wi7U6I7G/XmQzPRmNwprvUMJerLx+P2nwk9BuRJ/ifDvErZSnur+eh0gzvSXVYzHQj3M6NV/icb7nyMVolBPJ/V3cOgIj+nG+KMJd0jjf4HZOmcv46+nE2qa/RfkKHDOL8pVHF+3/InFJrG364ccME30xsZ7wtslwbwDE2qQDAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADw3/wFtIokRtKmhkcAAAAASUVORK5CYII="
          amount="88%"
        />
        <Skill
          imageSrc="https://developer.apple.com/swift/images/swift-og.png"
          amount="70%"
        />
        <Skill imageSrc="https://reactjs.org/logo-og.png" amount="80%" />
        <Skill
          imageSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/R_logo.svg/2560px-R_logo.svg.png"
          amount="75%"
        />
        <Skill
          imageSrc="https://upload.wikimedia.org/wikipedia/commons/1/19/C_Logo.png"
          amount="70%"
        />
        <Skill
          imageSrc="https://1000logos.net/wp-content/uploads/2020/08/MySQL-Logo.jpg"
          amount="80%"
        />
        <Skill
          imageSrc="data:image/png;base64,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"
          amount="70%"
        />
      </div>
    </motion.div>
  );
}
