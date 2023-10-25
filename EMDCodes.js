const data = [
    {
      "EMD": "1-A-2",
      "Description": "TESTICLE OR GROIN PAIN (MALE)",
    },    {
      "EMD": "1-C-1",
      "Description": "SUSPECTED AORTIC ANEURYSM (TEARING/RIPPING PAIN) >= 50",
    },
    {
      "EMD": "1-C-2",
      "Description": "DIAGNOSED AORTIC ANEURYSM",
    },
    {
      "EMD": "1-C-3",
      "Description": "FAINTING OR NEAR FAINTING >=50",
    },
    {
      "EMD": "1-C-4",
      "Description": "FEMALES W/ FAINTING OR NEAR FAINTING (AGE 12-50)",
    },
    {
      "EMD": "1-C-5",
      "Description": "MALES WITH PAIN ABOVE NAVEL >=35",
    },
    {
      "EMD": "1-C-6",
      "Description": "FEMALES WITH PAIN ABOVE NAVEL >=45",
    },    {
      "EMD": "1-D-1",
      "Description": "NOT ALERT",
    },
    {
      "EMD": "1-D-2",
      "Description": "ASHEN OR GRAY REPORTED >= 50",
    },    {
      "EMD": "2-A-1",
      "Description": "NO DIFF BREATH OR SWALLOWING",
    },
    {
      "EMD": "2-A-1I",
      "Description": "NO DIFF BREATH OR SWALLOWING - INJECTION ADMINISTERED OR ADVISED",
    },
    {
      "EMD": "2-A-1M",
      "Description": "NO DIFF BREATH OR SWALLOWING - MEDICATION ADMINISTERED OR ADVISED",
    },
    {
      "EMD": "2-A-2",
      "Description": "SPIDER BITE",
    },
    {
      "EMD": "2-A-2I",
      "Description": "SPIDER BITE - INJECTION ADMINISTERED OR ADVISED",
    },
    {
      "EMD": "2-A-2M",
      "Description": "SPIDER BITE - MEDICATION ADMINISTERED OR ADVISED",
    },    {
      "EMD": "2-B-0I",
      "Description": "INJECTION ADMINISTERED OR ADVISED",
    },
    {
      "EMD": "2-B-0M",
      "Description": "MEDICATION ADMINISTERED OR ADVISED",
    },
    {
      "EMD": "2-B-1",
      "Description": "UNKNOWN STATUS/OTHER CODES NOT APPLICABLE",
    },
    {
      "EMD": "2-B-1I",
      "Description": "UNKNOWN STATUS/OTHER CODES NOT APPLICABLE - INJECTION ADMINISTERED OR ADVISED",
    },    {
      "EMD": "2-C-0I",
      "Description": "INJECTION ADMINISTERED OR ADVISED",
    },
    {
      "EMD": "MEDICATION ADMINISTERED OR ADVISED 2-C-1",
      "Description": "DIFFICULTY BREATHING OR SWALLOWING",
    },
    {
      "EMD": "2-C-1I",
      "Description": "DIFFICULTY BREATHING OR SWALLOWING - INJECTION ADMINISTERED OR ADVISED",
    },
    {
      "EMD": "2-C-1M",
      "Description": "DIFFICULTY BREATHING OR SWALLOWING - MEDICATION ADMINISTERED OR ADVISED",
    },
    {
      "EMD": "2-C-2",
      "Description": "HISTORY OF SEVERE ALLERGIC REACTION",
    },
    {
      "EMD": "2-C-2I",
      "Description": "HISTORY OF SEVERE ALLERGIC REACTION - INJECTION ADMINISTERED OR ADVISED",
    },    {
      "EMD": "2-D-0I",
      "Description": "INJECTION ADMINISTERED OR ADVISED",
    },
    {
      "EMD": "2-D-0M",
      "Description": "MEDICATION ADMINISTERED OR ADVISED",
    },
    {
      "EMD": "2-D-1",
      "Description": "NOT ALERT",
    },
    {
      "EMD": "2-D-1I",
      "Description": "NOT ALERT - INJECTION ADMINISTERED OR ADVISED",
    },
    {
      "EMD": "2-D-1M",
      "Description": "NOT ALERT - MEDICATION ADMINISTERED OR ADVISED",
    },
    {
      "EMD": "2-D-2",
      "Description": "DIFFICULTY SPEAKING BETWEEN BREATHS",
    },
    {
      "EMD": "2-D-2I",
      "Description": "DIFFICULTY SPEAKING BETWEEN BREATHS - INJECTION ADMINISTERED OR ADVISED",
    },
    {
      "EMD": "2-D-2M",
      "Description": "DIFFICULTY SPEAKING BETWEEN BREATHS - MEDICATION ADMINISTERED OR ADVISED",
    },
    {
      "EMD": "2-D-3",
      "Description": "SWARMING ATTACK (BEES, WASPS, HORNETS, ETC)",
    },
    {
      "EMD": "2-D-3I",
      "Description": "SWARMING ATTACK (BEES, WASPS, HORNETS, ETC) - INJECTION ADMINISTERED OR ADVISED",
    },
    {
      "EMD": "2-D-3M",
      "Description": "SWARMING ATTACK (BEES, WASPS, HORNETS, ETC) -MEDICATION ADMINISTERED OR ADVISED",
    },
    {
      "EMD": "2-D-4",
      "Description": "SNAKEBITE",
    },
    {
      "EMD": "2-D-4I",
      "Description": "SNAKEBITE - INJECTION ADMINISTERED OR ADVISED",
    },
    {
      "EMD": "2-D-4M",
      "Description": "SNAKEBITE - MEDICATION ADMINISTERED OR ADVISED",
    },    {
      "EMD": "2-E-0I",
      "Description": "INJECTION ADMINISTERED OR ADVISED",
    },
    {
      "EMD": "2-E-0M",
      "Description": "MEDICATION ADMINISTERED OR ADVISED",
    },
    {
      "EMD": "2-E-1",
      "Description": "INEFFECTIVE BREATHING",
    },
    {
      "EMD": "2-E-1I",
      "Description": "INEFFECTIVE BREATHING - INJECTION ADMINISTERED OR ADVISED",
    },
    {
      "EMD": "2-E-1M",
      "Description": "INEFFECTIVE BREATHING - MEDICATION ADMINISTERED OR ADVISED",
    },    {
      "EMD": "4-A-1A",
      "Description": "NOT DANGEROUS (UPPER ARM, KNEE, ELBOW) W/ DEFORMITY - ASSAULT",
    },
    {
      "EMD": "4-A-1S",
      "Description": "NOT DANGEROUS (UPPER ARM, KNEE, ELBOW) W/ DEFORMITY - SEXUAL ASSAULT",
    },
    {
      "EMD": "4-A-1T",
      "Description": "NOT DANGEROUS (UPPER ARM, KNEE, ELBOW) W/ DEFORMITY - STUN GUN",
    },
    {
      "EMD": "4-A-2A",
      "Description": "NOT DANGEROUS BODY AREA - ASSAULT",
    },
    {
      "EMD": "4-A-2S",
      "Description": "NOT DANGEROUS BODY AREA - SEXUAL ASSAULT",
    },
    {
      "EMD": "4-A-2T",
      "Description": "NOT DANGEROUS BODY AREA - STUN GUN",
    },
    {
      "EMD": "4-A-3A",
      "Description": "NON-RECENT (>= 6 HRS) INJURIES (WITHOUT PRIORITY SYMPTOMS) - ASSAULT",
    },    {
      "EMD": "4-B-0A",
      "Description": "ASSAULT",
    },
    {
      "EMD": "4-B-0S",
      "Description": "SEXUAL ASSAULT",
    },
    {
      "EMD": "4-B-0T",
      "Description": "STUN GUN",
    },
    {
      "EMD": "4-B-1A",
      "Description": "POSSIBLY DANGEROUS BODY AREA - ASSAULT",
    },
    {
      "EMD": "4-B-1S",
      "Description": "POSSIBLY DANGEROUS BODY AREA - SEXUAL ASSAULT",
    },
    {
      "EMD": "4-B-1T",
      "Description": "POSSIBLY DANGEROUS BODY AREA - STUN GUN",
    },
    {
      "EMD": "4-B-2A",
      "Description": "SERIOUS HEMORRHAGE - ASSAULT",
    },
    {
      "EMD": "4-B-2S",
      "Description": "SERIOUS HEMORRHAGE - SEXUAL ASSAULT",
    },
    {
      "EMD": "4-B-2T",
      "Description": "SERIOUS HEMORRHAGE - STUN GUN",
    },
    {
      "EMD": "4-B-3A",
      "Description": "UNKNOWN STATUS / OTHER CODES NOT APPLICABLE - ASSAULT",
    },
    {
      "EMD": "4-B-3S",
      "Description": "UNKNOWN STATUS / OTHER CODES NOT APPLICABLE - SEXUAL ASSAULT",
    },
    {
      "EMD": "4-B-3T",
      "Description": "UNKNOWN STATUS / OTHER CODES NOT APPLICABLE - STUN GUN",
    },
    {
      "EMD": "4-D-0A",
      "Description": "ASSAULT",
    },
    {
      "EMD": "4-D-0S",
      "Description": "SEXUAL ASSAULT",
    },
    {
      "EMD": "4-D-0T",
      "Description": "STUN GUN",
    },
    {
      "EMD": "4-D-1A",
      "Description": "ARREST - ASSAULT",
    },
    {
      "EMD": "4-D-1S",
      "Description": "ARREST - SEXUAL ASSAULT",
    },
    {
      "EMD": "4-D-1T",
      "Description": "ARREST - STUN GUN",
    },
    {
      "EMD": "4-D-2A",
      "Description": "UNCONSCIOUS - ASSAULT",
    },
    {
      "EMD": "4-D-2S",
      "Description": "UNCONSCIOUS - SEXUAL ASSAULT",
    },
    {
      "EMD": "4-D-2T",
      "Description": "UNCONSCIOUS - STUN GUN",
    },
    {
      "EMD": "4-D-3A",
      "Description": "NOT ALERT - ASSAULT",
    },
    {
      "EMD": "4-D-3S",
      "Description": "NOT ALERT - SEXUAL ASSAULT",
    },
    {
      "EMD": "4-D-3T",
      "Description": "NOT ALERT - STUN GUN",
    },
    {
      "EMD": "4-D-4A",
      "Description": "CHEST OR NECK INJURY (WITH DIFFICULTY BREATHING) - ASSAULT",
    },
    {
      "EMD": "4-D-4S",
      "Description": "CHEST OR NECK INJURY (WITH DIFFICULTY BREATHING) - SEXUAL ASSAULT",
    },
    {
      "EMD": "4-D-4T",
      "Description": "CHEST OR NECK INJURY (WITH DIFFICULTY BREATHING) - STUN GUN",
    },
    {
      "EMD": "4-D-5A",
      "Description": "MULTIPLE VICTIMS - ASSAULT",
    },
    {
      "EMD": "4-D-5S",
      "Description": "MULTIPLE VICTIMS - SEXUAL ASSAULT",
    },
    {
      "EMD": "4-D-5T",
      "Description": "MULTIPLE VICTIMS - STUN GUN",
    },
    {
      "EMD": "6-C-1E",
      "Description": "ABNORMAL BREATHING - EMPHYSEMA (COPD)",
    },
    {
      "EMD": "6-C-1O",
      "Description": "ABNORMAL BREATHING - OTHER LUNG PROBLEMS",
    },
    {
      "EMD": "6-C-2",
      "Description": "TRACHEOSTOMY (NO OBVIOUS DISTRESS)",
    },
    {
      "EMD": "6-C-2A",
      "Description": "TRACHEOSTOMY (NO OBVIOUS DISTRESS) - ASTHMA",
    },
    {
      "EMD": "6-C-2E",
      "Description": "TRACHEOSTOMY (NO OBVIOUS DISTRESS) - EMPHYSEMA (COPD)",
    },
    {
      "EMD": "6-C-2O",
      "Description": "TRACHEOSTOMY (NO OBVIOUS DISTRESS) - OTHER LUNG PROBLEMS",
    },    {
      "EMD": "6-D-0A",
      "Description": "ASTHMA",
    },
    {
      "EMD": "6-D-0E",
      "Description": "EMPHYSEMA (COPD)",
    },
    {
      "EMD": "6-D-0O",
      "Description": "OTHER LUNG PROBLEMS",
    },
    {
      "EMD": "6-D-1",
      "Description": "NOT ALERT",
    },
    {
      "EMD": "6-D-1A",
      "Description": "NOT ALERT - ASTHMA",
    },
    {
      "EMD": "6-D-1E",
      "Description": "NOT ALERT - EMPHYSEMA (COPD)",
    },
    {
      "EMD": "6-D-1O",
      "Description": "NOT ALERT - OTHER LUNG PROBLEMS",
    },
    {
      "EMD": "6-D-2",
      "Description": "DIFFICULTY SPEAKING BETWEEN BREATHS",
    },
    {
      "EMD": "6-D-2A",
      "Description": "DIFFICULTY SPEAKING BETWEEN BREATHS - ASTHMA",
    },
    {
      "EMD": "6-D-2E",
      "Description": "DIFFICULTY SPEAKING BETWEEN BREATHS - EMPHYSEMA (COPD)",
    },
    {
      "EMD": "6-D-2O",
      "Description": "DIFFICULTY SPEAKING BETWEEN BREATHS - OTHER LUNG PROBLEMS",
    },
    {
      "EMD": "6-D-3",
      "Description": "CHANGING COLOR",
    },
    {
      "EMD": "6-D-3A",
      "Description": "CHANGING COLOR - ASTHMA",
    },
    {
      "EMD": "6-D-3E",
      "Description": "CHANGING COLOR - EMPHYSEMA (COPD)",
    },
    {
      "EMD": "6-D-3O",
      "Description": "CHANGING COLOR - OTHER LUNG PROBLEMS",
    },
    {
      "EMD": "6-D-4",
      "Description": "CLAMMY OR COLD SWEATS",
    },
    {
      "EMD": "6-D-4A",
      "Description": "CLAMMY OR COLD SWEATS - ASTHMA",
    },
    {
      "EMD": "6-D-4E",
      "Description": "CLAMMY OR COLD SWEATS - EMPHYSEMA (COPD)",
    },
    {
      "EMD": "6-D-4O",
      "Description": "CLAMMY OR COLD SWEATS - OTHER LUNG PROBLEMS",
    },
    {
      "EMD": "6-D-5",
      "Description": "TRACHEOSTOMY (OBVIOUS DISTRESS)",
    },
    {
      "EMD": "6-D-5A",
      "Description": "TRACHEOSTOMY (OBVIOUS DISTRESS) - ASTHMA",
    },
    {
      "EMD": "6-D-5E",
      "Description": "TRACHEOSTOMY (OBVIOUS DISTRESS) - EMPHYSEMA (COPD)",
    },    {
      "EMD": "6-E-0A",
      "Description": "ASTHMA",
    },
    {
      "EMD": "6-E-0E",
      "Description": "EMPHYSEMA (COPD)",
    },
    {
      "EMD": "6-E-0O",
      "Description": "OTHER LUNG PROBLEMS",
    },
    {
      "EMD": "6-E-1",
      "Description": "INEFFECTIVE BREATHING",
    },
    {
      "EMD": "6-E-1A",
      "Description": "INEFFECTIVE BREATHING- ASTHMA",
    },
    {
      "EMD": "6-E-1E",
      "Description": "INEFFECTIVE BREATHING - EMPHYSEMA (COPD)",
    },
    {
      "EMD": "6-E-1O",
      "Description": "INEFFECTIVE BREATHING - OTHER LUNG PROBLEMS",
    },    {
      "EMD": "7-A-1",
      "Description": "BURNS <18 PERCENT OF BODY AREA",
    },    {
      "EMD": "7-A-1F",
      "Description": "BURNS <18 PERCENT OF BODY AREA - FIRE PRESENT",
    },
    {
      "EMD": "7-A-1W",
      "Description": "BURNS <18 PERCENT OF BODY AREA - FIREWORKS",
    },
    {
      "EMD": "7-A-2",
      "Description": "FIRE ALARM (UNKNOWN SITUATION)",
    },
    {
      "EMD": "7-A-2E",
      "Description": "FIRE ALARM (UNKNOWN SITUATION) - EXPLOSION",
    },
    {
      "EMD": "7-A-2F",
      "Description": "FIRE ALARM (UNKNOWN SITUATION) - FIRE PRESENT",
    },
    {
      "EMD": "7-A-2W",
      "Description": "FIRE ALARM (UNKNOWN SITUATION) - FIREWORKS",
    },
    {
      "EMD": "7-A-3",
      "Description": "MINOR BURNS",
    },
    {
      "EMD": "7-A-3E",
      "Description": "MINOR BURNS - EXPLOSION",
    },
    {
      "EMD": "7-A-3F",
      "Description": "MINOR BURNS - FIRE PRESENT",
    },
    {
      "EMD": "7-A-3W",
      "Description": "MINOR BURNS - FIREWORKS",
    },
    {
      "EMD": "7-A-4",
      "Description": "SUNBURN",
    },
    {
      "EMD": "7-A-4E",
      "Description": "SUNBURN  - EXPLOSION",
    },
    {
      "EMD": "7-A-4F",
      "Description": "SUNBURN - FIRE PRESENT",
    },
    {
      "EMD": "7-A-4W",
      "Description": "SUNBURN - FIREWORKS",
    },
    {
      "EMD": "7-A-5",
      "Description": "NON RECENT (>=6HRS) BURNS/INJURIES (WITHOUT PRIORITY SYMPTOMS)",
    },
    {
      "EMD": "7-A-5E",
      "Description": "NON RECENT (>=6HRS) BURNS/INJURIES (WITHOUT PRIORITY SYMPTOMS) - EXPLOSION",
    },
    {
      "EMD": "7-A-5F",
      "Description": "NON RECENT (>=6HRS) BURNS/INJURIES (WITHOUT PRIORITY SYMPTOMS) - FIRE PRESENT",
    },
    {
      "EMD": "7-A-5W",
      "Description": "NON RECENT (>=6HRS) BURNS/INJURIES (WITHOUT PRIORITY SYMPTOMS) - FIREWORKS",
    },    {
      "EMD": "7-B-0E",
      "Description": "EXPLOSION",
    },
    {
      "EMD": "7-B-0F",
      "Description": "FIRE PRESENT",
    },
    {
      "EMD": "7-B-0W",
      "Description": "FIREWORKS",
    },
    {
      "EMD": "7-B-1",
      "Description": "BLAST INJUIRES (WITHOUT PRIORITY SYMPTOMS)",
    },
    {
      "EMD": "7-B-1E",
      "Description": "BLAST INJUIRES (WITHOUT PRIORITY SYMPTOMS) - EXPLOSION",
    },
    {
      "EMD": "7-B-1F",
      "Description": "BLAST INJUIRES (WITHOUT PRIORITY SYMPTOMS) - FIRE PRESENT",
    },
    {
      "EMD": "7-B-1W",
      "Description": "BLAST INJURIES (WITHOUT PRIORITY SYMPTOMS) - FIREWORKS",
    },
    {
      "EMD": "7-B-2",
      "Description": "UNKNOWN STATUS / OTHER CODES NOT APPLICABLE",
    },
    {
      "EMD": "7-B-2E",
      "Description": "UNKNOWN STATUS / OTHER CODES NOT APPLICABLE - EXPLOSION",
    },
    {
      "EMD": "7-B-2F",
      "Description": "UNKNOWN STATUS / OTHER CODES NOT APPLICABLE - FIRE PRESENT",
    },
    {
      "EMD": "7-B-2W",
      "Description": "UNKNOWN STATUS / OTHER CODES NOT APPLICABLE - FIREWORKS",
    },    {
      "EMD": "7-C-0E",
      "Description": "EXPLOSION",
    },
    {
      "EMD": "7-C-0F",
      "Description": "FIRE PRESENT",
    },
    {
      "EMD": "7-C-0W",
      "Description": "FIREWORKS",
    },
    {
      "EMD": "7-C-1",
      "Description": "FIRE WITH PERSONS REPORTED INSIDE",
    },
    {
      "EMD": "7-C-1E",
      "Description": "FIRE WITH PERSONS REPORTED INSIDE - EXPLOSION",
    },
    {
      "EMD": "7-C-1F",
      "Description": "FIRE WITH PERSONS REPORTED INSIDE - FIRE PRESENT",
    },
    {
      "EMD": "7-C-1W",
      "Description": "FIRE WITH PERSONS REPORTED INSIDE - FIREWORKS",
    },
    {
      "EMD": "7-C-2",
      "Description": "DIFFICULTY BREATHING",
    },
    {
      "EMD": "7-C-2E",
      "Description": "DIFFICULTY BREATHING - EXPLOSION",
    },
    {
      "EMD": "7-C-2F",
      "Description": "DIFFICULTY BREATHING - FIRE PRESENT",
    },
    {
      "EMD": "7-C-2W",
      "Description": "DIFFICULTY BREATHING - FIREWORKS",
    },
    {
      "EMD": "7-C-3",
      "Description": "BURNS >= 18 PERCENT OF BODY AREA",
    },
    {
      "EMD": "7-C-3E",
      "Description": "BURNS >= 18 PERCENT OF BODY AREA - EXPLOSION",
    },
    {
      "EMD": "7-C-3F",
      "Description": "BURNS >= 18 PERCENT OF BODY AREA - FIRE PRESENT",
    },
    {
      "EMD": "7-C-3W",
      "Description": "BURNS >= 18 PERCENT OF BODY AREA - FIREWORKS",
    },
    {
      "EMD": "7-C-4",
      "Description": "SIGNIFICANT FACIAL BURNS",
    },
    {
      "EMD": "7-C-4E",
      "Description": "SIGNIFICANT FACIAL BURNS - EXPLOSION",
    },
    {
      "EMD": "7-C-4F",
      "Description": "SIGNIFICANT FACIAL BURNS - FIRE PRESENT",
    },
    {
      "EMD": "7-C-4W",
      "Description": "SIGNIFICANT FACIAL BURNS - FIREWORKS",
    },    {
      "EMD": "7-D-0E",
      "Description": "EXPLOSION",
    },
    {
      "EMD": "7-D-0F",
      "Description": "FIRE PRESENT",
    },
    {
      "EMD": "7-D-0W",
      "Description": "FIREWORKS",
    },
    {
      "EMD": "7-D-1",
      "Description": "MULTIPLE VICTIMS",
    },
    {
      "EMD": "7-D-1E",
      "Description": "MULTIPLE VICTIMS - EXPLOSION",
    },
    {
      "EMD": "7-D-1F",
      "Description": "MULTIPLE VICTIMS - FIRE PRESENT",
    },
    {
      "EMD": "7-D-1W",
      "Description": "MULTIPLE VICTIMS - FIREWORKS",
    },
    {
      "EMD": "7-D-2",
      "Description": "ARREST",
    },
    {
      "EMD": "7-D-2E",
      "Description": "ARREST - EXPLOSION",
    },
    {
      "EMD": "7-D-2F",
      "Description": "ARREST - FIRE PRESENT",
    },
    {
      "EMD": "7-D-2W",
      "Description": "ARREST - FIREWORKS",
    },
    {
      "EMD": "7-D-3",
      "Description": "UNCONSCIOUS",
    },
    {
      "EMD": "7-D-3E",
      "Description": "UNCONSCIOUS - EXPLOSION",
    },
    {
      "EMD": "7-D-3F",
      "Description": "UNCONSCIOUS - FIRE PRESENT",
    },
    {
      "EMD": "7-D-3W",
      "Description": "UNCONCIOUS - FIREWORKS",
    },
    {
      "EMD": "7-D-4",
      "Description": "NOT ALERT",
    },
    {
      "EMD": "7-D-4E",
      "Description": "NOT ALERT - EXPLOSION",
    },
    {
      "EMD": "7-D-4F",
      "Description": "NOT ALERT - FIRE PRESENT",
    },
    {
      "EMD": "7-D-4W",
      "Description": "NOT ALERT - FIREWORKS",
    },
    {
      "EMD": "7-D-5",
      "Description": "DIFFICULTY SPEAKING BETWEEN BREATHS",
    },
    {
      "EMD": "7-D-5E",
      "Description": "DIFFICULTY SPEAKING BETWEEN BREATHS - EXPLOSION",
    },
    {
      "EMD": "7-D-5F",
      "Description": "DIFFICULTY SPEAKING BETWEEN BREATHS - FIRE PRESENT",
    },
    {
      "EMD": "7-D-5W",
      "Description": "DIFFICULTY SPEAKING BETWEEN BREATHS - FIREWORKS",
    },    {
      "EMD": "7-E-0E",
      "Description": "EXPLOSION",
    },
    {
      "EMD": "7-E-0F",
      "Description": "FIRE PRESENT",
    },
    {
      "EMD": "7-E-0W",
      "Description": "FIREWORKS",
    },
    {
      "EMD": "7-E-1",
      "Description": "PERSON ON FIRE",
    },
    {
      "EMD": "7-E-1E",
      "Description": "PERSON ON FIRE - EXPLOSION",
    },
    {
      "EMD": "7-E-1F",
      "Description": "PERSON ON FIRE - FIRE PRESENT",
    },
    {
      "EMD": "7-E-1W",
      "Description": "PERSON ON FIRE - FIREWORKS",
    },    {
      "EMD": "8-A-1",
      "Description": "CO DETECTOR ALARM (SCENE CONTACT NO PRIORITY SYMPTOMS)",
    },
    {
      "EMD": "8-A-2",
      "Description": "CO DETECTOR ALARM (ALARM ONLY, NO SCENE CONTACT)",
    },    {
      "EMD": "8-B-0B",
      "Description": "BIOLOGICAL",
    },
    {
      "EMD": "8-B-0C",
      "Description": "CHEMICAL",
    },
    {
      "EMD": "8-B-0G",
      "Description": "ODOR OF GAS/FUMES",
    },
    {
      "EMD": "8-B-0M",
      "Description": "CARBON MONOXIDE",
    },
    {
      "EMD": "8-B-0N",
      "Description": "NUCLEAR",
    },
    {
      "EMD": "8-B-0R",
      "Description": "RADIOLOGICAL",
    },
    {
      "EMD": "8-B-0S",
      "Description": "SUICIDE ATTEMPT (ONLY CARBON MONOXIDE)",
    },
    {
      "EMD": "8-B-0T",
      "Description": "SUICIDE ATTEMPT (OTHER TOXIC SUBSTANCES)",
    },
    {
      "EMD": "8-B-0U",
      "Description": "UNKNOWN",
    },
    {
      "EMD": "8-B-1",
      "Description": "ALERT WITHOUT DIFFICULTY BREATHING",
    },
    {
      "EMD": "8-B-1B",
      "Description": "ALERT WITHOUT DIFFICULTY BREATHING - BIOLOGICAL",
    },
    {
      "EMD": "8-B-1C",
      "Description": "ALERT WITHOUT DIFFICULTY BREATHING - CHEMICAL",
    },
    {
      "EMD": "8-B-1G",
      "Description": "ALERT WITHOUT DIFFICULTY BREATHING - ODOR OF GAS/FUMES",
    },
    {
      "EMD": "8-B-1M",
      "Description": "ALERT WITHOUT DIFFICULTY BREATHING - CARBON MONOXIDE",
    },
    {
      "EMD": "8-B-1N",
      "Description": "ALERT WITHOUT DIFFICULTY BREATHING - NUCLEAR",
    },
    {
      "EMD": "8-B-1R",
      "Description": "ALERT WITHOUT DIFFICULTY BREATHING - RADIOLOGICAL",
    },
    {
      "EMD": "8-B-1S",
      "Description": "ALERT WITHOUT DIFF BREATHING - SUICIDE ATTEMPT (ONLY CARBON MONOXIDE)",
    },
    {
      "EMD": "8-B-1T",
      "Description": "ALERT WITHOUT DIFF BREATHING - SUICIDE ATTEMPT (OTHER TOXIC SUB)",
    },
    {
      "EMD": "8-B-1U",
      "Description": "ALERT WITHOUT DIFFICULTY BREATHING - UNKNOWN",
    },    {
      "EMD": "8-C-0B",
      "Description": "BIOLOGICAL",
    },
    {
      "EMD": "8-C-0C",
      "Description": "CHEMICAL",
    },
    {
      "EMD": "8-C-0G",
      "Description": "ODOR OF GAS/FUMES",
    },
    {
      "EMD": "8-C-0M",
      "Description": "CARBON MONOXIDE",
    },
    {
      "EMD": "8-C-0N",
      "Description": "NUCLEAR",
    },
    {
      "EMD": "8-C-0R",
      "Description": "RADIOLOGICAL",
    },
    {
      "EMD": "8-C-0S",
      "Description": "SUICIDE ATTEMPT (ONLY CARBON MONOXIDE)",
    },
    {
      "EMD": "8-C-0T",
      "Description": "SUICIDE ATTEMPT (OTHER TOXIC SUBSTANCES)",
    },
    {
      "EMD": "8-C-0U",
      "Description": "UNKNOWN",
    },
    {
      "EMD": "8-C-1",
      "Description": "ALERT WITH DIFFICULTY BREATHING",
    },
    {
      "EMD": "8-C-1B",
      "Description": "ALERT WITH DIFFICULTY BREATHING - BIOLOGICAL",
    },
    {
      "EMD": "8-C-1C",
      "Description": "ALERT WITH DIFFICULTY BREATHING - CHEMICAL",
    },
    {
      "EMD": "8-C-1G",
      "Description": "ALERT WITH DIFFICULTY BREATHING - ODOR OF GAS/FUMES",
    },
    {
      "EMD": "8-C-1M",
      "Description": "ALERT WITH DIFFICULTY BREATHING - CARBON MONOXIDE",
    },
    {
      "EMD": "8-C-1N",
      "Description": "ALERT WITH DIFFICULTY BREATHING - NUCLEAR",
    },
    {
      "EMD": "8-C-1R",
      "Description": "ALERT WITH DIFFICULTY BREATHING - RADIOLOGICAL",
    },
    {
      "EMD": "8-C-1S",
      "Description": "ALERT WITH DIFFICULTY BREATHING - SUICIDE ATTEMPT (ONLY CARBON MONOXIDE)",
    },
    {
      "EMD": "8-C-1T",
      "Description": "ALERT WITH DIFFICULTY BREATHING - SUICIDE ATTEMPT (OTHER TOXIC SUB)",
    },
    {
      "EMD": "8-C-1U",
      "Description": "ALERT WITH DIFFICULTY BREATHING - UNKNOWN",
    },    {
      "EMD": "8-D-0B",
      "Description": "BIOLOGICAL",
    },
    {
      "EMD": "8-D-0C",
      "Description": "CHEMICAL",
    },
    {
      "EMD": "8-D-0G",
      "Description": "ODOR OF GAS/FUMES",
    },
    {
      "EMD": "8-D-0M",
      "Description": "CARBON MONOXIDE",
    },
    {
      "EMD": "8-D-0N",
      "Description": "NUCLEAR",
    },
    {
      "EMD": "8-D-0R",
      "Description": "RADIOLOGICAL",
    },
    {
      "EMD": "8-D-0S",
      "Description": "SUICIDE ATTEMPT (ONLY CARBON MONOXIDE)",
    },
    {
      "EMD": "8-D-0T",
      "Description": "SUICIDE ATTEMPT (OTHER TOXIC SUBSTANCES)",
    },
    {
      "EMD": "8-D-0U",
      "Description": "UNKNOWN",
    },
    {
      "EMD": "8-D-1",
      "Description": "ARREST",
    },
    {
      "EMD": "8-D-1B",
      "Description": "ARREST - BIOLOGICAL",
    },
    {
      "EMD": "8-D-1C",
      "Description": "ARREST - CHEMICAL",
    },
    {
      "EMD": "8-D-1G",
      "Description": "ARREST - ODOR OF GAS/FUMES",
    },
    {
      "EMD": "8-D-1M",
      "Description": "ARREST - CARBON MONOXIDE",
    },
    {
      "EMD": "8-D-1N",
      "Description": "ARREST - NUCLEAR",
    },
    {
      "EMD": "8-D-1R",
      "Description": "ARREST - RADIOLOGICAL",
    },
    {
      "EMD": "8-D-1S",
      "Description": "ARREST - SUICIDE ATTEMPT (ONLY CARBON MONOXIDE)",
    },
    {
      "EMD": "8-D-1T",
      "Description": "ARREST - SUICIDE ATTEMPT (OTHER TOXIC SUBSTANCES)",
    },
    {
      "EMD": "8-D-1U",
      "Description": "ARREST - UNKNOWN",
    },
    {
      "EMD": "8-D-2",
      "Description": "UNCONSCIOUS",
    },
    {
      "EMD": "8-D-2B",
      "Description": "UNCONSCIOUS - BIOLOGICAL",
    },
    {
      "EMD": "8-D-2C",
      "Description": "UNCONSCIOUS - CHEMICAL",
    },
    {
      "EMD": "8-D-2G",
      "Description": "UNCONSCIOUS - ODOR OF GAS/FUMES",
    },
    {
      "EMD": "8-D-2M",
      "Description": "UNCONSCIOUS - CARBON MONOXIDE",
    },
    {
      "EMD": "8-D-2N",
      "Description": "UNCONSCIOUS - NUCLEAR",
    },
    {
      "EMD": "8-D-2R",
      "Description": "UNCONSCIOUS - RADIOLOGICAL",
    },
    {
      "EMD": "8-D-2S",
      "Description": "UNCONSCIOUS - SUICIDE ATTEMPT (ONLY CARBON MONOXIDE)",
    },
    {
      "EMD": "8-D-2T",
      "Description": "UNCONSCIOUS - SUICIDE ATTEMPT (OTHER TOXIC SUBSTANCES)",
    },
    {
      "EMD": "8-D-2U",
      "Description": "UNCONSCIOUS - UNKNOWN",
    },
    {
      "EMD": "8-D-3",
      "Description": "NOT ALERT",
    },
    {
      "EMD": "8-D-3B",
      "Description": "NOT ALERT - BIOLOGICAL",
    },
    {
      "EMD": "8-D-3C",
      "Description": "NOT ALERT - CHEMICAL",
    },
    {
      "EMD": "8-D-3G",
      "Description": "NOT ALERT - ODOR OF GAS/FUMES",
    },
    {
      "EMD": "8-D-3M",
      "Description": "NOT ALERT - CARBON MONOXIDE",
    },
    {
      "EMD": "8-D-3N",
      "Description": "NOT ALERT - NUCLEAR",
    },
    {
      "EMD": "8-D-3R",
      "Description": "NOT ALERT - RADIOLOGICAL",
    },
    {
      "EMD": "8-D-3S",
      "Description": "NOT ALERT - SUICIDE ATTEMPT (ONLY CARBON MONOXIDE)",
    },
    {
      "EMD": "8-D-3T",
      "Description": "NOT ALERT - SUICIDE ATTEMPT (OTHER TOXIC SUBSTANCES)",
    },
    {
      "EMD": "8-D-3U",
      "Description": "NOT ALERT - UNKNOWN",
    },
    {
      "EMD": "8-D-4",
      "Description": "DIFFICULTY SPEAKING BETWEEN BREATHS",
    },
    {
      "EMD": "8-D-4B",
      "Description": "DIFFICULTY SPEAKING BETWEEN BREATHS - BIOLOGICAL",
    },
    {
      "EMD": "8-D-4C",
      "Description": "DIFFICULTY SPEAKING BETWEEN BREATHS - CHEMICAL",
    },
    {
      "EMD": "8-D-4G",
      "Description": "DIFFICULTY SPEAKING BETWEEN BREATHS - ODOR OF GAS/FUMES",
    },
    {
      "EMD": "8-D-4M",
      "Description": "DIFFICULTY SPEAKING BETWEEN BREATHS - CARBON MONOXIDE",
    },
    {
      "EMD": "8-D-4N",
      "Description": "DIFFICULTY SPEAKING BETWEEN BREATHS - NUCLEAR",
    },
    {
      "EMD": "8-D-4R",
      "Description": "DIFFICULTY SPEAKING BETWEEN BREATHS - RADIOLOGICAL",
    },
    {
      "EMD": "8-D-4S",
      "Description": "DIFFICULTY SPEAKING BETWEEN BREATHS - SUICIDE ATTEMPT (ONLY CARBON MONOXIDE)",
    },
    {
      "EMD": "8-D-4T",
      "Description": "DIFFICULTY SPEAKING BETWEEN BREATHS - SUICIDE ATTEMPT (OTHER TOXIC SUBSTANCES)",
    },
    {
      "EMD": "8-D-4U",
      "Description": "DIFFICULTY SPEAKING BETWEEN BREATHS - UNKNOWN",
    },
    {
      "EMD": "8-D-5",
      "Description": "MULTIPLE VICTIMS",
    },
    {
      "EMD": "8-D-5B",
      "Description": "MULTIPLE VICTIMS - BIOLOGICAL",
    },
    {
      "EMD": "8-D-5C",
      "Description": "MULTIPLE VICTIMS - CHEMICAL",
    },
    {
      "EMD": "8-D-5G",
      "Description": "MULTIPLE VICTIMS - ODOR OF GAS/FUMES",
    },
    {
      "EMD": "8-D-5M",
      "Description": "MULTIPLE VICTIMS - CARBON MONOXIDE",
    },
    {
      "EMD": "8-D-5N",
      "Description": "MULTIPLE VICTIMS - NUCLEAR",
    },
    {
      "EMD": "8-D-5R",
      "Description": "MULTIPLE VICTIMS - RADIOLOGICAL",
    },
    {
      "EMD": "8-D-5S",
      "Description": "MULTIPLE VICTIMS - SUICIDE ATTEMPT (ONLY CARBON MONOXIDE)",
    },
    {
      "EMD": "8-D-5T",
      "Description": "MULTIPLE VICTIMS - SUICIDE ATTEMPT (OTHER TOXIC SUBSTANCES)",
    },
    {
      "EMD": "8-D-5U",
      "Description": "MULTIPLE VICTIMS - UNKNOWN",
    },
    {
      "EMD": "8-D-6",
      "Description": "UNKNOWN STATUS / OTHER CODES NOT APPLICABLE",
    },
    {
      "EMD": "8-D-6B",
      "Description": "UNKNOWN STATUS / OTHER CODES NOT APPLICABLE - BIOLOGICAL",
    },
    {
      "EMD": "8-D-6C",
      "Description": "UNKNOWN STATUS / OTHER CODES NOT APPLICABLE - CHEMICAL",
    },
    {
      "EMD": "8-D-6G",
      "Description": "UNKNOWN STATUS / OTHER CODES NOT APPLICABLE - ODOR OF GAS/FUMES",
    },
    {
      "EMD": "8-D-6M",
      "Description": "UNKNOWN STATUS / OTHER CODES NOT APPLICABLE - CARBON MONOXIDE",
    },
    {
      "EMD": "8-D-6N",
      "Description": "UNKNOWN STATUS / OTHER CODES NOT APPLICABLE - NUCLEAR",
    },
    {
      "EMD": "8-D-6R",
      "Description": "UNKNOWN STATUS / OTHER CODES NOT APPLICABLE - RADIOLOGICAL",
    },
    {
      "EMD": "8-D-6S",
      "Description": "UNK STATUS / OTHER CODES NOT APPLICABLE - SUICIDE ATTEMPT (ONLY CARBON MONOXIDE)",
    },
    {
      "EMD": "8-D-6T",
      "Description": "UNK STATUS / OTHER CODES NOT APPLICABLE - SUICIDE ATTEMPT (OTHER TOXIC SUB)",
    },
    {
      "EMD": "8-D-6U",
      "Description": "UNKNOWN STATUS / OTHER CODES NOT APPLICABLE - UNKNOWN",
    },    {
      "EMD": "9-O-1X",
      "Description": "EXPECTED DEATH (UNQUESTIONABLE) - TERMINAL ILLNESS",
    },
    {
      "EMD": "9-O-1Y",
      "Description": "EXPECTED DEATH (UNQUESTIONABLE) - DNR",
    },
    {
      "EMD": "9-O-1Z",
      "Description": "EXPECTED DEATH (UNQUESTIONABLE)",
    },
    {
      "EMD": "9-B-0X",
      "Description": "TERMINAL ILLNESS",
    },
    {
      "EMD": "9-B-0Y",
      "Description": "DNR",
    },    {
      "EMD": "9-B-1A",
      "Description": "OBVIOUS DEATH (UNQUESTIONABLE) - COLD / STIFF IN WARM ENVIRONMENT",
    },
    {
      "EMD": "9-B-1B",
      "Description": "OBVIOUS DEATH (UNQUESTIONABLE) - DECAPITATION",
    },
    {
      "EMD": "9-B-1C",
      "Description": "OBVIOUS DEATH (UNQUESTIONABLE) - DECOMPOSITION",
    },
    {
      "EMD": "9-B-1D",
      "Description": "OBVIOUS DEATH (UNQUESTIONABLE) - INCINERATION",
    },
    {
      "EMD": "9-B-1E",
      "Description": "OBVIOUS DEATH (UNQUESTIONABLE) - NON RECENT",
    },
    {
      "EMD": "9-B-1F",
      "Description": "OBVIOUS DEATH (UNQUESTIONABLE) - INJURIES INCOMPATIBLE WITH LIFE",
    },
    {
      "EMD": "9-B-1G",
      "Description": "OBVIOUS DEATH (UNQUESTIONABLE) - SUBMERSION > 6HRS",
    },
    {
      "EMD": "9-B-1H",
      "Description": "OBVIOUS DEATH (UNQUESTIONABLE)",
    },    {
      "EMD": "9-D-0A",
      "Description": "COLD / STIFF IN WARM ENVIRONMENT",
    },
    {
      "EMD": "9-D-0B",
      "Description": "DECAPITATION",
    },
    {
      "EMD": "9-D-0C",
      "Description": "DECOMPOSITION",
    },
    {
      "EMD": "9-D-0D",
      "Description": "INCINERATION",
    },
    {
      "EMD": "9-D-0E",
      "Description": "NON RECENT",
    },
    {
      "EMD": "9-D-0F",
      "Description": "INJURIES INCOMPATIBLE WITH LIFE",
    },
    {
      "EMD": "9-D-0G",
      "Description": "SUBMERSION > 6HRS",
    },    {
      "EMD": "9-D-0X",
      "Description": "TERMINAL ILLNESS",
    },
    {
      "EMD": "9-D-0Y",
      "Description": "DNR",
    },    {
      "EMD": "9-D-2A",
      "Description": "OBVIOUS OR EXPECTED DEATH (QUESTIONABLE) - COLD / STIFF IN WARM ENVIRONMENT",
    },
    {
      "EMD": "9-D-2B",
      "Description": "OBVIOUS OR EXPECTED DEATH (QUESTIONABLE) - DECAPITATION",
    },
    {
      "EMD": "9-D-2C",
      "Description": "OBVIOUS OR EXPECTED DEATH (QUESTIONABLE) - DECOMPOSITION",
    },
    {
      "EMD": "9-D-2D",
      "Description": "OBVIOUS OR EXPECTED DEATH (QUESTIONABLE) - INCINERATION",
    },
    {
      "EMD": "9-D-2E",
      "Description": "OBVIOUS OR EXPECTED DEATH (QUESTIONABLE) - NON RECENT",
    },
    {
      "EMD": "9-D-2F",
      "Description": "OBVIOUS OR EXPECTED DEATH (QUESTIONABLE) - INJURIES INCOMPATIBLE WITH LIFE",
    },
    {
      "EMD": "9-D-2G",
      "Description": "OBVIOUS OR EXPECTED DEATH (QUESTIONABLE) - SUBMERSION > 6HRS",
    },
    {
      "EMD": "9-D-2H",
      "Description": "OBVIOUS OR EXPECTED DEATH (QUESTIONABLE)",
    },
    {
      "EMD": "9-D-2X",
      "Description": "OBVIOUS OR EXPECTED DEATH (QUESTIONABLE) - TERMINAL ILLNESS",
    },
    {
      "EMD": "9-D-2Y",
      "Description": "OBVIOUS OR EXPECTED DEATH (QUESTIONABLE) - DNR",
    },
    {
      "EMD": "9-D-2Z",
      "Description": "OBVIOUS OR EXPECTED DEATH (QUESTIONABLE)",
    },    {
      "EMD": "9-E-0A",
      "Description": "COLD / STIFF IN WARM ENVIRONMENT",
    },
    {
      "EMD": "9-E-0B",
      "Description": "DECAPITATION",
    },
    {
      "EMD": "9-E-0C",
      "Description": "DECOMPOSITION",
    },
    {
      "EMD": "9-E-0D",
      "Description": "INCINERATION",
    },
    {
      "EMD": "9-E-0E",
      "Description": "NON RECENT",
    },
    {
      "EMD": "9-E-0F",
      "Description": "INJURIES INCOMPATIBLE WITH LIFE",
    },
    {
      "EMD": "9-E-0G",
      "Description": "SUBMERSION > 6HRS",
    },    {
      "EMD": "9-E-0X",
      "Description": "TERMINAL ILLNESS",
    },
    {
      "EMD": "9-E-0Y",
      "Description": "DNR",
    },    {
      "EMD": "10-A-1",
      "Description": "BREATHING NORMALLY (AGE <35)",
    },
    {
      "EMD": "11-A-1F",
      "Description": "NOT CHOKING NOW (ALERT & BREATHING, CAN TALK) - FOOD",
    },
    {
      "EMD": "11-A-1M",
      "Description": "NOT CHOKING NOW (ALERT & BREATHING, CAN TALK) - MILK/LIQUID (NON-TOXIC)",
    },
    {
      "EMD": "11-A-1O",
      "Description": "NOT CHOKING NOW (ALERT & BREATHING, CAN TALK) - OBJECT / TOY",
    },
    {
      "EMD": "11-A-1U",
      "Description": "NOT CHOKING NOW (ALERT & BREATHING, CAN TALK) - UNKNOWN",
    },
    {
      "EMD": "11-D-0C",
      "Description": "CANDY/SWEETS/GUM",
    },
    {
      "EMD": "11-D-0F",
      "Description": "FOOD",
    },    {
      "EMD": "11-D-0O",
      "Description": "OBJECT / TOY",
    },
    {
      "EMD": "11-D-0U",
      "Description": "UNKNOWN",
    },
    {
      "EMD": "11-D-1C",
      "Description": "ABNORMAL BREATHING (PARTIAL OBSTRUCTION) - CANDY/SWEETS/GUM",
    },
    {
      "EMD": "11-D-1F",
      "Description": "ABNORMAL BREATHING (PARTIAL OBSTRUCTION) - FOOD",
    },    {
      "EMD": "11-D-1O",
      "Description": "ABNORMAL BREATHING (PARTIAL OBSTRUCTION) - OBJECT / TOY",
    },
    {
      "EMD": "11-D-1U",
      "Description": "ABNORMAL BREATHING (PARTIAL OBSTRUCTION) - UNKNOWN",
    },
    {
      "EMD": "11-D-2C",
      "Description": "NOT ALERT - CANDY/SWEETS/GUM",
    },
    {
      "EMD": "11-D-2F",
      "Description": "NOT ALERT - FOOD",
    },    {
      "EMD": "11-D-2O",
      "Description": "NOT ALERT - OBJECT / TOY",
    },
    {
      "EMD": "11-D-2U",
      "Description": "NOT ALERT - UNKNOWN",
    },
    {
      "EMD": "11-E-0C",
      "Description": "CANDY/SWEETS/GUM",
    },
    {
      "EMD": "11-E-0F",
      "Description": "FOOD",
    },
    {
      "EMD": "11-E-0M",
      "Description": "MILK/LIQUID (NON-TOXIC)",
    },
    {
      "EMD": "11-E-0O",
      "Description": "OBJECT / TOY",
    },
    {
      "EMD": "11-E-0U",
      "Description": "UNKNOWN",
    },
    {
      "EMD": "11-E-1",
      "Description": "COMPLETE OBSTRUCTION / INEFFECTIVE BREATHING",
    },
    {
      "EMD": "11-E-1C",
      "Description": "COMPLETE OBSTRUCTION / INEFFECTIVE BREATHING - CANDY/SWEETS/GUM",
    },
    {
      "EMD": "11-E-1F",
      "Description": "COMPLETE OBSTRUCTION / INEFFECTIVE BREATHING - FOOD",
    },
    {
      "EMD": "11-E-1M",
      "Description": "COMPLETE OBSTRUCTION / INEFFECTIVE BREATHING - MILK/LIQUID (NON-TOXIC)",
    },
    {
      "EMD": "11-E-1O",
      "Description": "COMPLETE OBSTRUCTION / INEFFECTIVE BREATHING - OBJECT / TOY",
    },
    {
      "EMD": "11-E-1U",
      "Description": "COMPLETE OBSTRUCTION / INEFFECTIVE BREATHING - UNKNOWN",
    },    {
      "EMD": "12-A-4E",
      "Description": "FOCAL / ABSENCE SEIZURE (ALERT) - EPILEPTIC",
    },
    {
      "EMD": "12-A-5",
      "Description": "IMPENDING SEIZURE (AURA)",
    },
    {
      "EMD": "12-A-5E",
      "Description": "IMPENDING SEIZURE (AURA) - EPILEPTIC",
    },    {
      "EMD": "12-B-0E",
      "Description": "EPILEPTIC",
    },
    {
      "EMD": "12-B-1",
      "Description": "EFFECTIVE BREATHING NOT VERIFIED (AGE <35)",
    },
    {
      "EMD": "12-B-1E",
      "Description": "AGE <35 (EFFECTIVE BREATHING NOT VERIFIED) - EPILEPTIC",
    },    {
      "EMD": "12-C-0E",
      "Description": "EPILEPTIC",
    },
    {
      "EMD": "12-C-1",
      "Description": "FOCAL / ABSENCE SEIZURE (NOT ALERT)",
    },
    {
      "EMD": "12-C-1E",
      "Description": "FOCAL / ABSENCE SEIZURE (NOT ALERT) - EPILEPTIC",
    },
    {
      "EMD": "12-C-2",
      "Description": "PREGNANCY",
    },
    {
      "EMD": "12-C-2E",
      "Description": "PREGNANCY - EPILEPTIC",
    },
    {
      "EMD": "12-C-3",
      "Description": "DIABETIC",
    },
    {
      "EMD": "12-C-3E",
      "Description": "DIABETIC - EPILEPTIC",
    },
    {
      "EMD": "12-C-5E",
      "Description": "HISTORY OF STROKE OR BRAIN TUMOR - EPILEPTIC",
    },
    {
      "EMD": "12-C-6",
      "Description": "OVERDOSE/POISONING (INGESTION)",
    },
    {
      "EMD": "12-C-6E",
      "Description": "OVERDOSE/POISONING (INGESTION) - EPILEPTIC",
    },
    {
      "EMD": "12-C-7",
      "Description": "ATYPICAL SEIZURE",
    },
    {
      "EMD": "12-C-7E",
      "Description": "ATYPICAL SEIZURE - EPILEPTIC",
    },    {
      "EMD": "12-D-0E",
      "Description": "EPILEPTIC",
    },
    {
      "EMD": "12-D-1",
      "Description": "NOT BREATHING (AFTER KEY QUESTIONING)",
    },
    {
      "EMD": "12-D-1E",
      "Description": "NOT BREATHING AFTER KEY QUESTIONING - EPILEPTIC",
    },
    {
      "EMD": "12-D-2",
      "Description": "CONTINUOUS OR MULTIPLE SEIZURES",
    },
    {
      "EMD": "12-D-2E",
      "Description": "CONTINUOUS OR MULTIPLE SEIZURES - EPILEPTIC",
    },
    {
      "EMD": "12-D-3",
      "Description": "AGONAL / INEFFECTIVE BREATHING",
    },
    {
      "EMD": "12-D-3E",
      "Description": "AGONAL BREATHING / INEFFECTIVE BREATHING - EPILEPTIC",
    },
    {
      "EMD": "12-D-4",
      "Description": "EFFECTIVE BREATHING NOT VERIFIED >= 35",
    },
    {
      "EMD": "12-D-4E",
      "Description": "EFFECTIVE BREATHING NOT VERIFIED >= 35 - EPILEPTIC",
    },    {
      "EMD": "13-A-1",
      "Description": "ALERT AND BEHAVING NORMALLY",
    },
    {
      "EMD": "13-C-1",
      "Description": "NOT ALERT",
    },
    {
      "EMD": "13-C-1C",
      "Description": "NOT ALERT - COMBATIVE / AGGRESSIVE",
    },
    {
      "EMD": "13-C-2",
      "Description": "ABNORMAL BEHAVIOR",
    },
    {
      "EMD": "13-C-2C",
      "Description": "ABNORMAL BEHAVIOR - COMBATIVE / AGGRESSIVE",
    },
    {
      "EMD": "13-C-3",
      "Description": "ABNORMAL BREATHING",
    },
    {
      "EMD": "13-C-3C",
      "Description": "ABNORMAL BREATHING - COMBATIVE / AGGRESSIVE",
    },    {
      "EMD": "13-D-0C",
      "Description": "COMBATIVE / AGGRESSIVE",
    },
    {
      "EMD": "13-D-1",
      "Description": "UNCONSCIOUS",
    },
    {
      "EMD": "13-D-1C",
      "Description": "UNCONSCIOUS - COMBATIVE / AGGRESSIVE",
    },    {
      "EMD": "14-A-1",
      "Description": "ALERT AND BREATHING (NO INJURIES AND OUT OF WATER)",
    },    {
      "EMD": "14-A-1F",
      "Description": "ALERT AND BREATHING (NO INJ AND OUT OF WATER) - FLOODWATER RESCUE",
    },
    {
      "EMD": "14-A-1I",
      "Description": "ALERT AND BREATHING (NO INJ AND OUT OF WATER) - ICE RESCUE",
    },
    {
      "EMD": "14-A-1S",
      "Description": "ALERT AND BREATHING (NO INJ AND OUT OF WATER) - SCUBA ACCIDENT (NOT UNDERWATER)",
    },
    {
      "EMD": "14-B-0D",
      "Description": "DIVING INJURY (NOT UNDERWATER)",
    },
    {
      "EMD": "14-B-0F",
      "Description": "FLOODWATER RESCUE",
    },
    {
      "EMD": "14-B-0I",
      "Description": "ICE RESCUE",
    },
    {
      "EMD": "14-B-0S",
      "Description": "SCUBA ACCIDENT (NOT UNDERWATER)",
    },
    {
      "EMD": "14-B-0W",
      "Description": "SWIFT WATER RESCUE",
    },
    {
      "EMD": "14-B-1",
      "Description": "ALERT & BREATHING NORMALLY (INJURIES OR IN WATER)",
    },
    {
      "EMD": "14-B-1D",
      "Description": "ALERT & BREATHING NORMALLY (INJ OR IN WATER) - DIVING INJURY (NOT UNDERWATER)",
    },
    {
      "EMD": "14-B-1F",
      "Description": "ALERT & BREATHING NORMALLY (INJURIES OR IN WATER) - FLOODWATER RESCUE",
    },
    {
      "EMD": "14-B-1I",
      "Description": "ALERT & BREATHING NORMALLY(INJURIES OR IN WATER) - ICE RESCUE",
    },
    {
      "EMD": "14-B-1S",
      "Description": "ALERT & BREATHING NORMALLY (INJ OR IN WATER) - SCUBA ACCIDENT (NOT UNDERWATER)",
    },
    {
      "EMD": "14-B-1W",
      "Description": "ALERT & BREATHING NORMALLY (INJURIES OR IN WATER) - SWIFT WATER RESCUE",
    },
    {
      "EMD": "14-B-2",
      "Description": "OBVIOUS DEATH (SUBMERSION > 6HRS)",
    },
    {
      "EMD": "14-B-3",
      "Description": "UNKNOWN STATUS / OTHER CODES NOT APPLICABLE",
    },    {
      "EMD": "14-C-0D",
      "Description": "DIVING INJURY (NOT UNDERWATER)",
    },
    {
      "EMD": "14-C-0F",
      "Description": "FLOODWATER RESCUE",
    },
    {
      "EMD": "14-C-0I",
      "Description": "ICE RESCUE",
    },
    {
      "EMD": "14-C-0S",
      "Description": "SCUBA ACCIDENT (NOT UNDERWATER)",
    },
    {
      "EMD": "14-C-0W",
      "Description": "SWIFT WATER RESCUE",
    },
    {
      "EMD": "14-C-1",
      "Description": "ALERT WITH ABNORMAL BREATHING",
    },
    {
      "EMD": "14-C-1D",
      "Description": "ALERT WITH ABNORMAL BREATHING - DIVING INJURY (NOT UNDERWATER)",
    },
    {
      "EMD": "14-C-1F",
      "Description": "ALERT WITH ABNORMAL BREATHING - FLOODWATER RESCUE",
    },
    {
      "EMD": "14-C-1I",
      "Description": "ALERT WITH ABNORMAL BREATHING - ICE RESCUE",
    },
    {
      "EMD": "14-D-0D",
      "Description": "DIVING INJURY (NOT UNDERWATER)",
    },
    {
      "EMD": "14-D-0F",
      "Description": "FLOODWATER RESCUE",
    },
    {
      "EMD": "14-D-0I",
      "Description": "ICE RESCUE",
    },
    {
      "EMD": "14-D-0S",
      "Description": "SCUBA ACCIDENT (NOT UNDERWATER)",
    },    {
      "EMD": "14-D-1",
      "Description": "UNCONSCIOUS",
    },
    {
      "EMD": "14-D-1D",
      "Description": "UNCONSCIOUS - DIVING INJURY (NOT UNDERWATER)",
    },
    {
      "EMD": "14-D-1F",
      "Description": "UNCONSCIOUS - FLOODWATER RESCUE",
    },
    {
      "EMD": "14-D-1I",
      "Description": "UNCONSCIOUS - ICE RESCUE",
    },
    {
      "EMD": "14-D-1S",
      "Description": "UNCONSCIOUS - SCUBA ACCIDENT (NOT UNDERWATER)",
    },    {
      "EMD": "14-D-2",
      "Description": "UNDERWATER (SPECIALIZED RESCUE)",
    },
    {
      "EMD": "14-D-3",
      "Description": "STRANDED (SPECIALIZED RESCUE)",
    },
    {
      "EMD": "14-D-3D",
      "Description": "STRANDED (SPECIALIZED RESCUE) - DIVING INJURY (NOT UNDERWATER)",
    },
    {
      "EMD": "14-D-3F",
      "Description": "STRANDED (SPECIALIZED RESCUE) - FLOODWATER RESCUE",
    },
    {
      "EMD": "14-D-3I",
      "Description": "STRANDED (SPECIALIZED RESCUE) - ICE RESCUE",
    },
    {
      "EMD": "14-D-3S",
      "Description": "STRANDED (SPECIALIZED RESCUE) - SCUBA ACCIDENT (NOT UNDERWATER)",
    },    {
      "EMD": "14-D-4",
      "Description": "JUST RESUSCITATED &/OR DEFIBRILLATED (EXTERNAL)",
    },
    {
      "EMD": "14-D-4D",
      "Description": "JUST RESUSCITATED &/OR DEFIBRILLATED (EXTERNAL) - DIVING INJURY (NOT UNDERWATER)",
    },
    {
      "EMD": "14-D-4F",
      "Description": "JUST RESUSCITATED &/OR DEFIBRILLATED (EXTERNAL) - FLOODWATER RESCUE",
    },
    {
      "EMD": "14-D-4I",
      "Description": "JUST RESUSCITATED &/OR DEFIBRILLATED (EXTERNAL) - ICE RESCUE",
    },    {
      "EMD": "14-D-5",
      "Description": "NOT ALERT",
    },
    {
      "EMD": "14-D-5D",
      "Description": "NOT ALERT - DIVING INJURY (NOT UNDERWATER)",
    },
    {
      "EMD": "14-D-5F",
      "Description": "NOT ALERT - FLOODWATER RESCUE",
    },
    {
      "EMD": "14-D-5I",
      "Description": "NOT ALERT - ICE RESCUE",
    },
    {
      "EMD": "14-D-5S",
      "Description": "NOT ALERT - SCUBA ACCIDENT (NOT UNDERWATER)",
    },    {
      "EMD": "14-D-6",
      "Description": "SUSPECTED NECK INJURY",
    },
    {
      "EMD": "14-D-6D",
      "Description": "SUSPECTED NECK INJURY - DIVING INJURY (NOT UNDERWATER)",
    },
    {
      "EMD": "14-D-6F",
      "Description": "SUSPECTED NECK INJURY - FLOODWATER RESCUE",
    },
    {
      "EMD": "14-D-6I",
      "Description": "SUSPECTED NECK INJURY - ICE RESCUE",
    },
    {
      "EMD": "14-D-6S",
      "Description": "SUSPECTED NECK INJURY - SCUBA ACCIDENT (NOT UNDERWATER)",
    },
    {
      "EMD": "14-E-0D",
      "Description": "DIVING INJURY (NOT UNDERWATER)",
    },
    {
      "EMD": "14-E-0F",
      "Description": "FLOODWATER RESCUE",
    },
    {
      "EMD": "14-E-0I",
      "Description": "ICE RESCUE",
    },
    {
      "EMD": "14-E-0S",
      "Description": "SCUBA ACCIDENT (NOT UNDERWATER)",
    },
    {
      "EMD": "14-E-0W",
      "Description": "SWIFT WATER RESCUE",
    },
    {
      "EMD": "14-E-1",
      "Description": "ARREST (OUT OF WATER)",
    },
    {
      "EMD": "14-E-1D",
      "Description": "ARREST (OUT OF WATER) - DIVING INJURY (NOT UNDERWATER)",
    },
    {
      "EMD": "14-E-1F",
      "Description": "ARREST (OUT OF WATER) - FLOODWATER RESCUE",
    },
    {
      "EMD": "14-E-1I",
      "Description": "ARREST (OUT OF WATER) - ICE RESCUE",
    },
    {
      "EMD": "14-E-1S",
      "Description": "ARREST (OUT OF WATER) - SCUBA ACCIDENT (NOT UNDERWATER)",
    },
    {
      "EMD": "14-E-1W",
      "Description": "ARREST (OUT OF WATER) - SWIFT WATER RESCUE",
    },
    {
      "EMD": "14-E-2",
      "Description": "UNDERWATER (DOMESTIC RESCUE)",
    },    {
      "EMD": "15-C-1E",
      "Description": "ALERT AND BREATHING NORMALLY - ELECTROCUTION",
    },
    {
      "EMD": "15-C-1L",
      "Description": "ALERT AND BREATHING NORMALLY - LIGHTNING",
    },
    {
      "EMD": "15-D-0E",
      "Description": "ELECTROCUTION",
    },
    {
      "EMD": "15-D-0L",
      "Description": "LIGHTNING",
    },
    {
      "EMD": "15-D-1E",
      "Description": "MULTIPLE VICTIMS - ELECTROCUTION",
    },
    {
      "EMD": "15-D-1L",
      "Description": "MULTIPLE VICTIMS - LIGHTNING",
    },
    {
      "EMD": "15-D-2E",
      "Description": "UNCONSCIOUS - ELECTROCUTION",
    },
    {
      "EMD": "15-D-2L",
      "Description": "UNCONSCIOUS - LIGHTNING",
    },
    {
      "EMD": "15-D-3E",
      "Description": "NOT DISCONNECTED FROM POWER - ELECTROCUTION",
    },
    {
      "EMD": "15-D-4E",
      "Description": "POWER NOT OFF OR HAZARD PRESENT - ELECTROCUTION",
    },
    {
      "EMD": "15-D-5E",
      "Description": "EXTREME FALL (>= 30 FT) - ELECTROCUTION",
    },
    {
      "EMD": "15-D-5L",
      "Description": "EXTREME FALL (>= 30 FT) - LIGHTNING",
    },
    {
      "EMD": "15-D-6E",
      "Description": "LONG FALL - ELECTROCUTION",
    },
    {
      "EMD": "15-D-6L",
      "Description": "LONG FALL - LIGHTNING",
    },
    {
      "EMD": "15-D-7E",
      "Description": "NOT ALERT - ELECTROCUTION",
    },
    {
      "EMD": "15-D-7L",
      "Description": "NOT ALERT - LIGHTNING",
    },
    {
      "EMD": "15-D-8E",
      "Description": "ABNORMAL BREATHING - ELECTROCUTION",
    },
    {
      "EMD": "15-D-8L",
      "Description": "ABNORMAL BREATHING - LIGHTNING",
    },
    {
      "EMD": "15-D-9E",
      "Description": "UNKNOWN STATUS / OTHER CODES NOT APPLICABLE - ELECTROCUTION",
    },
    {
      "EMD": "15-D-9L",
      "Description": "UNKNOWN STATUS / OTHER CODES NOT APPLICABLE - LIGHTNING",
    },
    {
      "EMD": "15-E-0E",
      "Description": "ELECTROCUTION",
    },
    {
      "EMD": "15-E-0L",
      "Description": "LIGHTNING",
    },
    {
      "EMD": "15-E-1E",
      "Description": "NOT BREATHING / INEFFECTIVE BREATHING - ELECTROCUTION",
    },
    {
      "EMD": "15-E-1L",
      "Description": "NOT BREATHING / INEFFECTIVE BREATHING - LIGHTNING",
    },    {
      "EMD": "16-A-1",
      "Description": "MODERATE EYE INJURY",
    },
    {
      "EMD": "16-A-2",
      "Description": "MINOR EYE INJURY",
    },
    {
      "EMD": "16-A-3",
      "Description": "MEDICAL EYE PROBLEMS",
    },    {
      "EMD": "16-B-1",
      "Description": "SEVERE EYE INJURY",
    },    {
      "EMD": "16-D-1",
      "Description": "NOT ALERT",
    },    {
      "EMD": "17-A-1",
      "Description": "NOT DANGEROUS (UPPER ARM, KNEE, ELBOW) W/ DEFORMITY",
    },
    {
      "EMD": "17-A-1A",
      "Description": "NOT DANGEROUS (UPPER ARM, KNEE, ELBOW) W/DEFORMITY - ACCESSIBILITY CONCERNS/DIFF",
    },
    {
      "EMD": "17-A-1E",
      "Description": "NOT DANG (UPPER ARM, KNEE, ELBOW) W/DEFORMITY - ENVIRON PROB (RAIN, HEAT, COLD)",
    },
    {
      "EMD": "17-A-1G",
      "Description": "NOT DANGEROUS (UPPER ARM, KNEE, ELBOW) W/ DEFORMITY - ON THE GROUND / FLOOR",
    },
    {
      "EMD": "17-A-1J",
      "Description": "NOT DANGEROUS (UPPER ARM, KNEE, ELBOW) W/ DEFORMITY - JUMPER (SUICIDE ATTEMPT)",
    },
    {
      "EMD": "17-A-1P",
      "Description": "NOT DANG (UPPER ARM, KNEE, ELBOW) W/DEFORMITY - PUB PL (ROAD,PARK GARAGE,MARKET)",
    },
    {
      "EMD": "17-A-2",
      "Description": "NOT DANGEROUS BODY AREA",
    },
    {
      "EMD": "17-A-2A",
      "Description": "NOT DANGEROUS BODY AREA - ACCESSIBILITY CONCERNS/DIFFICULTY",
    },
    {
      "EMD": "17-A-2E",
      "Description": "NOT DANGEROUS BODY AREA - ENVIRONMENTAL PROBLEMS (RAIN, HEAT, COLD)",
    },
    {
      "EMD": "17-A-2G",
      "Description": "NOT DANGEROUS BODY AREA - ON THE GROUND / FLOOR",
    },
    {
      "EMD": "17-A-2J",
      "Description": "NOT DANGEROUS BODY AREA - JUMPER (SUICIDE ATTEMPT)",
    },
    {
      "EMD": "17-A-2P",
      "Description": "NOT DANGEROUS BODY AREA - PUBLIC PLACE (ROAD, PARKING GARAGE, MARKET)",
    },
    {
      "EMD": "17-A-3",
      "Description": "NON RECENT INJURIES (> 6 HRS)",
    },
    {
      "EMD": "17-A-3A",
      "Description": "NON RECENT INJURIES (> 6 HRS) - ACCESSIBILITY CONCERNS/DIFFICULTY",
    },
    {
      "EMD": "17-A-3E",
      "Description": "NON RECENT INJURIES (> 6 HRS) - ENVIRONMENTAL PROBLEMS (RAIN, HEAT, COLD)",
    },
    {
      "EMD": "17-A-3G",
      "Description": "NON RECENT INJURIES (> 6 HRS) - ON THE GROUND / FLOOR",
    },
    {
      "EMD": "17-A-3J",
      "Description": "NON RECENT INJURIES (> 6 HRS) - JUMPER (SUICIDE ATTEMPT)",
    },
    {
      "EMD": "17-A-3P",
      "Description": "NON RECENT INJURIES (> 6 HRS) - PUBLIC PLACE (ROAD, PARKING GARAGE, MARKET)",
    },
    {
      "EMD": "17-A-4",
      "Description": "PUBLIC ASSIST (NO INJ & NO PRIORITY SYMPTOMS)",
    },
    {
      "EMD": "17-A-4A",
      "Description": "PUBLIC ASSIST (NO INJ & NO PRIORITY SYMPTOMS) - ACCESSIBILITY CONCERNS/DIFF",
    },
    {
      "EMD": "17-A-4E",
      "Description": "PUBLIC ASSIST (NO INJ & NO PRIORITY SYMPT) - ENVIRONMENT PROB (RAIN, HEAT, COLD)",
    },
    {
      "EMD": "17-A-4G",
      "Description": "PUBLIC ASSIST (NO INJ & NO PRIORITY SYMPTOMS) - ON THE GROUND / FLOOR",
    },
    {
      "EMD": "17-A-4J",
      "Description": "PUBLIC ASSIST (NO INJ & NO PRIORITY SYMPTOMS) - JUMPER (SUICIDE ATTEMPT)",
    },    {
      "EMD": "17-B-0A",
      "Description": "ACCESSIBILITY CONCERNS/DIFFICULTY",
    },
    {
      "EMD": "17-B-0E",
      "Description": "ENVIRONMENTAL PROBLEMS (RAIN, HEAT, COLD)",
    },
    {
      "EMD": "17-B-0G",
      "Description": "ON THE GROUND / FLOOR",
    },
    {
      "EMD": "17-B-0J",
      "Description": "JUMPER (SUICIDE ATTEMPT)",
    },
    {
      "EMD": "17-B-0P",
      "Description": "PUBLIC PLACE (ROAD, PARKING GARAGE, MARKET)",
    },
    {
      "EMD": "17-B-1",
      "Description": "POSSIBLY DANGEROUS BODY AREA",
    },
    {
      "EMD": "17-B-1A",
      "Description": "POSSIBLY DANGEROUS BODY AREA - ACCESSIBILITY CONCERNS/DIFFICULTY",
    },
    {
      "EMD": "17-B-1E",
      "Description": "POSSIBLY DANGEROUS BODY AREA - ENVIRONMENTAL PROBLEMS (RAIN, HEAT, COLD)",
    },
    {
      "EMD": "17-B-1G",
      "Description": "POSSIBLY DANGEROUS BODY AREA - ON THE GROUND / FLOOR",
    },
    {
      "EMD": "17-B-1J",
      "Description": "POSSIBLY DANGEROUS BODY AREA - JUMPER (SUICIDE ATTEMPT)",
    },
    {
      "EMD": "17-B-1P",
      "Description": "POSSIBLY DANGEROUS BODY AREA - PUBLIC PLACE (ROAD, PARKING GARAGE, MARKET)",
    },
    {
      "EMD": "17-B-2",
      "Description": "SERIOUS HEMORRHAGE",
    },
    {
      "EMD": "17-B-2A",
      "Description": "SERIOUS HEMORRHAGE - ACCESSIBILITY CONCERNS/DIFFICULTY",
    },
    {
      "EMD": "17-B-2E",
      "Description": "SERIOUS HEMORRHAGE - ENVIRONMENTAL PROBLEMS (RAIN, HEAT, COLD)",
    },
    {
      "EMD": "17-B-2G",
      "Description": "SERIOUS HEMORRHAGE - ON THE GROUND / FLOOR",
    },
    {
      "EMD": "17-B-2J",
      "Description": "SERIOUS HEMORRHAGE - JUMPER (SUICIDE ATTEMPT)",
    },
    {
      "EMD": "17-B-2P",
      "Description": "SERIOUS HEMORRHAGE - PUBLIC PLACE (ROAD, PARKING GARAGE, MARKET)",
    },
    {
      "EMD": "17-B-3",
      "Description": "UNKNOWN STATUS / OTHER CODES NOT APPLICABLE",
    },
    {
      "EMD": "17-B-3A",
      "Description": "UNK STATUS /OTHER CODES NOT APPLICABLE - ACCESSIBILITY CONCERNS/DIFFICULTY",
    },
    {
      "EMD": "17-B-3E",
      "Description": "UNK STATUS /OTHER CODES NOT APPLICABLE - ENVIRONMENTAL PROB (RAIN, HEAT, COLD)",
    },
    {
      "EMD": "17-B-3G",
      "Description": "UNKNOWN STATUS / OTHER CODES NOT APPLICABLE - ON THE GROUND / FLOOR",
    },
    {
      "EMD": "17-B-3J",
      "Description": "UNKNOWN STATUS / OTHER CODES NOT APPLICABLE - JUMPER (SUICIDE ATTEMPT)",
    },    {
      "EMD": "17-D-0A",
      "Description": "ACCESSIBILITY CONCERNS/DIFFICULTY",
    },
    {
      "EMD": "17-D-0E",
      "Description": "ENVIRONMENTAL PROBLEMS (RAIN, HEAT, COLD)",
    },
    {
      "EMD": "17-D-0G",
      "Description": "ON THE GROUND / FLOOR",
    },
    {
      "EMD": "17-D-0J",
      "Description": "JUMPER (SUICIDE ATTEMPT)",
    },
    {
      "EMD": "17-D-0P",
      "Description": "PUBLIC PLACE (ROAD, PARKING GARAGE, MARKET)",
    },
    {
      "EMD": "17-D-1",
      "Description": "EXTREME FALL (>= 30 FT)",
    },
    {
      "EMD": "17-D-1A",
      "Description": "EXTREME FALL (>= 30 FT) - ACCESSIBILITY CONCERNS/DIFFICULTY",
    },
    {
      "EMD": "17-D-1E",
      "Description": "EXTREME FALL (>= 30 FT) - ENVIRONMENTAL PROBLEMS (RAIN, HEAT, COLD)",
    },
    {
      "EMD": "17-D-1G",
      "Description": "EXTREME FALL (>= 30 FT) - ON THE GROUND / FLOOR",
    },
    {
      "EMD": "17-D-1J",
      "Description": "EXTREME FALL (>= 30 FT) - JUMPER (SUICIDE ATTEMPT)",
    },
    {
      "EMD": "17-D-1P",
      "Description": "EXTREME FALL (>= 30 FT) - PUBLIC PLACE (ROAD, PARKING GARAGE, MARKET)",
    },
    {
      "EMD": "17-D-2",
      "Description": "ARREST",
    },
    {
      "EMD": "17-D-2A",
      "Description": "ARREST - ACCESSIBILITY CONCERNS/DIFFICULTY",
    },
    {
      "EMD": "17-D-2E",
      "Description": "ARREST - ENVIRONMENTAL PROBLEMS (RAIN, HEAT, COLD)",
    },
    {
      "EMD": "17-D-2G",
      "Description": "ARREST - ON THE GROUND / FLOOR",
    },
    {
      "EMD": "17-D-2J",
      "Description": "ARREST - JUMPER (SUICIDE ATTEMPT)",
    },
    {
      "EMD": "17-D-2P",
      "Description": "ARREST - PUBLIC PLACE (ROAD, PARKING GARAGE, MARKET)",
    },
    {
      "EMD": "17-D-3",
      "Description": "UNCONSCIOUS",
    },
    {
      "EMD": "17-D-3A",
      "Description": "UNCONSCIOUS - ACCESSIBILITY CONCERNS/DIFFICULTY",
    },
    {
      "EMD": "17-D-3E",
      "Description": "UNCONSCIOUS - ENVIRONMENTAL PROBLEMS (RAIN, HEAT, COLD)",
    },
    {
      "EMD": "17-D-3G",
      "Description": "UNCONSCIOUS - ON THE GROUND / FLOOR",
    },
    {
      "EMD": "17-D-3J",
      "Description": "UNCONSCIOUS - JUMPER (SUICIDE ATTEMPT)",
    },
    {
      "EMD": "17-D-3P",
      "Description": "UNCONSCIOUS - PUBLIC PLACE (ROAD, PARKING GARAGE, MARKET)",
    },
    {
      "EMD": "17-D-4",
      "Description": "NOT ALERT",
    },
    {
      "EMD": "17-D-4A",
      "Description": "NOT ALERT - ACCESSIBILITY CONCERNS/DIFFICULTY",
    },
    {
      "EMD": "17-D-4E",
      "Description": "NOT ALERT - ENVIRONMENTAL PROBLEMS (RAIN, HEAT, COLD)",
    },
    {
      "EMD": "17-D-4G",
      "Description": "NOT ALERT - ON THE GROUND / FLOOR",
    },
    {
      "EMD": "17-D-4J",
      "Description": "NOT ALERT - JUMPER (SUICIDE ATTEMPT)",
    },
    {
      "EMD": "17-D-4P",
      "Description": "NOT ALERT - PUBLIC PLACE (ROAD, PARKING GARAGE, MARKET)",
    },
    {
      "EMD": "17-D-5",
      "Description": "CHEST OR NECK INJ (W/ RESP DIFF)",
    },
    {
      "EMD": "17-D-5A",
      "Description": "CHEST OR NECK INJ (W/ RESP DIFF) - ACCESSIBILITY CONCERNS/DIFF",
    },
    {
      "EMD": "17-D-5E",
      "Description": "CHEST OR NECK INJ (W/ RESP DIFF) - ENVIRONMENTAL PROB (RAIN, HEAT, COLD)",
    },
    {
      "EMD": "17-D-5G",
      "Description": "CHEST OR NECK INJ (W/ RESP DIFF) - ON THE GROUND / FLOOR",
    },
    {
      "EMD": "17-D-5J",
      "Description": "CHEST OR NECK INJ (W/ RESP DIFF) - JUMPER (SUICIDE ATTEMPT)",
    },
    {
      "EMD": "17-D-5P",
      "Description": "CHEST OR NECK INJ (W/ RESP DIFF) - PUBLIC PLACE (ROAD, PARKING GARAGE, MARKET)",
    },
    {
      "EMD": "17-D-6",
      "Description": "LONG FALL",
    },
    {
      "EMD": "17-D-6A",
      "Description": "LONG FALL - ACCESSIBILITY CONCERNS/DIFFICULTY",
    },
    {
      "EMD": "17-D-6E",
      "Description": "LONG FALL - ENVIRONMENTAL PROBLEMS (RAIN, HEAT, COLD)",
    },
    {
      "EMD": "17-D-6G",
      "Description": "LONG FALL - ON THE GROUND / FLOOR",
    },
    {
      "EMD": "17-D-6J",
      "Description": "LONG FALL - JUMPER (SUICIDE ATTEMPT)",
    },
    {
      "EMD": "17-D-6P",
      "Description": "LONG FALL - PUBLIC PLACE (ROAD, PARKING GARAGE, MARKET)",
    },    {
      "EMD": "18-A-1",
      "Description": "BREATHING NORMALLY",
    },    {
      "EMD": "18-B-1",
      "Description": "UNKNOWN STATUS / OTHER CODES NOT APPLICABLE",
    },    {
      "EMD": "18-C-0C",
      "Description": "PARTIAL EVIDENCE (LESS THEN 2 HRS)",
    },
    {
      "EMD": "18-C-0D",
      "Description": "PARTIAL EVIDENCE (GREATER THEN 2 HRS)",
    },
    {
      "EMD": "18-C-0E",
      "Description": "PARTIAL EVIDENCE (UNKOWN TIME FRAME)",
    },
    {
      "EMD": "18-C-0F",
      "Description": "STRONG EVIDENCE (LESS THEN 2 HRS)",
    },
    {
      "EMD": "18-C-0G",
      "Description": "GREATER THEN 2 HRS (SINCE SYMPTOMS STARTED)",
    },
    {
      "EMD": "18-C-0H",
      "Description": "STRONG EVIDENCE (GREATER THEN 2 HRS)",
    },
    {
      "EMD": "18-C-0I",
      "Description": "STRONG EVIDENCE (UNKOWN TIME FRAME)",
    },
    {
      "EMD": "18-C-0J",
      "Description": "CLEAR EVIDENCE (LESS THEN 2 HRS)",
    },
    {
      "EMD": "18-C-0K",
      "Description": "CLEAR EVIDENCE (GREATER THEN 2 HRS)",
    },
    {
      "EMD": "18-C-0L",
      "Description": "LESS THEN 2 HRS (SINCE SYMPTOMS STARTED)",
    },
    {
      "EMD": "18-C-0M",
      "Description": "CLEAR EVIDENCE (UNKOWN TIME FRAME)",
    },
    {
      "EMD": "18-C-0U",
      "Description": "UNKNOWN (WHEN SYMPTOMS STARTED)",
    },
    {
      "EMD": "18-C-0X",
      "Description": "NO TEST EVIDENCE (LESS THEN 2 HRS)",
    },
    {
      "EMD": "18-C-0Y",
      "Description": "NO TEST EVIDENCE (GREATER THEN 2 HRS)",
    },
    {
      "EMD": "18-C-0Z",
      "Description": "NO TEST EVIDENCE (UNKOWN TIME FRAME)",
    },
    {
      "EMD": "18-C-1",
      "Description": "NOT ALERT",
    },
    {
      "EMD": "18-C-1C",
      "Description": "NOT ALERT - PARTIAL EVIDENCE (LESS THEN 2 HRS)",
    },
    {
      "EMD": "18-C-1D",
      "Description": "NOT ALERT - PARTIAL EVIDENCE (GREATER THEN 2 HRS)",
    },
    {
      "EMD": "18-C-1E",
      "Description": "NOT ALERT - PARTIAL EVIDENCE (UNKOWN TIME FRAME)",
    },
    {
      "EMD": "18-C-1F",
      "Description": "NOT ALERT - STRONG EVIDENCE (LESS THEN 2 HRS)",
    },
    {
      "EMD": "18-C-1G",
      "Description": "NOT ALERT - GREATER THEN 2 HRS (SINCE SYMPTOMS STARTED)",
    },
    {
      "EMD": "18-C-1H",
      "Description": "NOT ALERT - STRONG EVIDENCE (GREATER THEN 2 HRS)",
    },
    {
      "EMD": "18-C-1I",
      "Description": "NOT ALERT - STRONG EVIDENCE (UNKOWN TIME FRAME)",
    },
    {
      "EMD": "18-C-1J",
      "Description": "NOT ALERT - CLEAR EVIDENCE (LESS THEN 2 HRS)",
    },
    {
      "EMD": "18-C-1K",
      "Description": "NOT ALERT - CLEAR EVIDENCE (GREATER THEN 2 HRS)",
    },
    {
      "EMD": "18-C-1L",
      "Description": "NOT ALERT - LESS THEN 2 HRS (SINCE SYMPTOMS STARTED)",
    },
    {
      "EMD": "18-C-1M",
      "Description": "NOT ALERT - CLEAR EVIDENCE (UNKOWN TIME FRAME)",
    },
    {
      "EMD": "18-C-1U",
      "Description": "NOT ALERT - UNKNOWN (WHEN SYMPTOMS STARTED)",
    },
    {
      "EMD": "18-C-1X",
      "Description": "NOT ALERT - NO TEST EVIDENCE (LESS THEN 2 HRS)",
    },
    {
      "EMD": "18-C-1Y",
      "Description": "NOT ALERT - NO TEST EVIDENCE (GREATER THEN 2 HRS)",
    },
    {
      "EMD": "18-C-1Z",
      "Description": "NOT ALERT - NO TEST EVIDENCE (UNKOWN TIME FRAME)",
    },
    {
      "EMD": "18-C-2",
      "Description": "ABNORMAL BREATHING",
    },
    {
      "EMD": "18-C-2C",
      "Description": "ABNORMAL BREATHING - PARTIAL EVIDENCE (LESS THEN 2 HRS)",
    },
    {
      "EMD": "18-C-2D",
      "Description": "ABNORMAL BREATHING - PARTIAL EVIDENCE (GREATER THEN 2 HRS)",
    },
    {
      "EMD": "18-C-2E",
      "Description": "ABNORMAL BREATHING - PARTIAL EVIDENCE (UNKOWN TIME FRAME)",
    },
    {
      "EMD": "18-C-2F",
      "Description": "ABNORMAL BREATHING - STRONG EVIDENCE (LESS THEN 2 HRS)",
    },
    {
      "EMD": "18-C-2G",
      "Description": "ABNORMAL BREATHING - GREATER THEN 2 HRS (SINCE SYMPTOMS STARTED)",
    },
    {
      "EMD": "18-C-2H",
      "Description": "ABNORMAL BREATHING - STRONG EVIDENCE (GREATER THEN 2 HRS)",
    },
    {
      "EMD": "18-C-2I",
      "Description": "ABNORMAL BREATHING - STRONG EVIDENCE (UNKOWN TIME FRAME)",
    },
    {
      "EMD": "18-C-2J",
      "Description": "ABNORMAL BREATHING - CLEAR EVIDENCE (LESS THEN 2 HRS)",
    },
    {
      "EMD": "18-C-2K",
      "Description": "ABNORMAL BREATHING - CLEAR EVIDENCE (GREATER THEN 2 HRS)",
    },
    {
      "EMD": "18-C-2L",
      "Description": "ABNORMAL BREATHING - LESS THEN 2 HRS (SINCE SYMPTOMS STARTED)",
    },
    {
      "EMD": "18-C-2M",
      "Description": "ABNORMAL BREATHING - CLEAR EVIDENCE (UNKOWN TIME FRAME)",
    },
    {
      "EMD": "18-C-2U",
      "Description": "ABNORMAL BREATHING - UNKNOWN (WHEN SYMPTOMS STARTED)",
    },
    {
      "EMD": "18-C-2X",
      "Description": "ABNORMAL BREATHING - NO TEST EVIDENCE (LESS THEN 2 HRS)",
    },
    {
      "EMD": "18-C-2Y",
      "Description": "ABNORMAL BREATHING - NO TEST EVIDENCE (GREATER THEN 2 HRS)",
    },
    {
      "EMD": "18-C-2Z",
      "Description": "ABNORMAL BREATHING - NO TEST EVIDENCE (UNKOWN TIME FRAME)",
    },
    {
      "EMD": "18-C-3",
      "Description": "SPEECH PROBLEMS",
    },
    {
      "EMD": "18-C-3C",
      "Description": "SPEECH PROBLEMS - PARTIAL EVIDENCE (LESS THEN 2 HRS)",
    },
    {
      "EMD": "18-C-3D",
      "Description": "SPEECH PROBLEMS - PARTIAL EVIDENCE (GREATER THEN 2 HRS)",
    },
    {
      "EMD": "18-C-3E",
      "Description": "SPEECH PROBLEMS - PARTIAL EVIDENCE (UNKOWN TIME FRAME)",
    },
    {
      "EMD": "18-C-3F",
      "Description": "SPEECH PROBLEMS - STRONG EVIDENCE (LESS THEN 2 HRS)",
    },
    {
      "EMD": "18-C-3G",
      "Description": "SPEECH PROBLEMS - GREATER THEN 2 HRS (SINCE SYMPTOMS STARTED)",
    },
    {
      "EMD": "18-C-3H",
      "Description": "SPEECH PROBLEMS - STRONG EVIDENCE (GREATER THEN 2 HRS)",
    },
    {
      "EMD": "18-C-3I",
      "Description": "SPEECH PROBLEMS - STRONG EVIDENCE (UNKOWN TIME FRAME)",
    },
    {
      "EMD": "18-C-3J",
      "Description": "SPEECH PROBLEMS - CLEAR EVIDENCE (LESS THEN 2 HRS)",
    },
    {
      "EMD": "18-C-3K",
      "Description": "SPEECH PROBLEMS - CLEAR EVIDENCE (GREATER THEN 2 HRS)",
    },
    {
      "EMD": "18-C-3L",
      "Description": "SPEECH PROBLEMS - LESS THEN 2 HRS (SINCE SYMPTOMS STARTED)",
    },
    {
      "EMD": "18-C-3M",
      "Description": "SPEECH PROBLEMS - CLEAR EVIDENCE (UNKOWN TIME FRAME)",
    },
    {
      "EMD": "18-C-3U",
      "Description": "SPEECH PROBLEMS - UNKNOWN (WHEN SYMPTOMS STARTED)",
    },
    {
      "EMD": "18-C-3X",
      "Description": "SPEECH PROBLEMS - NO TEST EVIDENCE (LESS THEN 2 HRS)",
    },
    {
      "EMD": "18-C-3Y",
      "Description": "SPEECH PROBLEMS - NO TEST EVIDENCE (GREATER THEN 2 HRS)",
    },
    {
      "EMD": "18-C-3Z",
      "Description": "SPEECH PROBLEMS - NO TEST EVIDENCE (UNKOWN TIME FRAME)",
    },
    {
      "EMD": "18-C-4",
      "Description": "SUDDEN ONSET OF SEVERE PAIN",
    },
    {
      "EMD": "18-C-4C",
      "Description": "SUDDEN ONSET OF SEVERE PAIN - PARTIAL EVIDENCE (LESS THEN 2 HRS)",
    },
    {
      "EMD": "18-C-4D",
      "Description": "SUDDEN ONSET OF SEVERE PAIN - PARTIAL EVIDENCE (GREATER THEN 2 HRS)",
    },
    {
      "EMD": "18-C-4E",
      "Description": "SUDDEN ONSET OF SEVERE PAIN - PARTIAL EVIDENCE (UNKOWN TIME FRAME)",
    },
    {
      "EMD": "18-C-4F",
      "Description": "SUDDEN ONSET OF SEVERE PAIN - STRONG EVIDENCE (LESS THEN 2 HRS)",
    },
    {
      "EMD": "18-C-4G",
      "Description": "SUDDEN ONSET OF SEVERE PAIN - GREATER THEN 2 HRS (SINCE SYMPTOMS STARTED)",
    },
    {
      "EMD": "18-C-4H",
      "Description": "SUDDEN ONSET OF SEVERE PAIN - STRONG EVIDENCE (GREATER THEN 2 HRS)",
    },
    {
      "EMD": "18-C-4I",
      "Description": "SUDDEN ONSET OF SEVERE PAIN - STRONG EVIDENCE (UNKOWN TIME FRAME)",
    },
    {
      "EMD": "18-C-4J",
      "Description": "SUDDEN ONSET OF SEVERE PAIN - CLEAR EVIDENCE (LESS THEN 2 HRS)",
    },
    {
      "EMD": "18-C-4K",
      "Description": "SUDDEN ONSET OF SEVERE PAIN - CLEAR EVIDENCE (GREATER THEN 2 HRS)",
    },
    {
      "EMD": "18-C-4L",
      "Description": "SUDDEN ONSET OF SEVERE PAIN - LESS THEN 2 HRS (SINCE SYMPTOMS STARTED)",
    },
    {
      "EMD": "18-C-4M",
      "Description": "SUDDEN ONSET OF SEVERE PAIN - CLEAR EVIDENCE (UNKOWN TIME FRAME)",
    },
    {
      "EMD": "18-C-4U",
      "Description": "SUDDEN ONSET OF SEVERE PAIN - UNKNOWN (WHEN SYMPTOMS STARTED)",
    },
    {
      "EMD": "18-C-4X",
      "Description": "SUDDEN ONSET OF SEVERE PAIN - NO TEST EVIDENCE (LESS THEN 2 HRS)",
    },
    {
      "EMD": "18-C-4Y",
      "Description": "SUDDEN ONSET OF SEVERE PAIN - NO TEST EVIDENCE (GREATER THEN 2 HRS)",
    },
    {
      "EMD": "18-C-4Z",
      "Description": "SUDDEN ONSET OF SEVERE PAIN - NO TEST EVIDENCE (UNKOWN TIME FRAME)",
    },
    {
      "EMD": "18-C-5",
      "Description": "NUMBNESS",
    },
    {
      "EMD": "18-C-5C",
      "Description": "NUMBNESS - PARTIAL EVIDENCE (LESS THEN 2 HRS)",
    },
    {
      "EMD": "18-C-5D",
      "Description": "NUMBNESS - PARTIAL EVIDENCE (GREATER THEN 2 HRS)",
    },
    {
      "EMD": "18-C-5E",
      "Description": "NUMBNESS - PARTIAL EVIDENCE (UNKOWN TIME FRAME)",
    },
    {
      "EMD": "18-C-5F",
      "Description": "NUMBNESS - STRONG EVIDENCE (LESS THEN 2 HRS)",
    },
    {
      "EMD": "18-C-5G",
      "Description": "NUMBNESS - GREATER THEN 2 HRS (SINCE SYMPTOMS STARTED)",
    },
    {
      "EMD": "18-C-5H",
      "Description": "NUMBNESS - STRONG EVIDENCE (GREATER THEN 2 HRS)",
    },
    {
      "EMD": "18-C-5I",
      "Description": "NUMBNESS - STRONG EVIDENCE (UNKOWN TIME FRAME)",
    },
    {
      "EMD": "18-C-5J",
      "Description": "NUMBNESS - CLEAR EVIDENCE (LESS THEN 2 HRS)",
    },
    {
      "EMD": "18-C-5K",
      "Description": "NUMBNESS - CLEAR EVIDENCE (GREATER THEN 2 HRS)",
    },
    {
      "EMD": "18-C-5L",
      "Description": "NUMBNESS - LESS THEN 2 HRS (SINCE SYMPTOMS STARTED)",
    },
    {
      "EMD": "18-C-5M",
      "Description": "NUMBNESS - CLEAR EVIDENCE (UNKOWN TIME FRAME)",
    },
    {
      "EMD": "18-C-5U",
      "Description": "NUMBNESS - UNKNOWN (WHEN SYMPTOMS STARTED)",
    },
    {
      "EMD": "18-C-5X",
      "Description": "NUMBNESS - NO TEST EVIDENCE (LESS THEN 2 HRS)",
    },
    {
      "EMD": "18-C-5Y",
      "Description": "NUMBNESS - NO TEST EVIDENCE (GREATER THEN 2 HRS)",
    },
    {
      "EMD": "18-C-5Z",
      "Description": "NUMBNESS - NO TEST EVIDENCE (UNKOWN TIME FRAME)",
    },
    {
      "EMD": "18-C-6",
      "Description": "PARALYSIS",
    },
    {
      "EMD": "18-C-6C",
      "Description": "PARALYSIS - PARTIAL EVIDENCE (LESS THEN 2 HRS)",
    },
    {
      "EMD": "18-C-6D",
      "Description": "PARALYSIS - PARTIAL EVIDENCE (GREATER THEN 2 HRS)",
    },
    {
      "EMD": "18-C-6E",
      "Description": "PARALYSIS - PARTIAL EVIDENCE (UNKOWN TIME FRAME)",
    },
    {
      "EMD": "18-C-6F",
      "Description": "PARALYSIS - STRONG EVIDENCE (LESS THEN 2 HRS)",
    },
    {
      "EMD": "18-C-6G",
      "Description": "PARALYSIS - GREATER THEN 2 HRS (SINCE SYMPTOMS STARTED)",
    },
    {
      "EMD": "18-C-6H",
      "Description": "PARALYSIS - STRONG EVIDENCE (GREATER THEN 2 HRS)",
    },
    {
      "EMD": "18-C-6I",
      "Description": "PARALYSIS - STRONG EVIDENCE (UNKOWN TIME FRAME)",
    },
    {
      "EMD": "18-C-6J",
      "Description": "PARALYSIS - CLEAR EVIDENCE (LESS THEN 2 HRS)",
    },
    {
      "EMD": "18-C-6K",
      "Description": "PARALYSIS - CLEAR EVIDENCE (GREATER THEN 2 HRS)",
    },
    {
      "EMD": "18-C-6L",
      "Description": "PARALYSIS - LESS THEN 2 HRS (SINCE SYMPTOMS STARTED)",
    },
    {
      "EMD": "18-C-6M",
      "Description": "PARALYSIS - CLEAR EVIDENCE (UNKOWN TIME FRAME)",
    },
    {
      "EMD": "18-C-6U",
      "Description": "PARALYSIS - UNKNOWN (WHEN SYMPTOMS STARTED)",
    },
    {
      "EMD": "18-C-6X",
      "Description": "PARALYSIS - NO TEST EVIDENCE (LESS THEN 2 HRS)",
    },
    {
      "EMD": "18-C-6Y",
      "Description": "PARALYSIS - NO TEST EVIDENCE (GREATER THEN 2 HRS)",
    },
    {
      "EMD": "18-C-6Z",
      "Description": "PARALYSIS - NO TEST EVIDENCE (UNKOWN TIME FRAME)",
    },
    {
      "EMD": "18-C-7",
      "Description": "CHANGE IN BEHAVIOR (<=3HRS)",
    },
    {
      "EMD": "18-C-7C",
      "Description": "CHANGE IN BEHAVIOR (<=3HRS) - PARTIAL EVIDENCE (LESS THEN 2 HRS)",
    },
    {
      "EMD": "18-C-7D",
      "Description": "CHANGE IN BEHAVIOR (<=3HRS) - PARTIAL EVIDENCE (GREATER THEN 2 HRS)",
    },
    {
      "EMD": "18-C-7E",
      "Description": "CHANGE IN BEHAVIOR (<=3HRS) - PARTIAL EVIDENCE (UNKOWN TIME FRAME)",
    },
    {
      "EMD": "18-C-7F",
      "Description": "CHANGE IN BEHAVIOR (<=3HRS) - STRONG EVIDENCE (LESS THEN 2 HRS)",
    },
    {
      "EMD": "18-C-7G",
      "Description": "CHANGE IN BEHAVIOR (<=3HRS) - GREATER THEN 2 HRS (SINCE SYMPTOMS STARTED)",
    },
    {
      "EMD": "18-C-7H",
      "Description": "CHANGE IN BEHAVIOR (<=3HRS) - STRONG EVIDENCE (GREATER THEN 2 HRS)",
    },
    {
      "EMD": "18-C-7I",
      "Description": "CHANGE IN BEHAVIOR (<=3HRS) - STRONG EVIDENCE (UNKOWN TIME FRAME)",
    },
    {
      "EMD": "18-C-7J",
      "Description": "CHANGE IN BEHAVIOR (<=3HRS) - CLEAR EVIDENCE (LESS THEN 2 HRS)",
    },
    {
      "EMD": "18-C-7K",
      "Description": "CHANGE IN BEHAVIOR (<=3HRS) - CLEAR EVIDENCE (GREATER THEN 2 HRS)",
    },
    {
      "EMD": "18-C-7L",
      "Description": "CHANGE IN BEHAVIOR (<=3HRS) - LESS THEN 2 HRS (SINCE SYMPTOMS STARTED)",
    },
    {
      "EMD": "18-C-7M",
      "Description": "CHANGE IN BEHAVIOR (<=3HRS) - CLEAR EVIDENCE (UNKOWN TIME FRAME)",
    },
    {
      "EMD": "18-C-7U",
      "Description": "CHANGE IN BEHAVIOR (<=3HRS) - UNKNOWN (WHEN SYMPTOMS STARTED)",
    },
    {
      "EMD": "18-C-7X",
      "Description": "CHANGE IN BEHAVIOR (<=3HRS) - NO TEST EVIDENCE (LESS THEN 2 HRS)",
    },    {
      "EMD": "19-A-1",
      "Description": "HEART RATE >= 50 BPM AND < 130 BPM  (NO PRIORITY SYMPTOMS)",
    },    {
      "EMD": "19-C-1",
      "Description": "FIRING OF IMPLANTED DEFIBRILLATOR",
    },
    {
      "EMD": "19-C-2",
      "Description": "ABNORMAL BREATHING",
    },
    {
      "EMD": "19-C-3",
      "Description": "CHEST PAIN/DISCOMFORT >= 35",
    },
    {
      "EMD": "19-C-4",
      "Description": "CARDIAC HISTORY",
    },
    {
      "EMD": "19-C-5",
      "Description": "COCAINE",
    },
    {
      "EMD": "19-C-6",
      "Description": "HEART RATE < 50 BPM OR > 130 BPM  (NO PRIORITY SYMPTOMS)",
    },
    {
      "EMD": "19-C-7",
      "Description": "UNKNOWN STATUS / OTHER CODES NOT APPLICABLE",
    },    {
      "EMD": "19-D-1",
      "Description": "NOT ALERT",
    },
    {
      "EMD": "19-D-2",
      "Description": "DIFFICULTY SPEAKING BETWEEN BREATHS",
    },
    {
      "EMD": "19-D-3",
      "Description": "CHANGING COLOR",
    },
    {
      "EMD": "19-D-4",
      "Description": "CLAMMY OR COLD SWEATS",
    },
    {
      "EMD": "19-D-5",
      "Description": "JUST RESUSCITATED AND / OR DEFIBRILLATED (EXTERNAL)",
    },
    {
      "EMD": "20-A-1H",
      "Description": "ALERT - HEAT EXPOSURE",
    },
    {
      "EMD": "20-B-0C",
      "Description": "COLD EXPOSURE",
    },
    {
      "EMD": "20-B-0H",
      "Description": "HEAT EXPOSURE",
    },
    {
      "EMD": "20-B-1C",
      "Description": "CHANGE IN SKIN COLOR - COLD EXPOSURE",
    },
    {
      "EMD": "20-B-1H",
      "Description": "CHANGE IN SKIN COLOR - HEAT EXPOSURE",
    },
    {
      "EMD": "20-B-2C",
      "Description": "UNKNOWN STATUS / OTHER CODES NOT APPLICABLE - COLD EXPOSURE",
    },
    {
      "EMD": "20-B-2H",
      "Description": "UNKNOWN STATUS / OTHER CODES NOT APPLICABLE - HEAT EXPOSURE",
    },
    {
      "EMD": "20-C-0C",
      "Description": "COLD EXPOSURE",
    },
    {
      "EMD": "20-C-0H",
      "Description": "HEAT EXPOSURE",
    },
    {
      "EMD": "20-C-1C",
      "Description": "HEART ATTACK OR ANGINA HISTORY - COLD EXPOSURE",
    },
    {
      "EMD": "20-C-1H",
      "Description": "HEART ATTACK OR ANGINA HISTORY - HEAT EXPOSURE",
    },
    {
      "EMD": "20-D-0C",
      "Description": "COLD EXPOSURE",
    },
    {
      "EMD": "20-D-0H",
      "Description": "HEAT EXPOSURE",
    },
    {
      "EMD": "20-D-1C",
      "Description": "NOT ALERT - COLD EXPOSURE",
    },
    {
      "EMD": "20-D-1H",
      "Description": "NOT ALERT - HEAT EXPOSURE",
    },
    {
      "EMD": "20-D-2C",
      "Description": "MULTIPLE VICTIMS (WITH PRIORITY SYMPTOMS) - COLD EXPOSURE",
    },
    {
      "EMD": "20-D-2H",
      "Description": "MULTIPLE VICTIMS (WITH PRIORITY SYMPTOMS) - HEAT EXPOSURE",
    },    {
      "EMD": "21-A-1",
      "Description": "NOT DANGEROUS HEMORRHAGE",
    },    {
      "EMD": "21-A-1T",
      "Description": "NOT DANGEROUS HEMORRHAGE - TRAUMA",
    },
    {
      "EMD": "21-A-2",
      "Description": "MINOR HEMORRHAGE",
    },
    {
      "EMD": "21-A-2M",
      "Description": "MINOR HEMORRHAGE - MEDICAL",
    },
    {
      "EMD": "21-A-2T",
      "Description": "MINOR HEMORRHAGE  - TRAUMA",
    },    {
      "EMD": "21-B-0M",
      "Description": "MEDICAL",
    },
    {
      "EMD": "21-B-0T",
      "Description": "TRAUMA",
    },
    {
      "EMD": "21-B-1",
      "Description": "POSSIBLY DANGEROUS HEMORRHAGE",
    },
    {
      "EMD": "21-B-1M",
      "Description": "POSSIBLY DANGEROUS HEMORRHAGE - MEDICAL",
    },
    {
      "EMD": "21-B-1T",
      "Description": "POSSIBLY DANGEROUS HEMORRHAGE  - TRAUMA",
    },
    {
      "EMD": "21-B-2",
      "Description": "SERIOUS HEMORRHAGE",
    },
    {
      "EMD": "21-B-2M",
      "Description": "SERIOUS HEMORRHAGE - MEDICAL",
    },
    {
      "EMD": "21-B-2T",
      "Description": "SERIOUS HEMORRHAGE  - TRAUMA",
    },
    {
      "EMD": "21-B-3",
      "Description": "BLEEDING DISORDER",
    },
    {
      "EMD": "21-B-3M",
      "Description": "BLEEDING DISORDER - MEDICAL",
    },
    {
      "EMD": "21-B-3T",
      "Description": "BLEEDING DISORDER  - TRAUMA",
    },
    {
      "EMD": "21-B-4",
      "Description": "BLOOD THINNERS",
    },
    {
      "EMD": "21-B-4M",
      "Description": "BLOOD THINNERS - MEDICAL",
    },
    {
      "EMD": "21-B-4T",
      "Description": "BLOOD THINNERS  - TRAUMA",
    },    {
      "EMD": "21-C-0M",
      "Description": "MEDICAL",
    },
    {
      "EMD": "21-C-0T",
      "Description": "TRAUMA",
    },
    {
      "EMD": "21-C-1",
      "Description": "HEMORRHAGE THROUGH TUBES",
    },
    {
      "EMD": "21-C-1M",
      "Description": "HEMORRHAGE THROUGH TUBES - MEDICAL",
    },
    {
      "EMD": "21-C-1T",
      "Description": "HEMORRHAGE THROUGH TUBES  - TRAUMA",
    },
    {
      "EMD": "21-C-2",
      "Description": "HEMORRHAGE OF DIALYSIS FISTULA",
    },
    {
      "EMD": "21-C-2M",
      "Description": "HEMORRHAGE OF DIALYSIS FISTULA - MEDICAL",
    },
    {
      "EMD": "21-C-2T",
      "Description": "HEMORRHAGE OF DIALYSIS FISTULA  - TRAUMA",
    },
    {
      "EMD": "21-C-3",
      "Description": "HEMORRHAGE FROM VARICOSE VEINS",
    },
    {
      "EMD": "21-C-3M",
      "Description": "HEMORRHAGE FROM VARICOSE VEINS - MEDICAL",
    },
    {
      "EMD": "21-C-3T",
      "Description": "HEMORRHAGE FROM VARICOSE VEINS - TRAUMA",
    },
    {
      "EMD": "21-D-0T",
      "Description": "TRAUMA",
    },
    {
      "EMD": "21-D-1",
      "Description": "ARREST",
    },    {
      "EMD": "21-D-1T",
      "Description": "ARREST - TRAUMA",
    },
    {
      "EMD": "21-D-2",
      "Description": "UNCONSCIOUS",
    },    {
      "EMD": "21-D-2T",
      "Description": "UNCONSCIOUS - TRAUMA",
    },
    {
      "EMD": "21-D-3",
      "Description": "NOT ALERT",
    },    {
      "EMD": "21-D-3T",
      "Description": "NOT ALERT - TRAUMA",
    },
    {
      "EMD": "21-D-4",
      "Description": "DANGEROUS HEMORRHAGE",
    },    {
      "EMD": "21-D-4T",
      "Description": "DANGEROUS HEMORRHAGE - TRAUMA",
    },
    {
      "EMD": "21-D-5",
      "Description": "ABNORMAL BREATHING",
    },    {
      "EMD": "21-D-5T",
      "Description": "ABNORMAL BREATHING - TRAUMA",
    },    {
      "EMD": "22-A-1",
      "Description": "NO LONGER TRAPPED (NO INJURIES)",
    },    {
      "EMD": "22-A-1B",
      "Description": "NO LONGER TRAPPED (NO INJURIES) - BELOW GROUND (> 6 FT)",
    },
    {
      "EMD": "22-A-1M",
      "Description": "NO LONGER TRAPPED (NO INJURIES) - MULTIPLE VICTIMS",
    },
    {
      "EMD": "22-A-1X",
      "Description": "NO LONGER TRAPPED (NO INJURIES) - ABOVE GROUND (> 6 FT) & MULTIPLE VICTIMS",
    },    {
      "EMD": "22-B-0A",
      "Description": "ABOVE GROUND (> 6 FT)",
    },
    {
      "EMD": "22-B-0B",
      "Description": "BELOW GROUND (> 6 FT)",
    },
    {
      "EMD": "22-B-0M",
      "Description": "MULTIPLE VICTIMS",
    },
    {
      "EMD": "22-B-0X",
      "Description": "ABOVE GROUND (> 6 FT) & MULTIPLE VICTIMS",
    },
    {
      "EMD": "22-B-0Y",
      "Description": "BELOW GROUND (> 6 FT) & MULTIPLE VICTIMS",
    },
    {
      "EMD": "22-B-1",
      "Description": "NO LONGER TRAPPED (UNKNOWN INJURIES)",
    },
    {
      "EMD": "22-B-1A",
      "Description": "NO LONGER TRAPPED (UNKNOWN INJURIES) - ABOVE GROUND (> 6 FT)",
    },
    {
      "EMD": "22-B-1B",
      "Description": "NO LONGER TRAPPED (UNKNOWN INJURIES) - BELOW GROUND (> 6 FT)",
    },
    {
      "EMD": "22-B-1M",
      "Description": "NO LONGER TRAPPED (UNKNOWN INJURIES) - MULTIPLE VICTIMS",
    },
    {
      "EMD": "22-B-1X",
      "Description": "NO LONGER TRAPPED (UNKNOWN INJURIES) - ABOVE GROUND (> 6 FT) & MULTIPLE VICTIMS",
    },
    {
      "EMD": "22-B-1Y",
      "Description": "NO LONGER TRAPPED (UNKNOWN INJURIES) - BELOW GROUND (> 6 FT) & MULTIPLE VICTIMS",
    },
    {
      "EMD": "22-B-2",
      "Description": "PERIPHERAL ENTRAPMENT ONLY",
    },
    {
      "EMD": "22-B-2A",
      "Description": "PERIPHERAL ENTRAPMENT ONLY - ABOVE GROUND (> 6 FT)",
    },
    {
      "EMD": "22-B-2B",
      "Description": "PERIPHERAL ENTRAPMENT ONLY - BELOW GROUND (> 6 FT)",
    },
    {
      "EMD": "22-B-2M",
      "Description": "PERIPHERAL ENTRAPMENT ONLY - MULTIPLE VICTIMS",
    },
    {
      "EMD": "22-B-2X",
      "Description": "PERIPHERAL ENTRAPMENT ONLY - ABOVE GROUND (> 6 FT) & MULTIPLE VICTIMS",
    },
    {
      "EMD": "22-B-2Y",
      "Description": "PERIPHERAL ENTRAPMENT ONLY - BELOW GROUND (> 6 FT) & MULTIPLE VICTIMS",
    },
    {
      "EMD": "22-B-3",
      "Description": "UNKNOWN STATUS / OTHER CODES NOT APPLICABLE",
    },
    {
      "EMD": "22-B-3A",
      "Description": "UNKNOWN STATUS / OTHER CODES NOT APPLICABLE - ABOVE GROUND (> 6 FT)",
    },
    {
      "EMD": "22-B-3B",
      "Description": "UNKNOWN STATUS / OTHER CODES NOT APPLICABLE - BELOW GROUND (> 6 FT)",
    },
    {
      "EMD": "22-B-3M",
      "Description": "UNKNOWN STATUS / OTHER CODES NOT APPLICABLE - MULTIPLE VICTIMS",
    },
    {
      "EMD": "22-B-3X",
      "Description": "UNK STATUS / OTHER CODES NOT APPLICABLE - ABOVE GROUND (> 6 FT) & MULTIPLE VICS",
    },    {
      "EMD": "22-D-0A",
      "Description": "ABOVE GROUND (> 6 FT)",
    },
    {
      "EMD": "22-D-0B",
      "Description": "BELOW GROUND (> 6 FT)",
    },    {
      "EMD": "22-D-0X",
      "Description": "ABOVE GROUND (> 6 FT) & MULTIPLE VICTIMS",
    },
    {
      "EMD": "22-D-0Y",
      "Description": "BELOW GROUND (> 6 FT) & MULTIPLE VICTIMS",
    },
    {
      "EMD": "22-D-1",
      "Description": "MECHANICAL / MACHINERY / OBJECT ENTRAPMENT",
    },
    {
      "EMD": "22-D-1A",
      "Description": "MECHANICAL / MACHINERY / OBJECT ENTRAPMENT - ABOVE GROUND (> 6 FT)",
    },
    {
      "EMD": "22-D-1B",
      "Description": "MECHANICAL / MACHINERY / OBJECT ENTRAPMENT - BELOW GROUND (> 6 FT)",
    },    {
      "EMD": "22-D-1X",
      "Description": "MECHANICAL /MACHINERY /OBJECT ENTRAPMENT - ABOVE GROUND (> 6 FT)& MULTIPLE VICS",
    },
    {
      "EMD": "22-D-1Y",
      "Description": "MECHANICAL /MACHINERY /OBJECT ENTRAPMENT - BELOW GROUND (> 6 FT)& MULTIPLE VICS",
    },
    {
      "EMD": "22-D-2",
      "Description": "TRENCH COLLAPSE",
    },
    {
      "EMD": "22-D-2A",
      "Description": "TRENCH COLLAPSE - ABOVE GROUND (> 6 FT)",
    },
    {
      "EMD": "22-D-2B",
      "Description": "TRENCH COLLAPSE - BELOW GROUND (> 6 FT)",
    },    {
      "EMD": "22-D-2X",
      "Description": "TRENCH COLLAPSE - ABOVE GROUND (> 6 FT) & MULTIPLE VICTIMS",
    },
    {
      "EMD": "22-D-2Y",
      "Description": "TRENCH COLLAPSE - BELOW GROUND (> 6 FT) & MULTIPLE VICTIMS",
    },
    {
      "EMD": "22-D-3",
      "Description": "STRUCTURE COLLAPSE",
    },
    {
      "EMD": "22-D-3A",
      "Description": "STRUCTURE COLLAPSE - ABOVE GROUND (> 6 FT)",
    },
    {
      "EMD": "22-D-3B",
      "Description": "STRUCTURE COLLAPSE - BELOW GROUND (> 6 FT)",
    },    {
      "EMD": "22-D-3X",
      "Description": "STRUCTURE COLLAPSE - ABOVE GROUND (> 6 FT) & MULTIPLE VICTIMS",
    },
    {
      "EMD": "22-D-3Y",
      "Description": "STRUCTURE COLLAPSE - BELOW GROUND (> 6 FT) & MULTIPLE VICTIMS",
    },
    {
      "EMD": "22-D-4",
      "Description": "CONFINED SPACE ENTRAPMENT",
    },
    {
      "EMD": "22-D-4A",
      "Description": "CONFINED SPACE ENTRAPMENT - ABOVE GROUND (> 6 FT)",
    },
    {
      "EMD": "22-D-4B",
      "Description": "CONFINED SPACE ENTRAPMENT - BELOW GROUND (> 6 FT)",
    },    {
      "EMD": "22-D-4X",
      "Description": "CONFINED SPACE ENTRAPMENT - ABOVE GROUND (> 6 FT) & MULTIPLE VICTIMS",
    },
    {
      "EMD": "22-D-4Y",
      "Description": "CONFINED SPACE ENTRAPMENT - BELOW GROUND (> 6 FT) & MULTIPLE VICTIMS",
    },
    {
      "EMD": "22-D-5",
      "Description": "INACCESSIBLE TERRAIN SITUATION",
    },
    {
      "EMD": "22-D-5A",
      "Description": "INACCESSIBLE TERRAIN SITUATION - ABOVE GROUND (> 6 FT)",
    },
    {
      "EMD": "22-D-5B",
      "Description": "INACCESSIBLE TERRAIN SITUATION - BELOW GROUND (> 6 FT)",
    },    {
      "EMD": "22-D-5X",
      "Description": "INACCESSIBLE TERRAIN SITUATION - ABOVE GROUND (> 6 FT) & MULTIPLE VICTIMS",
    },
    {
      "EMD": "22-D-5Y",
      "Description": "INACCESSIBLE TERRAIN SITUATION - BELOW GROUND (> 6 FT) & MULTIPLE VICTIMS",
    },
    {
      "EMD": "22-D-6",
      "Description": "MUDSLIDE / AVALANCHE",
    },
    {
      "EMD": "22-D-6A",
      "Description": "MUDSLIDE / AVALANCHE - ABOVE GROUND (> 6 FT)",
    },
    {
      "EMD": "22-D-6B",
      "Description": "MUDSLIDE / AVALANCHE - BELOW GROUND (> 6 FT)",
    },    {
      "EMD": "22-D-6X",
      "Description": "MUDSLIDE / AVALANCHE - ABOVE GROUND (> 6 FT) & MULTIPLE VICTIMS",
    },
    {
      "EMD": "22-D-6Y",
      "Description": "MUDSLIDE / AVALANCHE - BELOW GROUND (> 6 FT) & MULTIPLE VICTIMS",
    },    {
      "EMD": "23-O-1",
      "Description": "POISONING (NO PRIORITY SYMPTOMS)",
    },    {
      "EMD": "23-O-1I",
      "Description": "POISONING (NO PRIORITY SYMPTOMS) - INTENTIONAL",
    },
    {
      "EMD": "23-O-1V",
      "Description": "POISONING (NO PRIORITY SYMPTOMS) - VIOLENT OR COMBATIVE",
    },
    {
      "EMD": "23-B-0A",
      "Description": "ACCIDENTAL",
    },
    {
      "EMD": "23-B-0I",
      "Description": "INTENTIONAL",
    },
    {
      "EMD": "23-B-0V",
      "Description": "VIOLENT",
    },
    {
      "EMD": "23-B-0W",
      "Description": "WEAPONS",
    },
    {
      "EMD": "23-B-1",
      "Description": "OVERDOSE (NO PRIORITY SYMPTOMS)",
    },
    {
      "EMD": "23-B-1A",
      "Description": "OVERDOSE (NO PRIORITY SYMPTOMS) - ACCIDENTAL",
    },
    {
      "EMD": "23-B-1I",
      "Description": "OVERDOSE (NO PRIORITY SYMPTOMS) - INTENTIONAL",
    },
    {
      "EMD": "23-B-1V",
      "Description": "OVERDOSE (NO PRIORITY SYMPTOMS) - VIOLENT OR COMBATIVE",
    },
    {
      "EMD": "23-B-1W",
      "Description": "OVERDOSE (NO PRIORITY SYMPTOMS) - WEAPONS",
    },    {
      "EMD": "23-C-0A",
      "Description": "ACCIDENTAL",
    },
    {
      "EMD": "23-C-0I",
      "Description": "INTENTIONAL",
    },
    {
      "EMD": "23-C-0V",
      "Description": "VIOLENT",
    },
    {
      "EMD": "23-C-0W",
      "Description": "WEAPONS",
    },
    {
      "EMD": "23-C-1",
      "Description": "NOT ALERT",
    },
    {
      "EMD": "23-C-1A",
      "Description": "NOT ALERT - ACCIDENTAL",
    },
    {
      "EMD": "23-C-1I",
      "Description": "NOT ALERT - INTENTIONAL",
    },
    {
      "EMD": "23-C-1V",
      "Description": "NOT ALERT - VIOLENT OR COMBATIVE",
    },
    {
      "EMD": "23-C-1W",
      "Description": "NOT ALERT - WEAPONS",
    },
    {
      "EMD": "23-C-2",
      "Description": "ABNORMAL BREATHING",
    },
    {
      "EMD": "23-C-2A",
      "Description": "ABNORMAL BREATHING - ACCIDENTAL",
    },
    {
      "EMD": "23-C-2I",
      "Description": "ABNORMAL BREATHING - INTENTIONAL",
    },
    {
      "EMD": "23-C-2V",
      "Description": "ABNORMAL BREATHING - VIOLENT OR COMBATIVE",
    },
    {
      "EMD": "23-C-2W",
      "Description": "ABNORMAL BREATHING - WEAPONS",
    },
    {
      "EMD": "23-C-3",
      "Description": "ANTIDEPRESSANTS (TRICYLIC)",
    },
    {
      "EMD": "23-C-3A",
      "Description": "ANTIDEPRESSANTS (TRICYLIC) - ACCIDENTAL",
    },
    {
      "EMD": "23-C-3I",
      "Description": "ANTIDEPRESSANTS (TRICYLIC) - INTENTIONAL",
    },
    {
      "EMD": "23-C-3V",
      "Description": "ANTIDEPRESSANTS (TRICYLIC) - VIOLENT OR COMBATIVE",
    },
    {
      "EMD": "23-C-3W",
      "Description": "ANTIDEPRESSANTS (TRICYLIC) - WEAPONS",
    },
    {
      "EMD": "23-C-4",
      "Description": "COCAINE, METHAMPEHTAMINE (OR DERIVATIVES)",
    },
    {
      "EMD": "23-C-4A",
      "Description": "COCAINE, METHAMPEHTAMINE (OR DERIVATIVES) - ACCIDENTAL",
    },
    {
      "EMD": "23-C-4I",
      "Description": "COCAINE, METHAMPEHTAMINE (OR DERIVATIVES) - INTENTIONAL",
    },
    {
      "EMD": "23-C-4V",
      "Description": "COCAINE, METHAMPEHTAMINE (OR DERIVATIVES) - VIOLENT OR COMBATIVE",
    },
    {
      "EMD": "23-C-4W",
      "Description": "COCAINE, METHAMPEHTAMINE (OR DERIVATIVES) - WEAPONS",
    },
    {
      "EMD": "23-C-5",
      "Description": "NARCOTICS (HEROIN, MORPHINE, METHADONE, OXYCONTIN, ETC)",
    },
    {
      "EMD": "23-C-5A",
      "Description": "NARCOTICS (HEROIN, MORPHINE, METHADONE, OXYCONTIN, ETC) - ACCIDENTAL",
    },
    {
      "EMD": "23-C-5I",
      "Description": "NARCOTICS (HEROIN, MORPHINE, METHADONE, OXYCONTIN, ETC) - INTENTIONAL",
    },
    {
      "EMD": "23-C-5V",
      "Description": "NARCOTICS (HEROIN, MORPHINE, METHADONE, OXYCONTIN, ETC) - VIOLENT OR COMBATIVE",
    },
    {
      "EMD": "23-C-5W",
      "Description": "NARCOTICS (HEROIN, MORPHINE, METHADONE, OXYCONTIN, ETC) - WEAPONS",
    },
    {
      "EMD": "23-C-6",
      "Description": "ACID OR ALKALI (LYE)",
    },
    {
      "EMD": "23-C-6A",
      "Description": "ACID OR ALKALI (LYE) - ACCIDENTAL",
    },
    {
      "EMD": "23-C-6I",
      "Description": "ACID OR ALKALI (LYE) - INTENTIONAL",
    },
    {
      "EMD": "23-C-6V",
      "Description": "ACID OR ALKALI (LYE) - VIOLENT/COMBATIVE",
    },
    {
      "EMD": "23-C-6W",
      "Description": "ACID OR ALKALI (LYE) - WEAPONS",
    },
    {
      "EMD": "23-C-7",
      "Description": "UKNOWN STATUS / OTHER CODES NOT APPLICABLE",
    },
    {
      "EMD": "23-C-7A",
      "Description": "UKNOWN STATUS / OTHER CODES NOT APPLICABLE - ACCIDENTAL",
    },
    {
      "EMD": "23-C-7I",
      "Description": "UKNOWN STATUS / OTHER CODES NOT APPLICABLE - INTENTIONAL",
    },
    {
      "EMD": "23-C-7V",
      "Description": "UKNOWN STATUS / OTHER CODES NOT APPLICABLE - VIOLENT OR COMBATIVE",
    },
    {
      "EMD": "23-C-7W",
      "Description": "UKNOWN STATUS / OTHER CODES NOT APPLICABLE - WEAPONS",
    },
    {
      "EMD": "23-C-8",
      "Description": "POISON CONTROL REQUEST FOR RESPONSE",
    },
    {
      "EMD": "23-C-8A",
      "Description": "POISON CONTROL REQUEST FOR RESPONSE - ACCIDENTAL",
    },
    {
      "EMD": "23-C-8I",
      "Description": "POISON CONTROL REQUEST FOR RESPONSE - INTENTIONAL",
    },
    {
      "EMD": "23-C-8V",
      "Description": "POISON CONTROL REQUEST FOR RESPONSE - VIOLENT OR COMBATIVE",
    },
    {
      "EMD": "23-C-8W",
      "Description": "POISON CONTROL REQUEST FOR RESPONSE - WEAPONS",
    },    {
      "EMD": "23-D-0A",
      "Description": "ACCIDENTAL",
    },
    {
      "EMD": "23-D-0I",
      "Description": "INTENTIONAL",
    },
    {
      "EMD": "23-D-0V",
      "Description": "VIOLENT",
    },    {
      "EMD": "23-D-1",
      "Description": "UNCONSCIOUS",
    },
    {
      "EMD": "23-D-1A",
      "Description": "UNCONSCIOUS - ACCIDENTAL",
    },
    {
      "EMD": "23-D-1I",
      "Description": "UNCONSCIOUS - INTENTIONAL",
    },
    {
      "EMD": "23-D-1V",
      "Description": "UNCONSCIOUS - VIOLENT OR COMBATIVE",
    },    {
      "EMD": "23-D-2",
      "Description": "CHANGING COLOR",
    },
    {
      "EMD": "23-D-2A",
      "Description": "CHANGING COLOR - ACCIDENTAL",
    },
    {
      "EMD": "23-D-2I",
      "Description": "CHANGING COLOR - INTENTIONAL",
    },
    {
      "EMD": "23-D-2V",
      "Description": "CHANGING COLOR - VIOLENT OR COMBATIVE",
    },
    {
      "EMD": "24-A-1",
      "Description": "1ST TRIMESTER BLEEDING OR MISCARRIAGE",
    },
    {
      "EMD": "24-A-1M",
      "Description": "1ST TRIMESTER BLEEDING OR MISCARRIAGE - MULTIPLE BIRTH",
    },
    {
      "EMD": "24-A-2",
      "Description": "WATERS BROKEN (NO CONTRACTIONS OR PRESENTING PARTS)",
    },
    {
      "EMD": "24-A-2M",
      "Description": "WATERS BROKEN (NO CONTRACTIONS OR PRESENTING PARTS) - MULTIPLE BIRTH",
    },    {
      "EMD": "24-B-0M",
      "Description": "MULTIPLE BIRTH",
    },
    {
      "EMD": "24-B-1",
      "Description": "LABOR (DELIVERY NOT IMMINENT >= 6MO/24WKS)",
    },
    {
      "EMD": "24-B-1M",
      "Description": "LABOR (DELIVERY NOT IMMINENT >= 6MO/24WKS) - MULTIPLE BIRTH",
    },
    {
      "EMD": "24-B-2",
      "Description": "UNKNOWN STATUS / OTHER CODES NOT APPLICABLE",
    },    {
      "EMD": "24-C-0M",
      "Description": "MULTIPLE BIRTH",
    },
    {
      "EMD": "24-C-1",
      "Description": "2ND TRIMESTER BLEEDING OR MISCARRIAGE",
    },
    {
      "EMD": "24-C-1M",
      "Description": "2ND TRIMESTER BLEEDING OR MISCARRIAGE - MULTIPLE BIRTH",
    },
    {
      "EMD": "24-C-2",
      "Description": "1ST TRIMESTER SERIOUS BLEEDING",
    },
    {
      "EMD": "24-C-2M",
      "Description": "1ST TRIMESTER SERIOUS BLEEDING - MULTIPLE BIRTH",
    },
    {
      "EMD": "24-C-3",
      "Description": "ABDOMINAL PAIN/CRAMPING (< 6MO/24WKS AND NO FETUS OR TISSUE)",
    },
    {
      "EMD": "24-C-3M",
      "Description": "ABDOMINAL PAIN/CRAMPING (< 6MO/24WKS AND NO FETUS OR TISSUE) - MULTIPLE BIRTH",
    },
    {
      "EMD": "24-C-4",
      "Description": "BABY BORN (NO COMPLICATIONS)",
    },
    {
      "EMD": "24-C-4M",
      "Description": "BABY BORN (NO COMPLICATIONS) - MULTIPLE BIRTH",
    },
    {
      "EMD": "24-D-1",
      "Description": "BREECH OR CORD PRESENTATION",
    },    {
      "EMD": "24-D-2",
      "Description": "HEAD VISIBLE / OUT",
    },    {
      "EMD": "24-D-3",
      "Description": "IMMINENT DELIVERY (>= 6MO/24WKS)",
    },    {
      "EMD": "24-D-4",
      "Description": "3RD TRIMESTER BLEEDING",
    },    {
      "EMD": "24-D-5",
      "Description": "HIGH RISK COMPLICATIONS",
    },    {
      "EMD": "24-D-6",
      "Description": "BABY BORN (COMPLICATIONS WITH BABY)",
    },    {
      "EMD": "24-D-7",
      "Description": "BABY BORN (COMPLICATIONS WITH MOTHER)",
    },
    {
      "EMD": "25-A-1",
      "Description": "NON SUICIDAL AND ALERT",
    },    {
      "EMD": "25-A-1V",
      "Description": "NON SUICIDAL AND ALERT - VIOLENT",
    },    {
      "EMD": "25-A-2",
      "Description": "SUICIDAL (NOT THREATENING) AND ALERT",
    },
    {
      "EMD": "25-A-2B",
      "Description": "SUICIDAL (NOT THREATENING) AND ALERT - VIOLENT & WEAPONS",
    },
    {
      "EMD": "25-A-2V",
      "Description": "SUICIDAL (NOT THREATENING) AND ALERT - VIOLENT",
    },
    {
      "EMD": "25-B-0B",
      "Description": "VIOLENT & WEAPONS",
    },
    {
      "EMD": "25-B-0V",
      "Description": "VIOLENT",
    },
    {
      "EMD": "25-B-0W",
      "Description": "WEAPONS",
    },
    {
      "EMD": "25-B-1",
      "Description": "SERIOUS HEMORRHAGE",
    },
    {
      "EMD": "25-B-1B",
      "Description": "SERIOUS HEMORRHAGE - VIOLENT & WEAPONS",
    },
    {
      "EMD": "25-B-1V",
      "Description": "SERIOUS HEMORRHAGE - VIOLENT",
    },
    {
      "EMD": "25-B-1W",
      "Description": "SERIOUS HEMORRHAGE - WEAPONS",
    },
    {
      "EMD": "25-B-2",
      "Description": "NON SERIOUS OR MINOR HEMORRHAGE",
    },
    {
      "EMD": "25-B-2B",
      "Description": "NON SERIOUS OR MINOR HEMORRHAGE - VIOLENT & WEAPONS",
    },
    {
      "EMD": "25-B-2V",
      "Description": "NON SERIOUS OR MINOR HEMORRHAGE - VIOLENT",
    },
    {
      "EMD": "25-B-2W",
      "Description": "NON SERIOUS OR MINOR HEMORRHAGE - WEAPONS",
    },
    {
      "EMD": "25-B-3",
      "Description": "THREATENING SUICIDE",
    },
    {
      "EMD": "25-B-3B",
      "Description": "THREATENING SUICIDE - VIOLENT & WEAPONS",
    },
    {
      "EMD": "25-B-3V",
      "Description": "THREATENING SUICIDE - VIOLENT",
    },
    {
      "EMD": "25-B-3W",
      "Description": "THREATENING SUICIDE - WEAPONS",
    },
    {
      "EMD": "25-B-4",
      "Description": "JUMPER (THREATENING)",
    },
    {
      "EMD": "25-B-4B",
      "Description": "JUMPER (THREATENING) - VIOLENT & WEAPONS",
    },
    {
      "EMD": "25-B-4V",
      "Description": "JUMPER (THREATENING) - VIOLENT",
    },
    {
      "EMD": "25-B-4W",
      "Description": "JUMPER (THREATENING) - WEAPONS",
    },
    {
      "EMD": "25-B-5",
      "Description": "NEAR HANGING, STRANGULATION, SUFFOCATION (ALERT W/ NO RESP DIFF)",
    },
    {
      "EMD": "25-B-5B",
      "Description": "NEAR HANGING, STRANGULATION, SUFF (ALERT W/ NO RESP DIFF) - VIOLENT & WEAPONS",
    },
    {
      "EMD": "25-B-5V",
      "Description": "NEAR HANGING, STRANGULATION, SUFFOCATION (ALERT W/ NO RESP DIFF) - VIOLENT",
    },
    {
      "EMD": "25-B-5W",
      "Description": "NEAR HANGING, STRANGULATION, SUFFOCATION (ALERT W/ NO RESP DIFF) - WEAPONS",
    },
    {
      "EMD": "25-B-6",
      "Description": "UNKNOWN STATUS / OTHER CODES NOT APPLICABLE",
    },
    {
      "EMD": "25-B-6B",
      "Description": "UNKNOWN STATUS / OTHER CODES NOT APPLICABLE - VIOLENT & WEAPONS",
    },
    {
      "EMD": "25-B-6V",
      "Description": "UNKNOWN STATUS / OTHER CODES NOT APPLICABLE - VIOLENT",
    },
    {
      "EMD": "25-B-6W",
      "Description": "UNKNOWN STATUS / OTHER CODES NOT APPLICABLE - WEAPONS",
    },    {
      "EMD": "25-D-0B",
      "Description": "VIOLENT & WEAPONS",
    },
    {
      "EMD": "25-D-0V",
      "Description": "VIOLENT",
    },    {
      "EMD": "25-D-1",
      "Description": "NOT ALERT",
    },
    {
      "EMD": "25-D-1B",
      "Description": "NOT ALERT - VIOLENT & WEAPONS",
    },
    {
      "EMD": "25-D-1V",
      "Description": "NOT ALERT - VIOLENT",
    },    {
      "EMD": "25-D-2",
      "Description": "DANGEROUS HEMORRHAGE",
    },
    {
      "EMD": "25-D-2B",
      "Description": "DANGEROUS HEMORRHAGE -VIOLENT & WEAPONS",
    },
    {
      "EMD": "25-D-2V",
      "Description": "DANGEROUS HEMORRHAGE - VIOLENT",
    },    {
      "EMD": "25-D-3",
      "Description": "NEAR HANGING, STRANGULATION, SUFFOCATION (ALERT W/RESP DIFF)",
    },
    {
      "EMD": "25-D-3B",
      "Description": "NEAR HANGING, STRANGULATION, SUFFOCATION (ALERT W/RESP DIFF) - VIOLENT & WEAPONS",
    },
    {
      "EMD": "25-D-3V",
      "Description": "NEAR HANGING, STRANGULATION, SUFFOCATION (ALERT W/RESP DIFF) - VIOLENT",
    },    {
      "EMD": "26-O-9",
      "Description": "CUT OFF RING REQUEST",
    },
    {
      "EMD": "26-B-1",
      "Description": "UNKNOWN STATUS / OTHER CODES NOT APPLICABLE",
    },
    {
      "EMD": "26-D-1",
      "Description": "NOT ALERT",
    },    {
      "EMD": "27-A-1G",
      "Description": "NON RECENT (>= 6 HRS) PERIPHERAL WOUNDS - GUNSHOT",
    },
    {
      "EMD": "27-A-1I",
      "Description": "NON RECENT (>= 6 HRS) PERIPHERAL WOUNDS - IMPALED CURRENTLY",
    },
    {
      "EMD": "27-A-1P",
      "Description": "NON RECENT (>= 6 HRS) PERIPHERAL WOUNDS - PENETRATING WOUND (NOT IMPALED NOW)",
    },
    {
      "EMD": "27-A-1S",
      "Description": "NON RECENT (>= 6 HRS) PERIPHERAL WOUNDS - STABBING",
    },
    {
      "EMD": "27-A-1X",
      "Description": "NON RECENT (>= 6 HRS) PERIPHERAL WOUNDS - SELF-INFLICTED GSW (INTENTIONAL)",
    },
    {
      "EMD": "27-A-1Y",
      "Description": "NON RECENT (>= 6 HRS) PERIPHERAL WOUNDS - SELF-INFLICTED STAB WOUND (INTENTION)",
    },
    {
      "EMD": "27-B-0G",
      "Description": "GUNSHOT",
    },
    {
      "EMD": "27-B-0I",
      "Description": "IMPALED CURRENTLY",
    },
    {
      "EMD": "27-B-0P",
      "Description": "PENETRATING WOUND (NOT IMPALED NOW)",
    },
    {
      "EMD": "27-B-0S",
      "Description": "STABBING",
    },
    {
      "EMD": "27-B-0X",
      "Description": "SELF-INFLICTED GSW (INTENTIONAL)",
    },
    {
      "EMD": "27-B-0Y",
      "Description": "SELF-INFLICTED STAB WOUND (INTENTIONAL)",
    },
    {
      "EMD": "27-B-1G",
      "Description": "NON RECENT (>= 6 HRS) SINGLE CENTRAL WOUND - GUNSHOT",
    },
    {
      "EMD": "27-B-1I",
      "Description": "NON RECENT (>= 6 HRS) SINGLE CENTRAL WOUND - IMPALED CURRENTLY",
    },
    {
      "EMD": "27-B-1P",
      "Description": "NON RECENT (>= 6 HRS) SINGLE CENTRAL WOUND - PENETRATING WOUND (NOT IMPALED NOW)",
    },
    {
      "EMD": "27-B-1S",
      "Description": "NON RECENT (>= 6 HRS) SINGLE CENTRAL WOUND - STABBING",
    },
    {
      "EMD": "27-B-1X",
      "Description": "NON RECENT (>= 6 HRS) SINGLE CENTRAL WOUND - SELF-INFLICTED GSW (INTENTIONAL)",
    },
    {
      "EMD": "27-B-1Y",
      "Description": "NON RECENT(>= 6HRS) SINGLE CENTRAL WOUND - SELF-INFLICTED STAB WOUND (INTENTION)",
    },
    {
      "EMD": "27-B-2G",
      "Description": "KNOWN SINGLE PERIPHERAL WOUND - GUNSHOT",
    },
    {
      "EMD": "27-B-2I",
      "Description": "KNOWN SINGLE PERIPHERAL WOUND - IMPALED CURRENTLY",
    },
    {
      "EMD": "27-B-2P",
      "Description": "KNOWN SINGLE PERIPHERAL WOUND - PENETRATING WOUND (NOT IMPALED NOW)",
    },
    {
      "EMD": "27-B-2S",
      "Description": "KNOWN SINGLE PERIPHERAL WOUND - STABBING",
    },
    {
      "EMD": "27-B-2X",
      "Description": "KNOWN SINGLE PERIPHERAL WOUND - SELF-INFLICTED GSW (INTENTIONAL)",
    },
    {
      "EMD": "27-B-2Y",
      "Description": "KNOWN SINGLE PERIPHERAL WOUND - SELF-INFLICTED STAB WOUND (INTENTIONAL)",
    },
    {
      "EMD": "27-B-3G",
      "Description": "SERIOUS HEMORRHAGE - GUNSHOT",
    },
    {
      "EMD": "27-B-3I",
      "Description": "SERIOUS HEMORRHAGE - IMPALED CURRENTLY",
    },
    {
      "EMD": "27-B-3P",
      "Description": "SERIOUS HEMORRHAGE - PENETRATING WOUND (NOT IMPALED NOW)",
    },
    {
      "EMD": "27-B-3S",
      "Description": "SERIOUS HEMORRHAGE - STABBING",
    },
    {
      "EMD": "27-B-3X",
      "Description": "SERIOUS HEMORRHAGE - SELF-INFLICTED GSW (INTENTIONAL)",
    },
    {
      "EMD": "27-B-3Y",
      "Description": "SERIOUS HEMORRHAGE - SELF-INFLICTED STAB WOUND (INTENTIONAL)",
    },
    {
      "EMD": "27-B-4G",
      "Description": "UNK STATUS / OTHER CODES NOT APPLICABLE - GUNSHOT",
    },
    {
      "EMD": "27-B-4I",
      "Description": "UNK STATUS / OTHER CODES NOT APPLICABLE - IMPALED CURRENTLY",
    },
    {
      "EMD": "27-B-4P",
      "Description": "UNK STATUS / OTHER CODES NOT APPLICABLE - PENETRATING WOUND (NOT IMPALED NOW)",
    },
    {
      "EMD": "27-B-4S",
      "Description": "UNK STATUS / OTHER CODES NOT APPLICABLE - STABBING",
    },
    {
      "EMD": "27-B-4X",
      "Description": "UNK STATUS / OTHER CODES NOT APPLICABLE - SELF-INFLICTED GSW (INTENTIONAL)",
    },
    {
      "EMD": "27-B-4Y",
      "Description": "UNK STATUS/OTHER CODES NOT APPLICABLE - SELF-INFLICTED STAB WOUND (INTENTIONAL)",
    },
    {
      "EMD": "27-B-5G",
      "Description": "OBVIOUS DEATH - GUNSHOT",
    },
    {
      "EMD": "27-B-5I",
      "Description": "OBVIOUS DEATH - IMPALED CURRENTLY",
    },
    {
      "EMD": "27-B-5P",
      "Description": "OBVIOUS DEATH - PENETRATING WOUND (NOT IMPALED NOW)",
    },
    {
      "EMD": "27-B-5S",
      "Description": "OBVIOUS DEATH - STABBING",
    },
    {
      "EMD": "27-B-5X",
      "Description": "OBVIOUS DEATH - SELF-INFLICTED GSW (INTENTIONAL)",
    },
    {
      "EMD": "27-B-5Y",
      "Description": "OBVIOUS DEATH - SELF-INFLICTED STAB WOUND (INTENTIONAL)",
    },
    {
      "EMD": "27-D-0G",
      "Description": "GUNSHOT",
    },
    {
      "EMD": "27-D-0I",
      "Description": "IMPALED CURRENTLY",
    },
    {
      "EMD": "27-D-0P",
      "Description": "PENETRATING WOUND (NOT IMPALED NOW)",
    },
    {
      "EMD": "27-D-0S",
      "Description": "STABBING",
    },
    {
      "EMD": "27-D-0X",
      "Description": "SELF-INFLICTED GSW (INTENTIONAL)",
    },
    {
      "EMD": "27-D-0Y",
      "Description": "SELF-INFLICTED STAB WOUND (INTENTIONAL)",
    },
    {
      "EMD": "27-D-1G",
      "Description": "ARREST - GUNSHOT",
    },
    {
      "EMD": "27-D-1I",
      "Description": "ARREST - IMPALED CURRENTLY",
    },
    {
      "EMD": "27-D-1P",
      "Description": "ARREST - PENETRATING WOUND (NOT IMPALED NOW)",
    },
    {
      "EMD": "27-D-1S",
      "Description": "ARREST - STABBING",
    },
    {
      "EMD": "27-D-1X",
      "Description": "ARREST - SELF-INFLICTED GSW (INTENTIONAL)",
    },
    {
      "EMD": "27-D-1Y",
      "Description": "ARREST - SELF-INFLICTED STAB WOUND (INTENTIONAL)",
    },
    {
      "EMD": "27-D-2G",
      "Description": "UNCONSCIOUS - GUNSHOT",
    },
    {
      "EMD": "27-D-2I",
      "Description": "UNCONSCIOUS - IMPALED CURRENTLY",
    },
    {
      "EMD": "27-D-2P",
      "Description": "UNCONSCIOUS - PENETRATING WOUND (NOT IMPALED NOW)",
    },
    {
      "EMD": "27-D-2S",
      "Description": "UNCONSCIOUS - STABBING",
    },
    {
      "EMD": "27-D-2X",
      "Description": "UNCONSCIOUS - SELF-INFLICTED GSW (INTENTIONAL)",
    },
    {
      "EMD": "27-D-2Y",
      "Description": "UNCONSCIOUS - SELF-INFLICTED STAB WOUND (INTENTIONAL)",
    },
    {
      "EMD": "27-D-3G",
      "Description": "NOT ALERT - GUNSHOT",
    },
    {
      "EMD": "27-D-3I",
      "Description": "NOT ALERT - IMPALED CURRENTLY",
    },
    {
      "EMD": "27-D-3P",
      "Description": "NOT ALERT - PENETRATING WOUND (NOT IMPALED NOW)",
    },
    {
      "EMD": "27-D-3S",
      "Description": "NOT ALERT - STABBING",
    },
    {
      "EMD": "27-D-3X",
      "Description": "NOT ALERT - SELF-INFLICTED GSW (INTENTIONAL)",
    },
    {
      "EMD": "27-D-3Y",
      "Description": "NOT ALERT - SELF-INFLICTED STAB WOUND (INTENTIONAL)",
    },
    {
      "EMD": "27-D-4G",
      "Description": "CENTRAL WOUNDS - GUNSHOT",
    },
    {
      "EMD": "27-D-4I",
      "Description": "CENTRAL WOUNDS - IMPALED CURRENTLY",
    },
    {
      "EMD": "27-D-4P",
      "Description": "CENTRAL WOUNDS - PENETRATING WOUND (NOT IMPALED NOW)",
    },
    {
      "EMD": "27-D-4S",
      "Description": "CENTRAL WOUNDS - STABBING",
    },
    {
      "EMD": "27-D-4X",
      "Description": "CENTRAL WOUNDS - SELF-INFLICTED GSW (INTENTIONAL)",
    },
    {
      "EMD": "27-D-4Y",
      "Description": "CENTRAL WOUNDS - SELF-INFLICTED STAB WOUND (INTENTIONAL)",
    },
    {
      "EMD": "27-D-5G",
      "Description": "MULTIPLE WOUNDS - GUNSHOT",
    },
    {
      "EMD": "27-D-5I",
      "Description": "MULTIPLE WOUNDS - IMPALED CURRENTLY",
    },
    {
      "EMD": "27-D-5P",
      "Description": "MULTIPLE WOUNDS - PENETRATING WOUND (NOT IMPALED NOW)",
    },
    {
      "EMD": "27-D-5S",
      "Description": "MULTIPLE WOUNDS - STABBING",
    },
    {
      "EMD": "27-D-5X",
      "Description": "MULTIPLE WOUNDS - SELF-INFLICTED GSW (INTENTIONAL)",
    },
    {
      "EMD": "27-D-5Y",
      "Description": "MULTIPLE WOUNDS - SELF-INFLICTED STAB WOUND (INTENTIONAL)",
    },
    {
      "EMD": "27-D-6G",
      "Description": "MULTIPLE VICTIMS - GUNSHOT",
    },
    {
      "EMD": "27-D-6I",
      "Description": "MULTIPLE VICTIMS - IMPALED CURRENTLY",
    },
    {
      "EMD": "27-D-6P",
      "Description": "MULTIPLE VICTIMS - PENETRATING WOUND (NOT IMPALED NOW)",
    },
    {
      "EMD": "27-D-6S",
      "Description": "MULTIPLE VICTIMS - STABBING",
    },
    {
      "EMD": "27-D-6X",
      "Description": "MULTIPLE VICTIMS - SELF-INFLICTED GSW (INTENTIONAL)",
    },
    {
      "EMD": "27-D-6Y",
      "Description": "MULTIPLE VICTIMS - SELF-INFLICTED STAB WOUND (INTENTIONAL)",
    },    {
      "EMD": "28-A-1C",
      "Description": "BREATHING NORMALLY (<35) - PARTIAL EVIDENCE (LESS THEN 2 HRS)",
    },
    {
      "EMD": "28-A-1D",
      "Description": "BREATHING NORMALLY (<35) - PARTIAL EVIDENCE (GREATER THEN 2 HRS)",
    },
    {
      "EMD": "28-A-1E",
      "Description": "BREATHING NORMALLY (<35) - PARTIAL EVIDENCE (UNKOWN TIME FRAME)",
    },
    {
      "EMD": "28-A-1F",
      "Description": "BREATHING NORMALLY (<35) - STRONG EVIDENCE (LESS THEN 2 HRS)",
    },
    {
      "EMD": "28-A-1G",
      "Description": "BREATHING NORMALLY (<35) - GREATER THEN 2 HRS (SINCE SYMPTOMS STARTED)",
    },
    {
      "EMD": "28-A-1H",
      "Description": "BREATHING NORMALLY (<35) - STRONG EVIDENCE (GREATER THEN 2 HRS)",
    },
    {
      "EMD": "28-A-1I",
      "Description": "BREATHING NORMALLY (<35) - STRONG EVIDENCE (UNKOWN TIME FRAME)",
    },
    {
      "EMD": "28-A-1J",
      "Description": "BREATHING NORMALLY (<35) - CLEAR EVIDENCE (LESS THEN 2 HRS)",
    },
    {
      "EMD": "28-A-1K",
      "Description": "BREATHING NORMALLY (<35) - CLEAR EVIDENCE (GREATER THEN 2 HRS)",
    },
    {
      "EMD": "28-A-1L",
      "Description": "BREATHING NORMALLY (<35) - LESS THEN 2 HRS (SINCE SYMPTOMS STARTED)",
    },
    {
      "EMD": "28-A-1M",
      "Description": "BREATHING NORMALLY (<35) - CLEAR EVIDENCE (UNKOWN TIME FRAME)",
    },
    {
      "EMD": "28-A-1U",
      "Description": "BREATHING NORMALLY (<35) - UNKNOWN (WHEN SYMPTOMS STARTED)",
    },
    {
      "EMD": "28-A-1X",
      "Description": "BREATHING NORMALLY (<35) - NO TEST EVIDENCE (LESS THEN 2 HRS)",
    },
    {
      "EMD": "28-A-1Y",
      "Description": "BREATHING NORMALLY (<35) - NO TEST EVIDENCE (GREATER THEN 2 HRS)",
    },
    {
      "EMD": "28-A-1Z",
      "Description": "BREATHING NORMALLY (<35) - NO TEST EVIDENCE (UNKOWN TIME FRAME)",
    },
    {
      "EMD": "28-C-0C",
      "Description": "PARTIAL EVIDENCE (LESS THEN 2 HRS)",
    },
    {
      "EMD": "28-C-0D",
      "Description": "PARTIAL EVIDENCE (GREATER THEN 2 HRS)",
    },
    {
      "EMD": "28-C-0E",
      "Description": "PARTIAL EVIDENCE (UNKOWN TIME FRAME)",
    },
    {
      "EMD": "28-C-0F",
      "Description": "STRONG EVIDENCE (LESS THEN 2 HRS)",
    },
    {
      "EMD": "28-C-0G",
      "Description": "GREATER THEN 2 HRS (SINCE SYMPTOMS STARTED)",
    },
    {
      "EMD": "28-C-0H",
      "Description": "STRONG EVIDENCE (GREATER THEN 2 HRS)",
    },
    {
      "EMD": "28-C-0I",
      "Description": "STRONG EVIDENCE (UNKOWN TIME FRAME)",
    },
    {
      "EMD": "28-C-0J",
      "Description": "CLEAR EVIDENCE (LESS THEN 2 HRS)",
    },
    {
      "EMD": "28-C-0K",
      "Description": "CLEAR EVIDENCE (GREATER THEN 2 HRS)",
    },
    {
      "EMD": "28-C-0L",
      "Description": "LESS THEN 2 HRS (SINCE SYMPTOMS STARTED)",
    },
    {
      "EMD": "28-C-0M",
      "Description": "CLEAR EVIDENCE (UNKOWN TIME FRAME)",
    },
    {
      "EMD": "28-C-0U",
      "Description": "UNKNOWN (WHEN SYMPTOMS STARTED)",
    },
    {
      "EMD": "28-C-0X",
      "Description": "NO TEST EVIDENCE (LESS THEN 2 HRS)",
    },
    {
      "EMD": "28-C-0Y",
      "Description": "NO TEST EVIDENCE (GREATER THEN 2 HRS)",
    },
    {
      "EMD": "28-C-0Z",
      "Description": "NO TEST EVIDENCE (UNKOWN TIME FRAME)",
    },
    {
      "EMD": "28-C-10I",
      "Description": "TIA (MINI-STROKE) HISTORY - STRONG EVIDENCE (UNKOWN TIME FRAME)",
    },
    {
      "EMD": "28-C-10J",
      "Description": "TIA (MINI-STROKE) HISTORY - CLEAR EVIDENCE (LESS THEN 2 HRS)",
    },
    {
      "EMD": "28-C-11I",
      "Description": "BREATHING NORMALLY >= 35 - STRONG EVIDENCE (UNKOWN TIME FRAME)",
    },
    {
      "EMD": "28-C-11J",
      "Description": "BREATHING NORMALLY >= 35 - CLEAR EVIDENCE (LESS THEN 2 HRS)",
    },    {
      "EMD": "28-C-1C",
      "Description": "NOT ALERT - PARTIAL EVIDENCE (LESS THEN 2 HRS)",
    },
    {
      "EMD": "28-C-1D",
      "Description": "NOT ALERT - PARTIAL EVIDENCE (GREATER THEN 2 HRS)",
    },
    {
      "EMD": "28-C-1E",
      "Description": "NOT ALERT - PARTIAL EVIDENCE (UNKOWN TIME FRAME)",
    },
    {
      "EMD": "28-C-1F",
      "Description": "NOT ALERT - STRONG EVIDENCE (LESS THEN 2 HRS)",
    },
    {
      "EMD": "28-C-1G",
      "Description": "NOT ALERT - GREATER THEN 2 HRS (SINCE SYMPTOMS STARTED)",
    },
    {
      "EMD": "28-C-1H",
      "Description": "NOT ALERT - STRONG EVIDENCE (GREATER THEN 2 HRS)",
    },
    {
      "EMD": "28-C-1I",
      "Description": "NOT ALERT - STRONG EVIDENCE (UNKOWN TIME FRAME)",
    },
    {
      "EMD": "28-C-1J",
      "Description": "NOT ALERT - CLEAR EVIDENCE (LESS THEN 2 HRS)",
    },
    {
      "EMD": "28-C-1K",
      "Description": "NOT ALERT - CLEAR EVIDENCE (GREATER THEN 2 HRS)",
    },
    {
      "EMD": "28-C-1L",
      "Description": "NOT ALERT - LESS THEN 2 HRS (SINCE SYMPTOMS STARTED)",
    },
    {
      "EMD": "28-C-1M",
      "Description": "NOT ALERT - CLEAR EVIDENCE (UNKOWN TIME FRAME)",
    },
    {
      "EMD": "28-C-1U",
      "Description": "NOT ALERT - UNKNOWN (WHEN SYMPTOMS STARTED)",
    },
    {
      "EMD": "28-C-1X",
      "Description": "NOT ALERT - NO TEST EVIDENCE (LESS THEN 2 HRS)",
    },
    {
      "EMD": "28-C-1Y",
      "Description": "NOT ALERT - NO TEST EVIDENCE (GREATER THEN 2 HRS)",
    },
    {
      "EMD": "28-C-1Z",
      "Description": "NOT ALERT - NO TEST EVIDENCE (UNKOWN TIME FRAME)",
    },
    {
      "EMD": "28-C-2C",
      "Description": "ABNORMAL BREATHING - PARTIAL EVIDENCE (LESS THEN 2 HRS)",
    },
    {
      "EMD": "28-C-2D",
      "Description": "ABNORMAL BREATHING - PARTIAL EVIDENCE (GREATER THEN 2 HRS)",
    },
    {
      "EMD": "28-C-2E",
      "Description": "ABNORMAL BREATHING - PARTIAL EVIDENCE (UNKOWN TIME FRAME)",
    },
    {
      "EMD": "28-C-2F",
      "Description": "ABNORMAL BREATHING - STRONG EVIDENCE (LESS THEN 2 HRS)",
    },
    {
      "EMD": "28-C-2G",
      "Description": "ABNORMAL BREATHING - GREATER THEN 2 HRS (SINCE SYMPTOMS STARTED)",
    },
    {
      "EMD": "28-C-2H",
      "Description": "ABNORMAL BREATHING - STRONG EVIDENCE (GREATER THEN 2 HRS)",
    },
    {
      "EMD": "28-C-2I",
      "Description": "ABNORMAL BREATHING - STRONG EVIDENCE (UNKOWN TIME FRAME)",
    },
    {
      "EMD": "28-C-2J",
      "Description": "ABNORMAL BREATHING - CLEAR EVIDENCE (LESS THEN 2 HRS)",
    },
    {
      "EMD": "28-C-2K",
      "Description": "ABNORMAL BREATHING - CLEAR EVIDENCE (GREATER THEN 2 HRS)",
    },
    {
      "EMD": "28-C-2L",
      "Description": "ABNORMAL BREATHING - LESS THEN 2 HRS (SINCE SYMPTOMS STARTED)",
    },
    {
      "EMD": "28-C-2M",
      "Description": "ABNORMAL BREATHING - CLEAR EVIDENCE (UNKOWN TIME FRAME)",
    },
    {
      "EMD": "28-C-2U",
      "Description": "ABNORMAL BREATHING - UNKNOWN (WHEN SYMPTOMS STARTED)",
    },
    {
      "EMD": "28-C-2X",
      "Description": "ABNORMAL BREATHING - NO TEST EVIDENCE (LESS THEN 2 HRS)",
    },
    {
      "EMD": "28-C-2Y",
      "Description": "ABNORMAL BREATHING - NO TEST EVIDENCE (GREATER THEN 2 HRS)",
    },
    {
      "EMD": "28-C-2Z",
      "Description": "ABNORMAL BREATHING - NO TEST EVIDENCE (UNKOWN TIME FRAME)",
    },
    {
      "EMD": "28-C-3C",
      "Description": "SUDDEN SPEECH PROBLEMS - PARTIAL EVIDENCE (LESS THEN 2 HRS)",
    },
    {
      "EMD": "28-C-3D",
      "Description": "SUDDEN SPEECH PROBLEMS - PARTIAL EVIDENCE (GREATER THEN 2 HRS)",
    },
    {
      "EMD": "28-C-3E",
      "Description": "SUDDEN SPEECH PROBLEMS - PARTIAL EVIDENCE (UNKOWN TIME FRAME)",
    },
    {
      "EMD": "28-C-3F",
      "Description": "SUDDEN SPEECH PROBLEMS - STRONG EVIDENCE (LESS THEN 2 HRS)",
    },
    {
      "EMD": "28-C-3G",
      "Description": "SUDDEN SPEECH PROBLEMS - GREATER THEN 2 HRS (SINCE SYMPTOMS STARTED)",
    },
    {
      "EMD": "28-C-3H",
      "Description": "SUDDEN SPEECH PROBLEMS - STRONG EVIDENCE (GREATER THEN 2 HRS)",
    },
    {
      "EMD": "28-C-3I",
      "Description": "SUDDEN SPEECH PROBLEMS - STRONG EVIDENCE (UNKOWN TIME FRAME)",
    },
    {
      "EMD": "28-C-3J",
      "Description": "SUDDEN SPEECH PROBLEMS - CLEAR EVIDENCE (LESS THEN 2 HRS)",
    },
    {
      "EMD": "28-C-3K",
      "Description": "SUDDEN SPEECH PROBLEMS - CLEAR EVIDENCE (GREATER THEN 2 HRS)",
    },
    {
      "EMD": "28-C-3L",
      "Description": "SUDDEN SPEECH PROBLEMS - LESS THEN 2 HRS (SINCE SYMPTOMS STARTED)",
    },
    {
      "EMD": "28-C-3M",
      "Description": "SUDDEN SPEECH PROBLEMS - CLEAR EVIDENCE (UNKOWN TIME FRAME)",
    },
    {
      "EMD": "28-C-3U",
      "Description": "SUDDEN SPEECH PROBLEMS - UNKNOWN (WHEN SYMPTOMS STARTED)",
    },
    {
      "EMD": "28-C-3X",
      "Description": "SUDDEN SPEECH PROBLEMS - NO TEST EVIDENCE (LESS THEN 2 HRS)",
    },
    {
      "EMD": "28-C-3Y",
      "Description": "SUDDEN SPEECH PROBLEMS - NO TEST EVIDENCE (GREATER THEN 2 HRS)",
    },
    {
      "EMD": "28-C-3Z",
      "Description": "SUDDEN SPEECH PROBLEMS - NO TEST EVIDENCE (UNKOWN TIME FRAME)",
    },
    {
      "EMD": "28-C-4C",
      "Description": "SUDDEN WEAKNESS OR NUMBNESS (ONE SIDE) - PARTIAL EVIDENCE (LESS THEN 2 HRS)",
    },
    {
      "EMD": "28-C-4D",
      "Description": "SUDDEN WEAKNESS OR NUMBNESS (ONE SIDE) - PARTIAL EVIDENCE (GREATER THEN 2 HRS)",
    },
    {
      "EMD": "28-C-4E",
      "Description": "SUDDEN WEAKNESS OR NUMBNESS (ONE SIDE) - PARTIAL EVIDENCE (UNKOWN TIME FRAME)",
    },
    {
      "EMD": "28-C-4F",
      "Description": "SUDDEN WEAKNESS OR NUMBNESS (ONE SIDE) - STRONG EVIDENCE (LESS THEN 2 HRS)",
    },
    {
      "EMD": "28-C-4G",
      "Description": "SUDDEN WEAKNESS OR NUMBNESS (ONE SIDE) - MORE THEN 2 HRS (SINCE SYMPTS STARTED)",
    },
    {
      "EMD": "28-C-4H",
      "Description": "SUDDEN WEAKNESS OR NUMBNESS (ONE SIDE) - STRONG EVIDENCE (GREATER THEN 2 HRS)",
    },
    {
      "EMD": "28-C-4I",
      "Description": "SUDDEN WEAKNESS OR NUMBNESS (ONE SIDE) - STRONG EVIDENCE (UNKOWN TIME FRAME)",
    },
    {
      "EMD": "28-C-4J",
      "Description": "SUDDEN WEAKNESS OR NUMBNESS (ONE SIDE) - CLEAR EVIDENCE (LESS THEN 2 HRS)",
    },
    {
      "EMD": "28-C-4K",
      "Description": "SUDDEN WEAKNESS OR NUMBNESS (ONE SIDE) - CLEAR EVIDENCE (GREATER THEN 2 HRS)",
    },
    {
      "EMD": "28-C-4L",
      "Description": "SUDDEN WEAKNESS OR NUMBNESS (ONE SIDE) - LESS THEN 2 HRS (SINCE SYMPTS STARTED)",
    },
    {
      "EMD": "28-C-4M",
      "Description": "SUDDEN WEAKNESS OR NUMBNESS (ONE SIDE) - CLEAR EVIDENCE (UNKOWN TIME FRAME)",
    },
    {
      "EMD": "28-C-4U",
      "Description": "SUDDEN WEAKNESS OR NUMBNESS (ONE SIDE) - UNKNOWN (WHEN SYMPTOMS STARTED)",
    },
    {
      "EMD": "28-C-4X",
      "Description": "SUDDEN WEAKNESS OR NUMBNESS (ONE SIDE) - NO TEST EVIDENCE (LESS THEN 2 HRS)",
    },
    {
      "EMD": "28-C-4Y",
      "Description": "SUDDEN WEAKNESS OR NUMBNESS (ONE SIDE) - NO TEST EVIDENCE (GREATER THEN 2 HRS)",
    },
    {
      "EMD": "28-C-4Z",
      "Description": "SUDDEN WEAKNESS OR NUMBNESS (ONE SIDE) - NO TEST EVIDENCE (UNKOWN TIME FRAME)",
    },
    {
      "EMD": "28-C-5C",
      "Description": "SUDDEN PARALYSIS OR FACIAL DROOP (1 SIDE) - PARTIAL EVIDENCE (LESS THEN 2 HRS)",
    },
    {
      "EMD": "28-C-5D",
      "Description": "SUDDEN PARALYSIS OR FACIAL DROOP (1 SIDE) - PARTIAL EVIDENCE (MORE THEN 2 HRS)",
    },
    {
      "EMD": "28-C-5E",
      "Description": "SUDDEN PARALYSIS OR FACIAL DROOP (1 SIDE) - PARTIAL EVIDENCE (UNKOWN TIME FRAME)",
    },
    {
      "EMD": "28-C-5F",
      "Description": "SUDDEN PARALYSIS OR FACIAL DROOP (1 SIDE) - STRONG EVIDENCE (LESS THEN 2 HRS)",
    },
    {
      "EMD": "28-C-5G",
      "Description": "SUDDEN PARALYSIS OR FACIAL DROOP (1 SIDE) - MORE THEN 2 HRS (SINCE SYMPTS BEGAN)",
    },
    {
      "EMD": "28-C-5H",
      "Description": "SUDDEN PARALYSIS OR FACIAL DROOP (1 SIDE) - STRONG EVIDENCE (GREATER THEN 2 HRS)",
    },
    {
      "EMD": "28-C-5I",
      "Description": "SUDDEN PARALYSIS OR FACIAL DROOP (1 SIDE) - STRONG EVIDENCE (UNKOWN TIME FRAME)",
    },
    {
      "EMD": "28-C-5J",
      "Description": "SUDDEN PARALYSIS OR FACIAL DROOP (1 SIDE) - CLEAR EVIDENCE (LESS THEN 2 HRS)",
    },
    {
      "EMD": "28-C-5K",
      "Description": "SUDDEN PARALYSIS OR FACIAL DROOP (1 SIDE) - CLEAR EVIDENCE (GREATER THEN 2 HRS)",
    },
    {
      "EMD": "28-C-5L",
      "Description": "SUDDEN PARALYSIS OR FACIAL DROOP (1 SIDE) - LESS THEN 2 HRS (SINCE SYMPTS BEGAN)",
    },
    {
      "EMD": "28-C-5M",
      "Description": "SUDDEN PARALYSIS OR FACIAL DROOP (1 SIDE) - CLEAR EVIDENCE (UNKOWN TIME FRAME)",
    },
    {
      "EMD": "28-C-5U",
      "Description": "SUDDEN PARALYSIS OR FACIAL DROOP (1 SIDE) - UNKNOWN (WHEN SYMPTOMS STARTED)",
    },
    {
      "EMD": "28-C-5X",
      "Description": "SUDDEN PARALYSIS OR FACIAL DROOP (1 SIDE) - NO TEST EVIDENCE (LESS THEN 2 HRS)",
    },
    {
      "EMD": "28-C-5Y",
      "Description": "SUDDEN PARALYSIS OR FACIAL DROOP (1 SIDE) - NO TEST EVIDENCE (MORE THEN 2 HRS)",
    },
    {
      "EMD": "28-C-5Z",
      "Description": "SUDDEN PARALYSIS OR FACIAL DROOP (1 SIDE) - NO TEST EVIDENCE (UNKOWN TIME FRAME)",
    },
    {
      "EMD": "28-C-6C",
      "Description": "SUDDEN LOSS OF BALANCE OR COORDINATION - PARTIAL EVIDENCE (LESS THEN 2 HRS)",
    },
    {
      "EMD": "28-C-6D",
      "Description": "SUDDEN LOSS OF BALANCE OR COORDINATION - PARTIAL EVIDENCE (GREATER THEN 2 HRS)",
    },
    {
      "EMD": "28-C-6E",
      "Description": "SUDDEN LOSS OF BALANCE OR COORDINATION - PARTIAL EVIDENCE (UNKOWN TIME FRAME)",
    },
    {
      "EMD": "28-C-6F",
      "Description": "SUDDEN LOSS OF BALANCE OR COORDINATION - STRONG EVIDENCE (LESS THEN 2 HRS)",
    },
    {
      "EMD": "28-C-6G",
      "Description": "SUDDEN LOSS OF BALANCE OR COORDINATION - MORE THEN 2 HRS (SINCE SYMPTS STARTED)",
    },
    {
      "EMD": "28-C-6H",
      "Description": "SUDDEN LOSS OF BALANCE OR COORDINATION - STRONG EVIDENCE (GREATER THEN 2 HRS)",
    },
    {
      "EMD": "28-C-6I",
      "Description": "SUDDEN LOSS OF BALANCE OR COORDINATION - STRONG EVIDENCE (UNKOWN TIME FRAME)",
    },
    {
      "EMD": "28-C-6J",
      "Description": "SUDDEN LOSS OF BALANCE OR COORDINATION - CLEAR EVIDENCE (LESS THEN 2 HRS)",
    },
    {
      "EMD": "28-C-6K",
      "Description": "SUDDEN LOSS OF BALANCE OR COORDINATION - CLEAR EVIDENCE (GREATER THEN 2 HRS)",
    },
    {
      "EMD": "28-C-6L",
      "Description": "SUDDEN LOSS OF BALANCE OR COORDINATION - LESS THEN 2 HRS (SINCE SYMPTS STARTED)",
    },
    {
      "EMD": "28-C-6M",
      "Description": "SUDDEN LOSS OF BALANCE OR COORDINATION - CLEAR EVIDENCE (UNKOWN TIME FRAME)",
    },
    {
      "EMD": "28-C-6U",
      "Description": "SUDDEN LOSS OF BALANCE OR COORDINATION - UNKNOWN (WHEN SYMPTOMS STARTED)",
    },    {
      "EMD": "28-C-6Z",
      "Description": "SUDDEN LOSS OF BALANCE OR COORDINATION - NO TEST EVIDENCE (UNKOWN TIME FRAME)",
    },
    {
      "EMD": "28-C-7C",
      "Description": "SUDDEN VISION PROBLEMS - PARTIAL EVIDENCE (LESS THEN 2 HRS)",
    },
    {
      "EMD": "28-C-7D",
      "Description": "SUDDEN VISION PROBLEMS - PARTIAL EVIDENCE (GREATER THEN 2 HRS)",
    },
    {
      "EMD": "28-C-7E",
      "Description": "SUDDEN VISION PROBLEMS - PARTIAL EVIDENCE (UNKOWN TIME FRAME)",
    },
    {
      "EMD": "28-C-7F",
      "Description": "SUDDEN VISION PROBLEMS - STRONG EVIDENCE (LESS THEN 2 HRS)",
    },
    {
      "EMD": "28-C-7G",
      "Description": "SUDDEN VISION PROBLEMS - GREATER THEN 2 HRS (SINCE SYMPTOMS STARTED)",
    },
    {
      "EMD": "28-C-7H",
      "Description": "SUDDEN VISION PROBLEMS - STRONG EVIDENCE (GREATER THEN 2 HRS)",
    },
    {
      "EMD": "28-C-7I",
      "Description": "SUDDEN VISION PROBLEMS - STRONG EVIDENCE (UNKOWN TIME FRAME)",
    },
    {
      "EMD": "28-C-7J",
      "Description": "SUDDEN VISION PROBLEMS - CLEAR EVIDENCE (LESS THEN 2 HRS)",
    },
    {
      "EMD": "28-C-7K",
      "Description": "SUDDEN VISION PROBLEMS - CLEAR EVIDENCE (GREATER THEN 2 HRS)",
    },
    {
      "EMD": "28-C-7L",
      "Description": "SUDDEN VISION PROBLEMS - LESS THEN 2 HRS (SINCE SYMPTOMS STARTED)",
    },
    {
      "EMD": "28-C-7M",
      "Description": "SUDDEN VISION PROBLEMS - CLEAR EVIDENCE (UNKOWN TIME FRAME)",
    },
    {
      "EMD": "28-C-7U",
      "Description": "SUDDEN VISION PROBLEMS - UNKNOWN (WHEN SYMPTOMS STARTED)",
    },
    {
      "EMD": "28-C-7X",
      "Description": "SUDDEN VISION PROBLEMS - NO TEST EVIDENCE (LESS THEN 2 HRS)",
    },
    {
      "EMD": "28-C-7Y",
      "Description": "SUDDEN VISION PROBLEMS - NO TEST EVIDENCE (GREATER THEN 2 HRS)",
    },
    {
      "EMD": "28-C-7Z",
      "Description": "SUDDEN VISION PROBLEMS - NO TEST EVIDENCE (UNKOWN TIME FRAME)",
    },
    {
      "EMD": "28-C-8C",
      "Description": "SUDDEN ONSET OF SEVERE HEADACHE - PARTIAL EVIDENCE (LESS THEN 2 HRS)",
    },
    {
      "EMD": "28-C-8D",
      "Description": "SUDDEN ONSET OF SEVERE HEADACHE - PARTIAL EVIDENCE (GREATER THEN 2 HRS)",
    },
    {
      "EMD": "28-C-8E",
      "Description": "SUDDEN ONSET OF SEVERE HEADACHE - PARTIAL EVIDENCE (UNKOWN TIME FRAME)",
    },
    {
      "EMD": "28-C-8F",
      "Description": "SUDDEN ONSET OF SEVERE HEADACHE - STRONG EVIDENCE (LESS THEN 2 HRS)",
    },
    {
      "EMD": "28-C-8G",
      "Description": "SUDDEN ONSET OF SEVERE HEADACHE - GREATER THEN 2 HRS (SINCE SYMPTOMS STARTED)",
    },
    {
      "EMD": "28-C-8H",
      "Description": "SUDDEN ONSET OF SEVERE HEADACHE - STRONG EVIDENCE (GREATER THEN 2 HRS)",
    },
    {
      "EMD": "28-C-8I",
      "Description": "SUDDEN ONSET OF SEVERE HEADACHE - STRONG EVIDENCE (UNKOWN TIME FRAME)",
    },
    {
      "EMD": "28-C-8J",
      "Description": "SUDDEN ONSET OF SEVERE HEADACHE - CLEAR EVIDENCE (LESS THEN 2 HRS)",
    },
    {
      "EMD": "28-C-8K",
      "Description": "SUDDEN ONSET OF SEVERE HEADACHE - CLEAR EVIDENCE (GREATER THEN 2 HRS)",
    },
    {
      "EMD": "28-C-8L",
      "Description": "SUDDEN ONSET OF SEVERE HEADACHE - LESS THEN 2 HRS (SINCE SYMPTOMS STARTED)",
    },
    {
      "EMD": "28-C-8M",
      "Description": "SUDDEN ONSET OF SEVERE HEADACHE - CLEAR EVIDENCE (UNKOWN TIME FRAME)",
    },
    {
      "EMD": "28-C-8U",
      "Description": "SUDDEN ONSET OF SEVERE HEADACHE - UNKNOWN (WHEN SYMPTOMS STARTED)",
    },
    {
      "EMD": "28-C-8X",
      "Description": "SUDDEN ONSET OF SEVERE HEADACHE - NO TEST EVIDENCE (LESS THEN 2 HRS)",
    },
    {
      "EMD": "28-C-8Y",
      "Description": "SUDDEN ONSET OF SEVERE HEADACHE - NO TEST EVIDENCE (GREATER THEN 2 HRS)",
    },
    {
      "EMD": "28-C-8Z",
      "Description": "SUDDEN ONSET OF SEVERE HEADACHE - NO TEST EVIDENCE (UNKOWN TIME FRAME)",
    },
    {
      "EMD": "28-C-9C",
      "Description": "STROKE HISTORY - PARTIAL EVIDENCE (LESS THEN 2 HRS)",
    },
    {
      "EMD": "28-C-9D",
      "Description": "STROKE HISTORY - PARTIAL EVIDENCE (GREATER THEN 2 HRS)",
    },
    {
      "EMD": "28-C-9E",
      "Description": "STROKE HISTORY - PARTIAL EVIDENCE (UNKOWN TIME FRAME)",
    },
    {
      "EMD": "28-C-9F",
      "Description": "STROKE HISTORY - STRONG EVIDENCE (LESS THEN 2 HRS)",
    },
    {
      "EMD": "28-C-9G",
      "Description": "STROKE HISTORY - GREATER THEN 2 HRS (SINCE SYMPTOMS STARTED)",
    },
    {
      "EMD": "28-C-9H",
      "Description": "STROKE HISTORY - STRONG EVIDENCE (GREATER THEN 2 HRS)",
    },
    {
      "EMD": "28-C-9I",
      "Description": "STROKE HISTORY - STRONG EVIDENCE (UNKOWN TIME FRAME)",
    },
    {
      "EMD": "28-C-9J",
      "Description": "STROKE HISTORY - CLEAR EVIDENCE (LESS THEN 2 HRS)",
    },
    {
      "EMD": "28-C-9K",
      "Description": "STROKE HISTORY - CLEAR EVIDENCE (GREATER THEN 2 HRS)",
    },
    {
      "EMD": "28-C-9L",
      "Description": "STROKE HISTORY - LESS THEN 2 HRS (SINCE SYMPTOMS STARTED)",
    },
    {
      "EMD": "28-C-9M",
      "Description": "STROKE HISTORY - CLEAR EVIDENCE (UNKOWN TIME FRAME)",
    },
    {
      "EMD": "28-C-9U",
      "Description": "STROKE HISTORY - UNKNOWN (WHEN SYMPTOMS STARTED)",
    },
    {
      "EMD": "28-C-9X",
      "Description": "STROKE HISTORY - NO TEST EVIDENCE (LESS THEN 2 HRS)",
    },
    {
      "EMD": "28-C-9Y",
      "Description": "STROKE HISTORY - NO TEST EVIDENCE (GREATER THEN 2 HRS)",
    },    {
      "EMD": "29-O-1",
      "Description": "NO INJ (CONFIRMED FOR ALL PERSONS UP TO 4)",
    },    {
      "EMD": "29-O-1V",
      "Description": "NO INJ (CONFIRMED FOR ALL PERSONS UP TO 4) - MULTIPLE PATIENTS",
    },
    {
      "EMD": "29-O-1X",
      "Description": "NO INJ (CONFIRMED FOR ALL PERSONS UP TO 4) - UNK # OF PATIENTS & ADD RESP REQ",
    },    {
      "EMD": "29-A-0U",
      "Description": "UNKNOWN NUMBER OF PATIENTS",
    },
    {
      "EMD": "29-A-0V",
      "Description": "MULTIPLE PATIENTS",
    },
    {
      "EMD": "29-A-0X",
      "Description": "UNKNOWN NUMBER OF PATIENTS & ADDITIONAL RESPONSE REQUIRED",
    },
    {
      "EMD": "29-A-0Y",
      "Description": "MULTIPLE PATIENTS & ADDITIONAL RESPONSE REQUIRED",
    },
    {
      "EMD": "29-A-1",
      "Description": "1ST PARTY CALLER W/ INJURY TO NOT DANGEROUS BODY AREA",
    },
    {
      "EMD": "29-A-1U",
      "Description": "1ST PARTY CALLER W/ INJURY TO NOT DANGEROUS BODY AREA - UNK NUMBER OF PATIENTS",
    },
    {
      "EMD": "29-A-1V",
      "Description": "1ST PARTY CALLER W/ INJURY TO NOT DANGEROUS BODY AREA - MULTIPLE PATIENTS",
    },
    {
      "EMD": "29-A-1X",
      "Description": "1ST PARTY CALLER W/ INJ TO NOT DANGEROUS BODY AREA - UNK # OF PTS & ADD RESP REQ",
    },
    {
      "EMD": "29-A-1Y",
      "Description": "1ST PARTY CALLER W/ INJ TO NOT DANGEROUS BODY AREA - MULTIPLE PTS & ADD RESP REQ",
    },
    {
      "EMD": "29-A-2",
      "Description": "NO INJ REPORTED (UNCONFIRMED OR > = 5 PERSONS INVOLVED)",
    },
    {
      "EMD": "29-A-2U",
      "Description": "NO INJ REPT (UNCONFIRMED OR > = 5 PERS INVOLVED) - UNK NUMBER OF PATIENTS",
    },
    {
      "EMD": "29-A-2V",
      "Description": "NO INJ REPT (UNCONFIRMED OR > = 5 PERS INVOLVED) - MULTIPLE PATIENTS",
    },
    {
      "EMD": "29-A-2X",
      "Description": "NO INJ REPT (UNCONFIRMED OR > = 5 PERS INVOLVED) - UNK # OF PTS & ADD RESP REQ",
    },    {
      "EMD": "29-B-0U",
      "Description": "UNKNOWN NUMBER OF PATIENTS",
    },
    {
      "EMD": "29-B-0V",
      "Description": "MULTIPLE PATIENTS",
    },
    {
      "EMD": "29-B-0X",
      "Description": "UNKNOWN NUMBER OF PATIENTS & ADDITIONAL RESPONSE REQUIRED",
    },
    {
      "EMD": "29-B-0Y",
      "Description": "MULTIPLE PATIENTS & ADDITIONAL RESPONSE REQUIRED",
    },
    {
      "EMD": "29-B-1",
      "Description": "INJURIES",
    },
    {
      "EMD": "29-B-1U",
      "Description": "INJURIES - UNK NUMBER OF PATIENTS",
    },
    {
      "EMD": "29-B-1V",
      "Description": "INJURIES - MULTIPLE PATIENTS",
    },
    {
      "EMD": "29-B-1X",
      "Description": "INJURIES - UNK NUMBER OF PATIENTS & ADDITIONAL RESPONSE REQ",
    },
    {
      "EMD": "29-B-1Y",
      "Description": "INJURIES - MULTIPLE PATIENTS & ADDITIONAL RESPONSE REQ",
    },
    {
      "EMD": "29-B-2",
      "Description": "SERIOUS HEMORRAGE",
    },
    {
      "EMD": "29-B-2U",
      "Description": "SERIOUS HEMORRAGE - UNK NUMBER OF PATIENTS",
    },
    {
      "EMD": "29-B-2V",
      "Description": "SERIOUS HEMORRAGE - MULTIPLE PATIENTS",
    },
    {
      "EMD": "29-B-2X",
      "Description": "SERIOUS HEMORRAGE - UNK NUMBER OF PATIENTS & ADDITIONAL RESPONSE REQ",
    },
    {
      "EMD": "29-B-2Y",
      "Description": "SERIOUS HEMORRAGE - MULTIPLE PATIENTS & ADDITIONAL RESPONSE REQ",
    },
    {
      "EMD": "29-B-3",
      "Description": "OTHER HAZARDS",
    },
    {
      "EMD": "29-B-3U",
      "Description": "OTHER HAZARDS - UNK NUMBER OF PATIENTS",
    },
    {
      "EMD": "29-B-3V",
      "Description": "OTHER HAZARDS- MULTIPLE PATIENTS",
    },
    {
      "EMD": "29-B-3X",
      "Description": "OTHER HAZARDS - UNK NUMBER OF PATIENTS & ADDITIONAL RESPONSE REQ",
    },
    {
      "EMD": "29-B-3Y",
      "Description": "OTHER HAZARDS - MULTIPLE PATIENTS & ADDITIONAL RESPONSE REQ",
    },
    {
      "EMD": "29-B-4",
      "Description": "LOW MECHANISM (1ST OR 2ND PARTY CALLER)",
    },
    {
      "EMD": "29-B-4U",
      "Description": "LOW MECHANISM (1ST OR 2ND PARTY CALLER) - UNK NUMBER OF PATIENTS",
    },
    {
      "EMD": "29-B-4V",
      "Description": "LOW MECHANISM (1ST OR 2ND PARTY CALLER) - MULTIPLE PATIENTS",
    },
    {
      "EMD": "29-B-4X",
      "Description": "LOW MECHANISM (1ST OR 2ND PARTY CALLER) - UNK # OF PTS & ADD RESP REQ",
    },
    {
      "EMD": "29-B-4Y",
      "Description": "LOW MECHANISM (1ST OR 2ND PARTY CALLER) - MULTIPLE PTS & ADD RESP REQ",
    },
    {
      "EMD": "29-B-5",
      "Description": "UNKNOWN STATUS / OTHER CODES NOT APPLICABLE",
    },
    {
      "EMD": "29-B-5U",
      "Description": "UNKNOWN STATUS / OTHER CODES NOT APPLICABLE - UNK NUMBER OF PATIENTS",
    },
    {
      "EMD": "29-B-5V",
      "Description": "UNKNOWN STATUS / OTHER CODES NOT APPLICABLE - MULTIPLE PATIENTS",
    },
    {
      "EMD": "29-B-5X",
      "Description": "UNKNOWN STATUS / OTHER CODES NOT APPLICABLE - UNK # OF PTS & ADD RESP REQ",
    },    {
      "EMD": "29-D-0U",
      "Description": "UNKNOWN NUMBER OF PATIENTS",
    },
    {
      "EMD": "29-D-0V",
      "Description": "MULTIPLE PATIENTS",
    },
    {
      "EMD": "29-D-0X",
      "Description": "UNKNOWN NUMBER OF PATIENTS & ADDITIONAL RESPONSE REQUIRED",
    },
    {
      "EMD": "29-D-0Y",
      "Description": "MULTIPLE PATIENTS & ADDITIONAL RESPONSE REQUIRED",
    },
    {
      "EMD": "29-D-1A",
      "Description": "MAJOR INCIDENT - AIRCRAFT",
    },
    {
      "EMD": "29-D-1B",
      "Description": "MAJOR INCIDENT - BUS",
    },
    {
      "EMD": "29-D-1C",
      "Description": "MAJOR INCIDENT - SUBWAY / METRO",
    },
    {
      "EMD": "29-D-1D",
      "Description": "MAJOR INCIDENT - TRAIN",
    },
    {
      "EMD": "29-D-1E",
      "Description": "MAJOR INCIDENT - WATERCRAFT",
    },
    {
      "EMD": "29-D-1F",
      "Description": "MAJOR INCIDENT - MULTI VEHICLE (>=10) PILE UP",
    },
    {
      "EMD": "29-D-1G",
      "Description": "MAJOR INCIDENT - STREET CAR/TRAM/LIGHT RAIL",
    },
    {
      "EMD": "29-D-1H",
      "Description": "MAJOR INCIDENT - VEHICLE VS BUILDING",
    },
    {
      "EMD": "29-D-2K",
      "Description": "HIGH MECHANISM - ALL TERRAIN/SNOWMOBILE",
    },
    {
      "EMD": "29-D-2L",
      "Description": "HIGH MECHANISM - MOTORCYCLE / BICYCLE VS AUTO",
    },    {
      "EMD": "29-D-2N",
      "Description": "HIGH MECHANISM - EJECTION",
    },
    {
      "EMD": "29-D-2O",
      "Description": "HIGH MECHANISM - PERSONAL WATERCRAFT",
    },
    {
      "EMD": "29-D-2P",
      "Description": "HIGH MECHANISM - OVERTURN",
    },
    {
      "EMD": "29-D-2Q",
      "Description": "HIGH MECHANISM - VEHICLE OFF BRIDGE / HEIGHT",
    },
    {
      "EMD": "29-D-2R",
      "Description": "HIGH MECHANISM - POSSIBLE DEATH AT SCENE",
    },
    {
      "EMD": "29-D-2S",
      "Description": "HIGH MECHANISM - SINKING VEHICLE",
    },
    {
      "EMD": "29-D-2T",
      "Description": "HIGH MECHANISM - TRAIN/LIGHT RAIL VS PEDESTRIAN",
    },
    {
      "EMD": "29-D-3",
      "Description": "HIGH VELOCITY IMPACT",
    },
    {
      "EMD": "29-D-3U",
      "Description": "HIGH VELOCITY IMPACT - UNK NUMBER OF PATIENTS",
    },
    {
      "EMD": "29-D-3V",
      "Description": "HIGH VELOCITY IMPACT - MULTIPLE PATIENTS",
    },
    {
      "EMD": "29-D-3X",
      "Description": "HIGH VELOCITY IMPACT - UNK NUMBER OF PATIENTS & ADDITIONAL RESPONSE REQ",
    },
    {
      "EMD": "29-D-3Y",
      "Description": "HIGH VELOCITY IMPACT - MULTIPLE PATIENTS & ADDITIONAL RESPONSE REQ",
    },
    {
      "EMD": "29-D-4",
      "Description": "HAZMAT",
    },
    {
      "EMD": "29-D-4U",
      "Description": "HAZMAT - UNK NUMBER OF PATIENTS",
    },
    {
      "EMD": "29-D-4V",
      "Description": "HAZMAT - MULTIPLE PATIENTS",
    },
    {
      "EMD": "29-D-4X",
      "Description": "HAZMAT - UNK NUMBER OF PATIENTS & ADDITIONAL RESPONSE REQ",
    },
    {
      "EMD": "29-D-4Y",
      "Description": "HAZMAT - MULTIPLE PATIENTS & ADDITIONAL RESPONSE REQ",
    },
    {
      "EMD": "29-D-5",
      "Description": "HEAVY RESCUE",
    },
    {
      "EMD": "29-D-5U",
      "Description": "HEAVY RESCUE - UNK NUMBER OF PATIENTS",
    },
    {
      "EMD": "29-D-5V",
      "Description": "HEAVY RESCUE - MULTIPLE PATIENTS",
    },
    {
      "EMD": "29-D-5X",
      "Description": "HEAVY RESCUE - UNK NUMBER OF PATIENTS & ADDITIONAL RESPONSE REQ",
    },
    {
      "EMD": "29-D-5Y",
      "Description": "HEAVY RESCUE - MULTIPLE PATIENTS & ADDITIONAL RESPONSE REQ",
    },
    {
      "EMD": "29-D-6",
      "Description": "ARREST",
    },
    {
      "EMD": "29-D-6U",
      "Description": "ARREST - UNK NUMBER OF PATIENTS",
    },
    {
      "EMD": "29-D-6V",
      "Description": "ARREST - MULTIPLE PATIENTS",
    },
    {
      "EMD": "29-D-6X",
      "Description": "ARREST - UNK NUMBER OF PATIENTS & ADDITIONAL RESPONSE REQ",
    },
    {
      "EMD": "29-D-6Y",
      "Description": "ARREST - MULTIPLE PATIENTS & ADDITIONAL RESPONSE REQ",
    },
    {
      "EMD": "29-D-7",
      "Description": "UNCONCIOUS",
    },
    {
      "EMD": "29-D-7U",
      "Description": "UNCONCIOUS - UNK NUMBER OF PATIENTS",
    },
    {
      "EMD": "29-D-7V",
      "Description": "UNCONCIOUS - MULTIPLE PATIENTS",
    },
    {
      "EMD": "29-D-7X",
      "Description": "UNCONCIOUS - UNK NUMBER OF PATIENTS & ADDITIONAL RESPONSE REQ",
    },
    {
      "EMD": "29-D-7Y",
      "Description": "UNCONCIOUS - MULTIPLE PATIENTS & ADDITIONAL RESPONSE REQ",
    },
    {
      "EMD": "29-D-8",
      "Description": "NOT ALERT WITH NOISY BREATHING (ABNORMAL)",
    },
    {
      "EMD": "29-D-8U",
      "Description": "NOT ALERT WITH NOISY BREATHING (ABNORMAL) - UNK NUMBER OF PATIENTS",
    },
    {
      "EMD": "29-D-8V",
      "Description": "NOT ALERT WITH NOISY BREATHING (ABNORMAL) - MULTIPLE PATIENTS",
    },
    {
      "EMD": "29-D-8X",
      "Description": "NOT ALERT WITH NOISY BREATHING (ABNORMAL) - UNK # OF PATIENTS & ADD RESP REQ",
    },
    {
      "EMD": "29-D-8Y",
      "Description": "NOT ALERT WITH NOISY BREATHING (ABNORMAL) - MULTIPLE PATIENTS & ADD RESP REQ",
    },
    {
      "EMD": "29-D-9",
      "Description": "NOT ALERT WITH NORMAL BREATHING",
    },
    {
      "EMD": "29-D-9U",
      "Description": "NOT ALERT WITH NORMAL BREATHING - UNK NUMBER OF PATIENTS",
    },
    {
      "EMD": "29-D-9V",
      "Description": "NOT ALERT WITH NORMAL BREATHING - MULTIPLE PATIENTS",
    },
    {
      "EMD": "29-D-9X",
      "Description": "NOT ALERT WITH NORMAL BREATHING - UNK # OF PATIENTS & ADD RESP REQ",
    },
    {
      "EMD": "29-D-9Y",
      "Description": "NOT ALERT WITH NORMAL BREATHING - MULTIPLE PATIENTS & ADDITIONAL RESPONSE REQ",
    },    {
      "EMD": "30-A-1",
      "Description": "NOT DANGEROUS (UPPER ARM, KNEE, ELBOW) W/ DEFORMITY - ASSAULT",
    },
    {
      "EMD": "30-A-2",
      "Description": "NOT DANGEROUS BODY AREA",
    },
    {
      "EMD": "30-A-3",
      "Description": "NON RECENT INJURIES (>= 6HRS) WITHOUT PRIORITY SYMPTOMS",
    },    {
      "EMD": "30-B-1",
      "Description": "POSSIBLY DANGEROUS BODY AREA",
    },
    {
      "EMD": "30-B-2",
      "Description": "SERIOUS HEMORRHAGE",
    },
    {
      "EMD": "30-B-3",
      "Description": "UNKNOWN BODY AREA (REMOTE PATIENT LOCATION)",
    },    {
      "EMD": "30-D-1",
      "Description": "ARREST",
    },
    {
      "EMD": "30-D-2",
      "Description": "UNCONSCIOUS",
    },
    {
      "EMD": "30-D-3",
      "Description": "NOT ALERT",
    },
    {
      "EMD": "30-D-4",
      "Description": "CHEST OR NECK INJURY (WITH DIFFICULTY BREATHING)",
    },
    {
      "EMD": "30-D-5",
      "Description": "HIGH VELOCITY IMPACT/MASS INJURY",
    },    {
      "EMD": "31-A-1",
      "Description": "FAINTING EPISODE(S) AND ALERT >= 35 (WITHOUT CARDIAC HISTORY)",
    },
    {
      "EMD": "31-A-2",
      "Description": "FAINTING EPISODE(S) AND ALERT < 35 (WITH CARDIAC HISTORY)",
    },    {
      "EMD": "31-C-1",
      "Description": "ALERT WITH ABNORMAL BREATHING",
    },
    {
      "EMD": "31-C-2",
      "Description": "FAINTING EPISODE(S) AND ALERT >=35 (WITH CARDIAC HISTORY)",
    },
    {
      "EMD": "31-C-3",
      "Description": "FEMALES 12 - 50 WITH ABDOMINAL PAIN",
    },    {
      "EMD": "31-D-1",
      "Description": "UNCONSCIOUS - AGONAL / INEFFECTIVE BREATHING",
    },
    {
      "EMD": "31-D-2",
      "Description": "UNCONSCIOUS - EFFECTIVE BREATHING",
    },
    {
      "EMD": "31-D-3",
      "Description": "NOT ALERT",
    },
    {
      "EMD": "31-D-4",
      "Description": "CHANGING COLOR",
    },    {
      "EMD": "31-E-1",
      "Description": "INEFFECTIVE BREATHING",
    },    {
      "EMD": "32-B-1",
      "Description": "STANDING, SITTING UP, MOVING OR TALKING",
    },
    {
      "EMD": "32-B-2",
      "Description": "MEDICAL ALERT NOTIFICATION (NO PATIENT INFORMATION)",
    },
    {
      "EMD": "32-B-3",
      "Description": "UNKNOWN STATUS / OTHER CODES NOT APPLICABLE",
    },    {
      "EMD": "32-D-1",
      "Description": "LIFE STATUS QUESTIONABLE",
    },
    {
      "EMD": "33-A-1T",
      "Description": "ACUITY I (NO PRIORITY SYMPTOMS) - TRANSFER/INTERFACILITY",
    },
    {
      "EMD": "33-A-2P",
      "Description": "ACUITY II (NO PRIORITY SYMPTOMS) - PALLIATIVE CARE",
    },
    {
      "EMD": "33-A-2T",
      "Description": "ACUITY II (NO PRIORITY SYMPTOMS) - TRANSFER/INTERFACILITY",
    },
    {
      "EMD": "33-A-3P",
      "Description": "ACUITY III (NO PRIORITY SYMPTOMS) - PALLIATIVE CARE",
    },
    {
      "EMD": "33-A-3T",
      "Description": "ACUITY III (NO PRIORITY SYMPTOMS) - TRANSFER/INTERFACILITY",
    },
    {
      "EMD": "33-C-0P",
      "Description": "PALLIATIVE CARE",
    },
    {
      "EMD": "33-C-0T",
      "Description": "TRANSFER/INTERFACILITY",
    },
    {
      "EMD": "33-C-1P",
      "Description": "NOT ALERT (ACUTE CHANGE) - PALLIATIVE CARE",
    },
    {
      "EMD": "33-C-1T",
      "Description": "NOT ALERT (ACUTE CHANGE) - TRANSFER/INTERFACILITY",
    },
    {
      "EMD": "33-C-2P",
      "Description": "ABNORMAL BREATHING (ACUTE ONSET) - PALLIATIVE CARE",
    },
    {
      "EMD": "33-C-2T",
      "Description": "ABNORMAL BREATHING (ACUTE ONSET) - TRANSFER/INTERFACILITY",
    },
    {
      "EMD": "33-C-3P",
      "Description": "SIGNIFICANT HEMORRHAGE - PALLIATIVE CARE",
    },
    {
      "EMD": "33-C-3T",
      "Description": "SIGNIFICANT HEMORRHAGE - TRANSFER/INTERFACILITY",
    },
    {
      "EMD": "33-C-4P",
      "Description": "SHOCK - PALLIATIVE CARE",
    },
    {
      "EMD": "33-C-4T",
      "Description": "SHOCK - TRANSFER/INTERFACILITY",
    },
    {
      "EMD": "33-C-5P",
      "Description": "POSSIBLE ACUTE HEART PROBLEM OR MI - PALLIATIVE CARE",
    },
    {
      "EMD": "33-C-5T",
      "Description": "POSSIBLE ACUTE HEART PROBLEM OR MI - TRANSFER/INTERFACILITY",
    },
    {
      "EMD": "33-C-6P",
      "Description": "ACUTE SEVERE PAIN - PALLIATIVE CARE",
    },
    {
      "EMD": "33-C-6T",
      "Description": "ACUTE SEVERE PAIN - TRANSFER/INTERFACILITY",
    },
    {
      "EMD": "33-C-7P",
      "Description": "EMERGENCY RESPONSE REQUESTED - PALLIATIVE CARE",
    },
    {
      "EMD": "33-C-7T",
      "Description": "EMERGENCY RESPONSE REQUESTED - TRANSFER/INTERFACILITY",
    },
    {
      "EMD": "33-D-0P",
      "Description": "PALLIATIVE CARE",
    },
    {
      "EMD": "33-D-0T",
      "Description": "TRANSFER/INTERFACILITY",
    },
    {
      "EMD": "33-D-1P",
      "Description": "SUSPECTED CARDIAC OR RESPIRATORY ARREST - PALLIATIVE CARE",
    },
    {
      "EMD": "33-D-1T",
      "Description": "SUSPECTED CARDIAC OR RESPIRATORY ARREST - TRANSFER/INTERFACILITY",
    },
    {
      "EMD": "33-D-2P",
      "Description": "JUST RESUSCITATED AND/OR DEFIBRILLATED (EXTERNAL) - PALLIATIVE CARE",
    },
    {
      "EMD": "33-D-2T",
      "Description": "JUST RESUSCITATED AND/OR DEFIBRILLATED (EXTERNAL) - TRANSFER/INTERFACILITY",
    },    {
      "EMD": "34-O-1",
      "Description": "NO INJURIES (REFER TO POLICE)",
    },    {
      "EMD": "34-A-1",
      "Description": "NOT DANGEROUS INJURIES (1ST PARTY & SINGLE OCCUPANT)",
    },
    {
      "EMD": "34-D-1I",
      "Description": "HIGH MECHANISM - AUTO-MOTORCYCLE",
    },
    {
      "EMD": "34-D-1J",
      "Description": "HIGH MECHANISM - PEDESTRIAN",
    },
    {
      "EMD": "34-D-1K",
      "Description": "HIGH MECHANISM - EJECTION",
    },
    {
      "EMD": "34-D-1L",
      "Description": "HIGH MECHANISM - PINNED",
    },    {
      "EMD": "34-D-1N",
      "Description": "HIGH MECHANISM - VEHICLE OFF BRIDGE/HEIGHT",
    },
    {
      "EMD": "34-D-2",
      "Description": "UNCONSCIOUS OR NOT ALERT",
    },
    {
      "EMD": "34-D-3",
      "Description": "NOT BREATHING/INEFFECTIVE BREATHING",
    },
    {
      "EMD": "34-D-4",
      "Description": "LIFE STATUS QUESTIONABLE",
    },    {
      "EMD": "65-A-7",
      "Description": "EMS MOVE-UP/COVER (STATION ASSIGNMENT)",
    }
   ]

   // Function to get description based on EMD code
function getDescriptionByEMD(emdCode) {
    const matchingCode = data.find(item => item.EMD === emdCode);
    return matchingCode ? matchingCode.Description : "No description found";
  }
  // Usage example
const emdCode = "1-C-2";
const description = getDescriptionByEMD(emdCode);
console.log(description); // Output: DIAGNOSED AORTIC ANEURYSM