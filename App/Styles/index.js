let itemCell = {
    backgroundColor: 'white',
    margin: 10,
    marginBottom: 0,
    borderRadius: 2,
    shadowColor: '#000000',
    shadowOpacity: 0.1,
    shadowRadius: 0,
    shadowOffset: {
        height: 2,
        width: 1
    }
}

export default {
    containerBg: {
        backgroundColor: '#efeff4'
    },
    itemCell: itemCell,
    card: {
        tweetContainer: {
            ...itemCell,
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: 'white',
            paddingTop: 4,
            paddingBottom: 10
        },
        avatar: {
            backgroundColor: 'gray',
            width: 50,
            height: 50,
            marginLeft: 10,
            borderRadius: 4
        },
        userContainer: {
            flexDirection: 'row'
        },
        time: {
            marginLeft: 4,
            fontSize: 13,
            color: '#8999a5',
            marginTop: 2
        },
        name: {
            fontWeight: '600',
            fontSize: 15
        },
        text: {
            marginTop: 5
        },
        rightContainer: {
            flex: 1,
            padding: 10
        }
    }
}