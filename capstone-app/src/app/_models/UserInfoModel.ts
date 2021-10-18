export class UserInfoModel
{
	guid: string = '';
	first_name: string = '';
	last_name: string = '';
	email: string = '';
	serialNumber: string = '';

	constructor(obj: any = null)
	{
		if(obj != null)
		{
			Object.assign(this, obj);
		}
	}
}