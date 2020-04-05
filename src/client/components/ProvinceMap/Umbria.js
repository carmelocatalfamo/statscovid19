import React from 'react'
import { withTheme } from 'styled-components'

export default withTheme(({ theme, colors, texts }) => {
  const defaultColor = '#f8c300'

  colors = {
    terni: colors.terni || defaultColor,
    perugia: colors.perugia || defaultColor
  }

  const textOptions = {
    color: theme.fonts.text.color,
    fontSize: 230
  }

  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      id='umbria'
      viewBox='0 0 3704.672 4496.408'
      version='1.1'
    >
      <g
        id='Perugia'
        fill={colors.perugia}
        fillOpacity='1'
        stroke={theme.colors.background}
        strokeDasharray='none'
        strokeLinejoin='round'
        strokeMiterlimit='4'
        strokeOpacity='1'
        strokeWidth='0.18'
        transform='matrix(80 0 0 80 -22159.748 -15659.252)'
      >
        <path
          id='path4'
          d='M295.201 196.923h.001l.026-.007.017-.01.023-.025.008-.018.043-.282.003-.022-.005-.014-.045-.052-.05-.056-.014-.027-.027-.161-.179-.12-.039-.016-.103.004-.131.034-.032.027-.068.079.001.014.012.005.015.005.009.002.004.007-.001.01-.01.01-.113.068-.134.062.343.168.011.007.067.05.023.033.12.18.005.018.013.01.126.016.05.005.03-.005z'
        />
        <path
          id='path6'
          d='M293.255 197.24l-.28-.352-.094-.112-.01-.013-.01-.011-.009-.025-.008-.036.011-.213.002-.03.194-.303.01-.012.008-.01.012-.013.1-.074-.447-.24-.004-.003-.027-.027-.011-.004-.023-.003h-.025l-.022.003-.015.01-.01.014-.074.098-.022.062-.015.043.015.033-.34.124-.361.085-.127.147-.513.242-.131.285-.012.058-.004.01-.029.041-.012.012-.212.144-.058.003h-.013l-.14-.015-.009-.005-.02-.011-.002-.01.032-.137.005-.017.008-.017.016-.01.014-.006v-.107l-.007-.005-.222-.057h-.01l-.059-.003h-.026l-.491.023-.085.015-.037.013-.01.004-.021.022-.004.004-.001.002-.018.046v.002l.001.003.002.005.002.005v.005l-.012.042-.01.017-.01.016-.017.013-.023.015-.014.005-.02.002h-.023l-.093-.01-.016-.002-.029-.006-.022-.01-.048-.03-.064-.005-.744-.138-.198.003-.14-.235-.061-.105-.179-.427-.014-.02-.358.21-.068.074-.046.058-.098.163-.021.129.024.104v.024l-.009.035-.01.034-.069.16-.01.014-.02.022-.058.03-.028.016-.027.011-.024.007-.02.007-.024.01-.021.013-.097.082-.117.206-.018.057-.063.144-.355.434-.141.124-.046.052-.152.586.002.029.01.037.04.05.02.021-.026.073-.12.281-.028.062-.042.204-.018.106-.004.014-.125-.045-.043-.027-.034-.022-.086-.077-.033-.036-.024-.037-.548.117-.648.038-.162.035-.153.214-.082.089-.012.025-.135.439-.01.038-.007.033v.114l.003.02.003.015.003.01v.193l.002.019.022.053.008.011.014.02.014.016.042.04.031.03.028.02.053.019.067.01.3.106.072.098.022.038.249.197.419.253.052.009.134-.001h.141l.123.117.017.013.001.013.002.026.002.023-.002.032-.02.168-.027.114-.01.04-.068.06-.141.032-.037-.015-.407.068-.486.201-.035.017-.149.078-.077.12-.019.035-.056.118-.004.024.002.033.006.036.018.05-.125.249-.297.334-.004.004-.177.156-.03.024-.036.009-.09.004-.023-.004-.039-.007-.03-.015-.094-.044-.128-.05-.211-.072-.053-.016-.027-.004-.014-.002-.048.002-.033.01-.11.15-.026.13-.007.031-.024.027-.025.022-.344.186-.183.051-.065.02-.05.036-.085.106-.093.146-.056.113v.022l.05.216.16.41.007.009.016.017.028.013.646.086.19-.093.278-.14.051-.023.047-.02.045-.019.025-.005.04.02.052.033.002.001.12.074.005.016.003.015.003.024.003.03.002.036.002.034v.017l-.002.013-.005.024-.009.03-.032.034-.023.042-.039.095-.013.037-.004.013-.01.04-.004.014-.012.057-.001.013-.007.07-.003.064-.005.174-.001.044.009.486.01.047.014.035.057.07.015.016.002.002.02.02.016.015.013.01.001.001.108.01.431-.047.043-.019.026-.034.008-.01.028-.05.007-.01.102-.116.044-.04.051.008.036.016.154.078.048.025.056.031.04.032.212.18.09.122.035.05.052.075.03.042.023.037.079.126.023.04.002.004.047.087.02.041.134.306.01.028.018.059.029.447-.022.247-.061.461-.092.187-.02.039-.02.028-.032.036-.028.026-.011.005-.034.026-.02.023-.012.025-.002.014.002.033.007.026.191.495.117.073.565.314.429.159.314.037h.051l.026-.007.026-.008.009-.011.028-.047.064-.131.174-.377v-.017l-.006-.067-.063-.205.36-.548h.036l.242.16.036.08.074.112.016.015.311.21.072.042.033.01h.002l.036.008h.025l.043.039.082.077.006.021-.015.035-.019.029-.433.522-.048.034-.012.004-.04.013-.044.014-.25.093-.105.07-.3.168-.089.014-.046-.005h-.007l-.056-.006h-.11l-.039.01-.012.002-.034.02-.28.197-.01.008-.136.127-.064.07-.196.214-.009.01-.076.097-.04.04-.07.066-.14.051-.078.02-.053.007h-.05l-.232-.035-.154-.024h-.001l-.05-.023-.061-.015-.084-.007-.026.01-.058.036-.193.128-.525.49-.108.142-.007.016-.03.019-.025.013-.022.01-.028.003-.189-.022-.02-.005-.014-.006-.019-.011-.033-.02-.014-.015-.013-.021-.008-.02-.142-.151-.083-.078-.033-.03-.026-.011-.04-.014-.044-.005-.054.001-.087-.01-.082-.016-.099-.024-.064-.024-.052-.023-.025-.018-.026-.03-.043-.062-.037-.052-.017-.014-.174-.094-.165.094-.339.193-.012.014.055.252.005.016.014.043.005.012.036.062.089.395-.104.188-.042.167.028.207.004.026-.18.417-.125.186-.013.137.02.017.032.03.009.027.014.05-.053.224-.009.017-.106.138-.146.133-.03.047-.002.002-.187.074-.23.086-.05.008-.046.006-.058.002-.198.004-.067-.007-.028-.007-.192-.007-.366.242-.025.028-.017.02-.008.01-.014.02-.014.032-.005.012-.008.019-.026.047-.07.06-.03.018-.194.087-.076.013h-.019l-.013.002-.453.204-.474.308-.169.128-.024.026-.01.01-.033.04-.035.044-.025.031-.032.067-.058.285-.005.202.006.04-.011.042-.053.153-.024.022-.057.026-.042.014-.045.018-.037.02-.028.016-.021.013-.019.017.002.004.114.177.116.194.003.006.024.044.002.004.027.052.32 1.044.01.04.007.045.005.039.004.034-.004.03-.002.013-.003.009-.003.01-.009.026-.017.037-.068.06-.04.034-.02.018-.025.022-.047.053-.016.023-.007.012-.017.03-.015.043.046.256.067.049.21.314.012.03.079.254.018.073.01.052.006.03.002.015v.016l.005.045.004.013.01.013.125.105.025.013.04-.006.017-.004.021-.008.012-.006.073-.041.082-.052.02-.029.083-.163.004-.017-.015-.035-.012-.046-.01-.042-.004-.03.012-.033.021-.036.007-.01.008-.011.001-.001.02-.02.118-.099.015-.006.019-.008.018.003.148.034.026.007.021.007.054.02.03.013.05.026.19.1.02.016.02.018.083.087.056.065.017.022.013.017.056.083.008.014.008.02.049.222.004.021v.044l-.007.049-.029.09-.01.032-.008.017-.007.012-.002.003-.014.024-.007.012-.014.013-.017.01-.022.014-.023.012-.029.026-.015.018-.012.018-.012.02-.009.019-.057.135-.009.025-.035.107-.04.472-.002.02.001.017.005.017.007.02.008.015.007.024v.015l-.02.058-.01.03-.02.046-.017.04-.02.039-.039.076-.055.15-.083.256-.055.204-.062.29-.032.146-.01.035-.113.387-.047.146-.006.017-.006.017-.018.014-.143.085.014.063.016.117.008.1-.04.016-.016.045-.028.109.01.173.003.03.02.05.04.09.012.024.018.029.011.013.034.127-.016.217-.014.059-.008.014-.26.41-.039.03-.135.452-.038.297-.074.273-.085.313.005.039.022.098.07.064.039.024.035.015.054.006.062.003.302.06.064.027-.01-.548.01-.01.136-.118.051-.032.006.004.01.022.016.071.287.18.168-.01.163-.033.006-.003.018-.007h.027l.331.052.031.006.241.051.056.029-.087.202-.214.348-.123.171-.075.068-.098.029-.188.029-.045-.003-.027.006-.018.01-.012.008-.038.034-.03.049-.067.107-.123.206-.116.193-.066.084.002.146-.045.043-.215.012-.041-.002-.116-.042-.076-.044h-.037l-.21.061-.1.032-.016.017.003.073.016.057.02.064.038.058.045.044.056.021.145-.001.057-.01.036-.016.039-.02.57-.11.58-.147.337-.132.275-.124.216-.147.11-.074.047-.011.139-.008.024.004.05.004h.043l.18-.012.239-.05-.37-.217-.314-.278.062-.29-.01-.302-.225-.078-.155-.053-.013-.065.04-.067.049-.002.044.006.183.03.03.012.186.062.256-.32.043-.123.109-.232.115-.149.037-.038.162-.167.03-.015.15-.05.038-.01.058-.001.133-.012.026-.01.034-.295.031.036.058.057.274.208.02-.002.145-.071.138-.07.27-.126.04-.009.206-.032.121-.02.058-.003h.05l.379.004.13.024.175.03.153-.022.005-.001.03-.006.097-.021.156-.05.18.104.08.063.209.14.088.028.087-.026.07-.087.476.052.041.01.14.044.067.023.128.046.137-.058.392-.207.016-.005.454.16.1.091.013.016.025.122.236.24.4-.139h.01l.011-.001.03.014.059.034.02.016.002.005.002.005.002.006-.002.011-.009.023-.004.008-.006.007.06.17.015.026.16.012.666.046.248-.042.11-.156.039-.016.505.038.1.034.022.011.021.016.008.008.168.22.702.187.034.002.016-.01.022-.013.041-.026.037-.034.03-.025.03.005.033.014.036.028.002.01.01.048-.071.252-.024.068-.035.06-.063.098-.033.049-.17.175-.063.009-.027.002-.013.016-.057.134-.005.02.016.183.005.014.093.073.031.007.037.006.148.014.085-.06.025-.023.034-.046.03-.036.025-.016.156-.002.202.071.002.011-.091.138-.01.173.008.079.056.125-.024.303-.19.336-.015.036-.003.058.005.049.011.04.016.035.022.03.059.076.02.048.024.223-.01.04-.133.453-.024.024-.106.072-.196.158-.144.539-.053.326-.035.278-.004.01-.042.117-.119.325-.08.137-.003.004.09.25.013.139-.043.195-.01.022-.027.019-.307-.007.03.211.013.445.143.659.009.042.025.09.076.04.018.002.026-.005.03-.005.02.002.061.014.045.013.035.018.166.104.017.013.05.056.074.11.09-.032.077-.082.06-.084.042-.061.021-.073.344.051.578.656.063.15.002.019.078.218.049.083.042.064.317.365.008.007h.009l.058-.017.015-.01.014-.01.012-.003.03.002.007.003.007.003.04.062.097.174h0l-.012.015-.098.08-.133.044.086.512-.112.155-.001.014v.11l.517.4.02.083.026.097.018.031h.023l.328-.154.015-.019.015-.036.053-.2.015-.084.005-.063-.017-.07-.01-.03-.003-.04-.004-.058.005-.075.003-.034.012-.105.068-.162.02-.046.085-.048.037-.008.082-.014.105-.013.053.005.058.01.005.003.006.002.01.015-.013.015-.013.014-.017.158.049.474.025.231.05.012.152-.09.026-.019.012-.012.063-.07.118-.123.233-.214.413-.366.098-.085.213-.105.166-.013.038.01.257-.334.132-.16.282-.234.042-.026.128-.044.054-.058.002-.056v-.06l.04-.157.018-.062.006-.016.073-.14.06.008.247.126.054.027.064.01.067-.016.03-.017.028-.02.05-.027.031.01.075.099.036.052.009.088.003.108h-.001l-.01.01-.032.015-.02.016.008.119.054.126.018.026.552.303.13.012.195-.076v-.023l.065-.122.35-.02H299.56l.045.012.054.014.095.025.117.028.119.027.013-.005.114-.114.115-.128-.01-.062-.088-.56-.017-.117-.016-.138.01-.046.006-.006.225-.24h0l.027-.168.014-.004.047-.002.056.004.037.004.063.014.096.041.038.02.044.022.076.049.034.027.031.025.026.027.036.04.026.04.018.04.015.054.009.044.001.043-.012.076-.008.047v.054l.004.064.014.049.018.06.063.13.022.043.02.032.025.04.043.058.068.09.02.022.04.008.292-.012.186-.012h.015l-.162.489h0l-.018.024-.02.019-.01.008h-.001l-.017.013-.032.02-.047.022-.081.031-.045.003-.055-.006-.096-.012-.071-.015-.052-.025-.108-.05-.045-.01-.237-.045-.081-.004-.041.002-.07.008-.052.01-.05.03-.245.204-.004.018.04.313.041.2.048.23.01.018h.03l.116-.034.052-.017.238-.146.391-.105.198.012.085.34.003.036-.012.05-.011.051-.002.036-.001.036.012.052.195.347.031.01.06-.01.131-.008.365.124.175.231.298.099.288.158.029.022.022.018.017.016.024.032.091.152.01.02.01.023.103.206.135.22.01.016.012.007.064.013.016.002.029-.001.015-.004.163.019.139.037.15.095.157.13.306.4.18.265.08.245.02.078.068.28.035.278.043.231.012.014.012.012.011.006.014.002.02-.002.034-.005.022-.003.019-.007.016-.01.066-.057.003-.011-.029-.13-.002-.012v-.027l.006-.016.026-.046.011-.015.2-.172.07-.035.02-.008.022-.037.013-.033.002-.018v-.004l-.02-.134-.016-.065-.022-.078-.017-.035-.009-.022-.006-.028-.005-.182.002-.017.011-.017.538-.432.014-.01.233-.068.068-.013.141-.007.08-.001.02.003.137.015.16-.017.073-.083.26-.519.003-.03.04-.305.002-.015.01-.04.002-.01.195-.21.018-.012.015-.005.013.004.035.034.037.057.025.037.034.05.044.054.008.007.023.011.016.006.197.038.031.001.032-.008.135-.12.154-.092.339-.259.003-.009v-.032l-.01-.079.053-.044.26.023.804.141.02.012.011.009.006.006.008.014.007.029.002.03.006.033.008.024.052.1.07.131.036.065.026.042.308.363.16.132.129.094.064.043.095.061.105.304-.129.173-.068.037-.01.007-.036.04-.017.043-.016.057-.004.054.082.231.031.035.09.08.031.012.17.022.128.107.1.083.021-.002.024-.004.045.004.048.012.048.014.265.095.018.016.016.033.027.057v.001l.01.034h0l.006.041h0l.13.064.255.052.026-.01.021-.022.076-.168.012-.056.01-.065.101-.239.382-.125.113-.032.013-.003.03-.004.255.007.058.004.051.007.103.022.037.012.184.041.297.044.108.015.434.024.19-.006.031-.01.133-.046.045-.017.024-.01.105-.13.024-.04v-.031l-.03-.082-.008-.02-.01-.144.023-.148.017-.035h0l.018-.034.132-.135.116-.144.023-.028.031-.012.045-.004.011.001.053.005.107.071.057.142.007.027v.026l-.005.052v.001l.012.049h0l.017.041.016.023.036.041.03.02.03.015.488.149.052.016.156.044.045.007.063-.006.05-.005.046-.01.034-.01.235-.138.112-.092.027-.028.021-.021.02-.015.068-.05.253-.126.06-.025.057-.015.065-.014.07-.013.051-.008.05-.014.04-.013.035-.015.107-.06.105-.075.132-.1.017-.016.132-.222.124-.24-.012-.039h0l-.007-.034h0l-.015-.08h0l.003-.026.022-.025.046-.024.064-.02.303-.066.03-.004.171.207.127.158.182.233.02.01.024-.004.02-.012.369-.29.02-.022.029-.038.062-.089.147-.125.03-.027.158-.147.11-.11.02-.033.139-.769-.024.003-.03.003h-.026l-.012-.014h0l-.02-.024-.016-.031-.018-.033-.012-.032-.009-.031v-.001l.001-.02.011-.034.03-.08.03-.076.04-.095.016-.03.206-.354.11-.18.053-.052.04-.031.011-.018.016-.024.017-.04.006-.024.003-.022v-.035l-.005-.047-.01-.053-.012-.057-.039-.136-.04-.093-.016-.063v-.001l-.002-.018-.005-.056v-.001l.002-.04.006-.063.018-.084.068-.263-.07-.005-.003-.004V235.324l.001-.015.003-.03.003-.015.016-.055.004-.008.007-.015.007-.016.008-.015.01-.015.011-.014.086-.11.053-.062.036-.02.017-.01.01-.007.111-.193.007-.015.004-.013.002-.018.008-.074v-.044l-.01-.066-.003-.015-.008-.026-.004-.012-.01-.014-.077-.102-.083-.074-.008-.004-.007-.008-.001-.014v-.01l.003-.01.03-.058.008-.015.006-.01.007-.01.008-.011.006-.004.14-.047.13-.017.344-.227.01-.017.079-.104.01-.014.024-.017.015-.007.115-.03h.017l.43-.02.01.002.016.01.01.015.007.01.007.02.027.07.008.022v.025l-.004.016v.014l-.001.041v.065l.002.025.058.201.004.011.066-.057.028-.026.124-.184.01-.018.01-.02-.001-.073-.001-.026-.002-.032-.003-.024-.005-.036-.006-.027.035-.157.156-.564.008-.022.124-.296.126-.084.033-.027.155-.447.005-.023.001-.024v-.022l-.03-.198-.005-.025-.009-.03-.007-.02-.009-.012-.032-.02-.015-.011-.017-.014-.037-.03-.07-.059-.012-.017-.013-.026-.026-.062-.017-.05-.144-.495-.042-.323v-.03l-.004-.024-.012-.074-.047-.259-.007-.022-.142-.39-.004-.005-.122-.2-.037-.056-.056-.076-.03-.04-.007-.007-.023-.02-.076.272-.027.242-.003.023-.007.022-.011.022-.01.018-.014.015-.017.01-.02.012-.024.01-.054.022-.035.01h-.017l-.014-.001h-.017l-.022.007-.045.026-.027.017-.042.032-.141.217-.154.188-.014.009-.818.316-.012-.001-.275-.074-.306.095-.235.084-.013.007-.016.004-.015.002h-.016l-.012-.002-.177-.095-.027-.02-.009-.006-.343-.559-.01-.018-.009-.02-.022-.059-.054-.15-.038-.111-.376-.526-.044-.053-.084-.103-.051-.065-.07-.087-.133-.246-.09-.187-.087-.23-.016-.04-.016-.004-.101-.03-.001-.001-.022-.008-.016-.008-.08-.04-.422-.218-.404-.148-.063-.041-.06-.04-.108-.075-.042-.03-.107-.076-.01-.008-.007-.006-.01-.008-.01-.012-.006-.01-.01-.02-.008-.015-.009-.015-.02-.03-.024-.032-.077-.105-.028-.036-.103-.133-.191-.23-.05.013-.007.003-.134.078-.12.075-.01.008-.054.047-.007.01-.01.022-.013.032-.177.279-.407.218-.449-.008h-.024l-.014-.002-.012-.002-.018-.005-.013-.004-.013-.01-.023-.026-.047-.06-.026-.032-.009-.014-.165-.097-.296.34v.012l.012.012.01.01.016.01.092.036.04.016.028.007.038.009h0l.008.004.01.007.01.01.043.043.028.031.007.008.008.012.003.006v.01l-.002.029-.002.018-.007.052-.05.18-.071.082-.052.048-.011.006-.029.018-.008.01-.005.01-.021.051-.007.023-.054.184-.095.375-.005.011-.032.061-.015.01-.057.032-.365-.055-.023-.116-.019-.047-.057-.179v-.03l.001-.014.004-.018.037-.147.033-.126v-.02l-.002-.013-.005-.038-.047-.14-.004-.01-.008-.01-.008-.01-.055-.056-.11-.411.021-.115.048-.218.085-.28.081-.259.004-.015.004-.016.003-.012.023-.126.012-.071.001-.009v-.009l-.002-.01-.012-.017-.006-.005-.005-.004-.007-.004-.046-.026-.034-.018-.013-.005-.017-.005-.03-.006-.079-.015-.246-.013-.116-.004-.06-.01-.251-.04-.045-.517-.042.001h-.022l-.015-.001-.047-.003-.065-.015-.025-.008-.022-.009-.209-.143-.016-.013-.048-.08-.02-.035-.008-.02-.02-.048-.005-.016-.01-.023-.017-.03-.038-.059-.022-.022-.012-.012-.015-.011-.025-.019-.026-.013-.014-.006-.194-.037-.031-.004-.017-.002h-.013l-.246-.09-.284-.163-.206-.126-.026-.03.023-.125.035-.17.019-.067.007-.02.008-.02.02-.034.006-.013.03-.045.007-.01.018-.018.012-.011.039-.033.027-.019.05-.042.037-.033.077-.249.002-.02-.003-.011-.007-.018-.008-.016-.012-.018-.05-.05-.054-.058-.336-.5-.012-.02-.156-.291-.011-.022-.007-.014-.012-.03-.007-.018-.006-.019-.002-.013v-.039l.003-.018.004-.015.005-.015.007-.021.122-.249.062-.109.015-.025.11-.182.191-.107.113-.367-.07-.118-.026-.034-.182-.225-.012-.013-.02-.018-.005.051-.114-.082-.007-.007-.006-.01-.018-.033-.031-.063-.003-.015-.005-.024-.004-.022-.041-.268-.017-.137-.004-.035.005-.028.047-.138.012-.045.01-.051.031-.175.064-.387.045-.546.035-.181-.12.05h-.012l-.014-.004-.008-.003-.02-.009-.014-.01-.185-.226-.028-.046-.005-.009-.008-.02-.002-.012-.035-.345v-.03l.002-.013.005-.016.008-.102-.035-.279-.003-.017-.003-.014-.006-.027-.011-.031-.015-.035-.008-.014-.008-.013-.014-.018-.017-.013-.015-.009-.015-.009-.037-.02-.017-.008-.034-.015-.048-.02-.014-.005-.065-.017-.042-.01-.025-.004-.44-.049-.016.01-.077.044-.126.054-.023.008-.024.006-.206.02h-.01l-.011-.002-.012-.003-.011-.005-.006-.003-.025-.03-.02-.028-.012-.022-.018-.039-.01-.019-.006-.02-.004-.012-.006-.032-.004-.025-.001-.022v-.016l-.007-.076-.033-.13-.008-.022-.007-.013-.036-.065-.008-.015-.059-.08-.012-.016-.057-.063-.047-.055-.009-.011-.015-.033-.005-.017-.04-.166-.002-.011.007-.027.01-.01.038-.026.019-.01.017-.008.047-.016.126-.04.103-.042.111-.046.123-.061.036-.019.075-.042.012-.01.013-.01.013-.011.01-.01.013-.014.01-.012.01-.012.016-.023.298-.47.004-.01.05-.346.105-.6.012-.014.015-.02.007-.018.002-.303-.097-.486-.068-.176-.022-.043-.003-.004-.01-.01-.38.06h-.016l-.083-.052-.083-.053-.085-.061-.221-.176.04-.058.023-.04V213.552l-.003-.01-.04-.213-.084-.17-.01-.018h0l-.01-.017-.022-.03-.008-.01-.01-.013-.018-.02-.045-.05-.01-.01-.033-.036-.026-.033-.024-.032-.007-.013v-.001l-.087-.613.002-.015.024-.132.005-.03.005-.018.002-.007.052-.099.01-.02-.01-.2-.119-.268-.572-.196-.016-.003-.01.002-.033.012-.36-.342-.138-.131-.041-.042-.027-.033-.01-.015-.001-.016.003-.02.008-.02.082-.113.017-.019.012-.012.035-.025.047-.03.026-.01.026-.007.03-.013.025-.015.03-.021.018-.018.005-.017.043-.162.006-.044.032-.257.004-.052.006-.092v-.038l-.001-.04-.006-.05-.115-.758-.159-.43-.004-.008-.022-.04-.006-.01h0l-.005-.008-.025-.033-.018-.023-.012-.012-.01-.01-.05-.038-.24-.136.018-.116v-.017l-.002-.021-.003-.018-.003-.013-.34-.361-.057-.197-.032-.1-.072-.07-.006-.005-.083-.057-.016-.009-.075-.03-.028-.01-.081-.015-.025-.055.03-.088.004-.011v-.022l-.043-.178-.003-.013-.003-.008-.005-.008-.023-.037-.03-.04-.005-.007-.013-.012-.212-.262-.079-.354-.015-.076.253-.224.025.002.014.001h.015l.017-.004.036-.01.133-.042.014-.006.046-.022.367-.205.011-.007.004-.004.006-.01.002-.007.172-.534-.062-.104-.11-.161-.116-.123-.064-.02-.027-.009-.013-.008-.028-.03-.033-.043-.008-.01-.01-.015-.012-.048-.002-.014-.024-.251.051-.554.005-.01.064-.048.028-.019.09-.06.052-.023.028-.019.075-.051-.114-.217-.063-.089-.126-.113-.044.014-.26.035h-.026l-.018-.004-.054-.012-.015-.01-.008-.008-.034-.044-.057-.069-.062-.026-.239-.065-.29-.013-.024.016-.012.008-.01.007-.016.015-.02.025-.005.013-.004.017.001.011-.037.074-.204.28-.031.026-.013.01-.008.005-.01.004h-.015l-.246.307-.006.036-.022.127-.004.022-.165.755-.008.013-.01.007-.118-.027-.228-.059-.3-.08-.247-.128-.014-.021-.016-.015-.052-.048-.018-.014-.041-.03-.019-.007-.406-.097-.08-.018-.657.14-.018.005-.198.093-.013.01-.01.007-.01.014-.356.439-.215.2.102-.164.013-.03.002-.015v-.08l-.005-.029-.005-.017-.01-.015-.079-.105-.011-.014-.11-.12-.259-.248-.125-.118-.006-.006-.048-.034-.016-.011-.192-.125-.158-.084-.02-.005h-.02l-.018.003h-.077l-.02-.001-.023-.007-.085-.053-.175-.147-.063-.055-.338-.343-.113-.116-.321-.39-.112-.16-.077-.119-.211-.222-.324-.37-.306-.369-.008-.012-.05-.1-.006-.014-.004-.013-.002-.089v-.012l.001-.016-.002-.011-.004-.016-.027-.064-.01-.017-.127-.205-.013-.014-.198-.197-.171-.157-.055-.047-.018-.011-.095-.057-.025-.073-.009-.01-.531-.258-.022-.01-.023-.004h-.046l-.028.004-.087.077-.013.016-.14.196-.18.138-.299.066-.061-.038-.103-.146-.011-.018-.008-.014-.057-.104-.02-.088-.007-.013-.01-.015-.019-.024-.094-.107-.033-.036-.281-.263-.26-.016-.326-.006-.01.004-.01.006-.02.011-.043.027-.02.013-.016.016-.01.012-.222.261-.143.176-.034.06-.079.15-.132.297.018.073.021.082-.03.01-.151.031-.026-.002-.043-.003-.063-.01-.028-.006-.025-.006-.022-.008-.02-.007-.04-.042-.029-.033-.033-.04-.007-.018-.05-.16v-.017l.06-.131.009-.02.012-.011.035-.01.017-.01.004-.014-.004-.012-.064-.064-.018-.016-.613-.491-.36.265-.015.012-.013.013-.04.05-.005.015v.005l-.004.014v.014l.001.005v.002l-.006.015-.009.012-.077.103-.015.014-.018.01-.135.034h-.011l-.266-.065-.16-.047-.009-.005-.037-.037-.011-.012-.163-.196-.463-.625-.004-.013-.001-.036.005-.014.055-.164.005-.015.01-.02.01-.02.135-.154.017-.015.015-.006.45-.03h.016l.014.002.055.015.02.008.016.006.023.005.1.022.022.003.022.002.023-.002.019-.002.022-.01.022-.02.009-.014.33-.508.221-.414.069-.053.053-.034.055-.033.117-.1.009-.013.008-.014.1-.205z'
        />
      </g>
      <g
        id='Terni'
        fill={colors.terni}
        fillOpacity='1'
        stroke={theme.colors.background}
        strokeDasharray='none'
        strokeLinejoin='round'
        strokeMiterlimit='4'
        strokeOpacity='1'
        strokeWidth='0.18'
        transform='matrix(80 0 0 80 -22159.748 -15659.252)'
      >
        <path
          id='path9'
          d='M279.264 227.263l-.017-.072-.01-.022-.006-.004-.05.033-.136.118-.01.01.01.548.153.305.074.113.007.445-.005.013-.006.013-.035.052.031.254.067-.084.116-.193.123-.206.066-.107.03-.049.039-.034.011-.007.018-.011.028-.006.045.003.187-.03.099-.028.075-.068.123-.17.214-.349.086-.202-.055-.029-.24-.05-.032-.007-.331-.052h-.027l-.018.007-.006.003-.163.033-.168.01-.287-.18z'
        />
        <path
          id='path11'
          d='M285.09 226.121l-.18-.103-.156.05-.097.02-.03.006h-.005l-.152.024-.175-.03-.13-.025-.38-.004h-.05l-.057.003-.121.02-.207.032-.04.01-.27.125-.138.07-.145.071-.02.002-.274-.207-.057-.057-.031-.037-.034.296-.027.01-.132.011-.058.001-.039.01-.15.05-.03.015-.161.167-.037.039-.116.148-.108.232-.044.123-.255.32-.187-.061-.029-.013-.183-.03-.044-.006-.05.002-.04.068.014.064.154.053.226.078.01.303-.062.29.313.278.37.216-.238.05-.18.013h-.043l-.05-.005-.025-.004-.138.008-.048.01-.11.075-.215.148-.275.124-.337.131-.58.147-.57.11-.04.02-.035.016-.058.01-.145.001-.056-.021-.044-.043-.038-.059-.02-.064-.016-.056-.003-.074-.059-.02-.035.004-.05.019-.102.094-.022.043-.045.124-.028.08-.015.051-.01.028-.057.121-.224.267-.03.032-.049.04-.012.005-.03.013-.033.005-.161.053-.387.182-.01.009-.027.026-.01.01.035.142.068.227.232.139.104.165.05.208.051.287.008.028.008.02.055.097.018.026.081.111.041.048.055.052.02.015.014.015.08.292.01.091v.047l.002.035.027.124.145.445.093.165.037.04.045.04.05.03.366.112.054-.013.231.06.263.082.04.023.02.026.013.034.017.033.047.07.045.041.053.04.035.015.356.083.084.016.038.25.042.17.003.016v.038l-.003.02-.014.032-.074.045-.088.047-.072.039-.014.025-.054.244-.086.233-.042.186-.314.229-.346.093-.059.053-.06.073-.062.216-.007.025-.004.009-.135.047-.2.102-.079.06-.02.033-.016.03.002.015.012.01.02.019-.01.023-.141.279-.012.022-.006.02.003.02.002.001.01.01.201.14.114.049.062.006.024.003.016.002.073.026.066.026.035.015.158.074-.002.02-.032.092-.015.024-.006.009-.051.06-.142.28-.013.05v.018h0l.005.01.005.006.088.031.208.07.62.16.137.03.183.058.362.216.23.137.017.012.214.133.158.088.228.18.367.311.055.035.096.012.02.001.005.006v.026l.002.29h.01l.01-.006.008-.004.022-.012.026-.014.006-.005.086-.08.063-.07.056-.044.026-.016.015-.006.021-.002.02-.002.241-.017.58-.123.031-.01.116-.077.137-.114.172.048.017.004h.512l.072-.081.008-.015.01-.022.025-.048.12-.13.042-.036.133-.078.005.018.02.071.024.083.01.02.052.074.244.347.022.019.057.032.152.025.01-.005.014-.01.02-.011.006-.013.005-.013.002-.023-.005-.015-.002-.023.02-.135.03-.06.066-.114.046-.079.066-.055.21.173.075.068.211-.136.028-.031.028-.044.005-.012.023-.054-.002-.043-.006-.04-.01-.047.184-.267.22-.25.033-.004h.022l.08.01.28.134.099.05.155.129.568.274.225.145.155.19.443.43.163.14.037.242-.003.022-.037.05-.04.042.013.002.03.008.116.042.285.123.139.115.014.044-.125.225-.021.008-.01.004-.047.023-.022.016-.022.025-.185.341-.01.019-.037.102.002.031.071.06.014.009.054.032.119.037.063.016h.012l.232.315.054.146-.136-.056-.018-.003-.025.01-.049.02-.008.015-.021.088-.003.011.086.088-.056.168-.013.035-.01.019-.142.204.07.175.025.29-.001.02v.015l.003.008.006.012.022.034.089.066.661.426.155.025.117-.031.046-.008.045-.003.083.02.003.008.024.06.002.008.072.228.026.102.009.061-.002.032-.038.113.023.212-.182.065.009.081.009.079h-.239l-.014.013v.007l.001.018.004.036.005.029.008.035.014.038.062.14.052.097.132.155.023.009.05.012.044.002.306.056.02.006.007.002.019.022.004.006.06.1-.103.037-.07.017-.055.014-.27.07-.036.167.003.087.003.022.002.014.005.013.008.012.101.09.004.003.02.015h.014l.003.001.123-.05.064-.04.026-.025.09-.051h0l.053-.017h.019l.018.016.239.256.086.041.099.182.038.03.029.01.04.01.006.002.01.015.008.034-.148.268-.142-.158-.039-.002-.18.005-.093.003-.01.01.012.07v.01l.028.048.036.04.055.046.025.019.067.04.06.023.066.016.01.001.184-.018.25.003h.048l.033-.006.023-.008.02-.009.138-.13.062-.082.022-.037.013-.027.018-.011.009-.003.01-.001h.015l.015.004.016.007.123.073.04.026.152.102.1.087.225.145.019.025.003.009v.004l.012.035.002.044.013.073.015.045.016.048.027.057.032.055.076.11.006-.001.041-.013.271-.095.037-.015.419-.21.025-.025v-.054l-.003-.046-.001-.015v-.01l.008-.046.003-.01.021-.025.063-.037.218-.088.076-.264.13-.145.056-.026.087-.024h.017l.336.065.013.004.163.063.38.171.218.25-.015.026-.035.043-.063.068-.042.029-.054.035-.016.006-.055.02-.045.017-.18.123-.01.025v.017l-.006.418v.012l.003.03.013.017.012.005.014.004.02.003.03.004.018-.002.035.004.198.024.033.006.134.034h.002l.092.3.002.016.002.013-.035.029-.034.015-.038.006-.029.003h-.061l-.057-.014-.025-.008-.028-.009-.05-.022-.041-.019h-.023l-.017.013-.069.063-.035.042-.022.03-.026.08-.004.021-.047.31v.04l.017.054.027.046.002.004.026.016.023.002.04.008.038.025.035.03.051.096.005.03.002.011.006.053v.012l-.003.044-.01.053-.047.12-.007.01-.055.075-.03.03-.043.037-.005.011-.018.05.022.058.115.142.066.026.056.011h.054l.056-.015.246-.09.105-.048.01-.004.048-.022.073-.032.026-.005h.015l.065.003.014.003.093.028.059.03.087.057.146-.104.037-.04.036-.031.02-.016.109-.045.022-.009.044-.009.015-.002.019.001.014.003.019.005.016.007.023.03.099.209.013.081-.01.07-.02.041-.02.024-.18.147-.072.388-.004.091-.001.019-.002.012-.007.017-.011.016-.058.05-.056.03-.028.013-.036.013-.019.005-.17.026-.08.075.024.019.024.017.046.022.134.059.065.012.105-.048.106-.036.123.001.1.13.003-.017.003-.017.007-.012.08-.122.045-.054.028-.026.08-.07.026-.014.041-.02.095-.04.066-.019.035-.005.174.213.052.034.03.03.013.005.076.02.106-.034.099-.085.143-.099.15-.027.049-.006.131-.004.051.04.148.176.006.009.003.004.005.014.002.005.005.013-.045.086-.012.004-.025.002-.033.006-.012.004-.036.021-.004.013-.002.022.008.339.039.407.086.3.021.064.033.062.108.062.13.056.032.012.044.008.023.004.056-.008.026-.015.034-.088.03-.113.03-.044.118-.169.018-.023.278-.267.091-.074.488-.083.123.037.269-.189.07-.056.696-.537.038-.024.028-.013.043-.005.171-.081-.024-.162.002-.017.175-.179.093-.076.02-.012.014-.003.013-.023.005-.02.002-.129-.01-.193-.003-.033-.011-.09-.006-.03-.015-.028-.014-.025-.075-.076.014-.154.02-.217.146-.43.093-.215.011-.026.004-.03-.009-.248-.009-.166-.012-.016-.077-.045-.067-.062-.01-.01.003-.019.022-.026.208-.15.014-.01.016-.006.02-.007.085-.008h.21l.155.006.11.026.068.027.004.01.05.137-.01.043-.058.115-.036.057-.008.014v.013l.036.118.025.066.02.046.08.058.047.036.033.036.126.17.004.008v.017l-.03.143.001.01.012.01.201.06.162.018.11.013.07.004.09-.016.17-.034.033-.014.162-.094.378-.22.14-.135.152-.161.034-.044.083-.175.262-.116.067.075.06.066.022.016.328-.019.062-.115.228-.222h.05l.077-.027.075-.029.077-.06-.006-.016-.013-.019-.065-.082-.01-.012-.184-.194-.007-.008-.057-.04-.137-.097-.09-.064-.012-.009-.133-.13-.123-.201-.043-.096-.023-.09-.028-.109-.048-.096-.048-.094.235-.105.051-.023.04-.025.103-.086.117-.126.009-.01.108.01.342.004.15-.01.013.053.191-.157.215-.044.25.024.042-.001.14-.02.03-.005.056-.026.013-.004.019-.138-.016-.164-.007-.013-.024-.036-.01-.014.018-.434.008-.016.106-.019.104-.015.143-.03.03-.05.065.034h.033l.323-.042.036-.01.073-.019.026-.012.08-.023.056-.013.028-.003.092-.006.143.038.174.094.078-.134.025-.027.023-.016.427-.28.29-.216.083-.141.013-.02.027-.031.038-.025.532-.245.274-.128.18.004.031-.004.055-.035.075-.037.038-.017.194-.034.05.003.055.005.03.007.02-.108.017-.181.01-.114.002-.229-.025-.082-.123-.209-.096-.16-.032-.076-.028-.074-.12-.326-.05-.183.015-.238-.002-.075.307-.187.226-.131-.17-.022-.031-.013-.09-.079-.032-.035-.082-.231.004-.054.016-.057.017-.042.036-.041.01-.007.068-.037.13-.173-.105-.304-.095-.06-.065-.044-.128-.094-.16-.132-.309-.363-.026-.042-.036-.065-.07-.13-.051-.101-.008-.024-.006-.032-.002-.031-.007-.028-.008-.015-.006-.006-.012-.009-.02-.012-.804-.141-.26-.023-.054.044.01.079.001.025v.007l-.003.01-.339.258-.154.092-.135.12-.032.008h-.03l-.197-.039-.017-.006-.022-.011-.008-.007-.044-.054-.034-.05-.026-.037-.037-.057-.034-.034-.013-.004-.016.005-.018.012-.195.21-.003.01-.009.04-.003.015-.039.306-.003.03-.26.518-.073.083-.16.017-.137-.015-.02-.003h-.08l-.14.008-.069.013-.232.069-.015.009-.538.432-.01.017-.002.017.005.182.006.028.009.022.017.035.022.078.016.065.02.134v.004l-.003.018-.013.033-.021.037-.02.008-.07.035-.2.172-.011.015-.027.046-.005.016v.027l.001.013.029.129-.003.01-.066.059-.016.009-.018.007-.022.003-.034.005-.02.002-.014-.002-.011-.006-.012-.012-.013-.013-.042-.232-.036-.278-.067-.28-.02-.078-.08-.245-.18-.265-.307-.4-.157-.13-.15-.095-.139-.037-.163-.019-.015.004-.029.001-.016-.002-.064-.013-.011-.007-.01-.016-.136-.22-.103-.206-.01-.023-.01-.02-.09-.152-.025-.032-.017-.016-.022-.018-.029-.022-.287-.158-.299-.099-.175-.23-.364-.125-.131.008-.06.01-.032-.01-.195-.347-.012-.052.001-.036.002-.036.011-.05.012-.051-.003-.036-.084-.34-.199-.012-.39.105-.238.146-.053.017-.115.034h-.03l-.01-.019-.048-.229-.04-.2-.042-.313.004-.018.245-.204.05-.03.052-.01.07-.008.04-.002.082.004.237.045.045.01.109.05.051.025.072.015.095.012.055.006.045-.003.081-.03.047-.023.032-.02.017-.013h0l.011-.008.02-.02.017-.022.001-.001.162-.49-.015.001-.185.012-.293.012-.04-.008-.02-.022-.067-.09-.044-.058-.025-.04-.02-.032-.021-.042-.063-.131-.019-.06-.014-.05-.003-.063v-.054l.008-.047.011-.076v-.043l-.01-.044-.015-.053-.017-.04-.027-.04-.036-.04-.025-.028-.031-.025-.035-.027-.075-.049-.045-.022-.038-.02-.095-.04-.064-.015-.037-.004-.056-.004-.047.002-.014.004-.026.167h0l-.226.241-.005.006-.01.046.016.138.017.118.087.559.01.062-.114.128-.115.114-.013.005-.119-.027-.117-.028-.095-.024-.053-.015-.046-.013h-.044l-.15.001h-.015l-.35.02-.065.122v.023l-.194.077-.13-.013-.553-.303-.017-.026-.055-.126-.008-.12.02-.015.032-.015.01-.01h.001l-.003-.108-.009-.088-.035-.052-.075-.099-.032-.01-.05.026-.027.02-.03.018-.068.017-.063-.01-.055-.028-.246-.126-.06-.007-.073.139-.006.016-.018.063-.04.156-.001.06-.002.056-.054.058-.128.044-.042.026-.282.234-.131.16-.257.333-.039-.009-.166.013-.213.105-.098.085-.412.366-.234.215-.118.121-.062.071-.013.012-.026.02-.151.09-.05-.013-.026-.231-.049-.474.018-.158.013-.014.013-.015-.01-.015-.007-.002-.005-.002-.058-.01-.053-.006-.105.013-.081.014-.037.008-.085.048-.02.046-.068.162-.013.105-.003.034-.005.075.004.057.004.042.01.028.016.072-.005.062-.015.085-.052.2-.016.035-.015.02-.328.152-.023.001-.017-.03-.028-.098-.018-.083-.518-.4v-.11l.001-.014.112-.155-.086-.512.134-.043.098-.081.011-.014h0l-.096-.175-.04-.062-.007-.003-.007-.003-.03-.002-.012.003-.015.01-.015.01-.058.018-.009-.001-.008-.007-.317-.365-.042-.063-.049-.084-.078-.218-.002-.02-.062-.149-.579-.656-.343-.05-.022.072-.04.061-.062.084-.077.082-.09.031-.073-.11-.05-.055-.018-.013-.166-.104-.035-.018-.045-.013-.06-.013-.02-.002-.03.005-.027.005-.018-.003-.075-.04-.026-.09-.01-.042-.142-.659-.013-.445-.03-.211.307.007.027-.02.01-.021.043-.195-.013-.14-.09-.248.004-.004.08-.137.118-.326.042-.117.004-.01.035-.278.053-.326.144-.54.196-.157.107-.072.024-.024.132-.452.01-.04-.024-.224-.02-.048-.059-.076-.021-.03-.017-.035-.01-.04-.006-.05.003-.057.015-.036.19-.336.024-.303-.056-.125-.008-.079.01-.173.091-.138-.002-.01-.201-.071-.156.002-.026.016-.03.035-.033.046-.026.023-.084.06-.149-.014-.037-.006-.03-.007-.094-.073-.005-.014-.016-.184.005-.02.058-.133.012-.016.027-.002.063-.009.17-.175.034-.049.063-.097.034-.06.024-.069.071-.252-.01-.048-.002-.01-.036-.027-.033-.014-.03-.005-.03.024-.036.035-.041.025-.023.013-.016.01-.033-.002-.702-.187-.168-.22-.008-.008-.022-.015-.021-.012-.1-.033-.506-.038-.039.015-.11.156-.248.042-.665-.046-.16-.012-.015-.026-.06-.17.006-.007.004-.008.009-.023.002-.01-.002-.007-.002-.005-.003-.005-.02-.016-.059-.034-.03-.014h-.01l-.011.001-.4.138-.235-.24-.025-.12-.014-.017-.1-.092-.453-.159-.017.005-.392.207-.137.059-.128-.047-.067-.023-.14-.043-.04-.011-.477-.051-.07.087-.086.025-.089-.028-.21-.14-.079-.063z'
        />
      </g>

      {texts?.terni && (
        <g id='terni_text' pointerEvents='none' transform='translate(1730, 3810)'>
          <text y='2' textAnchor='middle' cursor='pointer' fontSize={textOptions.fontSize} fill={textOptions.color}>
            {texts?.terni}
          </text>
        </g>
      )}
      {texts?.perugia && (
        <g id='perugia_text' pointerEvents='none' transform='translate(1530, 1810)'>
          <text y='2' textAnchor='middle' cursor='pointer' fontSize={textOptions.fontSize} fill={textOptions.color}>
            {texts?.perugia}
          </text>
        </g>
      )}
    </svg>
  )
})