const handleType = {
    "Key": {
        "Male": {
            mean: 36.72,
            stdDev: 5.75
        },
        "Female": {
            mean: 28.76,
            stdDev: 0.44
        }
    },
    "Door Knob": {
        "Male": {
            mean: 61.51,
            stdDev: 21.86
        },
        "Female": {
            mean: 46.47,
            stdDev: 12.75
        }
    },
    "L-Shaped": {
        "Right": {
            "Counter-clockwise": {
                "Male": {
                    mean: 154,
                    stdDev: 46.02
                },
                "Female": {
                    mean: 101.64,
                    stdDev: 30.38
                }
            },
            "Clockwise": {
                "Male": {
                    mean: 121.26,
                    stdDev: 30.09
                },
                "Female": {
                    mean: 80.03,
                    stdDev: 19.86
                }
            }
        },
        "Left": {
            "Clockwise": {
                "Male": {
                    mean: 154.00,
                    stdDev: 46.02
                },
                "Female": {
                    mean: 101.64,
                    stdDev: 30.38
                }
            },
            "Counter-clockwise": {
                "Male": {
                    mean: 121.26,
                    stdDev: 30.09
                },
                "Female": {
                    mean: 80.03,
                    stdDev: 19.86
                }
            }
        }
    },
    "Ridged Knob": {
        "Male": {
            mean: 37.79,
            stdDev: 8.67
        },
        "Female": {
            mean: 25.40,
            stdDev: 5.66
        }
    },
    "Tap": {
        "Male": {
            mean: 73.20,
            stdDev: 19.91
        },
        "Female": {
            mean: 53.37,
            stdDev: 13.28
        }
    },
    "Wing Nut": {
        "Male": {
            mean: 34.96,
            stdDev: 9.74
        },
        "Female": {
            mean: 23.90,
            stdDev: 5.13
        }
    },
    "Jar Lid": {
        "Knurled": {
            "1.8 diameter": {
                "Male": {
                    mean: 39.83,
                    stdDev: 11.33
                },
                "Female": {
                    mean: 31.95,
                    stdDev: 10.18
                }
            },
            "2.6 diameter": {
                "Male": {
                    mean: 58.68,
                    stdDev: 13.28
                },
                "Female": {
                    mean: 42.13,
                    stdDev: 12.39
                }
            },
            "3.3 diameter": {
                "Male": {
                    mean: 74.61,
                    stdDev: 15.84
                },
                "Female": {
                    mean: 52.48,
                    stdDev: 13.45
                }
            }
        },
        "Smooth": {
            "1.8 diameter": {
                "Male": {
                    mean: 32.66,
                    stdDev: 10.09
                },
                "Female": {
                    mean: 28.59,
                    stdDev: 10.09
                }
            },
            "2.6 diameter": {
                "Male": {
                    mean: 50.01,
                    stdDev: 10.80
                },
                "Female": {
                    mean: 38.85,
                    stdDev: 12.39
                }
            },
            "3.3 diameter": {
                "Male": {
                    mean: 67.27,
                    stdDev: 15.22
                },
                "Female": {
                    mean: 51.51,
                    stdDev: 16.73
                }
            }
        }
    },
    "Round Knob": {
        "Knurled": {
            "0.125 diameter": {
                "Male": {
                    mean: 0.57,
                    stdDev: 0.19
                },
                "Female": {
                    mean: 0.38,
                    stdDev: 0.13
                }
            },
            "0.25 diameter": {
                "Male": {
                    mean: 1.22,
                    stdDev: 0.34
                },
                "Female": {
                    mean: 0.81,
                    stdDev: 0.22
                }
            },
            "0.5 diameter": {
                "Male": {
                    mean: 1.99,
                    stdDev: 0.84
                },
                "Female": {
                    mean: 1.33,
                    stdDev: 0.56
                }
            },
            "0.75 diameter": {
                "Male": {
                    mean: 5.81,
                    stdDev: 1.98
                },
                "Female": {
                    mean: 3.88,
                    stdDev: 1.32
                }
            },
            "1.0 diameter": {
                "Male": {
                    mean: 7.25,
                    stdDev: 2.22
                },
                "Female": {
                    mean: 4.82,
                    stdDev: 1.48
                }
            },
            "1.5 diameter": {
                "Male": {
                    mean: 9.17,
                    stdDev: 2.35
                },
                "Female": {
                    mean: 6.11,
                    stdDev: 1.56
                }
            },
            "2.0 diameter": {
                "Male": {
                    mean: 13.13,
                    stdDev: 3.05
                },
                "Female": {
                    mean: 8.74,
                    stdDev: 2.04
                }
            },
            "3.0 diameter": {
                "Male": {
                    mean: 29.85,
                    stdDev: 8.53
                },
                "Female": {
                    mean: 19.88,
                    stdDev: 5.68
                }
            },
            "4.0 diameter": {
                "Male": {
                    mean: 43.62,
                    stdDev: 10.87
                },
                "Female": {
                    mean: 29.05,
                    stdDev: 7.24
                }
            },
            "5.0 diameter": {
                "Male": {
                    mean: 60.82,
                    stdDev: 16.42
                },
                "Female": {
                    mean: 40.51,
                    stdDev: 10.93
                }
            }
        },
        "Smooth": {
            "0.125 diameter": {
                "Male": {
                    mean: 0.19,
                    stdDev: 0.10
                },
                "Female": {
                    mean: 0.12,
                    stdDev: 0.06
                }
            },
            "0.25 diameter": {
                "Male": {
                    mean: 0.52,
                    stdDev: 0.20
                },
                "Female": {
                    mean: 0.35,
                    stdDev: 0.13
                }
            },
            "0.5 diameter": {
                "Male": {
                    mean: 1.36,
                    stdDev: 0.48
                },
                "Female": {
                    mean: 0.90,
                    stdDev: 0.32
                }
            },
            "0.75 diameter": {
                "Male": {
                    mean: 2.49,
                    stdDev: 0.66
                },
                "Female": {
                    mean: 1.66,
                    stdDev: 0.44
                }
            },
            "1.0 diameter": {
                "Male": {
                    mean: 3.69,
                    stdDev: 1.33
                },
                "Female": {
                    mean: 2.46,
                    stdDev: 0.89
                }
            },
            "1.5 diameter": {
                "Male": {
                    mean: 6.09,
                    stdDev: 1.65
                },
                "Female": {
                    mean: 4.05,
                    stdDev: 1.10
                }
            },
            "2.0 diameter": {
                "Male": {
                    mean: 9.25,
                    stdDev: 2.92
                },
                "Female": {
                    mean: 6.16,
                    stdDev: 1.95
                }
            },
            "3.0 diameter": {
                "Male": {
                    mean: 16.69,
                    stdDev: 5.07
                },
                "Female": {
                    mean: 11.12,
                    stdDev: 3.38
                }
            },
            "4.0 diameter": {
                "Male": {
                    mean: 28.38,
                    stdDev: 8.45
                },
                "Female": {
                    mean: 18.91,
                    stdDev: 5.63
                }
            },
            "5.0 diameter": {
                "Male": {
                    mean: 44.77,
                    stdDev: 14.11
                },
                "Female": {
                    mean: 29.82,
                    stdDev: 9.40
                }
            }
        }
    },
    "Regular Screwdriver": {
        "Right": {
            "Counter-clockwise": {
                "Palm-down (60 Pronated)": {
                    "Male": {
                        mean: 18.19,
                        stdDev: 5.64
                    },
                    "Female": {
                        mean: 12.00,
                        stdDev: 3.72
                    }
                },
                "Hand-shake (Neutral)": {
                    "Male": {
                        mean: 35.03,
                        stdDev: 6.46
                    },
                    "Female": {
                        mean: 23.12,
                        stdDev: 4.26
                    }
                },
                "Palm-up (60 Supinated)": {
                    "Male": {
                        mean: 44.26,
                        stdDev: 9.14
                    },
                    "Female": {
                        mean: 29.21,
                        stdDev: 6.03
                    }
                }
            },
            "Clockwise": {
                "Palm-down (60 Pronated)": {
                    "Male": {
                        mean: 46.19,
                        stdDev: 13.08
                    },
                    "Female": {
                        mean: 30.49,
                        stdDev: 8.63
                    }
                },
                "Hand-shake (Neutral)": {
                    "Male": {
                        mean: 44.94,
                        stdDev: 9.53
                    },
                    "Female": {
                        mean: 29.66,
                        stdDev: 6.29
                    }
                },
                "Palm-up (60 Supinated)": {
                    "Male": {
                        mean: 36.52,
                        stdDev: 12.15
                    },
                    "Female": {
                        mean: 24.10,
                        stdDev: 8.02
                    }
                }
            }
        },
        "Left": {
            "Clockwise": {
                "Palm-down (60 Pronated)": {
                    "Male": {
                        mean: 18.19,
                        stdDev: 5.64
                    },
                    "Female": {
                        mean: 12.00,
                        stdDev: 3.72
                    }
                },
                "Hand-shake (Neutral)": {
                    "Male": {
                        mean: 35.03,
                        stdDev: 6.46
                    },
                    "Female": {
                        mean: 23.12,
                        stdDev: 4.26
                    }
                },
                "Palm-up (60 Supinated)": {
                    "Male": {
                        mean: 44.26,
                        stdDev: 9.14
                    },
                    "Female": {
                        mean: 29.21,
                        stdDev: 6.03
                    }
                }
            },
            "Counter-clockwise": {
                "Palm-down (60 Pronated)": {
                    "Male": {
                        mean: 46.19,
                        stdDev: 13.08
                    },
                    "Female": {
                        mean: 30.49,
                        stdDev: 8.63
                    }
                },
                "Hand-shake (Neutral)": {
                    "Male": {
                        mean: 44.94,
                        stdDev: 9.53
                    },
                    "Female": {
                        mean: 29.66,
                        stdDev: 6.29
                    }
                },
                "Palm-up (60 Supinated)": {
                    "Male": {
                        mean: 36.52,
                        stdDev: 12.15
                    },
                    "Female": {
                        mean: 24.10,
                        stdDev: 8.02
                    }
                }
            }
        }
    },
    "Pistol Grip Screwdriver": {
        "Right": {
            "Counter-clockwise": {
                "Palm-down (60 Pronated)": {
                    "Male": {
                        mean: 31.42,
                        stdDev: 17.36
                    },
                    "Female": {
                        mean: 18.22,
                        stdDev: 10.07
                    }
                },
                "Hand-shake (Neutral)": {
                    "Male": {
                        mean: 68.51,
                        stdDev: 21.61
                    },
                    "Female": {
                        mean: 39.74,
                        stdDev: 12.54
                    }
                },
                "Palm-up (60 Supinated)": {
                    "Male": {
                        mean: 103.64,
                        stdDev: 24.84
                    },
                    "Female": {
                        mean: 60.11,
                        stdDev: 14.40
                    }
                }
            },
            "Clockwise": {
                "Palm-down (60 Pronated)": {
                    "Male": {
                        mean: 105.37,
                        stdDev: 26.76
                    },
                    "Female": {
                        mean: 55.85,
                        stdDev: 14.19
                    }
                },
                "Hand-shake (Neutral)": {
                    "Male": {
                        mean: 87.84,
                        stdDev: 19.10
                    },
                    "Female": {
                        mean: 46.56,
                        stdDev: 10.12
                    }
                },
                "Palm-up (60 Supinated)": {
                    "Male": {
                        mean: 52.90,
                        stdDev: 19.48
                    },
                    "Female": {
                        mean: 28.04,
                        stdDev: 10.32
                    }
                }
            }
        },
        "Left": {
            "Clockwise": {
                "Palm-down (60 Pronated)": {
                    "Male": {
                        mean: 31.42,
                        stdDev: 17.36
                    },
                    "Female": {
                        mean: 18.22,
                        stdDev: 10.07
                    }
                },
                "Hand-shake (Neutral)": {
                    "Male": {
                        mean: 68.51,
                        stdDev: 21.61
                    },
                    "Female": {
                        mean: 39.74,
                        stdDev: 12.54
                    }
                },
                "Palm-up (60 Supinated)": {
                    "Male": {
                        mean: 103.64,
                        stdDev: 24.84
                    },
                    "Female": {
                        mean: 60.11,
                        stdDev: 14.40
                    }
                }
            },
            "Counter-clockwise": {
                "Palm-down (60 Pronated)": {
                    "Male": {
                        mean: 105.37,
                        stdDev: 26.76
                    },
                    "Female": {
                        mean: 55.85,
                        stdDev: 14.19
                    }
                },
                "Hand-shake (Neutral)": {
                    "Male": {
                        mean: 87.84,
                        stdDev: 19.10
                    },
                    "Female": {
                        mean: 46.56,
                        stdDev: 10.12
                    }
                },
                "Palm-up (60 Supinated)": {
                    "Male": {
                        mean: 52.90,
                        stdDev: 19.48
                    },
                    "Female": {
                        mean: 28.04,
                        stdDev: 10.32
                    }
                }
            }
        }
    },
    "T-Handle": {
        "Right": {
            "Elbow Angle 180": {
                "Counter-clockwise": {
                    "Palm-down (75% Range of Motion)": {
                        "Male": {
                            mean: 113.29,
                            stdDev: 40.71
                        },
                        "Female": {
                            mean: 65.71,
                            stdDev: 23.61
                        }
                    },
                    "Hand-shake (Neutral)": {
                        "Male": {
                            mean: 103.55,
                            stdDev: 30.09
                        },
                        "Female": {
                            mean: 60.06,
                            stdDev: 17.45
                        }
                    },
                    "Palm-up (75% Range of Motion)": {
                        "Male": {
                            mean: 103.55,
                            stdDev: 25.67
                        },
                        "Female": {
                            mean: 60.06,
                            stdDev: 14.89
                        }
                    }
                },
                "Clockwise": {
                    "Palm-down (75% Range of Motion)": {
                        "Male": {
                            mean: 128.34,
                            stdDev: 44.25
                        },
                        "Female": {
                            mean: 68.02,
                            stdDev: 23.45
                        }
                    },
                    "Hand-shake (Neutral)": {
                        "Male": {
                            mean: 102.67,
                            stdDev: 41.60
                        },
                        "Female": {
                            mean: 54.41,
                            stdDev: 22.05
                        }
                    },
                    "Palm-up (75% Range of Motion)": {
                        "Male": {
                            mean: 99.13,
                            stdDev: 60.19
                        },
                        "Female": {
                            mean: 52.54,
                            stdDev: 31.90
                        }
                    }
                }
            },
            "Elbow Angle 135": {
                "Counter-clockwise": {
                    "Palm-down (75% Range of Motion)": {
                        "Male": {
                            mean: 107.09,
                            stdDev: 44.25
                        },
                        "Female": {
                            mean: 62.11,
                            stdDev: 25.67
                        }
                    },
                    "Hand-shake (Neutral)": {
                        "Male": {
                            mean: 119.49,
                            stdDev: 26.55
                        },
                        "Female": {
                            mean: 69.30,
                            stdDev: 15.40
                        }
                    },
                    "Palm-up (75% Range of Motion)": {
                        "Male": {
                            mean: 117.71,
                            stdDev: 29.21
                        },
                        "Female": {
                            mean: 68.27,
                            stdDev: 16.94
                        }
                    }
                },
                "Clockwise": {
                    "Palm-down (75% Range of Motion)": {
                        "Male": {
                            mean: 139.84,
                            stdDev: 56.64
                        },
                        "Female": {
                            mean: 74.12,
                            stdDev: 30.02
                        }
                    },
                    "Hand-shake (Neutral)": {
                        "Male": {
                            mean: 126.57,
                            stdDev: 49.56
                        },
                        "Female": {
                            mean: 67.08,
                            stdDev: 26.27
                        }
                    },
                    "Palm-up (75% Range of Motion)": {
                        "Male": {
                            mean: 115.06,
                            stdDev: 64.61
                        },
                        "Female": {
                            mean: 60.98,
                            stdDev: 34.24
                        }
                    }
                }
            },
            "Elbow Angle 90": {
                "Counter-clockwise": {
                    "Palm-down (75% Range of Motion)": {
                        "Male": {
                            mean: 97.36,
                            stdDev: 50.45
                        },
                        "Female": {
                            mean: 56.47,
                            stdDev: 29.26
                        }
                    },
                    "Hand-shake (Neutral)": {
                        "Male": {
                            mean: 113.29,
                            stdDev: 39.83
                        },
                        "Female": {
                            mean: 65.71,
                            stdDev: 23.10
                        }
                    },
                    "Palm-up (75% Range of Motion)": {
                        "Male": {
                            mean: 115.94,
                            stdDev: 35.40
                        },
                        "Female": {
                            mean: 67.25,
                            stdDev: 20.53
                        }
                    }
                },
                "Clockwise": {
                    "Palm-down (75% Range of Motion)": {
                        "Male": {
                            mean: 137.19,
                            stdDev: 53.99
                        },
                        "Female": {
                            mean: 72.71,
                            stdDev: 28.61
                        }
                    },
                    "Hand-shake (Neutral)": {
                        "Male": {
                            mean: 138.96,
                            stdDev: 55.76
                        },
                        "Female": {
                            mean: 73.65,
                            stdDev: 29.55
                        }
                    },
                    "Palm-up (75% Range of Motion)": {
                        "Male": {
                            mean: 117.71,
                            stdDev: 69.92
                        },
                        "Female": {
                            mean: 62.39,
                            stdDev: 37.06
                        }
                    }
                }
            },
            "Elbow Angle 45": {
                "Counter-clockwise": {
                    "Palm-down (75% Range of Motion)": {
                        "Male": {
                            mean: 79.66,
                            stdDev: 42.48
                        },
                        "Female": {
                            mean: 46.20,
                            stdDev: 24.64
                        }
                    },
                    "Hand-shake (Neutral)": {
                        "Male": {
                            mean: 104.44,
                            stdDev: 33.63
                        },
                        "Female": {
                            mean: 60.57,
                            stdDev: 19.51
                        }
                    },
                    "Palm-up (75% Range of Motion)": {
                        "Male": {
                            mean: 103.55,
                            stdDev: 23.90
                        },
                        "Female": {
                            mean: 60.06,
                            stdDev: 13.86
                        }
                    }
                },
                "Clockwise": {
                    "Palm-down (75% Range of Motion)": {
                        "Male": {
                            mean: 143.38,
                            stdDev: 51.33
                        },
                        "Female": {
                            mean: 75.99,
                            stdDev: 27.21
                        }
                    },
                    "Hand-shake (Neutral)": {
                        "Male": {
                            mean: 122.14,
                            stdDev: 41.60
                        },
                        "Female": {
                            mean: 64.73,
                            stdDev: 22.05
                        }
                    },
                    "Palm-up (75% Range of Motion)": {
                        "Male": {
                            mean: 96.47,
                            stdDev: 52.22
                        },
                        "Female": {
                            mean: 51.13,
                            stdDev: 27.68
                        }
                    }
                }
            }
        },
        "Left": {
            "Elbow Angle 180": {
                "Clockwise": {
                    "Palm-down (75% Range of Motion)": {
                        "Male": {
                            mean: 113.29,
                            stdDev: 40.71
                        },
                        "Female": {
                            mean: 65.71,
                            stdDev: 23.61
                        }
                    },
                    "Hand-shake (Neutral)": {
                        "Male": {
                            mean: 103.55,
                            stdDev: 30.09
                        },
                        "Female": {
                            mean: 60.06,
                            stdDev: 17.45
                        }
                    },
                    "Palm-up (75% Range of Motion)": {
                        "Male": {
                            mean: 103.55,
                            stdDev: 25.67
                        },
                        "Female": {
                            mean: 60.06,
                            stdDev: 14.89
                        }
                    }
                },
                "Counter-clockwise": {
                    "Palm-down (75% Range of Motion)": {
                        "Male": {
                            mean: 128.34,
                            stdDev: 44.25
                        },
                        "Female": {
                            mean: 68.02,
                            stdDev: 23.45
                        }
                    },
                    "Hand-shake (Neutral)": {
                        "Male": {
                            mean: 102.67,
                            stdDev: 41.60
                        },
                        "Female": {
                            mean: 54.41,
                            stdDev: 22.05
                        }
                    },
                    "Palm-up (75% Range of Motion)": {
                        "Male": {
                            mean: 99.13,
                            stdDev: 60.19
                        },
                        "Female": {
                            mean: 52.54,
                            stdDev: 31.90
                        }
                    }
                }
            },
            "Elbow Angle 135": {
                "Clockwise": {
                    "Palm-down (75% Range of Motion)": {
                        "Male": {
                            mean: 107.09,
                            stdDev: 44.25
                        },
                        "Female": {
                            mean: 62.11,
                            stdDev: 25.67
                        }
                    },
                    "Hand-shake (Neutral)": {
                        "Male": {
                            mean: 119.49,
                            stdDev: 26.55
                        },
                        "Female": {
                            mean: 69.30,
                            stdDev: 15.40
                        }
                    },
                    "Palm-up (75% Range of Motion)": {
                        "Male": {
                            mean: 117.71,
                            stdDev: 29.21
                        },
                        "Female": {
                            mean: 68.27,
                            stdDev: 16.94
                        }
                    }
                },
                "Counter-clockwise": {
                    "Palm-down (75% Range of Motion)": {
                        "Male": {
                            mean: 139.84,
                            stdDev: 56.64
                        },
                        "Female": {
                            mean: 74.12,
                            stdDev: 30.02
                        }
                    },
                    "Hand-shake (Neutral)": {
                        "Male": {
                            mean: 126.57,
                            stdDev: 49.56
                        },
                        "Female": {
                            mean: 67.08,
                            stdDev: 26.27
                        }
                    },
                    "Palm-up (75% Range of Motion)": {
                        "Male": {
                            mean: 115.06,
                            stdDev: 64.61
                        },
                        "Female": {
                            mean: 60.98,
                            stdDev: 34.24
                        }
                    }
                }
            },
            "Elbow Angle 90": {
                "Clockwise": {
                    "Palm-down (75% Range of Motion)": {
                        "Male": {
                            mean: 97.36,
                            stdDev: 50.45
                        },
                        "Female": {
                            mean: 56.47,
                            stdDev: 29.26
                        }
                    },
                    "Hand-shake (Neutral)": {
                        "Male": {
                            mean: 113.29,
                            stdDev: 39.83
                        },
                        "Female": {
                            mean: 65.71,
                            stdDev: 23.10
                        }
                    },
                    "Palm-up (75% Range of Motion)": {
                        "Male": {
                            mean: 115.94,
                            stdDev: 35.40
                        },
                        "Female": {
                            mean: 67.25,
                            stdDev: 20.53
                        }
                    }
                },
                "Counter-clockwise": {
                    "Palm-down (75% Range of Motion)": {
                        "Male": {
                            mean: 137.19,
                            stdDev: 53.99
                        },
                        "Female": {
                            mean: 72.71,
                            stdDev: 28.61
                        }
                    },
                    "Hand-shake (Neutral)": {
                        "Male": {
                            mean: 138.96,
                            stdDev: 55.76
                        },
                        "Female": {
                            mean: 73.65,
                            stdDev: 29.55
                        }
                    },
                    "Palm-up (75% Range of Motion)": {
                        "Male": {
                            mean: 117.71,
                            stdDev: 69.92
                        },
                        "Female": {
                            mean: 62.39,
                            stdDev: 37.06
                        }
                    }
                }
            },
            "Elbow Angle 45": {
                "Clockwise": {
                    "Palm-down (75% Range of Motion)": {
                        "Male": {
                            mean: 79.66,
                            stdDev: 42.48
                        },
                        "Female": {
                            mean: 46.20,
                            stdDev: 24.64
                        }
                    },
                    "Hand-shake (Neutral)": {
                        "Male": {
                            mean: 104.44,
                            stdDev: 33.63
                        },
                        "Female": {
                            mean: 60.57,
                            stdDev: 19.51
                        }
                    },
                    "Palm-up (75% Range of Motion)": {
                        "Male": {
                            mean: 103.55,
                            stdDev: 23.90
                        },
                        "Female": {
                            mean: 60.06,
                            stdDev: 13.68
                        }
                    }
                },
                "Counter-clockwise": {
                    "Palm-down (75% Range of Motion)": {
                        "Male": {
                            mean: 143.38,
                            stdDev: 51.33
                        },
                        "Female": {
                            mean: 75.99,
                            stdDev: 27.21
                        }
                    },
                    "Hand-shake (Neutral)": {
                        "Male": {
                            mean: 122.14,
                            stdDev: 41.60
                        },
                        "Female": {
                            mean: 64.73,
                            stdDev: 22.05
                        }
                    },
                    "Palm-up (75% Range of Motion)": {
                        "Male": {
                            mean: 96.47,
                            stdDev: 52.22
                        },
                        "Female": {
                            mean: 51.13,
                            stdDev: 27.68
                        }
                    }
                }
            }
        }
    },


    "Cylindrical Handle": {}
}