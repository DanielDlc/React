import axios from 'axios';
import { toast } from 'react-toastify';
import Icon from '../../assets/img/notification-icon.svg'
import { BASE_URL } from '../../utils/request';

import './styles.css'

type Props = {
  saleId: number;
}

function handleClick(id : number){
  axios(`${BASE_URL}/sales/${id}/notification`)
  .then(response => {toast("SMS enviado com sucesso")
    });
}

function NotificationButton( {saleId} : Props ) { 
    return(
      <div className="dsmeta-red-btn" onClick={() => handleClick(saleId)}>
        <img src={Icon} alt="Notificar" />
      </div>
    )
}

export default NotificationButton