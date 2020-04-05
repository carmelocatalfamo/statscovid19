import React from 'react'
import { withTheme } from 'styled-components'

export default withTheme(({ theme, colors, texts }) => {
  const defaultColor = '#f8c300'

  colors = {
    matera: colors.matera || defaultColor,
    potenza: colors.potenza || defaultColor
  }

  const textOptions = {
    color: theme.fonts.text.color,
    fontSize: 30
  }

  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      id='basilicata'
      viewBox='0 0 489 522'
      version='1.1'
    >
      <g
        id='potenza'
        fillOpacity='1'
        stroke={theme.colors.background}
        strokeDasharray='none'
        strokeLinejoin='round'
        strokeMiterlimit='4'
        strokeOpacity='1'
        strokeWidth='2'
        display='inline'
        fill={colors.potenza}
      >
        <path
          d='M339.084 453.842l.05.073-1.39 2.293-.398 2.326-.117.808-.005.105.305 2.902.406 2.602.136.374.24.702.074.249.644 2.868.026.204.017.129-.002.109-.01.125-.008.112-.04.165-.191.557-2.15 5.14-.066.146-.054.108-.31.52-.057.09-.057.083-.975.978-2.255 2.801-1.699 1.988-.15.177-.18.224-.178.227-.13.207-.145.247-.111.231-.09.233-.043.198-.004.018-.01.185.003.218.047.393-.454 1.7-.62.911-1.628 1.892-.186.24-.117.157-.203.327-.096.229-.007.178.016.176.054.155.09.17.18.369.3.624.057.197.005.17-.036.62-.069.627-.046.117-.058.141-.127.292-.981 1.851-.073.135-.08.09-.082.088-.226.176-.15.09-.116.05-.285.11-.205.048-.198.023-.15.028-.096.032-.184.061-.367.16-.153.07-.229.117-.42.264-.215.15-.15.142-.122.129-.129.145-.06.115-2.83 5.398-.021.143.02.144.027.17.083.185.203.38 2.892 3.828.125.116.328.215 1.118.612 2.174 1.127-.123 1.044-.958 2.315-.19 2.496-.145 1.754-.017.117-.11.084-.98.719-.102.07-.097.044-.16.073-.094.02-.079-.004-.096-.048-1.949-1.403-.125-.11-.637-.925-2.356-3.372-2.088-2.56-3.463-4.15-3.705-1.785-.143.084-.37.198-.259.1-.206.066-.201.046-.205.039-4.436.371-1.26.001-.076-.017-.124-.144-.058-.11-.106-.131-.147-.106-2.08-1.02-.913-.4-.178-.057-.259-.074-.204-.045-.156-.02-.145.009-5.585 1.678-.363.156-.266.15-.252.158-.26.23-.35.39-.103.15-.076.1-.404.392-.109.085-.097.063-.135.074-.139.075-.138.071-1.269.562-.127.048-.567.032h0l-3.355-.532-1.544-.529-.17-.048-.483-.047-.145.005-.347.045-.123.03-.09.06-.717.513-.046.083.059.343.06.275.063.167.037.086.621 1.096.42.662.115.163.135.25.072.21.042.145.018.1.023.183-.028 1.215-.015.565-.124 1.239-.067.5-.023.124-.028.146-1.097 4.947-.105.288-.374-.106-.225-.064-.208-.062-.715-.214-.129-.047-2.5-1.005-.232-.119-1.084-.744-2.296-1.575-.062-.084-.461-.848.069-.158.283-.617.1-.195.163-.32.111-.198.068-.096 3.535-4.616-.616-1.2-.363-.908-.955-2.428-.063-.276-.947-2.778-.069.13-.068.078-.084.094-3.938 4.446h0l-.603.584-.809 6.52-5.355-3.255-.184.164-2.195 2.098-1.521 2.082-.058.095-2.152 2.842-.242.317-.073.088-.137.105-1.03-.87-.058-.077-.107-.465-.14-.596-.143-.184-.077-.097-.192-.096-.238-.06-.081-.002-3.47.897h-.634l-4.103-.246-.163-.046-.065-.074-.037-.092-.031-.117-.11-.091-.209-.074-.129-.01-.246.053-2.097.573-.086.047-1.484.908-.064.044-1.6 1.686-.867.993-.113.096-.094.057-.205.034-1.662.067-1.981-.353-2.808-.59-.216-.014-1.795-.086-.13.003-.13.014-.131.062-.127.073-.132.127-1.29 1.268-1.518-4.391-.52-2.556-.056-.074-1.425-1.83-.088-.072-4.782-3.123-.436-3.82.095-.168.09-.165.025-.226-.054-.14-1.199-1.563-.128-.132-1.132-.883-.698-1.773-1.523-4.88-.048-.154-.024-.154-.009-.158.03-.191.049-.15.072-.143 3.945-6.607.072-.116.083-.093.09-.089.937-.9.615.728.362-.16.263-.167.135-.1.173-.131.495-.417.125-.135.109-.119.415-.468.068-.08.087-.17.4-.793.07-.173.029-.252-.01-.252-.039-.133-.975-2.942.065-.316.011-.174-.011-.24-.054-.116-.063-.035-2.151-1.01-.115-.036-1.03-.11-.998-.097-.617-.042-.652-.003-1.403.029-.091.047-.356.285-.088.099-.363.6-.05.105-.108.688-.008.676.003.113.043.122.057.087.092.088-3.8 1.72-4.511 1.207-.164.043-.127-.078-.102-.09-.034-.063-.042-.163-.292-1.508-2.797-1.996-1.358.167-3.823-1.226-1.194-.64-.152-.083-.108-.076-1.27-.692-1.959-.946-3.007-.403-1.717.586-.135.164-.463.597-.076.116-.067.241-.071.51v.008l-.006.09-3.029 3.405-1.127.304-.432.06-.29.09-.106.056-.116.088-.173.146-.083.075-1.65 1.561-.078.005-.11-.076-.245-.205-.077-.067-.059-.068-1.008-1.582-.018-.083.005-.122.043-.253.087-.78-.524-1.649-.102-.218-.219-.179-.144-.08-4.165-.848-.108.007-.109.03-.124.099-.109.122-.472.659-.063.096-.577 1.42-1.473.246-2.297-2.291-1.137-2.288-3.976-1.336-5.572.722-2.15.299-.14 1.573-.047.2-.056.115-.114.198-.105.16-.117.123-.308.236-.09.066-.194.145-.105.06-.112.054-.134.04-2.26 2.753-3.371 4.936-.168.87-.03.148-.081.192-.046.107-.094.14-.094.13-.26.362-.102.12-.09.089-.127.116-.105.078-.263.19-1.08.67-.17.081-.138.05-.283.053-.178.01-.791.252-.258.089-.56.239-.199.097-.124.066-.134.081-.127.086-.15.118-.237.21-.124.116-1.481 1.426-.12.147-.076.105-.113.164-.057.094-.102.183-.152.274-.071.187-.05.142-.043.132-.057.199-.046.178-.024.196-.006.193.032.275.042.208.04.172.144.59.06.373.045.428-.005.126-.283 2.205-1.658 6.06-.081.277-.054.127-.071.153-.08.153-.101.132-.451.564-.237.236-.105.1-1.467 1.068-.513.357-.079.052-.28-.726-1.024-2.61-.09-.208-.11-.228-.05-.085-.05-.074-.129-.17-.132-.126-.12-.095-.142-.095-.13-.057-.125-.021-.125-.013-.116.029.024.12-.159.251-.064.099-.08.108-.197.062-.134-.03-.999-.649-2.427-3.388-.42-3.349.205-.454.08-.093.367-.369.043-.008.046-.008.09.02h-.001l-.386-.707-1.147-2.818-.063-.186.087-.195.06-.081.1-.267-.002-.39-.024-.112-3.797-5.577-.924-.414-.313-.115-.119-.134-.511-.61-.8-.999-.198-.424-.125-.31-.019-.08v-.055l.147-1.034.086-.224-2.614-.655-7.231-7.098-.056-.066-.146-.293.127-.728-.547-.655-.886-1.634.063-2.372.307-2.184.011-.052-.693-1.614-3.025-3.992-.182-.212-.43-.185-.107-.046-.2-.06-.139-.02-.115.021-.064.044-.087.101-.318.209-.134.086-.083.037-.104.03-.09.002-3.531-.096-.216-.086-.731-.871.042-.27.043-.195.02-.05.02-.022.147-.046.448-.601.15-.103 7.86-4.119.04-.014.106-.038.36-.083.258-.017.287-.012.288.007.058-.318.024-.255.005-.222-.13-2.466-.042-.362-.043-.247-1.09-2.361-.15-.22-1.04-1.212-.349-.16-.453-.183-4.07-1.577-.506.105h0l-.04-.284.027-.13.038-.116.053-.116.086-.1.487-.295.184-.104.366-.15.254-.012.286.097.25.156.229.116.23.073.324.089.44.054.276-.082 2.06-.697.527-.195.168-.077.322-.179 1.48-.921 1.683-1.753.226-.355 1.54-2.45.537-1.424.15-.383.234-.435.276-.437 1.582-1.937 2.94-4.717-.358-.363-.278-.292-.217-.29.009-.772.115-.82.625-4.51.197-.36.422-.195.461-.162.163-.368.017-.233-.027-.357-.052-.521-.09-.467-.1-.391-.15-.547-.392-1.363-.227-.54-.081-.124-.346-.167-.155-.213-.925-1.748-.253-1.26-.042-.297-.024-.269.017-.303.114-.658.061-.322.216-.356.176-.109.634-.335.51-.258 1.347-.885 1.705-1.313.14-.15.177-.337.02-.126-.01-.104-.026-.124-.468-1.535-.776-1.813 1.823-1.783 3.653-1.509.114-.277.766-3.764-.041-.38-.362-1.009 1.024-.98.45-.23 1.04-.224.406.168 3.422.234 4.572-3.976.2-.247.192-.619.205-.33 2.103-1.32 3.563-.416.534.041.308.215.166.04.215.046.11.012.139-.025.394-.144.124-.124 1.162-1.329.163-.224.209-.364.192-.367.063-.49-.114-.099-.85-.639-1.156-1.128-.283-.548-.661-2.162-.06-.347.782-3.103.285.005.838-.217.342-.141.466-.315 3.013-2.402-.058-.096-.578-.95-.173-.235-.355-.334-.227-.206-.231-.401-.1-.29-.093-.388v-.004l-.052-.31.04-3.622.052-.504.1-.323.241-.19 1.099-.734.228-.059.45-.059v-.004l-.027-.403-.076-.227-.114-.317-.264-.449-.791-1.159-.233-.225-.53-.069-.306-.138-.349-.379-.247-.423-.85-1.886-.11-.464-2.364-1.295-6.915-3.463-3.41-.578-.885.36-.36.068-.378-.01-.485-.203-1.235-.678-.335-.28-.364-.358-.318-.359-.337-.386-.093-.11-.263-.309-3.372-3.951-.281-.345-.034-.422.168-.457-.362-1.978-1.646-.925-.2-.946-.161-.129-.312-.326-.256-.292-2.904-3.346-1.159-1.962-.169-.408-.072-.738-.074-6.348.35-2.318.703-.995.261-.394.243-.441.1-.33.197-3.074-.082-.079-3.397-2.69-4.679-3.311-.494-.335-.393-.236-.173-.073-1.238-1.363-.527-.215-1.455-.453-2.623 2.409h0l-.376-.343-.305-.276-3.074-5.667-.152-.293-.491-1.389-.293-1.016-2.136-.436-.317-.186-.44-.383-.241-.251-.163-.189-.546-.7-.167-.248-.084-.276-.122-.355-.136-.286-.186-.16-1.305-.928-1.04-.703-1.893-1.004-.45-.17-.388-.015-.371-.09-.444-.218-.523-.267-3.32-1.81-.275-.258-3.864-2.756-1.057-.673h0l1.606-1.012-1.634-2.506-1.07-1.374-1.495-3.113.121-.215.076-.646.035-.31-.108-1.12-.074-.263-.256-.243-3.671-3.042-.577.068-.51.005-.566-.097-1.438-.344-.314-.248-1.806-1.445-2.727-2.225-.817-.432.213-1.573.021-.365-.477-1.105-.554-.71-.182-.364-.077-.308-.095-.415.107-.206.1-.158.047-.075.053-.066.136-.112.266-.187.356-.223.718-.362.997-.58.615-.474.676-.613.688-.79.088-.168-2.095-2.364-1.299-1.217-.636-.824-.782-1.028.254-.197h0l.794-.216.356-.133.007-.003 1.584-2.699.172-.483.009-.193-2.925-6.644-1.68-3.495-.677-.206-.57-.202-.1-.177 2.665-3.563 1.39-.917-2.139-2.084-2.608 1.09-.541.063-.56.028-.337-.108-1.813-1.524-.095-.389.025-.404.044-.534.11-.183.278-.102.182-.227-.032-.361-1.025-1.798-.087-.128-.69-.723-.236-.149-.295-.159-.634-.165-.274-.058-.388.147-.226.14-.466.181-.47.106-.44-.029-.912-.16-1.779-.314-.277-.212-.265-.324-.129-.288-.058-.316v-.004l-.017-.36v-.004l.02-.298.034-.227-.096-.176-1.11-.785-1.628.216-.403.074-.398.107-.6.257-.001.001-.006.002-.428-.086-.592-.322-.078-.126-.9-1.692-1.16-1.437-1.437-1.343-.363-.115-2.025-.807-.232-.13-.146-.085-.498-.434-.369-.38.728-.73 3.681-6.833.617-1.556.142-1.11.062-.506.078-.519.124-.658.053-.127.231-.423.099-.124 1.442-.463 1.427-.507.856-.309.772-.296.373-.213.649-.373 2.213-1.289 1.974-1.99.065-.09.883-1.33.732-3.04.031-.143-.018-.161-.045-.073-.112-.132-.284-.292-.082-.06-.075-.046-.087-.05-.116-.05-.24-.087-.108-.022-3.181.203-.167-.091-.03-.08-.025-.093-.022-.106-.056-.17-.01-.15-.005-.249-.026-.327.016-.13-.011-.083-.026-.12-.048-.142-.045-.116-.033-.064-.056-.124-.055-.11-.053-.105-.054-.166-.03-.147.015-.143-.007-.125-.051-.101-.076-.076-.021-.086-.018-.118-.252-.12-.218-.083-.21.14-.389.134h-.004l-.293.004-.38-.069-.322-.11-.346-.045-.421-.087-.4-.097-.491.072h-.004l-.527.043-.319.099-.24-.034-.309.061-.34-.045-.175-.209-.115-.256-.248-.148-.345-.197-.23.01-.194-.04-.258-.223-.308-.15-.338-.18-.371-.142-.33-.182-.248-.23-.402-.164-.165-.08-.28-.197-.259-.183-.25-.253-.307-.442-.059-.252-.216-.336.034-.164.008-.04-.225-.2-.104-.15-.002-.286-.276-.291-.11-.121-.074-.143-.08-.352.049-.173-.029-.207-.135-.087-.168-.155-.303-.069-.254.052-.66.425h-.004l-.155.003h-.004l-.21-.16-.24-.09-.33-.18-.194-.282-.255-.205-.316-.084-.296-.027h-.004l-.154-.085-.304-.065-.195-.114-.455-.02h-.004l-.237-.065-.259-.138-.277-.065-.18-.215-.196-.084-.31-.053-.054-.009-.274-.11-.327-.035-.39-.213-.146-.246-.104-.29-.202-.22-.521-.269-.24-.278.017-.415-.104-.282-.307-.328-.11-.371-.056-.298-.18-.383-.09-.505-.599-.14-.265-.196-.236-.376-.398-.213-.4-.225-.214-.305-.364-.265-.062-.35.198-.334-.007-.192-.124-.135-.236-.16-.308-.168-.161-.154-.04-.16-.143-.15-.195-.146-.074-.261-.094-.218-.545-.508-.845-.62-1.22-.755-.371.078-.96-.101h-.005l-.357-.044-1.515-.424-.63-.406-1.535-1.404-.317-.169-.372-.266-.352-.271-.296-.255-.107-.352-.083-.793.12-.187.378-.315.238-.386.075-.508-.002-.616-.014-1.103-.034-.655-.098-.187-.1-.038-.483-.694-.497-2.68-.162-2.67.027-.154.265-1.176.076-.3 1.1-3.676.236-.274.189-.187 1.275-1.21.67.16-.903-1.252-1.014-1.502-1.194-1.762-.169-.249-.133-.44.002-.363.11-.337 1.53-4.234.185-2.374-1.815.81-.463.167-.351.067-1.378-.364-.282-.092-.64-.265-.834-.44-.435-.34-.168-.912 1.29-.803 2.278-1.36.654-.227.041-.187.247-1.365.063-.426-.533-.514-.26-.12-.711-.199-.35-.085-.328.028-.902.185-.384.146-.367.126-.384.05-.245-.113-.92-1.035-1.975-2.314-1.205-1.699h0l-.172-.185-.282-.263-1.021-.931-.275-.234-.451-.234-.418-.081-.464-.002-.362.054-.287.023-.402-.1-.267-.302-.263-.333-.213-.32-1.03-1.54 5.83-1.186.448-.154.113-.033 1.774-.41.105-.016.223.05.47.183.282.126 2.1.946 1.116.506.27-.102.797-.44.043-.129.206-1.796-.02-.118-.02-.075-.382-1.432-.19-.55-.38-5.67.174-1.674.829-1.723-2.75-1.5-.324-.14-.165-.034-.529-.11-.083-.008-.371-.032-1.383.19-.185.026-.216.052-.154.047-.159.06-.264.123-.2.301-.908-5.232.257-.126.408-.19 5.456-1.025.374.005h.006l.193.005h.008l.117.067.143.125.067.106.019.154-.04.392.764 1.268 1.577 1.767.124.093.14.035.474.115.166.035.54.11.293-.028.197-.033 2.82-.544 2.096-1.547 2.27-.22 1.108.041 4.502.657 3.778 1.211 2.895 1.9 4.45.858 2.387-1.305.197-.455.038-.25-.105-.163-.572-.873-.296-.452-.12-.148-.142-.166-.245-.693-.311-2.504-.026-.703.003-.14.063-.282.159-.12.555-.263 5.675-2.562.19-.074.192-.067 1.47-.44.446-.075.382-.137.56-.208.276-.141.113-.06.092-.057.136-.108.47-.41.102-.094.164-.165 3.366-1.376 4.438-1.154.163-.105.126-.221.1-.297.061-.195.055-.244.09-.452-.01-.202-.025-.28-.029-.207-.01-.213.03-.197.074-.137.362-.642.088-.123.102-.135.567-.708.126-.143.053-.056.167-.168.099-.09.163-.12.247-.14 1.393-5.051 1.123-4.91-.094-.17-.067-.17-.07-.192-.033-.166.009-.208.084-.266 1.717-2.713.11-.135.061-.073.068-.08.167-.146.186-.123.273-.149 1.098-1.007 1.867-1.991.63-.82.67-.978.486-.45.057-.08.221-.372.065-.123.05-.109.077-.311.024-.11.023-.116.78-4.136.891-6.967.013-.191-.003-.17-.035-.369-.048-.199-3.523-11.599-2.054-4.587-2.597-6.375-1.095-1.235.34-3.702 1.724-3.917 4.65-6.392 1.154-.56 1.652-.896.133-.09.237-.261.115-.142.644-.53 1.093-.629 1.885-.592.247-.036.329-.013 1.152.352 4.932.58.246-.055.228-.133.547-.305 1.249-.506.952-.26.186-.041.355.044.226.04.03.006.205.043.246.07 3.025.94 1.905 1.924.23.089 2.832.852 1.754.237 4.667.323 2.403-.437 1.832 1.075.758.243 11.214-1.449 2.874-1.543-.08-.292-.038-.16-.002-.12.033-.27.013-.016.128-.16 1.299-1.344 2.038-.224.344.008 1.548.061.26.022 2.154.537.268.07.24.123.208.11 3.732 4.271.595.881.1.2.153.206.07.092.162.175.087.057.124.027.183-.082.52-.268.267-.184 1.144-.998 1.99-1.129.22-.082 1.495-.391.045-.004.163-.014.261.017.093.19.055.236-.018.215-.043.177-.1.148.053.106.063.121.097.032.554-.034.024-.009.154-.058 1.453-.805.175-.103.484-.35.222-.238.092-.162.552-1.594.977-2.876.775-3.525.674-1.074 1.236-1.214.137-.093.617-.397.233-.108.25-.042 1.405-.062 1.51.152 1.433-2.239-.016-.264.003-.35.008-.435.107-.534.086-.266.15-.191.352-.407.309-.2.285-.182.259-.087.223-.016.587-.04.277.006.252.116.279.193.059.194.031.211-.036.24-.025.088 2.223.952 5.853-2.24.128-.109.079-.067.146-.197.042-.057.077-.127.86-1.612.091-.196.026-.056.094-.333.12-.545.003-.44 1.487 1.29.12.021.256-.1.27-.129.232-.162.1-.116.081-.15.293-.095 1.09 1.475.198.28 1.302 2.021 1.45 2.22.164.223.186.252.166.133.117-.03 1.169-.522.297-.26.23-.208.203-.217.294-.283 1.822 1.79 1.116 1.106.041.042.135.135 1.495 1.595 1.307 1.305.5.4 3.465.916 1.804-1.93 5.034 1.157 1.388 2.506.226.454.39 1.031.072.29.013.211-.107.487-.194.413-.2.317-.339.46-1.008 1.218 1.973-.072 5.056-.365.274.206.195.164 1.548 1.706.138.167.293 1.204-.564 1.31-.256.208-.389.289.679 1.74 5.267 9.785.065.073.06.06.092.067.623-.371.298-.245 1-1.083.396-.508.134-.13.12.081 4.574 3.22 5.078 5.145.06.07.158.196.591.786.027.05.036.109.049.46-.135 2.724-2.356.355-.776.337-.232.196-.457.626-.163.273-.033.257-.162 2.469.03 1.742.055.753.086.324.058.211.16.237.14.197.24.296.496 1.25.214 2.892.003.104-1.572 2.994-.509.807-.684.988-4.68 6.121-.066.07-1.748.786-1.896.06-1.125.035-3.058.007-.87-.075-1.665-.306-.032-.008-.225-.056-.477-.202-.267-.126-.252-.131 1.531 5.712.163.17.027.028 1.53 1.263.29.192 4.42 1.457 2.31.488.26.083 2.375 1.008 1.962 1.08.37.065.707.128 1.256.244 3.832 1.615 2.46 1.126 1.476.895 1.218.798.74.599.138.13.133.208.08.384.098.186.331.196 2.245.681 2.379.638 1.426.262.693.19 1.087.378 2.67 1.169.242.13.274.156 1.482 1.29 1.17 1.196 4.549 5.067 1.519 1.864.072-.635.275-.532.13-.22.196-.215.176-.14.818-.217 2.317-1.515.226-.216.062-.12.081-.167.067-.143-.064-1.52-.039-.516.076-.547.537-1.28.22-.356.253-.278 2.688-2.336 5.228-1.935 2.635.53.372.111.445.322.265.236.284.223 1.203.647.41.171.938.36 3.366 1.186 2.635.828 1.277 1.873 2.496 3.722.49 1.873 1.3 4.265.172.36.257.232.284.174.34.242.167.183.763 2.35.05.195.02.096.042.213.016.077-.021.158-.056.263-.18.204 1.716 9.68.134.353 3.626 6.507.16.145.154.046-1.211 1.064-.111.085-.517.331-.137.07-3.19 1.389-.193.039-.234.03-.269.035-.259-.038-.29-.06-.236-.06-.267-.06-.285-.05-.313-.003-.318-.002-.608.15-.341.134-.304.125-4.965 4.186-6.446 4.235-.672.431-1.634.937-1.09.551-.516.102-1.865.238-1.695.226-.122.02-2.264.352-1.504.244-2.552.42-.555.111-.346.162-.334.168-2.503 1.257-.345.196-.228.135-.115.162-.108.205-.128.634-.057.281-.11.694-.041.26-.034.283-.003.229.025.383.078.392.284.844.045.214.077.484.037 2.14-.154 1.67-.024.111-.553 1.1-.095.147-1.427 2.022 4.826 8.007.59 1.23.597 1.04.3.439.155.169.593.529.432.311 1.066.845 1.866 2.063.16.19.136.177.059.105.1.182.068.205.008.549-.082 1.385-.057.61-.035.469.058 1.224.032.163.1.113.213.102.36.11-.615.671-.046.057-.051.064-.03.036-.053.082-.142.235-.093.157-.096.17-.054.119-.024.101-.062.71-.006.74.006.095.02.18.11.616.077.319.022.092.076.23.074.351.018.156.003.024.118 1.049.002.15.003.305-.04.235-.044.185-.092.334-.26.907-.523 1.459-.124.014h-.324l-.239-.138-1.098-.315-.889-.23-.12-.022-.105.014-.099.034-1.728.702-.84.377-.92.776-.092.08-.1.117-.813.978-.696.875-.057.101-.032.105-1.364 1.657-2.527 2.691-1.164.971-.794.665-.133.07-10.407 5.058-.862-.25-.424-.107-.12.016-.158.037-.548.248-.239.148-.407.349-.522.533-.201.241-.138.182-.142.24-.093.187-.098.308-.074.266-.074 2.106.016.873-.48 2.085-1.804 3.071 1.053 1.598 4.112 3.646.406.08.153.08 1.302.716.142.122.465.934.052.104.808 1.9.043.134.304 1.2.01.676.026.303.803 1.777.242.47.316.55.174.196.186.14 3.062 1.576.086-.042.224-.11.22-.124.157-.1.11-.048.181-.023.568-.03.112.061 1.633 1.288.11.118 1.068 1.188.589.688.75.991.522.83.07.164.096.12 1.005.725.119.054 1.102.148.159-.041.58-.371-1.333 2.551v-.002l-3.678 7.332-1.047 1.19-2.173 1.746-.12.047-.472.19-1.785.779-2.007 1.085-.167.1-1.61 1.267 1.796 1.648 3.402 4.496.34.618 3.146 5.31 1.82 2.144.936 1.296.107.182.17.295.995 1.932.132.28.052.156.023.096.016.23-.008.078-.907 1.969-.258.552-.276.442-.122.14-.133.123-.102.093-.06.048-.34.184-1.332.642-.102.048-.128.027-.165-.006-.175-.012-.155-.04-.13-.013-.136.04-1.713 1.42-.106.112-.087.096-.085.134-.05.165-.019.27.44 1.089 4.48 6.348 3.212 3.083.024-.097.136-.066.222-.024.22-.008.43.088.247.088 4.916 2.213.115.096.13.465.02.147.034.309.018.15-.486.353-.19.146-.128.1-.095.075-.132.13-.27.298-.104.115-.579.755-.21.307-.145.224-.077.13-.565 1.423-.023.07-.052.159-.018.233.016.259.07.167.035.095-.175 1.13-.076.334-.096.22-.385.751-.708 1.187-4.194.342-.633.353-.78.66-.248.324-1.28 2.318-.07.186-.035.12-.013.124.009.166.245 3.798.016.197.038.276.054.192.11.223.595 1.162.084.144.242.165.161.024.157.015.16.035.169.052.149.064.133.107.115.137.106.198.061.146.073.217.046.203-.022.274-.147.928 1.99.83 5.694 5.424 4.034 2.31.226.086.146.068.111.092.65 1.002.061.121.051.143.475 1.757-.24 1.246-.07.167-.055.17-.054.184-.03.191-.001.188.076.211 1.555 3.254 2.147 3.332.11.182.069.18-.789 3.635-.178.45 3.648.026-.025.21.013 2.246.002.088.014.154.048.195.09.261.045.044.044.04.204.145.13.073.238.068.06.014.263.04.278.138.852.451.157.09.127.091.105.103.166.183.089.107.063.095 1.722 2.836.032.115-.011.247-.018.248-.378.84-.128.075-.15.04-.025-.001-4.336-.47-.12-.027-.321-.081-.866 3.36.88 3.794.031.134.023.098.042.103.196.213.556.527 1.305 1.195 1.054.63.129.058 1.277 1.018.186.15.138.236.08.271 1.674 6.17.621 3.873h0l.216.064.179.046.205.049.228.019.235-.024.293-.034 2.437-.332 2.795-.18.655-.028.882.01 4.522.055.856-.014.629-.033.295-.022.25-.027.665-.187.252-.109.208-.137.355-.303.152-.162.233-.34.112-.227.122-.161.147-.144.182-.17.337-.305.174-.133.26-.177.32-.175.185-.095.128-.063.451-.164.33-.092.196-.05.22-.023.284.02.723.155.384.13.241.099.594.278.234.114.175.099.375.15 1.255.359.354.091 2.87.644.372.035.684.038.404-.002.493-.015.476-.036.416-.053.989-.17 3.294-.81.646-.205 1.486-.597.365-.191.381-.224.513-.316.432-.381.27-.35.092-.118.179-.242.187-.257.168-.253.188-.287.123-.224.662-1.551 1.048-2.866.496-1.379.105-.292.09-.265.123-.427.005-.02.083-.35.742-1.637.077-.134.203-.303.37-.528.224-.196.242-.177.169-.05.514-.116 3.796-1.185 1.51-.874 7.45-.264-.008.783-.012.565-.035.805-.14 3.281-.067.403-1.018 1.034-.623.625-.188.088-.117.035-.628.695-.16.193-.697.877 1.175 2.836 1.42 1.478.736 1.058.321.504-.368.852-1.3 1.174-.809 2.763.242 2.24.35.46.05.058.41 1.474.025.116.014.101.01.08v.04l.002.054-.002.142-.19.294-.104.112-2.146 2.205-.888 4.382.06.212.045.233.037.257-.036.43-.029.171-.469 2.099-.086.255-.082.217-.07.186-.616.728-.137.152-.16.16-.203.121-.203.101-.285.087-.17.11-.163.13-.167.177-.829.95-.09.113-.059.127-.077.175-.025.162.007.278.437 3.4h0l-.414.803-.06.217.828 2.106 2.658 5.487 2.55 1.507 2.782 1.906 1.342 1.233 1.949.076.338.04.116.036.126.065.228.269 2.572 3.307-.507.308-.117.137-.053.104-.544 1.093-.022.126-.032.183.005.226.034.208.04.238.061.349.045.17.242.72.58 1.668-4.117.9-2.936 2.166-1.496 1.86-2.368 1.609-1.262 1.802-2.436 4.386h0l1 2.096 3.142 2.623 2.368 2.64-.33.363-2.58 3.08-.735.887-.297.41-1.052 1.448.306.317.417.262.407.216.698.369 2.623 1.35-1.456 3.27-.726 1.733.02.077.105.039.1.03.607.01.187.003.157-.004.19-.01 1.32-1.82.068-.058.077-.063 3.34-1.704.172-.046.223.02.067.066.009.136-.015.18-.013.15-.06.27-.224.449-.15.355-.382 1.088-.04.2-.03.265.004.144.01.15.031.524.14.6.04.148.732 2.78.043.114.062.133.086.182.076.155.233.301.125.144.51.577.643.33 2.106.903.909.37z'
          display='inline'
        />
        <g id='matera' fill={colors.matera} display='inline'>
          <g id='g3884'>
            <path
              id='path90'
              d='M206.986 207.144l-.405-.76-.145-.267-.097.08-.198.152-.755.42-.122.057-1.094.443-.24.074-.95-.1-1.318-.174-2.031-.934-.488-.04-.423.037-.64.092-.436.087-.253.236-1.26 1.273-.156.266-.457.785-.303.522-1.43 1.272 1.442 2.35 1.508 3.618-.053.11-.052.112.227 1.963.172 1.265.02.148.042.251.052.112.075.11.759 1.102 2.02.995.084.039 4.603 1.642.079.025.904.078 1.651-.49.184-2.312-.254-1.215-.124-.218-.313-.446-.391-.383-.138-.922-.367-6.088-.013-.277.026-.383.161-1.246.041-.267.438-1.472.047-.153.332-1.082.039-.487z'
            />
            <path
              id='path3877'
              d='M289.946 127.087l-1.211 1.065-.111.084-.517.332-.137.069-3.19 1.39-.193.038-.234.031-.269.034-.259-.038-.29-.06-.236-.06-.267-.06-.285-.05-.313-.003-.318-.002-.608.15-.341.134-.304.125-4.965 4.187-6.446 4.234-.672.431-1.634.937-1.09.552-.516.102-1.865.238-1.695.225-.122.02-2.264.353-1.504.243-2.552.42-.555.111-.346.162-.334.168-2.503 1.258-.345.195-.228.136-.115.161-.108.206-.128.634-.057.28-.11.695-.041.26-.034.282-.003.229.025.384.078.391.284.844.045.215.077.483.037 2.14-.154 1.67-.024.111-.553 1.1-.095.148-1.427 2.022 4.826 8.006.59 1.23.597 1.04.3.44.155.168.593.53.432.31 1.066.845 1.866 2.064.16.19.136.176.059.106.1.181.068.205.008.55-.082 1.385-.057.61-.035.468.058 1.225.032.162.1.113.213.102.36.11-.615.672-.046.056-.051.064-.03.036-.053.082-.142.235-.093.158-.096.169-.054.12-.024.1-.062.71-.006.741.006.095.02.18.11.616.077.318.022.092.076.23.074.351.018.156.003.025.118 1.048.002.15.003.305-.04.236-.044.184-.092.335-.26.907-.523 1.458-.124.014h-.324l-.239-.138-1.098-.315-.889-.23-.12-.021-.105.014-.099.033-1.728.702-.84.377-.92.776-.092.081-.1.116-.813.979-.696.875-.057.1-.032.105-1.364 1.657-2.527 2.692-1.164.97-.794.665-.133.07-10.407 5.059-.862-.25-.424-.108-.12.017-.158.036-.548.249-.239.148-.407.348-.522.533-.201.241-.138.183-.142.24-.093.186-.098.308-.074.266-.074 2.106.016.874-.48 2.084-1.804 3.072 1.053 1.597 4.112 3.647.406.08.153.08 1.302.715.142.123.465.933.052.104.808 1.901.043.133.304 1.2.01.677.026.302.803 1.777.242.47.316.55.174.197.186.139 3.062 1.576.086-.041.224-.11.22-.125.157-.1.11-.047.181-.023.568-.031.112.061 1.633 1.289.11.118 1.068 1.187.589.689.75.99.523.83.069.164.096.12 1.005.725.119.055 1.102.148.159-.042.58-.371-1.333 2.551v-.002l-3.678 7.332-1.047 1.19-2.173 1.747-.12.046-.472.191-1.785.778-2.007 1.085-.167.1-1.61 1.267 1.796 1.649 3.402 4.495.34.618 3.146 5.31 1.82 2.145.936 1.295.107.182.17.295.995 1.932.132.28.052.156.023.096.016.23-.008.079-.907 1.968-.258.552-.276.442-.122.14-.133.123-.102.093-.06.048-.34.185-1.332.641-.102.048-.128.028-.165-.006-.175-.013-.155-.04-.13-.013-.136.04-1.713 1.42-.106.112-.087.096-.085.134-.05.165-.019.271.44 1.088 4.48 6.348 3.212 3.084.024-.098.136-.066.222-.023.22-.008.43.087.247.088 4.916 2.214.115.096.13.465.02.146.034.31.018.15-.486.352-.19.146-.128.1-.095.076-.132.13-.27.297-.104.116-.579.755-.21.306-.145.225-.077.129-.565 1.423-.023.07-.052.159-.018.233.016.259.07.167.035.095-.175 1.13-.076.334-.096.22-.385.752-.708 1.186-4.194.343-.633.352-.78.66-.248.324-1.28 2.318-.07.186-.035.121-.013.123.009.166.245 3.799.016.196.038.276.054.192.11.223.595 1.163.084.144.243.164.16.025.157.014.16.036.169.05.149.066.133.106.115.137.106.199.061.146.073.216.046.203-.022.274-.147.928 1.99.83 5.694 5.425 4.034 2.309.226.086.146.068.111.092.65 1.002.061.122.051.143.475 1.756-.24 1.247-.07.167-.055.17-.054.183-.03.192-.001.187.076.211 1.555 3.254 2.147 3.332.11.182.069.18-.789 3.635-.178.45 3.648.026-.025.21.013 2.246.002.089.014.153.048.196.09.26.045.044.044.04.204.145.13.073.238.068.06.015.263.04.278.137.852.452.157.09.127.09.105.103.166.183.089.107.063.095 1.722 2.836.032.115-.01.247-.02.249-.377.839-.128.076-.15.04-.025-.002-4.336-.47-.12-.027-.321-.08-.866 3.36.88 3.793.031.135.023.097.042.103.196.214.556.526 1.305 1.195 1.054.631.129.058 1.277 1.018.186.15.138.235.08.271 1.674 6.171.621 3.873h0l.216.063.179.047.205.048.228.019.235-.024.293-.034 2.437-.331 2.795-.18.655-.029.882.01 4.522.055.856-.014.629-.032.295-.023.25-.026.665-.188.252-.108.208-.137.355-.303.152-.163.233-.34.112-.227.122-.16.147-.144.182-.171.337-.305.174-.132.26-.178.32-.174.185-.096.128-.062.451-.164.33-.093.196-.05.22-.023.284.02.723.156.384.13.241.098.594.279.234.113.175.099.375.15 1.255.36.354.09 2.87.645.372.035.684.038.404-.002.493-.016.476-.035.416-.054.989-.17 3.294-.809.646-.205 1.486-.598.365-.191.381-.224.513-.316.432-.38.27-.35.092-.118.179-.243.187-.257.168-.252.188-.287.123-.225.662-1.55 1.048-2.867.496-1.378.105-.292.09-.265.123-.428.005-.02.083-.35.742-1.636.077-.135.203-.302.37-.529.224-.195.242-.177.169-.05.514-.117 3.796-1.185 1.51-.874 7.45-.264-.008.784-.012.564-.035.805-.14 3.282-.067.402-1.018 1.034-.623.626-.188.087-.117.035-.628.695-.16.194-.697.877 1.175 2.836 1.42 1.478.736 1.057.321.505-.368.851-1.3 1.174-.809 2.763.242 2.24.35.461.05.057.41 1.474.025.117.014.1.01.08v.04l.002.054-.002.143-.19.294-.104.111-2.146 2.206-.888 4.382.06.211.045.233.037.257-.036.43-.029.171-.469 2.099-.086.256-.082.216-.07.186-.616.728-.137.152-.16.16-.203.122-.203.1-.285.088-.17.11-.163.129-.167.177-.829.95-.09.113-.059.127-.077.176-.025.161.007.279.437 3.4h0l-.414.803-.06.216.828 2.106 2.658 5.488 2.55 1.506 2.782 1.906 1.342 1.233 1.949.076.338.04.116.036.126.065.228.27 2.572 3.306-.507.309-.117.136-.053.105-.544 1.092-.022.126-.032.183.005.226.034.208.04.238.061.35.045.17.242.72.58 1.668-4.117.899-2.936 2.167-1.496 1.86-2.368 1.608-1.262 1.803-2.436 4.385h0l1 2.096 3.142 2.624 2.368 2.64-.33.362-2.58 3.08-.735.888-.297.409-1.052 1.448.306.317.417.262.407.217.698.368 2.623 1.35-1.456 3.27-.726 1.734.02.077.105.038.1.031.607.01.187.002.157-.004.19-.009 1.32-1.82.068-.058.077-.063 3.34-1.705.172-.046.223.021.067.066.009.136-.015.179-.013.15-.06.27-.224.45-.15.355-.382 1.087-.04.2-.03.266.004.143.01.151.032.523.14.6.039.148.732 2.78.043.115.062.133.086.182.076.154.233.302.125.144.51.576.643.33 2.106.903.909.37.713-.831.24-2.054.783-2.421.665-1.684.504-.8.156-.166.121-.138.14-.167.664-.802.841-1.096.06-.1.04-.068.044-.147.352-1.702-.41-.681-.633-1.081-.072-.149-.03-.155-.001-.218.013-.168.042-.338.468-3.586.038-.273.06-.264.106-.385.066-.18-.136-2.956-.68-1.516-.865-3.167.022-.18.091-.378.138-.208.218-.11 1.435-.575.484-.237.388-.249.103-.093.072-.093.237-.406.078-.146.223-.485.056-.215.048-.182.04-.26.046-.488.018-.402-.016-.17-.038-.188-.01-1.276.005-2.408.024-.102.206-.741.098.183.2.327 3.82 6.277.177-.028.252-.097.166-.106.516-.349.208-.144.223-.173.2-.167.656-.44.53-.344.201-.103 2.103-.864.188-.072.142-.05.132-.04 3.847.166 2.125.136.315.104 1.628.88.207.116 1.114.719.763.57.194.226.188.157.176.112.182.104.189.105.207.068 2.006.545.427.054.805-.36.124-.085 1.747-1.569 3.797.491 4.763 4.44.168-.024.105-.05.358-.24 1.678-1.242.144-.11.159-.15.527-.52 1.2-.565 3.501-1.428 2.279-.593.246.035.188.061.244.132.547.363.103.069.106.09.07.09.127.173.456.191.996.207.242.022.146-.038 2.283-1.472 1.738-1.236.568-.04 1.255.147 1.133.209.12.036.158.085.059.037.07.044.17.101.17.09.418.211.592.256.638.23.204.067.145.037 2.178.224.194-.013.18-.067.78-.358.774-.361.143-.067 1.165-.441.176-.041.215.086 1.668.765.285.14 3.92 3.256 1.199 1.208.443.38.833-.76 4.756-4.505.26-.517 7.21-5.838.611-.793 1.127-1.6.798-1.682 1.036-2.193.905-1.964 1.38-2.765.368-.61.71-1.119 2.156-3.258 1.53-2.286 2.004-2.965 1.656-2.47 1.558-2.645.354-.648.264-1.944 3.612-12.756.491-1.17.977-1.958 6.083-11.689.316-.517.322-.13-.012-.55.009-.047.412-1.013 1.825-4.222.223-.502.656-1.228.372-.683.049-.072 4.638-6.603 2.692-3.534 2.616-3.759 1.503-2.503.039-.066 1.209-1.645 6.76-10.194.24-.405.184-.32.145-.255.165-.29.405-.732 1.323-2.421 3.676-6.786-.115-.306-1.765-.835-3.91-1.227-4.083-3.097-3.859-3.787-1.688-2.093-2.856-3.577-.023-.222-.15-1.456-.047-2.114.1-.515.296-.486.005-.259-.082-.738-.15-.357-1.468-3.184-.182-.292-.203-.31-.162-.217-.021-.028-1.52-1.032-.263-.132-1.463-.718-3.02-1.025-.126.004-.073.062-.059.079-.068.251-.027.18-.013.313-1.204.054-3.9-.166-1.93-.087-1.392-.562.09-.093.385-1.478-.001-.094-1.024-1.088-.118-.018-.1.141-1.122 2.151-.114.056-.322.097-.316.089-.121.019-.09.01-.499.013-.346-.051-2.612-1.351-4.765-4.69-.122-.28-.2-.663.16-.361 2.11-3.428 1.476-2.195.72-1.152.682-1.244.409-.982.043-.495-.052-1.162-.262-1.74-.402-.17-.428.04-.379-.026-.433-.106-1.826-.631-.333-.21-.282-.344-2.401-3.684.012-.082.035-.233 1.345-2.408.957-1.347.29-.266.08-.276-.18-.354-1.208-1.566-1.29-1.584-.448-.537-1.186-1.134-.248-.208-.272-.099-.409-.012-.448-.355-.25-.373-.105-2.027.02-.432.72-3.048.63-1.751.538-1.157.188-.47.144-.434 1.33-4.067-.25-2.08-1.288-2.333 5.249-3.596-.516-.002-.146-.034-.112-.053-.133-.072-.457-.267-3.608-5.508-.105-.242-.205-1.24-.536-4.947-.002-.026-.034-.356-.027-.372.05-.315.126-.588.127-.566.544-1.695.272-.686.851-2.936 1.703-6.356 1.38-5.555.137-1.246.354-3.254-2.092-.385-1.115-.093-.513.081-5.999-5.327-.044-.22.087-.216.055-.127.264-.401.104-.152 2.032-2.71.08.084 1.266 1.317-.024.438-.112.366.135.227 2.992-1.954 1.69-1.152.466-.408-1.556-.9-2.875-1.774-10.416-6.503-.223-.14-.657-.463-.45-.326-.26-.19-.302-.291-.714-.9-.495-.72-1.621-2.421-.415 3.604-.17 1.422-2.752.223-.547-.356-.57-.37.742-1.185.447-.517.149-.532-.124-.218-4.631-3.001-1.837-1.035-4.404.11-1.468.169-2.037.448-3.175-1.002h0l-2.906-1.75-1.06-1.72-3.006-.422-.448.21-1.285 1.56-1.144 2.026-.038.207.007.263.163.394.407.712.094.124.203.208.14.111 1.013.687.83 1.16.572 1.051.054.121.057.167-1.762 2.113-1.402-.088-.139-.025-1.246-1.068-1-2.02-.049-.166.01-.132.094-.212.14-.228.129-.282.053-.212.022-.2-.038-.19-.074-.228-.936-2.446-.937-.878-.338-.277-.592-.15-2.348.527-.534.172-2.122 1.436-.339.405-.402.624-.105.175-.128.224-.8 1.803.03.218.373.004.29.016.276.114 2.007 1.032.073.167.997 6.645-.223.035-.6.091-.893.11-2.778-3.011-6.816-8.842-2.078-3.298-.268-.432-1.58 1.67-.213.323-.836 1.589-.735 1.408-1.321 2.393-.34.559-1.494 2.382-.273.319-4.545 4.608-.677.677-6.763 5.204-1.957.92-.318.183-.319.337-.56.702-.293.417-.197.334-3.296 1.163-2.022.046-4.332-2.315-.218-.165-.192-.236-.14-.27-.108-.285-.135-.423-.214-.775.06-.494-.05-.181-3.457-7.21-.195-.252-.232-.29-1.4-1.528-.305-.234-1.805-1.084-2.582-1.479-.537-.282-.508-.264-4.913-3.168-4.593-6.032-4.324-5.763-.39-.566-.438-.634-1.013-.803-3.455-2.545-.544-.4-.235-.167-.57-.405-2.354-1.361-1.062-.574-4.113-3.958-.345-.646-1.312-2.342-.244-.255-1.497-1.244-1.362-1.047-.353-.302-.368-.333-.27-.301-.122-.22-.418-1.884-.762-2.17-.006-.005-.15-.117-.295-.23-.054-.042-2.051-1.577z'
              display='inline'
            />
          </g>
          <path
            id='path206'
            d='M417.676 162.778l.19-.67-.008-.233-.153-.222-3.259-1.365-.123-.045-.333.997-.08.275-.08.288-.001.295.38.198.273.14 1.708.665.351.072 1.135-.395z'
            display='inline'
          />
        </g>
      </g>

      {texts?.matera && (
        <g id='matera_text' pointerEvents='none' transform='translate(375, 300)'>
          <text y='2' textAnchor='middle' cursor='pointer' fontSize={textOptions.fontSize} fill={textOptions.color}>
            {texts?.matera}
          </text>
        </g>
      )}
      {texts?.potenza && (
        <g id='potenza_text' pointerEvents='none' transform='translate(145, 160)'>
          <text y='2' textAnchor='middle' cursor='pointer' fontSize={textOptions.fontSize} fill={textOptions.color}>
            {texts?.potenza}
          </text>
        </g>
      )}
    </svg>
  )
})