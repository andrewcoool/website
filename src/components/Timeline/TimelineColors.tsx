import { Colors } from "../../design-system/colors";

export interface TimelineColorGroup {
  selected: string,
  unselected: string
}

/**
 * Return the timeline color group corresponding to the type of experience
 */
export function getTimelineColorGroup(isEducation?: boolean) {
  if (isEducation) {
    return TimelineColors.education;
  }else{
    return TimelineColors.job;
  }
}

/**
 * Return the color associated with the state of a timeline
 * bar and its experience type.
 */
export function getTimelineColor(isEducation?: boolean, isSelected?: boolean){
  if (isSelected){
    return getTimelineColorGroup(isEducation).selected;
  }else{
    return getTimelineColorGroup(isEducation).unselected;
  }
}

/**
 * The colors used in the timeline.
 */
export const TimelineColors = {
  job: {
    selected: Colors.Wisteria,
    unselected: Colors.DarkWisteria
  } as TimelineColorGroup,
  education: {
    selected: Colors.VeryLightCobalt,
    unselected: Colors.LightCobalt
  } as TimelineColorGroup
}