import React, { FC } from 'react'
import { useTheme } from 'styled-components'

type Props = {
  texts: any
  colors: any
}

const Valledaosta: FC<Props> = ({ texts, colors }) => {
  const theme = useTheme()
  const defaultColor = '#f8c300'

  colors = {
    aosta: colors.aosta || defaultColor
  }

  const textOptions = {
    color: theme.map.text.color,
    fontSize: 220
  }

  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      id='valledaosta'
      viewBox='0 0 2408.809 1496.63'
      version='1.1'
    >
      <g id='layer2' transform='matrix(3 0 0 3 0 0)'>
        <path
          id='aosta'
          d='M114.67 133.181l-1.988 1.615-4.596-.497-6.088-1.118-1.864-2.236-2.236-1.74-2.485-2.36-2.36-.745-1.242 1.49-2.237 1.367.249 4.845-1.864 2.61-2.112 1.863-2.112 2.982H79.76l-1.491-1.119-4.348-4.1-1.616-1.242-1.615-.994-3.105-.124-8.573 2.112-5.466 2.112-2.36 6.46s-.498 2.361-1.243 2.734c-.745.372-1.988 4.1-1.988 4.1l-.373 3.478 1.491 6.46.622 4.97-.994 2.982-.622 5.59-.87 2.36-2.98 1.864-1.74 6.336-1.367 5.094 1.243 4.845 1.615 7.703.497 2.733-.746 1.74-.621 1.49-.621 3.106.497 3.106.87 5.094.87 1.987 3.726 1.367 2.112 2.236-.248 2.858-1.243 2.981-.62 2.36-3.231 3.107-.621 1.988.373 1.863 1.863 1.367 2.112 1.615 2.112 1.49 1.118 5.715 4.97 10.064 7.702 4.224 3.976 7.454 2.485.994 1.615 2.236 3.727 2.112 3.478 1.864 2.237 1.366 1.242.746 1.49 1.118 4.35.745 2.732 1.367 3.852.994 3.106-.249.745-1.988 1.367-1.49 2.609-.249 1.366 2.609 1.242 1.49.497 4.1-.745 2.113-.621 1.863.745.87 1.491 3.478 2.857.994 1.367 1.367v1.367l-.373 1.615-.497 3.602.746 1.243 3.975 1.863 4.1 2.237 3.727-.125 2.237-.745 2.236-.994 1.988-1.367 2.609-.745 2.857-1.118 3.354-.87 2.36-.497h2.858l2.733.87.125 2.236 1.118 3.23.87 1.367 1.49.87 4.224.745 4.349.994 5.839 2.857.994 1.243.248 3.478-.745 1.491-1.118 1.615-.87 1.74-1.988 2.112-2.485 1.366-2.733.994-1.49.497-.125 7.703.746 3.478v5.964l-2.112 4.224-1.367 3.975-.994 4.845-.124 4.473v2.36l1.366.87 1.615 1.367 3.106 2.112 3.106 2.981.373 4.846-.497 4.1-1.367 1.739-.993 2.36.62 7.206.995 5.839 1.118 2.236v3.479l-1.118 1.118-.622 3.106.497 2.982.994 6.336 2.733 2.733 1.119 1.74 1.242 1.863v5.59l-1.74 2.485-.745 1.367v5.59l1.74 1.988 2.733 1.367 6.336 2.857 7.578.994 1.74.124 4.224 1.118 2.36-.745 4.597-.497 2.981 2.112.622 2.857-.373 2.36-1.615 1.864-1.615 1.615-2.61 4.224-.869 1.243.373 2.236 1.118 3.479 4.845.87 3.355-.498 1.366-1.49h5.342l9.194 2.36 7.951 2.112 2.982 1.74 1.366 1.49.684-.248.931-.9 2.112-1.088 1.025-1.056 1.709-4.007.802-10.15 1.757-2.724.615-2.371 2.372-3.69.44-9.663 1.317-2.636 1.845-2.723 5.622-2.9 1.318-.35 1.142 3.338 1.054 1.405 1.054 2.9.264 6.676-.527 5.095-1.055.878-2.196 1.494v2.635l.44 2.196 1.23 2.021.439 4.568 1.054 1.406 2.284.527.703.439.439-.44.966-1.844 1.054-3.075 1.933-2.02 4.744-.703 1.142.703 3.426.79 6.237 1.318 6.062.79 5.358 1.055 2.372.79.703 1.582 3.075 2.899 1.142.527.79 1.23.615 1.493 1.406.615 1.67.966 3.6.352 3.427-.527.966-1.933.967-.615 4.92-10.102 7.818-8.082 4.304-2.02 6.501-1.67 3.426-14.056 1.406-.79.615.527 4.831 1.317 1.318-.615 4.041-.79 5.71-.703h6.5l3.778.615 2.9 1.054 1.844.615 1.845-.263.44-1.318 1.844-1.142 1.054-1.494.967-.527 2.196-.878 1.581-1.406h1.845l.615.44.79.614 1.142-.527 5.886-1.142 4.13-1.845.965-1.317.615.088 3.075 1.054 1.494 1.23 1.844 4.568 1.23 1.405 3.514-.175 3.778-1.845 3.953-4.041 1.932-1.23 2.197-1.933.351-2.723-.527-.966 1.493-1.23 2.197-1.406 5.622-.615 1.581-1.405.615-1.67 7.028-6.94 3.865-1.844 1.23-.703 1.933-1.67 2.723-1.58 4.393-2.46 1.756-2.372.791-2.196 2.548-2.109.351-1.932 11.157-11.508 2.46-.44 2.723-.878 2.548-1.494s2.108-.263 2.46-.439c.35-.176 4.655-1.23 4.655-1.23l6.237.088 1.055.703 3.953 2.02 2.81.967 1.319.79.878 1.23 2.02.791h5.184l1.845-.703 3.953-4.129 1.142-1.669.615-1.23 1.317-.966.879-.966 5.974-2.109 4.128-1.054 3.25-.44 2.46.177 2.636 1.317 2.635 2.109 1.757 1.054 3.427 1.932 2.81 2.109 1.845.703 1.23.79 2.02 1.494.352.966 1.845.703.879 2.196 1.054 1.142 1.23.79.79 7.204.615 2.109 1.054-.088 2.284-.967 2.636-.966 6.237-3.163 2.9-1.23 1.493-.175 1.493.176 2.108 1.23.615.527.44-.44 2.46-.351 1.493 1.493 1.844 1.582 1.757.966 2.372 2.108 2.02.967 6.238 6.237 3.514 1.933.615.35.615-.263 1.845-1.23 1.142-1.142 1.581-.79 1.493-.615h1.23l.703.966 4.305.527 5.007-.351.79-.44 2.021-1.054 3.075-.966 1.581-.527 1.757.264 1.757.966.879 1.318 2.899 2.987.966 1.756 1.493.528 2.548-.176 1.757-.79.966-1.406 2.284-.879 1.142-1.318.703-1.757 3.075-3.25 12.035-5.798 2.899-.966 1.054-1.054 2.02-.879 1.055-1.054 3.953-2.108 2.987-2.9 1.054-1.932 2.02-2.108.528-3.25 4.304-.704 1.318-.702.703-.791 1.054-.44 1.054-1.053 2.196-1.055.79-.966 3.954-2.02 2.899-.879 1.054-.44.967-.878 10.102-.878 1.054-.44.703-.79.615-.264.615-1.493.44-.44 8.696 4.393 1.054.44.879-.352 1.932-.878 2.812-1.055 2.723-.615h2.723l.967.528 3.953 2.02 1.054.351.088 2.372 1.142 2.02.878 1.494.967.615 1.827-.657 1.677-.683-.496-2.485-1.18-2.795-.87-2.547-.622-1.429.56-.931.124-5.094.807-3.417.31-.186.684-1.49 2.858-6.399 3.105-2.36s2.796-5.529 2.858-5.777c.062-.249 2.236-2.485 2.236-2.485l1.926-.932 2.92-1.242 6.025-.56 2.795-1.304 1.18-4.1.373-1.49.062-1.367-8.386-8.138-.559-1.552-1.242-1.243-.994-2.92-.249-.807.311-1.615-.248-3.851s-.684-.684-.994-.808c-.31-.124-4.1-1.926-4.1-1.926l-.87-.434-.062-1.553.435-.746-.31-3.354-.87-3.976-2.05-1.18-1.802-1.49.497-4.287 3.168-9.255 1.056-1.18 2.92-2.05 3.044-.808 1.18-1.677 1.74-2.485 7.205-13.915.248-1.677-2.174-3.913-.931-.994-2.36-4.224-.684-.932.745-2.795.621-1.429-.124-2.423h-1.18l-.31.497-.932.56-1.119-.373-1.739-.87-3.044-.994-8.137-3.913-.87-.497-1.118-1.615-3.106-3.292-1.926-.932-2.112-2.236-.683-1.802-1.553-.559-.621-1.118-.994-3.106-.31-1.18.31-2.982.249-2.05-.373-1.988-1.864-1.739-2.236-1.118-2.982-3.168-2.733-5.777-.994-3.044-1.056-1.801-.434-.621.062-.746 1.304-2.92.932-.87s.683-5.093.683-5.341v-4.721l-.497-.994-1.18-7.392-.373-.994.124-1.801.373-1.18.808-.746 1.056-2.112 1.925-.932 2.423-.559-.186-3.603-.56-2.982-1.366-.87-1.242-1.304-.684-.559-.124-1.18-1.304-.807-.249-2.485.373-2.61.932-3.167 1.056-1.429.559-.31.745-.684.746-.248.993-1.305.311-1.366.994-.062.435-4.41.62-3.914-1.055-.808-2.423-2.36-1.925-4.846-1.118-4.845-.249-7.95-.621-10.437-.746-3.851-.372-4.348-.124-3.106.124-3.603.62-2.733 1.368-.746-.249-.994-1.988-.87-1.49-1.739-4.846-.62-6.709-.498-3.602-.87-.622-.993-.62-.497-.746-.994-4.97-1.615-1.863-.621-1.491.745-.994.994-1.74 1.118-1.863 1.74-1.739.993-1.118.994-2.236 1.118-1.243.746-.372.87h-.746l-.745-.498-5.715-5.963-1.864-1.118-11.057-10.809-3.603-1.49-4.845-.994h-3.23l-5.218 4.97-.87 2.235-2.36 2.112-1.242.622-.497 1.863-.994 2.112-1.243.373-.62.745-2.361-.62-2.858-.87-3.354-.373-.87-.994-.62-1.367-1.616-1.49-.373-1.74-1.615-1.118-1.242-2.236V56.776l1.49-4.97v-1.49l.125-3.23-2.236-1.864-1.988-1.242-.87-1.118-1.615-.746-1.615-.745-5.963-.622-4.224-1.615-1.367-2.857-1.863-4.1-1.864-3.106-1.118-2.112s-.497-2.857-.994-2.857-3.976-2.36-3.976-2.36l-4.224-.622-.87.87-1.49 1.118-3.106.745-1.615 2.112-2.733.994-.994.373-1.74-.497-7.826-.745-4.721-.746-.994.746-2.112.87-1.615.62-1.988-.745-11.181-.621-1.118-1.243-1.864-1.118-1.242-1.987-1.118-6.585-1.243-2.609-.87-1.49-4.1-.87-5.963.248-.993.745-6.833.125-.746.497-1.242.87-1.243 2.236-.745 2.857-.124 2.609.248 3.976.87 3.478.621 1.367.124 5.963-1.863 1.49-.373 1.243-2.112.746-.994.745-1.49-.373-3.728-1.242-4.348-.745-4.845-1.243-6.088-.994-1.863-.372-2.237.497-1.615 1.118-3.478 1.242-1.367.497-3.23 1.242-2.112.994-5.963 5.964-.373.994v.87l1.366 2.98.994 2.113-.372 3.851-1.615.746-1.74.497-1.242-.125-2.485-.745-2.733-.621-1.615.372-6.088 3.106-3.851 3.603-3.354 2.858-.622 2.112-2.36 2.484-.497 1.988-2.36 1.491-9.567 4.845-1.366 1.118-.994.87-1.367-.745-1.74-.125-3.478 2.237-1.118 1.863-5.094 5.467-2.857.62-1.988.498-1.118-2.112-.745-.994-3.727-1.491-.622-.497-5.59-2.982-1.243-.994-2.236-.993-2.609-2.237-1.49-1.366-2.61-2.36-1.615-1.119-.87-.87-1.242.497-1.366 1.615-1.243.373-3.85 2.485h-5.219l-2.112-1.491-1.74-1.864-2.608-.87-.87-.869-2.112-1.118-.373-.87-2.484-1.118-3.23-1.988-1.74-.372-1.49.124-1.988 1.118-1.243.994-1.118 1.864-.994.87-1.366 3.23-.373 1.863-.87 2.36-2.36 3.976-.373 1.118-.124 1.118-2.858.373-1.739.87-5.963 6.708-1.118 1.367-3.976-.373-.994-1.366-3.478-.249-1.491 1.242-1.74.497-2.981-.31-3.292-.994-2.858-.808-.559 1.43-2.857.248-1.678.87-1.677 2.173v2.423l-.87 1.49-2.415 1.29-2.81 1.756-1.582 1.582-1.933 1.054-1.58 2.284-.88 2.46.703 5.622 1.055 1.054-.527.879-.703.878-2.636 1.054-1.757 1.23-.878.527-1.933-.351-2.635-1.23-2.46-1.406-1.054-.878-1.933-.879-7.203-6.852-1.582-.702-.263-.264 1.471-.747 1.186-.549.11-3.228-2.284-1.56-2.196-.505-3.953.615-3.295 1.757-2.591 1.274-3.119.879-1.537 1.142-.967 3.821-1.054 1.186-2.108.79-3.03 3.295-2.197.966-1.845 1.801-.703.351-4.348.044-4.041-.439-1.625-.922-1.099-1.757-1.01-3.514-.966-2.592-.659-4.348-.395-2.767-2.153-1.89-1.098-2.108-3.645-3.82-1.274-2.153-3.207-3.075-.878-2.108-2.943-2.636-1.142-2.24-2.02-2.064s-.044-2.811-.044-3.119v-3.646l-.879-3.074-.747-2.24-4.04-3.778-2.373-1.01-3.777-3.91-1.845-.922-3.25.132-1.142.615-2.636 1.01-4.26 1.933-.923.834-1.757 1.274-.351 1.01-1.581.835-1.142 2.152-.879.967-1.01 1.932-1.142 1.098-1.845 3.954-1.054.966-1.098 2.02-.527.308-1.142.263-.132 4.305.439 3.382.264.747 1.01 2.064.351 2.109-.307 1.01-.79 1.757-2.285 4.173-.703 1.888-1.142 2.153-1.01.79-3.075 3.075s-5.973.351-6.28.351c-.308 0-4.876.66-4.876.66l-3.778 1.01-1.933.79-4.04 2.152-2.065 1.186-3.865 1.977-1.142.878-2.065 3.954-1.932 3.953-.572 1.23-.746.483-.132.703-3.338.659-2.153.483-1.142-.088-.57-.835-1.955.121-.11.406-2.504.571-1.888.44-1.01.615-1.89.263-1.377.22h0z'
          style={{ marker: 'none' }}
          fill={colors.aosta}
          fillOpacity='1'
          stroke={theme.colors.background}
          strokeDasharray='none'
          strokeDashoffset='0'
          strokeLinecap='butt'
          strokeLinejoin='round'
          strokeMiterlimit='4'
          strokeOpacity='1'
          strokeWidth='2'
          color='#000'
          display='inline'
          enableBackground='accumulate'
          overflow='visible'
          visibility='visible'
        />
      </g>

      {texts?.aosta && (
        <g id='aosta_text' pointerEvents='none' transform='translate(1270, 810)'>
          <text y='2' textAnchor='middle' cursor='pointer' fontSize={textOptions.fontSize} fill={textOptions.color}>
            {texts?.aosta}
          </text>
        </g>
      )}
    </svg>
  )
}

export { Valledaosta }
