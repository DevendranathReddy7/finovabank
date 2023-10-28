import supabase from "./Supabase"

export const getAccounts = async (userid) => {
    const { data, error } = await supabase
        .from('Users')
        .select('*').eq('userid', userid)
    if (error) {
        console.error(error)
        throw new Error('invalid user')
    }
    return data
}

export const getPaymnetTypes = async () => {

    // let { data, error } = await supabase
    //     .from('PaymnetCapabailites')
    //     .select('paymentTypes')

    let { data, error } = await supabase
        .from('Paymnets')
        .select('*').eq('userId', 1)

    if (error) {
        console.error(error)
        throw new Error('No Paymnets Found')
    }
    return data
}

