// ---------------- Main StudentForm ----------------
export interface StudentForm {
  // Step 1
  name_en: string;
  name_ar: string;
  national_id: string;
  gender?: 'Male' | 'Female';
  address?: string;
  phone?: string;
  whatsapp?: string;
  email?: string;
  guardian_name_en?: string;
  guardian_name_ar?: string;
  relationship?: 'Father' | 'Mother' | 'Brother' | 'Sister' | 'Legal Guardian';
  guardian_phone?: string;
  university?: string;
  faculty?: string;
  department?: string;
  academic_level?: string;
  has_integrated_services_card?: boolean;
  medical_diagnosis_summary?: string;

  // Step 2
  motor_disabilities?: MotorDisability[];
  hearing_disabilities?: HearingDisability[];
  visual_disabilities?: VisualDisability[];
  cognitive_disabilities?: CognitiveDisability[];
  //step3
   academic_impact: AcademicImpact;
  // step4
  talents?: Talent[];
  employment_records?: EmploymentRecord[];
}



export interface MotorDisability {
  body_part: 'right_hand' | 'left_hand' | 'right_leg' | 'left_leg';
  impairment_type: 'Longitudinal Paralysis' | 'Hemiplegia' | 'Quadriplegia' | 'Monoplegia' | 'Muscular Atrophy' | 'Joint Disease' | 'Amputation' | 'Balance Issues';
  can_write: boolean;
  writing_hand?: 'Right' | 'Left';
}

export interface HearingDisability {
  affected_ear: 'Right' | 'Left' | 'Both';
  has_cochlear_implant: boolean;
  needs_new_hearing_aid: boolean;
  knows_sign_language: boolean;
}

export interface VisualDisability {
  is_blind: boolean;
  has_low_vision: boolean;
  has_color_blindness: boolean;
  has_nystagmus: boolean;
  has_strabismus: boolean;
  right_eye_degree?: string;
  left_eye_degree?: string;
  uses_electronic_reader: boolean;
  uses_braille: boolean;
  white_cane_training_needed: boolean;
}

export interface CognitiveDisability {
  has_intellectual_delay: boolean;
  has_learning_difficulties: boolean;
  has_academic_delay: boolean;
  has_hyperactivity_disorder: boolean;
  has_autism: boolean;
  has_down_syndrome: boolean;
  iq_score?: number;
  iq_test_date: Date | null;
  other_conditions?: string;
}

export interface AcademicImpact {
  transportation_issue: 'No Issues' | 'Distant Residence' | 'No Special Vehicles' | 'Unprepared Roads';
  env_no_elevators: boolean;
  env_no_internal_transport: boolean;
  env_unprepared_roads: boolean;
  env_unprepared_facilities: boolean;
  env_unprepared_lecture_halls: boolean;
  env_unprepared_bathrooms: boolean;
  env_no_companion_waiting_area: boolean;

  teaching_issue: 'No Issues' | 'Faculty Member Issues' | 'Book Delays' | 'Insufficient Support' | 'Unsuitable Specialization';
  required_equipment?: string;

  mobility: string[];   
  environment: string[]; 
  teaching: string[];    
}

export interface Talent {
  talent_description: string;
  is_still_practicing: boolean;
  practice_location?: string;
}

export interface EmploymentRecord {
  is_working: boolean;
  work_duration?: string;
}


