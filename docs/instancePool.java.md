# `instancePool` Submodule <a name="`instancePool` Submodule" id="@cdktf/provider-databricks.instancePool"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### InstancePool <a name="InstancePool" id="@cdktf/provider-databricks.instancePool.InstancePool"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/instance_pool databricks_instance_pool}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.instancePool.InstancePool.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.instance_pool.InstancePool;

InstancePool.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .idleInstanceAutoterminationMinutes(java.lang.Number)
    .instancePoolName(java.lang.String)
//  .awsAttributes(InstancePoolAwsAttributes)
//  .azureAttributes(InstancePoolAzureAttributes)
//  .customTags(java.util.Map<java.lang.String, java.lang.String>)
//  .diskSpec(InstancePoolDiskSpec)
//  .enableElasticDisk(java.lang.Boolean)
//  .enableElasticDisk(IResolvable)
//  .gcpAttributes(InstancePoolGcpAttributes)
//  .id(java.lang.String)
//  .instancePoolFleetAttributes(InstancePoolInstancePoolFleetAttributes)
//  .instancePoolId(java.lang.String)
//  .maxCapacity(java.lang.Number)
//  .minIdleInstances(java.lang.Number)
//  .nodeTypeId(java.lang.String)
//  .preloadedDockerImage(IResolvable)
//  .preloadedDockerImage(java.util.List<InstancePoolPreloadedDockerImage>)
//  .preloadedSparkVersions(java.util.List<java.lang.String>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePool.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePool.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePool.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePool.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePool.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePool.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePool.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePool.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePool.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePool.Initializer.parameter.idleInstanceAutoterminationMinutes">idleInstanceAutoterminationMinutes</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/instance_pool#idle_instance_autotermination_minutes InstancePool#idle_instance_autotermination_minutes}. |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePool.Initializer.parameter.instancePoolName">instancePoolName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/instance_pool#instance_pool_name InstancePool#instance_pool_name}. |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePool.Initializer.parameter.awsAttributes">awsAttributes</a></code> | <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolAwsAttributes">InstancePoolAwsAttributes</a></code> | aws_attributes block. |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePool.Initializer.parameter.azureAttributes">azureAttributes</a></code> | <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolAzureAttributes">InstancePoolAzureAttributes</a></code> | azure_attributes block. |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePool.Initializer.parameter.customTags">customTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/instance_pool#custom_tags InstancePool#custom_tags}. |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePool.Initializer.parameter.diskSpec">diskSpec</a></code> | <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolDiskSpec">InstancePoolDiskSpec</a></code> | disk_spec block. |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePool.Initializer.parameter.enableElasticDisk">enableElasticDisk</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/instance_pool#enable_elastic_disk InstancePool#enable_elastic_disk}. |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePool.Initializer.parameter.gcpAttributes">gcpAttributes</a></code> | <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolGcpAttributes">InstancePoolGcpAttributes</a></code> | gcp_attributes block. |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePool.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/instance_pool#id InstancePool#id}. |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePool.Initializer.parameter.instancePoolFleetAttributes">instancePoolFleetAttributes</a></code> | <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributes">InstancePoolInstancePoolFleetAttributes</a></code> | instance_pool_fleet_attributes block. |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePool.Initializer.parameter.instancePoolId">instancePoolId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/instance_pool#instance_pool_id InstancePool#instance_pool_id}. |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePool.Initializer.parameter.maxCapacity">maxCapacity</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/instance_pool#max_capacity InstancePool#max_capacity}. |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePool.Initializer.parameter.minIdleInstances">minIdleInstances</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/instance_pool#min_idle_instances InstancePool#min_idle_instances}. |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePool.Initializer.parameter.nodeTypeId">nodeTypeId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/instance_pool#node_type_id InstancePool#node_type_id}. |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePool.Initializer.parameter.preloadedDockerImage">preloadedDockerImage</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImage">InstancePoolPreloadedDockerImage</a>></code> | preloaded_docker_image block. |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePool.Initializer.parameter.preloadedSparkVersions">preloadedSparkVersions</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/instance_pool#preloaded_spark_versions InstancePool#preloaded_spark_versions}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.instancePool.InstancePool.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.instancePool.InstancePool.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.instancePool.InstancePool.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.instancePool.InstancePool.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.instancePool.InstancePool.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.instancePool.InstancePool.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.instancePool.InstancePool.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.instancePool.InstancePool.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.instancePool.InstancePool.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `idleInstanceAutoterminationMinutes`<sup>Required</sup> <a name="idleInstanceAutoterminationMinutes" id="@cdktf/provider-databricks.instancePool.InstancePool.Initializer.parameter.idleInstanceAutoterminationMinutes"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/instance_pool#idle_instance_autotermination_minutes InstancePool#idle_instance_autotermination_minutes}.

---

##### `instancePoolName`<sup>Required</sup> <a name="instancePoolName" id="@cdktf/provider-databricks.instancePool.InstancePool.Initializer.parameter.instancePoolName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/instance_pool#instance_pool_name InstancePool#instance_pool_name}.

---

##### `awsAttributes`<sup>Optional</sup> <a name="awsAttributes" id="@cdktf/provider-databricks.instancePool.InstancePool.Initializer.parameter.awsAttributes"></a>

- *Type:* <a href="#@cdktf/provider-databricks.instancePool.InstancePoolAwsAttributes">InstancePoolAwsAttributes</a>

aws_attributes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/instance_pool#aws_attributes InstancePool#aws_attributes}

---

##### `azureAttributes`<sup>Optional</sup> <a name="azureAttributes" id="@cdktf/provider-databricks.instancePool.InstancePool.Initializer.parameter.azureAttributes"></a>

- *Type:* <a href="#@cdktf/provider-databricks.instancePool.InstancePoolAzureAttributes">InstancePoolAzureAttributes</a>

azure_attributes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/instance_pool#azure_attributes InstancePool#azure_attributes}

---

##### `customTags`<sup>Optional</sup> <a name="customTags" id="@cdktf/provider-databricks.instancePool.InstancePool.Initializer.parameter.customTags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/instance_pool#custom_tags InstancePool#custom_tags}.

---

##### `diskSpec`<sup>Optional</sup> <a name="diskSpec" id="@cdktf/provider-databricks.instancePool.InstancePool.Initializer.parameter.diskSpec"></a>

- *Type:* <a href="#@cdktf/provider-databricks.instancePool.InstancePoolDiskSpec">InstancePoolDiskSpec</a>

disk_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/instance_pool#disk_spec InstancePool#disk_spec}

---

##### `enableElasticDisk`<sup>Optional</sup> <a name="enableElasticDisk" id="@cdktf/provider-databricks.instancePool.InstancePool.Initializer.parameter.enableElasticDisk"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/instance_pool#enable_elastic_disk InstancePool#enable_elastic_disk}.

---

##### `gcpAttributes`<sup>Optional</sup> <a name="gcpAttributes" id="@cdktf/provider-databricks.instancePool.InstancePool.Initializer.parameter.gcpAttributes"></a>

- *Type:* <a href="#@cdktf/provider-databricks.instancePool.InstancePoolGcpAttributes">InstancePoolGcpAttributes</a>

gcp_attributes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/instance_pool#gcp_attributes InstancePool#gcp_attributes}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-databricks.instancePool.InstancePool.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/instance_pool#id InstancePool#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `instancePoolFleetAttributes`<sup>Optional</sup> <a name="instancePoolFleetAttributes" id="@cdktf/provider-databricks.instancePool.InstancePool.Initializer.parameter.instancePoolFleetAttributes"></a>

- *Type:* <a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributes">InstancePoolInstancePoolFleetAttributes</a>

instance_pool_fleet_attributes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/instance_pool#instance_pool_fleet_attributes InstancePool#instance_pool_fleet_attributes}

---

##### `instancePoolId`<sup>Optional</sup> <a name="instancePoolId" id="@cdktf/provider-databricks.instancePool.InstancePool.Initializer.parameter.instancePoolId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/instance_pool#instance_pool_id InstancePool#instance_pool_id}.

---

##### `maxCapacity`<sup>Optional</sup> <a name="maxCapacity" id="@cdktf/provider-databricks.instancePool.InstancePool.Initializer.parameter.maxCapacity"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/instance_pool#max_capacity InstancePool#max_capacity}.

---

##### `minIdleInstances`<sup>Optional</sup> <a name="minIdleInstances" id="@cdktf/provider-databricks.instancePool.InstancePool.Initializer.parameter.minIdleInstances"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/instance_pool#min_idle_instances InstancePool#min_idle_instances}.

---

##### `nodeTypeId`<sup>Optional</sup> <a name="nodeTypeId" id="@cdktf/provider-databricks.instancePool.InstancePool.Initializer.parameter.nodeTypeId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/instance_pool#node_type_id InstancePool#node_type_id}.

---

##### `preloadedDockerImage`<sup>Optional</sup> <a name="preloadedDockerImage" id="@cdktf/provider-databricks.instancePool.InstancePool.Initializer.parameter.preloadedDockerImage"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImage">InstancePoolPreloadedDockerImage</a>>

preloaded_docker_image block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/instance_pool#preloaded_docker_image InstancePool#preloaded_docker_image}

---

##### `preloadedSparkVersions`<sup>Optional</sup> <a name="preloadedSparkVersions" id="@cdktf/provider-databricks.instancePool.InstancePool.Initializer.parameter.preloadedSparkVersions"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/instance_pool#preloaded_spark_versions InstancePool#preloaded_spark_versions}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePool.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePool.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePool.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePool.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePool.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePool.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePool.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePool.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePool.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePool.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePool.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePool.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePool.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePool.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePool.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePool.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePool.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePool.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePool.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePool.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePool.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePool.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePool.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePool.putAwsAttributes">putAwsAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePool.putAzureAttributes">putAzureAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePool.putDiskSpec">putDiskSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePool.putGcpAttributes">putGcpAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePool.putInstancePoolFleetAttributes">putInstancePoolFleetAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePool.putPreloadedDockerImage">putPreloadedDockerImage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePool.resetAwsAttributes">resetAwsAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePool.resetAzureAttributes">resetAzureAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePool.resetCustomTags">resetCustomTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePool.resetDiskSpec">resetDiskSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePool.resetEnableElasticDisk">resetEnableElasticDisk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePool.resetGcpAttributes">resetGcpAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePool.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePool.resetInstancePoolFleetAttributes">resetInstancePoolFleetAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePool.resetInstancePoolId">resetInstancePoolId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePool.resetMaxCapacity">resetMaxCapacity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePool.resetMinIdleInstances">resetMinIdleInstances</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePool.resetNodeTypeId">resetNodeTypeId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePool.resetPreloadedDockerImage">resetPreloadedDockerImage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePool.resetPreloadedSparkVersions">resetPreloadedSparkVersions</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.instancePool.InstancePool.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-databricks.instancePool.InstancePool.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.instancePool.InstancePool.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.instancePool.InstancePool.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-databricks.instancePool.InstancePool.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-databricks.instancePool.InstancePool.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-databricks.instancePool.InstancePool.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-databricks.instancePool.InstancePool.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-databricks.instancePool.InstancePool.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-databricks.instancePool.InstancePool.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-databricks.instancePool.InstancePool.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-databricks.instancePool.InstancePool.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.instancePool.InstancePool.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.instancePool.InstancePool.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.instancePool.InstancePool.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.instancePool.InstancePool.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.instancePool.InstancePool.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.instancePool.InstancePool.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.instancePool.InstancePool.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.instancePool.InstancePool.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.instancePool.InstancePool.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.instancePool.InstancePool.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.instancePool.InstancePool.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.instancePool.InstancePool.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.instancePool.InstancePool.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.instancePool.InstancePool.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.instancePool.InstancePool.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.instancePool.InstancePool.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.instancePool.InstancePool.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.instancePool.InstancePool.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-databricks.instancePool.InstancePool.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-databricks.instancePool.InstancePool.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.instancePool.InstancePool.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.instancePool.InstancePool.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.instancePool.InstancePool.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.instancePool.InstancePool.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-databricks.instancePool.InstancePool.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.instancePool.InstancePool.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-databricks.instancePool.InstancePool.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-databricks.instancePool.InstancePool.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-databricks.instancePool.InstancePool.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-databricks.instancePool.InstancePool.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.instancePool.InstancePool.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAwsAttributes` <a name="putAwsAttributes" id="@cdktf/provider-databricks.instancePool.InstancePool.putAwsAttributes"></a>

```java
public void putAwsAttributes(InstancePoolAwsAttributes value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.instancePool.InstancePool.putAwsAttributes.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.instancePool.InstancePoolAwsAttributes">InstancePoolAwsAttributes</a>

---

##### `putAzureAttributes` <a name="putAzureAttributes" id="@cdktf/provider-databricks.instancePool.InstancePool.putAzureAttributes"></a>

```java
public void putAzureAttributes(InstancePoolAzureAttributes value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.instancePool.InstancePool.putAzureAttributes.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.instancePool.InstancePoolAzureAttributes">InstancePoolAzureAttributes</a>

---

##### `putDiskSpec` <a name="putDiskSpec" id="@cdktf/provider-databricks.instancePool.InstancePool.putDiskSpec"></a>

```java
public void putDiskSpec(InstancePoolDiskSpec value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.instancePool.InstancePool.putDiskSpec.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.instancePool.InstancePoolDiskSpec">InstancePoolDiskSpec</a>

---

##### `putGcpAttributes` <a name="putGcpAttributes" id="@cdktf/provider-databricks.instancePool.InstancePool.putGcpAttributes"></a>

```java
public void putGcpAttributes(InstancePoolGcpAttributes value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.instancePool.InstancePool.putGcpAttributes.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.instancePool.InstancePoolGcpAttributes">InstancePoolGcpAttributes</a>

---

##### `putInstancePoolFleetAttributes` <a name="putInstancePoolFleetAttributes" id="@cdktf/provider-databricks.instancePool.InstancePool.putInstancePoolFleetAttributes"></a>

```java
public void putInstancePoolFleetAttributes(InstancePoolInstancePoolFleetAttributes value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.instancePool.InstancePool.putInstancePoolFleetAttributes.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributes">InstancePoolInstancePoolFleetAttributes</a>

---

##### `putPreloadedDockerImage` <a name="putPreloadedDockerImage" id="@cdktf/provider-databricks.instancePool.InstancePool.putPreloadedDockerImage"></a>

```java
public void putPreloadedDockerImage(IResolvable OR java.util.List<InstancePoolPreloadedDockerImage> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.instancePool.InstancePool.putPreloadedDockerImage.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImage">InstancePoolPreloadedDockerImage</a>>

---

##### `resetAwsAttributes` <a name="resetAwsAttributes" id="@cdktf/provider-databricks.instancePool.InstancePool.resetAwsAttributes"></a>

```java
public void resetAwsAttributes()
```

##### `resetAzureAttributes` <a name="resetAzureAttributes" id="@cdktf/provider-databricks.instancePool.InstancePool.resetAzureAttributes"></a>

```java
public void resetAzureAttributes()
```

##### `resetCustomTags` <a name="resetCustomTags" id="@cdktf/provider-databricks.instancePool.InstancePool.resetCustomTags"></a>

```java
public void resetCustomTags()
```

##### `resetDiskSpec` <a name="resetDiskSpec" id="@cdktf/provider-databricks.instancePool.InstancePool.resetDiskSpec"></a>

```java
public void resetDiskSpec()
```

##### `resetEnableElasticDisk` <a name="resetEnableElasticDisk" id="@cdktf/provider-databricks.instancePool.InstancePool.resetEnableElasticDisk"></a>

```java
public void resetEnableElasticDisk()
```

##### `resetGcpAttributes` <a name="resetGcpAttributes" id="@cdktf/provider-databricks.instancePool.InstancePool.resetGcpAttributes"></a>

```java
public void resetGcpAttributes()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-databricks.instancePool.InstancePool.resetId"></a>

```java
public void resetId()
```

##### `resetInstancePoolFleetAttributes` <a name="resetInstancePoolFleetAttributes" id="@cdktf/provider-databricks.instancePool.InstancePool.resetInstancePoolFleetAttributes"></a>

```java
public void resetInstancePoolFleetAttributes()
```

##### `resetInstancePoolId` <a name="resetInstancePoolId" id="@cdktf/provider-databricks.instancePool.InstancePool.resetInstancePoolId"></a>

```java
public void resetInstancePoolId()
```

##### `resetMaxCapacity` <a name="resetMaxCapacity" id="@cdktf/provider-databricks.instancePool.InstancePool.resetMaxCapacity"></a>

```java
public void resetMaxCapacity()
```

##### `resetMinIdleInstances` <a name="resetMinIdleInstances" id="@cdktf/provider-databricks.instancePool.InstancePool.resetMinIdleInstances"></a>

```java
public void resetMinIdleInstances()
```

##### `resetNodeTypeId` <a name="resetNodeTypeId" id="@cdktf/provider-databricks.instancePool.InstancePool.resetNodeTypeId"></a>

```java
public void resetNodeTypeId()
```

##### `resetPreloadedDockerImage` <a name="resetPreloadedDockerImage" id="@cdktf/provider-databricks.instancePool.InstancePool.resetPreloadedDockerImage"></a>

```java
public void resetPreloadedDockerImage()
```

##### `resetPreloadedSparkVersions` <a name="resetPreloadedSparkVersions" id="@cdktf/provider-databricks.instancePool.InstancePool.resetPreloadedSparkVersions"></a>

```java
public void resetPreloadedSparkVersions()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePool.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePool.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePool.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePool.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a InstancePool resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-databricks.instancePool.InstancePool.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.databricks.instance_pool.InstancePool;

InstancePool.isConstruct(java.lang.Object x)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.instancePool.InstancePool.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-databricks.instancePool.InstancePool.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.databricks.instance_pool.InstancePool;

InstancePool.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.instancePool.InstancePool.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-databricks.instancePool.InstancePool.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.databricks.instance_pool.InstancePool;

InstancePool.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.instancePool.InstancePool.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-databricks.instancePool.InstancePool.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.databricks.instance_pool.InstancePool;

InstancePool.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),InstancePool.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a InstancePool resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.instancePool.InstancePool.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-databricks.instancePool.InstancePool.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the InstancePool to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-databricks.instancePool.InstancePool.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing InstancePool that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/instance_pool#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.instancePool.InstancePool.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the InstancePool to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePool.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePool.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePool.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePool.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePool.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePool.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePool.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePool.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePool.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePool.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePool.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePool.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePool.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePool.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePool.property.awsAttributes">awsAttributes</a></code> | <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolAwsAttributesOutputReference">InstancePoolAwsAttributesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePool.property.azureAttributes">azureAttributes</a></code> | <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolAzureAttributesOutputReference">InstancePoolAzureAttributesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePool.property.diskSpec">diskSpec</a></code> | <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecOutputReference">InstancePoolDiskSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePool.property.gcpAttributes">gcpAttributes</a></code> | <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolGcpAttributesOutputReference">InstancePoolGcpAttributesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePool.property.instancePoolFleetAttributes">instancePoolFleetAttributes</a></code> | <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesOutputReference">InstancePoolInstancePoolFleetAttributesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePool.property.preloadedDockerImage">preloadedDockerImage</a></code> | <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageList">InstancePoolPreloadedDockerImageList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePool.property.awsAttributesInput">awsAttributesInput</a></code> | <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolAwsAttributes">InstancePoolAwsAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePool.property.azureAttributesInput">azureAttributesInput</a></code> | <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolAzureAttributes">InstancePoolAzureAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePool.property.customTagsInput">customTagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePool.property.diskSpecInput">diskSpecInput</a></code> | <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolDiskSpec">InstancePoolDiskSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePool.property.enableElasticDiskInput">enableElasticDiskInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePool.property.gcpAttributesInput">gcpAttributesInput</a></code> | <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolGcpAttributes">InstancePoolGcpAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePool.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePool.property.idleInstanceAutoterminationMinutesInput">idleInstanceAutoterminationMinutesInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePool.property.instancePoolFleetAttributesInput">instancePoolFleetAttributesInput</a></code> | <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributes">InstancePoolInstancePoolFleetAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePool.property.instancePoolIdInput">instancePoolIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePool.property.instancePoolNameInput">instancePoolNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePool.property.maxCapacityInput">maxCapacityInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePool.property.minIdleInstancesInput">minIdleInstancesInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePool.property.nodeTypeIdInput">nodeTypeIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePool.property.preloadedDockerImageInput">preloadedDockerImageInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImage">InstancePoolPreloadedDockerImage</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePool.property.preloadedSparkVersionsInput">preloadedSparkVersionsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePool.property.customTags">customTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePool.property.enableElasticDisk">enableElasticDisk</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePool.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePool.property.idleInstanceAutoterminationMinutes">idleInstanceAutoterminationMinutes</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePool.property.instancePoolId">instancePoolId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePool.property.instancePoolName">instancePoolName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePool.property.maxCapacity">maxCapacity</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePool.property.minIdleInstances">minIdleInstances</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePool.property.nodeTypeId">nodeTypeId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePool.property.preloadedSparkVersions">preloadedSparkVersions</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-databricks.instancePool.InstancePool.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-databricks.instancePool.InstancePool.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.instancePool.InstancePool.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-databricks.instancePool.InstancePool.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-databricks.instancePool.InstancePool.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-databricks.instancePool.InstancePool.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-databricks.instancePool.InstancePool.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.instancePool.InstancePool.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.instancePool.InstancePool.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.instancePool.InstancePool.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.instancePool.InstancePool.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.instancePool.InstancePool.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.instancePool.InstancePool.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.instancePool.InstancePool.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `awsAttributes`<sup>Required</sup> <a name="awsAttributes" id="@cdktf/provider-databricks.instancePool.InstancePool.property.awsAttributes"></a>

```java
public InstancePoolAwsAttributesOutputReference getAwsAttributes();
```

- *Type:* <a href="#@cdktf/provider-databricks.instancePool.InstancePoolAwsAttributesOutputReference">InstancePoolAwsAttributesOutputReference</a>

---

##### `azureAttributes`<sup>Required</sup> <a name="azureAttributes" id="@cdktf/provider-databricks.instancePool.InstancePool.property.azureAttributes"></a>

```java
public InstancePoolAzureAttributesOutputReference getAzureAttributes();
```

- *Type:* <a href="#@cdktf/provider-databricks.instancePool.InstancePoolAzureAttributesOutputReference">InstancePoolAzureAttributesOutputReference</a>

---

##### `diskSpec`<sup>Required</sup> <a name="diskSpec" id="@cdktf/provider-databricks.instancePool.InstancePool.property.diskSpec"></a>

```java
public InstancePoolDiskSpecOutputReference getDiskSpec();
```

- *Type:* <a href="#@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecOutputReference">InstancePoolDiskSpecOutputReference</a>

---

##### `gcpAttributes`<sup>Required</sup> <a name="gcpAttributes" id="@cdktf/provider-databricks.instancePool.InstancePool.property.gcpAttributes"></a>

```java
public InstancePoolGcpAttributesOutputReference getGcpAttributes();
```

- *Type:* <a href="#@cdktf/provider-databricks.instancePool.InstancePoolGcpAttributesOutputReference">InstancePoolGcpAttributesOutputReference</a>

---

##### `instancePoolFleetAttributes`<sup>Required</sup> <a name="instancePoolFleetAttributes" id="@cdktf/provider-databricks.instancePool.InstancePool.property.instancePoolFleetAttributes"></a>

```java
public InstancePoolInstancePoolFleetAttributesOutputReference getInstancePoolFleetAttributes();
```

- *Type:* <a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesOutputReference">InstancePoolInstancePoolFleetAttributesOutputReference</a>

---

##### `preloadedDockerImage`<sup>Required</sup> <a name="preloadedDockerImage" id="@cdktf/provider-databricks.instancePool.InstancePool.property.preloadedDockerImage"></a>

```java
public InstancePoolPreloadedDockerImageList getPreloadedDockerImage();
```

- *Type:* <a href="#@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageList">InstancePoolPreloadedDockerImageList</a>

---

##### `awsAttributesInput`<sup>Optional</sup> <a name="awsAttributesInput" id="@cdktf/provider-databricks.instancePool.InstancePool.property.awsAttributesInput"></a>

```java
public InstancePoolAwsAttributes getAwsAttributesInput();
```

- *Type:* <a href="#@cdktf/provider-databricks.instancePool.InstancePoolAwsAttributes">InstancePoolAwsAttributes</a>

---

##### `azureAttributesInput`<sup>Optional</sup> <a name="azureAttributesInput" id="@cdktf/provider-databricks.instancePool.InstancePool.property.azureAttributesInput"></a>

```java
public InstancePoolAzureAttributes getAzureAttributesInput();
```

- *Type:* <a href="#@cdktf/provider-databricks.instancePool.InstancePoolAzureAttributes">InstancePoolAzureAttributes</a>

---

##### `customTagsInput`<sup>Optional</sup> <a name="customTagsInput" id="@cdktf/provider-databricks.instancePool.InstancePool.property.customTagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getCustomTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `diskSpecInput`<sup>Optional</sup> <a name="diskSpecInput" id="@cdktf/provider-databricks.instancePool.InstancePool.property.diskSpecInput"></a>

```java
public InstancePoolDiskSpec getDiskSpecInput();
```

- *Type:* <a href="#@cdktf/provider-databricks.instancePool.InstancePoolDiskSpec">InstancePoolDiskSpec</a>

---

##### `enableElasticDiskInput`<sup>Optional</sup> <a name="enableElasticDiskInput" id="@cdktf/provider-databricks.instancePool.InstancePool.property.enableElasticDiskInput"></a>

```java
public java.lang.Object getEnableElasticDiskInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `gcpAttributesInput`<sup>Optional</sup> <a name="gcpAttributesInput" id="@cdktf/provider-databricks.instancePool.InstancePool.property.gcpAttributesInput"></a>

```java
public InstancePoolGcpAttributes getGcpAttributesInput();
```

- *Type:* <a href="#@cdktf/provider-databricks.instancePool.InstancePoolGcpAttributes">InstancePoolGcpAttributes</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-databricks.instancePool.InstancePool.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `idleInstanceAutoterminationMinutesInput`<sup>Optional</sup> <a name="idleInstanceAutoterminationMinutesInput" id="@cdktf/provider-databricks.instancePool.InstancePool.property.idleInstanceAutoterminationMinutesInput"></a>

```java
public java.lang.Number getIdleInstanceAutoterminationMinutesInput();
```

- *Type:* java.lang.Number

---

##### `instancePoolFleetAttributesInput`<sup>Optional</sup> <a name="instancePoolFleetAttributesInput" id="@cdktf/provider-databricks.instancePool.InstancePool.property.instancePoolFleetAttributesInput"></a>

```java
public InstancePoolInstancePoolFleetAttributes getInstancePoolFleetAttributesInput();
```

- *Type:* <a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributes">InstancePoolInstancePoolFleetAttributes</a>

---

##### `instancePoolIdInput`<sup>Optional</sup> <a name="instancePoolIdInput" id="@cdktf/provider-databricks.instancePool.InstancePool.property.instancePoolIdInput"></a>

```java
public java.lang.String getInstancePoolIdInput();
```

- *Type:* java.lang.String

---

##### `instancePoolNameInput`<sup>Optional</sup> <a name="instancePoolNameInput" id="@cdktf/provider-databricks.instancePool.InstancePool.property.instancePoolNameInput"></a>

```java
public java.lang.String getInstancePoolNameInput();
```

- *Type:* java.lang.String

---

##### `maxCapacityInput`<sup>Optional</sup> <a name="maxCapacityInput" id="@cdktf/provider-databricks.instancePool.InstancePool.property.maxCapacityInput"></a>

```java
public java.lang.Number getMaxCapacityInput();
```

- *Type:* java.lang.Number

---

##### `minIdleInstancesInput`<sup>Optional</sup> <a name="minIdleInstancesInput" id="@cdktf/provider-databricks.instancePool.InstancePool.property.minIdleInstancesInput"></a>

```java
public java.lang.Number getMinIdleInstancesInput();
```

- *Type:* java.lang.Number

---

##### `nodeTypeIdInput`<sup>Optional</sup> <a name="nodeTypeIdInput" id="@cdktf/provider-databricks.instancePool.InstancePool.property.nodeTypeIdInput"></a>

```java
public java.lang.String getNodeTypeIdInput();
```

- *Type:* java.lang.String

---

##### `preloadedDockerImageInput`<sup>Optional</sup> <a name="preloadedDockerImageInput" id="@cdktf/provider-databricks.instancePool.InstancePool.property.preloadedDockerImageInput"></a>

```java
public java.lang.Object getPreloadedDockerImageInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImage">InstancePoolPreloadedDockerImage</a>>

---

##### `preloadedSparkVersionsInput`<sup>Optional</sup> <a name="preloadedSparkVersionsInput" id="@cdktf/provider-databricks.instancePool.InstancePool.property.preloadedSparkVersionsInput"></a>

```java
public java.util.List<java.lang.String> getPreloadedSparkVersionsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `customTags`<sup>Required</sup> <a name="customTags" id="@cdktf/provider-databricks.instancePool.InstancePool.property.customTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getCustomTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `enableElasticDisk`<sup>Required</sup> <a name="enableElasticDisk" id="@cdktf/provider-databricks.instancePool.InstancePool.property.enableElasticDisk"></a>

```java
public java.lang.Object getEnableElasticDisk();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.instancePool.InstancePool.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `idleInstanceAutoterminationMinutes`<sup>Required</sup> <a name="idleInstanceAutoterminationMinutes" id="@cdktf/provider-databricks.instancePool.InstancePool.property.idleInstanceAutoterminationMinutes"></a>

```java
public java.lang.Number getIdleInstanceAutoterminationMinutes();
```

- *Type:* java.lang.Number

---

##### `instancePoolId`<sup>Required</sup> <a name="instancePoolId" id="@cdktf/provider-databricks.instancePool.InstancePool.property.instancePoolId"></a>

```java
public java.lang.String getInstancePoolId();
```

- *Type:* java.lang.String

---

##### `instancePoolName`<sup>Required</sup> <a name="instancePoolName" id="@cdktf/provider-databricks.instancePool.InstancePool.property.instancePoolName"></a>

```java
public java.lang.String getInstancePoolName();
```

- *Type:* java.lang.String

---

##### `maxCapacity`<sup>Required</sup> <a name="maxCapacity" id="@cdktf/provider-databricks.instancePool.InstancePool.property.maxCapacity"></a>

```java
public java.lang.Number getMaxCapacity();
```

- *Type:* java.lang.Number

---

##### `minIdleInstances`<sup>Required</sup> <a name="minIdleInstances" id="@cdktf/provider-databricks.instancePool.InstancePool.property.minIdleInstances"></a>

```java
public java.lang.Number getMinIdleInstances();
```

- *Type:* java.lang.Number

---

##### `nodeTypeId`<sup>Required</sup> <a name="nodeTypeId" id="@cdktf/provider-databricks.instancePool.InstancePool.property.nodeTypeId"></a>

```java
public java.lang.String getNodeTypeId();
```

- *Type:* java.lang.String

---

##### `preloadedSparkVersions`<sup>Required</sup> <a name="preloadedSparkVersions" id="@cdktf/provider-databricks.instancePool.InstancePool.property.preloadedSparkVersions"></a>

```java
public java.util.List<java.lang.String> getPreloadedSparkVersions();
```

- *Type:* java.util.List<java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePool.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-databricks.instancePool.InstancePool.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### InstancePoolAwsAttributes <a name="InstancePoolAwsAttributes" id="@cdktf/provider-databricks.instancePool.InstancePoolAwsAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.instancePool.InstancePoolAwsAttributes.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.instance_pool.InstancePoolAwsAttributes;

InstancePoolAwsAttributes.builder()
//  .availability(java.lang.String)
//  .spotBidPricePercent(java.lang.Number)
//  .zoneId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolAwsAttributes.property.availability">availability</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/instance_pool#availability InstancePool#availability}. |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolAwsAttributes.property.spotBidPricePercent">spotBidPricePercent</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/instance_pool#spot_bid_price_percent InstancePool#spot_bid_price_percent}. |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolAwsAttributes.property.zoneId">zoneId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/instance_pool#zone_id InstancePool#zone_id}. |

---

##### `availability`<sup>Optional</sup> <a name="availability" id="@cdktf/provider-databricks.instancePool.InstancePoolAwsAttributes.property.availability"></a>

```java
public java.lang.String getAvailability();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/instance_pool#availability InstancePool#availability}.

---

##### `spotBidPricePercent`<sup>Optional</sup> <a name="spotBidPricePercent" id="@cdktf/provider-databricks.instancePool.InstancePoolAwsAttributes.property.spotBidPricePercent"></a>

```java
public java.lang.Number getSpotBidPricePercent();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/instance_pool#spot_bid_price_percent InstancePool#spot_bid_price_percent}.

---

##### `zoneId`<sup>Optional</sup> <a name="zoneId" id="@cdktf/provider-databricks.instancePool.InstancePoolAwsAttributes.property.zoneId"></a>

```java
public java.lang.String getZoneId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/instance_pool#zone_id InstancePool#zone_id}.

---

### InstancePoolAzureAttributes <a name="InstancePoolAzureAttributes" id="@cdktf/provider-databricks.instancePool.InstancePoolAzureAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.instancePool.InstancePoolAzureAttributes.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.instance_pool.InstancePoolAzureAttributes;

InstancePoolAzureAttributes.builder()
//  .availability(java.lang.String)
//  .spotBidMaxPrice(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolAzureAttributes.property.availability">availability</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/instance_pool#availability InstancePool#availability}. |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolAzureAttributes.property.spotBidMaxPrice">spotBidMaxPrice</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/instance_pool#spot_bid_max_price InstancePool#spot_bid_max_price}. |

---

##### `availability`<sup>Optional</sup> <a name="availability" id="@cdktf/provider-databricks.instancePool.InstancePoolAzureAttributes.property.availability"></a>

```java
public java.lang.String getAvailability();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/instance_pool#availability InstancePool#availability}.

---

##### `spotBidMaxPrice`<sup>Optional</sup> <a name="spotBidMaxPrice" id="@cdktf/provider-databricks.instancePool.InstancePoolAzureAttributes.property.spotBidMaxPrice"></a>

```java
public java.lang.Number getSpotBidMaxPrice();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/instance_pool#spot_bid_max_price InstancePool#spot_bid_max_price}.

---

### InstancePoolConfig <a name="InstancePoolConfig" id="@cdktf/provider-databricks.instancePool.InstancePoolConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.instancePool.InstancePoolConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.instance_pool.InstancePoolConfig;

InstancePoolConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .idleInstanceAutoterminationMinutes(java.lang.Number)
    .instancePoolName(java.lang.String)
//  .awsAttributes(InstancePoolAwsAttributes)
//  .azureAttributes(InstancePoolAzureAttributes)
//  .customTags(java.util.Map<java.lang.String, java.lang.String>)
//  .diskSpec(InstancePoolDiskSpec)
//  .enableElasticDisk(java.lang.Boolean)
//  .enableElasticDisk(IResolvable)
//  .gcpAttributes(InstancePoolGcpAttributes)
//  .id(java.lang.String)
//  .instancePoolFleetAttributes(InstancePoolInstancePoolFleetAttributes)
//  .instancePoolId(java.lang.String)
//  .maxCapacity(java.lang.Number)
//  .minIdleInstances(java.lang.Number)
//  .nodeTypeId(java.lang.String)
//  .preloadedDockerImage(IResolvable)
//  .preloadedDockerImage(java.util.List<InstancePoolPreloadedDockerImage>)
//  .preloadedSparkVersions(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolConfig.property.idleInstanceAutoterminationMinutes">idleInstanceAutoterminationMinutes</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/instance_pool#idle_instance_autotermination_minutes InstancePool#idle_instance_autotermination_minutes}. |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolConfig.property.instancePoolName">instancePoolName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/instance_pool#instance_pool_name InstancePool#instance_pool_name}. |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolConfig.property.awsAttributes">awsAttributes</a></code> | <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolAwsAttributes">InstancePoolAwsAttributes</a></code> | aws_attributes block. |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolConfig.property.azureAttributes">azureAttributes</a></code> | <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolAzureAttributes">InstancePoolAzureAttributes</a></code> | azure_attributes block. |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolConfig.property.customTags">customTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/instance_pool#custom_tags InstancePool#custom_tags}. |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolConfig.property.diskSpec">diskSpec</a></code> | <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolDiskSpec">InstancePoolDiskSpec</a></code> | disk_spec block. |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolConfig.property.enableElasticDisk">enableElasticDisk</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/instance_pool#enable_elastic_disk InstancePool#enable_elastic_disk}. |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolConfig.property.gcpAttributes">gcpAttributes</a></code> | <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolGcpAttributes">InstancePoolGcpAttributes</a></code> | gcp_attributes block. |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/instance_pool#id InstancePool#id}. |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolConfig.property.instancePoolFleetAttributes">instancePoolFleetAttributes</a></code> | <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributes">InstancePoolInstancePoolFleetAttributes</a></code> | instance_pool_fleet_attributes block. |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolConfig.property.instancePoolId">instancePoolId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/instance_pool#instance_pool_id InstancePool#instance_pool_id}. |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolConfig.property.maxCapacity">maxCapacity</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/instance_pool#max_capacity InstancePool#max_capacity}. |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolConfig.property.minIdleInstances">minIdleInstances</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/instance_pool#min_idle_instances InstancePool#min_idle_instances}. |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolConfig.property.nodeTypeId">nodeTypeId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/instance_pool#node_type_id InstancePool#node_type_id}. |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolConfig.property.preloadedDockerImage">preloadedDockerImage</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImage">InstancePoolPreloadedDockerImage</a>></code> | preloaded_docker_image block. |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolConfig.property.preloadedSparkVersions">preloadedSparkVersions</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/instance_pool#preloaded_spark_versions InstancePool#preloaded_spark_versions}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.instancePool.InstancePoolConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.instancePool.InstancePoolConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.instancePool.InstancePoolConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.instancePool.InstancePoolConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.instancePool.InstancePoolConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.instancePool.InstancePoolConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.instancePool.InstancePoolConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `idleInstanceAutoterminationMinutes`<sup>Required</sup> <a name="idleInstanceAutoterminationMinutes" id="@cdktf/provider-databricks.instancePool.InstancePoolConfig.property.idleInstanceAutoterminationMinutes"></a>

```java
public java.lang.Number getIdleInstanceAutoterminationMinutes();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/instance_pool#idle_instance_autotermination_minutes InstancePool#idle_instance_autotermination_minutes}.

---

##### `instancePoolName`<sup>Required</sup> <a name="instancePoolName" id="@cdktf/provider-databricks.instancePool.InstancePoolConfig.property.instancePoolName"></a>

```java
public java.lang.String getInstancePoolName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/instance_pool#instance_pool_name InstancePool#instance_pool_name}.

---

##### `awsAttributes`<sup>Optional</sup> <a name="awsAttributes" id="@cdktf/provider-databricks.instancePool.InstancePoolConfig.property.awsAttributes"></a>

```java
public InstancePoolAwsAttributes getAwsAttributes();
```

- *Type:* <a href="#@cdktf/provider-databricks.instancePool.InstancePoolAwsAttributes">InstancePoolAwsAttributes</a>

aws_attributes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/instance_pool#aws_attributes InstancePool#aws_attributes}

---

##### `azureAttributes`<sup>Optional</sup> <a name="azureAttributes" id="@cdktf/provider-databricks.instancePool.InstancePoolConfig.property.azureAttributes"></a>

```java
public InstancePoolAzureAttributes getAzureAttributes();
```

- *Type:* <a href="#@cdktf/provider-databricks.instancePool.InstancePoolAzureAttributes">InstancePoolAzureAttributes</a>

azure_attributes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/instance_pool#azure_attributes InstancePool#azure_attributes}

---

##### `customTags`<sup>Optional</sup> <a name="customTags" id="@cdktf/provider-databricks.instancePool.InstancePoolConfig.property.customTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getCustomTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/instance_pool#custom_tags InstancePool#custom_tags}.

---

##### `diskSpec`<sup>Optional</sup> <a name="diskSpec" id="@cdktf/provider-databricks.instancePool.InstancePoolConfig.property.diskSpec"></a>

```java
public InstancePoolDiskSpec getDiskSpec();
```

- *Type:* <a href="#@cdktf/provider-databricks.instancePool.InstancePoolDiskSpec">InstancePoolDiskSpec</a>

disk_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/instance_pool#disk_spec InstancePool#disk_spec}

---

##### `enableElasticDisk`<sup>Optional</sup> <a name="enableElasticDisk" id="@cdktf/provider-databricks.instancePool.InstancePoolConfig.property.enableElasticDisk"></a>

```java
public java.lang.Object getEnableElasticDisk();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/instance_pool#enable_elastic_disk InstancePool#enable_elastic_disk}.

---

##### `gcpAttributes`<sup>Optional</sup> <a name="gcpAttributes" id="@cdktf/provider-databricks.instancePool.InstancePoolConfig.property.gcpAttributes"></a>

```java
public InstancePoolGcpAttributes getGcpAttributes();
```

- *Type:* <a href="#@cdktf/provider-databricks.instancePool.InstancePoolGcpAttributes">InstancePoolGcpAttributes</a>

gcp_attributes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/instance_pool#gcp_attributes InstancePool#gcp_attributes}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-databricks.instancePool.InstancePoolConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/instance_pool#id InstancePool#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `instancePoolFleetAttributes`<sup>Optional</sup> <a name="instancePoolFleetAttributes" id="@cdktf/provider-databricks.instancePool.InstancePoolConfig.property.instancePoolFleetAttributes"></a>

```java
public InstancePoolInstancePoolFleetAttributes getInstancePoolFleetAttributes();
```

- *Type:* <a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributes">InstancePoolInstancePoolFleetAttributes</a>

instance_pool_fleet_attributes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/instance_pool#instance_pool_fleet_attributes InstancePool#instance_pool_fleet_attributes}

---

##### `instancePoolId`<sup>Optional</sup> <a name="instancePoolId" id="@cdktf/provider-databricks.instancePool.InstancePoolConfig.property.instancePoolId"></a>

```java
public java.lang.String getInstancePoolId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/instance_pool#instance_pool_id InstancePool#instance_pool_id}.

---

##### `maxCapacity`<sup>Optional</sup> <a name="maxCapacity" id="@cdktf/provider-databricks.instancePool.InstancePoolConfig.property.maxCapacity"></a>

```java
public java.lang.Number getMaxCapacity();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/instance_pool#max_capacity InstancePool#max_capacity}.

---

##### `minIdleInstances`<sup>Optional</sup> <a name="minIdleInstances" id="@cdktf/provider-databricks.instancePool.InstancePoolConfig.property.minIdleInstances"></a>

```java
public java.lang.Number getMinIdleInstances();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/instance_pool#min_idle_instances InstancePool#min_idle_instances}.

---

##### `nodeTypeId`<sup>Optional</sup> <a name="nodeTypeId" id="@cdktf/provider-databricks.instancePool.InstancePoolConfig.property.nodeTypeId"></a>

```java
public java.lang.String getNodeTypeId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/instance_pool#node_type_id InstancePool#node_type_id}.

---

##### `preloadedDockerImage`<sup>Optional</sup> <a name="preloadedDockerImage" id="@cdktf/provider-databricks.instancePool.InstancePoolConfig.property.preloadedDockerImage"></a>

```java
public java.lang.Object getPreloadedDockerImage();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImage">InstancePoolPreloadedDockerImage</a>>

preloaded_docker_image block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/instance_pool#preloaded_docker_image InstancePool#preloaded_docker_image}

---

##### `preloadedSparkVersions`<sup>Optional</sup> <a name="preloadedSparkVersions" id="@cdktf/provider-databricks.instancePool.InstancePoolConfig.property.preloadedSparkVersions"></a>

```java
public java.util.List<java.lang.String> getPreloadedSparkVersions();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/instance_pool#preloaded_spark_versions InstancePool#preloaded_spark_versions}.

---

### InstancePoolDiskSpec <a name="InstancePoolDiskSpec" id="@cdktf/provider-databricks.instancePool.InstancePoolDiskSpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.instancePool.InstancePoolDiskSpec.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.instance_pool.InstancePoolDiskSpec;

InstancePoolDiskSpec.builder()
//  .diskCount(java.lang.Number)
//  .diskSize(java.lang.Number)
//  .diskType(InstancePoolDiskSpecDiskType)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolDiskSpec.property.diskCount">diskCount</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/instance_pool#disk_count InstancePool#disk_count}. |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolDiskSpec.property.diskSize">diskSize</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/instance_pool#disk_size InstancePool#disk_size}. |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolDiskSpec.property.diskType">diskType</a></code> | <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecDiskType">InstancePoolDiskSpecDiskType</a></code> | disk_type block. |

---

##### `diskCount`<sup>Optional</sup> <a name="diskCount" id="@cdktf/provider-databricks.instancePool.InstancePoolDiskSpec.property.diskCount"></a>

```java
public java.lang.Number getDiskCount();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/instance_pool#disk_count InstancePool#disk_count}.

---

##### `diskSize`<sup>Optional</sup> <a name="diskSize" id="@cdktf/provider-databricks.instancePool.InstancePoolDiskSpec.property.diskSize"></a>

```java
public java.lang.Number getDiskSize();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/instance_pool#disk_size InstancePool#disk_size}.

---

##### `diskType`<sup>Optional</sup> <a name="diskType" id="@cdktf/provider-databricks.instancePool.InstancePoolDiskSpec.property.diskType"></a>

```java
public InstancePoolDiskSpecDiskType getDiskType();
```

- *Type:* <a href="#@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecDiskType">InstancePoolDiskSpecDiskType</a>

disk_type block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/instance_pool#disk_type InstancePool#disk_type}

---

### InstancePoolDiskSpecDiskType <a name="InstancePoolDiskSpecDiskType" id="@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecDiskType"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecDiskType.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.instance_pool.InstancePoolDiskSpecDiskType;

InstancePoolDiskSpecDiskType.builder()
//  .azureDiskVolumeType(java.lang.String)
//  .ebsVolumeType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecDiskType.property.azureDiskVolumeType">azureDiskVolumeType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/instance_pool#azure_disk_volume_type InstancePool#azure_disk_volume_type}. |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecDiskType.property.ebsVolumeType">ebsVolumeType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/instance_pool#ebs_volume_type InstancePool#ebs_volume_type}. |

---

##### `azureDiskVolumeType`<sup>Optional</sup> <a name="azureDiskVolumeType" id="@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecDiskType.property.azureDiskVolumeType"></a>

```java
public java.lang.String getAzureDiskVolumeType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/instance_pool#azure_disk_volume_type InstancePool#azure_disk_volume_type}.

---

##### `ebsVolumeType`<sup>Optional</sup> <a name="ebsVolumeType" id="@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecDiskType.property.ebsVolumeType"></a>

```java
public java.lang.String getEbsVolumeType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/instance_pool#ebs_volume_type InstancePool#ebs_volume_type}.

---

### InstancePoolGcpAttributes <a name="InstancePoolGcpAttributes" id="@cdktf/provider-databricks.instancePool.InstancePoolGcpAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.instancePool.InstancePoolGcpAttributes.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.instance_pool.InstancePoolGcpAttributes;

InstancePoolGcpAttributes.builder()
//  .gcpAvailability(java.lang.String)
//  .localSsdCount(java.lang.Number)
//  .zoneId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolGcpAttributes.property.gcpAvailability">gcpAvailability</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/instance_pool#gcp_availability InstancePool#gcp_availability}. |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolGcpAttributes.property.localSsdCount">localSsdCount</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/instance_pool#local_ssd_count InstancePool#local_ssd_count}. |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolGcpAttributes.property.zoneId">zoneId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/instance_pool#zone_id InstancePool#zone_id}. |

---

##### `gcpAvailability`<sup>Optional</sup> <a name="gcpAvailability" id="@cdktf/provider-databricks.instancePool.InstancePoolGcpAttributes.property.gcpAvailability"></a>

```java
public java.lang.String getGcpAvailability();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/instance_pool#gcp_availability InstancePool#gcp_availability}.

---

##### `localSsdCount`<sup>Optional</sup> <a name="localSsdCount" id="@cdktf/provider-databricks.instancePool.InstancePoolGcpAttributes.property.localSsdCount"></a>

```java
public java.lang.Number getLocalSsdCount();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/instance_pool#local_ssd_count InstancePool#local_ssd_count}.

---

##### `zoneId`<sup>Optional</sup> <a name="zoneId" id="@cdktf/provider-databricks.instancePool.InstancePoolGcpAttributes.property.zoneId"></a>

```java
public java.lang.String getZoneId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/instance_pool#zone_id InstancePool#zone_id}.

---

### InstancePoolInstancePoolFleetAttributes <a name="InstancePoolInstancePoolFleetAttributes" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributes.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.instance_pool.InstancePoolInstancePoolFleetAttributes;

InstancePoolInstancePoolFleetAttributes.builder()
    .launchTemplateOverride(IResolvable)
    .launchTemplateOverride(java.util.List<InstancePoolInstancePoolFleetAttributesLaunchTemplateOverride>)
//  .fleetOnDemandOption(InstancePoolInstancePoolFleetAttributesFleetOnDemandOption)
//  .fleetSpotOption(InstancePoolInstancePoolFleetAttributesFleetSpotOption)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributes.property.launchTemplateOverride">launchTemplateOverride</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverride">InstancePoolInstancePoolFleetAttributesLaunchTemplateOverride</a>></code> | launch_template_override block. |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributes.property.fleetOnDemandOption">fleetOnDemandOption</a></code> | <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetOnDemandOption">InstancePoolInstancePoolFleetAttributesFleetOnDemandOption</a></code> | fleet_on_demand_option block. |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributes.property.fleetSpotOption">fleetSpotOption</a></code> | <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetSpotOption">InstancePoolInstancePoolFleetAttributesFleetSpotOption</a></code> | fleet_spot_option block. |

---

##### `launchTemplateOverride`<sup>Required</sup> <a name="launchTemplateOverride" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributes.property.launchTemplateOverride"></a>

```java
public java.lang.Object getLaunchTemplateOverride();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverride">InstancePoolInstancePoolFleetAttributesLaunchTemplateOverride</a>>

launch_template_override block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/instance_pool#launch_template_override InstancePool#launch_template_override}

---

##### `fleetOnDemandOption`<sup>Optional</sup> <a name="fleetOnDemandOption" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributes.property.fleetOnDemandOption"></a>

```java
public InstancePoolInstancePoolFleetAttributesFleetOnDemandOption getFleetOnDemandOption();
```

- *Type:* <a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetOnDemandOption">InstancePoolInstancePoolFleetAttributesFleetOnDemandOption</a>

fleet_on_demand_option block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/instance_pool#fleet_on_demand_option InstancePool#fleet_on_demand_option}

---

##### `fleetSpotOption`<sup>Optional</sup> <a name="fleetSpotOption" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributes.property.fleetSpotOption"></a>

```java
public InstancePoolInstancePoolFleetAttributesFleetSpotOption getFleetSpotOption();
```

- *Type:* <a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetSpotOption">InstancePoolInstancePoolFleetAttributesFleetSpotOption</a>

fleet_spot_option block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/instance_pool#fleet_spot_option InstancePool#fleet_spot_option}

---

### InstancePoolInstancePoolFleetAttributesFleetOnDemandOption <a name="InstancePoolInstancePoolFleetAttributesFleetOnDemandOption" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetOnDemandOption"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetOnDemandOption.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.instance_pool.InstancePoolInstancePoolFleetAttributesFleetOnDemandOption;

InstancePoolInstancePoolFleetAttributesFleetOnDemandOption.builder()
    .allocationStrategy(java.lang.String)
//  .instancePoolsToUseCount(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetOnDemandOption.property.allocationStrategy">allocationStrategy</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/instance_pool#allocation_strategy InstancePool#allocation_strategy}. |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetOnDemandOption.property.instancePoolsToUseCount">instancePoolsToUseCount</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/instance_pool#instance_pools_to_use_count InstancePool#instance_pools_to_use_count}. |

---

##### `allocationStrategy`<sup>Required</sup> <a name="allocationStrategy" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetOnDemandOption.property.allocationStrategy"></a>

```java
public java.lang.String getAllocationStrategy();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/instance_pool#allocation_strategy InstancePool#allocation_strategy}.

---

##### `instancePoolsToUseCount`<sup>Optional</sup> <a name="instancePoolsToUseCount" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetOnDemandOption.property.instancePoolsToUseCount"></a>

```java
public java.lang.Number getInstancePoolsToUseCount();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/instance_pool#instance_pools_to_use_count InstancePool#instance_pools_to_use_count}.

---

### InstancePoolInstancePoolFleetAttributesFleetSpotOption <a name="InstancePoolInstancePoolFleetAttributesFleetSpotOption" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetSpotOption"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetSpotOption.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.instance_pool.InstancePoolInstancePoolFleetAttributesFleetSpotOption;

InstancePoolInstancePoolFleetAttributesFleetSpotOption.builder()
    .allocationStrategy(java.lang.String)
//  .instancePoolsToUseCount(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetSpotOption.property.allocationStrategy">allocationStrategy</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/instance_pool#allocation_strategy InstancePool#allocation_strategy}. |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetSpotOption.property.instancePoolsToUseCount">instancePoolsToUseCount</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/instance_pool#instance_pools_to_use_count InstancePool#instance_pools_to_use_count}. |

---

##### `allocationStrategy`<sup>Required</sup> <a name="allocationStrategy" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetSpotOption.property.allocationStrategy"></a>

```java
public java.lang.String getAllocationStrategy();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/instance_pool#allocation_strategy InstancePool#allocation_strategy}.

---

##### `instancePoolsToUseCount`<sup>Optional</sup> <a name="instancePoolsToUseCount" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetSpotOption.property.instancePoolsToUseCount"></a>

```java
public java.lang.Number getInstancePoolsToUseCount();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/instance_pool#instance_pools_to_use_count InstancePool#instance_pools_to_use_count}.

---

### InstancePoolInstancePoolFleetAttributesLaunchTemplateOverride <a name="InstancePoolInstancePoolFleetAttributesLaunchTemplateOverride" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverride"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverride.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.instance_pool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverride;

InstancePoolInstancePoolFleetAttributesLaunchTemplateOverride.builder()
    .availabilityZone(java.lang.String)
    .instanceType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverride.property.availabilityZone">availabilityZone</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/instance_pool#availability_zone InstancePool#availability_zone}. |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverride.property.instanceType">instanceType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/instance_pool#instance_type InstancePool#instance_type}. |

---

##### `availabilityZone`<sup>Required</sup> <a name="availabilityZone" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverride.property.availabilityZone"></a>

```java
public java.lang.String getAvailabilityZone();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/instance_pool#availability_zone InstancePool#availability_zone}.

---

##### `instanceType`<sup>Required</sup> <a name="instanceType" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverride.property.instanceType"></a>

```java
public java.lang.String getInstanceType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/instance_pool#instance_type InstancePool#instance_type}.

---

### InstancePoolPreloadedDockerImage <a name="InstancePoolPreloadedDockerImage" id="@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImage.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.instance_pool.InstancePoolPreloadedDockerImage;

InstancePoolPreloadedDockerImage.builder()
    .url(java.lang.String)
//  .basicAuth(InstancePoolPreloadedDockerImageBasicAuth)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImage.property.url">url</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/instance_pool#url InstancePool#url}. |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImage.property.basicAuth">basicAuth</a></code> | <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageBasicAuth">InstancePoolPreloadedDockerImageBasicAuth</a></code> | basic_auth block. |

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImage.property.url"></a>

```java
public java.lang.String getUrl();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/instance_pool#url InstancePool#url}.

---

##### `basicAuth`<sup>Optional</sup> <a name="basicAuth" id="@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImage.property.basicAuth"></a>

```java
public InstancePoolPreloadedDockerImageBasicAuth getBasicAuth();
```

- *Type:* <a href="#@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageBasicAuth">InstancePoolPreloadedDockerImageBasicAuth</a>

basic_auth block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/instance_pool#basic_auth InstancePool#basic_auth}

---

### InstancePoolPreloadedDockerImageBasicAuth <a name="InstancePoolPreloadedDockerImageBasicAuth" id="@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageBasicAuth"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageBasicAuth.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.instance_pool.InstancePoolPreloadedDockerImageBasicAuth;

InstancePoolPreloadedDockerImageBasicAuth.builder()
    .password(java.lang.String)
    .username(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageBasicAuth.property.password">password</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/instance_pool#password InstancePool#password}. |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageBasicAuth.property.username">username</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/instance_pool#username InstancePool#username}. |

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageBasicAuth.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/instance_pool#password InstancePool#password}.

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageBasicAuth.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/instance_pool#username InstancePool#username}.

---

## Classes <a name="Classes" id="Classes"></a>

### InstancePoolAwsAttributesOutputReference <a name="InstancePoolAwsAttributesOutputReference" id="@cdktf/provider-databricks.instancePool.InstancePoolAwsAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.instancePool.InstancePoolAwsAttributesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.instance_pool.InstancePoolAwsAttributesOutputReference;

new InstancePoolAwsAttributesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolAwsAttributesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolAwsAttributesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.instancePool.InstancePoolAwsAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolAwsAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolAwsAttributesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolAwsAttributesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolAwsAttributesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolAwsAttributesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolAwsAttributesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolAwsAttributesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolAwsAttributesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolAwsAttributesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolAwsAttributesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolAwsAttributesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolAwsAttributesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolAwsAttributesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolAwsAttributesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolAwsAttributesOutputReference.resetAvailability">resetAvailability</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolAwsAttributesOutputReference.resetSpotBidPricePercent">resetSpotBidPricePercent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolAwsAttributesOutputReference.resetZoneId">resetZoneId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.instancePool.InstancePoolAwsAttributesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolAwsAttributesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolAwsAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolAwsAttributesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolAwsAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolAwsAttributesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolAwsAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolAwsAttributesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolAwsAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolAwsAttributesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolAwsAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolAwsAttributesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolAwsAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolAwsAttributesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolAwsAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolAwsAttributesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolAwsAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolAwsAttributesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolAwsAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolAwsAttributesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.instancePool.InstancePoolAwsAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.instancePool.InstancePoolAwsAttributesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.instancePool.InstancePoolAwsAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.instancePool.InstancePoolAwsAttributesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAvailability` <a name="resetAvailability" id="@cdktf/provider-databricks.instancePool.InstancePoolAwsAttributesOutputReference.resetAvailability"></a>

```java
public void resetAvailability()
```

##### `resetSpotBidPricePercent` <a name="resetSpotBidPricePercent" id="@cdktf/provider-databricks.instancePool.InstancePoolAwsAttributesOutputReference.resetSpotBidPricePercent"></a>

```java
public void resetSpotBidPricePercent()
```

##### `resetZoneId` <a name="resetZoneId" id="@cdktf/provider-databricks.instancePool.InstancePoolAwsAttributesOutputReference.resetZoneId"></a>

```java
public void resetZoneId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolAwsAttributesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolAwsAttributesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolAwsAttributesOutputReference.property.availabilityInput">availabilityInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolAwsAttributesOutputReference.property.spotBidPricePercentInput">spotBidPricePercentInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolAwsAttributesOutputReference.property.zoneIdInput">zoneIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolAwsAttributesOutputReference.property.availability">availability</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolAwsAttributesOutputReference.property.spotBidPricePercent">spotBidPricePercent</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolAwsAttributesOutputReference.property.zoneId">zoneId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolAwsAttributesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolAwsAttributes">InstancePoolAwsAttributes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.instancePool.InstancePoolAwsAttributesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.instancePool.InstancePoolAwsAttributesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `availabilityInput`<sup>Optional</sup> <a name="availabilityInput" id="@cdktf/provider-databricks.instancePool.InstancePoolAwsAttributesOutputReference.property.availabilityInput"></a>

```java
public java.lang.String getAvailabilityInput();
```

- *Type:* java.lang.String

---

##### `spotBidPricePercentInput`<sup>Optional</sup> <a name="spotBidPricePercentInput" id="@cdktf/provider-databricks.instancePool.InstancePoolAwsAttributesOutputReference.property.spotBidPricePercentInput"></a>

```java
public java.lang.Number getSpotBidPricePercentInput();
```

- *Type:* java.lang.Number

---

##### `zoneIdInput`<sup>Optional</sup> <a name="zoneIdInput" id="@cdktf/provider-databricks.instancePool.InstancePoolAwsAttributesOutputReference.property.zoneIdInput"></a>

```java
public java.lang.String getZoneIdInput();
```

- *Type:* java.lang.String

---

##### `availability`<sup>Required</sup> <a name="availability" id="@cdktf/provider-databricks.instancePool.InstancePoolAwsAttributesOutputReference.property.availability"></a>

```java
public java.lang.String getAvailability();
```

- *Type:* java.lang.String

---

##### `spotBidPricePercent`<sup>Required</sup> <a name="spotBidPricePercent" id="@cdktf/provider-databricks.instancePool.InstancePoolAwsAttributesOutputReference.property.spotBidPricePercent"></a>

```java
public java.lang.Number getSpotBidPricePercent();
```

- *Type:* java.lang.Number

---

##### `zoneId`<sup>Required</sup> <a name="zoneId" id="@cdktf/provider-databricks.instancePool.InstancePoolAwsAttributesOutputReference.property.zoneId"></a>

```java
public java.lang.String getZoneId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.instancePool.InstancePoolAwsAttributesOutputReference.property.internalValue"></a>

```java
public InstancePoolAwsAttributes getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-databricks.instancePool.InstancePoolAwsAttributes">InstancePoolAwsAttributes</a>

---


### InstancePoolAzureAttributesOutputReference <a name="InstancePoolAzureAttributesOutputReference" id="@cdktf/provider-databricks.instancePool.InstancePoolAzureAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.instancePool.InstancePoolAzureAttributesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.instance_pool.InstancePoolAzureAttributesOutputReference;

new InstancePoolAzureAttributesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolAzureAttributesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolAzureAttributesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.instancePool.InstancePoolAzureAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolAzureAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolAzureAttributesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolAzureAttributesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolAzureAttributesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolAzureAttributesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolAzureAttributesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolAzureAttributesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolAzureAttributesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolAzureAttributesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolAzureAttributesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolAzureAttributesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolAzureAttributesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolAzureAttributesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolAzureAttributesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolAzureAttributesOutputReference.resetAvailability">resetAvailability</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolAzureAttributesOutputReference.resetSpotBidMaxPrice">resetSpotBidMaxPrice</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.instancePool.InstancePoolAzureAttributesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolAzureAttributesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolAzureAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolAzureAttributesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolAzureAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolAzureAttributesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolAzureAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolAzureAttributesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolAzureAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolAzureAttributesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolAzureAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolAzureAttributesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolAzureAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolAzureAttributesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolAzureAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolAzureAttributesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolAzureAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolAzureAttributesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolAzureAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolAzureAttributesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.instancePool.InstancePoolAzureAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.instancePool.InstancePoolAzureAttributesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.instancePool.InstancePoolAzureAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.instancePool.InstancePoolAzureAttributesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAvailability` <a name="resetAvailability" id="@cdktf/provider-databricks.instancePool.InstancePoolAzureAttributesOutputReference.resetAvailability"></a>

```java
public void resetAvailability()
```

##### `resetSpotBidMaxPrice` <a name="resetSpotBidMaxPrice" id="@cdktf/provider-databricks.instancePool.InstancePoolAzureAttributesOutputReference.resetSpotBidMaxPrice"></a>

```java
public void resetSpotBidMaxPrice()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolAzureAttributesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolAzureAttributesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolAzureAttributesOutputReference.property.availabilityInput">availabilityInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolAzureAttributesOutputReference.property.spotBidMaxPriceInput">spotBidMaxPriceInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolAzureAttributesOutputReference.property.availability">availability</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolAzureAttributesOutputReference.property.spotBidMaxPrice">spotBidMaxPrice</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolAzureAttributesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolAzureAttributes">InstancePoolAzureAttributes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.instancePool.InstancePoolAzureAttributesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.instancePool.InstancePoolAzureAttributesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `availabilityInput`<sup>Optional</sup> <a name="availabilityInput" id="@cdktf/provider-databricks.instancePool.InstancePoolAzureAttributesOutputReference.property.availabilityInput"></a>

```java
public java.lang.String getAvailabilityInput();
```

- *Type:* java.lang.String

---

##### `spotBidMaxPriceInput`<sup>Optional</sup> <a name="spotBidMaxPriceInput" id="@cdktf/provider-databricks.instancePool.InstancePoolAzureAttributesOutputReference.property.spotBidMaxPriceInput"></a>

```java
public java.lang.Number getSpotBidMaxPriceInput();
```

- *Type:* java.lang.Number

---

##### `availability`<sup>Required</sup> <a name="availability" id="@cdktf/provider-databricks.instancePool.InstancePoolAzureAttributesOutputReference.property.availability"></a>

```java
public java.lang.String getAvailability();
```

- *Type:* java.lang.String

---

##### `spotBidMaxPrice`<sup>Required</sup> <a name="spotBidMaxPrice" id="@cdktf/provider-databricks.instancePool.InstancePoolAzureAttributesOutputReference.property.spotBidMaxPrice"></a>

```java
public java.lang.Number getSpotBidMaxPrice();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.instancePool.InstancePoolAzureAttributesOutputReference.property.internalValue"></a>

```java
public InstancePoolAzureAttributes getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-databricks.instancePool.InstancePoolAzureAttributes">InstancePoolAzureAttributes</a>

---


### InstancePoolDiskSpecDiskTypeOutputReference <a name="InstancePoolDiskSpecDiskTypeOutputReference" id="@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecDiskTypeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecDiskTypeOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.instance_pool.InstancePoolDiskSpecDiskTypeOutputReference;

new InstancePoolDiskSpecDiskTypeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecDiskTypeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecDiskTypeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecDiskTypeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecDiskTypeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecDiskTypeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecDiskTypeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecDiskTypeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecDiskTypeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecDiskTypeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecDiskTypeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecDiskTypeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecDiskTypeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecDiskTypeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecDiskTypeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecDiskTypeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecDiskTypeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecDiskTypeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecDiskTypeOutputReference.resetAzureDiskVolumeType">resetAzureDiskVolumeType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecDiskTypeOutputReference.resetEbsVolumeType">resetEbsVolumeType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecDiskTypeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecDiskTypeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecDiskTypeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecDiskTypeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecDiskTypeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecDiskTypeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecDiskTypeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecDiskTypeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecDiskTypeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecDiskTypeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecDiskTypeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecDiskTypeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecDiskTypeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecDiskTypeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecDiskTypeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecDiskTypeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecDiskTypeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecDiskTypeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecDiskTypeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecDiskTypeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecDiskTypeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecDiskTypeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecDiskTypeOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecDiskTypeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAzureDiskVolumeType` <a name="resetAzureDiskVolumeType" id="@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecDiskTypeOutputReference.resetAzureDiskVolumeType"></a>

```java
public void resetAzureDiskVolumeType()
```

##### `resetEbsVolumeType` <a name="resetEbsVolumeType" id="@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecDiskTypeOutputReference.resetEbsVolumeType"></a>

```java
public void resetEbsVolumeType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecDiskTypeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecDiskTypeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecDiskTypeOutputReference.property.azureDiskVolumeTypeInput">azureDiskVolumeTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecDiskTypeOutputReference.property.ebsVolumeTypeInput">ebsVolumeTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecDiskTypeOutputReference.property.azureDiskVolumeType">azureDiskVolumeType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecDiskTypeOutputReference.property.ebsVolumeType">ebsVolumeType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecDiskTypeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecDiskType">InstancePoolDiskSpecDiskType</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecDiskTypeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecDiskTypeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `azureDiskVolumeTypeInput`<sup>Optional</sup> <a name="azureDiskVolumeTypeInput" id="@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecDiskTypeOutputReference.property.azureDiskVolumeTypeInput"></a>

```java
public java.lang.String getAzureDiskVolumeTypeInput();
```

- *Type:* java.lang.String

---

##### `ebsVolumeTypeInput`<sup>Optional</sup> <a name="ebsVolumeTypeInput" id="@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecDiskTypeOutputReference.property.ebsVolumeTypeInput"></a>

```java
public java.lang.String getEbsVolumeTypeInput();
```

- *Type:* java.lang.String

---

##### `azureDiskVolumeType`<sup>Required</sup> <a name="azureDiskVolumeType" id="@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecDiskTypeOutputReference.property.azureDiskVolumeType"></a>

```java
public java.lang.String getAzureDiskVolumeType();
```

- *Type:* java.lang.String

---

##### `ebsVolumeType`<sup>Required</sup> <a name="ebsVolumeType" id="@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecDiskTypeOutputReference.property.ebsVolumeType"></a>

```java
public java.lang.String getEbsVolumeType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecDiskTypeOutputReference.property.internalValue"></a>

```java
public InstancePoolDiskSpecDiskType getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecDiskType">InstancePoolDiskSpecDiskType</a>

---


### InstancePoolDiskSpecOutputReference <a name="InstancePoolDiskSpecOutputReference" id="@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.instance_pool.InstancePoolDiskSpecOutputReference;

new InstancePoolDiskSpecOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecOutputReference.putDiskType">putDiskType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecOutputReference.resetDiskCount">resetDiskCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecOutputReference.resetDiskSize">resetDiskSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecOutputReference.resetDiskType">resetDiskType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDiskType` <a name="putDiskType" id="@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecOutputReference.putDiskType"></a>

```java
public void putDiskType(InstancePoolDiskSpecDiskType value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecOutputReference.putDiskType.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecDiskType">InstancePoolDiskSpecDiskType</a>

---

##### `resetDiskCount` <a name="resetDiskCount" id="@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecOutputReference.resetDiskCount"></a>

```java
public void resetDiskCount()
```

##### `resetDiskSize` <a name="resetDiskSize" id="@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecOutputReference.resetDiskSize"></a>

```java
public void resetDiskSize()
```

##### `resetDiskType` <a name="resetDiskType" id="@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecOutputReference.resetDiskType"></a>

```java
public void resetDiskType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecOutputReference.property.diskType">diskType</a></code> | <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecDiskTypeOutputReference">InstancePoolDiskSpecDiskTypeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecOutputReference.property.diskCountInput">diskCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecOutputReference.property.diskSizeInput">diskSizeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecOutputReference.property.diskTypeInput">diskTypeInput</a></code> | <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecDiskType">InstancePoolDiskSpecDiskType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecOutputReference.property.diskCount">diskCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecOutputReference.property.diskSize">diskSize</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolDiskSpec">InstancePoolDiskSpec</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `diskType`<sup>Required</sup> <a name="diskType" id="@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecOutputReference.property.diskType"></a>

```java
public InstancePoolDiskSpecDiskTypeOutputReference getDiskType();
```

- *Type:* <a href="#@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecDiskTypeOutputReference">InstancePoolDiskSpecDiskTypeOutputReference</a>

---

##### `diskCountInput`<sup>Optional</sup> <a name="diskCountInput" id="@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecOutputReference.property.diskCountInput"></a>

```java
public java.lang.Number getDiskCountInput();
```

- *Type:* java.lang.Number

---

##### `diskSizeInput`<sup>Optional</sup> <a name="diskSizeInput" id="@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecOutputReference.property.diskSizeInput"></a>

```java
public java.lang.Number getDiskSizeInput();
```

- *Type:* java.lang.Number

---

##### `diskTypeInput`<sup>Optional</sup> <a name="diskTypeInput" id="@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecOutputReference.property.diskTypeInput"></a>

```java
public InstancePoolDiskSpecDiskType getDiskTypeInput();
```

- *Type:* <a href="#@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecDiskType">InstancePoolDiskSpecDiskType</a>

---

##### `diskCount`<sup>Required</sup> <a name="diskCount" id="@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecOutputReference.property.diskCount"></a>

```java
public java.lang.Number getDiskCount();
```

- *Type:* java.lang.Number

---

##### `diskSize`<sup>Required</sup> <a name="diskSize" id="@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecOutputReference.property.diskSize"></a>

```java
public java.lang.Number getDiskSize();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecOutputReference.property.internalValue"></a>

```java
public InstancePoolDiskSpec getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-databricks.instancePool.InstancePoolDiskSpec">InstancePoolDiskSpec</a>

---


### InstancePoolGcpAttributesOutputReference <a name="InstancePoolGcpAttributesOutputReference" id="@cdktf/provider-databricks.instancePool.InstancePoolGcpAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.instancePool.InstancePoolGcpAttributesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.instance_pool.InstancePoolGcpAttributesOutputReference;

new InstancePoolGcpAttributesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolGcpAttributesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolGcpAttributesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.instancePool.InstancePoolGcpAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolGcpAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolGcpAttributesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolGcpAttributesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolGcpAttributesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolGcpAttributesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolGcpAttributesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolGcpAttributesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolGcpAttributesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolGcpAttributesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolGcpAttributesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolGcpAttributesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolGcpAttributesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolGcpAttributesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolGcpAttributesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolGcpAttributesOutputReference.resetGcpAvailability">resetGcpAvailability</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolGcpAttributesOutputReference.resetLocalSsdCount">resetLocalSsdCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolGcpAttributesOutputReference.resetZoneId">resetZoneId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.instancePool.InstancePoolGcpAttributesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolGcpAttributesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolGcpAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolGcpAttributesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolGcpAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolGcpAttributesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolGcpAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolGcpAttributesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolGcpAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolGcpAttributesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolGcpAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolGcpAttributesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolGcpAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolGcpAttributesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolGcpAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolGcpAttributesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolGcpAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolGcpAttributesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolGcpAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolGcpAttributesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.instancePool.InstancePoolGcpAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.instancePool.InstancePoolGcpAttributesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.instancePool.InstancePoolGcpAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.instancePool.InstancePoolGcpAttributesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetGcpAvailability` <a name="resetGcpAvailability" id="@cdktf/provider-databricks.instancePool.InstancePoolGcpAttributesOutputReference.resetGcpAvailability"></a>

```java
public void resetGcpAvailability()
```

##### `resetLocalSsdCount` <a name="resetLocalSsdCount" id="@cdktf/provider-databricks.instancePool.InstancePoolGcpAttributesOutputReference.resetLocalSsdCount"></a>

```java
public void resetLocalSsdCount()
```

##### `resetZoneId` <a name="resetZoneId" id="@cdktf/provider-databricks.instancePool.InstancePoolGcpAttributesOutputReference.resetZoneId"></a>

```java
public void resetZoneId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolGcpAttributesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolGcpAttributesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolGcpAttributesOutputReference.property.gcpAvailabilityInput">gcpAvailabilityInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolGcpAttributesOutputReference.property.localSsdCountInput">localSsdCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolGcpAttributesOutputReference.property.zoneIdInput">zoneIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolGcpAttributesOutputReference.property.gcpAvailability">gcpAvailability</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolGcpAttributesOutputReference.property.localSsdCount">localSsdCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolGcpAttributesOutputReference.property.zoneId">zoneId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolGcpAttributesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolGcpAttributes">InstancePoolGcpAttributes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.instancePool.InstancePoolGcpAttributesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.instancePool.InstancePoolGcpAttributesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `gcpAvailabilityInput`<sup>Optional</sup> <a name="gcpAvailabilityInput" id="@cdktf/provider-databricks.instancePool.InstancePoolGcpAttributesOutputReference.property.gcpAvailabilityInput"></a>

```java
public java.lang.String getGcpAvailabilityInput();
```

- *Type:* java.lang.String

---

##### `localSsdCountInput`<sup>Optional</sup> <a name="localSsdCountInput" id="@cdktf/provider-databricks.instancePool.InstancePoolGcpAttributesOutputReference.property.localSsdCountInput"></a>

```java
public java.lang.Number getLocalSsdCountInput();
```

- *Type:* java.lang.Number

---

##### `zoneIdInput`<sup>Optional</sup> <a name="zoneIdInput" id="@cdktf/provider-databricks.instancePool.InstancePoolGcpAttributesOutputReference.property.zoneIdInput"></a>

```java
public java.lang.String getZoneIdInput();
```

- *Type:* java.lang.String

---

##### `gcpAvailability`<sup>Required</sup> <a name="gcpAvailability" id="@cdktf/provider-databricks.instancePool.InstancePoolGcpAttributesOutputReference.property.gcpAvailability"></a>

```java
public java.lang.String getGcpAvailability();
```

- *Type:* java.lang.String

---

##### `localSsdCount`<sup>Required</sup> <a name="localSsdCount" id="@cdktf/provider-databricks.instancePool.InstancePoolGcpAttributesOutputReference.property.localSsdCount"></a>

```java
public java.lang.Number getLocalSsdCount();
```

- *Type:* java.lang.Number

---

##### `zoneId`<sup>Required</sup> <a name="zoneId" id="@cdktf/provider-databricks.instancePool.InstancePoolGcpAttributesOutputReference.property.zoneId"></a>

```java
public java.lang.String getZoneId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.instancePool.InstancePoolGcpAttributesOutputReference.property.internalValue"></a>

```java
public InstancePoolGcpAttributes getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-databricks.instancePool.InstancePoolGcpAttributes">InstancePoolGcpAttributes</a>

---


### InstancePoolInstancePoolFleetAttributesFleetOnDemandOptionOutputReference <a name="InstancePoolInstancePoolFleetAttributesFleetOnDemandOptionOutputReference" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetOnDemandOptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetOnDemandOptionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.instance_pool.InstancePoolInstancePoolFleetAttributesFleetOnDemandOptionOutputReference;

new InstancePoolInstancePoolFleetAttributesFleetOnDemandOptionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetOnDemandOptionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetOnDemandOptionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetOnDemandOptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetOnDemandOptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetOnDemandOptionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetOnDemandOptionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetOnDemandOptionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetOnDemandOptionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetOnDemandOptionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetOnDemandOptionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetOnDemandOptionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetOnDemandOptionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetOnDemandOptionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetOnDemandOptionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetOnDemandOptionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetOnDemandOptionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetOnDemandOptionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetOnDemandOptionOutputReference.resetInstancePoolsToUseCount">resetInstancePoolsToUseCount</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetOnDemandOptionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetOnDemandOptionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetOnDemandOptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetOnDemandOptionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetOnDemandOptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetOnDemandOptionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetOnDemandOptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetOnDemandOptionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetOnDemandOptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetOnDemandOptionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetOnDemandOptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetOnDemandOptionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetOnDemandOptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetOnDemandOptionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetOnDemandOptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetOnDemandOptionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetOnDemandOptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetOnDemandOptionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetOnDemandOptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetOnDemandOptionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetOnDemandOptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetOnDemandOptionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetOnDemandOptionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetOnDemandOptionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetInstancePoolsToUseCount` <a name="resetInstancePoolsToUseCount" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetOnDemandOptionOutputReference.resetInstancePoolsToUseCount"></a>

```java
public void resetInstancePoolsToUseCount()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetOnDemandOptionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetOnDemandOptionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetOnDemandOptionOutputReference.property.allocationStrategyInput">allocationStrategyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetOnDemandOptionOutputReference.property.instancePoolsToUseCountInput">instancePoolsToUseCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetOnDemandOptionOutputReference.property.allocationStrategy">allocationStrategy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetOnDemandOptionOutputReference.property.instancePoolsToUseCount">instancePoolsToUseCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetOnDemandOptionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetOnDemandOption">InstancePoolInstancePoolFleetAttributesFleetOnDemandOption</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetOnDemandOptionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetOnDemandOptionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `allocationStrategyInput`<sup>Optional</sup> <a name="allocationStrategyInput" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetOnDemandOptionOutputReference.property.allocationStrategyInput"></a>

```java
public java.lang.String getAllocationStrategyInput();
```

- *Type:* java.lang.String

---

##### `instancePoolsToUseCountInput`<sup>Optional</sup> <a name="instancePoolsToUseCountInput" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetOnDemandOptionOutputReference.property.instancePoolsToUseCountInput"></a>

```java
public java.lang.Number getInstancePoolsToUseCountInput();
```

- *Type:* java.lang.Number

---

##### `allocationStrategy`<sup>Required</sup> <a name="allocationStrategy" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetOnDemandOptionOutputReference.property.allocationStrategy"></a>

```java
public java.lang.String getAllocationStrategy();
```

- *Type:* java.lang.String

---

##### `instancePoolsToUseCount`<sup>Required</sup> <a name="instancePoolsToUseCount" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetOnDemandOptionOutputReference.property.instancePoolsToUseCount"></a>

```java
public java.lang.Number getInstancePoolsToUseCount();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetOnDemandOptionOutputReference.property.internalValue"></a>

```java
public InstancePoolInstancePoolFleetAttributesFleetOnDemandOption getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetOnDemandOption">InstancePoolInstancePoolFleetAttributesFleetOnDemandOption</a>

---


### InstancePoolInstancePoolFleetAttributesFleetSpotOptionOutputReference <a name="InstancePoolInstancePoolFleetAttributesFleetSpotOptionOutputReference" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetSpotOptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetSpotOptionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.instance_pool.InstancePoolInstancePoolFleetAttributesFleetSpotOptionOutputReference;

new InstancePoolInstancePoolFleetAttributesFleetSpotOptionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetSpotOptionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetSpotOptionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetSpotOptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetSpotOptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetSpotOptionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetSpotOptionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetSpotOptionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetSpotOptionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetSpotOptionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetSpotOptionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetSpotOptionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetSpotOptionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetSpotOptionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetSpotOptionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetSpotOptionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetSpotOptionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetSpotOptionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetSpotOptionOutputReference.resetInstancePoolsToUseCount">resetInstancePoolsToUseCount</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetSpotOptionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetSpotOptionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetSpotOptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetSpotOptionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetSpotOptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetSpotOptionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetSpotOptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetSpotOptionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetSpotOptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetSpotOptionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetSpotOptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetSpotOptionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetSpotOptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetSpotOptionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetSpotOptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetSpotOptionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetSpotOptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetSpotOptionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetSpotOptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetSpotOptionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetSpotOptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetSpotOptionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetSpotOptionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetSpotOptionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetInstancePoolsToUseCount` <a name="resetInstancePoolsToUseCount" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetSpotOptionOutputReference.resetInstancePoolsToUseCount"></a>

```java
public void resetInstancePoolsToUseCount()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetSpotOptionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetSpotOptionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetSpotOptionOutputReference.property.allocationStrategyInput">allocationStrategyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetSpotOptionOutputReference.property.instancePoolsToUseCountInput">instancePoolsToUseCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetSpotOptionOutputReference.property.allocationStrategy">allocationStrategy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetSpotOptionOutputReference.property.instancePoolsToUseCount">instancePoolsToUseCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetSpotOptionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetSpotOption">InstancePoolInstancePoolFleetAttributesFleetSpotOption</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetSpotOptionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetSpotOptionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `allocationStrategyInput`<sup>Optional</sup> <a name="allocationStrategyInput" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetSpotOptionOutputReference.property.allocationStrategyInput"></a>

```java
public java.lang.String getAllocationStrategyInput();
```

- *Type:* java.lang.String

---

##### `instancePoolsToUseCountInput`<sup>Optional</sup> <a name="instancePoolsToUseCountInput" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetSpotOptionOutputReference.property.instancePoolsToUseCountInput"></a>

```java
public java.lang.Number getInstancePoolsToUseCountInput();
```

- *Type:* java.lang.Number

---

##### `allocationStrategy`<sup>Required</sup> <a name="allocationStrategy" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetSpotOptionOutputReference.property.allocationStrategy"></a>

```java
public java.lang.String getAllocationStrategy();
```

- *Type:* java.lang.String

---

##### `instancePoolsToUseCount`<sup>Required</sup> <a name="instancePoolsToUseCount" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetSpotOptionOutputReference.property.instancePoolsToUseCount"></a>

```java
public java.lang.Number getInstancePoolsToUseCount();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetSpotOptionOutputReference.property.internalValue"></a>

```java
public InstancePoolInstancePoolFleetAttributesFleetSpotOption getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetSpotOption">InstancePoolInstancePoolFleetAttributesFleetSpotOption</a>

---


### InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideList <a name="InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideList" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.instance_pool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideList;

new InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideList.get"></a>

```java
public InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverride">InstancePoolInstancePoolFleetAttributesLaunchTemplateOverride</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverride">InstancePoolInstancePoolFleetAttributesLaunchTemplateOverride</a>>

---


### InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference <a name="InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.instance_pool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference;

new InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference.property.availabilityZoneInput">availabilityZoneInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference.property.instanceTypeInput">instanceTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference.property.availabilityZone">availabilityZone</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference.property.instanceType">instanceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverride">InstancePoolInstancePoolFleetAttributesLaunchTemplateOverride</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `availabilityZoneInput`<sup>Optional</sup> <a name="availabilityZoneInput" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference.property.availabilityZoneInput"></a>

```java
public java.lang.String getAvailabilityZoneInput();
```

- *Type:* java.lang.String

---

##### `instanceTypeInput`<sup>Optional</sup> <a name="instanceTypeInput" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference.property.instanceTypeInput"></a>

```java
public java.lang.String getInstanceTypeInput();
```

- *Type:* java.lang.String

---

##### `availabilityZone`<sup>Required</sup> <a name="availabilityZone" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference.property.availabilityZone"></a>

```java
public java.lang.String getAvailabilityZone();
```

- *Type:* java.lang.String

---

##### `instanceType`<sup>Required</sup> <a name="instanceType" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference.property.instanceType"></a>

```java
public java.lang.String getInstanceType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverride">InstancePoolInstancePoolFleetAttributesLaunchTemplateOverride</a>

---


### InstancePoolInstancePoolFleetAttributesOutputReference <a name="InstancePoolInstancePoolFleetAttributesOutputReference" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.instance_pool.InstancePoolInstancePoolFleetAttributesOutputReference;

new InstancePoolInstancePoolFleetAttributesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesOutputReference.putFleetOnDemandOption">putFleetOnDemandOption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesOutputReference.putFleetSpotOption">putFleetSpotOption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesOutputReference.putLaunchTemplateOverride">putLaunchTemplateOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesOutputReference.resetFleetOnDemandOption">resetFleetOnDemandOption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesOutputReference.resetFleetSpotOption">resetFleetSpotOption</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putFleetOnDemandOption` <a name="putFleetOnDemandOption" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesOutputReference.putFleetOnDemandOption"></a>

```java
public void putFleetOnDemandOption(InstancePoolInstancePoolFleetAttributesFleetOnDemandOption value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesOutputReference.putFleetOnDemandOption.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetOnDemandOption">InstancePoolInstancePoolFleetAttributesFleetOnDemandOption</a>

---

##### `putFleetSpotOption` <a name="putFleetSpotOption" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesOutputReference.putFleetSpotOption"></a>

```java
public void putFleetSpotOption(InstancePoolInstancePoolFleetAttributesFleetSpotOption value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesOutputReference.putFleetSpotOption.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetSpotOption">InstancePoolInstancePoolFleetAttributesFleetSpotOption</a>

---

##### `putLaunchTemplateOverride` <a name="putLaunchTemplateOverride" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesOutputReference.putLaunchTemplateOverride"></a>

```java
public void putLaunchTemplateOverride(IResolvable OR java.util.List<InstancePoolInstancePoolFleetAttributesLaunchTemplateOverride> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesOutputReference.putLaunchTemplateOverride.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverride">InstancePoolInstancePoolFleetAttributesLaunchTemplateOverride</a>>

---

##### `resetFleetOnDemandOption` <a name="resetFleetOnDemandOption" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesOutputReference.resetFleetOnDemandOption"></a>

```java
public void resetFleetOnDemandOption()
```

##### `resetFleetSpotOption` <a name="resetFleetSpotOption" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesOutputReference.resetFleetSpotOption"></a>

```java
public void resetFleetSpotOption()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesOutputReference.property.fleetOnDemandOption">fleetOnDemandOption</a></code> | <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetOnDemandOptionOutputReference">InstancePoolInstancePoolFleetAttributesFleetOnDemandOptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesOutputReference.property.fleetSpotOption">fleetSpotOption</a></code> | <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetSpotOptionOutputReference">InstancePoolInstancePoolFleetAttributesFleetSpotOptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesOutputReference.property.launchTemplateOverride">launchTemplateOverride</a></code> | <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideList">InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesOutputReference.property.fleetOnDemandOptionInput">fleetOnDemandOptionInput</a></code> | <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetOnDemandOption">InstancePoolInstancePoolFleetAttributesFleetOnDemandOption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesOutputReference.property.fleetSpotOptionInput">fleetSpotOptionInput</a></code> | <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetSpotOption">InstancePoolInstancePoolFleetAttributesFleetSpotOption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesOutputReference.property.launchTemplateOverrideInput">launchTemplateOverrideInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverride">InstancePoolInstancePoolFleetAttributesLaunchTemplateOverride</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributes">InstancePoolInstancePoolFleetAttributes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `fleetOnDemandOption`<sup>Required</sup> <a name="fleetOnDemandOption" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesOutputReference.property.fleetOnDemandOption"></a>

```java
public InstancePoolInstancePoolFleetAttributesFleetOnDemandOptionOutputReference getFleetOnDemandOption();
```

- *Type:* <a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetOnDemandOptionOutputReference">InstancePoolInstancePoolFleetAttributesFleetOnDemandOptionOutputReference</a>

---

##### `fleetSpotOption`<sup>Required</sup> <a name="fleetSpotOption" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesOutputReference.property.fleetSpotOption"></a>

```java
public InstancePoolInstancePoolFleetAttributesFleetSpotOptionOutputReference getFleetSpotOption();
```

- *Type:* <a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetSpotOptionOutputReference">InstancePoolInstancePoolFleetAttributesFleetSpotOptionOutputReference</a>

---

##### `launchTemplateOverride`<sup>Required</sup> <a name="launchTemplateOverride" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesOutputReference.property.launchTemplateOverride"></a>

```java
public InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideList getLaunchTemplateOverride();
```

- *Type:* <a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideList">InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideList</a>

---

##### `fleetOnDemandOptionInput`<sup>Optional</sup> <a name="fleetOnDemandOptionInput" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesOutputReference.property.fleetOnDemandOptionInput"></a>

```java
public InstancePoolInstancePoolFleetAttributesFleetOnDemandOption getFleetOnDemandOptionInput();
```

- *Type:* <a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetOnDemandOption">InstancePoolInstancePoolFleetAttributesFleetOnDemandOption</a>

---

##### `fleetSpotOptionInput`<sup>Optional</sup> <a name="fleetSpotOptionInput" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesOutputReference.property.fleetSpotOptionInput"></a>

```java
public InstancePoolInstancePoolFleetAttributesFleetSpotOption getFleetSpotOptionInput();
```

- *Type:* <a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetSpotOption">InstancePoolInstancePoolFleetAttributesFleetSpotOption</a>

---

##### `launchTemplateOverrideInput`<sup>Optional</sup> <a name="launchTemplateOverrideInput" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesOutputReference.property.launchTemplateOverrideInput"></a>

```java
public java.lang.Object getLaunchTemplateOverrideInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverride">InstancePoolInstancePoolFleetAttributesLaunchTemplateOverride</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesOutputReference.property.internalValue"></a>

```java
public InstancePoolInstancePoolFleetAttributes getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributes">InstancePoolInstancePoolFleetAttributes</a>

---


### InstancePoolPreloadedDockerImageBasicAuthOutputReference <a name="InstancePoolPreloadedDockerImageBasicAuthOutputReference" id="@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageBasicAuthOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageBasicAuthOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.instance_pool.InstancePoolPreloadedDockerImageBasicAuthOutputReference;

new InstancePoolPreloadedDockerImageBasicAuthOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageBasicAuthOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageBasicAuthOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageBasicAuthOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageBasicAuthOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageBasicAuthOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageBasicAuthOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageBasicAuthOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageBasicAuthOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageBasicAuthOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageBasicAuthOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageBasicAuthOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageBasicAuthOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageBasicAuthOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageBasicAuthOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageBasicAuthOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageBasicAuthOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageBasicAuthOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageBasicAuthOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageBasicAuthOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageBasicAuthOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageBasicAuthOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageBasicAuthOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageBasicAuthOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageBasicAuthOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageBasicAuthOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageBasicAuthOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageBasicAuthOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageBasicAuthOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageBasicAuthOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageBasicAuthOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageBasicAuthOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageBasicAuthOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageBasicAuthOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageBasicAuthOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageBasicAuthOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageBasicAuthOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageBasicAuthOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageBasicAuthOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageBasicAuthOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageBasicAuthOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageBasicAuthOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageBasicAuthOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageBasicAuthOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageBasicAuthOutputReference.property.passwordInput">passwordInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageBasicAuthOutputReference.property.usernameInput">usernameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageBasicAuthOutputReference.property.password">password</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageBasicAuthOutputReference.property.username">username</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageBasicAuthOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageBasicAuth">InstancePoolPreloadedDockerImageBasicAuth</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageBasicAuthOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageBasicAuthOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageBasicAuthOutputReference.property.passwordInput"></a>

```java
public java.lang.String getPasswordInput();
```

- *Type:* java.lang.String

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageBasicAuthOutputReference.property.usernameInput"></a>

```java
public java.lang.String getUsernameInput();
```

- *Type:* java.lang.String

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageBasicAuthOutputReference.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageBasicAuthOutputReference.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageBasicAuthOutputReference.property.internalValue"></a>

```java
public InstancePoolPreloadedDockerImageBasicAuth getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageBasicAuth">InstancePoolPreloadedDockerImageBasicAuth</a>

---


### InstancePoolPreloadedDockerImageList <a name="InstancePoolPreloadedDockerImageList" id="@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.instance_pool.InstancePoolPreloadedDockerImageList;

new InstancePoolPreloadedDockerImageList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageList.get"></a>

```java
public InstancePoolPreloadedDockerImageOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImage">InstancePoolPreloadedDockerImage</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImage">InstancePoolPreloadedDockerImage</a>>

---


### InstancePoolPreloadedDockerImageOutputReference <a name="InstancePoolPreloadedDockerImageOutputReference" id="@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.instance_pool.InstancePoolPreloadedDockerImageOutputReference;

new InstancePoolPreloadedDockerImageOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageOutputReference.putBasicAuth">putBasicAuth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageOutputReference.resetBasicAuth">resetBasicAuth</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putBasicAuth` <a name="putBasicAuth" id="@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageOutputReference.putBasicAuth"></a>

```java
public void putBasicAuth(InstancePoolPreloadedDockerImageBasicAuth value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageOutputReference.putBasicAuth.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageBasicAuth">InstancePoolPreloadedDockerImageBasicAuth</a>

---

##### `resetBasicAuth` <a name="resetBasicAuth" id="@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageOutputReference.resetBasicAuth"></a>

```java
public void resetBasicAuth()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageOutputReference.property.basicAuth">basicAuth</a></code> | <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageBasicAuthOutputReference">InstancePoolPreloadedDockerImageBasicAuthOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageOutputReference.property.basicAuthInput">basicAuthInput</a></code> | <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageBasicAuth">InstancePoolPreloadedDockerImageBasicAuth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageOutputReference.property.urlInput">urlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageOutputReference.property.url">url</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImage">InstancePoolPreloadedDockerImage</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `basicAuth`<sup>Required</sup> <a name="basicAuth" id="@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageOutputReference.property.basicAuth"></a>

```java
public InstancePoolPreloadedDockerImageBasicAuthOutputReference getBasicAuth();
```

- *Type:* <a href="#@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageBasicAuthOutputReference">InstancePoolPreloadedDockerImageBasicAuthOutputReference</a>

---

##### `basicAuthInput`<sup>Optional</sup> <a name="basicAuthInput" id="@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageOutputReference.property.basicAuthInput"></a>

```java
public InstancePoolPreloadedDockerImageBasicAuth getBasicAuthInput();
```

- *Type:* <a href="#@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageBasicAuth">InstancePoolPreloadedDockerImageBasicAuth</a>

---

##### `urlInput`<sup>Optional</sup> <a name="urlInput" id="@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageOutputReference.property.urlInput"></a>

```java
public java.lang.String getUrlInput();
```

- *Type:* java.lang.String

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageOutputReference.property.url"></a>

```java
public java.lang.String getUrl();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImage">InstancePoolPreloadedDockerImage</a>

---



