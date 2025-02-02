// https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/instance_pool
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface InstancePoolConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/instance_pool#custom_tags InstancePool#custom_tags}
  */
  readonly customTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/instance_pool#enable_elastic_disk InstancePool#enable_elastic_disk}
  */
  readonly enableElasticDisk?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/instance_pool#id InstancePool#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/instance_pool#idle_instance_autotermination_minutes InstancePool#idle_instance_autotermination_minutes}
  */
  readonly idleInstanceAutoterminationMinutes: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/instance_pool#instance_pool_id InstancePool#instance_pool_id}
  */
  readonly instancePoolId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/instance_pool#instance_pool_name InstancePool#instance_pool_name}
  */
  readonly instancePoolName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/instance_pool#max_capacity InstancePool#max_capacity}
  */
  readonly maxCapacity?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/instance_pool#min_idle_instances InstancePool#min_idle_instances}
  */
  readonly minIdleInstances?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/instance_pool#node_type_id InstancePool#node_type_id}
  */
  readonly nodeTypeId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/instance_pool#preloaded_spark_versions InstancePool#preloaded_spark_versions}
  */
  readonly preloadedSparkVersions?: string[];
  /**
  * aws_attributes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/instance_pool#aws_attributes InstancePool#aws_attributes}
  */
  readonly awsAttributes?: InstancePoolAwsAttributes;
  /**
  * azure_attributes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/instance_pool#azure_attributes InstancePool#azure_attributes}
  */
  readonly azureAttributes?: InstancePoolAzureAttributes;
  /**
  * disk_spec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/instance_pool#disk_spec InstancePool#disk_spec}
  */
  readonly diskSpec?: InstancePoolDiskSpec;
  /**
  * gcp_attributes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/instance_pool#gcp_attributes InstancePool#gcp_attributes}
  */
  readonly gcpAttributes?: InstancePoolGcpAttributes;
  /**
  * instance_pool_fleet_attributes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/instance_pool#instance_pool_fleet_attributes InstancePool#instance_pool_fleet_attributes}
  */
  readonly instancePoolFleetAttributes?: InstancePoolInstancePoolFleetAttributes;
  /**
  * preloaded_docker_image block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/instance_pool#preloaded_docker_image InstancePool#preloaded_docker_image}
  */
  readonly preloadedDockerImage?: InstancePoolPreloadedDockerImage[] | cdktf.IResolvable;
}
export interface InstancePoolAwsAttributes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/instance_pool#availability InstancePool#availability}
  */
  readonly availability?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/instance_pool#spot_bid_price_percent InstancePool#spot_bid_price_percent}
  */
  readonly spotBidPricePercent?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/instance_pool#zone_id InstancePool#zone_id}
  */
  readonly zoneId?: string;
}

export function instancePoolAwsAttributesToTerraform(struct?: InstancePoolAwsAttributesOutputReference | InstancePoolAwsAttributes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    availability: cdktf.stringToTerraform(struct!.availability),
    spot_bid_price_percent: cdktf.numberToTerraform(struct!.spotBidPricePercent),
    zone_id: cdktf.stringToTerraform(struct!.zoneId),
  }
}


export function instancePoolAwsAttributesToHclTerraform(struct?: InstancePoolAwsAttributesOutputReference | InstancePoolAwsAttributes): any {
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

export class InstancePoolAwsAttributesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InstancePoolAwsAttributes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._availability !== undefined) {
      hasAnyValues = true;
      internalValueResult.availability = this._availability;
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

  public set internalValue(value: InstancePoolAwsAttributes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._availability = undefined;
      this._spotBidPricePercent = undefined;
      this._zoneId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._availability = value.availability;
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

  // zone_id - computed: true, optional: true, required: false
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
export interface InstancePoolAzureAttributes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/instance_pool#availability InstancePool#availability}
  */
  readonly availability?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/instance_pool#spot_bid_max_price InstancePool#spot_bid_max_price}
  */
  readonly spotBidMaxPrice?: number;
}

export function instancePoolAzureAttributesToTerraform(struct?: InstancePoolAzureAttributesOutputReference | InstancePoolAzureAttributes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    availability: cdktf.stringToTerraform(struct!.availability),
    spot_bid_max_price: cdktf.numberToTerraform(struct!.spotBidMaxPrice),
  }
}


export function instancePoolAzureAttributesToHclTerraform(struct?: InstancePoolAzureAttributesOutputReference | InstancePoolAzureAttributes): any {
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
    spot_bid_max_price: {
      value: cdktf.numberToHclTerraform(struct!.spotBidMaxPrice),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InstancePoolAzureAttributesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InstancePoolAzureAttributes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._availability !== undefined) {
      hasAnyValues = true;
      internalValueResult.availability = this._availability;
    }
    if (this._spotBidMaxPrice !== undefined) {
      hasAnyValues = true;
      internalValueResult.spotBidMaxPrice = this._spotBidMaxPrice;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InstancePoolAzureAttributes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._availability = undefined;
      this._spotBidMaxPrice = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._availability = value.availability;
      this._spotBidMaxPrice = value.spotBidMaxPrice;
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
}
export interface InstancePoolDiskSpecDiskType {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/instance_pool#azure_disk_volume_type InstancePool#azure_disk_volume_type}
  */
  readonly azureDiskVolumeType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/instance_pool#ebs_volume_type InstancePool#ebs_volume_type}
  */
  readonly ebsVolumeType?: string;
}

export function instancePoolDiskSpecDiskTypeToTerraform(struct?: InstancePoolDiskSpecDiskTypeOutputReference | InstancePoolDiskSpecDiskType): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    azure_disk_volume_type: cdktf.stringToTerraform(struct!.azureDiskVolumeType),
    ebs_volume_type: cdktf.stringToTerraform(struct!.ebsVolumeType),
  }
}


export function instancePoolDiskSpecDiskTypeToHclTerraform(struct?: InstancePoolDiskSpecDiskTypeOutputReference | InstancePoolDiskSpecDiskType): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    azure_disk_volume_type: {
      value: cdktf.stringToHclTerraform(struct!.azureDiskVolumeType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ebs_volume_type: {
      value: cdktf.stringToHclTerraform(struct!.ebsVolumeType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InstancePoolDiskSpecDiskTypeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InstancePoolDiskSpecDiskType | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._azureDiskVolumeType !== undefined) {
      hasAnyValues = true;
      internalValueResult.azureDiskVolumeType = this._azureDiskVolumeType;
    }
    if (this._ebsVolumeType !== undefined) {
      hasAnyValues = true;
      internalValueResult.ebsVolumeType = this._ebsVolumeType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InstancePoolDiskSpecDiskType | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._azureDiskVolumeType = undefined;
      this._ebsVolumeType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._azureDiskVolumeType = value.azureDiskVolumeType;
      this._ebsVolumeType = value.ebsVolumeType;
    }
  }

  // azure_disk_volume_type - computed: false, optional: true, required: false
  private _azureDiskVolumeType?: string; 
  public get azureDiskVolumeType() {
    return this.getStringAttribute('azure_disk_volume_type');
  }
  public set azureDiskVolumeType(value: string) {
    this._azureDiskVolumeType = value;
  }
  public resetAzureDiskVolumeType() {
    this._azureDiskVolumeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureDiskVolumeTypeInput() {
    return this._azureDiskVolumeType;
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
}
export interface InstancePoolDiskSpec {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/instance_pool#disk_count InstancePool#disk_count}
  */
  readonly diskCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/instance_pool#disk_size InstancePool#disk_size}
  */
  readonly diskSize?: number;
  /**
  * disk_type block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/instance_pool#disk_type InstancePool#disk_type}
  */
  readonly diskType?: InstancePoolDiskSpecDiskType;
}

export function instancePoolDiskSpecToTerraform(struct?: InstancePoolDiskSpecOutputReference | InstancePoolDiskSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disk_count: cdktf.numberToTerraform(struct!.diskCount),
    disk_size: cdktf.numberToTerraform(struct!.diskSize),
    disk_type: instancePoolDiskSpecDiskTypeToTerraform(struct!.diskType),
  }
}


export function instancePoolDiskSpecToHclTerraform(struct?: InstancePoolDiskSpecOutputReference | InstancePoolDiskSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disk_count: {
      value: cdktf.numberToHclTerraform(struct!.diskCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    disk_size: {
      value: cdktf.numberToHclTerraform(struct!.diskSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    disk_type: {
      value: instancePoolDiskSpecDiskTypeToHclTerraform(struct!.diskType),
      isBlock: true,
      type: "list",
      storageClassType: "InstancePoolDiskSpecDiskTypeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InstancePoolDiskSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InstancePoolDiskSpec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._diskCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskCount = this._diskCount;
    }
    if (this._diskSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskSize = this._diskSize;
    }
    if (this._diskType?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskType = this._diskType?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InstancePoolDiskSpec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._diskCount = undefined;
      this._diskSize = undefined;
      this._diskType.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._diskCount = value.diskCount;
      this._diskSize = value.diskSize;
      this._diskType.internalValue = value.diskType;
    }
  }

  // disk_count - computed: false, optional: true, required: false
  private _diskCount?: number; 
  public get diskCount() {
    return this.getNumberAttribute('disk_count');
  }
  public set diskCount(value: number) {
    this._diskCount = value;
  }
  public resetDiskCount() {
    this._diskCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskCountInput() {
    return this._diskCount;
  }

  // disk_size - computed: false, optional: true, required: false
  private _diskSize?: number; 
  public get diskSize() {
    return this.getNumberAttribute('disk_size');
  }
  public set diskSize(value: number) {
    this._diskSize = value;
  }
  public resetDiskSize() {
    this._diskSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskSizeInput() {
    return this._diskSize;
  }

  // disk_type - computed: false, optional: true, required: false
  private _diskType = new InstancePoolDiskSpecDiskTypeOutputReference(this, "disk_type");
  public get diskType() {
    return this._diskType;
  }
  public putDiskType(value: InstancePoolDiskSpecDiskType) {
    this._diskType.internalValue = value;
  }
  public resetDiskType() {
    this._diskType.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskTypeInput() {
    return this._diskType.internalValue;
  }
}
export interface InstancePoolGcpAttributes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/instance_pool#gcp_availability InstancePool#gcp_availability}
  */
  readonly gcpAvailability?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/instance_pool#local_ssd_count InstancePool#local_ssd_count}
  */
  readonly localSsdCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/instance_pool#zone_id InstancePool#zone_id}
  */
  readonly zoneId?: string;
}

export function instancePoolGcpAttributesToTerraform(struct?: InstancePoolGcpAttributesOutputReference | InstancePoolGcpAttributes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    gcp_availability: cdktf.stringToTerraform(struct!.gcpAvailability),
    local_ssd_count: cdktf.numberToTerraform(struct!.localSsdCount),
    zone_id: cdktf.stringToTerraform(struct!.zoneId),
  }
}


export function instancePoolGcpAttributesToHclTerraform(struct?: InstancePoolGcpAttributesOutputReference | InstancePoolGcpAttributes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    gcp_availability: {
      value: cdktf.stringToHclTerraform(struct!.gcpAvailability),
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

export class InstancePoolGcpAttributesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InstancePoolGcpAttributes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._gcpAvailability !== undefined) {
      hasAnyValues = true;
      internalValueResult.gcpAvailability = this._gcpAvailability;
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

  public set internalValue(value: InstancePoolGcpAttributes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._gcpAvailability = undefined;
      this._localSsdCount = undefined;
      this._zoneId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._gcpAvailability = value.gcpAvailability;
      this._localSsdCount = value.localSsdCount;
      this._zoneId = value.zoneId;
    }
  }

  // gcp_availability - computed: false, optional: true, required: false
  private _gcpAvailability?: string; 
  public get gcpAvailability() {
    return this.getStringAttribute('gcp_availability');
  }
  public set gcpAvailability(value: string) {
    this._gcpAvailability = value;
  }
  public resetGcpAvailability() {
    this._gcpAvailability = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcpAvailabilityInput() {
    return this._gcpAvailability;
  }

  // local_ssd_count - computed: true, optional: true, required: false
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

  // zone_id - computed: true, optional: true, required: false
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
export interface InstancePoolInstancePoolFleetAttributesFleetOnDemandOption {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/instance_pool#allocation_strategy InstancePool#allocation_strategy}
  */
  readonly allocationStrategy: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/instance_pool#instance_pools_to_use_count InstancePool#instance_pools_to_use_count}
  */
  readonly instancePoolsToUseCount?: number;
}

export function instancePoolInstancePoolFleetAttributesFleetOnDemandOptionToTerraform(struct?: InstancePoolInstancePoolFleetAttributesFleetOnDemandOptionOutputReference | InstancePoolInstancePoolFleetAttributesFleetOnDemandOption): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allocation_strategy: cdktf.stringToTerraform(struct!.allocationStrategy),
    instance_pools_to_use_count: cdktf.numberToTerraform(struct!.instancePoolsToUseCount),
  }
}


export function instancePoolInstancePoolFleetAttributesFleetOnDemandOptionToHclTerraform(struct?: InstancePoolInstancePoolFleetAttributesFleetOnDemandOptionOutputReference | InstancePoolInstancePoolFleetAttributesFleetOnDemandOption): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allocation_strategy: {
      value: cdktf.stringToHclTerraform(struct!.allocationStrategy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instance_pools_to_use_count: {
      value: cdktf.numberToHclTerraform(struct!.instancePoolsToUseCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InstancePoolInstancePoolFleetAttributesFleetOnDemandOptionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InstancePoolInstancePoolFleetAttributesFleetOnDemandOption | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allocationStrategy !== undefined) {
      hasAnyValues = true;
      internalValueResult.allocationStrategy = this._allocationStrategy;
    }
    if (this._instancePoolsToUseCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.instancePoolsToUseCount = this._instancePoolsToUseCount;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InstancePoolInstancePoolFleetAttributesFleetOnDemandOption | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allocationStrategy = undefined;
      this._instancePoolsToUseCount = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allocationStrategy = value.allocationStrategy;
      this._instancePoolsToUseCount = value.instancePoolsToUseCount;
    }
  }

  // allocation_strategy - computed: false, optional: false, required: true
  private _allocationStrategy?: string; 
  public get allocationStrategy() {
    return this.getStringAttribute('allocation_strategy');
  }
  public set allocationStrategy(value: string) {
    this._allocationStrategy = value;
  }
  // Temporarily expose input value. Use with caution.
  public get allocationStrategyInput() {
    return this._allocationStrategy;
  }

  // instance_pools_to_use_count - computed: false, optional: true, required: false
  private _instancePoolsToUseCount?: number; 
  public get instancePoolsToUseCount() {
    return this.getNumberAttribute('instance_pools_to_use_count');
  }
  public set instancePoolsToUseCount(value: number) {
    this._instancePoolsToUseCount = value;
  }
  public resetInstancePoolsToUseCount() {
    this._instancePoolsToUseCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instancePoolsToUseCountInput() {
    return this._instancePoolsToUseCount;
  }
}
export interface InstancePoolInstancePoolFleetAttributesFleetSpotOption {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/instance_pool#allocation_strategy InstancePool#allocation_strategy}
  */
  readonly allocationStrategy: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/instance_pool#instance_pools_to_use_count InstancePool#instance_pools_to_use_count}
  */
  readonly instancePoolsToUseCount?: number;
}

export function instancePoolInstancePoolFleetAttributesFleetSpotOptionToTerraform(struct?: InstancePoolInstancePoolFleetAttributesFleetSpotOptionOutputReference | InstancePoolInstancePoolFleetAttributesFleetSpotOption): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allocation_strategy: cdktf.stringToTerraform(struct!.allocationStrategy),
    instance_pools_to_use_count: cdktf.numberToTerraform(struct!.instancePoolsToUseCount),
  }
}


export function instancePoolInstancePoolFleetAttributesFleetSpotOptionToHclTerraform(struct?: InstancePoolInstancePoolFleetAttributesFleetSpotOptionOutputReference | InstancePoolInstancePoolFleetAttributesFleetSpotOption): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allocation_strategy: {
      value: cdktf.stringToHclTerraform(struct!.allocationStrategy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instance_pools_to_use_count: {
      value: cdktf.numberToHclTerraform(struct!.instancePoolsToUseCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InstancePoolInstancePoolFleetAttributesFleetSpotOptionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InstancePoolInstancePoolFleetAttributesFleetSpotOption | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allocationStrategy !== undefined) {
      hasAnyValues = true;
      internalValueResult.allocationStrategy = this._allocationStrategy;
    }
    if (this._instancePoolsToUseCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.instancePoolsToUseCount = this._instancePoolsToUseCount;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InstancePoolInstancePoolFleetAttributesFleetSpotOption | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allocationStrategy = undefined;
      this._instancePoolsToUseCount = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allocationStrategy = value.allocationStrategy;
      this._instancePoolsToUseCount = value.instancePoolsToUseCount;
    }
  }

  // allocation_strategy - computed: false, optional: false, required: true
  private _allocationStrategy?: string; 
  public get allocationStrategy() {
    return this.getStringAttribute('allocation_strategy');
  }
  public set allocationStrategy(value: string) {
    this._allocationStrategy = value;
  }
  // Temporarily expose input value. Use with caution.
  public get allocationStrategyInput() {
    return this._allocationStrategy;
  }

  // instance_pools_to_use_count - computed: false, optional: true, required: false
  private _instancePoolsToUseCount?: number; 
  public get instancePoolsToUseCount() {
    return this.getNumberAttribute('instance_pools_to_use_count');
  }
  public set instancePoolsToUseCount(value: number) {
    this._instancePoolsToUseCount = value;
  }
  public resetInstancePoolsToUseCount() {
    this._instancePoolsToUseCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instancePoolsToUseCountInput() {
    return this._instancePoolsToUseCount;
  }
}
export interface InstancePoolInstancePoolFleetAttributesLaunchTemplateOverride {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/instance_pool#availability_zone InstancePool#availability_zone}
  */
  readonly availabilityZone: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/instance_pool#instance_type InstancePool#instance_type}
  */
  readonly instanceType: string;
}

export function instancePoolInstancePoolFleetAttributesLaunchTemplateOverrideToTerraform(struct?: InstancePoolInstancePoolFleetAttributesLaunchTemplateOverride | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    availability_zone: cdktf.stringToTerraform(struct!.availabilityZone),
    instance_type: cdktf.stringToTerraform(struct!.instanceType),
  }
}


export function instancePoolInstancePoolFleetAttributesLaunchTemplateOverrideToHclTerraform(struct?: InstancePoolInstancePoolFleetAttributesLaunchTemplateOverride | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    availability_zone: {
      value: cdktf.stringToHclTerraform(struct!.availabilityZone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instance_type: {
      value: cdktf.stringToHclTerraform(struct!.instanceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): InstancePoolInstancePoolFleetAttributesLaunchTemplateOverride | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._availabilityZone !== undefined) {
      hasAnyValues = true;
      internalValueResult.availabilityZone = this._availabilityZone;
    }
    if (this._instanceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceType = this._instanceType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InstancePoolInstancePoolFleetAttributesLaunchTemplateOverride | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._availabilityZone = undefined;
      this._instanceType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._availabilityZone = value.availabilityZone;
      this._instanceType = value.instanceType;
    }
  }

  // availability_zone - computed: false, optional: false, required: true
  private _availabilityZone?: string; 
  public get availabilityZone() {
    return this.getStringAttribute('availability_zone');
  }
  public set availabilityZone(value: string) {
    this._availabilityZone = value;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityZoneInput() {
    return this._availabilityZone;
  }

  // instance_type - computed: false, optional: false, required: true
  private _instanceType?: string; 
  public get instanceType() {
    return this.getStringAttribute('instance_type');
  }
  public set instanceType(value: string) {
    this._instanceType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceTypeInput() {
    return this._instanceType;
  }
}

export class InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideList extends cdktf.ComplexList {
  public internalValue? : InstancePoolInstancePoolFleetAttributesLaunchTemplateOverride[] | cdktf.IResolvable

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
  public get(index: number): InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference {
    return new InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface InstancePoolInstancePoolFleetAttributes {
  /**
  * fleet_on_demand_option block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/instance_pool#fleet_on_demand_option InstancePool#fleet_on_demand_option}
  */
  readonly fleetOnDemandOption?: InstancePoolInstancePoolFleetAttributesFleetOnDemandOption;
  /**
  * fleet_spot_option block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/instance_pool#fleet_spot_option InstancePool#fleet_spot_option}
  */
  readonly fleetSpotOption?: InstancePoolInstancePoolFleetAttributesFleetSpotOption;
  /**
  * launch_template_override block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/instance_pool#launch_template_override InstancePool#launch_template_override}
  */
  readonly launchTemplateOverride: InstancePoolInstancePoolFleetAttributesLaunchTemplateOverride[] | cdktf.IResolvable;
}

export function instancePoolInstancePoolFleetAttributesToTerraform(struct?: InstancePoolInstancePoolFleetAttributesOutputReference | InstancePoolInstancePoolFleetAttributes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fleet_on_demand_option: instancePoolInstancePoolFleetAttributesFleetOnDemandOptionToTerraform(struct!.fleetOnDemandOption),
    fleet_spot_option: instancePoolInstancePoolFleetAttributesFleetSpotOptionToTerraform(struct!.fleetSpotOption),
    launch_template_override: cdktf.listMapper(instancePoolInstancePoolFleetAttributesLaunchTemplateOverrideToTerraform, true)(struct!.launchTemplateOverride),
  }
}


export function instancePoolInstancePoolFleetAttributesToHclTerraform(struct?: InstancePoolInstancePoolFleetAttributesOutputReference | InstancePoolInstancePoolFleetAttributes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fleet_on_demand_option: {
      value: instancePoolInstancePoolFleetAttributesFleetOnDemandOptionToHclTerraform(struct!.fleetOnDemandOption),
      isBlock: true,
      type: "list",
      storageClassType: "InstancePoolInstancePoolFleetAttributesFleetOnDemandOptionList",
    },
    fleet_spot_option: {
      value: instancePoolInstancePoolFleetAttributesFleetSpotOptionToHclTerraform(struct!.fleetSpotOption),
      isBlock: true,
      type: "list",
      storageClassType: "InstancePoolInstancePoolFleetAttributesFleetSpotOptionList",
    },
    launch_template_override: {
      value: cdktf.listMapperHcl(instancePoolInstancePoolFleetAttributesLaunchTemplateOverrideToHclTerraform, true)(struct!.launchTemplateOverride),
      isBlock: true,
      type: "set",
      storageClassType: "InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InstancePoolInstancePoolFleetAttributesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InstancePoolInstancePoolFleetAttributes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fleetOnDemandOption?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fleetOnDemandOption = this._fleetOnDemandOption?.internalValue;
    }
    if (this._fleetSpotOption?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fleetSpotOption = this._fleetSpotOption?.internalValue;
    }
    if (this._launchTemplateOverride?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.launchTemplateOverride = this._launchTemplateOverride?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InstancePoolInstancePoolFleetAttributes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._fleetOnDemandOption.internalValue = undefined;
      this._fleetSpotOption.internalValue = undefined;
      this._launchTemplateOverride.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._fleetOnDemandOption.internalValue = value.fleetOnDemandOption;
      this._fleetSpotOption.internalValue = value.fleetSpotOption;
      this._launchTemplateOverride.internalValue = value.launchTemplateOverride;
    }
  }

  // fleet_on_demand_option - computed: false, optional: true, required: false
  private _fleetOnDemandOption = new InstancePoolInstancePoolFleetAttributesFleetOnDemandOptionOutputReference(this, "fleet_on_demand_option");
  public get fleetOnDemandOption() {
    return this._fleetOnDemandOption;
  }
  public putFleetOnDemandOption(value: InstancePoolInstancePoolFleetAttributesFleetOnDemandOption) {
    this._fleetOnDemandOption.internalValue = value;
  }
  public resetFleetOnDemandOption() {
    this._fleetOnDemandOption.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fleetOnDemandOptionInput() {
    return this._fleetOnDemandOption.internalValue;
  }

  // fleet_spot_option - computed: false, optional: true, required: false
  private _fleetSpotOption = new InstancePoolInstancePoolFleetAttributesFleetSpotOptionOutputReference(this, "fleet_spot_option");
  public get fleetSpotOption() {
    return this._fleetSpotOption;
  }
  public putFleetSpotOption(value: InstancePoolInstancePoolFleetAttributesFleetSpotOption) {
    this._fleetSpotOption.internalValue = value;
  }
  public resetFleetSpotOption() {
    this._fleetSpotOption.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fleetSpotOptionInput() {
    return this._fleetSpotOption.internalValue;
  }

  // launch_template_override - computed: false, optional: false, required: true
  private _launchTemplateOverride = new InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideList(this, "launch_template_override", true);
  public get launchTemplateOverride() {
    return this._launchTemplateOverride;
  }
  public putLaunchTemplateOverride(value: InstancePoolInstancePoolFleetAttributesLaunchTemplateOverride[] | cdktf.IResolvable) {
    this._launchTemplateOverride.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get launchTemplateOverrideInput() {
    return this._launchTemplateOverride.internalValue;
  }
}
export interface InstancePoolPreloadedDockerImageBasicAuth {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/instance_pool#password InstancePool#password}
  */
  readonly password: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/instance_pool#username InstancePool#username}
  */
  readonly username: string;
}

export function instancePoolPreloadedDockerImageBasicAuthToTerraform(struct?: InstancePoolPreloadedDockerImageBasicAuthOutputReference | InstancePoolPreloadedDockerImageBasicAuth): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    password: cdktf.stringToTerraform(struct!.password),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function instancePoolPreloadedDockerImageBasicAuthToHclTerraform(struct?: InstancePoolPreloadedDockerImageBasicAuthOutputReference | InstancePoolPreloadedDockerImageBasicAuth): any {
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

export class InstancePoolPreloadedDockerImageBasicAuthOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InstancePoolPreloadedDockerImageBasicAuth | undefined {
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

  public set internalValue(value: InstancePoolPreloadedDockerImageBasicAuth | undefined) {
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
export interface InstancePoolPreloadedDockerImage {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/instance_pool#url InstancePool#url}
  */
  readonly url: string;
  /**
  * basic_auth block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/instance_pool#basic_auth InstancePool#basic_auth}
  */
  readonly basicAuth?: InstancePoolPreloadedDockerImageBasicAuth;
}

export function instancePoolPreloadedDockerImageToTerraform(struct?: InstancePoolPreloadedDockerImage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    url: cdktf.stringToTerraform(struct!.url),
    basic_auth: instancePoolPreloadedDockerImageBasicAuthToTerraform(struct!.basicAuth),
  }
}


export function instancePoolPreloadedDockerImageToHclTerraform(struct?: InstancePoolPreloadedDockerImage | cdktf.IResolvable): any {
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
      value: instancePoolPreloadedDockerImageBasicAuthToHclTerraform(struct!.basicAuth),
      isBlock: true,
      type: "list",
      storageClassType: "InstancePoolPreloadedDockerImageBasicAuthList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InstancePoolPreloadedDockerImageOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): InstancePoolPreloadedDockerImage | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
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

  public set internalValue(value: InstancePoolPreloadedDockerImage | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._url = undefined;
      this._basicAuth.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
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
  private _basicAuth = new InstancePoolPreloadedDockerImageBasicAuthOutputReference(this, "basic_auth");
  public get basicAuth() {
    return this._basicAuth;
  }
  public putBasicAuth(value: InstancePoolPreloadedDockerImageBasicAuth) {
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

export class InstancePoolPreloadedDockerImageList extends cdktf.ComplexList {
  public internalValue? : InstancePoolPreloadedDockerImage[] | cdktf.IResolvable

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
  public get(index: number): InstancePoolPreloadedDockerImageOutputReference {
    return new InstancePoolPreloadedDockerImageOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/instance_pool databricks_instance_pool}
*/
export class InstancePool extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "databricks_instance_pool";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a InstancePool resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the InstancePool to import
  * @param importFromId The id of the existing InstancePool that should be imported. Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/instance_pool#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the InstancePool to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "databricks_instance_pool", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/instance_pool databricks_instance_pool} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options InstancePoolConfig
  */
  public constructor(scope: Construct, id: string, config: InstancePoolConfig) {
    super(scope, id, {
      terraformResourceType: 'databricks_instance_pool',
      terraformGeneratorMetadata: {
        providerName: 'databricks',
        providerVersion: '1.64.1',
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
    this._customTags = config.customTags;
    this._enableElasticDisk = config.enableElasticDisk;
    this._id = config.id;
    this._idleInstanceAutoterminationMinutes = config.idleInstanceAutoterminationMinutes;
    this._instancePoolId = config.instancePoolId;
    this._instancePoolName = config.instancePoolName;
    this._maxCapacity = config.maxCapacity;
    this._minIdleInstances = config.minIdleInstances;
    this._nodeTypeId = config.nodeTypeId;
    this._preloadedSparkVersions = config.preloadedSparkVersions;
    this._awsAttributes.internalValue = config.awsAttributes;
    this._azureAttributes.internalValue = config.azureAttributes;
    this._diskSpec.internalValue = config.diskSpec;
    this._gcpAttributes.internalValue = config.gcpAttributes;
    this._instancePoolFleetAttributes.internalValue = config.instancePoolFleetAttributes;
    this._preloadedDockerImage.internalValue = config.preloadedDockerImage;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // idle_instance_autotermination_minutes - computed: false, optional: false, required: true
  private _idleInstanceAutoterminationMinutes?: number; 
  public get idleInstanceAutoterminationMinutes() {
    return this.getNumberAttribute('idle_instance_autotermination_minutes');
  }
  public set idleInstanceAutoterminationMinutes(value: number) {
    this._idleInstanceAutoterminationMinutes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idleInstanceAutoterminationMinutesInput() {
    return this._idleInstanceAutoterminationMinutes;
  }

  // instance_pool_id - computed: true, optional: true, required: false
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

  // instance_pool_name - computed: false, optional: false, required: true
  private _instancePoolName?: string; 
  public get instancePoolName() {
    return this.getStringAttribute('instance_pool_name');
  }
  public set instancePoolName(value: string) {
    this._instancePoolName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instancePoolNameInput() {
    return this._instancePoolName;
  }

  // max_capacity - computed: false, optional: true, required: false
  private _maxCapacity?: number; 
  public get maxCapacity() {
    return this.getNumberAttribute('max_capacity');
  }
  public set maxCapacity(value: number) {
    this._maxCapacity = value;
  }
  public resetMaxCapacity() {
    this._maxCapacity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxCapacityInput() {
    return this._maxCapacity;
  }

  // min_idle_instances - computed: false, optional: true, required: false
  private _minIdleInstances?: number; 
  public get minIdleInstances() {
    return this.getNumberAttribute('min_idle_instances');
  }
  public set minIdleInstances(value: number) {
    this._minIdleInstances = value;
  }
  public resetMinIdleInstances() {
    this._minIdleInstances = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minIdleInstancesInput() {
    return this._minIdleInstances;
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

  // preloaded_spark_versions - computed: false, optional: true, required: false
  private _preloadedSparkVersions?: string[]; 
  public get preloadedSparkVersions() {
    return this.getListAttribute('preloaded_spark_versions');
  }
  public set preloadedSparkVersions(value: string[]) {
    this._preloadedSparkVersions = value;
  }
  public resetPreloadedSparkVersions() {
    this._preloadedSparkVersions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preloadedSparkVersionsInput() {
    return this._preloadedSparkVersions;
  }

  // aws_attributes - computed: false, optional: true, required: false
  private _awsAttributes = new InstancePoolAwsAttributesOutputReference(this, "aws_attributes");
  public get awsAttributes() {
    return this._awsAttributes;
  }
  public putAwsAttributes(value: InstancePoolAwsAttributes) {
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
  private _azureAttributes = new InstancePoolAzureAttributesOutputReference(this, "azure_attributes");
  public get azureAttributes() {
    return this._azureAttributes;
  }
  public putAzureAttributes(value: InstancePoolAzureAttributes) {
    this._azureAttributes.internalValue = value;
  }
  public resetAzureAttributes() {
    this._azureAttributes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureAttributesInput() {
    return this._azureAttributes.internalValue;
  }

  // disk_spec - computed: false, optional: true, required: false
  private _diskSpec = new InstancePoolDiskSpecOutputReference(this, "disk_spec");
  public get diskSpec() {
    return this._diskSpec;
  }
  public putDiskSpec(value: InstancePoolDiskSpec) {
    this._diskSpec.internalValue = value;
  }
  public resetDiskSpec() {
    this._diskSpec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskSpecInput() {
    return this._diskSpec.internalValue;
  }

  // gcp_attributes - computed: false, optional: true, required: false
  private _gcpAttributes = new InstancePoolGcpAttributesOutputReference(this, "gcp_attributes");
  public get gcpAttributes() {
    return this._gcpAttributes;
  }
  public putGcpAttributes(value: InstancePoolGcpAttributes) {
    this._gcpAttributes.internalValue = value;
  }
  public resetGcpAttributes() {
    this._gcpAttributes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcpAttributesInput() {
    return this._gcpAttributes.internalValue;
  }

  // instance_pool_fleet_attributes - computed: false, optional: true, required: false
  private _instancePoolFleetAttributes = new InstancePoolInstancePoolFleetAttributesOutputReference(this, "instance_pool_fleet_attributes");
  public get instancePoolFleetAttributes() {
    return this._instancePoolFleetAttributes;
  }
  public putInstancePoolFleetAttributes(value: InstancePoolInstancePoolFleetAttributes) {
    this._instancePoolFleetAttributes.internalValue = value;
  }
  public resetInstancePoolFleetAttributes() {
    this._instancePoolFleetAttributes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instancePoolFleetAttributesInput() {
    return this._instancePoolFleetAttributes.internalValue;
  }

  // preloaded_docker_image - computed: false, optional: true, required: false
  private _preloadedDockerImage = new InstancePoolPreloadedDockerImageList(this, "preloaded_docker_image", true);
  public get preloadedDockerImage() {
    return this._preloadedDockerImage;
  }
  public putPreloadedDockerImage(value: InstancePoolPreloadedDockerImage[] | cdktf.IResolvable) {
    this._preloadedDockerImage.internalValue = value;
  }
  public resetPreloadedDockerImage() {
    this._preloadedDockerImage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preloadedDockerImageInput() {
    return this._preloadedDockerImage.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      custom_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._customTags),
      enable_elastic_disk: cdktf.booleanToTerraform(this._enableElasticDisk),
      id: cdktf.stringToTerraform(this._id),
      idle_instance_autotermination_minutes: cdktf.numberToTerraform(this._idleInstanceAutoterminationMinutes),
      instance_pool_id: cdktf.stringToTerraform(this._instancePoolId),
      instance_pool_name: cdktf.stringToTerraform(this._instancePoolName),
      max_capacity: cdktf.numberToTerraform(this._maxCapacity),
      min_idle_instances: cdktf.numberToTerraform(this._minIdleInstances),
      node_type_id: cdktf.stringToTerraform(this._nodeTypeId),
      preloaded_spark_versions: cdktf.listMapper(cdktf.stringToTerraform, false)(this._preloadedSparkVersions),
      aws_attributes: instancePoolAwsAttributesToTerraform(this._awsAttributes.internalValue),
      azure_attributes: instancePoolAzureAttributesToTerraform(this._azureAttributes.internalValue),
      disk_spec: instancePoolDiskSpecToTerraform(this._diskSpec.internalValue),
      gcp_attributes: instancePoolGcpAttributesToTerraform(this._gcpAttributes.internalValue),
      instance_pool_fleet_attributes: instancePoolInstancePoolFleetAttributesToTerraform(this._instancePoolFleetAttributes.internalValue),
      preloaded_docker_image: cdktf.listMapper(instancePoolPreloadedDockerImageToTerraform, true)(this._preloadedDockerImage.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      custom_tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._customTags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      enable_elastic_disk: {
        value: cdktf.booleanToHclTerraform(this._enableElasticDisk),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      idle_instance_autotermination_minutes: {
        value: cdktf.numberToHclTerraform(this._idleInstanceAutoterminationMinutes),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      instance_pool_id: {
        value: cdktf.stringToHclTerraform(this._instancePoolId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      instance_pool_name: {
        value: cdktf.stringToHclTerraform(this._instancePoolName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_capacity: {
        value: cdktf.numberToHclTerraform(this._maxCapacity),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      min_idle_instances: {
        value: cdktf.numberToHclTerraform(this._minIdleInstances),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      node_type_id: {
        value: cdktf.stringToHclTerraform(this._nodeTypeId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      preloaded_spark_versions: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._preloadedSparkVersions),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      aws_attributes: {
        value: instancePoolAwsAttributesToHclTerraform(this._awsAttributes.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "InstancePoolAwsAttributesList",
      },
      azure_attributes: {
        value: instancePoolAzureAttributesToHclTerraform(this._azureAttributes.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "InstancePoolAzureAttributesList",
      },
      disk_spec: {
        value: instancePoolDiskSpecToHclTerraform(this._diskSpec.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "InstancePoolDiskSpecList",
      },
      gcp_attributes: {
        value: instancePoolGcpAttributesToHclTerraform(this._gcpAttributes.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "InstancePoolGcpAttributesList",
      },
      instance_pool_fleet_attributes: {
        value: instancePoolInstancePoolFleetAttributesToHclTerraform(this._instancePoolFleetAttributes.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "InstancePoolInstancePoolFleetAttributesList",
      },
      preloaded_docker_image: {
        value: cdktf.listMapperHcl(instancePoolPreloadedDockerImageToHclTerraform, true)(this._preloadedDockerImage.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "InstancePoolPreloadedDockerImageList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
