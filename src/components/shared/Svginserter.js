import React, { Component } from 'react';

//Svgs and Images
import Avatars from '../../../assets/svg/avatars';
import Email from '../../../assets/svg/email';
import OpenLock from '../../../assets/svg/openlock';
import CloseLock from '../../../assets/svg/closelock';
import MailLogo from '../../../assets/svg/mailLogo';
import NextLogo from '../../../assets/svg/nextLogo';
import AccountLogo from '../../../assets/svg/accountLogo';
import PlusSign from '../../../assets/svg/plusSign';
import House_01 from '../../../assets/svg/house_01';
import House_02 from '../../../assets/svg/house_02';
import Fridge_01 from '../../../assets/svg/fridge_01';
import Fridge_02 from '../../../assets/svg/fridge_02';
import Notification_01 from '../../../assets/svg/notification_01';
import Notification_02 from '../../../assets/svg/notification_02';
import Recycle_01 from '../../../assets/svg/recycle_01';
import Recycle_02 from '../../../assets/svg/recycle_02';
import MenuBurger from '../../../assets/svg/menuBurger';
import MenuClose from '../../../assets/svg/menuClose';
import MenuClose2 from '../../../assets/svg/menuClose2';
import PlusCircle from '../../../assets/svg/plusCircle';
import MinusCircle from '../../../assets/svg/minusCircle';
import MenuWrapper from '../../../assets/svg/menuWrapperLogo';
import UserProfileDefault from '../../../assets/svg/userProfileDefault';
import SearchIcon from '../../../assets/svg/searchIcon';
import FilterIcon from '../../../assets/svg/filterIcon';
import ArrowRight from '../../../assets/svg/arrowRight';
import Bannerillustration from '../../../assets/svg/bannerillustration';
import Heart from '../../../assets/svg/heart';
import Trash1 from '../../../assets/svg/trash1';
import Back from '../../../assets/svg/back';
import Empty_notification from '../../../assets/svg/empty_notification';
import Star_filled from '../../../assets/svg/star_filled';
import Star_empty from '../../../assets/svg/star_empty';
class Svginserter extends Component {
      components = {
            Avatars: Avatars,
            Email: Email,
            Password: OpenLock,
            ConfirmPass: CloseLock,
            Mail: MailLogo,
            Next: NextLogo,
            Account: AccountLogo,
            Plus: PlusSign,
            House_01: House_01,
            House_02: House_02,
            Fridge_01: Fridge_01,
            Fridge_02: Fridge_02,
            Notification_01: Notification_01,
            Notification_02: Notification_02,
            Recycle_01: Recycle_01,
            Recycle_02: Recycle_02,
            Menu: MenuBurger,
            MenuClose: MenuClose,
            MenuClose2: MenuClose2,
            PlusCircle: PlusCircle,
            MinusCircle: MinusCircle,
            MenuWrapper: MenuWrapper,
            UserProfileDefault: UserProfileDefault,
            SearchIcon: SearchIcon,
            FilterIcon: FilterIcon,
            ArrowRight: ArrowRight,
            Bannerillustration: Bannerillustration,
            Heart: Heart,
            Trash1: Trash1,
            Back: Back,
            Empty_notification: Empty_notification,
            Star_filled: Star_filled,
            Star_empty: Star_empty,
      };
      render(...props) {
            const TagName = this.components[this.props.tag];
            const st = this.props.style;
            return <TagName style={st} width={this.props.width} height={this.props.height} />;
      }
}

export default Svginserter;
