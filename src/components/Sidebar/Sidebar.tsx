import "./Sidebar.scss"
import BaIcon from '@assets/logo/ba-icon.svg'
import NetworkIcon from "@assets/logo/ic-network.svg"
import ReportIcon from "@assets/logo/ic-report.svg"
import BudgetIcon from "@assets/logo/ic-budget.svg"
import DataIcon from "@assets/logo/ic-data.svg"
import PortalIcon from "@assets/logo/ic-portal.svg"
import InitiativesIcon from "@assets/logo/ic-initiavites.svg"
import StoriesIcon from "@assets/logo/ic-stories.svg"
import ProfilePicture from "@assets/logo/ic-ellips.png"

const MenuIcon = ({ icon, name }: { icon: string, name: string }) => {
  return (
    <div className='d-flex flex-column align-items-center'>
      <img src={icon} alt={`${name}-icon`} style={{ width: 24 }} />
      <span>{name}</span>
    </div>
  )
}


const Sidebar = () => {
  return (
    <div className='sc-sidebar p-2 border-right'>
      <div className='header d-flex flex-column align-items-center'>
        <img src={BaIcon} alt='ba-icon' className='mb-4 mt-3 mr-3 ml-3' />
        <div className='d-flex flex-column align-items-center' style={{ gap: '15px' }}>
          <MenuIcon
            icon={NetworkIcon}
            name={'Network'} />
          <MenuIcon
            icon={ReportIcon}
            name={'Report'} />
          <MenuIcon
            icon={BudgetIcon}
            name={'Budget'} />
          <MenuIcon
            icon={DataIcon}
            name={'Data'} />
          <MenuIcon
            icon={PortalIcon}
            name={'Portal'} />
          <MenuIcon
            icon={InitiativesIcon}
            name={'initiatives'} />
          <MenuIcon
            icon={StoriesIcon}
            name={'Stories'} />
        </div>
      </div>
      <div className='footer d-flex flex-column align-items-center' style={{ gap: '15px' }}>
        <img src={ProfilePicture} alt='profile-picture' />
        <div>Setting</div>
        <div>Help</div>
      </div>

    </div>
  )
}

export default Sidebar