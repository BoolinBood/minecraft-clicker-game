interface Props {
  iconFileName: string
}

const Icon = ({iconFileName}: Props) => {
  const iconPath = `../../public/assets/icons/${iconFileName}.svg`;

  return (
    <img src={iconPath} alt="" />
  )
}

export default Icon