// https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/cluster
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataDatabricksClusterConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/cluster#cluster_id DataDatabricksCluster#cluster_id}
  */
  readonly clusterId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/cluster#cluster_name DataDatabricksCluster#cluster_name}
  */
  readonly clusterName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/cluster#id DataDatabricksCluster#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * cluster_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/cluster#cluster_info DataDatabricksCluster#cluster_info}
  */
  readonly clusterInfo?: DataDatabricksClusterClusterInfo;
}
export interface DataDatabricksClusterClusterInfoAutoscale {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/cluster#max_workers DataDatabricksCluster#max_workers}
  */
  readonly maxWorkers?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/cluster#min_workers DataDatabricksCluster#min_workers}
  */
  readonly minWorkers?: number;
}

export function dataDatabricksClusterClusterInfoAutoscaleToTerraform(struct?: DataDatabricksClusterClusterInfoAutoscaleOutputReference | DataDatabricksClusterClusterInfoAutoscale): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_workers: cdktf.numberToTerraform(struct!.maxWorkers),
    min_workers: cdktf.numberToTerraform(struct!.minWorkers),
  }
}


export function dataDatabricksClusterClusterInfoAutoscaleToHclTerraform(struct?: DataDatabricksClusterClusterInfoAutoscaleOutputReference | DataDatabricksClusterClusterInfoAutoscale): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksClusterClusterInfoAutoscaleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataDatabricksClusterClusterInfoAutoscale | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksClusterClusterInfoAutoscale | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._maxWorkers = undefined;
      this._minWorkers = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._maxWorkers = value.maxWorkers;
      this._minWorkers = value.minWorkers;
    }
  }

  // max_workers - computed: false, optional: true, required: false
  private _maxWorkers?: number; 
  public get maxWorkers() {
    return this.getNumberAttribute('max_workers');
  }
  public set maxWorkers(value: number) {
    this._maxWorkers = value;
  }
  public resetMaxWorkers() {
    this._maxWorkers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxWorkersInput() {
    return this._maxWorkers;
  }

  // min_workers - computed: false, optional: true, required: false
  private _minWorkers?: number; 
  public get minWorkers() {
    return this.getNumberAttribute('min_workers');
  }
  public set minWorkers(value: number) {
    this._minWorkers = value;
  }
  public resetMinWorkers() {
    this._minWorkers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minWorkersInput() {
    return this._minWorkers;
  }
}
export interface DataDatabricksClusterClusterInfoAwsAttributes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/cluster#availability DataDatabricksCluster#availability}
  */
  readonly availability?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/cluster#ebs_volume_count DataDatabricksCluster#ebs_volume_count}
  */
  readonly ebsVolumeCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/cluster#ebs_volume_iops DataDatabricksCluster#ebs_volume_iops}
  */
  readonly ebsVolumeIops?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/cluster#ebs_volume_size DataDatabricksCluster#ebs_volume_size}
  */
  readonly ebsVolumeSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/cluster#ebs_volume_throughput DataDatabricksCluster#ebs_volume_throughput}
  */
  readonly ebsVolumeThroughput?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/cluster#ebs_volume_type DataDatabricksCluster#ebs_volume_type}
  */
  readonly ebsVolumeType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/cluster#first_on_demand DataDatabricksCluster#first_on_demand}
  */
  readonly firstOnDemand?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/cluster#instance_profile_arn DataDatabricksCluster#instance_profile_arn}
  */
  readonly instanceProfileArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/cluster#spot_bid_price_percent DataDatabricksCluster#spot_bid_price_percent}
  */
  readonly spotBidPricePercent?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/cluster#zone_id DataDatabricksCluster#zone_id}
  */
  readonly zoneId?: string;
}

export function dataDatabricksClusterClusterInfoAwsAttributesToTerraform(struct?: DataDatabricksClusterClusterInfoAwsAttributesOutputReference | DataDatabricksClusterClusterInfoAwsAttributes): any {
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


export function dataDatabricksClusterClusterInfoAwsAttributesToHclTerraform(struct?: DataDatabricksClusterClusterInfoAwsAttributesOutputReference | DataDatabricksClusterClusterInfoAwsAttributes): any {
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

export class DataDatabricksClusterClusterInfoAwsAttributesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataDatabricksClusterClusterInfoAwsAttributes | undefined {
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

  public set internalValue(value: DataDatabricksClusterClusterInfoAwsAttributes | undefined) {
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
export interface DataDatabricksClusterClusterInfoAzureAttributesLogAnalyticsInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/cluster#log_analytics_primary_key DataDatabricksCluster#log_analytics_primary_key}
  */
  readonly logAnalyticsPrimaryKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/cluster#log_analytics_workspace_id DataDatabricksCluster#log_analytics_workspace_id}
  */
  readonly logAnalyticsWorkspaceId?: string;
}

export function dataDatabricksClusterClusterInfoAzureAttributesLogAnalyticsInfoToTerraform(struct?: DataDatabricksClusterClusterInfoAzureAttributesLogAnalyticsInfoOutputReference | DataDatabricksClusterClusterInfoAzureAttributesLogAnalyticsInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    log_analytics_primary_key: cdktf.stringToTerraform(struct!.logAnalyticsPrimaryKey),
    log_analytics_workspace_id: cdktf.stringToTerraform(struct!.logAnalyticsWorkspaceId),
  }
}


export function dataDatabricksClusterClusterInfoAzureAttributesLogAnalyticsInfoToHclTerraform(struct?: DataDatabricksClusterClusterInfoAzureAttributesLogAnalyticsInfoOutputReference | DataDatabricksClusterClusterInfoAzureAttributesLogAnalyticsInfo): any {
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

export class DataDatabricksClusterClusterInfoAzureAttributesLogAnalyticsInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataDatabricksClusterClusterInfoAzureAttributesLogAnalyticsInfo | undefined {
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

  public set internalValue(value: DataDatabricksClusterClusterInfoAzureAttributesLogAnalyticsInfo | undefined) {
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
export interface DataDatabricksClusterClusterInfoAzureAttributes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/cluster#availability DataDatabricksCluster#availability}
  */
  readonly availability?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/cluster#first_on_demand DataDatabricksCluster#first_on_demand}
  */
  readonly firstOnDemand?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/cluster#spot_bid_max_price DataDatabricksCluster#spot_bid_max_price}
  */
  readonly spotBidMaxPrice?: number;
  /**
  * log_analytics_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/cluster#log_analytics_info DataDatabricksCluster#log_analytics_info}
  */
  readonly logAnalyticsInfo?: DataDatabricksClusterClusterInfoAzureAttributesLogAnalyticsInfo;
}

export function dataDatabricksClusterClusterInfoAzureAttributesToTerraform(struct?: DataDatabricksClusterClusterInfoAzureAttributesOutputReference | DataDatabricksClusterClusterInfoAzureAttributes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    availability: cdktf.stringToTerraform(struct!.availability),
    first_on_demand: cdktf.numberToTerraform(struct!.firstOnDemand),
    spot_bid_max_price: cdktf.numberToTerraform(struct!.spotBidMaxPrice),
    log_analytics_info: dataDatabricksClusterClusterInfoAzureAttributesLogAnalyticsInfoToTerraform(struct!.logAnalyticsInfo),
  }
}


export function dataDatabricksClusterClusterInfoAzureAttributesToHclTerraform(struct?: DataDatabricksClusterClusterInfoAzureAttributesOutputReference | DataDatabricksClusterClusterInfoAzureAttributes): any {
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
      value: dataDatabricksClusterClusterInfoAzureAttributesLogAnalyticsInfoToHclTerraform(struct!.logAnalyticsInfo),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksClusterClusterInfoAzureAttributesLogAnalyticsInfoList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksClusterClusterInfoAzureAttributesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataDatabricksClusterClusterInfoAzureAttributes | undefined {
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

  public set internalValue(value: DataDatabricksClusterClusterInfoAzureAttributes | undefined) {
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
  private _logAnalyticsInfo = new DataDatabricksClusterClusterInfoAzureAttributesLogAnalyticsInfoOutputReference(this, "log_analytics_info");
  public get logAnalyticsInfo() {
    return this._logAnalyticsInfo;
  }
  public putLogAnalyticsInfo(value: DataDatabricksClusterClusterInfoAzureAttributesLogAnalyticsInfo) {
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
export interface DataDatabricksClusterClusterInfoClusterLogConfDbfs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/cluster#destination DataDatabricksCluster#destination}
  */
  readonly destination: string;
}

export function dataDatabricksClusterClusterInfoClusterLogConfDbfsToTerraform(struct?: DataDatabricksClusterClusterInfoClusterLogConfDbfsOutputReference | DataDatabricksClusterClusterInfoClusterLogConfDbfs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    destination: cdktf.stringToTerraform(struct!.destination),
  }
}


export function dataDatabricksClusterClusterInfoClusterLogConfDbfsToHclTerraform(struct?: DataDatabricksClusterClusterInfoClusterLogConfDbfsOutputReference | DataDatabricksClusterClusterInfoClusterLogConfDbfs): any {
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

export class DataDatabricksClusterClusterInfoClusterLogConfDbfsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataDatabricksClusterClusterInfoClusterLogConfDbfs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destination !== undefined) {
      hasAnyValues = true;
      internalValueResult.destination = this._destination;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksClusterClusterInfoClusterLogConfDbfs | undefined) {
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
export interface DataDatabricksClusterClusterInfoClusterLogConfS3 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/cluster#canned_acl DataDatabricksCluster#canned_acl}
  */
  readonly cannedAcl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/cluster#destination DataDatabricksCluster#destination}
  */
  readonly destination: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/cluster#enable_encryption DataDatabricksCluster#enable_encryption}
  */
  readonly enableEncryption?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/cluster#encryption_type DataDatabricksCluster#encryption_type}
  */
  readonly encryptionType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/cluster#endpoint DataDatabricksCluster#endpoint}
  */
  readonly endpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/cluster#kms_key DataDatabricksCluster#kms_key}
  */
  readonly kmsKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/cluster#region DataDatabricksCluster#region}
  */
  readonly region?: string;
}

export function dataDatabricksClusterClusterInfoClusterLogConfS3ToTerraform(struct?: DataDatabricksClusterClusterInfoClusterLogConfS3OutputReference | DataDatabricksClusterClusterInfoClusterLogConfS3): any {
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


export function dataDatabricksClusterClusterInfoClusterLogConfS3ToHclTerraform(struct?: DataDatabricksClusterClusterInfoClusterLogConfS3OutputReference | DataDatabricksClusterClusterInfoClusterLogConfS3): any {
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

export class DataDatabricksClusterClusterInfoClusterLogConfS3OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataDatabricksClusterClusterInfoClusterLogConfS3 | undefined {
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

  public set internalValue(value: DataDatabricksClusterClusterInfoClusterLogConfS3 | undefined) {
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
export interface DataDatabricksClusterClusterInfoClusterLogConf {
  /**
  * dbfs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/cluster#dbfs DataDatabricksCluster#dbfs}
  */
  readonly dbfs?: DataDatabricksClusterClusterInfoClusterLogConfDbfs;
  /**
  * s3 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/cluster#s3 DataDatabricksCluster#s3}
  */
  readonly s3?: DataDatabricksClusterClusterInfoClusterLogConfS3;
}

export function dataDatabricksClusterClusterInfoClusterLogConfToTerraform(struct?: DataDatabricksClusterClusterInfoClusterLogConfOutputReference | DataDatabricksClusterClusterInfoClusterLogConf): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dbfs: dataDatabricksClusterClusterInfoClusterLogConfDbfsToTerraform(struct!.dbfs),
    s3: dataDatabricksClusterClusterInfoClusterLogConfS3ToTerraform(struct!.s3),
  }
}


export function dataDatabricksClusterClusterInfoClusterLogConfToHclTerraform(struct?: DataDatabricksClusterClusterInfoClusterLogConfOutputReference | DataDatabricksClusterClusterInfoClusterLogConf): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dbfs: {
      value: dataDatabricksClusterClusterInfoClusterLogConfDbfsToHclTerraform(struct!.dbfs),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksClusterClusterInfoClusterLogConfDbfsList",
    },
    s3: {
      value: dataDatabricksClusterClusterInfoClusterLogConfS3ToHclTerraform(struct!.s3),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksClusterClusterInfoClusterLogConfS3List",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksClusterClusterInfoClusterLogConfOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataDatabricksClusterClusterInfoClusterLogConf | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksClusterClusterInfoClusterLogConf | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dbfs.internalValue = undefined;
      this._s3.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dbfs.internalValue = value.dbfs;
      this._s3.internalValue = value.s3;
    }
  }

  // dbfs - computed: false, optional: true, required: false
  private _dbfs = new DataDatabricksClusterClusterInfoClusterLogConfDbfsOutputReference(this, "dbfs");
  public get dbfs() {
    return this._dbfs;
  }
  public putDbfs(value: DataDatabricksClusterClusterInfoClusterLogConfDbfs) {
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
  private _s3 = new DataDatabricksClusterClusterInfoClusterLogConfS3OutputReference(this, "s3");
  public get s3() {
    return this._s3;
  }
  public putS3(value: DataDatabricksClusterClusterInfoClusterLogConfS3) {
    this._s3.internalValue = value;
  }
  public resetS3() {
    this._s3.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3Input() {
    return this._s3.internalValue;
  }
}
export interface DataDatabricksClusterClusterInfoClusterLogStatus {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/cluster#last_attempted DataDatabricksCluster#last_attempted}
  */
  readonly lastAttempted?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/cluster#last_exception DataDatabricksCluster#last_exception}
  */
  readonly lastException?: string;
}

export function dataDatabricksClusterClusterInfoClusterLogStatusToTerraform(struct?: DataDatabricksClusterClusterInfoClusterLogStatusOutputReference | DataDatabricksClusterClusterInfoClusterLogStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    last_attempted: cdktf.numberToTerraform(struct!.lastAttempted),
    last_exception: cdktf.stringToTerraform(struct!.lastException),
  }
}


export function dataDatabricksClusterClusterInfoClusterLogStatusToHclTerraform(struct?: DataDatabricksClusterClusterInfoClusterLogStatusOutputReference | DataDatabricksClusterClusterInfoClusterLogStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    last_attempted: {
      value: cdktf.numberToHclTerraform(struct!.lastAttempted),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    last_exception: {
      value: cdktf.stringToHclTerraform(struct!.lastException),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksClusterClusterInfoClusterLogStatusOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataDatabricksClusterClusterInfoClusterLogStatus | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._lastAttempted !== undefined) {
      hasAnyValues = true;
      internalValueResult.lastAttempted = this._lastAttempted;
    }
    if (this._lastException !== undefined) {
      hasAnyValues = true;
      internalValueResult.lastException = this._lastException;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksClusterClusterInfoClusterLogStatus | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._lastAttempted = undefined;
      this._lastException = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._lastAttempted = value.lastAttempted;
      this._lastException = value.lastException;
    }
  }

  // last_attempted - computed: false, optional: true, required: false
  private _lastAttempted?: number; 
  public get lastAttempted() {
    return this.getNumberAttribute('last_attempted');
  }
  public set lastAttempted(value: number) {
    this._lastAttempted = value;
  }
  public resetLastAttempted() {
    this._lastAttempted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastAttemptedInput() {
    return this._lastAttempted;
  }

  // last_exception - computed: false, optional: true, required: false
  private _lastException?: string; 
  public get lastException() {
    return this.getStringAttribute('last_exception');
  }
  public set lastException(value: string) {
    this._lastException = value;
  }
  public resetLastException() {
    this._lastException = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastExceptionInput() {
    return this._lastException;
  }
}
export interface DataDatabricksClusterClusterInfoDockerImageBasicAuth {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/cluster#password DataDatabricksCluster#password}
  */
  readonly password?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/cluster#username DataDatabricksCluster#username}
  */
  readonly username?: string;
}

export function dataDatabricksClusterClusterInfoDockerImageBasicAuthToTerraform(struct?: DataDatabricksClusterClusterInfoDockerImageBasicAuthOutputReference | DataDatabricksClusterClusterInfoDockerImageBasicAuth): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    password: cdktf.stringToTerraform(struct!.password),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function dataDatabricksClusterClusterInfoDockerImageBasicAuthToHclTerraform(struct?: DataDatabricksClusterClusterInfoDockerImageBasicAuthOutputReference | DataDatabricksClusterClusterInfoDockerImageBasicAuth): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    username: {
      value: cdktf.stringToHclTerraform(struct!.username),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksClusterClusterInfoDockerImageBasicAuthOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataDatabricksClusterClusterInfoDockerImageBasicAuth | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksClusterClusterInfoDockerImageBasicAuth | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._password = undefined;
      this._username = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._password = value.password;
      this._username = value.username;
    }
  }

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // username - computed: false, optional: true, required: false
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  public resetUsername() {
    this._username = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }
}
export interface DataDatabricksClusterClusterInfoDockerImage {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/cluster#url DataDatabricksCluster#url}
  */
  readonly url?: string;
  /**
  * basic_auth block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/cluster#basic_auth DataDatabricksCluster#basic_auth}
  */
  readonly basicAuth?: DataDatabricksClusterClusterInfoDockerImageBasicAuth;
}

export function dataDatabricksClusterClusterInfoDockerImageToTerraform(struct?: DataDatabricksClusterClusterInfoDockerImageOutputReference | DataDatabricksClusterClusterInfoDockerImage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    url: cdktf.stringToTerraform(struct!.url),
    basic_auth: dataDatabricksClusterClusterInfoDockerImageBasicAuthToTerraform(struct!.basicAuth),
  }
}


export function dataDatabricksClusterClusterInfoDockerImageToHclTerraform(struct?: DataDatabricksClusterClusterInfoDockerImageOutputReference | DataDatabricksClusterClusterInfoDockerImage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    basic_auth: {
      value: dataDatabricksClusterClusterInfoDockerImageBasicAuthToHclTerraform(struct!.basicAuth),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksClusterClusterInfoDockerImageBasicAuthList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksClusterClusterInfoDockerImageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataDatabricksClusterClusterInfoDockerImage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    if (this._basicAuth?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.basicAuth = this._basicAuth?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksClusterClusterInfoDockerImage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._url = undefined;
      this._basicAuth.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._url = value.url;
      this._basicAuth.internalValue = value.basicAuth;
    }
  }

  // url - computed: false, optional: true, required: false
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

  // basic_auth - computed: false, optional: true, required: false
  private _basicAuth = new DataDatabricksClusterClusterInfoDockerImageBasicAuthOutputReference(this, "basic_auth");
  public get basicAuth() {
    return this._basicAuth;
  }
  public putBasicAuth(value: DataDatabricksClusterClusterInfoDockerImageBasicAuth) {
    this._basicAuth.internalValue = value;
  }
  public resetBasicAuth() {
    this._basicAuth.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get basicAuthInput() {
    return this._basicAuth.internalValue;
  }
}
export interface DataDatabricksClusterClusterInfoDriverNodeAwsAttributes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/cluster#is_spot DataDatabricksCluster#is_spot}
  */
  readonly isSpot?: boolean | cdktf.IResolvable;
}

export function dataDatabricksClusterClusterInfoDriverNodeAwsAttributesToTerraform(struct?: DataDatabricksClusterClusterInfoDriverNodeAwsAttributesOutputReference | DataDatabricksClusterClusterInfoDriverNodeAwsAttributes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    is_spot: cdktf.booleanToTerraform(struct!.isSpot),
  }
}


export function dataDatabricksClusterClusterInfoDriverNodeAwsAttributesToHclTerraform(struct?: DataDatabricksClusterClusterInfoDriverNodeAwsAttributesOutputReference | DataDatabricksClusterClusterInfoDriverNodeAwsAttributes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    is_spot: {
      value: cdktf.booleanToHclTerraform(struct!.isSpot),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksClusterClusterInfoDriverNodeAwsAttributesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataDatabricksClusterClusterInfoDriverNodeAwsAttributes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._isSpot !== undefined) {
      hasAnyValues = true;
      internalValueResult.isSpot = this._isSpot;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksClusterClusterInfoDriverNodeAwsAttributes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._isSpot = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._isSpot = value.isSpot;
    }
  }

  // is_spot - computed: false, optional: true, required: false
  private _isSpot?: boolean | cdktf.IResolvable; 
  public get isSpot() {
    return this.getBooleanAttribute('is_spot');
  }
  public set isSpot(value: boolean | cdktf.IResolvable) {
    this._isSpot = value;
  }
  public resetIsSpot() {
    this._isSpot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isSpotInput() {
    return this._isSpot;
  }
}
export interface DataDatabricksClusterClusterInfoDriver {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/cluster#host_private_ip DataDatabricksCluster#host_private_ip}
  */
  readonly hostPrivateIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/cluster#instance_id DataDatabricksCluster#instance_id}
  */
  readonly instanceId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/cluster#node_id DataDatabricksCluster#node_id}
  */
  readonly nodeId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/cluster#private_ip DataDatabricksCluster#private_ip}
  */
  readonly privateIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/cluster#public_dns DataDatabricksCluster#public_dns}
  */
  readonly publicDns?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/cluster#start_timestamp DataDatabricksCluster#start_timestamp}
  */
  readonly startTimestamp?: number;
  /**
  * node_aws_attributes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/cluster#node_aws_attributes DataDatabricksCluster#node_aws_attributes}
  */
  readonly nodeAwsAttributes?: DataDatabricksClusterClusterInfoDriverNodeAwsAttributes;
}

export function dataDatabricksClusterClusterInfoDriverToTerraform(struct?: DataDatabricksClusterClusterInfoDriverOutputReference | DataDatabricksClusterClusterInfoDriver): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host_private_ip: cdktf.stringToTerraform(struct!.hostPrivateIp),
    instance_id: cdktf.stringToTerraform(struct!.instanceId),
    node_id: cdktf.stringToTerraform(struct!.nodeId),
    private_ip: cdktf.stringToTerraform(struct!.privateIp),
    public_dns: cdktf.stringToTerraform(struct!.publicDns),
    start_timestamp: cdktf.numberToTerraform(struct!.startTimestamp),
    node_aws_attributes: dataDatabricksClusterClusterInfoDriverNodeAwsAttributesToTerraform(struct!.nodeAwsAttributes),
  }
}


export function dataDatabricksClusterClusterInfoDriverToHclTerraform(struct?: DataDatabricksClusterClusterInfoDriverOutputReference | DataDatabricksClusterClusterInfoDriver): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    host_private_ip: {
      value: cdktf.stringToHclTerraform(struct!.hostPrivateIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instance_id: {
      value: cdktf.stringToHclTerraform(struct!.instanceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    node_id: {
      value: cdktf.stringToHclTerraform(struct!.nodeId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    private_ip: {
      value: cdktf.stringToHclTerraform(struct!.privateIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    public_dns: {
      value: cdktf.stringToHclTerraform(struct!.publicDns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start_timestamp: {
      value: cdktf.numberToHclTerraform(struct!.startTimestamp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    node_aws_attributes: {
      value: dataDatabricksClusterClusterInfoDriverNodeAwsAttributesToHclTerraform(struct!.nodeAwsAttributes),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksClusterClusterInfoDriverNodeAwsAttributesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksClusterClusterInfoDriverOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataDatabricksClusterClusterInfoDriver | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hostPrivateIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostPrivateIp = this._hostPrivateIp;
    }
    if (this._instanceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceId = this._instanceId;
    }
    if (this._nodeId !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeId = this._nodeId;
    }
    if (this._privateIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateIp = this._privateIp;
    }
    if (this._publicDns !== undefined) {
      hasAnyValues = true;
      internalValueResult.publicDns = this._publicDns;
    }
    if (this._startTimestamp !== undefined) {
      hasAnyValues = true;
      internalValueResult.startTimestamp = this._startTimestamp;
    }
    if (this._nodeAwsAttributes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeAwsAttributes = this._nodeAwsAttributes?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksClusterClusterInfoDriver | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._hostPrivateIp = undefined;
      this._instanceId = undefined;
      this._nodeId = undefined;
      this._privateIp = undefined;
      this._publicDns = undefined;
      this._startTimestamp = undefined;
      this._nodeAwsAttributes.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._hostPrivateIp = value.hostPrivateIp;
      this._instanceId = value.instanceId;
      this._nodeId = value.nodeId;
      this._privateIp = value.privateIp;
      this._publicDns = value.publicDns;
      this._startTimestamp = value.startTimestamp;
      this._nodeAwsAttributes.internalValue = value.nodeAwsAttributes;
    }
  }

  // host_private_ip - computed: false, optional: true, required: false
  private _hostPrivateIp?: string; 
  public get hostPrivateIp() {
    return this.getStringAttribute('host_private_ip');
  }
  public set hostPrivateIp(value: string) {
    this._hostPrivateIp = value;
  }
  public resetHostPrivateIp() {
    this._hostPrivateIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostPrivateIpInput() {
    return this._hostPrivateIp;
  }

  // instance_id - computed: false, optional: true, required: false
  private _instanceId?: string; 
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }
  public set instanceId(value: string) {
    this._instanceId = value;
  }
  public resetInstanceId() {
    this._instanceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceIdInput() {
    return this._instanceId;
  }

  // node_id - computed: false, optional: true, required: false
  private _nodeId?: string; 
  public get nodeId() {
    return this.getStringAttribute('node_id');
  }
  public set nodeId(value: string) {
    this._nodeId = value;
  }
  public resetNodeId() {
    this._nodeId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeIdInput() {
    return this._nodeId;
  }

  // private_ip - computed: false, optional: true, required: false
  private _privateIp?: string; 
  public get privateIp() {
    return this.getStringAttribute('private_ip');
  }
  public set privateIp(value: string) {
    this._privateIp = value;
  }
  public resetPrivateIp() {
    this._privateIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateIpInput() {
    return this._privateIp;
  }

  // public_dns - computed: false, optional: true, required: false
  private _publicDns?: string; 
  public get publicDns() {
    return this.getStringAttribute('public_dns');
  }
  public set publicDns(value: string) {
    this._publicDns = value;
  }
  public resetPublicDns() {
    this._publicDns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicDnsInput() {
    return this._publicDns;
  }

  // start_timestamp - computed: false, optional: true, required: false
  private _startTimestamp?: number; 
  public get startTimestamp() {
    return this.getNumberAttribute('start_timestamp');
  }
  public set startTimestamp(value: number) {
    this._startTimestamp = value;
  }
  public resetStartTimestamp() {
    this._startTimestamp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startTimestampInput() {
    return this._startTimestamp;
  }

  // node_aws_attributes - computed: false, optional: true, required: false
  private _nodeAwsAttributes = new DataDatabricksClusterClusterInfoDriverNodeAwsAttributesOutputReference(this, "node_aws_attributes");
  public get nodeAwsAttributes() {
    return this._nodeAwsAttributes;
  }
  public putNodeAwsAttributes(value: DataDatabricksClusterClusterInfoDriverNodeAwsAttributes) {
    this._nodeAwsAttributes.internalValue = value;
  }
  public resetNodeAwsAttributes() {
    this._nodeAwsAttributes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeAwsAttributesInput() {
    return this._nodeAwsAttributes.internalValue;
  }
}
export interface DataDatabricksClusterClusterInfoExecutorsNodeAwsAttributes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/cluster#is_spot DataDatabricksCluster#is_spot}
  */
  readonly isSpot?: boolean | cdktf.IResolvable;
}

export function dataDatabricksClusterClusterInfoExecutorsNodeAwsAttributesToTerraform(struct?: DataDatabricksClusterClusterInfoExecutorsNodeAwsAttributesOutputReference | DataDatabricksClusterClusterInfoExecutorsNodeAwsAttributes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    is_spot: cdktf.booleanToTerraform(struct!.isSpot),
  }
}


export function dataDatabricksClusterClusterInfoExecutorsNodeAwsAttributesToHclTerraform(struct?: DataDatabricksClusterClusterInfoExecutorsNodeAwsAttributesOutputReference | DataDatabricksClusterClusterInfoExecutorsNodeAwsAttributes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    is_spot: {
      value: cdktf.booleanToHclTerraform(struct!.isSpot),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksClusterClusterInfoExecutorsNodeAwsAttributesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataDatabricksClusterClusterInfoExecutorsNodeAwsAttributes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._isSpot !== undefined) {
      hasAnyValues = true;
      internalValueResult.isSpot = this._isSpot;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksClusterClusterInfoExecutorsNodeAwsAttributes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._isSpot = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._isSpot = value.isSpot;
    }
  }

  // is_spot - computed: false, optional: true, required: false
  private _isSpot?: boolean | cdktf.IResolvable; 
  public get isSpot() {
    return this.getBooleanAttribute('is_spot');
  }
  public set isSpot(value: boolean | cdktf.IResolvable) {
    this._isSpot = value;
  }
  public resetIsSpot() {
    this._isSpot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isSpotInput() {
    return this._isSpot;
  }
}
export interface DataDatabricksClusterClusterInfoExecutors {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/cluster#host_private_ip DataDatabricksCluster#host_private_ip}
  */
  readonly hostPrivateIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/cluster#instance_id DataDatabricksCluster#instance_id}
  */
  readonly instanceId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/cluster#node_id DataDatabricksCluster#node_id}
  */
  readonly nodeId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/cluster#private_ip DataDatabricksCluster#private_ip}
  */
  readonly privateIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/cluster#public_dns DataDatabricksCluster#public_dns}
  */
  readonly publicDns?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/cluster#start_timestamp DataDatabricksCluster#start_timestamp}
  */
  readonly startTimestamp?: number;
  /**
  * node_aws_attributes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/cluster#node_aws_attributes DataDatabricksCluster#node_aws_attributes}
  */
  readonly nodeAwsAttributes?: DataDatabricksClusterClusterInfoExecutorsNodeAwsAttributes;
}

export function dataDatabricksClusterClusterInfoExecutorsToTerraform(struct?: DataDatabricksClusterClusterInfoExecutors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host_private_ip: cdktf.stringToTerraform(struct!.hostPrivateIp),
    instance_id: cdktf.stringToTerraform(struct!.instanceId),
    node_id: cdktf.stringToTerraform(struct!.nodeId),
    private_ip: cdktf.stringToTerraform(struct!.privateIp),
    public_dns: cdktf.stringToTerraform(struct!.publicDns),
    start_timestamp: cdktf.numberToTerraform(struct!.startTimestamp),
    node_aws_attributes: dataDatabricksClusterClusterInfoExecutorsNodeAwsAttributesToTerraform(struct!.nodeAwsAttributes),
  }
}


export function dataDatabricksClusterClusterInfoExecutorsToHclTerraform(struct?: DataDatabricksClusterClusterInfoExecutors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    host_private_ip: {
      value: cdktf.stringToHclTerraform(struct!.hostPrivateIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instance_id: {
      value: cdktf.stringToHclTerraform(struct!.instanceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    node_id: {
      value: cdktf.stringToHclTerraform(struct!.nodeId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    private_ip: {
      value: cdktf.stringToHclTerraform(struct!.privateIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    public_dns: {
      value: cdktf.stringToHclTerraform(struct!.publicDns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start_timestamp: {
      value: cdktf.numberToHclTerraform(struct!.startTimestamp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    node_aws_attributes: {
      value: dataDatabricksClusterClusterInfoExecutorsNodeAwsAttributesToHclTerraform(struct!.nodeAwsAttributes),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksClusterClusterInfoExecutorsNodeAwsAttributesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksClusterClusterInfoExecutorsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDatabricksClusterClusterInfoExecutors | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hostPrivateIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostPrivateIp = this._hostPrivateIp;
    }
    if (this._instanceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceId = this._instanceId;
    }
    if (this._nodeId !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeId = this._nodeId;
    }
    if (this._privateIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateIp = this._privateIp;
    }
    if (this._publicDns !== undefined) {
      hasAnyValues = true;
      internalValueResult.publicDns = this._publicDns;
    }
    if (this._startTimestamp !== undefined) {
      hasAnyValues = true;
      internalValueResult.startTimestamp = this._startTimestamp;
    }
    if (this._nodeAwsAttributes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeAwsAttributes = this._nodeAwsAttributes?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksClusterClusterInfoExecutors | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hostPrivateIp = undefined;
      this._instanceId = undefined;
      this._nodeId = undefined;
      this._privateIp = undefined;
      this._publicDns = undefined;
      this._startTimestamp = undefined;
      this._nodeAwsAttributes.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._hostPrivateIp = value.hostPrivateIp;
      this._instanceId = value.instanceId;
      this._nodeId = value.nodeId;
      this._privateIp = value.privateIp;
      this._publicDns = value.publicDns;
      this._startTimestamp = value.startTimestamp;
      this._nodeAwsAttributes.internalValue = value.nodeAwsAttributes;
    }
  }

  // host_private_ip - computed: false, optional: true, required: false
  private _hostPrivateIp?: string; 
  public get hostPrivateIp() {
    return this.getStringAttribute('host_private_ip');
  }
  public set hostPrivateIp(value: string) {
    this._hostPrivateIp = value;
  }
  public resetHostPrivateIp() {
    this._hostPrivateIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostPrivateIpInput() {
    return this._hostPrivateIp;
  }

  // instance_id - computed: false, optional: true, required: false
  private _instanceId?: string; 
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }
  public set instanceId(value: string) {
    this._instanceId = value;
  }
  public resetInstanceId() {
    this._instanceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceIdInput() {
    return this._instanceId;
  }

  // node_id - computed: false, optional: true, required: false
  private _nodeId?: string; 
  public get nodeId() {
    return this.getStringAttribute('node_id');
  }
  public set nodeId(value: string) {
    this._nodeId = value;
  }
  public resetNodeId() {
    this._nodeId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeIdInput() {
    return this._nodeId;
  }

  // private_ip - computed: false, optional: true, required: false
  private _privateIp?: string; 
  public get privateIp() {
    return this.getStringAttribute('private_ip');
  }
  public set privateIp(value: string) {
    this._privateIp = value;
  }
  public resetPrivateIp() {
    this._privateIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateIpInput() {
    return this._privateIp;
  }

  // public_dns - computed: false, optional: true, required: false
  private _publicDns?: string; 
  public get publicDns() {
    return this.getStringAttribute('public_dns');
  }
  public set publicDns(value: string) {
    this._publicDns = value;
  }
  public resetPublicDns() {
    this._publicDns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicDnsInput() {
    return this._publicDns;
  }

  // start_timestamp - computed: false, optional: true, required: false
  private _startTimestamp?: number; 
  public get startTimestamp() {
    return this.getNumberAttribute('start_timestamp');
  }
  public set startTimestamp(value: number) {
    this._startTimestamp = value;
  }
  public resetStartTimestamp() {
    this._startTimestamp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startTimestampInput() {
    return this._startTimestamp;
  }

  // node_aws_attributes - computed: false, optional: true, required: false
  private _nodeAwsAttributes = new DataDatabricksClusterClusterInfoExecutorsNodeAwsAttributesOutputReference(this, "node_aws_attributes");
  public get nodeAwsAttributes() {
    return this._nodeAwsAttributes;
  }
  public putNodeAwsAttributes(value: DataDatabricksClusterClusterInfoExecutorsNodeAwsAttributes) {
    this._nodeAwsAttributes.internalValue = value;
  }
  public resetNodeAwsAttributes() {
    this._nodeAwsAttributes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeAwsAttributesInput() {
    return this._nodeAwsAttributes.internalValue;
  }
}

export class DataDatabricksClusterClusterInfoExecutorsList extends cdktf.ComplexList {
  public internalValue? : DataDatabricksClusterClusterInfoExecutors[] | cdktf.IResolvable

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
  public get(index: number): DataDatabricksClusterClusterInfoExecutorsOutputReference {
    return new DataDatabricksClusterClusterInfoExecutorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDatabricksClusterClusterInfoGcpAttributes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/cluster#availability DataDatabricksCluster#availability}
  */
  readonly availability?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/cluster#boot_disk_size DataDatabricksCluster#boot_disk_size}
  */
  readonly bootDiskSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/cluster#google_service_account DataDatabricksCluster#google_service_account}
  */
  readonly googleServiceAccount?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/cluster#local_ssd_count DataDatabricksCluster#local_ssd_count}
  */
  readonly localSsdCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/cluster#use_preemptible_executors DataDatabricksCluster#use_preemptible_executors}
  */
  readonly usePreemptibleExecutors?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/cluster#zone_id DataDatabricksCluster#zone_id}
  */
  readonly zoneId?: string;
}

export function dataDatabricksClusterClusterInfoGcpAttributesToTerraform(struct?: DataDatabricksClusterClusterInfoGcpAttributesOutputReference | DataDatabricksClusterClusterInfoGcpAttributes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    availability: cdktf.stringToTerraform(struct!.availability),
    boot_disk_size: cdktf.numberToTerraform(struct!.bootDiskSize),
    google_service_account: cdktf.stringToTerraform(struct!.googleServiceAccount),
    local_ssd_count: cdktf.numberToTerraform(struct!.localSsdCount),
    use_preemptible_executors: cdktf.booleanToTerraform(struct!.usePreemptibleExecutors),
    zone_id: cdktf.stringToTerraform(struct!.zoneId),
  }
}


export function dataDatabricksClusterClusterInfoGcpAttributesToHclTerraform(struct?: DataDatabricksClusterClusterInfoGcpAttributesOutputReference | DataDatabricksClusterClusterInfoGcpAttributes): any {
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
    boot_disk_size: {
      value: cdktf.numberToHclTerraform(struct!.bootDiskSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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
    use_preemptible_executors: {
      value: cdktf.booleanToHclTerraform(struct!.usePreemptibleExecutors),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
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

export class DataDatabricksClusterClusterInfoGcpAttributesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataDatabricksClusterClusterInfoGcpAttributes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._availability !== undefined) {
      hasAnyValues = true;
      internalValueResult.availability = this._availability;
    }
    if (this._bootDiskSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.bootDiskSize = this._bootDiskSize;
    }
    if (this._googleServiceAccount !== undefined) {
      hasAnyValues = true;
      internalValueResult.googleServiceAccount = this._googleServiceAccount;
    }
    if (this._localSsdCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.localSsdCount = this._localSsdCount;
    }
    if (this._usePreemptibleExecutors !== undefined) {
      hasAnyValues = true;
      internalValueResult.usePreemptibleExecutors = this._usePreemptibleExecutors;
    }
    if (this._zoneId !== undefined) {
      hasAnyValues = true;
      internalValueResult.zoneId = this._zoneId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksClusterClusterInfoGcpAttributes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._availability = undefined;
      this._bootDiskSize = undefined;
      this._googleServiceAccount = undefined;
      this._localSsdCount = undefined;
      this._usePreemptibleExecutors = undefined;
      this._zoneId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._availability = value.availability;
      this._bootDiskSize = value.bootDiskSize;
      this._googleServiceAccount = value.googleServiceAccount;
      this._localSsdCount = value.localSsdCount;
      this._usePreemptibleExecutors = value.usePreemptibleExecutors;
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

  // boot_disk_size - computed: false, optional: true, required: false
  private _bootDiskSize?: number; 
  public get bootDiskSize() {
    return this.getNumberAttribute('boot_disk_size');
  }
  public set bootDiskSize(value: number) {
    this._bootDiskSize = value;
  }
  public resetBootDiskSize() {
    this._bootDiskSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bootDiskSizeInput() {
    return this._bootDiskSize;
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

  // use_preemptible_executors - computed: false, optional: true, required: false
  private _usePreemptibleExecutors?: boolean | cdktf.IResolvable; 
  public get usePreemptibleExecutors() {
    return this.getBooleanAttribute('use_preemptible_executors');
  }
  public set usePreemptibleExecutors(value: boolean | cdktf.IResolvable) {
    this._usePreemptibleExecutors = value;
  }
  public resetUsePreemptibleExecutors() {
    this._usePreemptibleExecutors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usePreemptibleExecutorsInput() {
    return this._usePreemptibleExecutors;
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
export interface DataDatabricksClusterClusterInfoInitScriptsAbfss {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/cluster#destination DataDatabricksCluster#destination}
  */
  readonly destination: string;
}

export function dataDatabricksClusterClusterInfoInitScriptsAbfssToTerraform(struct?: DataDatabricksClusterClusterInfoInitScriptsAbfssOutputReference | DataDatabricksClusterClusterInfoInitScriptsAbfss): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    destination: cdktf.stringToTerraform(struct!.destination),
  }
}


export function dataDatabricksClusterClusterInfoInitScriptsAbfssToHclTerraform(struct?: DataDatabricksClusterClusterInfoInitScriptsAbfssOutputReference | DataDatabricksClusterClusterInfoInitScriptsAbfss): any {
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

export class DataDatabricksClusterClusterInfoInitScriptsAbfssOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataDatabricksClusterClusterInfoInitScriptsAbfss | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destination !== undefined) {
      hasAnyValues = true;
      internalValueResult.destination = this._destination;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksClusterClusterInfoInitScriptsAbfss | undefined) {
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
export interface DataDatabricksClusterClusterInfoInitScriptsDbfs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/cluster#destination DataDatabricksCluster#destination}
  */
  readonly destination: string;
}

export function dataDatabricksClusterClusterInfoInitScriptsDbfsToTerraform(struct?: DataDatabricksClusterClusterInfoInitScriptsDbfsOutputReference | DataDatabricksClusterClusterInfoInitScriptsDbfs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    destination: cdktf.stringToTerraform(struct!.destination),
  }
}


export function dataDatabricksClusterClusterInfoInitScriptsDbfsToHclTerraform(struct?: DataDatabricksClusterClusterInfoInitScriptsDbfsOutputReference | DataDatabricksClusterClusterInfoInitScriptsDbfs): any {
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

export class DataDatabricksClusterClusterInfoInitScriptsDbfsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataDatabricksClusterClusterInfoInitScriptsDbfs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destination !== undefined) {
      hasAnyValues = true;
      internalValueResult.destination = this._destination;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksClusterClusterInfoInitScriptsDbfs | undefined) {
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
export interface DataDatabricksClusterClusterInfoInitScriptsFile {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/cluster#destination DataDatabricksCluster#destination}
  */
  readonly destination: string;
}

export function dataDatabricksClusterClusterInfoInitScriptsFileToTerraform(struct?: DataDatabricksClusterClusterInfoInitScriptsFileOutputReference | DataDatabricksClusterClusterInfoInitScriptsFile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    destination: cdktf.stringToTerraform(struct!.destination),
  }
}


export function dataDatabricksClusterClusterInfoInitScriptsFileToHclTerraform(struct?: DataDatabricksClusterClusterInfoInitScriptsFileOutputReference | DataDatabricksClusterClusterInfoInitScriptsFile): any {
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

export class DataDatabricksClusterClusterInfoInitScriptsFileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataDatabricksClusterClusterInfoInitScriptsFile | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destination !== undefined) {
      hasAnyValues = true;
      internalValueResult.destination = this._destination;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksClusterClusterInfoInitScriptsFile | undefined) {
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
export interface DataDatabricksClusterClusterInfoInitScriptsGcs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/cluster#destination DataDatabricksCluster#destination}
  */
  readonly destination: string;
}

export function dataDatabricksClusterClusterInfoInitScriptsGcsToTerraform(struct?: DataDatabricksClusterClusterInfoInitScriptsGcsOutputReference | DataDatabricksClusterClusterInfoInitScriptsGcs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    destination: cdktf.stringToTerraform(struct!.destination),
  }
}


export function dataDatabricksClusterClusterInfoInitScriptsGcsToHclTerraform(struct?: DataDatabricksClusterClusterInfoInitScriptsGcsOutputReference | DataDatabricksClusterClusterInfoInitScriptsGcs): any {
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

export class DataDatabricksClusterClusterInfoInitScriptsGcsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataDatabricksClusterClusterInfoInitScriptsGcs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destination !== undefined) {
      hasAnyValues = true;
      internalValueResult.destination = this._destination;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksClusterClusterInfoInitScriptsGcs | undefined) {
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
export interface DataDatabricksClusterClusterInfoInitScriptsS3 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/cluster#canned_acl DataDatabricksCluster#canned_acl}
  */
  readonly cannedAcl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/cluster#destination DataDatabricksCluster#destination}
  */
  readonly destination: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/cluster#enable_encryption DataDatabricksCluster#enable_encryption}
  */
  readonly enableEncryption?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/cluster#encryption_type DataDatabricksCluster#encryption_type}
  */
  readonly encryptionType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/cluster#endpoint DataDatabricksCluster#endpoint}
  */
  readonly endpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/cluster#kms_key DataDatabricksCluster#kms_key}
  */
  readonly kmsKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/cluster#region DataDatabricksCluster#region}
  */
  readonly region?: string;
}

export function dataDatabricksClusterClusterInfoInitScriptsS3ToTerraform(struct?: DataDatabricksClusterClusterInfoInitScriptsS3OutputReference | DataDatabricksClusterClusterInfoInitScriptsS3): any {
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


export function dataDatabricksClusterClusterInfoInitScriptsS3ToHclTerraform(struct?: DataDatabricksClusterClusterInfoInitScriptsS3OutputReference | DataDatabricksClusterClusterInfoInitScriptsS3): any {
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

export class DataDatabricksClusterClusterInfoInitScriptsS3OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataDatabricksClusterClusterInfoInitScriptsS3 | undefined {
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

  public set internalValue(value: DataDatabricksClusterClusterInfoInitScriptsS3 | undefined) {
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
export interface DataDatabricksClusterClusterInfoInitScriptsVolumes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/cluster#destination DataDatabricksCluster#destination}
  */
  readonly destination: string;
}

export function dataDatabricksClusterClusterInfoInitScriptsVolumesToTerraform(struct?: DataDatabricksClusterClusterInfoInitScriptsVolumesOutputReference | DataDatabricksClusterClusterInfoInitScriptsVolumes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    destination: cdktf.stringToTerraform(struct!.destination),
  }
}


export function dataDatabricksClusterClusterInfoInitScriptsVolumesToHclTerraform(struct?: DataDatabricksClusterClusterInfoInitScriptsVolumesOutputReference | DataDatabricksClusterClusterInfoInitScriptsVolumes): any {
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

export class DataDatabricksClusterClusterInfoInitScriptsVolumesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataDatabricksClusterClusterInfoInitScriptsVolumes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destination !== undefined) {
      hasAnyValues = true;
      internalValueResult.destination = this._destination;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksClusterClusterInfoInitScriptsVolumes | undefined) {
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
export interface DataDatabricksClusterClusterInfoInitScriptsWorkspace {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/cluster#destination DataDatabricksCluster#destination}
  */
  readonly destination: string;
}

export function dataDatabricksClusterClusterInfoInitScriptsWorkspaceToTerraform(struct?: DataDatabricksClusterClusterInfoInitScriptsWorkspaceOutputReference | DataDatabricksClusterClusterInfoInitScriptsWorkspace): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    destination: cdktf.stringToTerraform(struct!.destination),
  }
}


export function dataDatabricksClusterClusterInfoInitScriptsWorkspaceToHclTerraform(struct?: DataDatabricksClusterClusterInfoInitScriptsWorkspaceOutputReference | DataDatabricksClusterClusterInfoInitScriptsWorkspace): any {
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

export class DataDatabricksClusterClusterInfoInitScriptsWorkspaceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataDatabricksClusterClusterInfoInitScriptsWorkspace | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destination !== undefined) {
      hasAnyValues = true;
      internalValueResult.destination = this._destination;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksClusterClusterInfoInitScriptsWorkspace | undefined) {
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
export interface DataDatabricksClusterClusterInfoInitScripts {
  /**
  * abfss block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/cluster#abfss DataDatabricksCluster#abfss}
  */
  readonly abfss?: DataDatabricksClusterClusterInfoInitScriptsAbfss;
  /**
  * dbfs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/cluster#dbfs DataDatabricksCluster#dbfs}
  */
  readonly dbfs?: DataDatabricksClusterClusterInfoInitScriptsDbfs;
  /**
  * file block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/cluster#file DataDatabricksCluster#file}
  */
  readonly file?: DataDatabricksClusterClusterInfoInitScriptsFile;
  /**
  * gcs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/cluster#gcs DataDatabricksCluster#gcs}
  */
  readonly gcs?: DataDatabricksClusterClusterInfoInitScriptsGcs;
  /**
  * s3 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/cluster#s3 DataDatabricksCluster#s3}
  */
  readonly s3?: DataDatabricksClusterClusterInfoInitScriptsS3;
  /**
  * volumes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/cluster#volumes DataDatabricksCluster#volumes}
  */
  readonly volumes?: DataDatabricksClusterClusterInfoInitScriptsVolumes;
  /**
  * workspace block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/cluster#workspace DataDatabricksCluster#workspace}
  */
  readonly workspace?: DataDatabricksClusterClusterInfoInitScriptsWorkspace;
}

export function dataDatabricksClusterClusterInfoInitScriptsToTerraform(struct?: DataDatabricksClusterClusterInfoInitScripts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    abfss: dataDatabricksClusterClusterInfoInitScriptsAbfssToTerraform(struct!.abfss),
    dbfs: dataDatabricksClusterClusterInfoInitScriptsDbfsToTerraform(struct!.dbfs),
    file: dataDatabricksClusterClusterInfoInitScriptsFileToTerraform(struct!.file),
    gcs: dataDatabricksClusterClusterInfoInitScriptsGcsToTerraform(struct!.gcs),
    s3: dataDatabricksClusterClusterInfoInitScriptsS3ToTerraform(struct!.s3),
    volumes: dataDatabricksClusterClusterInfoInitScriptsVolumesToTerraform(struct!.volumes),
    workspace: dataDatabricksClusterClusterInfoInitScriptsWorkspaceToTerraform(struct!.workspace),
  }
}


export function dataDatabricksClusterClusterInfoInitScriptsToHclTerraform(struct?: DataDatabricksClusterClusterInfoInitScripts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    abfss: {
      value: dataDatabricksClusterClusterInfoInitScriptsAbfssToHclTerraform(struct!.abfss),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksClusterClusterInfoInitScriptsAbfssList",
    },
    dbfs: {
      value: dataDatabricksClusterClusterInfoInitScriptsDbfsToHclTerraform(struct!.dbfs),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksClusterClusterInfoInitScriptsDbfsList",
    },
    file: {
      value: dataDatabricksClusterClusterInfoInitScriptsFileToHclTerraform(struct!.file),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksClusterClusterInfoInitScriptsFileList",
    },
    gcs: {
      value: dataDatabricksClusterClusterInfoInitScriptsGcsToHclTerraform(struct!.gcs),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksClusterClusterInfoInitScriptsGcsList",
    },
    s3: {
      value: dataDatabricksClusterClusterInfoInitScriptsS3ToHclTerraform(struct!.s3),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksClusterClusterInfoInitScriptsS3List",
    },
    volumes: {
      value: dataDatabricksClusterClusterInfoInitScriptsVolumesToHclTerraform(struct!.volumes),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksClusterClusterInfoInitScriptsVolumesList",
    },
    workspace: {
      value: dataDatabricksClusterClusterInfoInitScriptsWorkspaceToHclTerraform(struct!.workspace),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksClusterClusterInfoInitScriptsWorkspaceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksClusterClusterInfoInitScriptsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDatabricksClusterClusterInfoInitScripts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksClusterClusterInfoInitScripts | cdktf.IResolvable | undefined) {
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
  private _abfss = new DataDatabricksClusterClusterInfoInitScriptsAbfssOutputReference(this, "abfss");
  public get abfss() {
    return this._abfss;
  }
  public putAbfss(value: DataDatabricksClusterClusterInfoInitScriptsAbfss) {
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
  private _dbfs = new DataDatabricksClusterClusterInfoInitScriptsDbfsOutputReference(this, "dbfs");
  public get dbfs() {
    return this._dbfs;
  }
  public putDbfs(value: DataDatabricksClusterClusterInfoInitScriptsDbfs) {
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
  private _file = new DataDatabricksClusterClusterInfoInitScriptsFileOutputReference(this, "file");
  public get file() {
    return this._file;
  }
  public putFile(value: DataDatabricksClusterClusterInfoInitScriptsFile) {
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
  private _gcs = new DataDatabricksClusterClusterInfoInitScriptsGcsOutputReference(this, "gcs");
  public get gcs() {
    return this._gcs;
  }
  public putGcs(value: DataDatabricksClusterClusterInfoInitScriptsGcs) {
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
  private _s3 = new DataDatabricksClusterClusterInfoInitScriptsS3OutputReference(this, "s3");
  public get s3() {
    return this._s3;
  }
  public putS3(value: DataDatabricksClusterClusterInfoInitScriptsS3) {
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
  private _volumes = new DataDatabricksClusterClusterInfoInitScriptsVolumesOutputReference(this, "volumes");
  public get volumes() {
    return this._volumes;
  }
  public putVolumes(value: DataDatabricksClusterClusterInfoInitScriptsVolumes) {
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
  private _workspace = new DataDatabricksClusterClusterInfoInitScriptsWorkspaceOutputReference(this, "workspace");
  public get workspace() {
    return this._workspace;
  }
  public putWorkspace(value: DataDatabricksClusterClusterInfoInitScriptsWorkspace) {
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

export class DataDatabricksClusterClusterInfoInitScriptsList extends cdktf.ComplexList {
  public internalValue? : DataDatabricksClusterClusterInfoInitScripts[] | cdktf.IResolvable

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
  public get(index: number): DataDatabricksClusterClusterInfoInitScriptsOutputReference {
    return new DataDatabricksClusterClusterInfoInitScriptsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDatabricksClusterClusterInfoSpecAutoscale {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/cluster#max_workers DataDatabricksCluster#max_workers}
  */
  readonly maxWorkers?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/cluster#min_workers DataDatabricksCluster#min_workers}
  */
  readonly minWorkers?: number;
}

export function dataDatabricksClusterClusterInfoSpecAutoscaleToTerraform(struct?: DataDatabricksClusterClusterInfoSpecAutoscaleOutputReference | DataDatabricksClusterClusterInfoSpecAutoscale): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_workers: cdktf.numberToTerraform(struct!.maxWorkers),
    min_workers: cdktf.numberToTerraform(struct!.minWorkers),
  }
}


export function dataDatabricksClusterClusterInfoSpecAutoscaleToHclTerraform(struct?: DataDatabricksClusterClusterInfoSpecAutoscaleOutputReference | DataDatabricksClusterClusterInfoSpecAutoscale): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksClusterClusterInfoSpecAutoscaleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataDatabricksClusterClusterInfoSpecAutoscale | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksClusterClusterInfoSpecAutoscale | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._maxWorkers = undefined;
      this._minWorkers = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._maxWorkers = value.maxWorkers;
      this._minWorkers = value.minWorkers;
    }
  }

  // max_workers - computed: false, optional: true, required: false
  private _maxWorkers?: number; 
  public get maxWorkers() {
    return this.getNumberAttribute('max_workers');
  }
  public set maxWorkers(value: number) {
    this._maxWorkers = value;
  }
  public resetMaxWorkers() {
    this._maxWorkers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxWorkersInput() {
    return this._maxWorkers;
  }

  // min_workers - computed: false, optional: true, required: false
  private _minWorkers?: number; 
  public get minWorkers() {
    return this.getNumberAttribute('min_workers');
  }
  public set minWorkers(value: number) {
    this._minWorkers = value;
  }
  public resetMinWorkers() {
    this._minWorkers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minWorkersInput() {
    return this._minWorkers;
  }
}
export interface DataDatabricksClusterClusterInfoSpecAwsAttributes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/cluster#availability DataDatabricksCluster#availability}
  */
  readonly availability?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/cluster#ebs_volume_count DataDatabricksCluster#ebs_volume_count}
  */
  readonly ebsVolumeCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/cluster#ebs_volume_iops DataDatabricksCluster#ebs_volume_iops}
  */
  readonly ebsVolumeIops?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/cluster#ebs_volume_size DataDatabricksCluster#ebs_volume_size}
  */
  readonly ebsVolumeSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/cluster#ebs_volume_throughput DataDatabricksCluster#ebs_volume_throughput}
  */
  readonly ebsVolumeThroughput?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/cluster#ebs_volume_type DataDatabricksCluster#ebs_volume_type}
  */
  readonly ebsVolumeType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/cluster#first_on_demand DataDatabricksCluster#first_on_demand}
  */
  readonly firstOnDemand?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/cluster#instance_profile_arn DataDatabricksCluster#instance_profile_arn}
  */
  readonly instanceProfileArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/cluster#spot_bid_price_percent DataDatabricksCluster#spot_bid_price_percent}
  */
  readonly spotBidPricePercent?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/cluster#zone_id DataDatabricksCluster#zone_id}
  */
  readonly zoneId?: string;
}

export function dataDatabricksClusterClusterInfoSpecAwsAttributesToTerraform(struct?: DataDatabricksClusterClusterInfoSpecAwsAttributesOutputReference | DataDatabricksClusterClusterInfoSpecAwsAttributes): any {
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


export function dataDatabricksClusterClusterInfoSpecAwsAttributesToHclTerraform(struct?: DataDatabricksClusterClusterInfoSpecAwsAttributesOutputReference | DataDatabricksClusterClusterInfoSpecAwsAttributes): any {
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

export class DataDatabricksClusterClusterInfoSpecAwsAttributesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataDatabricksClusterClusterInfoSpecAwsAttributes | undefined {
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

  public set internalValue(value: DataDatabricksClusterClusterInfoSpecAwsAttributes | undefined) {
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
export interface DataDatabricksClusterClusterInfoSpecAzureAttributesLogAnalyticsInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/cluster#log_analytics_primary_key DataDatabricksCluster#log_analytics_primary_key}
  */
  readonly logAnalyticsPrimaryKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/cluster#log_analytics_workspace_id DataDatabricksCluster#log_analytics_workspace_id}
  */
  readonly logAnalyticsWorkspaceId?: string;
}

export function dataDatabricksClusterClusterInfoSpecAzureAttributesLogAnalyticsInfoToTerraform(struct?: DataDatabricksClusterClusterInfoSpecAzureAttributesLogAnalyticsInfoOutputReference | DataDatabricksClusterClusterInfoSpecAzureAttributesLogAnalyticsInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    log_analytics_primary_key: cdktf.stringToTerraform(struct!.logAnalyticsPrimaryKey),
    log_analytics_workspace_id: cdktf.stringToTerraform(struct!.logAnalyticsWorkspaceId),
  }
}


export function dataDatabricksClusterClusterInfoSpecAzureAttributesLogAnalyticsInfoToHclTerraform(struct?: DataDatabricksClusterClusterInfoSpecAzureAttributesLogAnalyticsInfoOutputReference | DataDatabricksClusterClusterInfoSpecAzureAttributesLogAnalyticsInfo): any {
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

export class DataDatabricksClusterClusterInfoSpecAzureAttributesLogAnalyticsInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataDatabricksClusterClusterInfoSpecAzureAttributesLogAnalyticsInfo | undefined {
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

  public set internalValue(value: DataDatabricksClusterClusterInfoSpecAzureAttributesLogAnalyticsInfo | undefined) {
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
export interface DataDatabricksClusterClusterInfoSpecAzureAttributes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/cluster#availability DataDatabricksCluster#availability}
  */
  readonly availability?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/cluster#first_on_demand DataDatabricksCluster#first_on_demand}
  */
  readonly firstOnDemand?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/cluster#spot_bid_max_price DataDatabricksCluster#spot_bid_max_price}
  */
  readonly spotBidMaxPrice?: number;
  /**
  * log_analytics_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/cluster#log_analytics_info DataDatabricksCluster#log_analytics_info}
  */
  readonly logAnalyticsInfo?: DataDatabricksClusterClusterInfoSpecAzureAttributesLogAnalyticsInfo;
}

export function dataDatabricksClusterClusterInfoSpecAzureAttributesToTerraform(struct?: DataDatabricksClusterClusterInfoSpecAzureAttributesOutputReference | DataDatabricksClusterClusterInfoSpecAzureAttributes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    availability: cdktf.stringToTerraform(struct!.availability),
    first_on_demand: cdktf.numberToTerraform(struct!.firstOnDemand),
    spot_bid_max_price: cdktf.numberToTerraform(struct!.spotBidMaxPrice),
    log_analytics_info: dataDatabricksClusterClusterInfoSpecAzureAttributesLogAnalyticsInfoToTerraform(struct!.logAnalyticsInfo),
  }
}


export function dataDatabricksClusterClusterInfoSpecAzureAttributesToHclTerraform(struct?: DataDatabricksClusterClusterInfoSpecAzureAttributesOutputReference | DataDatabricksClusterClusterInfoSpecAzureAttributes): any {
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
      value: dataDatabricksClusterClusterInfoSpecAzureAttributesLogAnalyticsInfoToHclTerraform(struct!.logAnalyticsInfo),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksClusterClusterInfoSpecAzureAttributesLogAnalyticsInfoList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksClusterClusterInfoSpecAzureAttributesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataDatabricksClusterClusterInfoSpecAzureAttributes | undefined {
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

  public set internalValue(value: DataDatabricksClusterClusterInfoSpecAzureAttributes | undefined) {
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
  private _logAnalyticsInfo = new DataDatabricksClusterClusterInfoSpecAzureAttributesLogAnalyticsInfoOutputReference(this, "log_analytics_info");
  public get logAnalyticsInfo() {
    return this._logAnalyticsInfo;
  }
  public putLogAnalyticsInfo(value: DataDatabricksClusterClusterInfoSpecAzureAttributesLogAnalyticsInfo) {
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
export interface DataDatabricksClusterClusterInfoSpecClusterLogConfDbfs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/cluster#destination DataDatabricksCluster#destination}
  */
  readonly destination: string;
}

export function dataDatabricksClusterClusterInfoSpecClusterLogConfDbfsToTerraform(struct?: DataDatabricksClusterClusterInfoSpecClusterLogConfDbfsOutputReference | DataDatabricksClusterClusterInfoSpecClusterLogConfDbfs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    destination: cdktf.stringToTerraform(struct!.destination),
  }
}


export function dataDatabricksClusterClusterInfoSpecClusterLogConfDbfsToHclTerraform(struct?: DataDatabricksClusterClusterInfoSpecClusterLogConfDbfsOutputReference | DataDatabricksClusterClusterInfoSpecClusterLogConfDbfs): any {
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

export class DataDatabricksClusterClusterInfoSpecClusterLogConfDbfsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataDatabricksClusterClusterInfoSpecClusterLogConfDbfs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destination !== undefined) {
      hasAnyValues = true;
      internalValueResult.destination = this._destination;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksClusterClusterInfoSpecClusterLogConfDbfs | undefined) {
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
export interface DataDatabricksClusterClusterInfoSpecClusterLogConfS3 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/cluster#canned_acl DataDatabricksCluster#canned_acl}
  */
  readonly cannedAcl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/cluster#destination DataDatabricksCluster#destination}
  */
  readonly destination: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/cluster#enable_encryption DataDatabricksCluster#enable_encryption}
  */
  readonly enableEncryption?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/cluster#encryption_type DataDatabricksCluster#encryption_type}
  */
  readonly encryptionType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/cluster#endpoint DataDatabricksCluster#endpoint}
  */
  readonly endpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/cluster#kms_key DataDatabricksCluster#kms_key}
  */
  readonly kmsKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/cluster#region DataDatabricksCluster#region}
  */
  readonly region?: string;
}

export function dataDatabricksClusterClusterInfoSpecClusterLogConfS3ToTerraform(struct?: DataDatabricksClusterClusterInfoSpecClusterLogConfS3OutputReference | DataDatabricksClusterClusterInfoSpecClusterLogConfS3): any {
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


export function dataDatabricksClusterClusterInfoSpecClusterLogConfS3ToHclTerraform(struct?: DataDatabricksClusterClusterInfoSpecClusterLogConfS3OutputReference | DataDatabricksClusterClusterInfoSpecClusterLogConfS3): any {
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

export class DataDatabricksClusterClusterInfoSpecClusterLogConfS3OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataDatabricksClusterClusterInfoSpecClusterLogConfS3 | undefined {
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

  public set internalValue(value: DataDatabricksClusterClusterInfoSpecClusterLogConfS3 | undefined) {
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
export interface DataDatabricksClusterClusterInfoSpecClusterLogConf {
  /**
  * dbfs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/cluster#dbfs DataDatabricksCluster#dbfs}
  */
  readonly dbfs?: DataDatabricksClusterClusterInfoSpecClusterLogConfDbfs;
  /**
  * s3 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/cluster#s3 DataDatabricksCluster#s3}
  */
  readonly s3?: DataDatabricksClusterClusterInfoSpecClusterLogConfS3;
}

export function dataDatabricksClusterClusterInfoSpecClusterLogConfToTerraform(struct?: DataDatabricksClusterClusterInfoSpecClusterLogConfOutputReference | DataDatabricksClusterClusterInfoSpecClusterLogConf): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dbfs: dataDatabricksClusterClusterInfoSpecClusterLogConfDbfsToTerraform(struct!.dbfs),
    s3: dataDatabricksClusterClusterInfoSpecClusterLogConfS3ToTerraform(struct!.s3),
  }
}


export function dataDatabricksClusterClusterInfoSpecClusterLogConfToHclTerraform(struct?: DataDatabricksClusterClusterInfoSpecClusterLogConfOutputReference | DataDatabricksClusterClusterInfoSpecClusterLogConf): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dbfs: {
      value: dataDatabricksClusterClusterInfoSpecClusterLogConfDbfsToHclTerraform(struct!.dbfs),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksClusterClusterInfoSpecClusterLogConfDbfsList",
    },
    s3: {
      value: dataDatabricksClusterClusterInfoSpecClusterLogConfS3ToHclTerraform(struct!.s3),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksClusterClusterInfoSpecClusterLogConfS3List",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksClusterClusterInfoSpecClusterLogConfOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataDatabricksClusterClusterInfoSpecClusterLogConf | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksClusterClusterInfoSpecClusterLogConf | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dbfs.internalValue = undefined;
      this._s3.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dbfs.internalValue = value.dbfs;
      this._s3.internalValue = value.s3;
    }
  }

  // dbfs - computed: false, optional: true, required: false
  private _dbfs = new DataDatabricksClusterClusterInfoSpecClusterLogConfDbfsOutputReference(this, "dbfs");
  public get dbfs() {
    return this._dbfs;
  }
  public putDbfs(value: DataDatabricksClusterClusterInfoSpecClusterLogConfDbfs) {
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
  private _s3 = new DataDatabricksClusterClusterInfoSpecClusterLogConfS3OutputReference(this, "s3");
  public get s3() {
    return this._s3;
  }
  public putS3(value: DataDatabricksClusterClusterInfoSpecClusterLogConfS3) {
    this._s3.internalValue = value;
  }
  public resetS3() {
    this._s3.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3Input() {
    return this._s3.internalValue;
  }
}
export interface DataDatabricksClusterClusterInfoSpecClusterMountInfoNetworkFilesystemInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/cluster#mount_options DataDatabricksCluster#mount_options}
  */
  readonly mountOptions?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/cluster#server_address DataDatabricksCluster#server_address}
  */
  readonly serverAddress: string;
}

export function dataDatabricksClusterClusterInfoSpecClusterMountInfoNetworkFilesystemInfoToTerraform(struct?: DataDatabricksClusterClusterInfoSpecClusterMountInfoNetworkFilesystemInfoOutputReference | DataDatabricksClusterClusterInfoSpecClusterMountInfoNetworkFilesystemInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mount_options: cdktf.stringToTerraform(struct!.mountOptions),
    server_address: cdktf.stringToTerraform(struct!.serverAddress),
  }
}


export function dataDatabricksClusterClusterInfoSpecClusterMountInfoNetworkFilesystemInfoToHclTerraform(struct?: DataDatabricksClusterClusterInfoSpecClusterMountInfoNetworkFilesystemInfoOutputReference | DataDatabricksClusterClusterInfoSpecClusterMountInfoNetworkFilesystemInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mount_options: {
      value: cdktf.stringToHclTerraform(struct!.mountOptions),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    server_address: {
      value: cdktf.stringToHclTerraform(struct!.serverAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksClusterClusterInfoSpecClusterMountInfoNetworkFilesystemInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataDatabricksClusterClusterInfoSpecClusterMountInfoNetworkFilesystemInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mountOptions !== undefined) {
      hasAnyValues = true;
      internalValueResult.mountOptions = this._mountOptions;
    }
    if (this._serverAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverAddress = this._serverAddress;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksClusterClusterInfoSpecClusterMountInfoNetworkFilesystemInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._mountOptions = undefined;
      this._serverAddress = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._mountOptions = value.mountOptions;
      this._serverAddress = value.serverAddress;
    }
  }

  // mount_options - computed: false, optional: true, required: false
  private _mountOptions?: string; 
  public get mountOptions() {
    return this.getStringAttribute('mount_options');
  }
  public set mountOptions(value: string) {
    this._mountOptions = value;
  }
  public resetMountOptions() {
    this._mountOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mountOptionsInput() {
    return this._mountOptions;
  }

  // server_address - computed: false, optional: false, required: true
  private _serverAddress?: string; 
  public get serverAddress() {
    return this.getStringAttribute('server_address');
  }
  public set serverAddress(value: string) {
    this._serverAddress = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serverAddressInput() {
    return this._serverAddress;
  }
}
export interface DataDatabricksClusterClusterInfoSpecClusterMountInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/cluster#local_mount_dir_path DataDatabricksCluster#local_mount_dir_path}
  */
  readonly localMountDirPath: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/cluster#remote_mount_dir_path DataDatabricksCluster#remote_mount_dir_path}
  */
  readonly remoteMountDirPath?: string;
  /**
  * network_filesystem_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/cluster#network_filesystem_info DataDatabricksCluster#network_filesystem_info}
  */
  readonly networkFilesystemInfo: DataDatabricksClusterClusterInfoSpecClusterMountInfoNetworkFilesystemInfo;
}

export function dataDatabricksClusterClusterInfoSpecClusterMountInfoToTerraform(struct?: DataDatabricksClusterClusterInfoSpecClusterMountInfo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    local_mount_dir_path: cdktf.stringToTerraform(struct!.localMountDirPath),
    remote_mount_dir_path: cdktf.stringToTerraform(struct!.remoteMountDirPath),
    network_filesystem_info: dataDatabricksClusterClusterInfoSpecClusterMountInfoNetworkFilesystemInfoToTerraform(struct!.networkFilesystemInfo),
  }
}


export function dataDatabricksClusterClusterInfoSpecClusterMountInfoToHclTerraform(struct?: DataDatabricksClusterClusterInfoSpecClusterMountInfo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    local_mount_dir_path: {
      value: cdktf.stringToHclTerraform(struct!.localMountDirPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    remote_mount_dir_path: {
      value: cdktf.stringToHclTerraform(struct!.remoteMountDirPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    network_filesystem_info: {
      value: dataDatabricksClusterClusterInfoSpecClusterMountInfoNetworkFilesystemInfoToHclTerraform(struct!.networkFilesystemInfo),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksClusterClusterInfoSpecClusterMountInfoNetworkFilesystemInfoList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksClusterClusterInfoSpecClusterMountInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDatabricksClusterClusterInfoSpecClusterMountInfo | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._localMountDirPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.localMountDirPath = this._localMountDirPath;
    }
    if (this._remoteMountDirPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.remoteMountDirPath = this._remoteMountDirPath;
    }
    if (this._networkFilesystemInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkFilesystemInfo = this._networkFilesystemInfo?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksClusterClusterInfoSpecClusterMountInfo | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._localMountDirPath = undefined;
      this._remoteMountDirPath = undefined;
      this._networkFilesystemInfo.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._localMountDirPath = value.localMountDirPath;
      this._remoteMountDirPath = value.remoteMountDirPath;
      this._networkFilesystemInfo.internalValue = value.networkFilesystemInfo;
    }
  }

  // local_mount_dir_path - computed: false, optional: false, required: true
  private _localMountDirPath?: string; 
  public get localMountDirPath() {
    return this.getStringAttribute('local_mount_dir_path');
  }
  public set localMountDirPath(value: string) {
    this._localMountDirPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get localMountDirPathInput() {
    return this._localMountDirPath;
  }

  // remote_mount_dir_path - computed: false, optional: true, required: false
  private _remoteMountDirPath?: string; 
  public get remoteMountDirPath() {
    return this.getStringAttribute('remote_mount_dir_path');
  }
  public set remoteMountDirPath(value: string) {
    this._remoteMountDirPath = value;
  }
  public resetRemoteMountDirPath() {
    this._remoteMountDirPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteMountDirPathInput() {
    return this._remoteMountDirPath;
  }

  // network_filesystem_info - computed: false, optional: false, required: true
  private _networkFilesystemInfo = new DataDatabricksClusterClusterInfoSpecClusterMountInfoNetworkFilesystemInfoOutputReference(this, "network_filesystem_info");
  public get networkFilesystemInfo() {
    return this._networkFilesystemInfo;
  }
  public putNetworkFilesystemInfo(value: DataDatabricksClusterClusterInfoSpecClusterMountInfoNetworkFilesystemInfo) {
    this._networkFilesystemInfo.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkFilesystemInfoInput() {
    return this._networkFilesystemInfo.internalValue;
  }
}

export class DataDatabricksClusterClusterInfoSpecClusterMountInfoList extends cdktf.ComplexList {
  public internalValue? : DataDatabricksClusterClusterInfoSpecClusterMountInfo[] | cdktf.IResolvable

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
  public get(index: number): DataDatabricksClusterClusterInfoSpecClusterMountInfoOutputReference {
    return new DataDatabricksClusterClusterInfoSpecClusterMountInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDatabricksClusterClusterInfoSpecDockerImageBasicAuth {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/cluster#password DataDatabricksCluster#password}
  */
  readonly password: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/cluster#username DataDatabricksCluster#username}
  */
  readonly username: string;
}

export function dataDatabricksClusterClusterInfoSpecDockerImageBasicAuthToTerraform(struct?: DataDatabricksClusterClusterInfoSpecDockerImageBasicAuthOutputReference | DataDatabricksClusterClusterInfoSpecDockerImageBasicAuth): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    password: cdktf.stringToTerraform(struct!.password),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function dataDatabricksClusterClusterInfoSpecDockerImageBasicAuthToHclTerraform(struct?: DataDatabricksClusterClusterInfoSpecDockerImageBasicAuthOutputReference | DataDatabricksClusterClusterInfoSpecDockerImageBasicAuth): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    username: {
      value: cdktf.stringToHclTerraform(struct!.username),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksClusterClusterInfoSpecDockerImageBasicAuthOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataDatabricksClusterClusterInfoSpecDockerImageBasicAuth | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksClusterClusterInfoSpecDockerImageBasicAuth | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._password = undefined;
      this._username = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._password = value.password;
      this._username = value.username;
    }
  }

  // password - computed: false, optional: false, required: true
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // username - computed: false, optional: false, required: true
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }
}
export interface DataDatabricksClusterClusterInfoSpecDockerImage {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/cluster#url DataDatabricksCluster#url}
  */
  readonly url: string;
  /**
  * basic_auth block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/cluster#basic_auth DataDatabricksCluster#basic_auth}
  */
  readonly basicAuth?: DataDatabricksClusterClusterInfoSpecDockerImageBasicAuth;
}

export function dataDatabricksClusterClusterInfoSpecDockerImageToTerraform(struct?: DataDatabricksClusterClusterInfoSpecDockerImageOutputReference | DataDatabricksClusterClusterInfoSpecDockerImage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    url: cdktf.stringToTerraform(struct!.url),
    basic_auth: dataDatabricksClusterClusterInfoSpecDockerImageBasicAuthToTerraform(struct!.basicAuth),
  }
}


export function dataDatabricksClusterClusterInfoSpecDockerImageToHclTerraform(struct?: DataDatabricksClusterClusterInfoSpecDockerImageOutputReference | DataDatabricksClusterClusterInfoSpecDockerImage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    basic_auth: {
      value: dataDatabricksClusterClusterInfoSpecDockerImageBasicAuthToHclTerraform(struct!.basicAuth),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksClusterClusterInfoSpecDockerImageBasicAuthList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksClusterClusterInfoSpecDockerImageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataDatabricksClusterClusterInfoSpecDockerImage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    if (this._basicAuth?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.basicAuth = this._basicAuth?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksClusterClusterInfoSpecDockerImage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._url = undefined;
      this._basicAuth.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._url = value.url;
      this._basicAuth.internalValue = value.basicAuth;
    }
  }

  // url - computed: false, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }

  // basic_auth - computed: false, optional: true, required: false
  private _basicAuth = new DataDatabricksClusterClusterInfoSpecDockerImageBasicAuthOutputReference(this, "basic_auth");
  public get basicAuth() {
    return this._basicAuth;
  }
  public putBasicAuth(value: DataDatabricksClusterClusterInfoSpecDockerImageBasicAuth) {
    this._basicAuth.internalValue = value;
  }
  public resetBasicAuth() {
    this._basicAuth.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get basicAuthInput() {
    return this._basicAuth.internalValue;
  }
}
export interface DataDatabricksClusterClusterInfoSpecGcpAttributes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/cluster#availability DataDatabricksCluster#availability}
  */
  readonly availability?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/cluster#boot_disk_size DataDatabricksCluster#boot_disk_size}
  */
  readonly bootDiskSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/cluster#google_service_account DataDatabricksCluster#google_service_account}
  */
  readonly googleServiceAccount?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/cluster#local_ssd_count DataDatabricksCluster#local_ssd_count}
  */
  readonly localSsdCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/cluster#use_preemptible_executors DataDatabricksCluster#use_preemptible_executors}
  */
  readonly usePreemptibleExecutors?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/cluster#zone_id DataDatabricksCluster#zone_id}
  */
  readonly zoneId?: string;
}

export function dataDatabricksClusterClusterInfoSpecGcpAttributesToTerraform(struct?: DataDatabricksClusterClusterInfoSpecGcpAttributesOutputReference | DataDatabricksClusterClusterInfoSpecGcpAttributes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    availability: cdktf.stringToTerraform(struct!.availability),
    boot_disk_size: cdktf.numberToTerraform(struct!.bootDiskSize),
    google_service_account: cdktf.stringToTerraform(struct!.googleServiceAccount),
    local_ssd_count: cdktf.numberToTerraform(struct!.localSsdCount),
    use_preemptible_executors: cdktf.booleanToTerraform(struct!.usePreemptibleExecutors),
    zone_id: cdktf.stringToTerraform(struct!.zoneId),
  }
}


export function dataDatabricksClusterClusterInfoSpecGcpAttributesToHclTerraform(struct?: DataDatabricksClusterClusterInfoSpecGcpAttributesOutputReference | DataDatabricksClusterClusterInfoSpecGcpAttributes): any {
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
    boot_disk_size: {
      value: cdktf.numberToHclTerraform(struct!.bootDiskSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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
    use_preemptible_executors: {
      value: cdktf.booleanToHclTerraform(struct!.usePreemptibleExecutors),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
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

export class DataDatabricksClusterClusterInfoSpecGcpAttributesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataDatabricksClusterClusterInfoSpecGcpAttributes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._availability !== undefined) {
      hasAnyValues = true;
      internalValueResult.availability = this._availability;
    }
    if (this._bootDiskSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.bootDiskSize = this._bootDiskSize;
    }
    if (this._googleServiceAccount !== undefined) {
      hasAnyValues = true;
      internalValueResult.googleServiceAccount = this._googleServiceAccount;
    }
    if (this._localSsdCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.localSsdCount = this._localSsdCount;
    }
    if (this._usePreemptibleExecutors !== undefined) {
      hasAnyValues = true;
      internalValueResult.usePreemptibleExecutors = this._usePreemptibleExecutors;
    }
    if (this._zoneId !== undefined) {
      hasAnyValues = true;
      internalValueResult.zoneId = this._zoneId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksClusterClusterInfoSpecGcpAttributes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._availability = undefined;
      this._bootDiskSize = undefined;
      this._googleServiceAccount = undefined;
      this._localSsdCount = undefined;
      this._usePreemptibleExecutors = undefined;
      this._zoneId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._availability = value.availability;
      this._bootDiskSize = value.bootDiskSize;
      this._googleServiceAccount = value.googleServiceAccount;
      this._localSsdCount = value.localSsdCount;
      this._usePreemptibleExecutors = value.usePreemptibleExecutors;
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

  // boot_disk_size - computed: false, optional: true, required: false
  private _bootDiskSize?: number; 
  public get bootDiskSize() {
    return this.getNumberAttribute('boot_disk_size');
  }
  public set bootDiskSize(value: number) {
    this._bootDiskSize = value;
  }
  public resetBootDiskSize() {
    this._bootDiskSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bootDiskSizeInput() {
    return this._bootDiskSize;
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

  // use_preemptible_executors - computed: false, optional: true, required: false
  private _usePreemptibleExecutors?: boolean | cdktf.IResolvable; 
  public get usePreemptibleExecutors() {
    return this.getBooleanAttribute('use_preemptible_executors');
  }
  public set usePreemptibleExecutors(value: boolean | cdktf.IResolvable) {
    this._usePreemptibleExecutors = value;
  }
  public resetUsePreemptibleExecutors() {
    this._usePreemptibleExecutors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usePreemptibleExecutorsInput() {
    return this._usePreemptibleExecutors;
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
export interface DataDatabricksClusterClusterInfoSpecInitScriptsAbfss {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/cluster#destination DataDatabricksCluster#destination}
  */
  readonly destination: string;
}

export function dataDatabricksClusterClusterInfoSpecInitScriptsAbfssToTerraform(struct?: DataDatabricksClusterClusterInfoSpecInitScriptsAbfssOutputReference | DataDatabricksClusterClusterInfoSpecInitScriptsAbfss): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    destination: cdktf.stringToTerraform(struct!.destination),
  }
}


export function dataDatabricksClusterClusterInfoSpecInitScriptsAbfssToHclTerraform(struct?: DataDatabricksClusterClusterInfoSpecInitScriptsAbfssOutputReference | DataDatabricksClusterClusterInfoSpecInitScriptsAbfss): any {
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

export class DataDatabricksClusterClusterInfoSpecInitScriptsAbfssOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataDatabricksClusterClusterInfoSpecInitScriptsAbfss | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destination !== undefined) {
      hasAnyValues = true;
      internalValueResult.destination = this._destination;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksClusterClusterInfoSpecInitScriptsAbfss | undefined) {
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
export interface DataDatabricksClusterClusterInfoSpecInitScriptsDbfs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/cluster#destination DataDatabricksCluster#destination}
  */
  readonly destination: string;
}

export function dataDatabricksClusterClusterInfoSpecInitScriptsDbfsToTerraform(struct?: DataDatabricksClusterClusterInfoSpecInitScriptsDbfsOutputReference | DataDatabricksClusterClusterInfoSpecInitScriptsDbfs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    destination: cdktf.stringToTerraform(struct!.destination),
  }
}


export function dataDatabricksClusterClusterInfoSpecInitScriptsDbfsToHclTerraform(struct?: DataDatabricksClusterClusterInfoSpecInitScriptsDbfsOutputReference | DataDatabricksClusterClusterInfoSpecInitScriptsDbfs): any {
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

export class DataDatabricksClusterClusterInfoSpecInitScriptsDbfsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataDatabricksClusterClusterInfoSpecInitScriptsDbfs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destination !== undefined) {
      hasAnyValues = true;
      internalValueResult.destination = this._destination;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksClusterClusterInfoSpecInitScriptsDbfs | undefined) {
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
export interface DataDatabricksClusterClusterInfoSpecInitScriptsFile {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/cluster#destination DataDatabricksCluster#destination}
  */
  readonly destination: string;
}

export function dataDatabricksClusterClusterInfoSpecInitScriptsFileToTerraform(struct?: DataDatabricksClusterClusterInfoSpecInitScriptsFileOutputReference | DataDatabricksClusterClusterInfoSpecInitScriptsFile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    destination: cdktf.stringToTerraform(struct!.destination),
  }
}


export function dataDatabricksClusterClusterInfoSpecInitScriptsFileToHclTerraform(struct?: DataDatabricksClusterClusterInfoSpecInitScriptsFileOutputReference | DataDatabricksClusterClusterInfoSpecInitScriptsFile): any {
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

export class DataDatabricksClusterClusterInfoSpecInitScriptsFileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataDatabricksClusterClusterInfoSpecInitScriptsFile | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destination !== undefined) {
      hasAnyValues = true;
      internalValueResult.destination = this._destination;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksClusterClusterInfoSpecInitScriptsFile | undefined) {
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
export interface DataDatabricksClusterClusterInfoSpecInitScriptsGcs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/cluster#destination DataDatabricksCluster#destination}
  */
  readonly destination: string;
}

export function dataDatabricksClusterClusterInfoSpecInitScriptsGcsToTerraform(struct?: DataDatabricksClusterClusterInfoSpecInitScriptsGcsOutputReference | DataDatabricksClusterClusterInfoSpecInitScriptsGcs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    destination: cdktf.stringToTerraform(struct!.destination),
  }
}


export function dataDatabricksClusterClusterInfoSpecInitScriptsGcsToHclTerraform(struct?: DataDatabricksClusterClusterInfoSpecInitScriptsGcsOutputReference | DataDatabricksClusterClusterInfoSpecInitScriptsGcs): any {
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

export class DataDatabricksClusterClusterInfoSpecInitScriptsGcsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataDatabricksClusterClusterInfoSpecInitScriptsGcs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destination !== undefined) {
      hasAnyValues = true;
      internalValueResult.destination = this._destination;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksClusterClusterInfoSpecInitScriptsGcs | undefined) {
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
export interface DataDatabricksClusterClusterInfoSpecInitScriptsS3 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/cluster#canned_acl DataDatabricksCluster#canned_acl}
  */
  readonly cannedAcl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/cluster#destination DataDatabricksCluster#destination}
  */
  readonly destination: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/cluster#enable_encryption DataDatabricksCluster#enable_encryption}
  */
  readonly enableEncryption?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/cluster#encryption_type DataDatabricksCluster#encryption_type}
  */
  readonly encryptionType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/cluster#endpoint DataDatabricksCluster#endpoint}
  */
  readonly endpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/cluster#kms_key DataDatabricksCluster#kms_key}
  */
  readonly kmsKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/cluster#region DataDatabricksCluster#region}
  */
  readonly region?: string;
}

export function dataDatabricksClusterClusterInfoSpecInitScriptsS3ToTerraform(struct?: DataDatabricksClusterClusterInfoSpecInitScriptsS3OutputReference | DataDatabricksClusterClusterInfoSpecInitScriptsS3): any {
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


export function dataDatabricksClusterClusterInfoSpecInitScriptsS3ToHclTerraform(struct?: DataDatabricksClusterClusterInfoSpecInitScriptsS3OutputReference | DataDatabricksClusterClusterInfoSpecInitScriptsS3): any {
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

export class DataDatabricksClusterClusterInfoSpecInitScriptsS3OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataDatabricksClusterClusterInfoSpecInitScriptsS3 | undefined {
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

  public set internalValue(value: DataDatabricksClusterClusterInfoSpecInitScriptsS3 | undefined) {
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
export interface DataDatabricksClusterClusterInfoSpecInitScriptsVolumes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/cluster#destination DataDatabricksCluster#destination}
  */
  readonly destination: string;
}

export function dataDatabricksClusterClusterInfoSpecInitScriptsVolumesToTerraform(struct?: DataDatabricksClusterClusterInfoSpecInitScriptsVolumesOutputReference | DataDatabricksClusterClusterInfoSpecInitScriptsVolumes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    destination: cdktf.stringToTerraform(struct!.destination),
  }
}


export function dataDatabricksClusterClusterInfoSpecInitScriptsVolumesToHclTerraform(struct?: DataDatabricksClusterClusterInfoSpecInitScriptsVolumesOutputReference | DataDatabricksClusterClusterInfoSpecInitScriptsVolumes): any {
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

export class DataDatabricksClusterClusterInfoSpecInitScriptsVolumesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataDatabricksClusterClusterInfoSpecInitScriptsVolumes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destination !== undefined) {
      hasAnyValues = true;
      internalValueResult.destination = this._destination;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksClusterClusterInfoSpecInitScriptsVolumes | undefined) {
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
export interface DataDatabricksClusterClusterInfoSpecInitScriptsWorkspace {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/cluster#destination DataDatabricksCluster#destination}
  */
  readonly destination: string;
}

export function dataDatabricksClusterClusterInfoSpecInitScriptsWorkspaceToTerraform(struct?: DataDatabricksClusterClusterInfoSpecInitScriptsWorkspaceOutputReference | DataDatabricksClusterClusterInfoSpecInitScriptsWorkspace): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    destination: cdktf.stringToTerraform(struct!.destination),
  }
}


export function dataDatabricksClusterClusterInfoSpecInitScriptsWorkspaceToHclTerraform(struct?: DataDatabricksClusterClusterInfoSpecInitScriptsWorkspaceOutputReference | DataDatabricksClusterClusterInfoSpecInitScriptsWorkspace): any {
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

export class DataDatabricksClusterClusterInfoSpecInitScriptsWorkspaceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataDatabricksClusterClusterInfoSpecInitScriptsWorkspace | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destination !== undefined) {
      hasAnyValues = true;
      internalValueResult.destination = this._destination;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksClusterClusterInfoSpecInitScriptsWorkspace | undefined) {
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
export interface DataDatabricksClusterClusterInfoSpecInitScripts {
  /**
  * abfss block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/cluster#abfss DataDatabricksCluster#abfss}
  */
  readonly abfss?: DataDatabricksClusterClusterInfoSpecInitScriptsAbfss;
  /**
  * dbfs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/cluster#dbfs DataDatabricksCluster#dbfs}
  */
  readonly dbfs?: DataDatabricksClusterClusterInfoSpecInitScriptsDbfs;
  /**
  * file block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/cluster#file DataDatabricksCluster#file}
  */
  readonly file?: DataDatabricksClusterClusterInfoSpecInitScriptsFile;
  /**
  * gcs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/cluster#gcs DataDatabricksCluster#gcs}
  */
  readonly gcs?: DataDatabricksClusterClusterInfoSpecInitScriptsGcs;
  /**
  * s3 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/cluster#s3 DataDatabricksCluster#s3}
  */
  readonly s3?: DataDatabricksClusterClusterInfoSpecInitScriptsS3;
  /**
  * volumes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/cluster#volumes DataDatabricksCluster#volumes}
  */
  readonly volumes?: DataDatabricksClusterClusterInfoSpecInitScriptsVolumes;
  /**
  * workspace block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/cluster#workspace DataDatabricksCluster#workspace}
  */
  readonly workspace?: DataDatabricksClusterClusterInfoSpecInitScriptsWorkspace;
}

export function dataDatabricksClusterClusterInfoSpecInitScriptsToTerraform(struct?: DataDatabricksClusterClusterInfoSpecInitScripts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    abfss: dataDatabricksClusterClusterInfoSpecInitScriptsAbfssToTerraform(struct!.abfss),
    dbfs: dataDatabricksClusterClusterInfoSpecInitScriptsDbfsToTerraform(struct!.dbfs),
    file: dataDatabricksClusterClusterInfoSpecInitScriptsFileToTerraform(struct!.file),
    gcs: dataDatabricksClusterClusterInfoSpecInitScriptsGcsToTerraform(struct!.gcs),
    s3: dataDatabricksClusterClusterInfoSpecInitScriptsS3ToTerraform(struct!.s3),
    volumes: dataDatabricksClusterClusterInfoSpecInitScriptsVolumesToTerraform(struct!.volumes),
    workspace: dataDatabricksClusterClusterInfoSpecInitScriptsWorkspaceToTerraform(struct!.workspace),
  }
}


export function dataDatabricksClusterClusterInfoSpecInitScriptsToHclTerraform(struct?: DataDatabricksClusterClusterInfoSpecInitScripts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    abfss: {
      value: dataDatabricksClusterClusterInfoSpecInitScriptsAbfssToHclTerraform(struct!.abfss),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksClusterClusterInfoSpecInitScriptsAbfssList",
    },
    dbfs: {
      value: dataDatabricksClusterClusterInfoSpecInitScriptsDbfsToHclTerraform(struct!.dbfs),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksClusterClusterInfoSpecInitScriptsDbfsList",
    },
    file: {
      value: dataDatabricksClusterClusterInfoSpecInitScriptsFileToHclTerraform(struct!.file),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksClusterClusterInfoSpecInitScriptsFileList",
    },
    gcs: {
      value: dataDatabricksClusterClusterInfoSpecInitScriptsGcsToHclTerraform(struct!.gcs),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksClusterClusterInfoSpecInitScriptsGcsList",
    },
    s3: {
      value: dataDatabricksClusterClusterInfoSpecInitScriptsS3ToHclTerraform(struct!.s3),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksClusterClusterInfoSpecInitScriptsS3List",
    },
    volumes: {
      value: dataDatabricksClusterClusterInfoSpecInitScriptsVolumesToHclTerraform(struct!.volumes),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksClusterClusterInfoSpecInitScriptsVolumesList",
    },
    workspace: {
      value: dataDatabricksClusterClusterInfoSpecInitScriptsWorkspaceToHclTerraform(struct!.workspace),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksClusterClusterInfoSpecInitScriptsWorkspaceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksClusterClusterInfoSpecInitScriptsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDatabricksClusterClusterInfoSpecInitScripts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksClusterClusterInfoSpecInitScripts | cdktf.IResolvable | undefined) {
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
  private _abfss = new DataDatabricksClusterClusterInfoSpecInitScriptsAbfssOutputReference(this, "abfss");
  public get abfss() {
    return this._abfss;
  }
  public putAbfss(value: DataDatabricksClusterClusterInfoSpecInitScriptsAbfss) {
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
  private _dbfs = new DataDatabricksClusterClusterInfoSpecInitScriptsDbfsOutputReference(this, "dbfs");
  public get dbfs() {
    return this._dbfs;
  }
  public putDbfs(value: DataDatabricksClusterClusterInfoSpecInitScriptsDbfs) {
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
  private _file = new DataDatabricksClusterClusterInfoSpecInitScriptsFileOutputReference(this, "file");
  public get file() {
    return this._file;
  }
  public putFile(value: DataDatabricksClusterClusterInfoSpecInitScriptsFile) {
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
  private _gcs = new DataDatabricksClusterClusterInfoSpecInitScriptsGcsOutputReference(this, "gcs");
  public get gcs() {
    return this._gcs;
  }
  public putGcs(value: DataDatabricksClusterClusterInfoSpecInitScriptsGcs) {
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
  private _s3 = new DataDatabricksClusterClusterInfoSpecInitScriptsS3OutputReference(this, "s3");
  public get s3() {
    return this._s3;
  }
  public putS3(value: DataDatabricksClusterClusterInfoSpecInitScriptsS3) {
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
  private _volumes = new DataDatabricksClusterClusterInfoSpecInitScriptsVolumesOutputReference(this, "volumes");
  public get volumes() {
    return this._volumes;
  }
  public putVolumes(value: DataDatabricksClusterClusterInfoSpecInitScriptsVolumes) {
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
  private _workspace = new DataDatabricksClusterClusterInfoSpecInitScriptsWorkspaceOutputReference(this, "workspace");
  public get workspace() {
    return this._workspace;
  }
  public putWorkspace(value: DataDatabricksClusterClusterInfoSpecInitScriptsWorkspace) {
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

export class DataDatabricksClusterClusterInfoSpecInitScriptsList extends cdktf.ComplexList {
  public internalValue? : DataDatabricksClusterClusterInfoSpecInitScripts[] | cdktf.IResolvable

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
  public get(index: number): DataDatabricksClusterClusterInfoSpecInitScriptsOutputReference {
    return new DataDatabricksClusterClusterInfoSpecInitScriptsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDatabricksClusterClusterInfoSpecLibraryCran {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/cluster#package DataDatabricksCluster#package}
  */
  readonly package: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/cluster#repo DataDatabricksCluster#repo}
  */
  readonly repo?: string;
}

export function dataDatabricksClusterClusterInfoSpecLibraryCranToTerraform(struct?: DataDatabricksClusterClusterInfoSpecLibraryCranOutputReference | DataDatabricksClusterClusterInfoSpecLibraryCran): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    package: cdktf.stringToTerraform(struct!.package),
    repo: cdktf.stringToTerraform(struct!.repo),
  }
}


export function dataDatabricksClusterClusterInfoSpecLibraryCranToHclTerraform(struct?: DataDatabricksClusterClusterInfoSpecLibraryCranOutputReference | DataDatabricksClusterClusterInfoSpecLibraryCran): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    package: {
      value: cdktf.stringToHclTerraform(struct!.package),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class DataDatabricksClusterClusterInfoSpecLibraryCranOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataDatabricksClusterClusterInfoSpecLibraryCran | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._package !== undefined) {
      hasAnyValues = true;
      internalValueResult.package = this._package;
    }
    if (this._repo !== undefined) {
      hasAnyValues = true;
      internalValueResult.repo = this._repo;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksClusterClusterInfoSpecLibraryCran | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._package = undefined;
      this._repo = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._package = value.package;
      this._repo = value.repo;
    }
  }

  // package - computed: false, optional: false, required: true
  private _package?: string; 
  public get package() {
    return this.getStringAttribute('package');
  }
  public set package(value: string) {
    this._package = value;
  }
  // Temporarily expose input value. Use with caution.
  public get packageInput() {
    return this._package;
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
export interface DataDatabricksClusterClusterInfoSpecLibraryMaven {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/cluster#coordinates DataDatabricksCluster#coordinates}
  */
  readonly coordinates: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/cluster#exclusions DataDatabricksCluster#exclusions}
  */
  readonly exclusions?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/cluster#repo DataDatabricksCluster#repo}
  */
  readonly repo?: string;
}

export function dataDatabricksClusterClusterInfoSpecLibraryMavenToTerraform(struct?: DataDatabricksClusterClusterInfoSpecLibraryMavenOutputReference | DataDatabricksClusterClusterInfoSpecLibraryMaven): any {
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


export function dataDatabricksClusterClusterInfoSpecLibraryMavenToHclTerraform(struct?: DataDatabricksClusterClusterInfoSpecLibraryMavenOutputReference | DataDatabricksClusterClusterInfoSpecLibraryMaven): any {
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

export class DataDatabricksClusterClusterInfoSpecLibraryMavenOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataDatabricksClusterClusterInfoSpecLibraryMaven | undefined {
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

  public set internalValue(value: DataDatabricksClusterClusterInfoSpecLibraryMaven | undefined) {
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
export interface DataDatabricksClusterClusterInfoSpecLibraryPypi {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/cluster#package DataDatabricksCluster#package}
  */
  readonly package: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/cluster#repo DataDatabricksCluster#repo}
  */
  readonly repo?: string;
}

export function dataDatabricksClusterClusterInfoSpecLibraryPypiToTerraform(struct?: DataDatabricksClusterClusterInfoSpecLibraryPypiOutputReference | DataDatabricksClusterClusterInfoSpecLibraryPypi): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    package: cdktf.stringToTerraform(struct!.package),
    repo: cdktf.stringToTerraform(struct!.repo),
  }
}


export function dataDatabricksClusterClusterInfoSpecLibraryPypiToHclTerraform(struct?: DataDatabricksClusterClusterInfoSpecLibraryPypiOutputReference | DataDatabricksClusterClusterInfoSpecLibraryPypi): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    package: {
      value: cdktf.stringToHclTerraform(struct!.package),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class DataDatabricksClusterClusterInfoSpecLibraryPypiOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataDatabricksClusterClusterInfoSpecLibraryPypi | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._package !== undefined) {
      hasAnyValues = true;
      internalValueResult.package = this._package;
    }
    if (this._repo !== undefined) {
      hasAnyValues = true;
      internalValueResult.repo = this._repo;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksClusterClusterInfoSpecLibraryPypi | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._package = undefined;
      this._repo = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._package = value.package;
      this._repo = value.repo;
    }
  }

  // package - computed: false, optional: false, required: true
  private _package?: string; 
  public get package() {
    return this.getStringAttribute('package');
  }
  public set package(value: string) {
    this._package = value;
  }
  // Temporarily expose input value. Use with caution.
  public get packageInput() {
    return this._package;
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
export interface DataDatabricksClusterClusterInfoSpecLibrary {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/cluster#egg DataDatabricksCluster#egg}
  */
  readonly egg?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/cluster#jar DataDatabricksCluster#jar}
  */
  readonly jar?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/cluster#requirements DataDatabricksCluster#requirements}
  */
  readonly requirements?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/cluster#whl DataDatabricksCluster#whl}
  */
  readonly whl?: string;
  /**
  * cran block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/cluster#cran DataDatabricksCluster#cran}
  */
  readonly cran?: DataDatabricksClusterClusterInfoSpecLibraryCran;
  /**
  * maven block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/cluster#maven DataDatabricksCluster#maven}
  */
  readonly maven?: DataDatabricksClusterClusterInfoSpecLibraryMaven;
  /**
  * pypi block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/cluster#pypi DataDatabricksCluster#pypi}
  */
  readonly pypi?: DataDatabricksClusterClusterInfoSpecLibraryPypi;
}

export function dataDatabricksClusterClusterInfoSpecLibraryToTerraform(struct?: DataDatabricksClusterClusterInfoSpecLibrary | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    egg: cdktf.stringToTerraform(struct!.egg),
    jar: cdktf.stringToTerraform(struct!.jar),
    requirements: cdktf.stringToTerraform(struct!.requirements),
    whl: cdktf.stringToTerraform(struct!.whl),
    cran: dataDatabricksClusterClusterInfoSpecLibraryCranToTerraform(struct!.cran),
    maven: dataDatabricksClusterClusterInfoSpecLibraryMavenToTerraform(struct!.maven),
    pypi: dataDatabricksClusterClusterInfoSpecLibraryPypiToTerraform(struct!.pypi),
  }
}


export function dataDatabricksClusterClusterInfoSpecLibraryToHclTerraform(struct?: DataDatabricksClusterClusterInfoSpecLibrary | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    egg: {
      value: cdktf.stringToHclTerraform(struct!.egg),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    jar: {
      value: cdktf.stringToHclTerraform(struct!.jar),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    requirements: {
      value: cdktf.stringToHclTerraform(struct!.requirements),
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
    cran: {
      value: dataDatabricksClusterClusterInfoSpecLibraryCranToHclTerraform(struct!.cran),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksClusterClusterInfoSpecLibraryCranList",
    },
    maven: {
      value: dataDatabricksClusterClusterInfoSpecLibraryMavenToHclTerraform(struct!.maven),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksClusterClusterInfoSpecLibraryMavenList",
    },
    pypi: {
      value: dataDatabricksClusterClusterInfoSpecLibraryPypiToHclTerraform(struct!.pypi),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksClusterClusterInfoSpecLibraryPypiList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksClusterClusterInfoSpecLibraryOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDatabricksClusterClusterInfoSpecLibrary | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._egg !== undefined) {
      hasAnyValues = true;
      internalValueResult.egg = this._egg;
    }
    if (this._jar !== undefined) {
      hasAnyValues = true;
      internalValueResult.jar = this._jar;
    }
    if (this._requirements !== undefined) {
      hasAnyValues = true;
      internalValueResult.requirements = this._requirements;
    }
    if (this._whl !== undefined) {
      hasAnyValues = true;
      internalValueResult.whl = this._whl;
    }
    if (this._cran?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cran = this._cran?.internalValue;
    }
    if (this._maven?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.maven = this._maven?.internalValue;
    }
    if (this._pypi?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pypi = this._pypi?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksClusterClusterInfoSpecLibrary | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._egg = undefined;
      this._jar = undefined;
      this._requirements = undefined;
      this._whl = undefined;
      this._cran.internalValue = undefined;
      this._maven.internalValue = undefined;
      this._pypi.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._egg = value.egg;
      this._jar = value.jar;
      this._requirements = value.requirements;
      this._whl = value.whl;
      this._cran.internalValue = value.cran;
      this._maven.internalValue = value.maven;
      this._pypi.internalValue = value.pypi;
    }
  }

  // egg - computed: false, optional: true, required: false
  private _egg?: string; 
  public get egg() {
    return this.getStringAttribute('egg');
  }
  public set egg(value: string) {
    this._egg = value;
  }
  public resetEgg() {
    this._egg = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eggInput() {
    return this._egg;
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

  // requirements - computed: false, optional: true, required: false
  private _requirements?: string; 
  public get requirements() {
    return this.getStringAttribute('requirements');
  }
  public set requirements(value: string) {
    this._requirements = value;
  }
  public resetRequirements() {
    this._requirements = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requirementsInput() {
    return this._requirements;
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

  // cran - computed: false, optional: true, required: false
  private _cran = new DataDatabricksClusterClusterInfoSpecLibraryCranOutputReference(this, "cran");
  public get cran() {
    return this._cran;
  }
  public putCran(value: DataDatabricksClusterClusterInfoSpecLibraryCran) {
    this._cran.internalValue = value;
  }
  public resetCran() {
    this._cran.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cranInput() {
    return this._cran.internalValue;
  }

  // maven - computed: false, optional: true, required: false
  private _maven = new DataDatabricksClusterClusterInfoSpecLibraryMavenOutputReference(this, "maven");
  public get maven() {
    return this._maven;
  }
  public putMaven(value: DataDatabricksClusterClusterInfoSpecLibraryMaven) {
    this._maven.internalValue = value;
  }
  public resetMaven() {
    this._maven.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mavenInput() {
    return this._maven.internalValue;
  }

  // pypi - computed: false, optional: true, required: false
  private _pypi = new DataDatabricksClusterClusterInfoSpecLibraryPypiOutputReference(this, "pypi");
  public get pypi() {
    return this._pypi;
  }
  public putPypi(value: DataDatabricksClusterClusterInfoSpecLibraryPypi) {
    this._pypi.internalValue = value;
  }
  public resetPypi() {
    this._pypi.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pypiInput() {
    return this._pypi.internalValue;
  }
}

export class DataDatabricksClusterClusterInfoSpecLibraryList extends cdktf.ComplexList {
  public internalValue? : DataDatabricksClusterClusterInfoSpecLibrary[] | cdktf.IResolvable

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
  public get(index: number): DataDatabricksClusterClusterInfoSpecLibraryOutputReference {
    return new DataDatabricksClusterClusterInfoSpecLibraryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDatabricksClusterClusterInfoSpecWorkloadTypeClients {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/cluster#jobs DataDatabricksCluster#jobs}
  */
  readonly jobs?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/cluster#notebooks DataDatabricksCluster#notebooks}
  */
  readonly notebooks?: boolean | cdktf.IResolvable;
}

export function dataDatabricksClusterClusterInfoSpecWorkloadTypeClientsToTerraform(struct?: DataDatabricksClusterClusterInfoSpecWorkloadTypeClientsOutputReference | DataDatabricksClusterClusterInfoSpecWorkloadTypeClients): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    jobs: cdktf.booleanToTerraform(struct!.jobs),
    notebooks: cdktf.booleanToTerraform(struct!.notebooks),
  }
}


export function dataDatabricksClusterClusterInfoSpecWorkloadTypeClientsToHclTerraform(struct?: DataDatabricksClusterClusterInfoSpecWorkloadTypeClientsOutputReference | DataDatabricksClusterClusterInfoSpecWorkloadTypeClients): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    jobs: {
      value: cdktf.booleanToHclTerraform(struct!.jobs),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    notebooks: {
      value: cdktf.booleanToHclTerraform(struct!.notebooks),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksClusterClusterInfoSpecWorkloadTypeClientsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataDatabricksClusterClusterInfoSpecWorkloadTypeClients | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._jobs !== undefined) {
      hasAnyValues = true;
      internalValueResult.jobs = this._jobs;
    }
    if (this._notebooks !== undefined) {
      hasAnyValues = true;
      internalValueResult.notebooks = this._notebooks;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksClusterClusterInfoSpecWorkloadTypeClients | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._jobs = undefined;
      this._notebooks = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._jobs = value.jobs;
      this._notebooks = value.notebooks;
    }
  }

  // jobs - computed: false, optional: true, required: false
  private _jobs?: boolean | cdktf.IResolvable; 
  public get jobs() {
    return this.getBooleanAttribute('jobs');
  }
  public set jobs(value: boolean | cdktf.IResolvable) {
    this._jobs = value;
  }
  public resetJobs() {
    this._jobs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jobsInput() {
    return this._jobs;
  }

  // notebooks - computed: false, optional: true, required: false
  private _notebooks?: boolean | cdktf.IResolvable; 
  public get notebooks() {
    return this.getBooleanAttribute('notebooks');
  }
  public set notebooks(value: boolean | cdktf.IResolvable) {
    this._notebooks = value;
  }
  public resetNotebooks() {
    this._notebooks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notebooksInput() {
    return this._notebooks;
  }
}
export interface DataDatabricksClusterClusterInfoSpecWorkloadType {
  /**
  * clients block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/cluster#clients DataDatabricksCluster#clients}
  */
  readonly clients: DataDatabricksClusterClusterInfoSpecWorkloadTypeClients;
}

export function dataDatabricksClusterClusterInfoSpecWorkloadTypeToTerraform(struct?: DataDatabricksClusterClusterInfoSpecWorkloadTypeOutputReference | DataDatabricksClusterClusterInfoSpecWorkloadType): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    clients: dataDatabricksClusterClusterInfoSpecWorkloadTypeClientsToTerraform(struct!.clients),
  }
}


export function dataDatabricksClusterClusterInfoSpecWorkloadTypeToHclTerraform(struct?: DataDatabricksClusterClusterInfoSpecWorkloadTypeOutputReference | DataDatabricksClusterClusterInfoSpecWorkloadType): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    clients: {
      value: dataDatabricksClusterClusterInfoSpecWorkloadTypeClientsToHclTerraform(struct!.clients),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksClusterClusterInfoSpecWorkloadTypeClientsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksClusterClusterInfoSpecWorkloadTypeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataDatabricksClusterClusterInfoSpecWorkloadType | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clients?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clients = this._clients?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksClusterClusterInfoSpecWorkloadType | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clients.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clients.internalValue = value.clients;
    }
  }

  // clients - computed: false, optional: false, required: true
  private _clients = new DataDatabricksClusterClusterInfoSpecWorkloadTypeClientsOutputReference(this, "clients");
  public get clients() {
    return this._clients;
  }
  public putClients(value: DataDatabricksClusterClusterInfoSpecWorkloadTypeClients) {
    this._clients.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientsInput() {
    return this._clients.internalValue;
  }
}
export interface DataDatabricksClusterClusterInfoSpec {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/cluster#apply_policy_default_values DataDatabricksCluster#apply_policy_default_values}
  */
  readonly applyPolicyDefaultValues?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/cluster#cluster_name DataDatabricksCluster#cluster_name}
  */
  readonly clusterName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/cluster#custom_tags DataDatabricksCluster#custom_tags}
  */
  readonly customTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/cluster#data_security_mode DataDatabricksCluster#data_security_mode}
  */
  readonly dataSecurityMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/cluster#driver_instance_pool_id DataDatabricksCluster#driver_instance_pool_id}
  */
  readonly driverInstancePoolId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/cluster#driver_node_type_id DataDatabricksCluster#driver_node_type_id}
  */
  readonly driverNodeTypeId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/cluster#enable_elastic_disk DataDatabricksCluster#enable_elastic_disk}
  */
  readonly enableElasticDisk?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/cluster#enable_local_disk_encryption DataDatabricksCluster#enable_local_disk_encryption}
  */
  readonly enableLocalDiskEncryption?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/cluster#idempotency_token DataDatabricksCluster#idempotency_token}
  */
  readonly idempotencyToken?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/cluster#instance_pool_id DataDatabricksCluster#instance_pool_id}
  */
  readonly instancePoolId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/cluster#is_single_node DataDatabricksCluster#is_single_node}
  */
  readonly isSingleNode?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/cluster#kind DataDatabricksCluster#kind}
  */
  readonly kind?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/cluster#node_type_id DataDatabricksCluster#node_type_id}
  */
  readonly nodeTypeId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/cluster#num_workers DataDatabricksCluster#num_workers}
  */
  readonly numWorkers?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/cluster#policy_id DataDatabricksCluster#policy_id}
  */
  readonly policyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/cluster#runtime_engine DataDatabricksCluster#runtime_engine}
  */
  readonly runtimeEngine?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/cluster#single_user_name DataDatabricksCluster#single_user_name}
  */
  readonly singleUserName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/cluster#spark_conf DataDatabricksCluster#spark_conf}
  */
  readonly sparkConf?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/cluster#spark_env_vars DataDatabricksCluster#spark_env_vars}
  */
  readonly sparkEnvVars?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/cluster#spark_version DataDatabricksCluster#spark_version}
  */
  readonly sparkVersion: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/cluster#ssh_public_keys DataDatabricksCluster#ssh_public_keys}
  */
  readonly sshPublicKeys?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/cluster#use_ml_runtime DataDatabricksCluster#use_ml_runtime}
  */
  readonly useMlRuntime?: boolean | cdktf.IResolvable;
  /**
  * autoscale block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/cluster#autoscale DataDatabricksCluster#autoscale}
  */
  readonly autoscale?: DataDatabricksClusterClusterInfoSpecAutoscale;
  /**
  * aws_attributes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/cluster#aws_attributes DataDatabricksCluster#aws_attributes}
  */
  readonly awsAttributes?: DataDatabricksClusterClusterInfoSpecAwsAttributes;
  /**
  * azure_attributes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/cluster#azure_attributes DataDatabricksCluster#azure_attributes}
  */
  readonly azureAttributes?: DataDatabricksClusterClusterInfoSpecAzureAttributes;
  /**
  * cluster_log_conf block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/cluster#cluster_log_conf DataDatabricksCluster#cluster_log_conf}
  */
  readonly clusterLogConf?: DataDatabricksClusterClusterInfoSpecClusterLogConf;
  /**
  * cluster_mount_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/cluster#cluster_mount_info DataDatabricksCluster#cluster_mount_info}
  */
  readonly clusterMountInfo?: DataDatabricksClusterClusterInfoSpecClusterMountInfo[] | cdktf.IResolvable;
  /**
  * docker_image block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/cluster#docker_image DataDatabricksCluster#docker_image}
  */
  readonly dockerImage?: DataDatabricksClusterClusterInfoSpecDockerImage;
  /**
  * gcp_attributes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/cluster#gcp_attributes DataDatabricksCluster#gcp_attributes}
  */
  readonly gcpAttributes?: DataDatabricksClusterClusterInfoSpecGcpAttributes;
  /**
  * init_scripts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/cluster#init_scripts DataDatabricksCluster#init_scripts}
  */
  readonly initScripts?: DataDatabricksClusterClusterInfoSpecInitScripts[] | cdktf.IResolvable;
  /**
  * library block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/cluster#library DataDatabricksCluster#library}
  */
  readonly library?: DataDatabricksClusterClusterInfoSpecLibrary[] | cdktf.IResolvable;
  /**
  * workload_type block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/cluster#workload_type DataDatabricksCluster#workload_type}
  */
  readonly workloadType?: DataDatabricksClusterClusterInfoSpecWorkloadType;
}

export function dataDatabricksClusterClusterInfoSpecToTerraform(struct?: DataDatabricksClusterClusterInfoSpecOutputReference | DataDatabricksClusterClusterInfoSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    apply_policy_default_values: cdktf.booleanToTerraform(struct!.applyPolicyDefaultValues),
    cluster_name: cdktf.stringToTerraform(struct!.clusterName),
    custom_tags: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.customTags),
    data_security_mode: cdktf.stringToTerraform(struct!.dataSecurityMode),
    driver_instance_pool_id: cdktf.stringToTerraform(struct!.driverInstancePoolId),
    driver_node_type_id: cdktf.stringToTerraform(struct!.driverNodeTypeId),
    enable_elastic_disk: cdktf.booleanToTerraform(struct!.enableElasticDisk),
    enable_local_disk_encryption: cdktf.booleanToTerraform(struct!.enableLocalDiskEncryption),
    idempotency_token: cdktf.stringToTerraform(struct!.idempotencyToken),
    instance_pool_id: cdktf.stringToTerraform(struct!.instancePoolId),
    is_single_node: cdktf.booleanToTerraform(struct!.isSingleNode),
    kind: cdktf.stringToTerraform(struct!.kind),
    node_type_id: cdktf.stringToTerraform(struct!.nodeTypeId),
    num_workers: cdktf.numberToTerraform(struct!.numWorkers),
    policy_id: cdktf.stringToTerraform(struct!.policyId),
    runtime_engine: cdktf.stringToTerraform(struct!.runtimeEngine),
    single_user_name: cdktf.stringToTerraform(struct!.singleUserName),
    spark_conf: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.sparkConf),
    spark_env_vars: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.sparkEnvVars),
    spark_version: cdktf.stringToTerraform(struct!.sparkVersion),
    ssh_public_keys: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.sshPublicKeys),
    use_ml_runtime: cdktf.booleanToTerraform(struct!.useMlRuntime),
    autoscale: dataDatabricksClusterClusterInfoSpecAutoscaleToTerraform(struct!.autoscale),
    aws_attributes: dataDatabricksClusterClusterInfoSpecAwsAttributesToTerraform(struct!.awsAttributes),
    azure_attributes: dataDatabricksClusterClusterInfoSpecAzureAttributesToTerraform(struct!.azureAttributes),
    cluster_log_conf: dataDatabricksClusterClusterInfoSpecClusterLogConfToTerraform(struct!.clusterLogConf),
    cluster_mount_info: cdktf.listMapper(dataDatabricksClusterClusterInfoSpecClusterMountInfoToTerraform, true)(struct!.clusterMountInfo),
    docker_image: dataDatabricksClusterClusterInfoSpecDockerImageToTerraform(struct!.dockerImage),
    gcp_attributes: dataDatabricksClusterClusterInfoSpecGcpAttributesToTerraform(struct!.gcpAttributes),
    init_scripts: cdktf.listMapper(dataDatabricksClusterClusterInfoSpecInitScriptsToTerraform, true)(struct!.initScripts),
    library: cdktf.listMapper(dataDatabricksClusterClusterInfoSpecLibraryToTerraform, true)(struct!.library),
    workload_type: dataDatabricksClusterClusterInfoSpecWorkloadTypeToTerraform(struct!.workloadType),
  }
}


export function dataDatabricksClusterClusterInfoSpecToHclTerraform(struct?: DataDatabricksClusterClusterInfoSpecOutputReference | DataDatabricksClusterClusterInfoSpec): any {
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
    cluster_name: {
      value: cdktf.stringToHclTerraform(struct!.clusterName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    custom_tags: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.customTags),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    data_security_mode: {
      value: cdktf.stringToHclTerraform(struct!.dataSecurityMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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
    enable_elastic_disk: {
      value: cdktf.booleanToHclTerraform(struct!.enableElasticDisk),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_local_disk_encryption: {
      value: cdktf.booleanToHclTerraform(struct!.enableLocalDiskEncryption),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    idempotency_token: {
      value: cdktf.stringToHclTerraform(struct!.idempotencyToken),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instance_pool_id: {
      value: cdktf.stringToHclTerraform(struct!.instancePoolId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_single_node: {
      value: cdktf.booleanToHclTerraform(struct!.isSingleNode),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    kind: {
      value: cdktf.stringToHclTerraform(struct!.kind),
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
    runtime_engine: {
      value: cdktf.stringToHclTerraform(struct!.runtimeEngine),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    single_user_name: {
      value: cdktf.stringToHclTerraform(struct!.singleUserName),
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
    spark_version: {
      value: cdktf.stringToHclTerraform(struct!.sparkVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssh_public_keys: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.sshPublicKeys),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    use_ml_runtime: {
      value: cdktf.booleanToHclTerraform(struct!.useMlRuntime),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    autoscale: {
      value: dataDatabricksClusterClusterInfoSpecAutoscaleToHclTerraform(struct!.autoscale),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksClusterClusterInfoSpecAutoscaleList",
    },
    aws_attributes: {
      value: dataDatabricksClusterClusterInfoSpecAwsAttributesToHclTerraform(struct!.awsAttributes),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksClusterClusterInfoSpecAwsAttributesList",
    },
    azure_attributes: {
      value: dataDatabricksClusterClusterInfoSpecAzureAttributesToHclTerraform(struct!.azureAttributes),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksClusterClusterInfoSpecAzureAttributesList",
    },
    cluster_log_conf: {
      value: dataDatabricksClusterClusterInfoSpecClusterLogConfToHclTerraform(struct!.clusterLogConf),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksClusterClusterInfoSpecClusterLogConfList",
    },
    cluster_mount_info: {
      value: cdktf.listMapperHcl(dataDatabricksClusterClusterInfoSpecClusterMountInfoToHclTerraform, true)(struct!.clusterMountInfo),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksClusterClusterInfoSpecClusterMountInfoList",
    },
    docker_image: {
      value: dataDatabricksClusterClusterInfoSpecDockerImageToHclTerraform(struct!.dockerImage),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksClusterClusterInfoSpecDockerImageList",
    },
    gcp_attributes: {
      value: dataDatabricksClusterClusterInfoSpecGcpAttributesToHclTerraform(struct!.gcpAttributes),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksClusterClusterInfoSpecGcpAttributesList",
    },
    init_scripts: {
      value: cdktf.listMapperHcl(dataDatabricksClusterClusterInfoSpecInitScriptsToHclTerraform, true)(struct!.initScripts),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksClusterClusterInfoSpecInitScriptsList",
    },
    library: {
      value: cdktf.listMapperHcl(dataDatabricksClusterClusterInfoSpecLibraryToHclTerraform, true)(struct!.library),
      isBlock: true,
      type: "set",
      storageClassType: "DataDatabricksClusterClusterInfoSpecLibraryList",
    },
    workload_type: {
      value: dataDatabricksClusterClusterInfoSpecWorkloadTypeToHclTerraform(struct!.workloadType),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksClusterClusterInfoSpecWorkloadTypeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksClusterClusterInfoSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataDatabricksClusterClusterInfoSpec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._applyPolicyDefaultValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.applyPolicyDefaultValues = this._applyPolicyDefaultValues;
    }
    if (this._clusterName !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterName = this._clusterName;
    }
    if (this._customTags !== undefined) {
      hasAnyValues = true;
      internalValueResult.customTags = this._customTags;
    }
    if (this._dataSecurityMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataSecurityMode = this._dataSecurityMode;
    }
    if (this._driverInstancePoolId !== undefined) {
      hasAnyValues = true;
      internalValueResult.driverInstancePoolId = this._driverInstancePoolId;
    }
    if (this._driverNodeTypeId !== undefined) {
      hasAnyValues = true;
      internalValueResult.driverNodeTypeId = this._driverNodeTypeId;
    }
    if (this._enableElasticDisk !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableElasticDisk = this._enableElasticDisk;
    }
    if (this._enableLocalDiskEncryption !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableLocalDiskEncryption = this._enableLocalDiskEncryption;
    }
    if (this._idempotencyToken !== undefined) {
      hasAnyValues = true;
      internalValueResult.idempotencyToken = this._idempotencyToken;
    }
    if (this._instancePoolId !== undefined) {
      hasAnyValues = true;
      internalValueResult.instancePoolId = this._instancePoolId;
    }
    if (this._isSingleNode !== undefined) {
      hasAnyValues = true;
      internalValueResult.isSingleNode = this._isSingleNode;
    }
    if (this._kind !== undefined) {
      hasAnyValues = true;
      internalValueResult.kind = this._kind;
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
    if (this._runtimeEngine !== undefined) {
      hasAnyValues = true;
      internalValueResult.runtimeEngine = this._runtimeEngine;
    }
    if (this._singleUserName !== undefined) {
      hasAnyValues = true;
      internalValueResult.singleUserName = this._singleUserName;
    }
    if (this._sparkConf !== undefined) {
      hasAnyValues = true;
      internalValueResult.sparkConf = this._sparkConf;
    }
    if (this._sparkEnvVars !== undefined) {
      hasAnyValues = true;
      internalValueResult.sparkEnvVars = this._sparkEnvVars;
    }
    if (this._sparkVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.sparkVersion = this._sparkVersion;
    }
    if (this._sshPublicKeys !== undefined) {
      hasAnyValues = true;
      internalValueResult.sshPublicKeys = this._sshPublicKeys;
    }
    if (this._useMlRuntime !== undefined) {
      hasAnyValues = true;
      internalValueResult.useMlRuntime = this._useMlRuntime;
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
    if (this._clusterMountInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterMountInfo = this._clusterMountInfo?.internalValue;
    }
    if (this._dockerImage?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dockerImage = this._dockerImage?.internalValue;
    }
    if (this._gcpAttributes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gcpAttributes = this._gcpAttributes?.internalValue;
    }
    if (this._initScripts?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.initScripts = this._initScripts?.internalValue;
    }
    if (this._library?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.library = this._library?.internalValue;
    }
    if (this._workloadType?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.workloadType = this._workloadType?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksClusterClusterInfoSpec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._applyPolicyDefaultValues = undefined;
      this._clusterName = undefined;
      this._customTags = undefined;
      this._dataSecurityMode = undefined;
      this._driverInstancePoolId = undefined;
      this._driverNodeTypeId = undefined;
      this._enableElasticDisk = undefined;
      this._enableLocalDiskEncryption = undefined;
      this._idempotencyToken = undefined;
      this._instancePoolId = undefined;
      this._isSingleNode = undefined;
      this._kind = undefined;
      this._nodeTypeId = undefined;
      this._numWorkers = undefined;
      this._policyId = undefined;
      this._runtimeEngine = undefined;
      this._singleUserName = undefined;
      this._sparkConf = undefined;
      this._sparkEnvVars = undefined;
      this._sparkVersion = undefined;
      this._sshPublicKeys = undefined;
      this._useMlRuntime = undefined;
      this._autoscale.internalValue = undefined;
      this._awsAttributes.internalValue = undefined;
      this._azureAttributes.internalValue = undefined;
      this._clusterLogConf.internalValue = undefined;
      this._clusterMountInfo.internalValue = undefined;
      this._dockerImage.internalValue = undefined;
      this._gcpAttributes.internalValue = undefined;
      this._initScripts.internalValue = undefined;
      this._library.internalValue = undefined;
      this._workloadType.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._applyPolicyDefaultValues = value.applyPolicyDefaultValues;
      this._clusterName = value.clusterName;
      this._customTags = value.customTags;
      this._dataSecurityMode = value.dataSecurityMode;
      this._driverInstancePoolId = value.driverInstancePoolId;
      this._driverNodeTypeId = value.driverNodeTypeId;
      this._enableElasticDisk = value.enableElasticDisk;
      this._enableLocalDiskEncryption = value.enableLocalDiskEncryption;
      this._idempotencyToken = value.idempotencyToken;
      this._instancePoolId = value.instancePoolId;
      this._isSingleNode = value.isSingleNode;
      this._kind = value.kind;
      this._nodeTypeId = value.nodeTypeId;
      this._numWorkers = value.numWorkers;
      this._policyId = value.policyId;
      this._runtimeEngine = value.runtimeEngine;
      this._singleUserName = value.singleUserName;
      this._sparkConf = value.sparkConf;
      this._sparkEnvVars = value.sparkEnvVars;
      this._sparkVersion = value.sparkVersion;
      this._sshPublicKeys = value.sshPublicKeys;
      this._useMlRuntime = value.useMlRuntime;
      this._autoscale.internalValue = value.autoscale;
      this._awsAttributes.internalValue = value.awsAttributes;
      this._azureAttributes.internalValue = value.azureAttributes;
      this._clusterLogConf.internalValue = value.clusterLogConf;
      this._clusterMountInfo.internalValue = value.clusterMountInfo;
      this._dockerImage.internalValue = value.dockerImage;
      this._gcpAttributes.internalValue = value.gcpAttributes;
      this._initScripts.internalValue = value.initScripts;
      this._library.internalValue = value.library;
      this._workloadType.internalValue = value.workloadType;
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

  // cluster_id - computed: true, optional: false, required: false
  public get clusterId() {
    return this.getStringAttribute('cluster_id');
  }

  // cluster_name - computed: false, optional: true, required: false
  private _clusterName?: string; 
  public get clusterName() {
    return this.getStringAttribute('cluster_name');
  }
  public set clusterName(value: string) {
    this._clusterName = value;
  }
  public resetClusterName() {
    this._clusterName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterNameInput() {
    return this._clusterName;
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

  // data_security_mode - computed: false, optional: true, required: false
  private _dataSecurityMode?: string; 
  public get dataSecurityMode() {
    return this.getStringAttribute('data_security_mode');
  }
  public set dataSecurityMode(value: string) {
    this._dataSecurityMode = value;
  }
  public resetDataSecurityMode() {
    this._dataSecurityMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSecurityModeInput() {
    return this._dataSecurityMode;
  }

  // driver_instance_pool_id - computed: true, optional: true, required: false
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

  // enable_elastic_disk - computed: true, optional: true, required: false
  private _enableElasticDisk?: boolean | cdktf.IResolvable; 
  public get enableElasticDisk() {
    return this.getBooleanAttribute('enable_elastic_disk');
  }
  public set enableElasticDisk(value: boolean | cdktf.IResolvable) {
    this._enableElasticDisk = value;
  }
  public resetEnableElasticDisk() {
    this._enableElasticDisk = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableElasticDiskInput() {
    return this._enableElasticDisk;
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

  // idempotency_token - computed: false, optional: true, required: false
  private _idempotencyToken?: string; 
  public get idempotencyToken() {
    return this.getStringAttribute('idempotency_token');
  }
  public set idempotencyToken(value: string) {
    this._idempotencyToken = value;
  }
  public resetIdempotencyToken() {
    this._idempotencyToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idempotencyTokenInput() {
    return this._idempotencyToken;
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

  // is_single_node - computed: false, optional: true, required: false
  private _isSingleNode?: boolean | cdktf.IResolvable; 
  public get isSingleNode() {
    return this.getBooleanAttribute('is_single_node');
  }
  public set isSingleNode(value: boolean | cdktf.IResolvable) {
    this._isSingleNode = value;
  }
  public resetIsSingleNode() {
    this._isSingleNode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isSingleNodeInput() {
    return this._isSingleNode;
  }

  // kind - computed: false, optional: true, required: false
  private _kind?: string; 
  public get kind() {
    return this.getStringAttribute('kind');
  }
  public set kind(value: string) {
    this._kind = value;
  }
  public resetKind() {
    this._kind = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kindInput() {
    return this._kind;
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

  // runtime_engine - computed: false, optional: true, required: false
  private _runtimeEngine?: string; 
  public get runtimeEngine() {
    return this.getStringAttribute('runtime_engine');
  }
  public set runtimeEngine(value: string) {
    this._runtimeEngine = value;
  }
  public resetRuntimeEngine() {
    this._runtimeEngine = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runtimeEngineInput() {
    return this._runtimeEngine;
  }

  // single_user_name - computed: false, optional: true, required: false
  private _singleUserName?: string; 
  public get singleUserName() {
    return this.getStringAttribute('single_user_name');
  }
  public set singleUserName(value: string) {
    this._singleUserName = value;
  }
  public resetSingleUserName() {
    this._singleUserName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get singleUserNameInput() {
    return this._singleUserName;
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

  // spark_version - computed: false, optional: false, required: true
  private _sparkVersion?: string; 
  public get sparkVersion() {
    return this.getStringAttribute('spark_version');
  }
  public set sparkVersion(value: string) {
    this._sparkVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sparkVersionInput() {
    return this._sparkVersion;
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

  // use_ml_runtime - computed: false, optional: true, required: false
  private _useMlRuntime?: boolean | cdktf.IResolvable; 
  public get useMlRuntime() {
    return this.getBooleanAttribute('use_ml_runtime');
  }
  public set useMlRuntime(value: boolean | cdktf.IResolvable) {
    this._useMlRuntime = value;
  }
  public resetUseMlRuntime() {
    this._useMlRuntime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useMlRuntimeInput() {
    return this._useMlRuntime;
  }

  // autoscale - computed: false, optional: true, required: false
  private _autoscale = new DataDatabricksClusterClusterInfoSpecAutoscaleOutputReference(this, "autoscale");
  public get autoscale() {
    return this._autoscale;
  }
  public putAutoscale(value: DataDatabricksClusterClusterInfoSpecAutoscale) {
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
  private _awsAttributes = new DataDatabricksClusterClusterInfoSpecAwsAttributesOutputReference(this, "aws_attributes");
  public get awsAttributes() {
    return this._awsAttributes;
  }
  public putAwsAttributes(value: DataDatabricksClusterClusterInfoSpecAwsAttributes) {
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
  private _azureAttributes = new DataDatabricksClusterClusterInfoSpecAzureAttributesOutputReference(this, "azure_attributes");
  public get azureAttributes() {
    return this._azureAttributes;
  }
  public putAzureAttributes(value: DataDatabricksClusterClusterInfoSpecAzureAttributes) {
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
  private _clusterLogConf = new DataDatabricksClusterClusterInfoSpecClusterLogConfOutputReference(this, "cluster_log_conf");
  public get clusterLogConf() {
    return this._clusterLogConf;
  }
  public putClusterLogConf(value: DataDatabricksClusterClusterInfoSpecClusterLogConf) {
    this._clusterLogConf.internalValue = value;
  }
  public resetClusterLogConf() {
    this._clusterLogConf.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterLogConfInput() {
    return this._clusterLogConf.internalValue;
  }

  // cluster_mount_info - computed: false, optional: true, required: false
  private _clusterMountInfo = new DataDatabricksClusterClusterInfoSpecClusterMountInfoList(this, "cluster_mount_info", false);
  public get clusterMountInfo() {
    return this._clusterMountInfo;
  }
  public putClusterMountInfo(value: DataDatabricksClusterClusterInfoSpecClusterMountInfo[] | cdktf.IResolvable) {
    this._clusterMountInfo.internalValue = value;
  }
  public resetClusterMountInfo() {
    this._clusterMountInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterMountInfoInput() {
    return this._clusterMountInfo.internalValue;
  }

  // docker_image - computed: false, optional: true, required: false
  private _dockerImage = new DataDatabricksClusterClusterInfoSpecDockerImageOutputReference(this, "docker_image");
  public get dockerImage() {
    return this._dockerImage;
  }
  public putDockerImage(value: DataDatabricksClusterClusterInfoSpecDockerImage) {
    this._dockerImage.internalValue = value;
  }
  public resetDockerImage() {
    this._dockerImage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dockerImageInput() {
    return this._dockerImage.internalValue;
  }

  // gcp_attributes - computed: false, optional: true, required: false
  private _gcpAttributes = new DataDatabricksClusterClusterInfoSpecGcpAttributesOutputReference(this, "gcp_attributes");
  public get gcpAttributes() {
    return this._gcpAttributes;
  }
  public putGcpAttributes(value: DataDatabricksClusterClusterInfoSpecGcpAttributes) {
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
  private _initScripts = new DataDatabricksClusterClusterInfoSpecInitScriptsList(this, "init_scripts", false);
  public get initScripts() {
    return this._initScripts;
  }
  public putInitScripts(value: DataDatabricksClusterClusterInfoSpecInitScripts[] | cdktf.IResolvable) {
    this._initScripts.internalValue = value;
  }
  public resetInitScripts() {
    this._initScripts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initScriptsInput() {
    return this._initScripts.internalValue;
  }

  // library - computed: false, optional: true, required: false
  private _library = new DataDatabricksClusterClusterInfoSpecLibraryList(this, "library", true);
  public get library() {
    return this._library;
  }
  public putLibrary(value: DataDatabricksClusterClusterInfoSpecLibrary[] | cdktf.IResolvable) {
    this._library.internalValue = value;
  }
  public resetLibrary() {
    this._library.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get libraryInput() {
    return this._library.internalValue;
  }

  // workload_type - computed: false, optional: true, required: false
  private _workloadType = new DataDatabricksClusterClusterInfoSpecWorkloadTypeOutputReference(this, "workload_type");
  public get workloadType() {
    return this._workloadType;
  }
  public putWorkloadType(value: DataDatabricksClusterClusterInfoSpecWorkloadType) {
    this._workloadType.internalValue = value;
  }
  public resetWorkloadType() {
    this._workloadType.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workloadTypeInput() {
    return this._workloadType.internalValue;
  }
}
export interface DataDatabricksClusterClusterInfoTerminationReason {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/cluster#code DataDatabricksCluster#code}
  */
  readonly code?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/cluster#parameters DataDatabricksCluster#parameters}
  */
  readonly parameters?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/cluster#type DataDatabricksCluster#type}
  */
  readonly type?: string;
}

export function dataDatabricksClusterClusterInfoTerminationReasonToTerraform(struct?: DataDatabricksClusterClusterInfoTerminationReasonOutputReference | DataDatabricksClusterClusterInfoTerminationReason): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    code: cdktf.stringToTerraform(struct!.code),
    parameters: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.parameters),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataDatabricksClusterClusterInfoTerminationReasonToHclTerraform(struct?: DataDatabricksClusterClusterInfoTerminationReasonOutputReference | DataDatabricksClusterClusterInfoTerminationReason): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    code: {
      value: cdktf.stringToHclTerraform(struct!.code),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    parameters: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.parameters),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksClusterClusterInfoTerminationReasonOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataDatabricksClusterClusterInfoTerminationReason | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._code !== undefined) {
      hasAnyValues = true;
      internalValueResult.code = this._code;
    }
    if (this._parameters !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameters = this._parameters;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksClusterClusterInfoTerminationReason | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._code = undefined;
      this._parameters = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._code = value.code;
      this._parameters = value.parameters;
      this._type = value.type;
    }
  }

  // code - computed: false, optional: true, required: false
  private _code?: string; 
  public get code() {
    return this.getStringAttribute('code');
  }
  public set code(value: string) {
    this._code = value;
  }
  public resetCode() {
    this._code = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get codeInput() {
    return this._code;
  }

  // parameters - computed: false, optional: true, required: false
  private _parameters?: { [key: string]: string }; 
  public get parameters() {
    return this.getStringMapAttribute('parameters');
  }
  public set parameters(value: { [key: string]: string }) {
    this._parameters = value;
  }
  public resetParameters() {
    this._parameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}
export interface DataDatabricksClusterClusterInfoWorkloadTypeClients {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/cluster#jobs DataDatabricksCluster#jobs}
  */
  readonly jobs?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/cluster#notebooks DataDatabricksCluster#notebooks}
  */
  readonly notebooks?: boolean | cdktf.IResolvable;
}

export function dataDatabricksClusterClusterInfoWorkloadTypeClientsToTerraform(struct?: DataDatabricksClusterClusterInfoWorkloadTypeClientsOutputReference | DataDatabricksClusterClusterInfoWorkloadTypeClients): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    jobs: cdktf.booleanToTerraform(struct!.jobs),
    notebooks: cdktf.booleanToTerraform(struct!.notebooks),
  }
}


export function dataDatabricksClusterClusterInfoWorkloadTypeClientsToHclTerraform(struct?: DataDatabricksClusterClusterInfoWorkloadTypeClientsOutputReference | DataDatabricksClusterClusterInfoWorkloadTypeClients): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    jobs: {
      value: cdktf.booleanToHclTerraform(struct!.jobs),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    notebooks: {
      value: cdktf.booleanToHclTerraform(struct!.notebooks),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksClusterClusterInfoWorkloadTypeClientsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataDatabricksClusterClusterInfoWorkloadTypeClients | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._jobs !== undefined) {
      hasAnyValues = true;
      internalValueResult.jobs = this._jobs;
    }
    if (this._notebooks !== undefined) {
      hasAnyValues = true;
      internalValueResult.notebooks = this._notebooks;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksClusterClusterInfoWorkloadTypeClients | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._jobs = undefined;
      this._notebooks = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._jobs = value.jobs;
      this._notebooks = value.notebooks;
    }
  }

  // jobs - computed: false, optional: true, required: false
  private _jobs?: boolean | cdktf.IResolvable; 
  public get jobs() {
    return this.getBooleanAttribute('jobs');
  }
  public set jobs(value: boolean | cdktf.IResolvable) {
    this._jobs = value;
  }
  public resetJobs() {
    this._jobs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jobsInput() {
    return this._jobs;
  }

  // notebooks - computed: false, optional: true, required: false
  private _notebooks?: boolean | cdktf.IResolvable; 
  public get notebooks() {
    return this.getBooleanAttribute('notebooks');
  }
  public set notebooks(value: boolean | cdktf.IResolvable) {
    this._notebooks = value;
  }
  public resetNotebooks() {
    this._notebooks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notebooksInput() {
    return this._notebooks;
  }
}
export interface DataDatabricksClusterClusterInfoWorkloadType {
  /**
  * clients block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/cluster#clients DataDatabricksCluster#clients}
  */
  readonly clients: DataDatabricksClusterClusterInfoWorkloadTypeClients;
}

export function dataDatabricksClusterClusterInfoWorkloadTypeToTerraform(struct?: DataDatabricksClusterClusterInfoWorkloadTypeOutputReference | DataDatabricksClusterClusterInfoWorkloadType): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    clients: dataDatabricksClusterClusterInfoWorkloadTypeClientsToTerraform(struct!.clients),
  }
}


export function dataDatabricksClusterClusterInfoWorkloadTypeToHclTerraform(struct?: DataDatabricksClusterClusterInfoWorkloadTypeOutputReference | DataDatabricksClusterClusterInfoWorkloadType): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    clients: {
      value: dataDatabricksClusterClusterInfoWorkloadTypeClientsToHclTerraform(struct!.clients),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksClusterClusterInfoWorkloadTypeClientsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksClusterClusterInfoWorkloadTypeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataDatabricksClusterClusterInfoWorkloadType | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clients?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clients = this._clients?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksClusterClusterInfoWorkloadType | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clients.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clients.internalValue = value.clients;
    }
  }

  // clients - computed: false, optional: false, required: true
  private _clients = new DataDatabricksClusterClusterInfoWorkloadTypeClientsOutputReference(this, "clients");
  public get clients() {
    return this._clients;
  }
  public putClients(value: DataDatabricksClusterClusterInfoWorkloadTypeClients) {
    this._clients.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientsInput() {
    return this._clients.internalValue;
  }
}
export interface DataDatabricksClusterClusterInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/cluster#autotermination_minutes DataDatabricksCluster#autotermination_minutes}
  */
  readonly autoterminationMinutes?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/cluster#cluster_cores DataDatabricksCluster#cluster_cores}
  */
  readonly clusterCores?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/cluster#cluster_id DataDatabricksCluster#cluster_id}
  */
  readonly clusterId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/cluster#cluster_memory_mb DataDatabricksCluster#cluster_memory_mb}
  */
  readonly clusterMemoryMb?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/cluster#cluster_name DataDatabricksCluster#cluster_name}
  */
  readonly clusterName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/cluster#cluster_source DataDatabricksCluster#cluster_source}
  */
  readonly clusterSource?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/cluster#creator_user_name DataDatabricksCluster#creator_user_name}
  */
  readonly creatorUserName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/cluster#custom_tags DataDatabricksCluster#custom_tags}
  */
  readonly customTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/cluster#data_security_mode DataDatabricksCluster#data_security_mode}
  */
  readonly dataSecurityMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/cluster#default_tags DataDatabricksCluster#default_tags}
  */
  readonly defaultTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/cluster#driver_instance_pool_id DataDatabricksCluster#driver_instance_pool_id}
  */
  readonly driverInstancePoolId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/cluster#driver_node_type_id DataDatabricksCluster#driver_node_type_id}
  */
  readonly driverNodeTypeId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/cluster#enable_elastic_disk DataDatabricksCluster#enable_elastic_disk}
  */
  readonly enableElasticDisk?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/cluster#enable_local_disk_encryption DataDatabricksCluster#enable_local_disk_encryption}
  */
  readonly enableLocalDiskEncryption?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/cluster#instance_pool_id DataDatabricksCluster#instance_pool_id}
  */
  readonly instancePoolId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/cluster#is_single_node DataDatabricksCluster#is_single_node}
  */
  readonly isSingleNode?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/cluster#jdbc_port DataDatabricksCluster#jdbc_port}
  */
  readonly jdbcPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/cluster#kind DataDatabricksCluster#kind}
  */
  readonly kind?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/cluster#last_restarted_time DataDatabricksCluster#last_restarted_time}
  */
  readonly lastRestartedTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/cluster#last_state_loss_time DataDatabricksCluster#last_state_loss_time}
  */
  readonly lastStateLossTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/cluster#node_type_id DataDatabricksCluster#node_type_id}
  */
  readonly nodeTypeId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/cluster#num_workers DataDatabricksCluster#num_workers}
  */
  readonly numWorkers?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/cluster#policy_id DataDatabricksCluster#policy_id}
  */
  readonly policyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/cluster#runtime_engine DataDatabricksCluster#runtime_engine}
  */
  readonly runtimeEngine?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/cluster#single_user_name DataDatabricksCluster#single_user_name}
  */
  readonly singleUserName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/cluster#spark_conf DataDatabricksCluster#spark_conf}
  */
  readonly sparkConf?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/cluster#spark_context_id DataDatabricksCluster#spark_context_id}
  */
  readonly sparkContextId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/cluster#spark_env_vars DataDatabricksCluster#spark_env_vars}
  */
  readonly sparkEnvVars?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/cluster#spark_version DataDatabricksCluster#spark_version}
  */
  readonly sparkVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/cluster#ssh_public_keys DataDatabricksCluster#ssh_public_keys}
  */
  readonly sshPublicKeys?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/cluster#start_time DataDatabricksCluster#start_time}
  */
  readonly startTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/cluster#state DataDatabricksCluster#state}
  */
  readonly state?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/cluster#state_message DataDatabricksCluster#state_message}
  */
  readonly stateMessage?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/cluster#terminated_time DataDatabricksCluster#terminated_time}
  */
  readonly terminatedTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/cluster#use_ml_runtime DataDatabricksCluster#use_ml_runtime}
  */
  readonly useMlRuntime?: boolean | cdktf.IResolvable;
  /**
  * autoscale block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/cluster#autoscale DataDatabricksCluster#autoscale}
  */
  readonly autoscale?: DataDatabricksClusterClusterInfoAutoscale;
  /**
  * aws_attributes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/cluster#aws_attributes DataDatabricksCluster#aws_attributes}
  */
  readonly awsAttributes?: DataDatabricksClusterClusterInfoAwsAttributes;
  /**
  * azure_attributes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/cluster#azure_attributes DataDatabricksCluster#azure_attributes}
  */
  readonly azureAttributes?: DataDatabricksClusterClusterInfoAzureAttributes;
  /**
  * cluster_log_conf block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/cluster#cluster_log_conf DataDatabricksCluster#cluster_log_conf}
  */
  readonly clusterLogConf?: DataDatabricksClusterClusterInfoClusterLogConf;
  /**
  * cluster_log_status block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/cluster#cluster_log_status DataDatabricksCluster#cluster_log_status}
  */
  readonly clusterLogStatus?: DataDatabricksClusterClusterInfoClusterLogStatus;
  /**
  * docker_image block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/cluster#docker_image DataDatabricksCluster#docker_image}
  */
  readonly dockerImage?: DataDatabricksClusterClusterInfoDockerImage;
  /**
  * driver block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/cluster#driver DataDatabricksCluster#driver}
  */
  readonly driver?: DataDatabricksClusterClusterInfoDriver;
  /**
  * executors block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/cluster#executors DataDatabricksCluster#executors}
  */
  readonly executors?: DataDatabricksClusterClusterInfoExecutors[] | cdktf.IResolvable;
  /**
  * gcp_attributes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/cluster#gcp_attributes DataDatabricksCluster#gcp_attributes}
  */
  readonly gcpAttributes?: DataDatabricksClusterClusterInfoGcpAttributes;
  /**
  * init_scripts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/cluster#init_scripts DataDatabricksCluster#init_scripts}
  */
  readonly initScripts?: DataDatabricksClusterClusterInfoInitScripts[] | cdktf.IResolvable;
  /**
  * spec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/cluster#spec DataDatabricksCluster#spec}
  */
  readonly spec?: DataDatabricksClusterClusterInfoSpec;
  /**
  * termination_reason block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/cluster#termination_reason DataDatabricksCluster#termination_reason}
  */
  readonly terminationReason?: DataDatabricksClusterClusterInfoTerminationReason;
  /**
  * workload_type block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/cluster#workload_type DataDatabricksCluster#workload_type}
  */
  readonly workloadType?: DataDatabricksClusterClusterInfoWorkloadType;
}

export function dataDatabricksClusterClusterInfoToTerraform(struct?: DataDatabricksClusterClusterInfoOutputReference | DataDatabricksClusterClusterInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    autotermination_minutes: cdktf.numberToTerraform(struct!.autoterminationMinutes),
    cluster_cores: cdktf.numberToTerraform(struct!.clusterCores),
    cluster_id: cdktf.stringToTerraform(struct!.clusterId),
    cluster_memory_mb: cdktf.numberToTerraform(struct!.clusterMemoryMb),
    cluster_name: cdktf.stringToTerraform(struct!.clusterName),
    cluster_source: cdktf.stringToTerraform(struct!.clusterSource),
    creator_user_name: cdktf.stringToTerraform(struct!.creatorUserName),
    custom_tags: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.customTags),
    data_security_mode: cdktf.stringToTerraform(struct!.dataSecurityMode),
    default_tags: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.defaultTags),
    driver_instance_pool_id: cdktf.stringToTerraform(struct!.driverInstancePoolId),
    driver_node_type_id: cdktf.stringToTerraform(struct!.driverNodeTypeId),
    enable_elastic_disk: cdktf.booleanToTerraform(struct!.enableElasticDisk),
    enable_local_disk_encryption: cdktf.booleanToTerraform(struct!.enableLocalDiskEncryption),
    instance_pool_id: cdktf.stringToTerraform(struct!.instancePoolId),
    is_single_node: cdktf.booleanToTerraform(struct!.isSingleNode),
    jdbc_port: cdktf.numberToTerraform(struct!.jdbcPort),
    kind: cdktf.stringToTerraform(struct!.kind),
    last_restarted_time: cdktf.numberToTerraform(struct!.lastRestartedTime),
    last_state_loss_time: cdktf.numberToTerraform(struct!.lastStateLossTime),
    node_type_id: cdktf.stringToTerraform(struct!.nodeTypeId),
    num_workers: cdktf.numberToTerraform(struct!.numWorkers),
    policy_id: cdktf.stringToTerraform(struct!.policyId),
    runtime_engine: cdktf.stringToTerraform(struct!.runtimeEngine),
    single_user_name: cdktf.stringToTerraform(struct!.singleUserName),
    spark_conf: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.sparkConf),
    spark_context_id: cdktf.numberToTerraform(struct!.sparkContextId),
    spark_env_vars: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.sparkEnvVars),
    spark_version: cdktf.stringToTerraform(struct!.sparkVersion),
    ssh_public_keys: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.sshPublicKeys),
    start_time: cdktf.numberToTerraform(struct!.startTime),
    state: cdktf.stringToTerraform(struct!.state),
    state_message: cdktf.stringToTerraform(struct!.stateMessage),
    terminated_time: cdktf.numberToTerraform(struct!.terminatedTime),
    use_ml_runtime: cdktf.booleanToTerraform(struct!.useMlRuntime),
    autoscale: dataDatabricksClusterClusterInfoAutoscaleToTerraform(struct!.autoscale),
    aws_attributes: dataDatabricksClusterClusterInfoAwsAttributesToTerraform(struct!.awsAttributes),
    azure_attributes: dataDatabricksClusterClusterInfoAzureAttributesToTerraform(struct!.azureAttributes),
    cluster_log_conf: dataDatabricksClusterClusterInfoClusterLogConfToTerraform(struct!.clusterLogConf),
    cluster_log_status: dataDatabricksClusterClusterInfoClusterLogStatusToTerraform(struct!.clusterLogStatus),
    docker_image: dataDatabricksClusterClusterInfoDockerImageToTerraform(struct!.dockerImage),
    driver: dataDatabricksClusterClusterInfoDriverToTerraform(struct!.driver),
    executors: cdktf.listMapper(dataDatabricksClusterClusterInfoExecutorsToTerraform, true)(struct!.executors),
    gcp_attributes: dataDatabricksClusterClusterInfoGcpAttributesToTerraform(struct!.gcpAttributes),
    init_scripts: cdktf.listMapper(dataDatabricksClusterClusterInfoInitScriptsToTerraform, true)(struct!.initScripts),
    spec: dataDatabricksClusterClusterInfoSpecToTerraform(struct!.spec),
    termination_reason: dataDatabricksClusterClusterInfoTerminationReasonToTerraform(struct!.terminationReason),
    workload_type: dataDatabricksClusterClusterInfoWorkloadTypeToTerraform(struct!.workloadType),
  }
}


export function dataDatabricksClusterClusterInfoToHclTerraform(struct?: DataDatabricksClusterClusterInfoOutputReference | DataDatabricksClusterClusterInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    autotermination_minutes: {
      value: cdktf.numberToHclTerraform(struct!.autoterminationMinutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cluster_cores: {
      value: cdktf.numberToHclTerraform(struct!.clusterCores),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cluster_id: {
      value: cdktf.stringToHclTerraform(struct!.clusterId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cluster_memory_mb: {
      value: cdktf.numberToHclTerraform(struct!.clusterMemoryMb),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cluster_name: {
      value: cdktf.stringToHclTerraform(struct!.clusterName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cluster_source: {
      value: cdktf.stringToHclTerraform(struct!.clusterSource),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    creator_user_name: {
      value: cdktf.stringToHclTerraform(struct!.creatorUserName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    custom_tags: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.customTags),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    data_security_mode: {
      value: cdktf.stringToHclTerraform(struct!.dataSecurityMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    default_tags: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.defaultTags),
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
    enable_elastic_disk: {
      value: cdktf.booleanToHclTerraform(struct!.enableElasticDisk),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
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
    is_single_node: {
      value: cdktf.booleanToHclTerraform(struct!.isSingleNode),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    jdbc_port: {
      value: cdktf.numberToHclTerraform(struct!.jdbcPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    kind: {
      value: cdktf.stringToHclTerraform(struct!.kind),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    last_restarted_time: {
      value: cdktf.numberToHclTerraform(struct!.lastRestartedTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    last_state_loss_time: {
      value: cdktf.numberToHclTerraform(struct!.lastStateLossTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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
    runtime_engine: {
      value: cdktf.stringToHclTerraform(struct!.runtimeEngine),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    single_user_name: {
      value: cdktf.stringToHclTerraform(struct!.singleUserName),
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
    spark_context_id: {
      value: cdktf.numberToHclTerraform(struct!.sparkContextId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    spark_env_vars: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.sparkEnvVars),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    spark_version: {
      value: cdktf.stringToHclTerraform(struct!.sparkVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssh_public_keys: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.sshPublicKeys),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    start_time: {
      value: cdktf.numberToHclTerraform(struct!.startTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    state: {
      value: cdktf.stringToHclTerraform(struct!.state),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    state_message: {
      value: cdktf.stringToHclTerraform(struct!.stateMessage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    terminated_time: {
      value: cdktf.numberToHclTerraform(struct!.terminatedTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    use_ml_runtime: {
      value: cdktf.booleanToHclTerraform(struct!.useMlRuntime),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    autoscale: {
      value: dataDatabricksClusterClusterInfoAutoscaleToHclTerraform(struct!.autoscale),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksClusterClusterInfoAutoscaleList",
    },
    aws_attributes: {
      value: dataDatabricksClusterClusterInfoAwsAttributesToHclTerraform(struct!.awsAttributes),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksClusterClusterInfoAwsAttributesList",
    },
    azure_attributes: {
      value: dataDatabricksClusterClusterInfoAzureAttributesToHclTerraform(struct!.azureAttributes),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksClusterClusterInfoAzureAttributesList",
    },
    cluster_log_conf: {
      value: dataDatabricksClusterClusterInfoClusterLogConfToHclTerraform(struct!.clusterLogConf),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksClusterClusterInfoClusterLogConfList",
    },
    cluster_log_status: {
      value: dataDatabricksClusterClusterInfoClusterLogStatusToHclTerraform(struct!.clusterLogStatus),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksClusterClusterInfoClusterLogStatusList",
    },
    docker_image: {
      value: dataDatabricksClusterClusterInfoDockerImageToHclTerraform(struct!.dockerImage),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksClusterClusterInfoDockerImageList",
    },
    driver: {
      value: dataDatabricksClusterClusterInfoDriverToHclTerraform(struct!.driver),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksClusterClusterInfoDriverList",
    },
    executors: {
      value: cdktf.listMapperHcl(dataDatabricksClusterClusterInfoExecutorsToHclTerraform, true)(struct!.executors),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksClusterClusterInfoExecutorsList",
    },
    gcp_attributes: {
      value: dataDatabricksClusterClusterInfoGcpAttributesToHclTerraform(struct!.gcpAttributes),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksClusterClusterInfoGcpAttributesList",
    },
    init_scripts: {
      value: cdktf.listMapperHcl(dataDatabricksClusterClusterInfoInitScriptsToHclTerraform, true)(struct!.initScripts),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksClusterClusterInfoInitScriptsList",
    },
    spec: {
      value: dataDatabricksClusterClusterInfoSpecToHclTerraform(struct!.spec),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksClusterClusterInfoSpecList",
    },
    termination_reason: {
      value: dataDatabricksClusterClusterInfoTerminationReasonToHclTerraform(struct!.terminationReason),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksClusterClusterInfoTerminationReasonList",
    },
    workload_type: {
      value: dataDatabricksClusterClusterInfoWorkloadTypeToHclTerraform(struct!.workloadType),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksClusterClusterInfoWorkloadTypeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksClusterClusterInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataDatabricksClusterClusterInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoterminationMinutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoterminationMinutes = this._autoterminationMinutes;
    }
    if (this._clusterCores !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterCores = this._clusterCores;
    }
    if (this._clusterId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterId = this._clusterId;
    }
    if (this._clusterMemoryMb !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterMemoryMb = this._clusterMemoryMb;
    }
    if (this._clusterName !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterName = this._clusterName;
    }
    if (this._clusterSource !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterSource = this._clusterSource;
    }
    if (this._creatorUserName !== undefined) {
      hasAnyValues = true;
      internalValueResult.creatorUserName = this._creatorUserName;
    }
    if (this._customTags !== undefined) {
      hasAnyValues = true;
      internalValueResult.customTags = this._customTags;
    }
    if (this._dataSecurityMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataSecurityMode = this._dataSecurityMode;
    }
    if (this._defaultTags !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultTags = this._defaultTags;
    }
    if (this._driverInstancePoolId !== undefined) {
      hasAnyValues = true;
      internalValueResult.driverInstancePoolId = this._driverInstancePoolId;
    }
    if (this._driverNodeTypeId !== undefined) {
      hasAnyValues = true;
      internalValueResult.driverNodeTypeId = this._driverNodeTypeId;
    }
    if (this._enableElasticDisk !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableElasticDisk = this._enableElasticDisk;
    }
    if (this._enableLocalDiskEncryption !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableLocalDiskEncryption = this._enableLocalDiskEncryption;
    }
    if (this._instancePoolId !== undefined) {
      hasAnyValues = true;
      internalValueResult.instancePoolId = this._instancePoolId;
    }
    if (this._isSingleNode !== undefined) {
      hasAnyValues = true;
      internalValueResult.isSingleNode = this._isSingleNode;
    }
    if (this._jdbcPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.jdbcPort = this._jdbcPort;
    }
    if (this._kind !== undefined) {
      hasAnyValues = true;
      internalValueResult.kind = this._kind;
    }
    if (this._lastRestartedTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.lastRestartedTime = this._lastRestartedTime;
    }
    if (this._lastStateLossTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.lastStateLossTime = this._lastStateLossTime;
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
    if (this._runtimeEngine !== undefined) {
      hasAnyValues = true;
      internalValueResult.runtimeEngine = this._runtimeEngine;
    }
    if (this._singleUserName !== undefined) {
      hasAnyValues = true;
      internalValueResult.singleUserName = this._singleUserName;
    }
    if (this._sparkConf !== undefined) {
      hasAnyValues = true;
      internalValueResult.sparkConf = this._sparkConf;
    }
    if (this._sparkContextId !== undefined) {
      hasAnyValues = true;
      internalValueResult.sparkContextId = this._sparkContextId;
    }
    if (this._sparkEnvVars !== undefined) {
      hasAnyValues = true;
      internalValueResult.sparkEnvVars = this._sparkEnvVars;
    }
    if (this._sparkVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.sparkVersion = this._sparkVersion;
    }
    if (this._sshPublicKeys !== undefined) {
      hasAnyValues = true;
      internalValueResult.sshPublicKeys = this._sshPublicKeys;
    }
    if (this._startTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.startTime = this._startTime;
    }
    if (this._state !== undefined) {
      hasAnyValues = true;
      internalValueResult.state = this._state;
    }
    if (this._stateMessage !== undefined) {
      hasAnyValues = true;
      internalValueResult.stateMessage = this._stateMessage;
    }
    if (this._terminatedTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.terminatedTime = this._terminatedTime;
    }
    if (this._useMlRuntime !== undefined) {
      hasAnyValues = true;
      internalValueResult.useMlRuntime = this._useMlRuntime;
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
    if (this._clusterLogStatus?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterLogStatus = this._clusterLogStatus?.internalValue;
    }
    if (this._dockerImage?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dockerImage = this._dockerImage?.internalValue;
    }
    if (this._driver?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.driver = this._driver?.internalValue;
    }
    if (this._executors?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.executors = this._executors?.internalValue;
    }
    if (this._gcpAttributes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gcpAttributes = this._gcpAttributes?.internalValue;
    }
    if (this._initScripts?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.initScripts = this._initScripts?.internalValue;
    }
    if (this._spec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.spec = this._spec?.internalValue;
    }
    if (this._terminationReason?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.terminationReason = this._terminationReason?.internalValue;
    }
    if (this._workloadType?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.workloadType = this._workloadType?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksClusterClusterInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._autoterminationMinutes = undefined;
      this._clusterCores = undefined;
      this._clusterId = undefined;
      this._clusterMemoryMb = undefined;
      this._clusterName = undefined;
      this._clusterSource = undefined;
      this._creatorUserName = undefined;
      this._customTags = undefined;
      this._dataSecurityMode = undefined;
      this._defaultTags = undefined;
      this._driverInstancePoolId = undefined;
      this._driverNodeTypeId = undefined;
      this._enableElasticDisk = undefined;
      this._enableLocalDiskEncryption = undefined;
      this._instancePoolId = undefined;
      this._isSingleNode = undefined;
      this._jdbcPort = undefined;
      this._kind = undefined;
      this._lastRestartedTime = undefined;
      this._lastStateLossTime = undefined;
      this._nodeTypeId = undefined;
      this._numWorkers = undefined;
      this._policyId = undefined;
      this._runtimeEngine = undefined;
      this._singleUserName = undefined;
      this._sparkConf = undefined;
      this._sparkContextId = undefined;
      this._sparkEnvVars = undefined;
      this._sparkVersion = undefined;
      this._sshPublicKeys = undefined;
      this._startTime = undefined;
      this._state = undefined;
      this._stateMessage = undefined;
      this._terminatedTime = undefined;
      this._useMlRuntime = undefined;
      this._autoscale.internalValue = undefined;
      this._awsAttributes.internalValue = undefined;
      this._azureAttributes.internalValue = undefined;
      this._clusterLogConf.internalValue = undefined;
      this._clusterLogStatus.internalValue = undefined;
      this._dockerImage.internalValue = undefined;
      this._driver.internalValue = undefined;
      this._executors.internalValue = undefined;
      this._gcpAttributes.internalValue = undefined;
      this._initScripts.internalValue = undefined;
      this._spec.internalValue = undefined;
      this._terminationReason.internalValue = undefined;
      this._workloadType.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._autoterminationMinutes = value.autoterminationMinutes;
      this._clusterCores = value.clusterCores;
      this._clusterId = value.clusterId;
      this._clusterMemoryMb = value.clusterMemoryMb;
      this._clusterName = value.clusterName;
      this._clusterSource = value.clusterSource;
      this._creatorUserName = value.creatorUserName;
      this._customTags = value.customTags;
      this._dataSecurityMode = value.dataSecurityMode;
      this._defaultTags = value.defaultTags;
      this._driverInstancePoolId = value.driverInstancePoolId;
      this._driverNodeTypeId = value.driverNodeTypeId;
      this._enableElasticDisk = value.enableElasticDisk;
      this._enableLocalDiskEncryption = value.enableLocalDiskEncryption;
      this._instancePoolId = value.instancePoolId;
      this._isSingleNode = value.isSingleNode;
      this._jdbcPort = value.jdbcPort;
      this._kind = value.kind;
      this._lastRestartedTime = value.lastRestartedTime;
      this._lastStateLossTime = value.lastStateLossTime;
      this._nodeTypeId = value.nodeTypeId;
      this._numWorkers = value.numWorkers;
      this._policyId = value.policyId;
      this._runtimeEngine = value.runtimeEngine;
      this._singleUserName = value.singleUserName;
      this._sparkConf = value.sparkConf;
      this._sparkContextId = value.sparkContextId;
      this._sparkEnvVars = value.sparkEnvVars;
      this._sparkVersion = value.sparkVersion;
      this._sshPublicKeys = value.sshPublicKeys;
      this._startTime = value.startTime;
      this._state = value.state;
      this._stateMessage = value.stateMessage;
      this._terminatedTime = value.terminatedTime;
      this._useMlRuntime = value.useMlRuntime;
      this._autoscale.internalValue = value.autoscale;
      this._awsAttributes.internalValue = value.awsAttributes;
      this._azureAttributes.internalValue = value.azureAttributes;
      this._clusterLogConf.internalValue = value.clusterLogConf;
      this._clusterLogStatus.internalValue = value.clusterLogStatus;
      this._dockerImage.internalValue = value.dockerImage;
      this._driver.internalValue = value.driver;
      this._executors.internalValue = value.executors;
      this._gcpAttributes.internalValue = value.gcpAttributes;
      this._initScripts.internalValue = value.initScripts;
      this._spec.internalValue = value.spec;
      this._terminationReason.internalValue = value.terminationReason;
      this._workloadType.internalValue = value.workloadType;
    }
  }

  // autotermination_minutes - computed: false, optional: true, required: false
  private _autoterminationMinutes?: number; 
  public get autoterminationMinutes() {
    return this.getNumberAttribute('autotermination_minutes');
  }
  public set autoterminationMinutes(value: number) {
    this._autoterminationMinutes = value;
  }
  public resetAutoterminationMinutes() {
    this._autoterminationMinutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoterminationMinutesInput() {
    return this._autoterminationMinutes;
  }

  // cluster_cores - computed: false, optional: true, required: false
  private _clusterCores?: number; 
  public get clusterCores() {
    return this.getNumberAttribute('cluster_cores');
  }
  public set clusterCores(value: number) {
    this._clusterCores = value;
  }
  public resetClusterCores() {
    this._clusterCores = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterCoresInput() {
    return this._clusterCores;
  }

  // cluster_id - computed: false, optional: true, required: false
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

  // cluster_memory_mb - computed: false, optional: true, required: false
  private _clusterMemoryMb?: number; 
  public get clusterMemoryMb() {
    return this.getNumberAttribute('cluster_memory_mb');
  }
  public set clusterMemoryMb(value: number) {
    this._clusterMemoryMb = value;
  }
  public resetClusterMemoryMb() {
    this._clusterMemoryMb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterMemoryMbInput() {
    return this._clusterMemoryMb;
  }

  // cluster_name - computed: false, optional: true, required: false
  private _clusterName?: string; 
  public get clusterName() {
    return this.getStringAttribute('cluster_name');
  }
  public set clusterName(value: string) {
    this._clusterName = value;
  }
  public resetClusterName() {
    this._clusterName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterNameInput() {
    return this._clusterName;
  }

  // cluster_source - computed: false, optional: true, required: false
  private _clusterSource?: string; 
  public get clusterSource() {
    return this.getStringAttribute('cluster_source');
  }
  public set clusterSource(value: string) {
    this._clusterSource = value;
  }
  public resetClusterSource() {
    this._clusterSource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterSourceInput() {
    return this._clusterSource;
  }

  // creator_user_name - computed: false, optional: true, required: false
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

  // data_security_mode - computed: false, optional: true, required: false
  private _dataSecurityMode?: string; 
  public get dataSecurityMode() {
    return this.getStringAttribute('data_security_mode');
  }
  public set dataSecurityMode(value: string) {
    this._dataSecurityMode = value;
  }
  public resetDataSecurityMode() {
    this._dataSecurityMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSecurityModeInput() {
    return this._dataSecurityMode;
  }

  // default_tags - computed: false, optional: true, required: false
  private _defaultTags?: { [key: string]: string }; 
  public get defaultTags() {
    return this.getStringMapAttribute('default_tags');
  }
  public set defaultTags(value: { [key: string]: string }) {
    this._defaultTags = value;
  }
  public resetDefaultTags() {
    this._defaultTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultTagsInput() {
    return this._defaultTags;
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

  // driver_node_type_id - computed: false, optional: true, required: false
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

  // enable_elastic_disk - computed: false, optional: true, required: false
  private _enableElasticDisk?: boolean | cdktf.IResolvable; 
  public get enableElasticDisk() {
    return this.getBooleanAttribute('enable_elastic_disk');
  }
  public set enableElasticDisk(value: boolean | cdktf.IResolvable) {
    this._enableElasticDisk = value;
  }
  public resetEnableElasticDisk() {
    this._enableElasticDisk = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableElasticDiskInput() {
    return this._enableElasticDisk;
  }

  // enable_local_disk_encryption - computed: false, optional: true, required: false
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

  // is_single_node - computed: false, optional: true, required: false
  private _isSingleNode?: boolean | cdktf.IResolvable; 
  public get isSingleNode() {
    return this.getBooleanAttribute('is_single_node');
  }
  public set isSingleNode(value: boolean | cdktf.IResolvable) {
    this._isSingleNode = value;
  }
  public resetIsSingleNode() {
    this._isSingleNode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isSingleNodeInput() {
    return this._isSingleNode;
  }

  // jdbc_port - computed: false, optional: true, required: false
  private _jdbcPort?: number; 
  public get jdbcPort() {
    return this.getNumberAttribute('jdbc_port');
  }
  public set jdbcPort(value: number) {
    this._jdbcPort = value;
  }
  public resetJdbcPort() {
    this._jdbcPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jdbcPortInput() {
    return this._jdbcPort;
  }

  // kind - computed: false, optional: true, required: false
  private _kind?: string; 
  public get kind() {
    return this.getStringAttribute('kind');
  }
  public set kind(value: string) {
    this._kind = value;
  }
  public resetKind() {
    this._kind = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kindInput() {
    return this._kind;
  }

  // last_restarted_time - computed: false, optional: true, required: false
  private _lastRestartedTime?: number; 
  public get lastRestartedTime() {
    return this.getNumberAttribute('last_restarted_time');
  }
  public set lastRestartedTime(value: number) {
    this._lastRestartedTime = value;
  }
  public resetLastRestartedTime() {
    this._lastRestartedTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastRestartedTimeInput() {
    return this._lastRestartedTime;
  }

  // last_state_loss_time - computed: false, optional: true, required: false
  private _lastStateLossTime?: number; 
  public get lastStateLossTime() {
    return this.getNumberAttribute('last_state_loss_time');
  }
  public set lastStateLossTime(value: number) {
    this._lastStateLossTime = value;
  }
  public resetLastStateLossTime() {
    this._lastStateLossTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastStateLossTimeInput() {
    return this._lastStateLossTime;
  }

  // node_type_id - computed: false, optional: true, required: false
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

  // runtime_engine - computed: false, optional: true, required: false
  private _runtimeEngine?: string; 
  public get runtimeEngine() {
    return this.getStringAttribute('runtime_engine');
  }
  public set runtimeEngine(value: string) {
    this._runtimeEngine = value;
  }
  public resetRuntimeEngine() {
    this._runtimeEngine = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runtimeEngineInput() {
    return this._runtimeEngine;
  }

  // single_user_name - computed: false, optional: true, required: false
  private _singleUserName?: string; 
  public get singleUserName() {
    return this.getStringAttribute('single_user_name');
  }
  public set singleUserName(value: string) {
    this._singleUserName = value;
  }
  public resetSingleUserName() {
    this._singleUserName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get singleUserNameInput() {
    return this._singleUserName;
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

  // spark_context_id - computed: false, optional: true, required: false
  private _sparkContextId?: number; 
  public get sparkContextId() {
    return this.getNumberAttribute('spark_context_id');
  }
  public set sparkContextId(value: number) {
    this._sparkContextId = value;
  }
  public resetSparkContextId() {
    this._sparkContextId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sparkContextIdInput() {
    return this._sparkContextId;
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

  // spark_version - computed: false, optional: true, required: false
  private _sparkVersion?: string; 
  public get sparkVersion() {
    return this.getStringAttribute('spark_version');
  }
  public set sparkVersion(value: string) {
    this._sparkVersion = value;
  }
  public resetSparkVersion() {
    this._sparkVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sparkVersionInput() {
    return this._sparkVersion;
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

  // start_time - computed: false, optional: true, required: false
  private _startTime?: number; 
  public get startTime() {
    return this.getNumberAttribute('start_time');
  }
  public set startTime(value: number) {
    this._startTime = value;
  }
  public resetStartTime() {
    this._startTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startTimeInput() {
    return this._startTime;
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

  // state_message - computed: false, optional: true, required: false
  private _stateMessage?: string; 
  public get stateMessage() {
    return this.getStringAttribute('state_message');
  }
  public set stateMessage(value: string) {
    this._stateMessage = value;
  }
  public resetStateMessage() {
    this._stateMessage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateMessageInput() {
    return this._stateMessage;
  }

  // terminated_time - computed: false, optional: true, required: false
  private _terminatedTime?: number; 
  public get terminatedTime() {
    return this.getNumberAttribute('terminated_time');
  }
  public set terminatedTime(value: number) {
    this._terminatedTime = value;
  }
  public resetTerminatedTime() {
    this._terminatedTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get terminatedTimeInput() {
    return this._terminatedTime;
  }

  // use_ml_runtime - computed: false, optional: true, required: false
  private _useMlRuntime?: boolean | cdktf.IResolvable; 
  public get useMlRuntime() {
    return this.getBooleanAttribute('use_ml_runtime');
  }
  public set useMlRuntime(value: boolean | cdktf.IResolvable) {
    this._useMlRuntime = value;
  }
  public resetUseMlRuntime() {
    this._useMlRuntime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useMlRuntimeInput() {
    return this._useMlRuntime;
  }

  // autoscale - computed: false, optional: true, required: false
  private _autoscale = new DataDatabricksClusterClusterInfoAutoscaleOutputReference(this, "autoscale");
  public get autoscale() {
    return this._autoscale;
  }
  public putAutoscale(value: DataDatabricksClusterClusterInfoAutoscale) {
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
  private _awsAttributes = new DataDatabricksClusterClusterInfoAwsAttributesOutputReference(this, "aws_attributes");
  public get awsAttributes() {
    return this._awsAttributes;
  }
  public putAwsAttributes(value: DataDatabricksClusterClusterInfoAwsAttributes) {
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
  private _azureAttributes = new DataDatabricksClusterClusterInfoAzureAttributesOutputReference(this, "azure_attributes");
  public get azureAttributes() {
    return this._azureAttributes;
  }
  public putAzureAttributes(value: DataDatabricksClusterClusterInfoAzureAttributes) {
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
  private _clusterLogConf = new DataDatabricksClusterClusterInfoClusterLogConfOutputReference(this, "cluster_log_conf");
  public get clusterLogConf() {
    return this._clusterLogConf;
  }
  public putClusterLogConf(value: DataDatabricksClusterClusterInfoClusterLogConf) {
    this._clusterLogConf.internalValue = value;
  }
  public resetClusterLogConf() {
    this._clusterLogConf.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterLogConfInput() {
    return this._clusterLogConf.internalValue;
  }

  // cluster_log_status - computed: false, optional: true, required: false
  private _clusterLogStatus = new DataDatabricksClusterClusterInfoClusterLogStatusOutputReference(this, "cluster_log_status");
  public get clusterLogStatus() {
    return this._clusterLogStatus;
  }
  public putClusterLogStatus(value: DataDatabricksClusterClusterInfoClusterLogStatus) {
    this._clusterLogStatus.internalValue = value;
  }
  public resetClusterLogStatus() {
    this._clusterLogStatus.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterLogStatusInput() {
    return this._clusterLogStatus.internalValue;
  }

  // docker_image - computed: false, optional: true, required: false
  private _dockerImage = new DataDatabricksClusterClusterInfoDockerImageOutputReference(this, "docker_image");
  public get dockerImage() {
    return this._dockerImage;
  }
  public putDockerImage(value: DataDatabricksClusterClusterInfoDockerImage) {
    this._dockerImage.internalValue = value;
  }
  public resetDockerImage() {
    this._dockerImage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dockerImageInput() {
    return this._dockerImage.internalValue;
  }

  // driver - computed: false, optional: true, required: false
  private _driver = new DataDatabricksClusterClusterInfoDriverOutputReference(this, "driver");
  public get driver() {
    return this._driver;
  }
  public putDriver(value: DataDatabricksClusterClusterInfoDriver) {
    this._driver.internalValue = value;
  }
  public resetDriver() {
    this._driver.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get driverInput() {
    return this._driver.internalValue;
  }

  // executors - computed: false, optional: true, required: false
  private _executors = new DataDatabricksClusterClusterInfoExecutorsList(this, "executors", false);
  public get executors() {
    return this._executors;
  }
  public putExecutors(value: DataDatabricksClusterClusterInfoExecutors[] | cdktf.IResolvable) {
    this._executors.internalValue = value;
  }
  public resetExecutors() {
    this._executors.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get executorsInput() {
    return this._executors.internalValue;
  }

  // gcp_attributes - computed: false, optional: true, required: false
  private _gcpAttributes = new DataDatabricksClusterClusterInfoGcpAttributesOutputReference(this, "gcp_attributes");
  public get gcpAttributes() {
    return this._gcpAttributes;
  }
  public putGcpAttributes(value: DataDatabricksClusterClusterInfoGcpAttributes) {
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
  private _initScripts = new DataDatabricksClusterClusterInfoInitScriptsList(this, "init_scripts", false);
  public get initScripts() {
    return this._initScripts;
  }
  public putInitScripts(value: DataDatabricksClusterClusterInfoInitScripts[] | cdktf.IResolvable) {
    this._initScripts.internalValue = value;
  }
  public resetInitScripts() {
    this._initScripts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initScriptsInput() {
    return this._initScripts.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataDatabricksClusterClusterInfoSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataDatabricksClusterClusterInfoSpec) {
    this._spec.internalValue = value;
  }
  public resetSpec() {
    this._spec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get specInput() {
    return this._spec.internalValue;
  }

  // termination_reason - computed: false, optional: true, required: false
  private _terminationReason = new DataDatabricksClusterClusterInfoTerminationReasonOutputReference(this, "termination_reason");
  public get terminationReason() {
    return this._terminationReason;
  }
  public putTerminationReason(value: DataDatabricksClusterClusterInfoTerminationReason) {
    this._terminationReason.internalValue = value;
  }
  public resetTerminationReason() {
    this._terminationReason.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get terminationReasonInput() {
    return this._terminationReason.internalValue;
  }

  // workload_type - computed: false, optional: true, required: false
  private _workloadType = new DataDatabricksClusterClusterInfoWorkloadTypeOutputReference(this, "workload_type");
  public get workloadType() {
    return this._workloadType;
  }
  public putWorkloadType(value: DataDatabricksClusterClusterInfoWorkloadType) {
    this._workloadType.internalValue = value;
  }
  public resetWorkloadType() {
    this._workloadType.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workloadTypeInput() {
    return this._workloadType.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/cluster databricks_cluster}
*/
export class DataDatabricksCluster extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "databricks_cluster";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataDatabricksCluster resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataDatabricksCluster to import
  * @param importFromId The id of the existing DataDatabricksCluster that should be imported. Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/cluster#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataDatabricksCluster to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "databricks_cluster", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/cluster databricks_cluster} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataDatabricksClusterConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataDatabricksClusterConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'databricks_cluster',
      terraformGeneratorMetadata: {
        providerName: 'databricks',
        providerVersion: '1.62.1',
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
    this._clusterId = config.clusterId;
    this._clusterName = config.clusterName;
    this._id = config.id;
    this._clusterInfo.internalValue = config.clusterInfo;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // cluster_name - computed: true, optional: true, required: false
  private _clusterName?: string; 
  public get clusterName() {
    return this.getStringAttribute('cluster_name');
  }
  public set clusterName(value: string) {
    this._clusterName = value;
  }
  public resetClusterName() {
    this._clusterName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterNameInput() {
    return this._clusterName;
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

  // cluster_info - computed: false, optional: true, required: false
  private _clusterInfo = new DataDatabricksClusterClusterInfoOutputReference(this, "cluster_info");
  public get clusterInfo() {
    return this._clusterInfo;
  }
  public putClusterInfo(value: DataDatabricksClusterClusterInfo) {
    this._clusterInfo.internalValue = value;
  }
  public resetClusterInfo() {
    this._clusterInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterInfoInput() {
    return this._clusterInfo.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cluster_id: cdktf.stringToTerraform(this._clusterId),
      cluster_name: cdktf.stringToTerraform(this._clusterName),
      id: cdktf.stringToTerraform(this._id),
      cluster_info: dataDatabricksClusterClusterInfoToTerraform(this._clusterInfo.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cluster_id: {
        value: cdktf.stringToHclTerraform(this._clusterId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cluster_name: {
        value: cdktf.stringToHclTerraform(this._clusterName),
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
      cluster_info: {
        value: dataDatabricksClusterClusterInfoToHclTerraform(this._clusterInfo.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataDatabricksClusterClusterInfoList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
