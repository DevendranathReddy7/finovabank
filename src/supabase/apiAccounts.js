import supabase from "./Supabase"

export const getAccounts = async () => {

    const { data, error } = await supabase
        .from('Users')
        .select('*')
    if (error) {
        console.error(error)
        throw new Error('invalid user')
    }
    return data
}