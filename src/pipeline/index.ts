/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/pipeline
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PipelineConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/pipeline#allow_duplicate_names Pipeline#allow_duplicate_names}
  */
  readonly allowDuplicateNames?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/pipeline#budget_policy_id Pipeline#budget_policy_id}
  */
  readonly budgetPolicyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/pipeline#catalog Pipeline#catalog}
  */
  readonly catalog?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/pipeline#cause Pipeline#cause}
  */
  readonly cause?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/pipeline#channel Pipeline#channel}
  */
  readonly channel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/pipeline#cluster_id Pipeline#cluster_id}
  */
  readonly clusterId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/pipeline#configuration Pipeline#configuration}
  */
  readonly configuration?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/pipeline#continuous Pipeline#continuous}
  */
  readonly continuous?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/pipeline#creator_user_name Pipeline#creator_user_name}
  */
  readonly creatorUserName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/pipeline#development Pipeline#development}
  */
  readonly development?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/pipeline#edition Pipeline#edition}
  */
  readonly edition?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/pipeline#expected_last_modified Pipeline#expected_last_modified}
  */
  readonly expectedLastModified?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/pipeline#health Pipeline#health}
  */
  readonly health?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/pipeline#id Pipeline#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/pipeline#last_modified Pipeline#last_modified}
  */
  readonly lastModified?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/pipeline#name Pipeline#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/pipeline#photon Pipeline#photon}
  */
  readonly photon?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/pipeline#run_as_user_name Pipeline#run_as_user_name}
  */
  readonly runAsUserName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/pipeline#schema Pipeline#schema}
  */
  readonly schema?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/pipeline#serverless Pipeline#serverless}
  */
  readonly serverless?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/pipeline#state Pipeline#state}
  */
  readonly state?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/pipeline#storage Pipeline#storage}
  */
  readonly storage?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/pipeline#target Pipeline#target}
  */
  readonly target?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/pipeline#url Pipeline#url}
  */
  readonly url?: string;
  /**
  * cluster block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/pipeline#cluster Pipeline#cluster}
  */
  readonly cluster?: PipelineCluster[] | cdktf.IResolvable;
  /**
  * deployment block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/pipeline#deployment Pipeline#deployment}
  */
  readonly deployment?: PipelineDeployment;
  /**
  * event_log block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/pipeline#event_log Pipeline#event_log}
  */
  readonly eventLog?: PipelineEventLog;
  /**
  * filters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/pipeline#filters Pipeline#filters}
  */
  readonly filters?: PipelineFilters;
  /**
  * gateway_definition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/pipeline#gateway_definition Pipeline#gateway_definition}
  */
  readonly gatewayDefinition?: PipelineGatewayDefinition;
  /**
  * ingestion_definition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/pipeline#ingestion_definition Pipeline#ingestion_definition}
  */
  readonly ingestionDefinition?: PipelineIngestionDefinition;
  /**
  * latest_updates block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/pipeline#latest_updates Pipeline#latest_updates}
  */
  readonly latestUpdates?: PipelineLatestUpdates[] | cdktf.IResolvable;
  /**
  * library block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/pipeline#library Pipeline#library}
  */
  readonly library?: PipelineLibrary[] | cdktf.IResolvable;
  /**
  * notification block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/pipeline#notification Pipeline#notification}
  */
  readonly notification?: PipelineNotification[] | cdktf.IResolvable;
  /**
  * restart_window block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/pipeline#restart_window Pipeline#restart_window}
  */
  readonly restartWindow?: PipelineRestartWindow;
  /**
  * run_as block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/pipeline#run_as Pipeline#run_as}
  */
  readonly runAs?: PipelineRunAs;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/pipeline#timeouts Pipeline#timeouts}
  */
  readonly timeouts?: PipelineTimeouts;
  /**
  * trigger block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/pipeline#trigger Pipeline#trigger}
  */
  readonly trigger?: PipelineTrigger;
}
export interface PipelineClusterAutoscale {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/pipeline#max_workers Pipeline#max_workers}
  */
  readonly maxWorkers: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/pipeline#min_workers Pipeline#min_workers}
  */
  readonly minWorkers: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/pipeline#mode Pipeline#mode}
  */
  readonly mode?: string;
}

export function pipelineClusterAutoscaleToTerraform(struct?: PipelineClusterAutoscaleOutputReference | PipelineClusterAutoscale): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_workers: cdktf.numberToTerraform(struct!.maxWorkers),
    min_workers: cdktf.numberToTerraform(struct!.minWorkers),
    mode: cdktf.stringToTerraform(struct!.mode),
  }
}


export function pipelineClusterAutoscaleToHclTerraform(struct?: PipelineClusterAutoscaleOutputReference | PipelineClusterAutoscale): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_workers: {
      value: cdktf.numberToHclTerraform(struct!.maxWorkers),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_workers: {
      value: cdktf.numberToHclTerraform(struct!.minWorkers),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mode: {
      value: cdktf.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PipelineClusterAutoscaleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PipelineClusterAutoscale | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxWorkers !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxWorkers = this._maxWorkers;
    }
    if (this._minWorkers !== undefined) {
      hasAnyValues = true;
      internalValueResult.minWorkers = this._minWorkers;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PipelineClusterAutoscale | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._maxWorkers = undefined;
      this._minWorkers = undefined;
      this._mode = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._maxWorkers = value.maxWorkers;
      this._minWorkers = value.minWorkers;
      this._mode = value.mode;
    }
  }

  // max_workers - computed: false, optional: false, required: true
  private _maxWorkers?: number; 
  public get maxWorkers() {
    return this.getNumberAttribute('max_workers');
  }
  public set maxWorkers(value: number) {
    this._maxWorkers = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxWorkersInput() {
    return this._maxWorkers;
  }

  // min_workers - computed: false, optional: false, required: true
  private _minWorkers?: number; 
  public get minWorkers() {
    return this.getNumberAttribute('min_workers');
  }
  public set minWorkers(value: number) {
    this._minWorkers = value;
  }
  // Temporarily expose input value. Use with caution.
  public get minWorkersInput() {
    return this._minWorkers;
  }

  // mode - computed: false, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }
}
export interface PipelineClusterAwsAttributes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/pipeline#availability Pipeline#availability}
  */
  readonly availability?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/pipeline#ebs_volume_count Pipeline#ebs_volume_count}
  */
  readonly ebsVolumeCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/pipeline#ebs_volume_iops Pipeline#ebs_volume_iops}
  */
  readonly ebsVolumeIops?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/pipeline#ebs_volume_size Pipeline#ebs_volume_size}
  */
  readonly ebsVolumeSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/pipeline#ebs_volume_throughput Pipeline#ebs_volume_throughput}
  */
  readonly ebsVolumeThroughput?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/pipeline#ebs_volume_type Pipeline#ebs_volume_type}
  */
  readonly ebsVolumeType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/pipeline#first_on_demand Pipeline#first_on_demand}
  */
  readonly firstOnDemand?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/pipeline#instance_profile_arn Pipeline#instance_profile_arn}
  */
  readonly instanceProfileArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/pipeline#spot_bid_price_percent Pipeline#spot_bid_price_percent}
  */
  readonly spotBidPricePercent?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/pipeline#zone_id Pipeline#zone_id}
  */
  readonly zoneId?: string;
}

export function pipelineClusterAwsAttributesToTerraform(struct?: PipelineClusterAwsAttributesOutputReference | PipelineClusterAwsAttributes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    availability: cdktf.stringToTerraform(struct!.availability),
    ebs_volume_count: cdktf.numberToTerraform(struct!.ebsVolumeCount),
    ebs_volume_iops: cdktf.numberToTerraform(struct!.ebsVolumeIops),
    ebs_volume_size: cdktf.numberToTerraform(struct!.ebsVolumeSize),
    ebs_volume_throughput: cdktf.numberToTerraform(struct!.ebsVolumeThroughput),
    ebs_volume_type: cdktf.stringToTerraform(struct!.ebsVolumeType),
    first_on_demand: cdktf.numberToTerraform(struct!.firstOnDemand),
    instance_profile_arn: cdktf.stringToTerraform(struct!.instanceProfileArn),
    spot_bid_price_percent: cdktf.numberToTerraform(struct!.spotBidPricePercent),
    zone_id: cdktf.stringToTerraform(struct!.zoneId),
  }
}


export function pipelineClusterAwsAttributesToHclTerraform(struct?: PipelineClusterAwsAttributesOutputReference | PipelineClusterAwsAttributes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    availability: {
      value: cdktf.stringToHclTerraform(struct!.availability),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ebs_volume_count: {
      value: cdktf.numberToHclTerraform(struct!.ebsVolumeCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ebs_volume_iops: {
      value: cdktf.numberToHclTerraform(struct!.ebsVolumeIops),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ebs_volume_size: {
      value: cdktf.numberToHclTerraform(struct!.ebsVolumeSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ebs_volume_throughput: {
      value: cdktf.numberToHclTerraform(struct!.ebsVolumeThroughput),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ebs_volume_type: {
      value: cdktf.stringToHclTerraform(struct!.ebsVolumeType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    first_on_demand: {
      value: cdktf.numberToHclTerraform(struct!.firstOnDemand),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    instance_profile_arn: {
      value: cdktf.stringToHclTerraform(struct!.instanceProfileArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    spot_bid_price_percent: {
      value: cdktf.numberToHclTerraform(struct!.spotBidPricePercent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    zone_id: {
      value: cdktf.stringToHclTerraform(struct!.zoneId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PipelineClusterAwsAttributesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PipelineClusterAwsAttributes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._availability !== undefined) {
      hasAnyValues = true;
      internalValueResult.availability = this._availability;
    }
    if (this._ebsVolumeCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.ebsVolumeCount = this._ebsVolumeCount;
    }
    if (this._ebsVolumeIops !== undefined) {
      hasAnyValues = true;
      internalValueResult.ebsVolumeIops = this._ebsVolumeIops;
    }
    if (this._ebsVolumeSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.ebsVolumeSize = this._ebsVolumeSize;
    }
    if (this._ebsVolumeThroughput !== undefined) {
      hasAnyValues = true;
      internalValueResult.ebsVolumeThroughput = this._ebsVolumeThroughput;
    }
    if (this._ebsVolumeType !== undefined) {
      hasAnyValues = true;
      internalValueResult.ebsVolumeType = this._ebsVolumeType;
    }
    if (this._firstOnDemand !== undefined) {
      hasAnyValues = true;
      internalValueResult.firstOnDemand = this._firstOnDemand;
    }
    if (this._instanceProfileArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceProfileArn = this._instanceProfileArn;
    }
    if (this._spotBidPricePercent !== undefined) {
      hasAnyValues = true;
      internalValueResult.spotBidPricePercent = this._spotBidPricePercent;
    }
    if (this._zoneId !== undefined) {
      hasAnyValues = true;
      internalValueResult.zoneId = this._zoneId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PipelineClusterAwsAttributes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._availability = undefined;
      this._ebsVolumeCount = undefined;
      this._ebsVolumeIops = undefined;
      this._ebsVolumeSize = undefined;
      this._ebsVolumeThroughput = undefined;
      this._ebsVolumeType = undefined;
      this._firstOnDemand = undefined;
      this._instanceProfileArn = undefined;
      this._spotBidPricePercent = undefined;
      this._zoneId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._availability = value.availability;
      this._ebsVolumeCount = value.ebsVolumeCount;
      this._ebsVolumeIops = value.ebsVolumeIops;
      this._ebsVolumeSize = value.ebsVolumeSize;
      this._ebsVolumeThroughput = value.ebsVolumeThroughput;
      this._ebsVolumeType = value.ebsVolumeType;
      this._firstOnDemand = value.firstOnDemand;
      this._instanceProfileArn = value.instanceProfileArn;
      this._spotBidPricePercent = value.spotBidPricePercent;
      this._zoneId = value.zoneId;
    }
  }

  // availability - computed: false, optional: true, required: false
  private _availability?: string; 
  public get availability() {
    return this.getStringAttribute('availability');
  }
  public set availability(value: string) {
    this._availability = value;
  }
  public resetAvailability() {
    this._availability = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityInput() {
    return this._availability;
  }

  // ebs_volume_count - computed: false, optional: true, required: false
  private _ebsVolumeCount?: number; 
  public get ebsVolumeCount() {
    return this.getNumberAttribute('ebs_volume_count');
  }
  public set ebsVolumeCount(value: number) {
    this._ebsVolumeCount = value;
  }
  public resetEbsVolumeCount() {
    this._ebsVolumeCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ebsVolumeCountInput() {
    return this._ebsVolumeCount;
  }

  // ebs_volume_iops - computed: false, optional: true, required: false
  private _ebsVolumeIops?: number; 
  public get ebsVolumeIops() {
    return this.getNumberAttribute('ebs_volume_iops');
  }
  public set ebsVolumeIops(value: number) {
    this._ebsVolumeIops = value;
  }
  public resetEbsVolumeIops() {
    this._ebsVolumeIops = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ebsVolumeIopsInput() {
    return this._ebsVolumeIops;
  }

  // ebs_volume_size - computed: false, optional: true, required: false
  private _ebsVolumeSize?: number; 
  public get ebsVolumeSize() {
    return this.getNumberAttribute('ebs_volume_size');
  }
  public set ebsVolumeSize(value: number) {
    this._ebsVolumeSize = value;
  }
  public resetEbsVolumeSize() {
    this._ebsVolumeSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ebsVolumeSizeInput() {
    return this._ebsVolumeSize;
  }

  // ebs_volume_throughput - computed: false, optional: true, required: false
  private _ebsVolumeThroughput?: number; 
  public get ebsVolumeThroughput() {
    return this.getNumberAttribute('ebs_volume_throughput');
  }
  public set ebsVolumeThroughput(value: number) {
    this._ebsVolumeThroughput = value;
  }
  public resetEbsVolumeThroughput() {
    this._ebsVolumeThroughput = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ebsVolumeThroughputInput() {
    return this._ebsVolumeThroughput;
  }

  // ebs_volume_type - computed: false, optional: true, required: false
  private _ebsVolumeType?: string; 
  public get ebsVolumeType() {
    return this.getStringAttribute('ebs_volume_type');
  }
  public set ebsVolumeType(value: string) {
    this._ebsVolumeType = value;
  }
  public resetEbsVolumeType() {
    this._ebsVolumeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ebsVolumeTypeInput() {
    return this._ebsVolumeType;
  }

  // first_on_demand - computed: false, optional: true, required: false
  private _firstOnDemand?: number; 
  public get firstOnDemand() {
    return this.getNumberAttribute('first_on_demand');
  }
  public set firstOnDemand(value: number) {
    this._firstOnDemand = value;
  }
  public resetFirstOnDemand() {
    this._firstOnDemand = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firstOnDemandInput() {
    return this._firstOnDemand;
  }

  // instance_profile_arn - computed: false, optional: true, required: false
  private _instanceProfileArn?: string; 
  public get instanceProfileArn() {
    return this.getStringAttribute('instance_profile_arn');
  }
  public set instanceProfileArn(value: string) {
    this._instanceProfileArn = value;
  }
  public resetInstanceProfileArn() {
    this._instanceProfileArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceProfileArnInput() {
    return this._instanceProfileArn;
  }

  // spot_bid_price_percent - computed: false, optional: true, required: false
  private _spotBidPricePercent?: number; 
  public get spotBidPricePercent() {
    return this.getNumberAttribute('spot_bid_price_percent');
  }
  public set spotBidPricePercent(value: number) {
    this._spotBidPricePercent = value;
  }
  public resetSpotBidPricePercent() {
    this._spotBidPricePercent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spotBidPricePercentInput() {
    return this._spotBidPricePercent;
  }

  // zone_id - computed: false, optional: true, required: false
  private _zoneId?: string; 
  public get zoneId() {
    return this.getStringAttribute('zone_id');
  }
  public set zoneId(value: string) {
    this._zoneId = value;
  }
  public resetZoneId() {
    this._zoneId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneIdInput() {
    return this._zoneId;
  }
}
export interface PipelineClusterAzureAttributesLogAnalyticsInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/pipeline#log_analytics_primary_key Pipeline#log_analytics_primary_key}
  */
  readonly logAnalyticsPrimaryKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/pipeline#log_analytics_workspace_id Pipeline#log_analytics_workspace_id}
  */
  readonly logAnalyticsWorkspaceId?: string;
}

export function pipelineClusterAzureAttributesLogAnalyticsInfoToTerraform(struct?: PipelineClusterAzureAttributesLogAnalyticsInfoOutputReference | PipelineClusterAzureAttributesLogAnalyticsInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    log_analytics_primary_key: cdktf.stringToTerraform(struct!.logAnalyticsPrimaryKey),
    log_analytics_workspace_id: cdktf.stringToTerraform(struct!.logAnalyticsWorkspaceId),
  }
}


export function pipelineClusterAzureAttributesLogAnalyticsInfoToHclTerraform(struct?: PipelineClusterAzureAttributesLogAnalyticsInfoOutputReference | PipelineClusterAzureAttributesLogAnalyticsInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    log_analytics_primary_key: {
      value: cdktf.stringToHclTerraform(struct!.logAnalyticsPrimaryKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    log_analytics_workspace_id: {
      value: cdktf.stringToHclTerraform(struct!.logAnalyticsWorkspaceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PipelineClusterAzureAttributesLogAnalyticsInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PipelineClusterAzureAttributesLogAnalyticsInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._logAnalyticsPrimaryKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.logAnalyticsPrimaryKey = this._logAnalyticsPrimaryKey;
    }
    if (this._logAnalyticsWorkspaceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.logAnalyticsWorkspaceId = this._logAnalyticsWorkspaceId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PipelineClusterAzureAttributesLogAnalyticsInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._logAnalyticsPrimaryKey = undefined;
      this._logAnalyticsWorkspaceId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._logAnalyticsPrimaryKey = value.logAnalyticsPrimaryKey;
      this._logAnalyticsWorkspaceId = value.logAnalyticsWorkspaceId;
    }
  }

  // log_analytics_primary_key - computed: false, optional: true, required: false
  private _logAnalyticsPrimaryKey?: string; 
  public get logAnalyticsPrimaryKey() {
    return this.getStringAttribute('log_analytics_primary_key');
  }
  public set logAnalyticsPrimaryKey(value: string) {
    this._logAnalyticsPrimaryKey = value;
  }
  public resetLogAnalyticsPrimaryKey() {
    this._logAnalyticsPrimaryKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logAnalyticsPrimaryKeyInput() {
    return this._logAnalyticsPrimaryKey;
  }

  // log_analytics_workspace_id - computed: false, optional: true, required: false
  private _logAnalyticsWorkspaceId?: string; 
  public get logAnalyticsWorkspaceId() {
    return this.getStringAttribute('log_analytics_workspace_id');
  }
  public set logAnalyticsWorkspaceId(value: string) {
    this._logAnalyticsWorkspaceId = value;
  }
  public resetLogAnalyticsWorkspaceId() {
    this._logAnalyticsWorkspaceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logAnalyticsWorkspaceIdInput() {
    return this._logAnalyticsWorkspaceId;
  }
}
export interface PipelineClusterAzureAttributes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/pipeline#availability Pipeline#availability}
  */
  readonly availability?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/pipeline#first_on_demand Pipeline#first_on_demand}
  */
  readonly firstOnDemand?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/pipeline#spot_bid_max_price Pipeline#spot_bid_max_price}
  */
  readonly spotBidMaxPrice?: number;
  /**
  * log_analytics_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/pipeline#log_analytics_info Pipeline#log_analytics_info}
  */
  readonly logAnalyticsInfo?: PipelineClusterAzureAttributesLogAnalyticsInfo;
}

export function pipelineClusterAzureAttributesToTerraform(struct?: PipelineClusterAzureAttributesOutputReference | PipelineClusterAzureAttributes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    availability: cdktf.stringToTerraform(struct!.availability),
    first_on_demand: cdktf.numberToTerraform(struct!.firstOnDemand),
    spot_bid_max_price: cdktf.numberToTerraform(struct!.spotBidMaxPrice),
    log_analytics_info: pipelineClusterAzureAttributesLogAnalyticsInfoToTerraform(struct!.logAnalyticsInfo),
  }
}


export function pipelineClusterAzureAttributesToHclTerraform(struct?: PipelineClusterAzureAttributesOutputReference | PipelineClusterAzureAttributes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    availability: {
      value: cdktf.stringToHclTerraform(struct!.availability),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    first_on_demand: {
      value: cdktf.numberToHclTerraform(struct!.firstOnDemand),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    spot_bid_max_price: {
      value: cdktf.numberToHclTerraform(struct!.spotBidMaxPrice),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    log_analytics_info: {
      value: pipelineClusterAzureAttributesLogAnalyticsInfoToHclTerraform(struct!.logAnalyticsInfo),
      isBlock: true,
      type: "list",
      storageClassType: "PipelineClusterAzureAttributesLogAnalyticsInfoList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PipelineClusterAzureAttributesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PipelineClusterAzureAttributes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._availability !== undefined) {
      hasAnyValues = true;
      internalValueResult.availability = this._availability;
    }
    if (this._firstOnDemand !== undefined) {
      hasAnyValues = true;
      internalValueResult.firstOnDemand = this._firstOnDemand;
    }
    if (this._spotBidMaxPrice !== undefined) {
      hasAnyValues = true;
      internalValueResult.spotBidMaxPrice = this._spotBidMaxPrice;
    }
    if (this._logAnalyticsInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.logAnalyticsInfo = this._logAnalyticsInfo?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PipelineClusterAzureAttributes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._availability = undefined;
      this._firstOnDemand = undefined;
      this._spotBidMaxPrice = undefined;
      this._logAnalyticsInfo.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._availability = value.availability;
      this._firstOnDemand = value.firstOnDemand;
      this._spotBidMaxPrice = value.spotBidMaxPrice;
      this._logAnalyticsInfo.internalValue = value.logAnalyticsInfo;
    }
  }

  // availability - computed: false, optional: true, required: false
  private _availability?: string; 
  public get availability() {
    return this.getStringAttribute('availability');
  }
  public set availability(value: string) {
    this._availability = value;
  }
  public resetAvailability() {
    this._availability = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityInput() {
    return this._availability;
  }

  // first_on_demand - computed: false, optional: true, required: false
  private _firstOnDemand?: number; 
  public get firstOnDemand() {
    return this.getNumberAttribute('first_on_demand');
  }
  public set firstOnDemand(value: number) {
    this._firstOnDemand = value;
  }
  public resetFirstOnDemand() {
    this._firstOnDemand = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firstOnDemandInput() {
    return this._firstOnDemand;
  }

  // spot_bid_max_price - computed: false, optional: true, required: false
  private _spotBidMaxPrice?: number; 
  public get spotBidMaxPrice() {
    return this.getNumberAttribute('spot_bid_max_price');
  }
  public set spotBidMaxPrice(value: number) {
    this._spotBidMaxPrice = value;
  }
  public resetSpotBidMaxPrice() {
    this._spotBidMaxPrice = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spotBidMaxPriceInput() {
    return this._spotBidMaxPrice;
  }

  // log_analytics_info - computed: false, optional: true, required: false
  private _logAnalyticsInfo = new PipelineClusterAzureAttributesLogAnalyticsInfoOutputReference(this, "log_analytics_info");
  public get logAnalyticsInfo() {
    return this._logAnalyticsInfo;
  }
  public putLogAnalyticsInfo(value: PipelineClusterAzureAttributesLogAnalyticsInfo) {
    this._logAnalyticsInfo.internalValue = value;
  }
  public resetLogAnalyticsInfo() {
    this._logAnalyticsInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logAnalyticsInfoInput() {
    return this._logAnalyticsInfo.internalValue;
  }
}
export interface PipelineClusterClusterLogConfDbfs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/pipeline#destination Pipeline#destination}
  */
  readonly destination: string;
}

export function pipelineClusterClusterLogConfDbfsToTerraform(struct?: PipelineClusterClusterLogConfDbfsOutputReference | PipelineClusterClusterLogConfDbfs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    destination: cdktf.stringToTerraform(struct!.destination),
  }
}


export function pipelineClusterClusterLogConfDbfsToHclTerraform(struct?: PipelineClusterClusterLogConfDbfsOutputReference | PipelineClusterClusterLogConfDbfs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    destination: {
      value: cdktf.stringToHclTerraform(struct!.destination),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PipelineClusterClusterLogConfDbfsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PipelineClusterClusterLogConfDbfs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destination !== undefined) {
      hasAnyValues = true;
      internalValueResult.destination = this._destination;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PipelineClusterClusterLogConfDbfs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._destination = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._destination = value.destination;
    }
  }

  // destination - computed: false, optional: false, required: true
  private _destination?: string; 
  public get destination() {
    return this.getStringAttribute('destination');
  }
  public set destination(value: string) {
    this._destination = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationInput() {
    return this._destination;
  }
}
export interface PipelineClusterClusterLogConfS3 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/pipeline#canned_acl Pipeline#canned_acl}
  */
  readonly cannedAcl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/pipeline#destination Pipeline#destination}
  */
  readonly destination: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/pipeline#enable_encryption Pipeline#enable_encryption}
  */
  readonly enableEncryption?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/pipeline#encryption_type Pipeline#encryption_type}
  */
  readonly encryptionType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/pipeline#endpoint Pipeline#endpoint}
  */
  readonly endpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/pipeline#kms_key Pipeline#kms_key}
  */
  readonly kmsKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/pipeline#region Pipeline#region}
  */
  readonly region?: string;
}

export function pipelineClusterClusterLogConfS3ToTerraform(struct?: PipelineClusterClusterLogConfS3OutputReference | PipelineClusterClusterLogConfS3): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    canned_acl: cdktf.stringToTerraform(struct!.cannedAcl),
    destination: cdktf.stringToTerraform(struct!.destination),
    enable_encryption: cdktf.booleanToTerraform(struct!.enableEncryption),
    encryption_type: cdktf.stringToTerraform(struct!.encryptionType),
    endpoint: cdktf.stringToTerraform(struct!.endpoint),
    kms_key: cdktf.stringToTerraform(struct!.kmsKey),
    region: cdktf.stringToTerraform(struct!.region),
  }
}


export function pipelineClusterClusterLogConfS3ToHclTerraform(struct?: PipelineClusterClusterLogConfS3OutputReference | PipelineClusterClusterLogConfS3): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    canned_acl: {
      value: cdktf.stringToHclTerraform(struct!.cannedAcl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    destination: {
      value: cdktf.stringToHclTerraform(struct!.destination),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enable_encryption: {
      value: cdktf.booleanToHclTerraform(struct!.enableEncryption),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    encryption_type: {
      value: cdktf.stringToHclTerraform(struct!.encryptionType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    endpoint: {
      value: cdktf.stringToHclTerraform(struct!.endpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kms_key: {
      value: cdktf.stringToHclTerraform(struct!.kmsKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    region: {
      value: cdktf.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PipelineClusterClusterLogConfS3OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PipelineClusterClusterLogConfS3 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cannedAcl !== undefined) {
      hasAnyValues = true;
      internalValueResult.cannedAcl = this._cannedAcl;
    }
    if (this._destination !== undefined) {
      hasAnyValues = true;
      internalValueResult.destination = this._destination;
    }
    if (this._enableEncryption !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableEncryption = this._enableEncryption;
    }
    if (this._encryptionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryptionType = this._encryptionType;
    }
    if (this._endpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpoint = this._endpoint;
    }
    if (this._kmsKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKey = this._kmsKey;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PipelineClusterClusterLogConfS3 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cannedAcl = undefined;
      this._destination = undefined;
      this._enableEncryption = undefined;
      this._encryptionType = undefined;
      this._endpoint = undefined;
      this._kmsKey = undefined;
      this._region = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cannedAcl = value.cannedAcl;
      this._destination = value.destination;
      this._enableEncryption = value.enableEncryption;
      this._encryptionType = value.encryptionType;
      this._endpoint = value.endpoint;
      this._kmsKey = value.kmsKey;
      this._region = value.region;
    }
  }

  // canned_acl - computed: false, optional: true, required: false
  private _cannedAcl?: string; 
  public get cannedAcl() {
    return this.getStringAttribute('canned_acl');
  }
  public set cannedAcl(value: string) {
    this._cannedAcl = value;
  }
  public resetCannedAcl() {
    this._cannedAcl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cannedAclInput() {
    return this._cannedAcl;
  }

  // destination - computed: false, optional: false, required: true
  private _destination?: string; 
  public get destination() {
    return this.getStringAttribute('destination');
  }
  public set destination(value: string) {
    this._destination = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationInput() {
    return this._destination;
  }

  // enable_encryption - computed: false, optional: true, required: false
  private _enableEncryption?: boolean | cdktf.IResolvable; 
  public get enableEncryption() {
    return this.getBooleanAttribute('enable_encryption');
  }
  public set enableEncryption(value: boolean | cdktf.IResolvable) {
    this._enableEncryption = value;
  }
  public resetEnableEncryption() {
    this._enableEncryption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableEncryptionInput() {
    return this._enableEncryption;
  }

  // encryption_type - computed: false, optional: true, required: false
  private _encryptionType?: string; 
  public get encryptionType() {
    return this.getStringAttribute('encryption_type');
  }
  public set encryptionType(value: string) {
    this._encryptionType = value;
  }
  public resetEncryptionType() {
    this._encryptionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionTypeInput() {
    return this._encryptionType;
  }

  // endpoint - computed: false, optional: true, required: false
  private _endpoint?: string; 
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }
  public set endpoint(value: string) {
    this._endpoint = value;
  }
  public resetEndpoint() {
    this._endpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointInput() {
    return this._endpoint;
  }

  // kms_key - computed: false, optional: true, required: false
  private _kmsKey?: string; 
  public get kmsKey() {
    return this.getStringAttribute('kms_key');
  }
  public set kmsKey(value: string) {
    this._kmsKey = value;
  }
  public resetKmsKey() {
    this._kmsKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyInput() {
    return this._kmsKey;
  }

  // region - computed: false, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }
}
export interface PipelineClusterClusterLogConfVolumes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/pipeline#destination Pipeline#destination}
  */
  readonly destination: string;
}

export function pipelineClusterClusterLogConfVolumesToTerraform(struct?: PipelineClusterClusterLogConfVolumesOutputReference | PipelineClusterClusterLogConfVolumes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    destination: cdktf.stringToTerraform(struct!.destination),
  }
}


export function pipelineClusterClusterLogConfVolumesToHclTerraform(struct?: PipelineClusterClusterLogConfVolumesOutputReference | PipelineClusterClusterLogConfVolumes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    destination: {
      value: cdktf.stringToHclTerraform(struct!.destination),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PipelineClusterClusterLogConfVolumesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PipelineClusterClusterLogConfVolumes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destination !== undefined) {
      hasAnyValues = true;
      internalValueResult.destination = this._destination;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PipelineClusterClusterLogConfVolumes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._destination = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._destination = value.destination;
    }
  }

  // destination - computed: false, optional: false, required: true
  private _destination?: string; 
  public get destination() {
    return this.getStringAttribute('destination');
  }
  public set destination(value: string) {
    this._destination = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationInput() {
    return this._destination;
  }
}
export interface PipelineClusterClusterLogConf {
  /**
  * dbfs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/pipeline#dbfs Pipeline#dbfs}
  */
  readonly dbfs?: PipelineClusterClusterLogConfDbfs;
  /**
  * s3 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/pipeline#s3 Pipeline#s3}
  */
  readonly s3?: PipelineClusterClusterLogConfS3;
  /**
  * volumes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/pipeline#volumes Pipeline#volumes}
  */
  readonly volumes?: PipelineClusterClusterLogConfVolumes;
}

export function pipelineClusterClusterLogConfToTerraform(struct?: PipelineClusterClusterLogConfOutputReference | PipelineClusterClusterLogConf): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dbfs: pipelineClusterClusterLogConfDbfsToTerraform(struct!.dbfs),
    s3: pipelineClusterClusterLogConfS3ToTerraform(struct!.s3),
    volumes: pipelineClusterClusterLogConfVolumesToTerraform(struct!.volumes),
  }
}


export function pipelineClusterClusterLogConfToHclTerraform(struct?: PipelineClusterClusterLogConfOutputReference | PipelineClusterClusterLogConf): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dbfs: {
      value: pipelineClusterClusterLogConfDbfsToHclTerraform(struct!.dbfs),
      isBlock: true,
      type: "list",
      storageClassType: "PipelineClusterClusterLogConfDbfsList",
    },
    s3: {
      value: pipelineClusterClusterLogConfS3ToHclTerraform(struct!.s3),
      isBlock: true,
      type: "list",
      storageClassType: "PipelineClusterClusterLogConfS3List",
    },
    volumes: {
      value: pipelineClusterClusterLogConfVolumesToHclTerraform(struct!.volumes),
      isBlock: true,
      type: "list",
      storageClassType: "PipelineClusterClusterLogConfVolumesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PipelineClusterClusterLogConfOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PipelineClusterClusterLogConf | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dbfs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dbfs = this._dbfs?.internalValue;
    }
    if (this._s3?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3 = this._s3?.internalValue;
    }
    if (this._volumes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumes = this._volumes?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PipelineClusterClusterLogConf | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dbfs.internalValue = undefined;
      this._s3.internalValue = undefined;
      this._volumes.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dbfs.internalValue = value.dbfs;
      this._s3.internalValue = value.s3;
      this._volumes.internalValue = value.volumes;
    }
  }

  // dbfs - computed: false, optional: true, required: false
  private _dbfs = new PipelineClusterClusterLogConfDbfsOutputReference(this, "dbfs");
  public get dbfs() {
    return this._dbfs;
  }
  public putDbfs(value: PipelineClusterClusterLogConfDbfs) {
    this._dbfs.internalValue = value;
  }
  public resetDbfs() {
    this._dbfs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbfsInput() {
    return this._dbfs.internalValue;
  }

  // s3 - computed: false, optional: true, required: false
  private _s3 = new PipelineClusterClusterLogConfS3OutputReference(this, "s3");
  public get s3() {
    return this._s3;
  }
  public putS3(value: PipelineClusterClusterLogConfS3) {
    this._s3.internalValue = value;
  }
  public resetS3() {
    this._s3.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3Input() {
    return this._s3.internalValue;
  }

  // volumes - computed: false, optional: true, required: false
  private _volumes = new PipelineClusterClusterLogConfVolumesOutputReference(this, "volumes");
  public get volumes() {
    return this._volumes;
  }
  public putVolumes(value: PipelineClusterClusterLogConfVolumes) {
    this._volumes.internalValue = value;
  }
  public resetVolumes() {
    this._volumes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumesInput() {
    return this._volumes.internalValue;
  }
}
export interface PipelineClusterGcpAttributes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/pipeline#availability Pipeline#availability}
  */
  readonly availability?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/pipeline#google_service_account Pipeline#google_service_account}
  */
  readonly googleServiceAccount?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/pipeline#local_ssd_count Pipeline#local_ssd_count}
  */
  readonly localSsdCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/pipeline#zone_id Pipeline#zone_id}
  */
  readonly zoneId?: string;
}

export function pipelineClusterGcpAttributesToTerraform(struct?: PipelineClusterGcpAttributesOutputReference | PipelineClusterGcpAttributes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    availability: cdktf.stringToTerraform(struct!.availability),
    google_service_account: cdktf.stringToTerraform(struct!.googleServiceAccount),
    local_ssd_count: cdktf.numberToTerraform(struct!.localSsdCount),
    zone_id: cdktf.stringToTerraform(struct!.zoneId),
  }
}


export function pipelineClusterGcpAttributesToHclTerraform(struct?: PipelineClusterGcpAttributesOutputReference | PipelineClusterGcpAttributes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    availability: {
      value: cdktf.stringToHclTerraform(struct!.availability),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    google_service_account: {
      value: cdktf.stringToHclTerraform(struct!.googleServiceAccount),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    local_ssd_count: {
      value: cdktf.numberToHclTerraform(struct!.localSsdCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    zone_id: {
      value: cdktf.stringToHclTerraform(struct!.zoneId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PipelineClusterGcpAttributesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PipelineClusterGcpAttributes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._availability !== undefined) {
      hasAnyValues = true;
      internalValueResult.availability = this._availability;
    }
    if (this._googleServiceAccount !== undefined) {
      hasAnyValues = true;
      internalValueResult.googleServiceAccount = this._googleServiceAccount;
    }
    if (this._localSsdCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.localSsdCount = this._localSsdCount;
    }
    if (this._zoneId !== undefined) {
      hasAnyValues = true;
      internalValueResult.zoneId = this._zoneId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PipelineClusterGcpAttributes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._availability = undefined;
      this._googleServiceAccount = undefined;
      this._localSsdCount = undefined;
      this._zoneId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._availability = value.availability;
      this._googleServiceAccount = value.googleServiceAccount;
      this._localSsdCount = value.localSsdCount;
      this._zoneId = value.zoneId;
    }
  }

  // availability - computed: false, optional: true, required: false
  private _availability?: string; 
  public get availability() {
    return this.getStringAttribute('availability');
  }
  public set availability(value: string) {
    this._availability = value;
  }
  public resetAvailability() {
    this._availability = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityInput() {
    return this._availability;
  }

  // google_service_account - computed: false, optional: true, required: false
  private _googleServiceAccount?: string; 
  public get googleServiceAccount() {
    return this.getStringAttribute('google_service_account');
  }
  public set googleServiceAccount(value: string) {
    this._googleServiceAccount = value;
  }
  public resetGoogleServiceAccount() {
    this._googleServiceAccount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get googleServiceAccountInput() {
    return this._googleServiceAccount;
  }

  // local_ssd_count - computed: false, optional: true, required: false
  private _localSsdCount?: number; 
  public get localSsdCount() {
    return this.getNumberAttribute('local_ssd_count');
  }
  public set localSsdCount(value: number) {
    this._localSsdCount = value;
  }
  public resetLocalSsdCount() {
    this._localSsdCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localSsdCountInput() {
    return this._localSsdCount;
  }

  // zone_id - computed: false, optional: true, required: false
  private _zoneId?: string; 
  public get zoneId() {
    return this.getStringAttribute('zone_id');
  }
  public set zoneId(value: string) {
    this._zoneId = value;
  }
  public resetZoneId() {
    this._zoneId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneIdInput() {
    return this._zoneId;
  }
}
export interface PipelineClusterInitScriptsAbfss {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/pipeline#destination Pipeline#destination}
  */
  readonly destination: string;
}

export function pipelineClusterInitScriptsAbfssToTerraform(struct?: PipelineClusterInitScriptsAbfssOutputReference | PipelineClusterInitScriptsAbfss): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    destination: cdktf.stringToTerraform(struct!.destination),
  }
}


export function pipelineClusterInitScriptsAbfssToHclTerraform(struct?: PipelineClusterInitScriptsAbfssOutputReference | PipelineClusterInitScriptsAbfss): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    destination: {
      value: cdktf.stringToHclTerraform(struct!.destination),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PipelineClusterInitScriptsAbfssOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PipelineClusterInitScriptsAbfss | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destination !== undefined) {
      hasAnyValues = true;
      internalValueResult.destination = this._destination;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PipelineClusterInitScriptsAbfss | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._destination = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._destination = value.destination;
    }
  }

  // destination - computed: false, optional: false, required: true
  private _destination?: string; 
  public get destination() {
    return this.getStringAttribute('destination');
  }
  public set destination(value: string) {
    this._destination = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationInput() {
    return this._destination;
  }
}
export interface PipelineClusterInitScriptsDbfs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/pipeline#destination Pipeline#destination}
  */
  readonly destination: string;
}

export function pipelineClusterInitScriptsDbfsToTerraform(struct?: PipelineClusterInitScriptsDbfsOutputReference | PipelineClusterInitScriptsDbfs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    destination: cdktf.stringToTerraform(struct!.destination),
  }
}


export function pipelineClusterInitScriptsDbfsToHclTerraform(struct?: PipelineClusterInitScriptsDbfsOutputReference | PipelineClusterInitScriptsDbfs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    destination: {
      value: cdktf.stringToHclTerraform(struct!.destination),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PipelineClusterInitScriptsDbfsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PipelineClusterInitScriptsDbfs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destination !== undefined) {
      hasAnyValues = true;
      internalValueResult.destination = this._destination;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PipelineClusterInitScriptsDbfs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._destination = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._destination = value.destination;
    }
  }

  // destination - computed: false, optional: false, required: true
  private _destination?: string; 
  public get destination() {
    return this.getStringAttribute('destination');
  }
  public set destination(value: string) {
    this._destination = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationInput() {
    return this._destination;
  }
}
export interface PipelineClusterInitScriptsFile {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/pipeline#destination Pipeline#destination}
  */
  readonly destination: string;
}

export function pipelineClusterInitScriptsFileToTerraform(struct?: PipelineClusterInitScriptsFileOutputReference | PipelineClusterInitScriptsFile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    destination: cdktf.stringToTerraform(struct!.destination),
  }
}


export function pipelineClusterInitScriptsFileToHclTerraform(struct?: PipelineClusterInitScriptsFileOutputReference | PipelineClusterInitScriptsFile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    destination: {
      value: cdktf.stringToHclTerraform(struct!.destination),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PipelineClusterInitScriptsFileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PipelineClusterInitScriptsFile | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destination !== undefined) {
      hasAnyValues = true;
      internalValueResult.destination = this._destination;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PipelineClusterInitScriptsFile | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._destination = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._destination = value.destination;
    }
  }

  // destination - computed: false, optional: false, required: true
  private _destination?: string; 
  public get destination() {
    return this.getStringAttribute('destination');
  }
  public set destination(value: string) {
    this._destination = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationInput() {
    return this._destination;
  }
}
export interface PipelineClusterInitScriptsGcs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/pipeline#destination Pipeline#destination}
  */
  readonly destination: string;
}

export function pipelineClusterInitScriptsGcsToTerraform(struct?: PipelineClusterInitScriptsGcsOutputReference | PipelineClusterInitScriptsGcs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    destination: cdktf.stringToTerraform(struct!.destination),
  }
}


export function pipelineClusterInitScriptsGcsToHclTerraform(struct?: PipelineClusterInitScriptsGcsOutputReference | PipelineClusterInitScriptsGcs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    destination: {
      value: cdktf.stringToHclTerraform(struct!.destination),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PipelineClusterInitScriptsGcsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PipelineClusterInitScriptsGcs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destination !== undefined) {
      hasAnyValues = true;
      internalValueResult.destination = this._destination;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PipelineClusterInitScriptsGcs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._destination = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._destination = value.destination;
    }
  }

  // destination - computed: false, optional: false, required: true
  private _destination?: string; 
  public get destination() {
    return this.getStringAttribute('destination');
  }
  public set destination(value: string) {
    this._destination = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationInput() {
    return this._destination;
  }
}
export interface PipelineClusterInitScriptsS3 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/pipeline#canned_acl Pipeline#canned_acl}
  */
  readonly cannedAcl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/pipeline#destination Pipeline#destination}
  */
  readonly destination: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/pipeline#enable_encryption Pipeline#enable_encryption}
  */
  readonly enableEncryption?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/pipeline#encryption_type Pipeline#encryption_type}
  */
  readonly encryptionType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/pipeline#endpoint Pipeline#endpoint}
  */
  readonly endpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/pipeline#kms_key Pipeline#kms_key}
  */
  readonly kmsKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/pipeline#region Pipeline#region}
  */
  readonly region?: string;
}

export function pipelineClusterInitScriptsS3ToTerraform(struct?: PipelineClusterInitScriptsS3OutputReference | PipelineClusterInitScriptsS3): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    canned_acl: cdktf.stringToTerraform(struct!.cannedAcl),
    destination: cdktf.stringToTerraform(struct!.destination),
    enable_encryption: cdktf.booleanToTerraform(struct!.enableEncryption),
    encryption_type: cdktf.stringToTerraform(struct!.encryptionType),
    endpoint: cdktf.stringToTerraform(struct!.endpoint),
    kms_key: cdktf.stringToTerraform(struct!.kmsKey),
    region: cdktf.stringToTerraform(struct!.region),
  }
}


export function pipelineClusterInitScriptsS3ToHclTerraform(struct?: PipelineClusterInitScriptsS3OutputReference | PipelineClusterInitScriptsS3): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    canned_acl: {
      value: cdktf.stringToHclTerraform(struct!.cannedAcl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    destination: {
      value: cdktf.stringToHclTerraform(struct!.destination),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enable_encryption: {
      value: cdktf.booleanToHclTerraform(struct!.enableEncryption),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    encryption_type: {
      value: cdktf.stringToHclTerraform(struct!.encryptionType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    endpoint: {
      value: cdktf.stringToHclTerraform(struct!.endpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kms_key: {
      value: cdktf.stringToHclTerraform(struct!.kmsKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    region: {
      value: cdktf.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PipelineClusterInitScriptsS3OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PipelineClusterInitScriptsS3 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cannedAcl !== undefined) {
      hasAnyValues = true;
      internalValueResult.cannedAcl = this._cannedAcl;
    }
    if (this._destination !== undefined) {
      hasAnyValues = true;
      internalValueResult.destination = this._destination;
    }
    if (this._enableEncryption !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableEncryption = this._enableEncryption;
    }
    if (this._encryptionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryptionType = this._encryptionType;
    }
    if (this._endpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpoint = this._endpoint;
    }
    if (this._kmsKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKey = this._kmsKey;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PipelineClusterInitScriptsS3 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cannedAcl = undefined;
      this._destination = undefined;
      this._enableEncryption = undefined;
      this._encryptionType = undefined;
      this._endpoint = undefined;
      this._kmsKey = undefined;
      this._region = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cannedAcl = value.cannedAcl;
      this._destination = value.destination;
      this._enableEncryption = value.enableEncryption;
      this._encryptionType = value.encryptionType;
      this._endpoint = value.endpoint;
      this._kmsKey = value.kmsKey;
      this._region = value.region;
    }
  }

  // canned_acl - computed: false, optional: true, required: false
  private _cannedAcl?: string; 
  public get cannedAcl() {
    return this.getStringAttribute('canned_acl');
  }
  public set cannedAcl(value: string) {
    this._cannedAcl = value;
  }
  public resetCannedAcl() {
    this._cannedAcl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cannedAclInput() {
    return this._cannedAcl;
  }

  // destination - computed: false, optional: false, required: true
  private _destination?: string; 
  public get destination() {
    return this.getStringAttribute('destination');
  }
  public set destination(value: string) {
    this._destination = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationInput() {
    return this._destination;
  }

  // enable_encryption - computed: false, optional: true, required: false
  private _enableEncryption?: boolean | cdktf.IResolvable; 
  public get enableEncryption() {
    return this.getBooleanAttribute('enable_encryption');
  }
  public set enableEncryption(value: boolean | cdktf.IResolvable) {
    this._enableEncryption = value;
  }
  public resetEnableEncryption() {
    this._enableEncryption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableEncryptionInput() {
    return this._enableEncryption;
  }

  // encryption_type - computed: false, optional: true, required: false
  private _encryptionType?: string; 
  public get encryptionType() {
    return this.getStringAttribute('encryption_type');
  }
  public set encryptionType(value: string) {
    this._encryptionType = value;
  }
  public resetEncryptionType() {
    this._encryptionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionTypeInput() {
    return this._encryptionType;
  }

  // endpoint - computed: false, optional: true, required: false
  private _endpoint?: string; 
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }
  public set endpoint(value: string) {
    this._endpoint = value;
  }
  public resetEndpoint() {
    this._endpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointInput() {
    return this._endpoint;
  }

  // kms_key - computed: false, optional: true, required: false
  private _kmsKey?: string; 
  public get kmsKey() {
    return this.getStringAttribute('kms_key');
  }
  public set kmsKey(value: string) {
    this._kmsKey = value;
  }
  public resetKmsKey() {
    this._kmsKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyInput() {
    return this._kmsKey;
  }

  // region - computed: false, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }
}
export interface PipelineClusterInitScriptsVolumes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/pipeline#destination Pipeline#destination}
  */
  readonly destination: string;
}

export function pipelineClusterInitScriptsVolumesToTerraform(struct?: PipelineClusterInitScriptsVolumesOutputReference | PipelineClusterInitScriptsVolumes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    destination: cdktf.stringToTerraform(struct!.destination),
  }
}


export function pipelineClusterInitScriptsVolumesToHclTerraform(struct?: PipelineClusterInitScriptsVolumesOutputReference | PipelineClusterInitScriptsVolumes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    destination: {
      value: cdktf.stringToHclTerraform(struct!.destination),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PipelineClusterInitScriptsVolumesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PipelineClusterInitScriptsVolumes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destination !== undefined) {
      hasAnyValues = true;
      internalValueResult.destination = this._destination;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PipelineClusterInitScriptsVolumes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._destination = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._destination = value.destination;
    }
  }

  // destination - computed: false, optional: false, required: true
  private _destination?: string; 
  public get destination() {
    return this.getStringAttribute('destination');
  }
  public set destination(value: string) {
    this._destination = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationInput() {
    return this._destination;
  }
}
export interface PipelineClusterInitScriptsWorkspace {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/pipeline#destination Pipeline#destination}
  */
  readonly destination: string;
}

export function pipelineClusterInitScriptsWorkspaceToTerraform(struct?: PipelineClusterInitScriptsWorkspaceOutputReference | PipelineClusterInitScriptsWorkspace): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    destination: cdktf.stringToTerraform(struct!.destination),
  }
}


export function pipelineClusterInitScriptsWorkspaceToHclTerraform(struct?: PipelineClusterInitScriptsWorkspaceOutputReference | PipelineClusterInitScriptsWorkspace): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    destination: {
      value: cdktf.stringToHclTerraform(struct!.destination),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PipelineClusterInitScriptsWorkspaceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PipelineClusterInitScriptsWorkspace | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destination !== undefined) {
      hasAnyValues = true;
      internalValueResult.destination = this._destination;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PipelineClusterInitScriptsWorkspace | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._destination = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._destination = value.destination;
    }
  }

  // destination - computed: false, optional: false, required: true
  private _destination?: string; 
  public get destination() {
    return this.getStringAttribute('destination');
  }
  public set destination(value: string) {
    this._destination = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationInput() {
    return this._destination;
  }
}
export interface PipelineClusterInitScripts {
  /**
  * abfss block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/pipeline#abfss Pipeline#abfss}
  */
  readonly abfss?: PipelineClusterInitScriptsAbfss;
  /**
  * dbfs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/pipeline#dbfs Pipeline#dbfs}
  */
  readonly dbfs?: PipelineClusterInitScriptsDbfs;
  /**
  * file block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/pipeline#file Pipeline#file}
  */
  readonly file?: PipelineClusterInitScriptsFile;
  /**
  * gcs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/pipeline#gcs Pipeline#gcs}
  */
  readonly gcs?: PipelineClusterInitScriptsGcs;
  /**
  * s3 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/pipeline#s3 Pipeline#s3}
  */
  readonly s3?: PipelineClusterInitScriptsS3;
  /**
  * volumes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/pipeline#volumes Pipeline#volumes}
  */
  readonly volumes?: PipelineClusterInitScriptsVolumes;
  /**
  * workspace block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/pipeline#workspace Pipeline#workspace}
  */
  readonly workspace?: PipelineClusterInitScriptsWorkspace;
}

export function pipelineClusterInitScriptsToTerraform(struct?: PipelineClusterInitScripts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    abfss: pipelineClusterInitScriptsAbfssToTerraform(struct!.abfss),
    dbfs: pipelineClusterInitScriptsDbfsToTerraform(struct!.dbfs),
    file: pipelineClusterInitScriptsFileToTerraform(struct!.file),
    gcs: pipelineClusterInitScriptsGcsToTerraform(struct!.gcs),
    s3: pipelineClusterInitScriptsS3ToTerraform(struct!.s3),
    volumes: pipelineClusterInitScriptsVolumesToTerraform(struct!.volumes),
    workspace: pipelineClusterInitScriptsWorkspaceToTerraform(struct!.workspace),
  }
}


export function pipelineClusterInitScriptsToHclTerraform(struct?: PipelineClusterInitScripts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    abfss: {
      value: pipelineClusterInitScriptsAbfssToHclTerraform(struct!.abfss),
      isBlock: true,
      type: "list",
      storageClassType: "PipelineClusterInitScriptsAbfssList",
    },
    dbfs: {
      value: pipelineClusterInitScriptsDbfsToHclTerraform(struct!.dbfs),
      isBlock: true,
      type: "list",
      storageClassType: "PipelineClusterInitScriptsDbfsList",
    },
    file: {
      value: pipelineClusterInitScriptsFileToHclTerraform(struct!.file),
      isBlock: true,
      type: "list",
      storageClassType: "PipelineClusterInitScriptsFileList",
    },
    gcs: {
      value: pipelineClusterInitScriptsGcsToHclTerraform(struct!.gcs),
      isBlock: true,
      type: "list",
      storageClassType: "PipelineClusterInitScriptsGcsList",
    },
    s3: {
      value: pipelineClusterInitScriptsS3ToHclTerraform(struct!.s3),
      isBlock: true,
      type: "list",
      storageClassType: "PipelineClusterInitScriptsS3List",
    },
    volumes: {
      value: pipelineClusterInitScriptsVolumesToHclTerraform(struct!.volumes),
      isBlock: true,
      type: "list",
      storageClassType: "PipelineClusterInitScriptsVolumesList",
    },
    workspace: {
      value: pipelineClusterInitScriptsWorkspaceToHclTerraform(struct!.workspace),
      isBlock: true,
      type: "list",
      storageClassType: "PipelineClusterInitScriptsWorkspaceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PipelineClusterInitScriptsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): PipelineClusterInitScripts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._abfss?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.abfss = this._abfss?.internalValue;
    }
    if (this._dbfs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dbfs = this._dbfs?.internalValue;
    }
    if (this._file?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.file = this._file?.internalValue;
    }
    if (this._gcs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gcs = this._gcs?.internalValue;
    }
    if (this._s3?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3 = this._s3?.internalValue;
    }
    if (this._volumes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumes = this._volumes?.internalValue;
    }
    if (this._workspace?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.workspace = this._workspace?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PipelineClusterInitScripts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._abfss.internalValue = undefined;
      this._dbfs.internalValue = undefined;
      this._file.internalValue = undefined;
      this._gcs.internalValue = undefined;
      this._s3.internalValue = undefined;
      this._volumes.internalValue = undefined;
      this._workspace.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._abfss.internalValue = value.abfss;
      this._dbfs.internalValue = value.dbfs;
      this._file.internalValue = value.file;
      this._gcs.internalValue = value.gcs;
      this._s3.internalValue = value.s3;
      this._volumes.internalValue = value.volumes;
      this._workspace.internalValue = value.workspace;
    }
  }

  // abfss - computed: false, optional: true, required: false
  private _abfss = new PipelineClusterInitScriptsAbfssOutputReference(this, "abfss");
  public get abfss() {
    return this._abfss;
  }
  public putAbfss(value: PipelineClusterInitScriptsAbfss) {
    this._abfss.internalValue = value;
  }
  public resetAbfss() {
    this._abfss.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get abfssInput() {
    return this._abfss.internalValue;
  }

  // dbfs - computed: false, optional: true, required: false
  private _dbfs = new PipelineClusterInitScriptsDbfsOutputReference(this, "dbfs");
  public get dbfs() {
    return this._dbfs;
  }
  public putDbfs(value: PipelineClusterInitScriptsDbfs) {
    this._dbfs.internalValue = value;
  }
  public resetDbfs() {
    this._dbfs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbfsInput() {
    return this._dbfs.internalValue;
  }

  // file - computed: false, optional: true, required: false
  private _file = new PipelineClusterInitScriptsFileOutputReference(this, "file");
  public get file() {
    return this._file;
  }
  public putFile(value: PipelineClusterInitScriptsFile) {
    this._file.internalValue = value;
  }
  public resetFile() {
    this._file.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileInput() {
    return this._file.internalValue;
  }

  // gcs - computed: false, optional: true, required: false
  private _gcs = new PipelineClusterInitScriptsGcsOutputReference(this, "gcs");
  public get gcs() {
    return this._gcs;
  }
  public putGcs(value: PipelineClusterInitScriptsGcs) {
    this._gcs.internalValue = value;
  }
  public resetGcs() {
    this._gcs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcsInput() {
    return this._gcs.internalValue;
  }

  // s3 - computed: false, optional: true, required: false
  private _s3 = new PipelineClusterInitScriptsS3OutputReference(this, "s3");
  public get s3() {
    return this._s3;
  }
  public putS3(value: PipelineClusterInitScriptsS3) {
    this._s3.internalValue = value;
  }
  public resetS3() {
    this._s3.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3Input() {
    return this._s3.internalValue;
  }

  // volumes - computed: false, optional: true, required: false
  private _volumes = new PipelineClusterInitScriptsVolumesOutputReference(this, "volumes");
  public get volumes() {
    return this._volumes;
  }
  public putVolumes(value: PipelineClusterInitScriptsVolumes) {
    this._volumes.internalValue = value;
  }
  public resetVolumes() {
    this._volumes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumesInput() {
    return this._volumes.internalValue;
  }

  // workspace - computed: false, optional: true, required: false
  private _workspace = new PipelineClusterInitScriptsWorkspaceOutputReference(this, "workspace");
  public get workspace() {
    return this._workspace;
  }
  public putWorkspace(value: PipelineClusterInitScriptsWorkspace) {
    this._workspace.internalValue = value;
  }
  public resetWorkspace() {
    this._workspace.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workspaceInput() {
    return this._workspace.internalValue;
  }
}

export class PipelineClusterInitScriptsList extends cdktf.ComplexList {
  public internalValue? : PipelineClusterInitScripts[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): PipelineClusterInitScriptsOutputReference {
    return new PipelineClusterInitScriptsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PipelineCluster {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/pipeline#apply_policy_default_values Pipeline#apply_policy_default_values}
  */
  readonly applyPolicyDefaultValues?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/pipeline#custom_tags Pipeline#custom_tags}
  */
  readonly customTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/pipeline#driver_instance_pool_id Pipeline#driver_instance_pool_id}
  */
  readonly driverInstancePoolId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/pipeline#driver_node_type_id Pipeline#driver_node_type_id}
  */
  readonly driverNodeTypeId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/pipeline#enable_local_disk_encryption Pipeline#enable_local_disk_encryption}
  */
  readonly enableLocalDiskEncryption?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/pipeline#instance_pool_id Pipeline#instance_pool_id}
  */
  readonly instancePoolId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/pipeline#label Pipeline#label}
  */
  readonly label?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/pipeline#node_type_id Pipeline#node_type_id}
  */
  readonly nodeTypeId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/pipeline#num_workers Pipeline#num_workers}
  */
  readonly numWorkers?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/pipeline#policy_id Pipeline#policy_id}
  */
  readonly policyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/pipeline#spark_conf Pipeline#spark_conf}
  */
  readonly sparkConf?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/pipeline#spark_env_vars Pipeline#spark_env_vars}
  */
  readonly sparkEnvVars?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/pipeline#ssh_public_keys Pipeline#ssh_public_keys}
  */
  readonly sshPublicKeys?: string[];
  /**
  * autoscale block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/pipeline#autoscale Pipeline#autoscale}
  */
  readonly autoscale?: PipelineClusterAutoscale;
  /**
  * aws_attributes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/pipeline#aws_attributes Pipeline#aws_attributes}
  */
  readonly awsAttributes?: PipelineClusterAwsAttributes;
  /**
  * azure_attributes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/pipeline#azure_attributes Pipeline#azure_attributes}
  */
  readonly azureAttributes?: PipelineClusterAzureAttributes;
  /**
  * cluster_log_conf block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/pipeline#cluster_log_conf Pipeline#cluster_log_conf}
  */
  readonly clusterLogConf?: PipelineClusterClusterLogConf;
  /**
  * gcp_attributes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/pipeline#gcp_attributes Pipeline#gcp_attributes}
  */
  readonly gcpAttributes?: PipelineClusterGcpAttributes;
  /**
  * init_scripts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/pipeline#init_scripts Pipeline#init_scripts}
  */
  readonly initScripts?: PipelineClusterInitScripts[] | cdktf.IResolvable;
}

export function pipelineClusterToTerraform(struct?: PipelineCluster | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    apply_policy_default_values: cdktf.booleanToTerraform(struct!.applyPolicyDefaultValues),
    custom_tags: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.customTags),
    driver_instance_pool_id: cdktf.stringToTerraform(struct!.driverInstancePoolId),
    driver_node_type_id: cdktf.stringToTerraform(struct!.driverNodeTypeId),
    enable_local_disk_encryption: cdktf.booleanToTerraform(struct!.enableLocalDiskEncryption),
    instance_pool_id: cdktf.stringToTerraform(struct!.instancePoolId),
    label: cdktf.stringToTerraform(struct!.label),
    node_type_id: cdktf.stringToTerraform(struct!.nodeTypeId),
    num_workers: cdktf.numberToTerraform(struct!.numWorkers),
    policy_id: cdktf.stringToTerraform(struct!.policyId),
    spark_conf: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.sparkConf),
    spark_env_vars: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.sparkEnvVars),
    ssh_public_keys: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.sshPublicKeys),
    autoscale: pipelineClusterAutoscaleToTerraform(struct!.autoscale),
    aws_attributes: pipelineClusterAwsAttributesToTerraform(struct!.awsAttributes),
    azure_attributes: pipelineClusterAzureAttributesToTerraform(struct!.azureAttributes),
    cluster_log_conf: pipelineClusterClusterLogConfToTerraform(struct!.clusterLogConf),
    gcp_attributes: pipelineClusterGcpAttributesToTerraform(struct!.gcpAttributes),
    init_scripts: cdktf.listMapper(pipelineClusterInitScriptsToTerraform, true)(struct!.initScripts),
  }
}


export function pipelineClusterToHclTerraform(struct?: PipelineCluster | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    apply_policy_default_values: {
      value: cdktf.booleanToHclTerraform(struct!.applyPolicyDefaultValues),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    custom_tags: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.customTags),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    driver_instance_pool_id: {
      value: cdktf.stringToHclTerraform(struct!.driverInstancePoolId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    driver_node_type_id: {
      value: cdktf.stringToHclTerraform(struct!.driverNodeTypeId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enable_local_disk_encryption: {
      value: cdktf.booleanToHclTerraform(struct!.enableLocalDiskEncryption),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    instance_pool_id: {
      value: cdktf.stringToHclTerraform(struct!.instancePoolId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    label: {
      value: cdktf.stringToHclTerraform(struct!.label),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    node_type_id: {
      value: cdktf.stringToHclTerraform(struct!.nodeTypeId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    num_workers: {
      value: cdktf.numberToHclTerraform(struct!.numWorkers),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    policy_id: {
      value: cdktf.stringToHclTerraform(struct!.policyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    spark_conf: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.sparkConf),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    spark_env_vars: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.sparkEnvVars),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    ssh_public_keys: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.sshPublicKeys),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    autoscale: {
      value: pipelineClusterAutoscaleToHclTerraform(struct!.autoscale),
      isBlock: true,
      type: "list",
      storageClassType: "PipelineClusterAutoscaleList",
    },
    aws_attributes: {
      value: pipelineClusterAwsAttributesToHclTerraform(struct!.awsAttributes),
      isBlock: true,
      type: "list",
      storageClassType: "PipelineClusterAwsAttributesList",
    },
    azure_attributes: {
      value: pipelineClusterAzureAttributesToHclTerraform(struct!.azureAttributes),
      isBlock: true,
      type: "list",
      storageClassType: "PipelineClusterAzureAttributesList",
    },
    cluster_log_conf: {
      value: pipelineClusterClusterLogConfToHclTerraform(struct!.clusterLogConf),
      isBlock: true,
      type: "list",
      storageClassType: "PipelineClusterClusterLogConfList",
    },
    gcp_attributes: {
      value: pipelineClusterGcpAttributesToHclTerraform(struct!.gcpAttributes),
      isBlock: true,
      type: "list",
      storageClassType: "PipelineClusterGcpAttributesList",
    },
    init_scripts: {
      value: cdktf.listMapperHcl(pipelineClusterInitScriptsToHclTerraform, true)(struct!.initScripts),
      isBlock: true,
      type: "list",
      storageClassType: "PipelineClusterInitScriptsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PipelineClusterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): PipelineCluster | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._applyPolicyDefaultValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.applyPolicyDefaultValues = this._applyPolicyDefaultValues;
    }
    if (this._customTags !== undefined) {
      hasAnyValues = true;
      internalValueResult.customTags = this._customTags;
    }
    if (this._driverInstancePoolId !== undefined) {
      hasAnyValues = true;
      internalValueResult.driverInstancePoolId = this._driverInstancePoolId;
    }
    if (this._driverNodeTypeId !== undefined) {
      hasAnyValues = true;
      internalValueResult.driverNodeTypeId = this._driverNodeTypeId;
    }
    if (this._enableLocalDiskEncryption !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableLocalDiskEncryption = this._enableLocalDiskEncryption;
    }
    if (this._instancePoolId !== undefined) {
      hasAnyValues = true;
      internalValueResult.instancePoolId = this._instancePoolId;
    }
    if (this._label !== undefined) {
      hasAnyValues = true;
      internalValueResult.label = this._label;
    }
    if (this._nodeTypeId !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeTypeId = this._nodeTypeId;
    }
    if (this._numWorkers !== undefined) {
      hasAnyValues = true;
      internalValueResult.numWorkers = this._numWorkers;
    }
    if (this._policyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.policyId = this._policyId;
    }
    if (this._sparkConf !== undefined) {
      hasAnyValues = true;
      internalValueResult.sparkConf = this._sparkConf;
    }
    if (this._sparkEnvVars !== undefined) {
      hasAnyValues = true;
      internalValueResult.sparkEnvVars = this._sparkEnvVars;
    }
    if (this._sshPublicKeys !== undefined) {
      hasAnyValues = true;
      internalValueResult.sshPublicKeys = this._sshPublicKeys;
    }
    if (this._autoscale?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoscale = this._autoscale?.internalValue;
    }
    if (this._awsAttributes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsAttributes = this._awsAttributes?.internalValue;
    }
    if (this._azureAttributes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.azureAttributes = this._azureAttributes?.internalValue;
    }
    if (this._clusterLogConf?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterLogConf = this._clusterLogConf?.internalValue;
    }
    if (this._gcpAttributes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gcpAttributes = this._gcpAttributes?.internalValue;
    }
    if (this._initScripts?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.initScripts = this._initScripts?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PipelineCluster | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._applyPolicyDefaultValues = undefined;
      this._customTags = undefined;
      this._driverInstancePoolId = undefined;
      this._driverNodeTypeId = undefined;
      this._enableLocalDiskEncryption = undefined;
      this._instancePoolId = undefined;
      this._label = undefined;
      this._nodeTypeId = undefined;
      this._numWorkers = undefined;
      this._policyId = undefined;
      this._sparkConf = undefined;
      this._sparkEnvVars = undefined;
      this._sshPublicKeys = undefined;
      this._autoscale.internalValue = undefined;
      this._awsAttributes.internalValue = undefined;
      this._azureAttributes.internalValue = undefined;
      this._clusterLogConf.internalValue = undefined;
      this._gcpAttributes.internalValue = undefined;
      this._initScripts.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._applyPolicyDefaultValues = value.applyPolicyDefaultValues;
      this._customTags = value.customTags;
      this._driverInstancePoolId = value.driverInstancePoolId;
      this._driverNodeTypeId = value.driverNodeTypeId;
      this._enableLocalDiskEncryption = value.enableLocalDiskEncryption;
      this._instancePoolId = value.instancePoolId;
      this._label = value.label;
      this._nodeTypeId = value.nodeTypeId;
      this._numWorkers = value.numWorkers;
      this._policyId = value.policyId;
      this._sparkConf = value.sparkConf;
      this._sparkEnvVars = value.sparkEnvVars;
      this._sshPublicKeys = value.sshPublicKeys;
      this._autoscale.internalValue = value.autoscale;
      this._awsAttributes.internalValue = value.awsAttributes;
      this._azureAttributes.internalValue = value.azureAttributes;
      this._clusterLogConf.internalValue = value.clusterLogConf;
      this._gcpAttributes.internalValue = value.gcpAttributes;
      this._initScripts.internalValue = value.initScripts;
    }
  }

  // apply_policy_default_values - computed: false, optional: true, required: false
  private _applyPolicyDefaultValues?: boolean | cdktf.IResolvable; 
  public get applyPolicyDefaultValues() {
    return this.getBooleanAttribute('apply_policy_default_values');
  }
  public set applyPolicyDefaultValues(value: boolean | cdktf.IResolvable) {
    this._applyPolicyDefaultValues = value;
  }
  public resetApplyPolicyDefaultValues() {
    this._applyPolicyDefaultValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applyPolicyDefaultValuesInput() {
    return this._applyPolicyDefaultValues;
  }

  // custom_tags - computed: false, optional: true, required: false
  private _customTags?: { [key: string]: string }; 
  public get customTags() {
    return this.getStringMapAttribute('custom_tags');
  }
  public set customTags(value: { [key: string]: string }) {
    this._customTags = value;
  }
  public resetCustomTags() {
    this._customTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customTagsInput() {
    return this._customTags;
  }

  // driver_instance_pool_id - computed: false, optional: true, required: false
  private _driverInstancePoolId?: string; 
  public get driverInstancePoolId() {
    return this.getStringAttribute('driver_instance_pool_id');
  }
  public set driverInstancePoolId(value: string) {
    this._driverInstancePoolId = value;
  }
  public resetDriverInstancePoolId() {
    this._driverInstancePoolId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get driverInstancePoolIdInput() {
    return this._driverInstancePoolId;
  }

  // driver_node_type_id - computed: true, optional: true, required: false
  private _driverNodeTypeId?: string; 
  public get driverNodeTypeId() {
    return this.getStringAttribute('driver_node_type_id');
  }
  public set driverNodeTypeId(value: string) {
    this._driverNodeTypeId = value;
  }
  public resetDriverNodeTypeId() {
    this._driverNodeTypeId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get driverNodeTypeIdInput() {
    return this._driverNodeTypeId;
  }

  // enable_local_disk_encryption - computed: true, optional: true, required: false
  private _enableLocalDiskEncryption?: boolean | cdktf.IResolvable; 
  public get enableLocalDiskEncryption() {
    return this.getBooleanAttribute('enable_local_disk_encryption');
  }
  public set enableLocalDiskEncryption(value: boolean | cdktf.IResolvable) {
    this._enableLocalDiskEncryption = value;
  }
  public resetEnableLocalDiskEncryption() {
    this._enableLocalDiskEncryption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableLocalDiskEncryptionInput() {
    return this._enableLocalDiskEncryption;
  }

  // instance_pool_id - computed: false, optional: true, required: false
  private _instancePoolId?: string; 
  public get instancePoolId() {
    return this.getStringAttribute('instance_pool_id');
  }
  public set instancePoolId(value: string) {
    this._instancePoolId = value;
  }
  public resetInstancePoolId() {
    this._instancePoolId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instancePoolIdInput() {
    return this._instancePoolId;
  }

  // label - computed: false, optional: true, required: false
  private _label?: string; 
  public get label() {
    return this.getStringAttribute('label');
  }
  public set label(value: string) {
    this._label = value;
  }
  public resetLabel() {
    this._label = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelInput() {
    return this._label;
  }

  // node_type_id - computed: true, optional: true, required: false
  private _nodeTypeId?: string; 
  public get nodeTypeId() {
    return this.getStringAttribute('node_type_id');
  }
  public set nodeTypeId(value: string) {
    this._nodeTypeId = value;
  }
  public resetNodeTypeId() {
    this._nodeTypeId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeTypeIdInput() {
    return this._nodeTypeId;
  }

  // num_workers - computed: false, optional: true, required: false
  private _numWorkers?: number; 
  public get numWorkers() {
    return this.getNumberAttribute('num_workers');
  }
  public set numWorkers(value: number) {
    this._numWorkers = value;
  }
  public resetNumWorkers() {
    this._numWorkers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numWorkersInput() {
    return this._numWorkers;
  }

  // policy_id - computed: false, optional: true, required: false
  private _policyId?: string; 
  public get policyId() {
    return this.getStringAttribute('policy_id');
  }
  public set policyId(value: string) {
    this._policyId = value;
  }
  public resetPolicyId() {
    this._policyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyIdInput() {
    return this._policyId;
  }

  // spark_conf - computed: false, optional: true, required: false
  private _sparkConf?: { [key: string]: string }; 
  public get sparkConf() {
    return this.getStringMapAttribute('spark_conf');
  }
  public set sparkConf(value: { [key: string]: string }) {
    this._sparkConf = value;
  }
  public resetSparkConf() {
    this._sparkConf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sparkConfInput() {
    return this._sparkConf;
  }

  // spark_env_vars - computed: false, optional: true, required: false
  private _sparkEnvVars?: { [key: string]: string }; 
  public get sparkEnvVars() {
    return this.getStringMapAttribute('spark_env_vars');
  }
  public set sparkEnvVars(value: { [key: string]: string }) {
    this._sparkEnvVars = value;
  }
  public resetSparkEnvVars() {
    this._sparkEnvVars = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sparkEnvVarsInput() {
    return this._sparkEnvVars;
  }

  // ssh_public_keys - computed: false, optional: true, required: false
  private _sshPublicKeys?: string[]; 
  public get sshPublicKeys() {
    return this.getListAttribute('ssh_public_keys');
  }
  public set sshPublicKeys(value: string[]) {
    this._sshPublicKeys = value;
  }
  public resetSshPublicKeys() {
    this._sshPublicKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshPublicKeysInput() {
    return this._sshPublicKeys;
  }

  // autoscale - computed: false, optional: true, required: false
  private _autoscale = new PipelineClusterAutoscaleOutputReference(this, "autoscale");
  public get autoscale() {
    return this._autoscale;
  }
  public putAutoscale(value: PipelineClusterAutoscale) {
    this._autoscale.internalValue = value;
  }
  public resetAutoscale() {
    this._autoscale.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoscaleInput() {
    return this._autoscale.internalValue;
  }

  // aws_attributes - computed: false, optional: true, required: false
  private _awsAttributes = new PipelineClusterAwsAttributesOutputReference(this, "aws_attributes");
  public get awsAttributes() {
    return this._awsAttributes;
  }
  public putAwsAttributes(value: PipelineClusterAwsAttributes) {
    this._awsAttributes.internalValue = value;
  }
  public resetAwsAttributes() {
    this._awsAttributes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsAttributesInput() {
    return this._awsAttributes.internalValue;
  }

  // azure_attributes - computed: false, optional: true, required: false
  private _azureAttributes = new PipelineClusterAzureAttributesOutputReference(this, "azure_attributes");
  public get azureAttributes() {
    return this._azureAttributes;
  }
  public putAzureAttributes(value: PipelineClusterAzureAttributes) {
    this._azureAttributes.internalValue = value;
  }
  public resetAzureAttributes() {
    this._azureAttributes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureAttributesInput() {
    return this._azureAttributes.internalValue;
  }

  // cluster_log_conf - computed: false, optional: true, required: false
  private _clusterLogConf = new PipelineClusterClusterLogConfOutputReference(this, "cluster_log_conf");
  public get clusterLogConf() {
    return this._clusterLogConf;
  }
  public putClusterLogConf(value: PipelineClusterClusterLogConf) {
    this._clusterLogConf.internalValue = value;
  }
  public resetClusterLogConf() {
    this._clusterLogConf.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterLogConfInput() {
    return this._clusterLogConf.internalValue;
  }

  // gcp_attributes - computed: false, optional: true, required: false
  private _gcpAttributes = new PipelineClusterGcpAttributesOutputReference(this, "gcp_attributes");
  public get gcpAttributes() {
    return this._gcpAttributes;
  }
  public putGcpAttributes(value: PipelineClusterGcpAttributes) {
    this._gcpAttributes.internalValue = value;
  }
  public resetGcpAttributes() {
    this._gcpAttributes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcpAttributesInput() {
    return this._gcpAttributes.internalValue;
  }

  // init_scripts - computed: false, optional: true, required: false
  private _initScripts = new PipelineClusterInitScriptsList(this, "init_scripts", false);
  public get initScripts() {
    return this._initScripts;
  }
  public putInitScripts(value: PipelineClusterInitScripts[] | cdktf.IResolvable) {
    this._initScripts.internalValue = value;
  }
  public resetInitScripts() {
    this._initScripts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initScriptsInput() {
    return this._initScripts.internalValue;
  }
}

export class PipelineClusterList extends cdktf.ComplexList {
  public internalValue? : PipelineCluster[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): PipelineClusterOutputReference {
    return new PipelineClusterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PipelineDeployment {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/pipeline#kind Pipeline#kind}
  */
  readonly kind: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/pipeline#metadata_file_path Pipeline#metadata_file_path}
  */
  readonly metadataFilePath?: string;
}

export function pipelineDeploymentToTerraform(struct?: PipelineDeploymentOutputReference | PipelineDeployment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    kind: cdktf.stringToTerraform(struct!.kind),
    metadata_file_path: cdktf.stringToTerraform(struct!.metadataFilePath),
  }
}


export function pipelineDeploymentToHclTerraform(struct?: PipelineDeploymentOutputReference | PipelineDeployment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    kind: {
      value: cdktf.stringToHclTerraform(struct!.kind),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metadata_file_path: {
      value: cdktf.stringToHclTerraform(struct!.metadataFilePath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PipelineDeploymentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PipelineDeployment | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kind !== undefined) {
      hasAnyValues = true;
      internalValueResult.kind = this._kind;
    }
    if (this._metadataFilePath !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadataFilePath = this._metadataFilePath;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PipelineDeployment | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._kind = undefined;
      this._metadataFilePath = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._kind = value.kind;
      this._metadataFilePath = value.metadataFilePath;
    }
  }

  // kind - computed: false, optional: false, required: true
  private _kind?: string; 
  public get kind() {
    return this.getStringAttribute('kind');
  }
  public set kind(value: string) {
    this._kind = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kindInput() {
    return this._kind;
  }

  // metadata_file_path - computed: false, optional: true, required: false
  private _metadataFilePath?: string; 
  public get metadataFilePath() {
    return this.getStringAttribute('metadata_file_path');
  }
  public set metadataFilePath(value: string) {
    this._metadataFilePath = value;
  }
  public resetMetadataFilePath() {
    this._metadataFilePath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataFilePathInput() {
    return this._metadataFilePath;
  }
}
export interface PipelineEventLog {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/pipeline#catalog Pipeline#catalog}
  */
  readonly catalog?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/pipeline#name Pipeline#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/pipeline#schema Pipeline#schema}
  */
  readonly schema?: string;
}

export function pipelineEventLogToTerraform(struct?: PipelineEventLogOutputReference | PipelineEventLog): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    catalog: cdktf.stringToTerraform(struct!.catalog),
    name: cdktf.stringToTerraform(struct!.name),
    schema: cdktf.stringToTerraform(struct!.schema),
  }
}


export function pipelineEventLogToHclTerraform(struct?: PipelineEventLogOutputReference | PipelineEventLog): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    catalog: {
      value: cdktf.stringToHclTerraform(struct!.catalog),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    schema: {
      value: cdktf.stringToHclTerraform(struct!.schema),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PipelineEventLogOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PipelineEventLog | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._catalog !== undefined) {
      hasAnyValues = true;
      internalValueResult.catalog = this._catalog;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._schema !== undefined) {
      hasAnyValues = true;
      internalValueResult.schema = this._schema;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PipelineEventLog | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._catalog = undefined;
      this._name = undefined;
      this._schema = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._catalog = value.catalog;
      this._name = value.name;
      this._schema = value.schema;
    }
  }

  // catalog - computed: true, optional: true, required: false
  private _catalog?: string; 
  public get catalog() {
    return this.getStringAttribute('catalog');
  }
  public set catalog(value: string) {
    this._catalog = value;
  }
  public resetCatalog() {
    this._catalog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get catalogInput() {
    return this._catalog;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // schema - computed: true, optional: true, required: false
  private _schema?: string; 
  public get schema() {
    return this.getStringAttribute('schema');
  }
  public set schema(value: string) {
    this._schema = value;
  }
  public resetSchema() {
    this._schema = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaInput() {
    return this._schema;
  }
}
export interface PipelineFilters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/pipeline#exclude Pipeline#exclude}
  */
  readonly exclude?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/pipeline#include Pipeline#include}
  */
  readonly include?: string[];
}

export function pipelineFiltersToTerraform(struct?: PipelineFiltersOutputReference | PipelineFilters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exclude: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.exclude),
    include: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.include),
  }
}


export function pipelineFiltersToHclTerraform(struct?: PipelineFiltersOutputReference | PipelineFilters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exclude: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.exclude),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    include: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.include),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PipelineFiltersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PipelineFilters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exclude !== undefined) {
      hasAnyValues = true;
      internalValueResult.exclude = this._exclude;
    }
    if (this._include !== undefined) {
      hasAnyValues = true;
      internalValueResult.include = this._include;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PipelineFilters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._exclude = undefined;
      this._include = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._exclude = value.exclude;
      this._include = value.include;
    }
  }

  // exclude - computed: false, optional: true, required: false
  private _exclude?: string[]; 
  public get exclude() {
    return this.getListAttribute('exclude');
  }
  public set exclude(value: string[]) {
    this._exclude = value;
  }
  public resetExclude() {
    this._exclude = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeInput() {
    return this._exclude;
  }

  // include - computed: false, optional: true, required: false
  private _include?: string[]; 
  public get include() {
    return this.getListAttribute('include');
  }
  public set include(value: string[]) {
    this._include = value;
  }
  public resetInclude() {
    this._include = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeInput() {
    return this._include;
  }
}
export interface PipelineGatewayDefinition {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/pipeline#connection_id Pipeline#connection_id}
  */
  readonly connectionId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/pipeline#connection_name Pipeline#connection_name}
  */
  readonly connectionName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/pipeline#gateway_storage_catalog Pipeline#gateway_storage_catalog}
  */
  readonly gatewayStorageCatalog: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/pipeline#gateway_storage_name Pipeline#gateway_storage_name}
  */
  readonly gatewayStorageName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/pipeline#gateway_storage_schema Pipeline#gateway_storage_schema}
  */
  readonly gatewayStorageSchema: string;
}

export function pipelineGatewayDefinitionToTerraform(struct?: PipelineGatewayDefinitionOutputReference | PipelineGatewayDefinition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    connection_id: cdktf.stringToTerraform(struct!.connectionId),
    connection_name: cdktf.stringToTerraform(struct!.connectionName),
    gateway_storage_catalog: cdktf.stringToTerraform(struct!.gatewayStorageCatalog),
    gateway_storage_name: cdktf.stringToTerraform(struct!.gatewayStorageName),
    gateway_storage_schema: cdktf.stringToTerraform(struct!.gatewayStorageSchema),
  }
}


export function pipelineGatewayDefinitionToHclTerraform(struct?: PipelineGatewayDefinitionOutputReference | PipelineGatewayDefinition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    connection_id: {
      value: cdktf.stringToHclTerraform(struct!.connectionId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    connection_name: {
      value: cdktf.stringToHclTerraform(struct!.connectionName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gateway_storage_catalog: {
      value: cdktf.stringToHclTerraform(struct!.gatewayStorageCatalog),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gateway_storage_name: {
      value: cdktf.stringToHclTerraform(struct!.gatewayStorageName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gateway_storage_schema: {
      value: cdktf.stringToHclTerraform(struct!.gatewayStorageSchema),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PipelineGatewayDefinitionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PipelineGatewayDefinition | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._connectionId !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionId = this._connectionId;
    }
    if (this._connectionName !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionName = this._connectionName;
    }
    if (this._gatewayStorageCatalog !== undefined) {
      hasAnyValues = true;
      internalValueResult.gatewayStorageCatalog = this._gatewayStorageCatalog;
    }
    if (this._gatewayStorageName !== undefined) {
      hasAnyValues = true;
      internalValueResult.gatewayStorageName = this._gatewayStorageName;
    }
    if (this._gatewayStorageSchema !== undefined) {
      hasAnyValues = true;
      internalValueResult.gatewayStorageSchema = this._gatewayStorageSchema;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PipelineGatewayDefinition | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._connectionId = undefined;
      this._connectionName = undefined;
      this._gatewayStorageCatalog = undefined;
      this._gatewayStorageName = undefined;
      this._gatewayStorageSchema = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._connectionId = value.connectionId;
      this._connectionName = value.connectionName;
      this._gatewayStorageCatalog = value.gatewayStorageCatalog;
      this._gatewayStorageName = value.gatewayStorageName;
      this._gatewayStorageSchema = value.gatewayStorageSchema;
    }
  }

  // connection_id - computed: false, optional: true, required: false
  private _connectionId?: string; 
  public get connectionId() {
    return this.getStringAttribute('connection_id');
  }
  public set connectionId(value: string) {
    this._connectionId = value;
  }
  public resetConnectionId() {
    this._connectionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionIdInput() {
    return this._connectionId;
  }

  // connection_name - computed: false, optional: false, required: true
  private _connectionName?: string; 
  public get connectionName() {
    return this.getStringAttribute('connection_name');
  }
  public set connectionName(value: string) {
    this._connectionName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionNameInput() {
    return this._connectionName;
  }

  // gateway_storage_catalog - computed: false, optional: false, required: true
  private _gatewayStorageCatalog?: string; 
  public get gatewayStorageCatalog() {
    return this.getStringAttribute('gateway_storage_catalog');
  }
  public set gatewayStorageCatalog(value: string) {
    this._gatewayStorageCatalog = value;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayStorageCatalogInput() {
    return this._gatewayStorageCatalog;
  }

  // gateway_storage_name - computed: false, optional: true, required: false
  private _gatewayStorageName?: string; 
  public get gatewayStorageName() {
    return this.getStringAttribute('gateway_storage_name');
  }
  public set gatewayStorageName(value: string) {
    this._gatewayStorageName = value;
  }
  public resetGatewayStorageName() {
    this._gatewayStorageName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayStorageNameInput() {
    return this._gatewayStorageName;
  }

  // gateway_storage_schema - computed: false, optional: false, required: true
  private _gatewayStorageSchema?: string; 
  public get gatewayStorageSchema() {
    return this.getStringAttribute('gateway_storage_schema');
  }
  public set gatewayStorageSchema(value: string) {
    this._gatewayStorageSchema = value;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayStorageSchemaInput() {
    return this._gatewayStorageSchema;
  }
}
export interface PipelineIngestionDefinitionObjectsReportTableConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/pipeline#exclude_columns Pipeline#exclude_columns}
  */
  readonly excludeColumns?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/pipeline#include_columns Pipeline#include_columns}
  */
  readonly includeColumns?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/pipeline#primary_keys Pipeline#primary_keys}
  */
  readonly primaryKeys?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/pipeline#salesforce_include_formula_fields Pipeline#salesforce_include_formula_fields}
  */
  readonly salesforceIncludeFormulaFields?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/pipeline#scd_type Pipeline#scd_type}
  */
  readonly scdType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/pipeline#sequence_by Pipeline#sequence_by}
  */
  readonly sequenceBy?: string[];
}

export function pipelineIngestionDefinitionObjectsReportTableConfigurationToTerraform(struct?: PipelineIngestionDefinitionObjectsReportTableConfigurationOutputReference | PipelineIngestionDefinitionObjectsReportTableConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exclude_columns: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.excludeColumns),
    include_columns: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.includeColumns),
    primary_keys: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.primaryKeys),
    salesforce_include_formula_fields: cdktf.booleanToTerraform(struct!.salesforceIncludeFormulaFields),
    scd_type: cdktf.stringToTerraform(struct!.scdType),
    sequence_by: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.sequenceBy),
  }
}


export function pipelineIngestionDefinitionObjectsReportTableConfigurationToHclTerraform(struct?: PipelineIngestionDefinitionObjectsReportTableConfigurationOutputReference | PipelineIngestionDefinitionObjectsReportTableConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exclude_columns: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.excludeColumns),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    include_columns: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.includeColumns),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    primary_keys: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.primaryKeys),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    salesforce_include_formula_fields: {
      value: cdktf.booleanToHclTerraform(struct!.salesforceIncludeFormulaFields),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    scd_type: {
      value: cdktf.stringToHclTerraform(struct!.scdType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sequence_by: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.sequenceBy),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PipelineIngestionDefinitionObjectsReportTableConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PipelineIngestionDefinitionObjectsReportTableConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._excludeColumns !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludeColumns = this._excludeColumns;
    }
    if (this._includeColumns !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeColumns = this._includeColumns;
    }
    if (this._primaryKeys !== undefined) {
      hasAnyValues = true;
      internalValueResult.primaryKeys = this._primaryKeys;
    }
    if (this._salesforceIncludeFormulaFields !== undefined) {
      hasAnyValues = true;
      internalValueResult.salesforceIncludeFormulaFields = this._salesforceIncludeFormulaFields;
    }
    if (this._scdType !== undefined) {
      hasAnyValues = true;
      internalValueResult.scdType = this._scdType;
    }
    if (this._sequenceBy !== undefined) {
      hasAnyValues = true;
      internalValueResult.sequenceBy = this._sequenceBy;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PipelineIngestionDefinitionObjectsReportTableConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._excludeColumns = undefined;
      this._includeColumns = undefined;
      this._primaryKeys = undefined;
      this._salesforceIncludeFormulaFields = undefined;
      this._scdType = undefined;
      this._sequenceBy = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._excludeColumns = value.excludeColumns;
      this._includeColumns = value.includeColumns;
      this._primaryKeys = value.primaryKeys;
      this._salesforceIncludeFormulaFields = value.salesforceIncludeFormulaFields;
      this._scdType = value.scdType;
      this._sequenceBy = value.sequenceBy;
    }
  }

  // exclude_columns - computed: false, optional: true, required: false
  private _excludeColumns?: string[]; 
  public get excludeColumns() {
    return this.getListAttribute('exclude_columns');
  }
  public set excludeColumns(value: string[]) {
    this._excludeColumns = value;
  }
  public resetExcludeColumns() {
    this._excludeColumns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeColumnsInput() {
    return this._excludeColumns;
  }

  // include_columns - computed: false, optional: true, required: false
  private _includeColumns?: string[]; 
  public get includeColumns() {
    return this.getListAttribute('include_columns');
  }
  public set includeColumns(value: string[]) {
    this._includeColumns = value;
  }
  public resetIncludeColumns() {
    this._includeColumns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeColumnsInput() {
    return this._includeColumns;
  }

  // primary_keys - computed: false, optional: true, required: false
  private _primaryKeys?: string[]; 
  public get primaryKeys() {
    return this.getListAttribute('primary_keys');
  }
  public set primaryKeys(value: string[]) {
    this._primaryKeys = value;
  }
  public resetPrimaryKeys() {
    this._primaryKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryKeysInput() {
    return this._primaryKeys;
  }

  // salesforce_include_formula_fields - computed: false, optional: true, required: false
  private _salesforceIncludeFormulaFields?: boolean | cdktf.IResolvable; 
  public get salesforceIncludeFormulaFields() {
    return this.getBooleanAttribute('salesforce_include_formula_fields');
  }
  public set salesforceIncludeFormulaFields(value: boolean | cdktf.IResolvable) {
    this._salesforceIncludeFormulaFields = value;
  }
  public resetSalesforceIncludeFormulaFields() {
    this._salesforceIncludeFormulaFields = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get salesforceIncludeFormulaFieldsInput() {
    return this._salesforceIncludeFormulaFields;
  }

  // scd_type - computed: false, optional: true, required: false
  private _scdType?: string; 
  public get scdType() {
    return this.getStringAttribute('scd_type');
  }
  public set scdType(value: string) {
    this._scdType = value;
  }
  public resetScdType() {
    this._scdType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scdTypeInput() {
    return this._scdType;
  }

  // sequence_by - computed: false, optional: true, required: false
  private _sequenceBy?: string[]; 
  public get sequenceBy() {
    return this.getListAttribute('sequence_by');
  }
  public set sequenceBy(value: string[]) {
    this._sequenceBy = value;
  }
  public resetSequenceBy() {
    this._sequenceBy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sequenceByInput() {
    return this._sequenceBy;
  }
}
export interface PipelineIngestionDefinitionObjectsReport {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/pipeline#destination_catalog Pipeline#destination_catalog}
  */
  readonly destinationCatalog: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/pipeline#destination_schema Pipeline#destination_schema}
  */
  readonly destinationSchema: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/pipeline#destination_table Pipeline#destination_table}
  */
  readonly destinationTable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/pipeline#source_url Pipeline#source_url}
  */
  readonly sourceUrl: string;
  /**
  * table_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/pipeline#table_configuration Pipeline#table_configuration}
  */
  readonly tableConfiguration?: PipelineIngestionDefinitionObjectsReportTableConfiguration;
}

export function pipelineIngestionDefinitionObjectsReportToTerraform(struct?: PipelineIngestionDefinitionObjectsReportOutputReference | PipelineIngestionDefinitionObjectsReport): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    destination_catalog: cdktf.stringToTerraform(struct!.destinationCatalog),
    destination_schema: cdktf.stringToTerraform(struct!.destinationSchema),
    destination_table: cdktf.stringToTerraform(struct!.destinationTable),
    source_url: cdktf.stringToTerraform(struct!.sourceUrl),
    table_configuration: pipelineIngestionDefinitionObjectsReportTableConfigurationToTerraform(struct!.tableConfiguration),
  }
}


export function pipelineIngestionDefinitionObjectsReportToHclTerraform(struct?: PipelineIngestionDefinitionObjectsReportOutputReference | PipelineIngestionDefinitionObjectsReport): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    destination_catalog: {
      value: cdktf.stringToHclTerraform(struct!.destinationCatalog),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    destination_schema: {
      value: cdktf.stringToHclTerraform(struct!.destinationSchema),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    destination_table: {
      value: cdktf.stringToHclTerraform(struct!.destinationTable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_url: {
      value: cdktf.stringToHclTerraform(struct!.sourceUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    table_configuration: {
      value: pipelineIngestionDefinitionObjectsReportTableConfigurationToHclTerraform(struct!.tableConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "PipelineIngestionDefinitionObjectsReportTableConfigurationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PipelineIngestionDefinitionObjectsReportOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PipelineIngestionDefinitionObjectsReport | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destinationCatalog !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationCatalog = this._destinationCatalog;
    }
    if (this._destinationSchema !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationSchema = this._destinationSchema;
    }
    if (this._destinationTable !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationTable = this._destinationTable;
    }
    if (this._sourceUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceUrl = this._sourceUrl;
    }
    if (this._tableConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tableConfiguration = this._tableConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PipelineIngestionDefinitionObjectsReport | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._destinationCatalog = undefined;
      this._destinationSchema = undefined;
      this._destinationTable = undefined;
      this._sourceUrl = undefined;
      this._tableConfiguration.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._destinationCatalog = value.destinationCatalog;
      this._destinationSchema = value.destinationSchema;
      this._destinationTable = value.destinationTable;
      this._sourceUrl = value.sourceUrl;
      this._tableConfiguration.internalValue = value.tableConfiguration;
    }
  }

  // destination_catalog - computed: false, optional: false, required: true
  private _destinationCatalog?: string; 
  public get destinationCatalog() {
    return this.getStringAttribute('destination_catalog');
  }
  public set destinationCatalog(value: string) {
    this._destinationCatalog = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationCatalogInput() {
    return this._destinationCatalog;
  }

  // destination_schema - computed: false, optional: false, required: true
  private _destinationSchema?: string; 
  public get destinationSchema() {
    return this.getStringAttribute('destination_schema');
  }
  public set destinationSchema(value: string) {
    this._destinationSchema = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationSchemaInput() {
    return this._destinationSchema;
  }

  // destination_table - computed: false, optional: true, required: false
  private _destinationTable?: string; 
  public get destinationTable() {
    return this.getStringAttribute('destination_table');
  }
  public set destinationTable(value: string) {
    this._destinationTable = value;
  }
  public resetDestinationTable() {
    this._destinationTable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationTableInput() {
    return this._destinationTable;
  }

  // source_url - computed: false, optional: false, required: true
  private _sourceUrl?: string; 
  public get sourceUrl() {
    return this.getStringAttribute('source_url');
  }
  public set sourceUrl(value: string) {
    this._sourceUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceUrlInput() {
    return this._sourceUrl;
  }

  // table_configuration - computed: false, optional: true, required: false
  private _tableConfiguration = new PipelineIngestionDefinitionObjectsReportTableConfigurationOutputReference(this, "table_configuration");
  public get tableConfiguration() {
    return this._tableConfiguration;
  }
  public putTableConfiguration(value: PipelineIngestionDefinitionObjectsReportTableConfiguration) {
    this._tableConfiguration.internalValue = value;
  }
  public resetTableConfiguration() {
    this._tableConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tableConfigurationInput() {
    return this._tableConfiguration.internalValue;
  }
}
export interface PipelineIngestionDefinitionObjectsSchemaTableConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/pipeline#exclude_columns Pipeline#exclude_columns}
  */
  readonly excludeColumns?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/pipeline#include_columns Pipeline#include_columns}
  */
  readonly includeColumns?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/pipeline#primary_keys Pipeline#primary_keys}
  */
  readonly primaryKeys?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/pipeline#salesforce_include_formula_fields Pipeline#salesforce_include_formula_fields}
  */
  readonly salesforceIncludeFormulaFields?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/pipeline#scd_type Pipeline#scd_type}
  */
  readonly scdType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/pipeline#sequence_by Pipeline#sequence_by}
  */
  readonly sequenceBy?: string[];
}

export function pipelineIngestionDefinitionObjectsSchemaTableConfigurationToTerraform(struct?: PipelineIngestionDefinitionObjectsSchemaTableConfigurationOutputReference | PipelineIngestionDefinitionObjectsSchemaTableConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exclude_columns: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.excludeColumns),
    include_columns: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.includeColumns),
    primary_keys: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.primaryKeys),
    salesforce_include_formula_fields: cdktf.booleanToTerraform(struct!.salesforceIncludeFormulaFields),
    scd_type: cdktf.stringToTerraform(struct!.scdType),
    sequence_by: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.sequenceBy),
  }
}


export function pipelineIngestionDefinitionObjectsSchemaTableConfigurationToHclTerraform(struct?: PipelineIngestionDefinitionObjectsSchemaTableConfigurationOutputReference | PipelineIngestionDefinitionObjectsSchemaTableConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exclude_columns: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.excludeColumns),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    include_columns: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.includeColumns),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    primary_keys: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.primaryKeys),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    salesforce_include_formula_fields: {
      value: cdktf.booleanToHclTerraform(struct!.salesforceIncludeFormulaFields),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    scd_type: {
      value: cdktf.stringToHclTerraform(struct!.scdType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sequence_by: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.sequenceBy),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PipelineIngestionDefinitionObjectsSchemaTableConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PipelineIngestionDefinitionObjectsSchemaTableConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._excludeColumns !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludeColumns = this._excludeColumns;
    }
    if (this._includeColumns !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeColumns = this._includeColumns;
    }
    if (this._primaryKeys !== undefined) {
      hasAnyValues = true;
      internalValueResult.primaryKeys = this._primaryKeys;
    }
    if (this._salesforceIncludeFormulaFields !== undefined) {
      hasAnyValues = true;
      internalValueResult.salesforceIncludeFormulaFields = this._salesforceIncludeFormulaFields;
    }
    if (this._scdType !== undefined) {
      hasAnyValues = true;
      internalValueResult.scdType = this._scdType;
    }
    if (this._sequenceBy !== undefined) {
      hasAnyValues = true;
      internalValueResult.sequenceBy = this._sequenceBy;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PipelineIngestionDefinitionObjectsSchemaTableConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._excludeColumns = undefined;
      this._includeColumns = undefined;
      this._primaryKeys = undefined;
      this._salesforceIncludeFormulaFields = undefined;
      this._scdType = undefined;
      this._sequenceBy = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._excludeColumns = value.excludeColumns;
      this._includeColumns = value.includeColumns;
      this._primaryKeys = value.primaryKeys;
      this._salesforceIncludeFormulaFields = value.salesforceIncludeFormulaFields;
      this._scdType = value.scdType;
      this._sequenceBy = value.sequenceBy;
    }
  }

  // exclude_columns - computed: false, optional: true, required: false
  private _excludeColumns?: string[]; 
  public get excludeColumns() {
    return this.getListAttribute('exclude_columns');
  }
  public set excludeColumns(value: string[]) {
    this._excludeColumns = value;
  }
  public resetExcludeColumns() {
    this._excludeColumns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeColumnsInput() {
    return this._excludeColumns;
  }

  // include_columns - computed: false, optional: true, required: false
  private _includeColumns?: string[]; 
  public get includeColumns() {
    return this.getListAttribute('include_columns');
  }
  public set includeColumns(value: string[]) {
    this._includeColumns = value;
  }
  public resetIncludeColumns() {
    this._includeColumns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeColumnsInput() {
    return this._includeColumns;
  }

  // primary_keys - computed: false, optional: true, required: false
  private _primaryKeys?: string[]; 
  public get primaryKeys() {
    return this.getListAttribute('primary_keys');
  }
  public set primaryKeys(value: string[]) {
    this._primaryKeys = value;
  }
  public resetPrimaryKeys() {
    this._primaryKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryKeysInput() {
    return this._primaryKeys;
  }

  // salesforce_include_formula_fields - computed: false, optional: true, required: false
  private _salesforceIncludeFormulaFields?: boolean | cdktf.IResolvable; 
  public get salesforceIncludeFormulaFields() {
    return this.getBooleanAttribute('salesforce_include_formula_fields');
  }
  public set salesforceIncludeFormulaFields(value: boolean | cdktf.IResolvable) {
    this._salesforceIncludeFormulaFields = value;
  }
  public resetSalesforceIncludeFormulaFields() {
    this._salesforceIncludeFormulaFields = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get salesforceIncludeFormulaFieldsInput() {
    return this._salesforceIncludeFormulaFields;
  }

  // scd_type - computed: false, optional: true, required: false
  private _scdType?: string; 
  public get scdType() {
    return this.getStringAttribute('scd_type');
  }
  public set scdType(value: string) {
    this._scdType = value;
  }
  public resetScdType() {
    this._scdType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scdTypeInput() {
    return this._scdType;
  }

  // sequence_by - computed: false, optional: true, required: false
  private _sequenceBy?: string[]; 
  public get sequenceBy() {
    return this.getListAttribute('sequence_by');
  }
  public set sequenceBy(value: string[]) {
    this._sequenceBy = value;
  }
  public resetSequenceBy() {
    this._sequenceBy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sequenceByInput() {
    return this._sequenceBy;
  }
}
export interface PipelineIngestionDefinitionObjectsSchema {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/pipeline#destination_catalog Pipeline#destination_catalog}
  */
  readonly destinationCatalog: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/pipeline#destination_schema Pipeline#destination_schema}
  */
  readonly destinationSchema: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/pipeline#source_catalog Pipeline#source_catalog}
  */
  readonly sourceCatalog?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/pipeline#source_schema Pipeline#source_schema}
  */
  readonly sourceSchema: string;
  /**
  * table_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/pipeline#table_configuration Pipeline#table_configuration}
  */
  readonly tableConfiguration?: PipelineIngestionDefinitionObjectsSchemaTableConfiguration;
}

export function pipelineIngestionDefinitionObjectsSchemaToTerraform(struct?: PipelineIngestionDefinitionObjectsSchemaOutputReference | PipelineIngestionDefinitionObjectsSchema): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    destination_catalog: cdktf.stringToTerraform(struct!.destinationCatalog),
    destination_schema: cdktf.stringToTerraform(struct!.destinationSchema),
    source_catalog: cdktf.stringToTerraform(struct!.sourceCatalog),
    source_schema: cdktf.stringToTerraform(struct!.sourceSchema),
    table_configuration: pipelineIngestionDefinitionObjectsSchemaTableConfigurationToTerraform(struct!.tableConfiguration),
  }
}


export function pipelineIngestionDefinitionObjectsSchemaToHclTerraform(struct?: PipelineIngestionDefinitionObjectsSchemaOutputReference | PipelineIngestionDefinitionObjectsSchema): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    destination_catalog: {
      value: cdktf.stringToHclTerraform(struct!.destinationCatalog),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    destination_schema: {
      value: cdktf.stringToHclTerraform(struct!.destinationSchema),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_catalog: {
      value: cdktf.stringToHclTerraform(struct!.sourceCatalog),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_schema: {
      value: cdktf.stringToHclTerraform(struct!.sourceSchema),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    table_configuration: {
      value: pipelineIngestionDefinitionObjectsSchemaTableConfigurationToHclTerraform(struct!.tableConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "PipelineIngestionDefinitionObjectsSchemaTableConfigurationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PipelineIngestionDefinitionObjectsSchemaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PipelineIngestionDefinitionObjectsSchema | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destinationCatalog !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationCatalog = this._destinationCatalog;
    }
    if (this._destinationSchema !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationSchema = this._destinationSchema;
    }
    if (this._sourceCatalog !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceCatalog = this._sourceCatalog;
    }
    if (this._sourceSchema !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceSchema = this._sourceSchema;
    }
    if (this._tableConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tableConfiguration = this._tableConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PipelineIngestionDefinitionObjectsSchema | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._destinationCatalog = undefined;
      this._destinationSchema = undefined;
      this._sourceCatalog = undefined;
      this._sourceSchema = undefined;
      this._tableConfiguration.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._destinationCatalog = value.destinationCatalog;
      this._destinationSchema = value.destinationSchema;
      this._sourceCatalog = value.sourceCatalog;
      this._sourceSchema = value.sourceSchema;
      this._tableConfiguration.internalValue = value.tableConfiguration;
    }
  }

  // destination_catalog - computed: false, optional: false, required: true
  private _destinationCatalog?: string; 
  public get destinationCatalog() {
    return this.getStringAttribute('destination_catalog');
  }
  public set destinationCatalog(value: string) {
    this._destinationCatalog = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationCatalogInput() {
    return this._destinationCatalog;
  }

  // destination_schema - computed: false, optional: false, required: true
  private _destinationSchema?: string; 
  public get destinationSchema() {
    return this.getStringAttribute('destination_schema');
  }
  public set destinationSchema(value: string) {
    this._destinationSchema = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationSchemaInput() {
    return this._destinationSchema;
  }

  // source_catalog - computed: false, optional: true, required: false
  private _sourceCatalog?: string; 
  public get sourceCatalog() {
    return this.getStringAttribute('source_catalog');
  }
  public set sourceCatalog(value: string) {
    this._sourceCatalog = value;
  }
  public resetSourceCatalog() {
    this._sourceCatalog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceCatalogInput() {
    return this._sourceCatalog;
  }

  // source_schema - computed: false, optional: false, required: true
  private _sourceSchema?: string; 
  public get sourceSchema() {
    return this.getStringAttribute('source_schema');
  }
  public set sourceSchema(value: string) {
    this._sourceSchema = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceSchemaInput() {
    return this._sourceSchema;
  }

  // table_configuration - computed: false, optional: true, required: false
  private _tableConfiguration = new PipelineIngestionDefinitionObjectsSchemaTableConfigurationOutputReference(this, "table_configuration");
  public get tableConfiguration() {
    return this._tableConfiguration;
  }
  public putTableConfiguration(value: PipelineIngestionDefinitionObjectsSchemaTableConfiguration) {
    this._tableConfiguration.internalValue = value;
  }
  public resetTableConfiguration() {
    this._tableConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tableConfigurationInput() {
    return this._tableConfiguration.internalValue;
  }
}
export interface PipelineIngestionDefinitionObjectsTableTableConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/pipeline#exclude_columns Pipeline#exclude_columns}
  */
  readonly excludeColumns?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/pipeline#include_columns Pipeline#include_columns}
  */
  readonly includeColumns?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/pipeline#primary_keys Pipeline#primary_keys}
  */
  readonly primaryKeys?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/pipeline#salesforce_include_formula_fields Pipeline#salesforce_include_formula_fields}
  */
  readonly salesforceIncludeFormulaFields?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/pipeline#scd_type Pipeline#scd_type}
  */
  readonly scdType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/pipeline#sequence_by Pipeline#sequence_by}
  */
  readonly sequenceBy?: string[];
}

export function pipelineIngestionDefinitionObjectsTableTableConfigurationToTerraform(struct?: PipelineIngestionDefinitionObjectsTableTableConfigurationOutputReference | PipelineIngestionDefinitionObjectsTableTableConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exclude_columns: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.excludeColumns),
    include_columns: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.includeColumns),
    primary_keys: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.primaryKeys),
    salesforce_include_formula_fields: cdktf.booleanToTerraform(struct!.salesforceIncludeFormulaFields),
    scd_type: cdktf.stringToTerraform(struct!.scdType),
    sequence_by: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.sequenceBy),
  }
}


export function pipelineIngestionDefinitionObjectsTableTableConfigurationToHclTerraform(struct?: PipelineIngestionDefinitionObjectsTableTableConfigurationOutputReference | PipelineIngestionDefinitionObjectsTableTableConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exclude_columns: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.excludeColumns),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    include_columns: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.includeColumns),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    primary_keys: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.primaryKeys),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    salesforce_include_formula_fields: {
      value: cdktf.booleanToHclTerraform(struct!.salesforceIncludeFormulaFields),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    scd_type: {
      value: cdktf.stringToHclTerraform(struct!.scdType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sequence_by: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.sequenceBy),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PipelineIngestionDefinitionObjectsTableTableConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PipelineIngestionDefinitionObjectsTableTableConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._excludeColumns !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludeColumns = this._excludeColumns;
    }
    if (this._includeColumns !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeColumns = this._includeColumns;
    }
    if (this._primaryKeys !== undefined) {
      hasAnyValues = true;
      internalValueResult.primaryKeys = this._primaryKeys;
    }
    if (this._salesforceIncludeFormulaFields !== undefined) {
      hasAnyValues = true;
      internalValueResult.salesforceIncludeFormulaFields = this._salesforceIncludeFormulaFields;
    }
    if (this._scdType !== undefined) {
      hasAnyValues = true;
      internalValueResult.scdType = this._scdType;
    }
    if (this._sequenceBy !== undefined) {
      hasAnyValues = true;
      internalValueResult.sequenceBy = this._sequenceBy;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PipelineIngestionDefinitionObjectsTableTableConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._excludeColumns = undefined;
      this._includeColumns = undefined;
      this._primaryKeys = undefined;
      this._salesforceIncludeFormulaFields = undefined;
      this._scdType = undefined;
      this._sequenceBy = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._excludeColumns = value.excludeColumns;
      this._includeColumns = value.includeColumns;
      this._primaryKeys = value.primaryKeys;
      this._salesforceIncludeFormulaFields = value.salesforceIncludeFormulaFields;
      this._scdType = value.scdType;
      this._sequenceBy = value.sequenceBy;
    }
  }

  // exclude_columns - computed: false, optional: true, required: false
  private _excludeColumns?: string[]; 
  public get excludeColumns() {
    return this.getListAttribute('exclude_columns');
  }
  public set excludeColumns(value: string[]) {
    this._excludeColumns = value;
  }
  public resetExcludeColumns() {
    this._excludeColumns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeColumnsInput() {
    return this._excludeColumns;
  }

  // include_columns - computed: false, optional: true, required: false
  private _includeColumns?: string[]; 
  public get includeColumns() {
    return this.getListAttribute('include_columns');
  }
  public set includeColumns(value: string[]) {
    this._includeColumns = value;
  }
  public resetIncludeColumns() {
    this._includeColumns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeColumnsInput() {
    return this._includeColumns;
  }

  // primary_keys - computed: false, optional: true, required: false
  private _primaryKeys?: string[]; 
  public get primaryKeys() {
    return this.getListAttribute('primary_keys');
  }
  public set primaryKeys(value: string[]) {
    this._primaryKeys = value;
  }
  public resetPrimaryKeys() {
    this._primaryKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryKeysInput() {
    return this._primaryKeys;
  }

  // salesforce_include_formula_fields - computed: false, optional: true, required: false
  private _salesforceIncludeFormulaFields?: boolean | cdktf.IResolvable; 
  public get salesforceIncludeFormulaFields() {
    return this.getBooleanAttribute('salesforce_include_formula_fields');
  }
  public set salesforceIncludeFormulaFields(value: boolean | cdktf.IResolvable) {
    this._salesforceIncludeFormulaFields = value;
  }
  public resetSalesforceIncludeFormulaFields() {
    this._salesforceIncludeFormulaFields = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get salesforceIncludeFormulaFieldsInput() {
    return this._salesforceIncludeFormulaFields;
  }

  // scd_type - computed: false, optional: true, required: false
  private _scdType?: string; 
  public get scdType() {
    return this.getStringAttribute('scd_type');
  }
  public set scdType(value: string) {
    this._scdType = value;
  }
  public resetScdType() {
    this._scdType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scdTypeInput() {
    return this._scdType;
  }

  // sequence_by - computed: false, optional: true, required: false
  private _sequenceBy?: string[]; 
  public get sequenceBy() {
    return this.getListAttribute('sequence_by');
  }
  public set sequenceBy(value: string[]) {
    this._sequenceBy = value;
  }
  public resetSequenceBy() {
    this._sequenceBy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sequenceByInput() {
    return this._sequenceBy;
  }
}
export interface PipelineIngestionDefinitionObjectsTable {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/pipeline#destination_catalog Pipeline#destination_catalog}
  */
  readonly destinationCatalog: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/pipeline#destination_schema Pipeline#destination_schema}
  */
  readonly destinationSchema: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/pipeline#destination_table Pipeline#destination_table}
  */
  readonly destinationTable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/pipeline#source_catalog Pipeline#source_catalog}
  */
  readonly sourceCatalog?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/pipeline#source_schema Pipeline#source_schema}
  */
  readonly sourceSchema?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/pipeline#source_table Pipeline#source_table}
  */
  readonly sourceTable: string;
  /**
  * table_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/pipeline#table_configuration Pipeline#table_configuration}
  */
  readonly tableConfiguration?: PipelineIngestionDefinitionObjectsTableTableConfiguration;
}

export function pipelineIngestionDefinitionObjectsTableToTerraform(struct?: PipelineIngestionDefinitionObjectsTableOutputReference | PipelineIngestionDefinitionObjectsTable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    destination_catalog: cdktf.stringToTerraform(struct!.destinationCatalog),
    destination_schema: cdktf.stringToTerraform(struct!.destinationSchema),
    destination_table: cdktf.stringToTerraform(struct!.destinationTable),
    source_catalog: cdktf.stringToTerraform(struct!.sourceCatalog),
    source_schema: cdktf.stringToTerraform(struct!.sourceSchema),
    source_table: cdktf.stringToTerraform(struct!.sourceTable),
    table_configuration: pipelineIngestionDefinitionObjectsTableTableConfigurationToTerraform(struct!.tableConfiguration),
  }
}


export function pipelineIngestionDefinitionObjectsTableToHclTerraform(struct?: PipelineIngestionDefinitionObjectsTableOutputReference | PipelineIngestionDefinitionObjectsTable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    destination_catalog: {
      value: cdktf.stringToHclTerraform(struct!.destinationCatalog),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    destination_schema: {
      value: cdktf.stringToHclTerraform(struct!.destinationSchema),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    destination_table: {
      value: cdktf.stringToHclTerraform(struct!.destinationTable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_catalog: {
      value: cdktf.stringToHclTerraform(struct!.sourceCatalog),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_schema: {
      value: cdktf.stringToHclTerraform(struct!.sourceSchema),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_table: {
      value: cdktf.stringToHclTerraform(struct!.sourceTable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    table_configuration: {
      value: pipelineIngestionDefinitionObjectsTableTableConfigurationToHclTerraform(struct!.tableConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "PipelineIngestionDefinitionObjectsTableTableConfigurationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PipelineIngestionDefinitionObjectsTableOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PipelineIngestionDefinitionObjectsTable | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destinationCatalog !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationCatalog = this._destinationCatalog;
    }
    if (this._destinationSchema !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationSchema = this._destinationSchema;
    }
    if (this._destinationTable !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationTable = this._destinationTable;
    }
    if (this._sourceCatalog !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceCatalog = this._sourceCatalog;
    }
    if (this._sourceSchema !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceSchema = this._sourceSchema;
    }
    if (this._sourceTable !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceTable = this._sourceTable;
    }
    if (this._tableConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tableConfiguration = this._tableConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PipelineIngestionDefinitionObjectsTable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._destinationCatalog = undefined;
      this._destinationSchema = undefined;
      this._destinationTable = undefined;
      this._sourceCatalog = undefined;
      this._sourceSchema = undefined;
      this._sourceTable = undefined;
      this._tableConfiguration.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._destinationCatalog = value.destinationCatalog;
      this._destinationSchema = value.destinationSchema;
      this._destinationTable = value.destinationTable;
      this._sourceCatalog = value.sourceCatalog;
      this._sourceSchema = value.sourceSchema;
      this._sourceTable = value.sourceTable;
      this._tableConfiguration.internalValue = value.tableConfiguration;
    }
  }

  // destination_catalog - computed: false, optional: false, required: true
  private _destinationCatalog?: string; 
  public get destinationCatalog() {
    return this.getStringAttribute('destination_catalog');
  }
  public set destinationCatalog(value: string) {
    this._destinationCatalog = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationCatalogInput() {
    return this._destinationCatalog;
  }

  // destination_schema - computed: false, optional: false, required: true
  private _destinationSchema?: string; 
  public get destinationSchema() {
    return this.getStringAttribute('destination_schema');
  }
  public set destinationSchema(value: string) {
    this._destinationSchema = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationSchemaInput() {
    return this._destinationSchema;
  }

  // destination_table - computed: false, optional: true, required: false
  private _destinationTable?: string; 
  public get destinationTable() {
    return this.getStringAttribute('destination_table');
  }
  public set destinationTable(value: string) {
    this._destinationTable = value;
  }
  public resetDestinationTable() {
    this._destinationTable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationTableInput() {
    return this._destinationTable;
  }

  // source_catalog - computed: false, optional: true, required: false
  private _sourceCatalog?: string; 
  public get sourceCatalog() {
    return this.getStringAttribute('source_catalog');
  }
  public set sourceCatalog(value: string) {
    this._sourceCatalog = value;
  }
  public resetSourceCatalog() {
    this._sourceCatalog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceCatalogInput() {
    return this._sourceCatalog;
  }

  // source_schema - computed: false, optional: true, required: false
  private _sourceSchema?: string; 
  public get sourceSchema() {
    return this.getStringAttribute('source_schema');
  }
  public set sourceSchema(value: string) {
    this._sourceSchema = value;
  }
  public resetSourceSchema() {
    this._sourceSchema = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceSchemaInput() {
    return this._sourceSchema;
  }

  // source_table - computed: false, optional: false, required: true
  private _sourceTable?: string; 
  public get sourceTable() {
    return this.getStringAttribute('source_table');
  }
  public set sourceTable(value: string) {
    this._sourceTable = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceTableInput() {
    return this._sourceTable;
  }

  // table_configuration - computed: false, optional: true, required: false
  private _tableConfiguration = new PipelineIngestionDefinitionObjectsTableTableConfigurationOutputReference(this, "table_configuration");
  public get tableConfiguration() {
    return this._tableConfiguration;
  }
  public putTableConfiguration(value: PipelineIngestionDefinitionObjectsTableTableConfiguration) {
    this._tableConfiguration.internalValue = value;
  }
  public resetTableConfiguration() {
    this._tableConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tableConfigurationInput() {
    return this._tableConfiguration.internalValue;
  }
}
export interface PipelineIngestionDefinitionObjects {
  /**
  * report block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/pipeline#report Pipeline#report}
  */
  readonly report?: PipelineIngestionDefinitionObjectsReport;
  /**
  * schema block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/pipeline#schema Pipeline#schema}
  */
  readonly schema?: PipelineIngestionDefinitionObjectsSchema;
  /**
  * table block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/pipeline#table Pipeline#table}
  */
  readonly table?: PipelineIngestionDefinitionObjectsTable;
}

export function pipelineIngestionDefinitionObjectsToTerraform(struct?: PipelineIngestionDefinitionObjects | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    report: pipelineIngestionDefinitionObjectsReportToTerraform(struct!.report),
    schema: pipelineIngestionDefinitionObjectsSchemaToTerraform(struct!.schema),
    table: pipelineIngestionDefinitionObjectsTableToTerraform(struct!.table),
  }
}


export function pipelineIngestionDefinitionObjectsToHclTerraform(struct?: PipelineIngestionDefinitionObjects | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    report: {
      value: pipelineIngestionDefinitionObjectsReportToHclTerraform(struct!.report),
      isBlock: true,
      type: "list",
      storageClassType: "PipelineIngestionDefinitionObjectsReportList",
    },
    schema: {
      value: pipelineIngestionDefinitionObjectsSchemaToHclTerraform(struct!.schema),
      isBlock: true,
      type: "list",
      storageClassType: "PipelineIngestionDefinitionObjectsSchemaList",
    },
    table: {
      value: pipelineIngestionDefinitionObjectsTableToHclTerraform(struct!.table),
      isBlock: true,
      type: "list",
      storageClassType: "PipelineIngestionDefinitionObjectsTableList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PipelineIngestionDefinitionObjectsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): PipelineIngestionDefinitionObjects | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._report?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.report = this._report?.internalValue;
    }
    if (this._schema?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.schema = this._schema?.internalValue;
    }
    if (this._table?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.table = this._table?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PipelineIngestionDefinitionObjects | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._report.internalValue = undefined;
      this._schema.internalValue = undefined;
      this._table.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._report.internalValue = value.report;
      this._schema.internalValue = value.schema;
      this._table.internalValue = value.table;
    }
  }

  // report - computed: false, optional: true, required: false
  private _report = new PipelineIngestionDefinitionObjectsReportOutputReference(this, "report");
  public get report() {
    return this._report;
  }
  public putReport(value: PipelineIngestionDefinitionObjectsReport) {
    this._report.internalValue = value;
  }
  public resetReport() {
    this._report.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reportInput() {
    return this._report.internalValue;
  }

  // schema - computed: false, optional: true, required: false
  private _schema = new PipelineIngestionDefinitionObjectsSchemaOutputReference(this, "schema");
  public get schema() {
    return this._schema;
  }
  public putSchema(value: PipelineIngestionDefinitionObjectsSchema) {
    this._schema.internalValue = value;
  }
  public resetSchema() {
    this._schema.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaInput() {
    return this._schema.internalValue;
  }

  // table - computed: false, optional: true, required: false
  private _table = new PipelineIngestionDefinitionObjectsTableOutputReference(this, "table");
  public get table() {
    return this._table;
  }
  public putTable(value: PipelineIngestionDefinitionObjectsTable) {
    this._table.internalValue = value;
  }
  public resetTable() {
    this._table.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tableInput() {
    return this._table.internalValue;
  }
}

export class PipelineIngestionDefinitionObjectsList extends cdktf.ComplexList {
  public internalValue? : PipelineIngestionDefinitionObjects[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): PipelineIngestionDefinitionObjectsOutputReference {
    return new PipelineIngestionDefinitionObjectsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PipelineIngestionDefinitionTableConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/pipeline#exclude_columns Pipeline#exclude_columns}
  */
  readonly excludeColumns?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/pipeline#include_columns Pipeline#include_columns}
  */
  readonly includeColumns?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/pipeline#primary_keys Pipeline#primary_keys}
  */
  readonly primaryKeys?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/pipeline#salesforce_include_formula_fields Pipeline#salesforce_include_formula_fields}
  */
  readonly salesforceIncludeFormulaFields?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/pipeline#scd_type Pipeline#scd_type}
  */
  readonly scdType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/pipeline#sequence_by Pipeline#sequence_by}
  */
  readonly sequenceBy?: string[];
}

export function pipelineIngestionDefinitionTableConfigurationToTerraform(struct?: PipelineIngestionDefinitionTableConfigurationOutputReference | PipelineIngestionDefinitionTableConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exclude_columns: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.excludeColumns),
    include_columns: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.includeColumns),
    primary_keys: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.primaryKeys),
    salesforce_include_formula_fields: cdktf.booleanToTerraform(struct!.salesforceIncludeFormulaFields),
    scd_type: cdktf.stringToTerraform(struct!.scdType),
    sequence_by: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.sequenceBy),
  }
}


export function pipelineIngestionDefinitionTableConfigurationToHclTerraform(struct?: PipelineIngestionDefinitionTableConfigurationOutputReference | PipelineIngestionDefinitionTableConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exclude_columns: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.excludeColumns),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    include_columns: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.includeColumns),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    primary_keys: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.primaryKeys),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    salesforce_include_formula_fields: {
      value: cdktf.booleanToHclTerraform(struct!.salesforceIncludeFormulaFields),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    scd_type: {
      value: cdktf.stringToHclTerraform(struct!.scdType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sequence_by: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.sequenceBy),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PipelineIngestionDefinitionTableConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PipelineIngestionDefinitionTableConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._excludeColumns !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludeColumns = this._excludeColumns;
    }
    if (this._includeColumns !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeColumns = this._includeColumns;
    }
    if (this._primaryKeys !== undefined) {
      hasAnyValues = true;
      internalValueResult.primaryKeys = this._primaryKeys;
    }
    if (this._salesforceIncludeFormulaFields !== undefined) {
      hasAnyValues = true;
      internalValueResult.salesforceIncludeFormulaFields = this._salesforceIncludeFormulaFields;
    }
    if (this._scdType !== undefined) {
      hasAnyValues = true;
      internalValueResult.scdType = this._scdType;
    }
    if (this._sequenceBy !== undefined) {
      hasAnyValues = true;
      internalValueResult.sequenceBy = this._sequenceBy;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PipelineIngestionDefinitionTableConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._excludeColumns = undefined;
      this._includeColumns = undefined;
      this._primaryKeys = undefined;
      this._salesforceIncludeFormulaFields = undefined;
      this._scdType = undefined;
      this._sequenceBy = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._excludeColumns = value.excludeColumns;
      this._includeColumns = value.includeColumns;
      this._primaryKeys = value.primaryKeys;
      this._salesforceIncludeFormulaFields = value.salesforceIncludeFormulaFields;
      this._scdType = value.scdType;
      this._sequenceBy = value.sequenceBy;
    }
  }

  // exclude_columns - computed: false, optional: true, required: false
  private _excludeColumns?: string[]; 
  public get excludeColumns() {
    return this.getListAttribute('exclude_columns');
  }
  public set excludeColumns(value: string[]) {
    this._excludeColumns = value;
  }
  public resetExcludeColumns() {
    this._excludeColumns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeColumnsInput() {
    return this._excludeColumns;
  }

  // include_columns - computed: false, optional: true, required: false
  private _includeColumns?: string[]; 
  public get includeColumns() {
    return this.getListAttribute('include_columns');
  }
  public set includeColumns(value: string[]) {
    this._includeColumns = value;
  }
  public resetIncludeColumns() {
    this._includeColumns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeColumnsInput() {
    return this._includeColumns;
  }

  // primary_keys - computed: false, optional: true, required: false
  private _primaryKeys?: string[]; 
  public get primaryKeys() {
    return this.getListAttribute('primary_keys');
  }
  public set primaryKeys(value: string[]) {
    this._primaryKeys = value;
  }
  public resetPrimaryKeys() {
    this._primaryKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryKeysInput() {
    return this._primaryKeys;
  }

  // salesforce_include_formula_fields - computed: false, optional: true, required: false
  private _salesforceIncludeFormulaFields?: boolean | cdktf.IResolvable; 
  public get salesforceIncludeFormulaFields() {
    return this.getBooleanAttribute('salesforce_include_formula_fields');
  }
  public set salesforceIncludeFormulaFields(value: boolean | cdktf.IResolvable) {
    this._salesforceIncludeFormulaFields = value;
  }
  public resetSalesforceIncludeFormulaFields() {
    this._salesforceIncludeFormulaFields = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get salesforceIncludeFormulaFieldsInput() {
    return this._salesforceIncludeFormulaFields;
  }

  // scd_type - computed: false, optional: true, required: false
  private _scdType?: string; 
  public get scdType() {
    return this.getStringAttribute('scd_type');
  }
  public set scdType(value: string) {
    this._scdType = value;
  }
  public resetScdType() {
    this._scdType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scdTypeInput() {
    return this._scdType;
  }

  // sequence_by - computed: false, optional: true, required: false
  private _sequenceBy?: string[]; 
  public get sequenceBy() {
    return this.getListAttribute('sequence_by');
  }
  public set sequenceBy(value: string[]) {
    this._sequenceBy = value;
  }
  public resetSequenceBy() {
    this._sequenceBy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sequenceByInput() {
    return this._sequenceBy;
  }
}
export interface PipelineIngestionDefinition {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/pipeline#connection_name Pipeline#connection_name}
  */
  readonly connectionName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/pipeline#ingestion_gateway_id Pipeline#ingestion_gateway_id}
  */
  readonly ingestionGatewayId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/pipeline#source_type Pipeline#source_type}
  */
  readonly sourceType?: string;
  /**
  * objects block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/pipeline#objects Pipeline#objects}
  */
  readonly objects?: PipelineIngestionDefinitionObjects[] | cdktf.IResolvable;
  /**
  * table_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/pipeline#table_configuration Pipeline#table_configuration}
  */
  readonly tableConfiguration?: PipelineIngestionDefinitionTableConfiguration;
}

export function pipelineIngestionDefinitionToTerraform(struct?: PipelineIngestionDefinitionOutputReference | PipelineIngestionDefinition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    connection_name: cdktf.stringToTerraform(struct!.connectionName),
    ingestion_gateway_id: cdktf.stringToTerraform(struct!.ingestionGatewayId),
    source_type: cdktf.stringToTerraform(struct!.sourceType),
    objects: cdktf.listMapper(pipelineIngestionDefinitionObjectsToTerraform, true)(struct!.objects),
    table_configuration: pipelineIngestionDefinitionTableConfigurationToTerraform(struct!.tableConfiguration),
  }
}


export function pipelineIngestionDefinitionToHclTerraform(struct?: PipelineIngestionDefinitionOutputReference | PipelineIngestionDefinition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    connection_name: {
      value: cdktf.stringToHclTerraform(struct!.connectionName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ingestion_gateway_id: {
      value: cdktf.stringToHclTerraform(struct!.ingestionGatewayId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_type: {
      value: cdktf.stringToHclTerraform(struct!.sourceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    objects: {
      value: cdktf.listMapperHcl(pipelineIngestionDefinitionObjectsToHclTerraform, true)(struct!.objects),
      isBlock: true,
      type: "list",
      storageClassType: "PipelineIngestionDefinitionObjectsList",
    },
    table_configuration: {
      value: pipelineIngestionDefinitionTableConfigurationToHclTerraform(struct!.tableConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "PipelineIngestionDefinitionTableConfigurationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PipelineIngestionDefinitionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PipelineIngestionDefinition | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._connectionName !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionName = this._connectionName;
    }
    if (this._ingestionGatewayId !== undefined) {
      hasAnyValues = true;
      internalValueResult.ingestionGatewayId = this._ingestionGatewayId;
    }
    if (this._sourceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceType = this._sourceType;
    }
    if (this._objects?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.objects = this._objects?.internalValue;
    }
    if (this._tableConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tableConfiguration = this._tableConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PipelineIngestionDefinition | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._connectionName = undefined;
      this._ingestionGatewayId = undefined;
      this._sourceType = undefined;
      this._objects.internalValue = undefined;
      this._tableConfiguration.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._connectionName = value.connectionName;
      this._ingestionGatewayId = value.ingestionGatewayId;
      this._sourceType = value.sourceType;
      this._objects.internalValue = value.objects;
      this._tableConfiguration.internalValue = value.tableConfiguration;
    }
  }

  // connection_name - computed: false, optional: true, required: false
  private _connectionName?: string; 
  public get connectionName() {
    return this.getStringAttribute('connection_name');
  }
  public set connectionName(value: string) {
    this._connectionName = value;
  }
  public resetConnectionName() {
    this._connectionName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionNameInput() {
    return this._connectionName;
  }

  // ingestion_gateway_id - computed: false, optional: true, required: false
  private _ingestionGatewayId?: string; 
  public get ingestionGatewayId() {
    return this.getStringAttribute('ingestion_gateway_id');
  }
  public set ingestionGatewayId(value: string) {
    this._ingestionGatewayId = value;
  }
  public resetIngestionGatewayId() {
    this._ingestionGatewayId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ingestionGatewayIdInput() {
    return this._ingestionGatewayId;
  }

  // source_type - computed: false, optional: true, required: false
  private _sourceType?: string; 
  public get sourceType() {
    return this.getStringAttribute('source_type');
  }
  public set sourceType(value: string) {
    this._sourceType = value;
  }
  public resetSourceType() {
    this._sourceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceTypeInput() {
    return this._sourceType;
  }

  // objects - computed: false, optional: true, required: false
  private _objects = new PipelineIngestionDefinitionObjectsList(this, "objects", false);
  public get objects() {
    return this._objects;
  }
  public putObjects(value: PipelineIngestionDefinitionObjects[] | cdktf.IResolvable) {
    this._objects.internalValue = value;
  }
  public resetObjects() {
    this._objects.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectsInput() {
    return this._objects.internalValue;
  }

  // table_configuration - computed: false, optional: true, required: false
  private _tableConfiguration = new PipelineIngestionDefinitionTableConfigurationOutputReference(this, "table_configuration");
  public get tableConfiguration() {
    return this._tableConfiguration;
  }
  public putTableConfiguration(value: PipelineIngestionDefinitionTableConfiguration) {
    this._tableConfiguration.internalValue = value;
  }
  public resetTableConfiguration() {
    this._tableConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tableConfigurationInput() {
    return this._tableConfiguration.internalValue;
  }
}
export interface PipelineLatestUpdates {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/pipeline#creation_time Pipeline#creation_time}
  */
  readonly creationTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/pipeline#state Pipeline#state}
  */
  readonly state?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/pipeline#update_id Pipeline#update_id}
  */
  readonly updateId?: string;
}

export function pipelineLatestUpdatesToTerraform(struct?: PipelineLatestUpdates | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    creation_time: cdktf.stringToTerraform(struct!.creationTime),
    state: cdktf.stringToTerraform(struct!.state),
    update_id: cdktf.stringToTerraform(struct!.updateId),
  }
}


export function pipelineLatestUpdatesToHclTerraform(struct?: PipelineLatestUpdates | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    creation_time: {
      value: cdktf.stringToHclTerraform(struct!.creationTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    state: {
      value: cdktf.stringToHclTerraform(struct!.state),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update_id: {
      value: cdktf.stringToHclTerraform(struct!.updateId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PipelineLatestUpdatesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): PipelineLatestUpdates | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._creationTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.creationTime = this._creationTime;
    }
    if (this._state !== undefined) {
      hasAnyValues = true;
      internalValueResult.state = this._state;
    }
    if (this._updateId !== undefined) {
      hasAnyValues = true;
      internalValueResult.updateId = this._updateId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PipelineLatestUpdates | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._creationTime = undefined;
      this._state = undefined;
      this._updateId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._creationTime = value.creationTime;
      this._state = value.state;
      this._updateId = value.updateId;
    }
  }

  // creation_time - computed: false, optional: true, required: false
  private _creationTime?: string; 
  public get creationTime() {
    return this.getStringAttribute('creation_time');
  }
  public set creationTime(value: string) {
    this._creationTime = value;
  }
  public resetCreationTime() {
    this._creationTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get creationTimeInput() {
    return this._creationTime;
  }

  // state - computed: false, optional: true, required: false
  private _state?: string; 
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string) {
    this._state = value;
  }
  public resetState() {
    this._state = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
  }

  // update_id - computed: false, optional: true, required: false
  private _updateId?: string; 
  public get updateId() {
    return this.getStringAttribute('update_id');
  }
  public set updateId(value: string) {
    this._updateId = value;
  }
  public resetUpdateId() {
    this._updateId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateIdInput() {
    return this._updateId;
  }
}

export class PipelineLatestUpdatesList extends cdktf.ComplexList {
  public internalValue? : PipelineLatestUpdates[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): PipelineLatestUpdatesOutputReference {
    return new PipelineLatestUpdatesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PipelineLibraryFile {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/pipeline#path Pipeline#path}
  */
  readonly path?: string;
}

export function pipelineLibraryFileToTerraform(struct?: PipelineLibraryFileOutputReference | PipelineLibraryFile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    path: cdktf.stringToTerraform(struct!.path),
  }
}


export function pipelineLibraryFileToHclTerraform(struct?: PipelineLibraryFileOutputReference | PipelineLibraryFile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PipelineLibraryFileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PipelineLibraryFile | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PipelineLibraryFile | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._path = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._path = value.path;
    }
  }

  // path - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }
}
export interface PipelineLibraryGlob {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/pipeline#include Pipeline#include}
  */
  readonly include?: string;
}

export function pipelineLibraryGlobToTerraform(struct?: PipelineLibraryGlobOutputReference | PipelineLibraryGlob): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    include: cdktf.stringToTerraform(struct!.include),
  }
}


export function pipelineLibraryGlobToHclTerraform(struct?: PipelineLibraryGlobOutputReference | PipelineLibraryGlob): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    include: {
      value: cdktf.stringToHclTerraform(struct!.include),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PipelineLibraryGlobOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PipelineLibraryGlob | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._include !== undefined) {
      hasAnyValues = true;
      internalValueResult.include = this._include;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PipelineLibraryGlob | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._include = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._include = value.include;
    }
  }

  // include - computed: false, optional: true, required: false
  private _include?: string; 
  public get include() {
    return this.getStringAttribute('include');
  }
  public set include(value: string) {
    this._include = value;
  }
  public resetInclude() {
    this._include = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeInput() {
    return this._include;
  }
}
export interface PipelineLibraryMaven {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/pipeline#coordinates Pipeline#coordinates}
  */
  readonly coordinates: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/pipeline#exclusions Pipeline#exclusions}
  */
  readonly exclusions?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/pipeline#repo Pipeline#repo}
  */
  readonly repo?: string;
}

export function pipelineLibraryMavenToTerraform(struct?: PipelineLibraryMavenOutputReference | PipelineLibraryMaven): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    coordinates: cdktf.stringToTerraform(struct!.coordinates),
    exclusions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.exclusions),
    repo: cdktf.stringToTerraform(struct!.repo),
  }
}


export function pipelineLibraryMavenToHclTerraform(struct?: PipelineLibraryMavenOutputReference | PipelineLibraryMaven): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    coordinates: {
      value: cdktf.stringToHclTerraform(struct!.coordinates),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    exclusions: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.exclusions),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    repo: {
      value: cdktf.stringToHclTerraform(struct!.repo),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PipelineLibraryMavenOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PipelineLibraryMaven | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._coordinates !== undefined) {
      hasAnyValues = true;
      internalValueResult.coordinates = this._coordinates;
    }
    if (this._exclusions !== undefined) {
      hasAnyValues = true;
      internalValueResult.exclusions = this._exclusions;
    }
    if (this._repo !== undefined) {
      hasAnyValues = true;
      internalValueResult.repo = this._repo;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PipelineLibraryMaven | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._coordinates = undefined;
      this._exclusions = undefined;
      this._repo = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._coordinates = value.coordinates;
      this._exclusions = value.exclusions;
      this._repo = value.repo;
    }
  }

  // coordinates - computed: false, optional: false, required: true
  private _coordinates?: string; 
  public get coordinates() {
    return this.getStringAttribute('coordinates');
  }
  public set coordinates(value: string) {
    this._coordinates = value;
  }
  // Temporarily expose input value. Use with caution.
  public get coordinatesInput() {
    return this._coordinates;
  }

  // exclusions - computed: false, optional: true, required: false
  private _exclusions?: string[]; 
  public get exclusions() {
    return this.getListAttribute('exclusions');
  }
  public set exclusions(value: string[]) {
    this._exclusions = value;
  }
  public resetExclusions() {
    this._exclusions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exclusionsInput() {
    return this._exclusions;
  }

  // repo - computed: false, optional: true, required: false
  private _repo?: string; 
  public get repo() {
    return this.getStringAttribute('repo');
  }
  public set repo(value: string) {
    this._repo = value;
  }
  public resetRepo() {
    this._repo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repoInput() {
    return this._repo;
  }
}
export interface PipelineLibraryNotebook {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/pipeline#path Pipeline#path}
  */
  readonly path?: string;
}

export function pipelineLibraryNotebookToTerraform(struct?: PipelineLibraryNotebookOutputReference | PipelineLibraryNotebook): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    path: cdktf.stringToTerraform(struct!.path),
  }
}


export function pipelineLibraryNotebookToHclTerraform(struct?: PipelineLibraryNotebookOutputReference | PipelineLibraryNotebook): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PipelineLibraryNotebookOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PipelineLibraryNotebook | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PipelineLibraryNotebook | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._path = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._path = value.path;
    }
  }

  // path - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }
}
export interface PipelineLibrary {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/pipeline#jar Pipeline#jar}
  */
  readonly jar?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/pipeline#whl Pipeline#whl}
  */
  readonly whl?: string;
  /**
  * file block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/pipeline#file Pipeline#file}
  */
  readonly file?: PipelineLibraryFile;
  /**
  * glob block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/pipeline#glob Pipeline#glob}
  */
  readonly glob?: PipelineLibraryGlob;
  /**
  * maven block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/pipeline#maven Pipeline#maven}
  */
  readonly maven?: PipelineLibraryMaven;
  /**
  * notebook block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/pipeline#notebook Pipeline#notebook}
  */
  readonly notebook?: PipelineLibraryNotebook;
}

export function pipelineLibraryToTerraform(struct?: PipelineLibrary | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    jar: cdktf.stringToTerraform(struct!.jar),
    whl: cdktf.stringToTerraform(struct!.whl),
    file: pipelineLibraryFileToTerraform(struct!.file),
    glob: pipelineLibraryGlobToTerraform(struct!.glob),
    maven: pipelineLibraryMavenToTerraform(struct!.maven),
    notebook: pipelineLibraryNotebookToTerraform(struct!.notebook),
  }
}


export function pipelineLibraryToHclTerraform(struct?: PipelineLibrary | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    jar: {
      value: cdktf.stringToHclTerraform(struct!.jar),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    whl: {
      value: cdktf.stringToHclTerraform(struct!.whl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    file: {
      value: pipelineLibraryFileToHclTerraform(struct!.file),
      isBlock: true,
      type: "list",
      storageClassType: "PipelineLibraryFileList",
    },
    glob: {
      value: pipelineLibraryGlobToHclTerraform(struct!.glob),
      isBlock: true,
      type: "list",
      storageClassType: "PipelineLibraryGlobList",
    },
    maven: {
      value: pipelineLibraryMavenToHclTerraform(struct!.maven),
      isBlock: true,
      type: "list",
      storageClassType: "PipelineLibraryMavenList",
    },
    notebook: {
      value: pipelineLibraryNotebookToHclTerraform(struct!.notebook),
      isBlock: true,
      type: "list",
      storageClassType: "PipelineLibraryNotebookList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PipelineLibraryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): PipelineLibrary | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._jar !== undefined) {
      hasAnyValues = true;
      internalValueResult.jar = this._jar;
    }
    if (this._whl !== undefined) {
      hasAnyValues = true;
      internalValueResult.whl = this._whl;
    }
    if (this._file?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.file = this._file?.internalValue;
    }
    if (this._glob?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.glob = this._glob?.internalValue;
    }
    if (this._maven?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.maven = this._maven?.internalValue;
    }
    if (this._notebook?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.notebook = this._notebook?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PipelineLibrary | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._jar = undefined;
      this._whl = undefined;
      this._file.internalValue = undefined;
      this._glob.internalValue = undefined;
      this._maven.internalValue = undefined;
      this._notebook.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._jar = value.jar;
      this._whl = value.whl;
      this._file.internalValue = value.file;
      this._glob.internalValue = value.glob;
      this._maven.internalValue = value.maven;
      this._notebook.internalValue = value.notebook;
    }
  }

  // jar - computed: false, optional: true, required: false
  private _jar?: string; 
  public get jar() {
    return this.getStringAttribute('jar');
  }
  public set jar(value: string) {
    this._jar = value;
  }
  public resetJar() {
    this._jar = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jarInput() {
    return this._jar;
  }

  // whl - computed: false, optional: true, required: false
  private _whl?: string; 
  public get whl() {
    return this.getStringAttribute('whl');
  }
  public set whl(value: string) {
    this._whl = value;
  }
  public resetWhl() {
    this._whl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get whlInput() {
    return this._whl;
  }

  // file - computed: false, optional: true, required: false
  private _file = new PipelineLibraryFileOutputReference(this, "file");
  public get file() {
    return this._file;
  }
  public putFile(value: PipelineLibraryFile) {
    this._file.internalValue = value;
  }
  public resetFile() {
    this._file.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileInput() {
    return this._file.internalValue;
  }

  // glob - computed: false, optional: true, required: false
  private _glob = new PipelineLibraryGlobOutputReference(this, "glob");
  public get glob() {
    return this._glob;
  }
  public putGlob(value: PipelineLibraryGlob) {
    this._glob.internalValue = value;
  }
  public resetGlob() {
    this._glob.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get globInput() {
    return this._glob.internalValue;
  }

  // maven - computed: false, optional: true, required: false
  private _maven = new PipelineLibraryMavenOutputReference(this, "maven");
  public get maven() {
    return this._maven;
  }
  public putMaven(value: PipelineLibraryMaven) {
    this._maven.internalValue = value;
  }
  public resetMaven() {
    this._maven.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mavenInput() {
    return this._maven.internalValue;
  }

  // notebook - computed: false, optional: true, required: false
  private _notebook = new PipelineLibraryNotebookOutputReference(this, "notebook");
  public get notebook() {
    return this._notebook;
  }
  public putNotebook(value: PipelineLibraryNotebook) {
    this._notebook.internalValue = value;
  }
  public resetNotebook() {
    this._notebook.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notebookInput() {
    return this._notebook.internalValue;
  }
}

export class PipelineLibraryList extends cdktf.ComplexList {
  public internalValue? : PipelineLibrary[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): PipelineLibraryOutputReference {
    return new PipelineLibraryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PipelineNotification {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/pipeline#alerts Pipeline#alerts}
  */
  readonly alerts?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/pipeline#email_recipients Pipeline#email_recipients}
  */
  readonly emailRecipients?: string[];
}

export function pipelineNotificationToTerraform(struct?: PipelineNotification | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    alerts: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.alerts),
    email_recipients: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.emailRecipients),
  }
}


export function pipelineNotificationToHclTerraform(struct?: PipelineNotification | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    alerts: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.alerts),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    email_recipients: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.emailRecipients),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PipelineNotificationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): PipelineNotification | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alerts !== undefined) {
      hasAnyValues = true;
      internalValueResult.alerts = this._alerts;
    }
    if (this._emailRecipients !== undefined) {
      hasAnyValues = true;
      internalValueResult.emailRecipients = this._emailRecipients;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PipelineNotification | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._alerts = undefined;
      this._emailRecipients = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._alerts = value.alerts;
      this._emailRecipients = value.emailRecipients;
    }
  }

  // alerts - computed: false, optional: true, required: false
  private _alerts?: string[]; 
  public get alerts() {
    return this.getListAttribute('alerts');
  }
  public set alerts(value: string[]) {
    this._alerts = value;
  }
  public resetAlerts() {
    this._alerts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alertsInput() {
    return this._alerts;
  }

  // email_recipients - computed: false, optional: true, required: false
  private _emailRecipients?: string[]; 
  public get emailRecipients() {
    return this.getListAttribute('email_recipients');
  }
  public set emailRecipients(value: string[]) {
    this._emailRecipients = value;
  }
  public resetEmailRecipients() {
    this._emailRecipients = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailRecipientsInput() {
    return this._emailRecipients;
  }
}

export class PipelineNotificationList extends cdktf.ComplexList {
  public internalValue? : PipelineNotification[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): PipelineNotificationOutputReference {
    return new PipelineNotificationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PipelineRestartWindow {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/pipeline#days_of_week Pipeline#days_of_week}
  */
  readonly daysOfWeek?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/pipeline#start_hour Pipeline#start_hour}
  */
  readonly startHour: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/pipeline#time_zone_id Pipeline#time_zone_id}
  */
  readonly timeZoneId?: string;
}

export function pipelineRestartWindowToTerraform(struct?: PipelineRestartWindowOutputReference | PipelineRestartWindow): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    days_of_week: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.daysOfWeek),
    start_hour: cdktf.numberToTerraform(struct!.startHour),
    time_zone_id: cdktf.stringToTerraform(struct!.timeZoneId),
  }
}


export function pipelineRestartWindowToHclTerraform(struct?: PipelineRestartWindowOutputReference | PipelineRestartWindow): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    days_of_week: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.daysOfWeek),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    start_hour: {
      value: cdktf.numberToHclTerraform(struct!.startHour),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    time_zone_id: {
      value: cdktf.stringToHclTerraform(struct!.timeZoneId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PipelineRestartWindowOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PipelineRestartWindow | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._daysOfWeek !== undefined) {
      hasAnyValues = true;
      internalValueResult.daysOfWeek = this._daysOfWeek;
    }
    if (this._startHour !== undefined) {
      hasAnyValues = true;
      internalValueResult.startHour = this._startHour;
    }
    if (this._timeZoneId !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeZoneId = this._timeZoneId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PipelineRestartWindow | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._daysOfWeek = undefined;
      this._startHour = undefined;
      this._timeZoneId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._daysOfWeek = value.daysOfWeek;
      this._startHour = value.startHour;
      this._timeZoneId = value.timeZoneId;
    }
  }

  // days_of_week - computed: false, optional: true, required: false
  private _daysOfWeek?: string[]; 
  public get daysOfWeek() {
    return this.getListAttribute('days_of_week');
  }
  public set daysOfWeek(value: string[]) {
    this._daysOfWeek = value;
  }
  public resetDaysOfWeek() {
    this._daysOfWeek = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get daysOfWeekInput() {
    return this._daysOfWeek;
  }

  // start_hour - computed: false, optional: false, required: true
  private _startHour?: number; 
  public get startHour() {
    return this.getNumberAttribute('start_hour');
  }
  public set startHour(value: number) {
    this._startHour = value;
  }
  // Temporarily expose input value. Use with caution.
  public get startHourInput() {
    return this._startHour;
  }

  // time_zone_id - computed: false, optional: true, required: false
  private _timeZoneId?: string; 
  public get timeZoneId() {
    return this.getStringAttribute('time_zone_id');
  }
  public set timeZoneId(value: string) {
    this._timeZoneId = value;
  }
  public resetTimeZoneId() {
    this._timeZoneId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeZoneIdInput() {
    return this._timeZoneId;
  }
}
export interface PipelineRunAs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/pipeline#service_principal_name Pipeline#service_principal_name}
  */
  readonly servicePrincipalName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/pipeline#user_name Pipeline#user_name}
  */
  readonly userName?: string;
}

export function pipelineRunAsToTerraform(struct?: PipelineRunAsOutputReference | PipelineRunAs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    service_principal_name: cdktf.stringToTerraform(struct!.servicePrincipalName),
    user_name: cdktf.stringToTerraform(struct!.userName),
  }
}


export function pipelineRunAsToHclTerraform(struct?: PipelineRunAsOutputReference | PipelineRunAs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    service_principal_name: {
      value: cdktf.stringToHclTerraform(struct!.servicePrincipalName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_name: {
      value: cdktf.stringToHclTerraform(struct!.userName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PipelineRunAsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PipelineRunAs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._servicePrincipalName !== undefined) {
      hasAnyValues = true;
      internalValueResult.servicePrincipalName = this._servicePrincipalName;
    }
    if (this._userName !== undefined) {
      hasAnyValues = true;
      internalValueResult.userName = this._userName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PipelineRunAs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._servicePrincipalName = undefined;
      this._userName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._servicePrincipalName = value.servicePrincipalName;
      this._userName = value.userName;
    }
  }

  // service_principal_name - computed: false, optional: true, required: false
  private _servicePrincipalName?: string; 
  public get servicePrincipalName() {
    return this.getStringAttribute('service_principal_name');
  }
  public set servicePrincipalName(value: string) {
    this._servicePrincipalName = value;
  }
  public resetServicePrincipalName() {
    this._servicePrincipalName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get servicePrincipalNameInput() {
    return this._servicePrincipalName;
  }

  // user_name - computed: false, optional: true, required: false
  private _userName?: string; 
  public get userName() {
    return this.getStringAttribute('user_name');
  }
  public set userName(value: string) {
    this._userName = value;
  }
  public resetUserName() {
    this._userName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userNameInput() {
    return this._userName;
  }
}
export interface PipelineTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/pipeline#default Pipeline#default}
  */
  readonly default?: string;
}

export function pipelineTimeoutsToTerraform(struct?: PipelineTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default: cdktf.stringToTerraform(struct!.default),
  }
}


export function pipelineTimeoutsToHclTerraform(struct?: PipelineTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default: {
      value: cdktf.stringToHclTerraform(struct!.default),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PipelineTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PipelineTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._default !== undefined) {
      hasAnyValues = true;
      internalValueResult.default = this._default;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PipelineTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._default = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._default = value.default;
    }
  }

  // default - computed: false, optional: true, required: false
  private _default?: string; 
  public get default() {
    return this.getStringAttribute('default');
  }
  public set default(value: string) {
    this._default = value;
  }
  public resetDefault() {
    this._default = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultInput() {
    return this._default;
  }
}
export interface PipelineTriggerCron {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/pipeline#quartz_cron_schedule Pipeline#quartz_cron_schedule}
  */
  readonly quartzCronSchedule?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/pipeline#timezone_id Pipeline#timezone_id}
  */
  readonly timezoneId?: string;
}

export function pipelineTriggerCronToTerraform(struct?: PipelineTriggerCronOutputReference | PipelineTriggerCron): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    quartz_cron_schedule: cdktf.stringToTerraform(struct!.quartzCronSchedule),
    timezone_id: cdktf.stringToTerraform(struct!.timezoneId),
  }
}


export function pipelineTriggerCronToHclTerraform(struct?: PipelineTriggerCronOutputReference | PipelineTriggerCron): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    quartz_cron_schedule: {
      value: cdktf.stringToHclTerraform(struct!.quartzCronSchedule),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timezone_id: {
      value: cdktf.stringToHclTerraform(struct!.timezoneId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PipelineTriggerCronOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PipelineTriggerCron | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._quartzCronSchedule !== undefined) {
      hasAnyValues = true;
      internalValueResult.quartzCronSchedule = this._quartzCronSchedule;
    }
    if (this._timezoneId !== undefined) {
      hasAnyValues = true;
      internalValueResult.timezoneId = this._timezoneId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PipelineTriggerCron | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._quartzCronSchedule = undefined;
      this._timezoneId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._quartzCronSchedule = value.quartzCronSchedule;
      this._timezoneId = value.timezoneId;
    }
  }

  // quartz_cron_schedule - computed: false, optional: true, required: false
  private _quartzCronSchedule?: string; 
  public get quartzCronSchedule() {
    return this.getStringAttribute('quartz_cron_schedule');
  }
  public set quartzCronSchedule(value: string) {
    this._quartzCronSchedule = value;
  }
  public resetQuartzCronSchedule() {
    this._quartzCronSchedule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get quartzCronScheduleInput() {
    return this._quartzCronSchedule;
  }

  // timezone_id - computed: false, optional: true, required: false
  private _timezoneId?: string; 
  public get timezoneId() {
    return this.getStringAttribute('timezone_id');
  }
  public set timezoneId(value: string) {
    this._timezoneId = value;
  }
  public resetTimezoneId() {
    this._timezoneId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timezoneIdInput() {
    return this._timezoneId;
  }
}
export interface PipelineTriggerManual {
}

export function pipelineTriggerManualToTerraform(struct?: PipelineTriggerManualOutputReference | PipelineTriggerManual): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function pipelineTriggerManualToHclTerraform(struct?: PipelineTriggerManualOutputReference | PipelineTriggerManual): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class PipelineTriggerManualOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PipelineTriggerManual | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PipelineTriggerManual | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface PipelineTrigger {
  /**
  * cron block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/pipeline#cron Pipeline#cron}
  */
  readonly cron?: PipelineTriggerCron;
  /**
  * manual block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/pipeline#manual Pipeline#manual}
  */
  readonly manual?: PipelineTriggerManual;
}

export function pipelineTriggerToTerraform(struct?: PipelineTriggerOutputReference | PipelineTrigger): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cron: pipelineTriggerCronToTerraform(struct!.cron),
    manual: pipelineTriggerManualToTerraform(struct!.manual),
  }
}


export function pipelineTriggerToHclTerraform(struct?: PipelineTriggerOutputReference | PipelineTrigger): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cron: {
      value: pipelineTriggerCronToHclTerraform(struct!.cron),
      isBlock: true,
      type: "list",
      storageClassType: "PipelineTriggerCronList",
    },
    manual: {
      value: pipelineTriggerManualToHclTerraform(struct!.manual),
      isBlock: true,
      type: "list",
      storageClassType: "PipelineTriggerManualList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PipelineTriggerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PipelineTrigger | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cron?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cron = this._cron?.internalValue;
    }
    if (this._manual?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.manual = this._manual?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PipelineTrigger | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cron.internalValue = undefined;
      this._manual.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cron.internalValue = value.cron;
      this._manual.internalValue = value.manual;
    }
  }

  // cron - computed: false, optional: true, required: false
  private _cron = new PipelineTriggerCronOutputReference(this, "cron");
  public get cron() {
    return this._cron;
  }
  public putCron(value: PipelineTriggerCron) {
    this._cron.internalValue = value;
  }
  public resetCron() {
    this._cron.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cronInput() {
    return this._cron.internalValue;
  }

  // manual - computed: false, optional: true, required: false
  private _manual = new PipelineTriggerManualOutputReference(this, "manual");
  public get manual() {
    return this._manual;
  }
  public putManual(value: PipelineTriggerManual) {
    this._manual.internalValue = value;
  }
  public resetManual() {
    this._manual.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get manualInput() {
    return this._manual.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/pipeline databricks_pipeline}
*/
export class Pipeline extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "databricks_pipeline";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Pipeline resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Pipeline to import
  * @param importFromId The id of the existing Pipeline that should be imported. Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/pipeline#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Pipeline to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "databricks_pipeline", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/pipeline databricks_pipeline} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PipelineConfig = {}
  */
  public constructor(scope: Construct, id: string, config: PipelineConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'databricks_pipeline',
      terraformGeneratorMetadata: {
        providerName: 'databricks',
        providerVersion: '1.79.1',
        providerVersionConstraint: '~> 1.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._allowDuplicateNames = config.allowDuplicateNames;
    this._budgetPolicyId = config.budgetPolicyId;
    this._catalog = config.catalog;
    this._cause = config.cause;
    this._channel = config.channel;
    this._clusterId = config.clusterId;
    this._configuration = config.configuration;
    this._continuous = config.continuous;
    this._creatorUserName = config.creatorUserName;
    this._development = config.development;
    this._edition = config.edition;
    this._expectedLastModified = config.expectedLastModified;
    this._health = config.health;
    this._id = config.id;
    this._lastModified = config.lastModified;
    this._name = config.name;
    this._photon = config.photon;
    this._runAsUserName = config.runAsUserName;
    this._schema = config.schema;
    this._serverless = config.serverless;
    this._state = config.state;
    this._storage = config.storage;
    this._target = config.target;
    this._url = config.url;
    this._cluster.internalValue = config.cluster;
    this._deployment.internalValue = config.deployment;
    this._eventLog.internalValue = config.eventLog;
    this._filters.internalValue = config.filters;
    this._gatewayDefinition.internalValue = config.gatewayDefinition;
    this._ingestionDefinition.internalValue = config.ingestionDefinition;
    this._latestUpdates.internalValue = config.latestUpdates;
    this._library.internalValue = config.library;
    this._notification.internalValue = config.notification;
    this._restartWindow.internalValue = config.restartWindow;
    this._runAs.internalValue = config.runAs;
    this._timeouts.internalValue = config.timeouts;
    this._trigger.internalValue = config.trigger;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allow_duplicate_names - computed: false, optional: true, required: false
  private _allowDuplicateNames?: boolean | cdktf.IResolvable; 
  public get allowDuplicateNames() {
    return this.getBooleanAttribute('allow_duplicate_names');
  }
  public set allowDuplicateNames(value: boolean | cdktf.IResolvable) {
    this._allowDuplicateNames = value;
  }
  public resetAllowDuplicateNames() {
    this._allowDuplicateNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowDuplicateNamesInput() {
    return this._allowDuplicateNames;
  }

  // budget_policy_id - computed: false, optional: true, required: false
  private _budgetPolicyId?: string; 
  public get budgetPolicyId() {
    return this.getStringAttribute('budget_policy_id');
  }
  public set budgetPolicyId(value: string) {
    this._budgetPolicyId = value;
  }
  public resetBudgetPolicyId() {
    this._budgetPolicyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get budgetPolicyIdInput() {
    return this._budgetPolicyId;
  }

  // catalog - computed: false, optional: true, required: false
  private _catalog?: string; 
  public get catalog() {
    return this.getStringAttribute('catalog');
  }
  public set catalog(value: string) {
    this._catalog = value;
  }
  public resetCatalog() {
    this._catalog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get catalogInput() {
    return this._catalog;
  }

  // cause - computed: true, optional: true, required: false
  private _cause?: string; 
  public get cause() {
    return this.getStringAttribute('cause');
  }
  public set cause(value: string) {
    this._cause = value;
  }
  public resetCause() {
    this._cause = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get causeInput() {
    return this._cause;
  }

  // channel - computed: false, optional: true, required: false
  private _channel?: string; 
  public get channel() {
    return this.getStringAttribute('channel');
  }
  public set channel(value: string) {
    this._channel = value;
  }
  public resetChannel() {
    this._channel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get channelInput() {
    return this._channel;
  }

  // cluster_id - computed: true, optional: true, required: false
  private _clusterId?: string; 
  public get clusterId() {
    return this.getStringAttribute('cluster_id');
  }
  public set clusterId(value: string) {
    this._clusterId = value;
  }
  public resetClusterId() {
    this._clusterId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterIdInput() {
    return this._clusterId;
  }

  // configuration - computed: false, optional: true, required: false
  private _configuration?: { [key: string]: string }; 
  public get configuration() {
    return this.getStringMapAttribute('configuration');
  }
  public set configuration(value: { [key: string]: string }) {
    this._configuration = value;
  }
  public resetConfiguration() {
    this._configuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationInput() {
    return this._configuration;
  }

  // continuous - computed: false, optional: true, required: false
  private _continuous?: boolean | cdktf.IResolvable; 
  public get continuous() {
    return this.getBooleanAttribute('continuous');
  }
  public set continuous(value: boolean | cdktf.IResolvable) {
    this._continuous = value;
  }
  public resetContinuous() {
    this._continuous = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get continuousInput() {
    return this._continuous;
  }

  // creator_user_name - computed: true, optional: true, required: false
  private _creatorUserName?: string; 
  public get creatorUserName() {
    return this.getStringAttribute('creator_user_name');
  }
  public set creatorUserName(value: string) {
    this._creatorUserName = value;
  }
  public resetCreatorUserName() {
    this._creatorUserName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get creatorUserNameInput() {
    return this._creatorUserName;
  }

  // development - computed: false, optional: true, required: false
  private _development?: boolean | cdktf.IResolvable; 
  public get development() {
    return this.getBooleanAttribute('development');
  }
  public set development(value: boolean | cdktf.IResolvable) {
    this._development = value;
  }
  public resetDevelopment() {
    this._development = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get developmentInput() {
    return this._development;
  }

  // edition - computed: false, optional: true, required: false
  private _edition?: string; 
  public get edition() {
    return this.getStringAttribute('edition');
  }
  public set edition(value: string) {
    this._edition = value;
  }
  public resetEdition() {
    this._edition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get editionInput() {
    return this._edition;
  }

  // expected_last_modified - computed: false, optional: true, required: false
  private _expectedLastModified?: number; 
  public get expectedLastModified() {
    return this.getNumberAttribute('expected_last_modified');
  }
  public set expectedLastModified(value: number) {
    this._expectedLastModified = value;
  }
  public resetExpectedLastModified() {
    this._expectedLastModified = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expectedLastModifiedInput() {
    return this._expectedLastModified;
  }

  // health - computed: true, optional: true, required: false
  private _health?: string; 
  public get health() {
    return this.getStringAttribute('health');
  }
  public set health(value: string) {
    this._health = value;
  }
  public resetHealth() {
    this._health = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthInput() {
    return this._health;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // last_modified - computed: true, optional: true, required: false
  private _lastModified?: number; 
  public get lastModified() {
    return this.getNumberAttribute('last_modified');
  }
  public set lastModified(value: number) {
    this._lastModified = value;
  }
  public resetLastModified() {
    this._lastModified = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastModifiedInput() {
    return this._lastModified;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // photon - computed: false, optional: true, required: false
  private _photon?: boolean | cdktf.IResolvable; 
  public get photon() {
    return this.getBooleanAttribute('photon');
  }
  public set photon(value: boolean | cdktf.IResolvable) {
    this._photon = value;
  }
  public resetPhoton() {
    this._photon = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get photonInput() {
    return this._photon;
  }

  // run_as_user_name - computed: true, optional: true, required: false
  private _runAsUserName?: string; 
  public get runAsUserName() {
    return this.getStringAttribute('run_as_user_name');
  }
  public set runAsUserName(value: string) {
    this._runAsUserName = value;
  }
  public resetRunAsUserName() {
    this._runAsUserName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runAsUserNameInput() {
    return this._runAsUserName;
  }

  // schema - computed: false, optional: true, required: false
  private _schema?: string; 
  public get schema() {
    return this.getStringAttribute('schema');
  }
  public set schema(value: string) {
    this._schema = value;
  }
  public resetSchema() {
    this._schema = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaInput() {
    return this._schema;
  }

  // serverless - computed: false, optional: true, required: false
  private _serverless?: boolean | cdktf.IResolvable; 
  public get serverless() {
    return this.getBooleanAttribute('serverless');
  }
  public set serverless(value: boolean | cdktf.IResolvable) {
    this._serverless = value;
  }
  public resetServerless() {
    this._serverless = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverlessInput() {
    return this._serverless;
  }

  // state - computed: true, optional: true, required: false
  private _state?: string; 
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string) {
    this._state = value;
  }
  public resetState() {
    this._state = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
  }

  // storage - computed: false, optional: true, required: false
  private _storage?: string; 
  public get storage() {
    return this.getStringAttribute('storage');
  }
  public set storage(value: string) {
    this._storage = value;
  }
  public resetStorage() {
    this._storage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageInput() {
    return this._storage;
  }

  // target - computed: false, optional: true, required: false
  private _target?: string; 
  public get target() {
    return this.getStringAttribute('target');
  }
  public set target(value: string) {
    this._target = value;
  }
  public resetTarget() {
    this._target = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target;
  }

  // url - computed: true, optional: true, required: false
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  public resetUrl() {
    this._url = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }

  // cluster - computed: false, optional: true, required: false
  private _cluster = new PipelineClusterList(this, "cluster", false);
  public get cluster() {
    return this._cluster;
  }
  public putCluster(value: PipelineCluster[] | cdktf.IResolvable) {
    this._cluster.internalValue = value;
  }
  public resetCluster() {
    this._cluster.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterInput() {
    return this._cluster.internalValue;
  }

  // deployment - computed: false, optional: true, required: false
  private _deployment = new PipelineDeploymentOutputReference(this, "deployment");
  public get deployment() {
    return this._deployment;
  }
  public putDeployment(value: PipelineDeployment) {
    this._deployment.internalValue = value;
  }
  public resetDeployment() {
    this._deployment.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deploymentInput() {
    return this._deployment.internalValue;
  }

  // event_log - computed: false, optional: true, required: false
  private _eventLog = new PipelineEventLogOutputReference(this, "event_log");
  public get eventLog() {
    return this._eventLog;
  }
  public putEventLog(value: PipelineEventLog) {
    this._eventLog.internalValue = value;
  }
  public resetEventLog() {
    this._eventLog.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventLogInput() {
    return this._eventLog.internalValue;
  }

  // filters - computed: false, optional: true, required: false
  private _filters = new PipelineFiltersOutputReference(this, "filters");
  public get filters() {
    return this._filters;
  }
  public putFilters(value: PipelineFilters) {
    this._filters.internalValue = value;
  }
  public resetFilters() {
    this._filters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filtersInput() {
    return this._filters.internalValue;
  }

  // gateway_definition - computed: false, optional: true, required: false
  private _gatewayDefinition = new PipelineGatewayDefinitionOutputReference(this, "gateway_definition");
  public get gatewayDefinition() {
    return this._gatewayDefinition;
  }
  public putGatewayDefinition(value: PipelineGatewayDefinition) {
    this._gatewayDefinition.internalValue = value;
  }
  public resetGatewayDefinition() {
    this._gatewayDefinition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayDefinitionInput() {
    return this._gatewayDefinition.internalValue;
  }

  // ingestion_definition - computed: false, optional: true, required: false
  private _ingestionDefinition = new PipelineIngestionDefinitionOutputReference(this, "ingestion_definition");
  public get ingestionDefinition() {
    return this._ingestionDefinition;
  }
  public putIngestionDefinition(value: PipelineIngestionDefinition) {
    this._ingestionDefinition.internalValue = value;
  }
  public resetIngestionDefinition() {
    this._ingestionDefinition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ingestionDefinitionInput() {
    return this._ingestionDefinition.internalValue;
  }

  // latest_updates - computed: false, optional: true, required: false
  private _latestUpdates = new PipelineLatestUpdatesList(this, "latest_updates", false);
  public get latestUpdates() {
    return this._latestUpdates;
  }
  public putLatestUpdates(value: PipelineLatestUpdates[] | cdktf.IResolvable) {
    this._latestUpdates.internalValue = value;
  }
  public resetLatestUpdates() {
    this._latestUpdates.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get latestUpdatesInput() {
    return this._latestUpdates.internalValue;
  }

  // library - computed: false, optional: true, required: false
  private _library = new PipelineLibraryList(this, "library", false);
  public get library() {
    return this._library;
  }
  public putLibrary(value: PipelineLibrary[] | cdktf.IResolvable) {
    this._library.internalValue = value;
  }
  public resetLibrary() {
    this._library.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get libraryInput() {
    return this._library.internalValue;
  }

  // notification - computed: false, optional: true, required: false
  private _notification = new PipelineNotificationList(this, "notification", false);
  public get notification() {
    return this._notification;
  }
  public putNotification(value: PipelineNotification[] | cdktf.IResolvable) {
    this._notification.internalValue = value;
  }
  public resetNotification() {
    this._notification.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationInput() {
    return this._notification.internalValue;
  }

  // restart_window - computed: false, optional: true, required: false
  private _restartWindow = new PipelineRestartWindowOutputReference(this, "restart_window");
  public get restartWindow() {
    return this._restartWindow;
  }
  public putRestartWindow(value: PipelineRestartWindow) {
    this._restartWindow.internalValue = value;
  }
  public resetRestartWindow() {
    this._restartWindow.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restartWindowInput() {
    return this._restartWindow.internalValue;
  }

  // run_as - computed: false, optional: true, required: false
  private _runAs = new PipelineRunAsOutputReference(this, "run_as");
  public get runAs() {
    return this._runAs;
  }
  public putRunAs(value: PipelineRunAs) {
    this._runAs.internalValue = value;
  }
  public resetRunAs() {
    this._runAs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runAsInput() {
    return this._runAs.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new PipelineTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: PipelineTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // trigger - computed: false, optional: true, required: false
  private _trigger = new PipelineTriggerOutputReference(this, "trigger");
  public get trigger() {
    return this._trigger;
  }
  public putTrigger(value: PipelineTrigger) {
    this._trigger.internalValue = value;
  }
  public resetTrigger() {
    this._trigger.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get triggerInput() {
    return this._trigger.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      allow_duplicate_names: cdktf.booleanToTerraform(this._allowDuplicateNames),
      budget_policy_id: cdktf.stringToTerraform(this._budgetPolicyId),
      catalog: cdktf.stringToTerraform(this._catalog),
      cause: cdktf.stringToTerraform(this._cause),
      channel: cdktf.stringToTerraform(this._channel),
      cluster_id: cdktf.stringToTerraform(this._clusterId),
      configuration: cdktf.hashMapper(cdktf.stringToTerraform)(this._configuration),
      continuous: cdktf.booleanToTerraform(this._continuous),
      creator_user_name: cdktf.stringToTerraform(this._creatorUserName),
      development: cdktf.booleanToTerraform(this._development),
      edition: cdktf.stringToTerraform(this._edition),
      expected_last_modified: cdktf.numberToTerraform(this._expectedLastModified),
      health: cdktf.stringToTerraform(this._health),
      id: cdktf.stringToTerraform(this._id),
      last_modified: cdktf.numberToTerraform(this._lastModified),
      name: cdktf.stringToTerraform(this._name),
      photon: cdktf.booleanToTerraform(this._photon),
      run_as_user_name: cdktf.stringToTerraform(this._runAsUserName),
      schema: cdktf.stringToTerraform(this._schema),
      serverless: cdktf.booleanToTerraform(this._serverless),
      state: cdktf.stringToTerraform(this._state),
      storage: cdktf.stringToTerraform(this._storage),
      target: cdktf.stringToTerraform(this._target),
      url: cdktf.stringToTerraform(this._url),
      cluster: cdktf.listMapper(pipelineClusterToTerraform, true)(this._cluster.internalValue),
      deployment: pipelineDeploymentToTerraform(this._deployment.internalValue),
      event_log: pipelineEventLogToTerraform(this._eventLog.internalValue),
      filters: pipelineFiltersToTerraform(this._filters.internalValue),
      gateway_definition: pipelineGatewayDefinitionToTerraform(this._gatewayDefinition.internalValue),
      ingestion_definition: pipelineIngestionDefinitionToTerraform(this._ingestionDefinition.internalValue),
      latest_updates: cdktf.listMapper(pipelineLatestUpdatesToTerraform, true)(this._latestUpdates.internalValue),
      library: cdktf.listMapper(pipelineLibraryToTerraform, true)(this._library.internalValue),
      notification: cdktf.listMapper(pipelineNotificationToTerraform, true)(this._notification.internalValue),
      restart_window: pipelineRestartWindowToTerraform(this._restartWindow.internalValue),
      run_as: pipelineRunAsToTerraform(this._runAs.internalValue),
      timeouts: pipelineTimeoutsToTerraform(this._timeouts.internalValue),
      trigger: pipelineTriggerToTerraform(this._trigger.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allow_duplicate_names: {
        value: cdktf.booleanToHclTerraform(this._allowDuplicateNames),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      budget_policy_id: {
        value: cdktf.stringToHclTerraform(this._budgetPolicyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      catalog: {
        value: cdktf.stringToHclTerraform(this._catalog),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cause: {
        value: cdktf.stringToHclTerraform(this._cause),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      channel: {
        value: cdktf.stringToHclTerraform(this._channel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cluster_id: {
        value: cdktf.stringToHclTerraform(this._clusterId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      configuration: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._configuration),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      continuous: {
        value: cdktf.booleanToHclTerraform(this._continuous),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      creator_user_name: {
        value: cdktf.stringToHclTerraform(this._creatorUserName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      development: {
        value: cdktf.booleanToHclTerraform(this._development),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      edition: {
        value: cdktf.stringToHclTerraform(this._edition),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      expected_last_modified: {
        value: cdktf.numberToHclTerraform(this._expectedLastModified),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      health: {
        value: cdktf.stringToHclTerraform(this._health),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      last_modified: {
        value: cdktf.numberToHclTerraform(this._lastModified),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      photon: {
        value: cdktf.booleanToHclTerraform(this._photon),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      run_as_user_name: {
        value: cdktf.stringToHclTerraform(this._runAsUserName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      schema: {
        value: cdktf.stringToHclTerraform(this._schema),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      serverless: {
        value: cdktf.booleanToHclTerraform(this._serverless),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      state: {
        value: cdktf.stringToHclTerraform(this._state),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      storage: {
        value: cdktf.stringToHclTerraform(this._storage),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      target: {
        value: cdktf.stringToHclTerraform(this._target),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      url: {
        value: cdktf.stringToHclTerraform(this._url),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cluster: {
        value: cdktf.listMapperHcl(pipelineClusterToHclTerraform, true)(this._cluster.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PipelineClusterList",
      },
      deployment: {
        value: pipelineDeploymentToHclTerraform(this._deployment.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PipelineDeploymentList",
      },
      event_log: {
        value: pipelineEventLogToHclTerraform(this._eventLog.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PipelineEventLogList",
      },
      filters: {
        value: pipelineFiltersToHclTerraform(this._filters.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PipelineFiltersList",
      },
      gateway_definition: {
        value: pipelineGatewayDefinitionToHclTerraform(this._gatewayDefinition.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PipelineGatewayDefinitionList",
      },
      ingestion_definition: {
        value: pipelineIngestionDefinitionToHclTerraform(this._ingestionDefinition.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PipelineIngestionDefinitionList",
      },
      latest_updates: {
        value: cdktf.listMapperHcl(pipelineLatestUpdatesToHclTerraform, true)(this._latestUpdates.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PipelineLatestUpdatesList",
      },
      library: {
        value: cdktf.listMapperHcl(pipelineLibraryToHclTerraform, true)(this._library.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PipelineLibraryList",
      },
      notification: {
        value: cdktf.listMapperHcl(pipelineNotificationToHclTerraform, true)(this._notification.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PipelineNotificationList",
      },
      restart_window: {
        value: pipelineRestartWindowToHclTerraform(this._restartWindow.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PipelineRestartWindowList",
      },
      run_as: {
        value: pipelineRunAsToHclTerraform(this._runAs.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PipelineRunAsList",
      },
      timeouts: {
        value: pipelineTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "PipelineTimeouts",
      },
      trigger: {
        value: pipelineTriggerToHclTerraform(this._trigger.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PipelineTriggerList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
