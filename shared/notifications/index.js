// Messages and descriptions for these locale keys are in app/_locales/en/messages.json
export const UI_NOTIFICATIONS = {
  1: {
    id: 1,
    date: '2021-03-17',
    image: {
      src: 'images/mobile-link-qr.svg',
      height: '230px',
      width: '230px',
      placeImageBelowDescription: true,
    },
  },
  3: {
    id: 3,
    date: '2021-03-08',
  },
  4: {
    id: 4,
    date: '2021-05-11',
    image: {
      src: 'images/source-logos-bsc.svg',
      width: '100%',
    },
  },
  5: {
    id: 5,
    date: '2021-06-09',
  },
  6: {
    id: 6,
    date: '2021-05-26',
  },
  7: {
    id: 7,
    date: '2021-09-17',
  },
  8: {
    id: 8,
    date: '2021-11-01',
  },
  9: {
    id: 9,
    date: '2021-12-07',
    image: {
      src: 'images/txinsights.png',
      width: '80%',
    },
  },
  10: {
    id: 10,
    date: '2022-09-15',
    image: {
      src: 'images/token-detection.svg',
      width: '100%',
    },
  },
  11: {
    id: 11,
    date: '2022-09-15',
  },
  12: {
    id: 12,
    date: '2022-05-18',
    image: {
      src: 'images/darkmode-banner.png',
      width: '100%',
    },
  },
  13: {
    id: 13,
    date: '2022-09-15',
  },
  14: {
    id: 14,
    date: '2022-09-15',
  },
  15: {
    id: 15,
    date: '2022-09-15',
  },
  16: {
    id: 16,
    date: null,
  },
  17: {
    id: 17,
    date: null,
  },
  18: {
    id: 18,
    date: null,
    image: {
      src: 'images/open-sea-security-provider.svg',
      width: '100%',
    },
  },
  19: {
    id: 19,
    date: null,
    image: {
      src: 'images/nfts.svg',
      width: '100%',
    },
  },
  20: {
    id: 20,
    date: null,
  },
  21: {
    id: 21,
    date: null,
    image: {
      src: 'images/swaps-redesign.svg',
      width: '100%',
    },
  },
  22: {
    id: 22,
    date: null,
    image: {
      src: 'images/global-menu-block-explorer.svg',
      width: '100%',
    },
  },
  ///: BEGIN:ONLY_INCLUDE_IN(blockaid)
  23: {
    id: 23,
    date: null,
    image: {
      src: 'images/blockaid-security-provider.png',
      width: '100%',
    },
  },
  ///: END:ONLY_INCLUDE_IN
};

export const getTranslatedUINotifications = (t, locale) => {
  const formattedLocale = locale?.replace('_', '-');
  return {
    1: {
      ...UI_NOTIFICATIONS[1],
      title: t('notifications1Title'),
      description: t('notifications1Description'),
      date: new Intl.DateTimeFormat(formattedLocale).format(
        new Date(UI_NOTIFICATIONS[1].date),
      ),
    },
    3: {
      ...UI_NOTIFICATIONS[3],
      title: t('notifications3Title'),
      description: t('notifications3Description'),
      actionText: t('notifications3ActionText'),
      date: new Intl.DateTimeFormat(formattedLocale).format(
        new Date(UI_NOTIFICATIONS[3].date),
      ),
    },
    4: {
      ...UI_NOTIFICATIONS[4],
      title: t('notifications4Title'),
      description: t('notifications4Description'),
      actionText: t('notifications4ActionText'),
      date: new Intl.DateTimeFormat(formattedLocale).format(
        new Date(UI_NOTIFICATIONS[4].date),
      ),
    },
    5: {
      ...UI_NOTIFICATIONS[5],
      title: t('secretRecoveryPhrase'),
      description: t('notifications5Description'),
      actionText: t('notifications3ActionText'),
      date: new Intl.DateTimeFormat(formattedLocale).format(
        new Date(UI_NOTIFICATIONS[5].date),
      ),
    },
    6: {
      ...UI_NOTIFICATIONS[6],
      title: t('notifications6Title'),
      description: [
        t('notifications6DescriptionOne'),
        t('notifications6DescriptionTwo'),
        t('notifications6DescriptionThree'),
      ],
      date: new Intl.DateTimeFormat(formattedLocale).format(
        new Date(UI_NOTIFICATIONS[6].date),
      ),
    },
    7: {
      ...UI_NOTIFICATIONS[7],
      title: t('notifications7Title'),
      description: [
        t('notifications7DescriptionOne'),
        t('notifications7DescriptionTwo'),
      ],
      date: new Intl.DateTimeFormat(formattedLocale).format(
        new Date(UI_NOTIFICATIONS[7].date),
      ),
    },
    8: {
      ...UI_NOTIFICATIONS[8],
      title: t('notifications8Title'),
      description: [
        t('notifications8DescriptionOne'),
        t('notifications8DescriptionTwo'),
      ],
      date: new Intl.DateTimeFormat(formattedLocale).format(
        new Date(UI_NOTIFICATIONS[8].date),
      ),
      actionText: t('notifications8ActionText'),
    },
    9: {
      ...UI_NOTIFICATIONS[9],
      title: t('notifications9Title'),
      description: [
        t('notifications9DescriptionOne'),
        t('notifications9DescriptionTwo'),
      ],
      date: new Intl.DateTimeFormat(formattedLocale).format(
        new Date(UI_NOTIFICATIONS[9].date),
      ),
    },
    10: {
      ...UI_NOTIFICATIONS[10],
      title: t('notifications10Title'),
      description: [
        t('notifications10DescriptionOne'),
        t('notifications10DescriptionTwo'),
        t('notifications10DescriptionThree'),
      ],
      actionText: t('notifications10ActionText'),
      date: new Intl.DateTimeFormat(formattedLocale).format(
        new Date(UI_NOTIFICATIONS[10].date),
      ),
    },
    11: {
      ...UI_NOTIFICATIONS[11],
      title: t('notifications11Title'),
      description: t('notifications11Description'),
      date: new Intl.DateTimeFormat(formattedLocale).format(
        new Date(UI_NOTIFICATIONS[11].date),
      ),
    },
    12: {
      ...UI_NOTIFICATIONS[12],
      title: t('notifications12Title'),
      description: t('notifications12Description'),
      actionText: t('notifications12ActionText'),
      date: new Intl.DateTimeFormat(formattedLocale).format(
        new Date(UI_NOTIFICATIONS[12].date),
      ),
    },
    13: {
      ...UI_NOTIFICATIONS[13],
      title: t('notifications13Title'),
      description: t('notifications13Description'),
      actionText: t('notifications13ActionText'),
      date: new Intl.DateTimeFormat(formattedLocale).format(
        new Date(UI_NOTIFICATIONS[13].date),
      ),
    },
    14: {
      ...UI_NOTIFICATIONS[14],
      title: t('notifications14Title'),
      description: t('notifications14Description'),
      actionText: t('notifications14ActionText'),
      date: UI_NOTIFICATIONS[14].date
        ? new Intl.DateTimeFormat(formattedLocale).format(
            new Date(UI_NOTIFICATIONS[14].date),
          )
        : '',
    },
    15: {
      ...UI_NOTIFICATIONS[15],
      title: t('notifications15Title'),
      description: t('notifications15Description'),
      date: UI_NOTIFICATIONS[15].date
        ? new Intl.DateTimeFormat(formattedLocale).format(
            new Date(UI_NOTIFICATIONS[15].date),
          )
        : '',
    },
    18: {
      ...UI_NOTIFICATIONS[18],
      title: t('notifications18Title'),
      description: [
        t('notifications18DescriptionOne'),
        t('notifications18DescriptionTwo'),
        t('notifications18DescriptionThree'),
      ],
      actionText: t('notifications18ActionText'),
      date: UI_NOTIFICATIONS[18].date
        ? new Intl.DateTimeFormat(formattedLocale).format(
            new Date(UI_NOTIFICATIONS[18].date),
          )
        : '',
    },

    19: {
      ...UI_NOTIFICATIONS[19],
      title: t('notifications19Title'),
      description: [
        t('notifications19DescriptionOne'),
        t('notifications19DescriptionTwo'),
        t('notifications19DescriptionThree'),
      ],
      actionText: t('notifications19ActionText'),
      date: UI_NOTIFICATIONS[19].date
        ? new Intl.DateTimeFormat(formattedLocale).format(
            new Date(UI_NOTIFICATIONS[19].date),
          )
        : '',
    },
    20: {
      ...UI_NOTIFICATIONS[20],
      title: t('notifications20Title'),
      description: [t('notifications20Description')],
      actionText: t('notifications20ActionText'),
      date: UI_NOTIFICATIONS[20].date
        ? new Intl.DateTimeFormat(formattedLocale).format(
            new Date(UI_NOTIFICATIONS[20].date),
          )
        : '',
    },
    21: {
      ...UI_NOTIFICATIONS[21],
      title: t('notifications21Title'),
      description: t('notifications21Description'),
      actionText: t('notifications21ActionText'),
      date: UI_NOTIFICATIONS[21].date
        ? new Intl.DateTimeFormat(formattedLocale).format(
            new Date(UI_NOTIFICATIONS[21].date),
          )
        : '',
    },
    22: {
      ...UI_NOTIFICATIONS[22],
      title: t('notifications22Title'),
      description: t('notifications22Description'),
      actionText: t('notifications22ActionText'),
      date: UI_NOTIFICATIONS[22].date
        ? new Intl.DateTimeFormat(formattedLocale).format(
            new Date(UI_NOTIFICATIONS[22].date),
          )
        : '',
    },
    ///: BEGIN:ONLY_INCLUDE_IN(blockaid)
    23: {
      ...UI_NOTIFICATIONS[23],
      title: t('notifications23Title'),
      description: [
        t('notifications23DescriptionOne'),
        t('notifications23DescriptionTwo'),
        t('notifications23DescriptionThree'),
      ],
      actionText: t('notifications23ActionText'),
      date: UI_NOTIFICATIONS[23].date
        ? new Intl.DateTimeFormat(formattedLocale).format(
            new Date(UI_NOTIFICATIONS[23].date),
          )
        : '',
    },
    ///: END:ONLY_INCLUDE_IN
  };
};
