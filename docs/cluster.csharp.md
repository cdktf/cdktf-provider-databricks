# `databricks_cluster`

Refer to the Terraform Registory for docs: [`databricks_cluster`](https://registry.terraform.io/providers/databricks/databricks/1.19.0/docs/resources/cluster).

# `cluster` Submodule <a name="`cluster` Submodule" id="@cdktf/provider-databricks.cluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Cluster <a name="Cluster" id="@cdktf/provider-databricks.cluster.Cluster"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.19.0/docs/resources/cluster databricks_cluster}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.cluster.Cluster.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new Cluster(Construct Scope, string Id, ClusterConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterConfig">ClusterConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-databricks.cluster.Cluster.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-databricks.cluster.Cluster.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-databricks.cluster.Cluster.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterConfig">ClusterConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.putAutoscale">PutAutoscale</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.putAwsAttributes">PutAwsAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.putAzureAttributes">PutAzureAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.putClusterLogConf">PutClusterLogConf</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.putClusterMountInfo">PutClusterMountInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.putDockerImage">PutDockerImage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.putGcpAttributes">PutGcpAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.putInitScripts">PutInitScripts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.putLibrary">PutLibrary</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.putWorkloadType">PutWorkloadType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.resetApplyPolicyDefaultValues">ResetApplyPolicyDefaultValues</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.resetAutoscale">ResetAutoscale</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.resetAutoterminationMinutes">ResetAutoterminationMinutes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.resetAwsAttributes">ResetAwsAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.resetAzureAttributes">ResetAzureAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.resetClusterId">ResetClusterId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.resetClusterLogConf">ResetClusterLogConf</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.resetClusterMountInfo">ResetClusterMountInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.resetClusterName">ResetClusterName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.resetCustomTags">ResetCustomTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.resetDataSecurityMode">ResetDataSecurityMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.resetDockerImage">ResetDockerImage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.resetDriverInstancePoolId">ResetDriverInstancePoolId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.resetDriverNodeTypeId">ResetDriverNodeTypeId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.resetEnableElasticDisk">ResetEnableElasticDisk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.resetEnableLocalDiskEncryption">ResetEnableLocalDiskEncryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.resetGcpAttributes">ResetGcpAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.resetIdempotencyToken">ResetIdempotencyToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.resetInitScripts">ResetInitScripts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.resetInstancePoolId">ResetInstancePoolId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.resetIsPinned">ResetIsPinned</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.resetLibrary">ResetLibrary</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.resetNodeTypeId">ResetNodeTypeId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.resetNumWorkers">ResetNumWorkers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.resetPolicyId">ResetPolicyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.resetRuntimeEngine">ResetRuntimeEngine</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.resetSingleUserName">ResetSingleUserName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.resetSparkConf">ResetSparkConf</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.resetSparkEnvVars">ResetSparkEnvVars</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.resetSshPublicKeys">ResetSshPublicKeys</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.resetWorkloadType">ResetWorkloadType</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.cluster.Cluster.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-databricks.cluster.Cluster.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-databricks.cluster.Cluster.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.cluster.Cluster.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-databricks.cluster.Cluster.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-databricks.cluster.Cluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-databricks.cluster.Cluster.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-databricks.cluster.Cluster.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-databricks.cluster.Cluster.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.cluster.Cluster.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cluster.Cluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.cluster.Cluster.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cluster.Cluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.cluster.Cluster.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cluster.Cluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.cluster.Cluster.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cluster.Cluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.cluster.Cluster.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cluster.Cluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.cluster.Cluster.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cluster.Cluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.cluster.Cluster.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cluster.Cluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.cluster.Cluster.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cluster.Cluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.cluster.Cluster.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cluster.Cluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.cluster.Cluster.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cluster.Cluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutAutoscale` <a name="PutAutoscale" id="@cdktf/provider-databricks.cluster.Cluster.putAutoscale"></a>

```csharp
private void PutAutoscale(ClusterAutoscale Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.cluster.Cluster.putAutoscale.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterAutoscale">ClusterAutoscale</a>

---

##### `PutAwsAttributes` <a name="PutAwsAttributes" id="@cdktf/provider-databricks.cluster.Cluster.putAwsAttributes"></a>

```csharp
private void PutAwsAttributes(ClusterAwsAttributes Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.cluster.Cluster.putAwsAttributes.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterAwsAttributes">ClusterAwsAttributes</a>

---

##### `PutAzureAttributes` <a name="PutAzureAttributes" id="@cdktf/provider-databricks.cluster.Cluster.putAzureAttributes"></a>

```csharp
private void PutAzureAttributes(ClusterAzureAttributes Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.cluster.Cluster.putAzureAttributes.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterAzureAttributes">ClusterAzureAttributes</a>

---

##### `PutClusterLogConf` <a name="PutClusterLogConf" id="@cdktf/provider-databricks.cluster.Cluster.putClusterLogConf"></a>

```csharp
private void PutClusterLogConf(ClusterClusterLogConf Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.cluster.Cluster.putClusterLogConf.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConf">ClusterClusterLogConf</a>

---

##### `PutClusterMountInfo` <a name="PutClusterMountInfo" id="@cdktf/provider-databricks.cluster.Cluster.putClusterMountInfo"></a>

```csharp
private void PutClusterMountInfo(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.cluster.Cluster.putClusterMountInfo.parameter.value"></a>

- *Type:* object

---

##### `PutDockerImage` <a name="PutDockerImage" id="@cdktf/provider-databricks.cluster.Cluster.putDockerImage"></a>

```csharp
private void PutDockerImage(ClusterDockerImage Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.cluster.Cluster.putDockerImage.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterDockerImage">ClusterDockerImage</a>

---

##### `PutGcpAttributes` <a name="PutGcpAttributes" id="@cdktf/provider-databricks.cluster.Cluster.putGcpAttributes"></a>

```csharp
private void PutGcpAttributes(ClusterGcpAttributes Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.cluster.Cluster.putGcpAttributes.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterGcpAttributes">ClusterGcpAttributes</a>

---

##### `PutInitScripts` <a name="PutInitScripts" id="@cdktf/provider-databricks.cluster.Cluster.putInitScripts"></a>

```csharp
private void PutInitScripts(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.cluster.Cluster.putInitScripts.parameter.value"></a>

- *Type:* object

---

##### `PutLibrary` <a name="PutLibrary" id="@cdktf/provider-databricks.cluster.Cluster.putLibrary"></a>

```csharp
private void PutLibrary(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.cluster.Cluster.putLibrary.parameter.value"></a>

- *Type:* object

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-databricks.cluster.Cluster.putTimeouts"></a>

```csharp
private void PutTimeouts(ClusterTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.cluster.Cluster.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterTimeouts">ClusterTimeouts</a>

---

##### `PutWorkloadType` <a name="PutWorkloadType" id="@cdktf/provider-databricks.cluster.Cluster.putWorkloadType"></a>

```csharp
private void PutWorkloadType(ClusterWorkloadType Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.cluster.Cluster.putWorkloadType.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterWorkloadType">ClusterWorkloadType</a>

---

##### `ResetApplyPolicyDefaultValues` <a name="ResetApplyPolicyDefaultValues" id="@cdktf/provider-databricks.cluster.Cluster.resetApplyPolicyDefaultValues"></a>

```csharp
private void ResetApplyPolicyDefaultValues()
```

##### `ResetAutoscale` <a name="ResetAutoscale" id="@cdktf/provider-databricks.cluster.Cluster.resetAutoscale"></a>

```csharp
private void ResetAutoscale()
```

##### `ResetAutoterminationMinutes` <a name="ResetAutoterminationMinutes" id="@cdktf/provider-databricks.cluster.Cluster.resetAutoterminationMinutes"></a>

```csharp
private void ResetAutoterminationMinutes()
```

##### `ResetAwsAttributes` <a name="ResetAwsAttributes" id="@cdktf/provider-databricks.cluster.Cluster.resetAwsAttributes"></a>

```csharp
private void ResetAwsAttributes()
```

##### `ResetAzureAttributes` <a name="ResetAzureAttributes" id="@cdktf/provider-databricks.cluster.Cluster.resetAzureAttributes"></a>

```csharp
private void ResetAzureAttributes()
```

##### `ResetClusterId` <a name="ResetClusterId" id="@cdktf/provider-databricks.cluster.Cluster.resetClusterId"></a>

```csharp
private void ResetClusterId()
```

##### `ResetClusterLogConf` <a name="ResetClusterLogConf" id="@cdktf/provider-databricks.cluster.Cluster.resetClusterLogConf"></a>

```csharp
private void ResetClusterLogConf()
```

##### `ResetClusterMountInfo` <a name="ResetClusterMountInfo" id="@cdktf/provider-databricks.cluster.Cluster.resetClusterMountInfo"></a>

```csharp
private void ResetClusterMountInfo()
```

##### `ResetClusterName` <a name="ResetClusterName" id="@cdktf/provider-databricks.cluster.Cluster.resetClusterName"></a>

```csharp
private void ResetClusterName()
```

##### `ResetCustomTags` <a name="ResetCustomTags" id="@cdktf/provider-databricks.cluster.Cluster.resetCustomTags"></a>

```csharp
private void ResetCustomTags()
```

##### `ResetDataSecurityMode` <a name="ResetDataSecurityMode" id="@cdktf/provider-databricks.cluster.Cluster.resetDataSecurityMode"></a>

```csharp
private void ResetDataSecurityMode()
```

##### `ResetDockerImage` <a name="ResetDockerImage" id="@cdktf/provider-databricks.cluster.Cluster.resetDockerImage"></a>

```csharp
private void ResetDockerImage()
```

##### `ResetDriverInstancePoolId` <a name="ResetDriverInstancePoolId" id="@cdktf/provider-databricks.cluster.Cluster.resetDriverInstancePoolId"></a>

```csharp
private void ResetDriverInstancePoolId()
```

##### `ResetDriverNodeTypeId` <a name="ResetDriverNodeTypeId" id="@cdktf/provider-databricks.cluster.Cluster.resetDriverNodeTypeId"></a>

```csharp
private void ResetDriverNodeTypeId()
```

##### `ResetEnableElasticDisk` <a name="ResetEnableElasticDisk" id="@cdktf/provider-databricks.cluster.Cluster.resetEnableElasticDisk"></a>

```csharp
private void ResetEnableElasticDisk()
```

##### `ResetEnableLocalDiskEncryption` <a name="ResetEnableLocalDiskEncryption" id="@cdktf/provider-databricks.cluster.Cluster.resetEnableLocalDiskEncryption"></a>

```csharp
private void ResetEnableLocalDiskEncryption()
```

##### `ResetGcpAttributes` <a name="ResetGcpAttributes" id="@cdktf/provider-databricks.cluster.Cluster.resetGcpAttributes"></a>

```csharp
private void ResetGcpAttributes()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-databricks.cluster.Cluster.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIdempotencyToken` <a name="ResetIdempotencyToken" id="@cdktf/provider-databricks.cluster.Cluster.resetIdempotencyToken"></a>

```csharp
private void ResetIdempotencyToken()
```

##### `ResetInitScripts` <a name="ResetInitScripts" id="@cdktf/provider-databricks.cluster.Cluster.resetInitScripts"></a>

```csharp
private void ResetInitScripts()
```

##### `ResetInstancePoolId` <a name="ResetInstancePoolId" id="@cdktf/provider-databricks.cluster.Cluster.resetInstancePoolId"></a>

```csharp
private void ResetInstancePoolId()
```

##### `ResetIsPinned` <a name="ResetIsPinned" id="@cdktf/provider-databricks.cluster.Cluster.resetIsPinned"></a>

```csharp
private void ResetIsPinned()
```

##### `ResetLibrary` <a name="ResetLibrary" id="@cdktf/provider-databricks.cluster.Cluster.resetLibrary"></a>

```csharp
private void ResetLibrary()
```

##### `ResetNodeTypeId` <a name="ResetNodeTypeId" id="@cdktf/provider-databricks.cluster.Cluster.resetNodeTypeId"></a>

```csharp
private void ResetNodeTypeId()
```

##### `ResetNumWorkers` <a name="ResetNumWorkers" id="@cdktf/provider-databricks.cluster.Cluster.resetNumWorkers"></a>

```csharp
private void ResetNumWorkers()
```

##### `ResetPolicyId` <a name="ResetPolicyId" id="@cdktf/provider-databricks.cluster.Cluster.resetPolicyId"></a>

```csharp
private void ResetPolicyId()
```

##### `ResetRuntimeEngine` <a name="ResetRuntimeEngine" id="@cdktf/provider-databricks.cluster.Cluster.resetRuntimeEngine"></a>

```csharp
private void ResetRuntimeEngine()
```

##### `ResetSingleUserName` <a name="ResetSingleUserName" id="@cdktf/provider-databricks.cluster.Cluster.resetSingleUserName"></a>

```csharp
private void ResetSingleUserName()
```

##### `ResetSparkConf` <a name="ResetSparkConf" id="@cdktf/provider-databricks.cluster.Cluster.resetSparkConf"></a>

```csharp
private void ResetSparkConf()
```

##### `ResetSparkEnvVars` <a name="ResetSparkEnvVars" id="@cdktf/provider-databricks.cluster.Cluster.resetSparkEnvVars"></a>

```csharp
private void ResetSparkEnvVars()
```

##### `ResetSshPublicKeys` <a name="ResetSshPublicKeys" id="@cdktf/provider-databricks.cluster.Cluster.resetSshPublicKeys"></a>

```csharp
private void ResetSshPublicKeys()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-databricks.cluster.Cluster.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetWorkloadType` <a name="ResetWorkloadType" id="@cdktf/provider-databricks.cluster.Cluster.resetWorkloadType"></a>

```csharp
private void ResetWorkloadType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-databricks.cluster.Cluster.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

Cluster.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-databricks.cluster.Cluster.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-databricks.cluster.Cluster.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

Cluster.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-databricks.cluster.Cluster.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-databricks.cluster.Cluster.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

Cluster.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-databricks.cluster.Cluster.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.autoscale">Autoscale</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterAutoscaleOutputReference">ClusterAutoscaleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.awsAttributes">AwsAttributes</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference">ClusterAwsAttributesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.azureAttributes">AzureAttributes</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterAzureAttributesOutputReference">ClusterAzureAttributesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.clusterLogConf">ClusterLogConf</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfOutputReference">ClusterClusterLogConfOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.clusterMountInfo">ClusterMountInfo</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfoList">ClusterClusterMountInfoList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.defaultTags">DefaultTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.dockerImage">DockerImage</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterDockerImageOutputReference">ClusterDockerImageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.gcpAttributes">GcpAttributes</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference">ClusterGcpAttributesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.initScripts">InitScripts</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsList">ClusterInitScriptsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.library">Library</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryList">ClusterLibraryList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterTimeoutsOutputReference">ClusterTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.url">Url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.workloadType">WorkloadType</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterWorkloadTypeOutputReference">ClusterWorkloadTypeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.applyPolicyDefaultValuesInput">ApplyPolicyDefaultValuesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.autoscaleInput">AutoscaleInput</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterAutoscale">ClusterAutoscale</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.autoterminationMinutesInput">AutoterminationMinutesInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.awsAttributesInput">AwsAttributesInput</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterAwsAttributes">ClusterAwsAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.azureAttributesInput">AzureAttributesInput</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterAzureAttributes">ClusterAzureAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.clusterIdInput">ClusterIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.clusterLogConfInput">ClusterLogConfInput</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConf">ClusterClusterLogConf</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.clusterMountInfoInput">ClusterMountInfoInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.clusterNameInput">ClusterNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.customTagsInput">CustomTagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.dataSecurityModeInput">DataSecurityModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.dockerImageInput">DockerImageInput</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterDockerImage">ClusterDockerImage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.driverInstancePoolIdInput">DriverInstancePoolIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.driverNodeTypeIdInput">DriverNodeTypeIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.enableElasticDiskInput">EnableElasticDiskInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.enableLocalDiskEncryptionInput">EnableLocalDiskEncryptionInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.gcpAttributesInput">GcpAttributesInput</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterGcpAttributes">ClusterGcpAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.idempotencyTokenInput">IdempotencyTokenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.initScriptsInput">InitScriptsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.instancePoolIdInput">InstancePoolIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.isPinnedInput">IsPinnedInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.libraryInput">LibraryInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.nodeTypeIdInput">NodeTypeIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.numWorkersInput">NumWorkersInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.policyIdInput">PolicyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.runtimeEngineInput">RuntimeEngineInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.singleUserNameInput">SingleUserNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.sparkConfInput">SparkConfInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.sparkEnvVarsInput">SparkEnvVarsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.sparkVersionInput">SparkVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.sshPublicKeysInput">SshPublicKeysInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.workloadTypeInput">WorkloadTypeInput</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterWorkloadType">ClusterWorkloadType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.applyPolicyDefaultValues">ApplyPolicyDefaultValues</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.autoterminationMinutes">AutoterminationMinutes</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.clusterId">ClusterId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.clusterName">ClusterName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.customTags">CustomTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.dataSecurityMode">DataSecurityMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.driverInstancePoolId">DriverInstancePoolId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.driverNodeTypeId">DriverNodeTypeId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.enableElasticDisk">EnableElasticDisk</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.enableLocalDiskEncryption">EnableLocalDiskEncryption</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.idempotencyToken">IdempotencyToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.instancePoolId">InstancePoolId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.isPinned">IsPinned</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.nodeTypeId">NodeTypeId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.numWorkers">NumWorkers</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.policyId">PolicyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.runtimeEngine">RuntimeEngine</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.singleUserName">SingleUserName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.sparkConf">SparkConf</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.sparkEnvVars">SparkEnvVars</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.sparkVersion">SparkVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.sshPublicKeys">SshPublicKeys</a></code> | <code>string[]</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-databricks.cluster.Cluster.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-databricks.cluster.Cluster.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.cluster.Cluster.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-databricks.cluster.Cluster.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-databricks.cluster.Cluster.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-databricks.cluster.Cluster.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-databricks.cluster.Cluster.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-databricks.cluster.Cluster.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-databricks.cluster.Cluster.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-databricks.cluster.Cluster.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-databricks.cluster.Cluster.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-databricks.cluster.Cluster.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.cluster.Cluster.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-databricks.cluster.Cluster.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Autoscale`<sup>Required</sup> <a name="Autoscale" id="@cdktf/provider-databricks.cluster.Cluster.property.autoscale"></a>

```csharp
public ClusterAutoscaleOutputReference Autoscale { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterAutoscaleOutputReference">ClusterAutoscaleOutputReference</a>

---

##### `AwsAttributes`<sup>Required</sup> <a name="AwsAttributes" id="@cdktf/provider-databricks.cluster.Cluster.property.awsAttributes"></a>

```csharp
public ClusterAwsAttributesOutputReference AwsAttributes { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference">ClusterAwsAttributesOutputReference</a>

---

##### `AzureAttributes`<sup>Required</sup> <a name="AzureAttributes" id="@cdktf/provider-databricks.cluster.Cluster.property.azureAttributes"></a>

```csharp
public ClusterAzureAttributesOutputReference AzureAttributes { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterAzureAttributesOutputReference">ClusterAzureAttributesOutputReference</a>

---

##### `ClusterLogConf`<sup>Required</sup> <a name="ClusterLogConf" id="@cdktf/provider-databricks.cluster.Cluster.property.clusterLogConf"></a>

```csharp
public ClusterClusterLogConfOutputReference ClusterLogConf { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfOutputReference">ClusterClusterLogConfOutputReference</a>

---

##### `ClusterMountInfo`<sup>Required</sup> <a name="ClusterMountInfo" id="@cdktf/provider-databricks.cluster.Cluster.property.clusterMountInfo"></a>

```csharp
public ClusterClusterMountInfoList ClusterMountInfo { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfoList">ClusterClusterMountInfoList</a>

---

##### `DefaultTags`<sup>Required</sup> <a name="DefaultTags" id="@cdktf/provider-databricks.cluster.Cluster.property.defaultTags"></a>

```csharp
public StringMap DefaultTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `DockerImage`<sup>Required</sup> <a name="DockerImage" id="@cdktf/provider-databricks.cluster.Cluster.property.dockerImage"></a>

```csharp
public ClusterDockerImageOutputReference DockerImage { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterDockerImageOutputReference">ClusterDockerImageOutputReference</a>

---

##### `GcpAttributes`<sup>Required</sup> <a name="GcpAttributes" id="@cdktf/provider-databricks.cluster.Cluster.property.gcpAttributes"></a>

```csharp
public ClusterGcpAttributesOutputReference GcpAttributes { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference">ClusterGcpAttributesOutputReference</a>

---

##### `InitScripts`<sup>Required</sup> <a name="InitScripts" id="@cdktf/provider-databricks.cluster.Cluster.property.initScripts"></a>

```csharp
public ClusterInitScriptsList InitScripts { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsList">ClusterInitScriptsList</a>

---

##### `Library`<sup>Required</sup> <a name="Library" id="@cdktf/provider-databricks.cluster.Cluster.property.library"></a>

```csharp
public ClusterLibraryList Library { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterLibraryList">ClusterLibraryList</a>

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-databricks.cluster.Cluster.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-databricks.cluster.Cluster.property.timeouts"></a>

```csharp
public ClusterTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterTimeoutsOutputReference">ClusterTimeoutsOutputReference</a>

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktf/provider-databricks.cluster.Cluster.property.url"></a>

```csharp
public string Url { get; }
```

- *Type:* string

---

##### `WorkloadType`<sup>Required</sup> <a name="WorkloadType" id="@cdktf/provider-databricks.cluster.Cluster.property.workloadType"></a>

```csharp
public ClusterWorkloadTypeOutputReference WorkloadType { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterWorkloadTypeOutputReference">ClusterWorkloadTypeOutputReference</a>

---

##### `ApplyPolicyDefaultValuesInput`<sup>Optional</sup> <a name="ApplyPolicyDefaultValuesInput" id="@cdktf/provider-databricks.cluster.Cluster.property.applyPolicyDefaultValuesInput"></a>

```csharp
public object ApplyPolicyDefaultValuesInput { get; }
```

- *Type:* object

---

##### `AutoscaleInput`<sup>Optional</sup> <a name="AutoscaleInput" id="@cdktf/provider-databricks.cluster.Cluster.property.autoscaleInput"></a>

```csharp
public ClusterAutoscale AutoscaleInput { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterAutoscale">ClusterAutoscale</a>

---

##### `AutoterminationMinutesInput`<sup>Optional</sup> <a name="AutoterminationMinutesInput" id="@cdktf/provider-databricks.cluster.Cluster.property.autoterminationMinutesInput"></a>

```csharp
public double AutoterminationMinutesInput { get; }
```

- *Type:* double

---

##### `AwsAttributesInput`<sup>Optional</sup> <a name="AwsAttributesInput" id="@cdktf/provider-databricks.cluster.Cluster.property.awsAttributesInput"></a>

```csharp
public ClusterAwsAttributes AwsAttributesInput { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterAwsAttributes">ClusterAwsAttributes</a>

---

##### `AzureAttributesInput`<sup>Optional</sup> <a name="AzureAttributesInput" id="@cdktf/provider-databricks.cluster.Cluster.property.azureAttributesInput"></a>

```csharp
public ClusterAzureAttributes AzureAttributesInput { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterAzureAttributes">ClusterAzureAttributes</a>

---

##### `ClusterIdInput`<sup>Optional</sup> <a name="ClusterIdInput" id="@cdktf/provider-databricks.cluster.Cluster.property.clusterIdInput"></a>

```csharp
public string ClusterIdInput { get; }
```

- *Type:* string

---

##### `ClusterLogConfInput`<sup>Optional</sup> <a name="ClusterLogConfInput" id="@cdktf/provider-databricks.cluster.Cluster.property.clusterLogConfInput"></a>

```csharp
public ClusterClusterLogConf ClusterLogConfInput { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConf">ClusterClusterLogConf</a>

---

##### `ClusterMountInfoInput`<sup>Optional</sup> <a name="ClusterMountInfoInput" id="@cdktf/provider-databricks.cluster.Cluster.property.clusterMountInfoInput"></a>

```csharp
public object ClusterMountInfoInput { get; }
```

- *Type:* object

---

##### `ClusterNameInput`<sup>Optional</sup> <a name="ClusterNameInput" id="@cdktf/provider-databricks.cluster.Cluster.property.clusterNameInput"></a>

```csharp
public string ClusterNameInput { get; }
```

- *Type:* string

---

##### `CustomTagsInput`<sup>Optional</sup> <a name="CustomTagsInput" id="@cdktf/provider-databricks.cluster.Cluster.property.customTagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> CustomTagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `DataSecurityModeInput`<sup>Optional</sup> <a name="DataSecurityModeInput" id="@cdktf/provider-databricks.cluster.Cluster.property.dataSecurityModeInput"></a>

```csharp
public string DataSecurityModeInput { get; }
```

- *Type:* string

---

##### `DockerImageInput`<sup>Optional</sup> <a name="DockerImageInput" id="@cdktf/provider-databricks.cluster.Cluster.property.dockerImageInput"></a>

```csharp
public ClusterDockerImage DockerImageInput { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterDockerImage">ClusterDockerImage</a>

---

##### `DriverInstancePoolIdInput`<sup>Optional</sup> <a name="DriverInstancePoolIdInput" id="@cdktf/provider-databricks.cluster.Cluster.property.driverInstancePoolIdInput"></a>

```csharp
public string DriverInstancePoolIdInput { get; }
```

- *Type:* string

---

##### `DriverNodeTypeIdInput`<sup>Optional</sup> <a name="DriverNodeTypeIdInput" id="@cdktf/provider-databricks.cluster.Cluster.property.driverNodeTypeIdInput"></a>

```csharp
public string DriverNodeTypeIdInput { get; }
```

- *Type:* string

---

##### `EnableElasticDiskInput`<sup>Optional</sup> <a name="EnableElasticDiskInput" id="@cdktf/provider-databricks.cluster.Cluster.property.enableElasticDiskInput"></a>

```csharp
public object EnableElasticDiskInput { get; }
```

- *Type:* object

---

##### `EnableLocalDiskEncryptionInput`<sup>Optional</sup> <a name="EnableLocalDiskEncryptionInput" id="@cdktf/provider-databricks.cluster.Cluster.property.enableLocalDiskEncryptionInput"></a>

```csharp
public object EnableLocalDiskEncryptionInput { get; }
```

- *Type:* object

---

##### `GcpAttributesInput`<sup>Optional</sup> <a name="GcpAttributesInput" id="@cdktf/provider-databricks.cluster.Cluster.property.gcpAttributesInput"></a>

```csharp
public ClusterGcpAttributes GcpAttributesInput { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterGcpAttributes">ClusterGcpAttributes</a>

---

##### `IdempotencyTokenInput`<sup>Optional</sup> <a name="IdempotencyTokenInput" id="@cdktf/provider-databricks.cluster.Cluster.property.idempotencyTokenInput"></a>

```csharp
public string IdempotencyTokenInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-databricks.cluster.Cluster.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `InitScriptsInput`<sup>Optional</sup> <a name="InitScriptsInput" id="@cdktf/provider-databricks.cluster.Cluster.property.initScriptsInput"></a>

```csharp
public object InitScriptsInput { get; }
```

- *Type:* object

---

##### `InstancePoolIdInput`<sup>Optional</sup> <a name="InstancePoolIdInput" id="@cdktf/provider-databricks.cluster.Cluster.property.instancePoolIdInput"></a>

```csharp
public string InstancePoolIdInput { get; }
```

- *Type:* string

---

##### `IsPinnedInput`<sup>Optional</sup> <a name="IsPinnedInput" id="@cdktf/provider-databricks.cluster.Cluster.property.isPinnedInput"></a>

```csharp
public object IsPinnedInput { get; }
```

- *Type:* object

---

##### `LibraryInput`<sup>Optional</sup> <a name="LibraryInput" id="@cdktf/provider-databricks.cluster.Cluster.property.libraryInput"></a>

```csharp
public object LibraryInput { get; }
```

- *Type:* object

---

##### `NodeTypeIdInput`<sup>Optional</sup> <a name="NodeTypeIdInput" id="@cdktf/provider-databricks.cluster.Cluster.property.nodeTypeIdInput"></a>

```csharp
public string NodeTypeIdInput { get; }
```

- *Type:* string

---

##### `NumWorkersInput`<sup>Optional</sup> <a name="NumWorkersInput" id="@cdktf/provider-databricks.cluster.Cluster.property.numWorkersInput"></a>

```csharp
public double NumWorkersInput { get; }
```

- *Type:* double

---

##### `PolicyIdInput`<sup>Optional</sup> <a name="PolicyIdInput" id="@cdktf/provider-databricks.cluster.Cluster.property.policyIdInput"></a>

```csharp
public string PolicyIdInput { get; }
```

- *Type:* string

---

##### `RuntimeEngineInput`<sup>Optional</sup> <a name="RuntimeEngineInput" id="@cdktf/provider-databricks.cluster.Cluster.property.runtimeEngineInput"></a>

```csharp
public string RuntimeEngineInput { get; }
```

- *Type:* string

---

##### `SingleUserNameInput`<sup>Optional</sup> <a name="SingleUserNameInput" id="@cdktf/provider-databricks.cluster.Cluster.property.singleUserNameInput"></a>

```csharp
public string SingleUserNameInput { get; }
```

- *Type:* string

---

##### `SparkConfInput`<sup>Optional</sup> <a name="SparkConfInput" id="@cdktf/provider-databricks.cluster.Cluster.property.sparkConfInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> SparkConfInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `SparkEnvVarsInput`<sup>Optional</sup> <a name="SparkEnvVarsInput" id="@cdktf/provider-databricks.cluster.Cluster.property.sparkEnvVarsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> SparkEnvVarsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `SparkVersionInput`<sup>Optional</sup> <a name="SparkVersionInput" id="@cdktf/provider-databricks.cluster.Cluster.property.sparkVersionInput"></a>

```csharp
public string SparkVersionInput { get; }
```

- *Type:* string

---

##### `SshPublicKeysInput`<sup>Optional</sup> <a name="SshPublicKeysInput" id="@cdktf/provider-databricks.cluster.Cluster.property.sshPublicKeysInput"></a>

```csharp
public string[] SshPublicKeysInput { get; }
```

- *Type:* string[]

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-databricks.cluster.Cluster.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `WorkloadTypeInput`<sup>Optional</sup> <a name="WorkloadTypeInput" id="@cdktf/provider-databricks.cluster.Cluster.property.workloadTypeInput"></a>

```csharp
public ClusterWorkloadType WorkloadTypeInput { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterWorkloadType">ClusterWorkloadType</a>

---

##### `ApplyPolicyDefaultValues`<sup>Required</sup> <a name="ApplyPolicyDefaultValues" id="@cdktf/provider-databricks.cluster.Cluster.property.applyPolicyDefaultValues"></a>

```csharp
public object ApplyPolicyDefaultValues { get; }
```

- *Type:* object

---

##### `AutoterminationMinutes`<sup>Required</sup> <a name="AutoterminationMinutes" id="@cdktf/provider-databricks.cluster.Cluster.property.autoterminationMinutes"></a>

```csharp
public double AutoterminationMinutes { get; }
```

- *Type:* double

---

##### `ClusterId`<sup>Required</sup> <a name="ClusterId" id="@cdktf/provider-databricks.cluster.Cluster.property.clusterId"></a>

```csharp
public string ClusterId { get; }
```

- *Type:* string

---

##### `ClusterName`<sup>Required</sup> <a name="ClusterName" id="@cdktf/provider-databricks.cluster.Cluster.property.clusterName"></a>

```csharp
public string ClusterName { get; }
```

- *Type:* string

---

##### `CustomTags`<sup>Required</sup> <a name="CustomTags" id="@cdktf/provider-databricks.cluster.Cluster.property.customTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> CustomTags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `DataSecurityMode`<sup>Required</sup> <a name="DataSecurityMode" id="@cdktf/provider-databricks.cluster.Cluster.property.dataSecurityMode"></a>

```csharp
public string DataSecurityMode { get; }
```

- *Type:* string

---

##### `DriverInstancePoolId`<sup>Required</sup> <a name="DriverInstancePoolId" id="@cdktf/provider-databricks.cluster.Cluster.property.driverInstancePoolId"></a>

```csharp
public string DriverInstancePoolId { get; }
```

- *Type:* string

---

##### `DriverNodeTypeId`<sup>Required</sup> <a name="DriverNodeTypeId" id="@cdktf/provider-databricks.cluster.Cluster.property.driverNodeTypeId"></a>

```csharp
public string DriverNodeTypeId { get; }
```

- *Type:* string

---

##### `EnableElasticDisk`<sup>Required</sup> <a name="EnableElasticDisk" id="@cdktf/provider-databricks.cluster.Cluster.property.enableElasticDisk"></a>

```csharp
public object EnableElasticDisk { get; }
```

- *Type:* object

---

##### `EnableLocalDiskEncryption`<sup>Required</sup> <a name="EnableLocalDiskEncryption" id="@cdktf/provider-databricks.cluster.Cluster.property.enableLocalDiskEncryption"></a>

```csharp
public object EnableLocalDiskEncryption { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-databricks.cluster.Cluster.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IdempotencyToken`<sup>Required</sup> <a name="IdempotencyToken" id="@cdktf/provider-databricks.cluster.Cluster.property.idempotencyToken"></a>

```csharp
public string IdempotencyToken { get; }
```

- *Type:* string

---

##### `InstancePoolId`<sup>Required</sup> <a name="InstancePoolId" id="@cdktf/provider-databricks.cluster.Cluster.property.instancePoolId"></a>

```csharp
public string InstancePoolId { get; }
```

- *Type:* string

---

##### `IsPinned`<sup>Required</sup> <a name="IsPinned" id="@cdktf/provider-databricks.cluster.Cluster.property.isPinned"></a>

```csharp
public object IsPinned { get; }
```

- *Type:* object

---

##### `NodeTypeId`<sup>Required</sup> <a name="NodeTypeId" id="@cdktf/provider-databricks.cluster.Cluster.property.nodeTypeId"></a>

```csharp
public string NodeTypeId { get; }
```

- *Type:* string

---

##### `NumWorkers`<sup>Required</sup> <a name="NumWorkers" id="@cdktf/provider-databricks.cluster.Cluster.property.numWorkers"></a>

```csharp
public double NumWorkers { get; }
```

- *Type:* double

---

##### `PolicyId`<sup>Required</sup> <a name="PolicyId" id="@cdktf/provider-databricks.cluster.Cluster.property.policyId"></a>

```csharp
public string PolicyId { get; }
```

- *Type:* string

---

##### `RuntimeEngine`<sup>Required</sup> <a name="RuntimeEngine" id="@cdktf/provider-databricks.cluster.Cluster.property.runtimeEngine"></a>

```csharp
public string RuntimeEngine { get; }
```

- *Type:* string

---

##### `SingleUserName`<sup>Required</sup> <a name="SingleUserName" id="@cdktf/provider-databricks.cluster.Cluster.property.singleUserName"></a>

```csharp
public string SingleUserName { get; }
```

- *Type:* string

---

##### `SparkConf`<sup>Required</sup> <a name="SparkConf" id="@cdktf/provider-databricks.cluster.Cluster.property.sparkConf"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> SparkConf { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `SparkEnvVars`<sup>Required</sup> <a name="SparkEnvVars" id="@cdktf/provider-databricks.cluster.Cluster.property.sparkEnvVars"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> SparkEnvVars { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `SparkVersion`<sup>Required</sup> <a name="SparkVersion" id="@cdktf/provider-databricks.cluster.Cluster.property.sparkVersion"></a>

```csharp
public string SparkVersion { get; }
```

- *Type:* string

---

##### `SshPublicKeys`<sup>Required</sup> <a name="SshPublicKeys" id="@cdktf/provider-databricks.cluster.Cluster.property.sshPublicKeys"></a>

```csharp
public string[] SshPublicKeys { get; }
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-databricks.cluster.Cluster.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ClusterAutoscale <a name="ClusterAutoscale" id="@cdktf/provider-databricks.cluster.ClusterAutoscale"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.cluster.ClusterAutoscale.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new ClusterAutoscale {
    double MaxWorkers = null,
    double MinWorkers = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAutoscale.property.maxWorkers">MaxWorkers</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.19.0/docs/resources/cluster#max_workers Cluster#max_workers}. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAutoscale.property.minWorkers">MinWorkers</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.19.0/docs/resources/cluster#min_workers Cluster#min_workers}. |

---

##### `MaxWorkers`<sup>Optional</sup> <a name="MaxWorkers" id="@cdktf/provider-databricks.cluster.ClusterAutoscale.property.maxWorkers"></a>

```csharp
public double MaxWorkers { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.19.0/docs/resources/cluster#max_workers Cluster#max_workers}.

---

##### `MinWorkers`<sup>Optional</sup> <a name="MinWorkers" id="@cdktf/provider-databricks.cluster.ClusterAutoscale.property.minWorkers"></a>

```csharp
public double MinWorkers { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.19.0/docs/resources/cluster#min_workers Cluster#min_workers}.

---

### ClusterAwsAttributes <a name="ClusterAwsAttributes" id="@cdktf/provider-databricks.cluster.ClusterAwsAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.cluster.ClusterAwsAttributes.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new ClusterAwsAttributes {
    string Availability = null,
    double EbsVolumeCount = null,
    double EbsVolumeSize = null,
    string EbsVolumeType = null,
    double FirstOnDemand = null,
    string InstanceProfileArn = null,
    double SpotBidPricePercent = null,
    string ZoneId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAwsAttributes.property.availability">Availability</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.19.0/docs/resources/cluster#availability Cluster#availability}. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAwsAttributes.property.ebsVolumeCount">EbsVolumeCount</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.19.0/docs/resources/cluster#ebs_volume_count Cluster#ebs_volume_count}. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAwsAttributes.property.ebsVolumeSize">EbsVolumeSize</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.19.0/docs/resources/cluster#ebs_volume_size Cluster#ebs_volume_size}. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAwsAttributes.property.ebsVolumeType">EbsVolumeType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.19.0/docs/resources/cluster#ebs_volume_type Cluster#ebs_volume_type}. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAwsAttributes.property.firstOnDemand">FirstOnDemand</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.19.0/docs/resources/cluster#first_on_demand Cluster#first_on_demand}. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAwsAttributes.property.instanceProfileArn">InstanceProfileArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.19.0/docs/resources/cluster#instance_profile_arn Cluster#instance_profile_arn}. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAwsAttributes.property.spotBidPricePercent">SpotBidPricePercent</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.19.0/docs/resources/cluster#spot_bid_price_percent Cluster#spot_bid_price_percent}. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAwsAttributes.property.zoneId">ZoneId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.19.0/docs/resources/cluster#zone_id Cluster#zone_id}. |

---

##### `Availability`<sup>Optional</sup> <a name="Availability" id="@cdktf/provider-databricks.cluster.ClusterAwsAttributes.property.availability"></a>

```csharp
public string Availability { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.19.0/docs/resources/cluster#availability Cluster#availability}.

---

##### `EbsVolumeCount`<sup>Optional</sup> <a name="EbsVolumeCount" id="@cdktf/provider-databricks.cluster.ClusterAwsAttributes.property.ebsVolumeCount"></a>

```csharp
public double EbsVolumeCount { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.19.0/docs/resources/cluster#ebs_volume_count Cluster#ebs_volume_count}.

---

##### `EbsVolumeSize`<sup>Optional</sup> <a name="EbsVolumeSize" id="@cdktf/provider-databricks.cluster.ClusterAwsAttributes.property.ebsVolumeSize"></a>

```csharp
public double EbsVolumeSize { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.19.0/docs/resources/cluster#ebs_volume_size Cluster#ebs_volume_size}.

---

##### `EbsVolumeType`<sup>Optional</sup> <a name="EbsVolumeType" id="@cdktf/provider-databricks.cluster.ClusterAwsAttributes.property.ebsVolumeType"></a>

```csharp
public string EbsVolumeType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.19.0/docs/resources/cluster#ebs_volume_type Cluster#ebs_volume_type}.

---

##### `FirstOnDemand`<sup>Optional</sup> <a name="FirstOnDemand" id="@cdktf/provider-databricks.cluster.ClusterAwsAttributes.property.firstOnDemand"></a>

```csharp
public double FirstOnDemand { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.19.0/docs/resources/cluster#first_on_demand Cluster#first_on_demand}.

---

##### `InstanceProfileArn`<sup>Optional</sup> <a name="InstanceProfileArn" id="@cdktf/provider-databricks.cluster.ClusterAwsAttributes.property.instanceProfileArn"></a>

```csharp
public string InstanceProfileArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.19.0/docs/resources/cluster#instance_profile_arn Cluster#instance_profile_arn}.

---

##### `SpotBidPricePercent`<sup>Optional</sup> <a name="SpotBidPricePercent" id="@cdktf/provider-databricks.cluster.ClusterAwsAttributes.property.spotBidPricePercent"></a>

```csharp
public double SpotBidPricePercent { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.19.0/docs/resources/cluster#spot_bid_price_percent Cluster#spot_bid_price_percent}.

---

##### `ZoneId`<sup>Optional</sup> <a name="ZoneId" id="@cdktf/provider-databricks.cluster.ClusterAwsAttributes.property.zoneId"></a>

```csharp
public string ZoneId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.19.0/docs/resources/cluster#zone_id Cluster#zone_id}.

---

### ClusterAzureAttributes <a name="ClusterAzureAttributes" id="@cdktf/provider-databricks.cluster.ClusterAzureAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.cluster.ClusterAzureAttributes.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new ClusterAzureAttributes {
    string Availability = null,
    double FirstOnDemand = null,
    double SpotBidMaxPrice = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAzureAttributes.property.availability">Availability</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.19.0/docs/resources/cluster#availability Cluster#availability}. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAzureAttributes.property.firstOnDemand">FirstOnDemand</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.19.0/docs/resources/cluster#first_on_demand Cluster#first_on_demand}. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAzureAttributes.property.spotBidMaxPrice">SpotBidMaxPrice</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.19.0/docs/resources/cluster#spot_bid_max_price Cluster#spot_bid_max_price}. |

---

##### `Availability`<sup>Optional</sup> <a name="Availability" id="@cdktf/provider-databricks.cluster.ClusterAzureAttributes.property.availability"></a>

```csharp
public string Availability { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.19.0/docs/resources/cluster#availability Cluster#availability}.

---

##### `FirstOnDemand`<sup>Optional</sup> <a name="FirstOnDemand" id="@cdktf/provider-databricks.cluster.ClusterAzureAttributes.property.firstOnDemand"></a>

```csharp
public double FirstOnDemand { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.19.0/docs/resources/cluster#first_on_demand Cluster#first_on_demand}.

---

##### `SpotBidMaxPrice`<sup>Optional</sup> <a name="SpotBidMaxPrice" id="@cdktf/provider-databricks.cluster.ClusterAzureAttributes.property.spotBidMaxPrice"></a>

```csharp
public double SpotBidMaxPrice { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.19.0/docs/resources/cluster#spot_bid_max_price Cluster#spot_bid_max_price}.

---

### ClusterClusterLogConf <a name="ClusterClusterLogConf" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConf"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConf.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new ClusterClusterLogConf {
    ClusterClusterLogConfDbfs Dbfs = null,
    ClusterClusterLogConfS3 S3 = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConf.property.dbfs">Dbfs</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfDbfs">ClusterClusterLogConfDbfs</a></code> | dbfs block. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConf.property.s3">S3</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3">ClusterClusterLogConfS3</a></code> | s3 block. |

---

##### `Dbfs`<sup>Optional</sup> <a name="Dbfs" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConf.property.dbfs"></a>

```csharp
public ClusterClusterLogConfDbfs Dbfs { get; set; }
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfDbfs">ClusterClusterLogConfDbfs</a>

dbfs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.19.0/docs/resources/cluster#dbfs Cluster#dbfs}

---

##### `S3`<sup>Optional</sup> <a name="S3" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConf.property.s3"></a>

```csharp
public ClusterClusterLogConfS3 S3 { get; set; }
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3">ClusterClusterLogConfS3</a>

s3 block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.19.0/docs/resources/cluster#s3 Cluster#s3}

---

### ClusterClusterLogConfDbfs <a name="ClusterClusterLogConfDbfs" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfDbfs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfDbfs.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new ClusterClusterLogConfDbfs {
    string Destination
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfDbfs.property.destination">Destination</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.19.0/docs/resources/cluster#destination Cluster#destination}. |

---

##### `Destination`<sup>Required</sup> <a name="Destination" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfDbfs.property.destination"></a>

```csharp
public string Destination { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.19.0/docs/resources/cluster#destination Cluster#destination}.

---

### ClusterClusterLogConfS3 <a name="ClusterClusterLogConfS3" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new ClusterClusterLogConfS3 {
    string Destination,
    string CannedAcl = null,
    object EnableEncryption = null,
    string EncryptionType = null,
    string Endpoint = null,
    string KmsKey = null,
    string Region = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3.property.destination">Destination</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.19.0/docs/resources/cluster#destination Cluster#destination}. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3.property.cannedAcl">CannedAcl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.19.0/docs/resources/cluster#canned_acl Cluster#canned_acl}. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3.property.enableEncryption">EnableEncryption</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.19.0/docs/resources/cluster#enable_encryption Cluster#enable_encryption}. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3.property.encryptionType">EncryptionType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.19.0/docs/resources/cluster#encryption_type Cluster#encryption_type}. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3.property.endpoint">Endpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.19.0/docs/resources/cluster#endpoint Cluster#endpoint}. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3.property.kmsKey">KmsKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.19.0/docs/resources/cluster#kms_key Cluster#kms_key}. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3.property.region">Region</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.19.0/docs/resources/cluster#region Cluster#region}. |

---

##### `Destination`<sup>Required</sup> <a name="Destination" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3.property.destination"></a>

```csharp
public string Destination { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.19.0/docs/resources/cluster#destination Cluster#destination}.

---

##### `CannedAcl`<sup>Optional</sup> <a name="CannedAcl" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3.property.cannedAcl"></a>

```csharp
public string CannedAcl { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.19.0/docs/resources/cluster#canned_acl Cluster#canned_acl}.

---

##### `EnableEncryption`<sup>Optional</sup> <a name="EnableEncryption" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3.property.enableEncryption"></a>

```csharp
public object EnableEncryption { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.19.0/docs/resources/cluster#enable_encryption Cluster#enable_encryption}.

---

##### `EncryptionType`<sup>Optional</sup> <a name="EncryptionType" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3.property.encryptionType"></a>

```csharp
public string EncryptionType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.19.0/docs/resources/cluster#encryption_type Cluster#encryption_type}.

---

##### `Endpoint`<sup>Optional</sup> <a name="Endpoint" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3.property.endpoint"></a>

```csharp
public string Endpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.19.0/docs/resources/cluster#endpoint Cluster#endpoint}.

---

##### `KmsKey`<sup>Optional</sup> <a name="KmsKey" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3.property.kmsKey"></a>

```csharp
public string KmsKey { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.19.0/docs/resources/cluster#kms_key Cluster#kms_key}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.19.0/docs/resources/cluster#region Cluster#region}.

---

### ClusterClusterMountInfo <a name="ClusterClusterMountInfo" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfo.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new ClusterClusterMountInfo {
    string LocalMountDirPath,
    ClusterClusterMountInfoNetworkFilesystemInfo NetworkFilesystemInfo,
    string RemoteMountDirPath = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfo.property.localMountDirPath">LocalMountDirPath</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.19.0/docs/resources/cluster#local_mount_dir_path Cluster#local_mount_dir_path}. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfo.property.networkFilesystemInfo">NetworkFilesystemInfo</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfoNetworkFilesystemInfo">ClusterClusterMountInfoNetworkFilesystemInfo</a></code> | network_filesystem_info block. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfo.property.remoteMountDirPath">RemoteMountDirPath</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.19.0/docs/resources/cluster#remote_mount_dir_path Cluster#remote_mount_dir_path}. |

---

##### `LocalMountDirPath`<sup>Required</sup> <a name="LocalMountDirPath" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfo.property.localMountDirPath"></a>

```csharp
public string LocalMountDirPath { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.19.0/docs/resources/cluster#local_mount_dir_path Cluster#local_mount_dir_path}.

---

##### `NetworkFilesystemInfo`<sup>Required</sup> <a name="NetworkFilesystemInfo" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfo.property.networkFilesystemInfo"></a>

```csharp
public ClusterClusterMountInfoNetworkFilesystemInfo NetworkFilesystemInfo { get; set; }
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfoNetworkFilesystemInfo">ClusterClusterMountInfoNetworkFilesystemInfo</a>

network_filesystem_info block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.19.0/docs/resources/cluster#network_filesystem_info Cluster#network_filesystem_info}

---

##### `RemoteMountDirPath`<sup>Optional</sup> <a name="RemoteMountDirPath" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfo.property.remoteMountDirPath"></a>

```csharp
public string RemoteMountDirPath { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.19.0/docs/resources/cluster#remote_mount_dir_path Cluster#remote_mount_dir_path}.

---

### ClusterClusterMountInfoNetworkFilesystemInfo <a name="ClusterClusterMountInfoNetworkFilesystemInfo" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoNetworkFilesystemInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoNetworkFilesystemInfo.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new ClusterClusterMountInfoNetworkFilesystemInfo {
    string ServerAddress,
    string MountOptions = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfoNetworkFilesystemInfo.property.serverAddress">ServerAddress</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.19.0/docs/resources/cluster#server_address Cluster#server_address}. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfoNetworkFilesystemInfo.property.mountOptions">MountOptions</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.19.0/docs/resources/cluster#mount_options Cluster#mount_options}. |

---

##### `ServerAddress`<sup>Required</sup> <a name="ServerAddress" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoNetworkFilesystemInfo.property.serverAddress"></a>

```csharp
public string ServerAddress { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.19.0/docs/resources/cluster#server_address Cluster#server_address}.

---

##### `MountOptions`<sup>Optional</sup> <a name="MountOptions" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoNetworkFilesystemInfo.property.mountOptions"></a>

```csharp
public string MountOptions { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.19.0/docs/resources/cluster#mount_options Cluster#mount_options}.

---

### ClusterConfig <a name="ClusterConfig" id="@cdktf/provider-databricks.cluster.ClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.cluster.ClusterConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new ClusterConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string SparkVersion,
    object ApplyPolicyDefaultValues = null,
    ClusterAutoscale Autoscale = null,
    double AutoterminationMinutes = null,
    ClusterAwsAttributes AwsAttributes = null,
    ClusterAzureAttributes AzureAttributes = null,
    string ClusterId = null,
    ClusterClusterLogConf ClusterLogConf = null,
    object ClusterMountInfo = null,
    string ClusterName = null,
    System.Collections.Generic.IDictionary<string, string> CustomTags = null,
    string DataSecurityMode = null,
    ClusterDockerImage DockerImage = null,
    string DriverInstancePoolId = null,
    string DriverNodeTypeId = null,
    object EnableElasticDisk = null,
    object EnableLocalDiskEncryption = null,
    ClusterGcpAttributes GcpAttributes = null,
    string Id = null,
    string IdempotencyToken = null,
    object InitScripts = null,
    string InstancePoolId = null,
    object IsPinned = null,
    object Library = null,
    string NodeTypeId = null,
    double NumWorkers = null,
    string PolicyId = null,
    string RuntimeEngine = null,
    string SingleUserName = null,
    System.Collections.Generic.IDictionary<string, string> SparkConf = null,
    System.Collections.Generic.IDictionary<string, string> SparkEnvVars = null,
    string[] SshPublicKeys = null,
    ClusterTimeouts Timeouts = null,
    ClusterWorkloadType WorkloadType = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterConfig.property.sparkVersion">SparkVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.19.0/docs/resources/cluster#spark_version Cluster#spark_version}. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterConfig.property.applyPolicyDefaultValues">ApplyPolicyDefaultValues</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.19.0/docs/resources/cluster#apply_policy_default_values Cluster#apply_policy_default_values}. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterConfig.property.autoscale">Autoscale</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterAutoscale">ClusterAutoscale</a></code> | autoscale block. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterConfig.property.autoterminationMinutes">AutoterminationMinutes</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.19.0/docs/resources/cluster#autotermination_minutes Cluster#autotermination_minutes}. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterConfig.property.awsAttributes">AwsAttributes</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterAwsAttributes">ClusterAwsAttributes</a></code> | aws_attributes block. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterConfig.property.azureAttributes">AzureAttributes</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterAzureAttributes">ClusterAzureAttributes</a></code> | azure_attributes block. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterConfig.property.clusterId">ClusterId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.19.0/docs/resources/cluster#cluster_id Cluster#cluster_id}. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterConfig.property.clusterLogConf">ClusterLogConf</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConf">ClusterClusterLogConf</a></code> | cluster_log_conf block. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterConfig.property.clusterMountInfo">ClusterMountInfo</a></code> | <code>object</code> | cluster_mount_info block. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterConfig.property.clusterName">ClusterName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.19.0/docs/resources/cluster#cluster_name Cluster#cluster_name}. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterConfig.property.customTags">CustomTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.19.0/docs/resources/cluster#custom_tags Cluster#custom_tags}. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterConfig.property.dataSecurityMode">DataSecurityMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.19.0/docs/resources/cluster#data_security_mode Cluster#data_security_mode}. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterConfig.property.dockerImage">DockerImage</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterDockerImage">ClusterDockerImage</a></code> | docker_image block. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterConfig.property.driverInstancePoolId">DriverInstancePoolId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.19.0/docs/resources/cluster#driver_instance_pool_id Cluster#driver_instance_pool_id}. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterConfig.property.driverNodeTypeId">DriverNodeTypeId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.19.0/docs/resources/cluster#driver_node_type_id Cluster#driver_node_type_id}. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterConfig.property.enableElasticDisk">EnableElasticDisk</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.19.0/docs/resources/cluster#enable_elastic_disk Cluster#enable_elastic_disk}. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterConfig.property.enableLocalDiskEncryption">EnableLocalDiskEncryption</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.19.0/docs/resources/cluster#enable_local_disk_encryption Cluster#enable_local_disk_encryption}. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterConfig.property.gcpAttributes">GcpAttributes</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterGcpAttributes">ClusterGcpAttributes</a></code> | gcp_attributes block. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.19.0/docs/resources/cluster#id Cluster#id}. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterConfig.property.idempotencyToken">IdempotencyToken</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.19.0/docs/resources/cluster#idempotency_token Cluster#idempotency_token}. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterConfig.property.initScripts">InitScripts</a></code> | <code>object</code> | init_scripts block. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterConfig.property.instancePoolId">InstancePoolId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.19.0/docs/resources/cluster#instance_pool_id Cluster#instance_pool_id}. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterConfig.property.isPinned">IsPinned</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.19.0/docs/resources/cluster#is_pinned Cluster#is_pinned}. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterConfig.property.library">Library</a></code> | <code>object</code> | library block. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterConfig.property.nodeTypeId">NodeTypeId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.19.0/docs/resources/cluster#node_type_id Cluster#node_type_id}. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterConfig.property.numWorkers">NumWorkers</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.19.0/docs/resources/cluster#num_workers Cluster#num_workers}. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterConfig.property.policyId">PolicyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.19.0/docs/resources/cluster#policy_id Cluster#policy_id}. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterConfig.property.runtimeEngine">RuntimeEngine</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.19.0/docs/resources/cluster#runtime_engine Cluster#runtime_engine}. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterConfig.property.singleUserName">SingleUserName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.19.0/docs/resources/cluster#single_user_name Cluster#single_user_name}. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterConfig.property.sparkConf">SparkConf</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.19.0/docs/resources/cluster#spark_conf Cluster#spark_conf}. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterConfig.property.sparkEnvVars">SparkEnvVars</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.19.0/docs/resources/cluster#spark_env_vars Cluster#spark_env_vars}. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterConfig.property.sshPublicKeys">SshPublicKeys</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.19.0/docs/resources/cluster#ssh_public_keys Cluster#ssh_public_keys}. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterTimeouts">ClusterTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterConfig.property.workloadType">WorkloadType</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterWorkloadType">ClusterWorkloadType</a></code> | workload_type block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-databricks.cluster.ClusterConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-databricks.cluster.ClusterConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-databricks.cluster.ClusterConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-databricks.cluster.ClusterConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-databricks.cluster.ClusterConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.cluster.ClusterConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-databricks.cluster.ClusterConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `SparkVersion`<sup>Required</sup> <a name="SparkVersion" id="@cdktf/provider-databricks.cluster.ClusterConfig.property.sparkVersion"></a>

```csharp
public string SparkVersion { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.19.0/docs/resources/cluster#spark_version Cluster#spark_version}.

---

##### `ApplyPolicyDefaultValues`<sup>Optional</sup> <a name="ApplyPolicyDefaultValues" id="@cdktf/provider-databricks.cluster.ClusterConfig.property.applyPolicyDefaultValues"></a>

```csharp
public object ApplyPolicyDefaultValues { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.19.0/docs/resources/cluster#apply_policy_default_values Cluster#apply_policy_default_values}.

---

##### `Autoscale`<sup>Optional</sup> <a name="Autoscale" id="@cdktf/provider-databricks.cluster.ClusterConfig.property.autoscale"></a>

```csharp
public ClusterAutoscale Autoscale { get; set; }
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterAutoscale">ClusterAutoscale</a>

autoscale block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.19.0/docs/resources/cluster#autoscale Cluster#autoscale}

---

##### `AutoterminationMinutes`<sup>Optional</sup> <a name="AutoterminationMinutes" id="@cdktf/provider-databricks.cluster.ClusterConfig.property.autoterminationMinutes"></a>

```csharp
public double AutoterminationMinutes { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.19.0/docs/resources/cluster#autotermination_minutes Cluster#autotermination_minutes}.

---

##### `AwsAttributes`<sup>Optional</sup> <a name="AwsAttributes" id="@cdktf/provider-databricks.cluster.ClusterConfig.property.awsAttributes"></a>

```csharp
public ClusterAwsAttributes AwsAttributes { get; set; }
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterAwsAttributes">ClusterAwsAttributes</a>

aws_attributes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.19.0/docs/resources/cluster#aws_attributes Cluster#aws_attributes}

---

##### `AzureAttributes`<sup>Optional</sup> <a name="AzureAttributes" id="@cdktf/provider-databricks.cluster.ClusterConfig.property.azureAttributes"></a>

```csharp
public ClusterAzureAttributes AzureAttributes { get; set; }
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterAzureAttributes">ClusterAzureAttributes</a>

azure_attributes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.19.0/docs/resources/cluster#azure_attributes Cluster#azure_attributes}

---

##### `ClusterId`<sup>Optional</sup> <a name="ClusterId" id="@cdktf/provider-databricks.cluster.ClusterConfig.property.clusterId"></a>

```csharp
public string ClusterId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.19.0/docs/resources/cluster#cluster_id Cluster#cluster_id}.

---

##### `ClusterLogConf`<sup>Optional</sup> <a name="ClusterLogConf" id="@cdktf/provider-databricks.cluster.ClusterConfig.property.clusterLogConf"></a>

```csharp
public ClusterClusterLogConf ClusterLogConf { get; set; }
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConf">ClusterClusterLogConf</a>

cluster_log_conf block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.19.0/docs/resources/cluster#cluster_log_conf Cluster#cluster_log_conf}

---

##### `ClusterMountInfo`<sup>Optional</sup> <a name="ClusterMountInfo" id="@cdktf/provider-databricks.cluster.ClusterConfig.property.clusterMountInfo"></a>

```csharp
public object ClusterMountInfo { get; set; }
```

- *Type:* object

cluster_mount_info block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.19.0/docs/resources/cluster#cluster_mount_info Cluster#cluster_mount_info}

---

##### `ClusterName`<sup>Optional</sup> <a name="ClusterName" id="@cdktf/provider-databricks.cluster.ClusterConfig.property.clusterName"></a>

```csharp
public string ClusterName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.19.0/docs/resources/cluster#cluster_name Cluster#cluster_name}.

---

##### `CustomTags`<sup>Optional</sup> <a name="CustomTags" id="@cdktf/provider-databricks.cluster.ClusterConfig.property.customTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> CustomTags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.19.0/docs/resources/cluster#custom_tags Cluster#custom_tags}.

---

##### `DataSecurityMode`<sup>Optional</sup> <a name="DataSecurityMode" id="@cdktf/provider-databricks.cluster.ClusterConfig.property.dataSecurityMode"></a>

```csharp
public string DataSecurityMode { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.19.0/docs/resources/cluster#data_security_mode Cluster#data_security_mode}.

---

##### `DockerImage`<sup>Optional</sup> <a name="DockerImage" id="@cdktf/provider-databricks.cluster.ClusterConfig.property.dockerImage"></a>

```csharp
public ClusterDockerImage DockerImage { get; set; }
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterDockerImage">ClusterDockerImage</a>

docker_image block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.19.0/docs/resources/cluster#docker_image Cluster#docker_image}

---

##### `DriverInstancePoolId`<sup>Optional</sup> <a name="DriverInstancePoolId" id="@cdktf/provider-databricks.cluster.ClusterConfig.property.driverInstancePoolId"></a>

```csharp
public string DriverInstancePoolId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.19.0/docs/resources/cluster#driver_instance_pool_id Cluster#driver_instance_pool_id}.

---

##### `DriverNodeTypeId`<sup>Optional</sup> <a name="DriverNodeTypeId" id="@cdktf/provider-databricks.cluster.ClusterConfig.property.driverNodeTypeId"></a>

```csharp
public string DriverNodeTypeId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.19.0/docs/resources/cluster#driver_node_type_id Cluster#driver_node_type_id}.

---

##### `EnableElasticDisk`<sup>Optional</sup> <a name="EnableElasticDisk" id="@cdktf/provider-databricks.cluster.ClusterConfig.property.enableElasticDisk"></a>

```csharp
public object EnableElasticDisk { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.19.0/docs/resources/cluster#enable_elastic_disk Cluster#enable_elastic_disk}.

---

##### `EnableLocalDiskEncryption`<sup>Optional</sup> <a name="EnableLocalDiskEncryption" id="@cdktf/provider-databricks.cluster.ClusterConfig.property.enableLocalDiskEncryption"></a>

```csharp
public object EnableLocalDiskEncryption { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.19.0/docs/resources/cluster#enable_local_disk_encryption Cluster#enable_local_disk_encryption}.

---

##### `GcpAttributes`<sup>Optional</sup> <a name="GcpAttributes" id="@cdktf/provider-databricks.cluster.ClusterConfig.property.gcpAttributes"></a>

```csharp
public ClusterGcpAttributes GcpAttributes { get; set; }
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterGcpAttributes">ClusterGcpAttributes</a>

gcp_attributes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.19.0/docs/resources/cluster#gcp_attributes Cluster#gcp_attributes}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-databricks.cluster.ClusterConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.19.0/docs/resources/cluster#id Cluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IdempotencyToken`<sup>Optional</sup> <a name="IdempotencyToken" id="@cdktf/provider-databricks.cluster.ClusterConfig.property.idempotencyToken"></a>

```csharp
public string IdempotencyToken { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.19.0/docs/resources/cluster#idempotency_token Cluster#idempotency_token}.

---

##### `InitScripts`<sup>Optional</sup> <a name="InitScripts" id="@cdktf/provider-databricks.cluster.ClusterConfig.property.initScripts"></a>

```csharp
public object InitScripts { get; set; }
```

- *Type:* object

init_scripts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.19.0/docs/resources/cluster#init_scripts Cluster#init_scripts}

---

##### `InstancePoolId`<sup>Optional</sup> <a name="InstancePoolId" id="@cdktf/provider-databricks.cluster.ClusterConfig.property.instancePoolId"></a>

```csharp
public string InstancePoolId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.19.0/docs/resources/cluster#instance_pool_id Cluster#instance_pool_id}.

---

##### `IsPinned`<sup>Optional</sup> <a name="IsPinned" id="@cdktf/provider-databricks.cluster.ClusterConfig.property.isPinned"></a>

```csharp
public object IsPinned { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.19.0/docs/resources/cluster#is_pinned Cluster#is_pinned}.

---

##### `Library`<sup>Optional</sup> <a name="Library" id="@cdktf/provider-databricks.cluster.ClusterConfig.property.library"></a>

```csharp
public object Library { get; set; }
```

- *Type:* object

library block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.19.0/docs/resources/cluster#library Cluster#library}

---

##### `NodeTypeId`<sup>Optional</sup> <a name="NodeTypeId" id="@cdktf/provider-databricks.cluster.ClusterConfig.property.nodeTypeId"></a>

```csharp
public string NodeTypeId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.19.0/docs/resources/cluster#node_type_id Cluster#node_type_id}.

---

##### `NumWorkers`<sup>Optional</sup> <a name="NumWorkers" id="@cdktf/provider-databricks.cluster.ClusterConfig.property.numWorkers"></a>

```csharp
public double NumWorkers { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.19.0/docs/resources/cluster#num_workers Cluster#num_workers}.

---

##### `PolicyId`<sup>Optional</sup> <a name="PolicyId" id="@cdktf/provider-databricks.cluster.ClusterConfig.property.policyId"></a>

```csharp
public string PolicyId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.19.0/docs/resources/cluster#policy_id Cluster#policy_id}.

---

##### `RuntimeEngine`<sup>Optional</sup> <a name="RuntimeEngine" id="@cdktf/provider-databricks.cluster.ClusterConfig.property.runtimeEngine"></a>

```csharp
public string RuntimeEngine { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.19.0/docs/resources/cluster#runtime_engine Cluster#runtime_engine}.

---

##### `SingleUserName`<sup>Optional</sup> <a name="SingleUserName" id="@cdktf/provider-databricks.cluster.ClusterConfig.property.singleUserName"></a>

```csharp
public string SingleUserName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.19.0/docs/resources/cluster#single_user_name Cluster#single_user_name}.

---

##### `SparkConf`<sup>Optional</sup> <a name="SparkConf" id="@cdktf/provider-databricks.cluster.ClusterConfig.property.sparkConf"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> SparkConf { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.19.0/docs/resources/cluster#spark_conf Cluster#spark_conf}.

---

##### `SparkEnvVars`<sup>Optional</sup> <a name="SparkEnvVars" id="@cdktf/provider-databricks.cluster.ClusterConfig.property.sparkEnvVars"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> SparkEnvVars { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.19.0/docs/resources/cluster#spark_env_vars Cluster#spark_env_vars}.

---

##### `SshPublicKeys`<sup>Optional</sup> <a name="SshPublicKeys" id="@cdktf/provider-databricks.cluster.ClusterConfig.property.sshPublicKeys"></a>

```csharp
public string[] SshPublicKeys { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.19.0/docs/resources/cluster#ssh_public_keys Cluster#ssh_public_keys}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-databricks.cluster.ClusterConfig.property.timeouts"></a>

```csharp
public ClusterTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterTimeouts">ClusterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.19.0/docs/resources/cluster#timeouts Cluster#timeouts}

---

##### `WorkloadType`<sup>Optional</sup> <a name="WorkloadType" id="@cdktf/provider-databricks.cluster.ClusterConfig.property.workloadType"></a>

```csharp
public ClusterWorkloadType WorkloadType { get; set; }
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterWorkloadType">ClusterWorkloadType</a>

workload_type block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.19.0/docs/resources/cluster#workload_type Cluster#workload_type}

---

### ClusterDockerImage <a name="ClusterDockerImage" id="@cdktf/provider-databricks.cluster.ClusterDockerImage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.cluster.ClusterDockerImage.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new ClusterDockerImage {
    string Url,
    ClusterDockerImageBasicAuth BasicAuth = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterDockerImage.property.url">Url</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.19.0/docs/resources/cluster#url Cluster#url}. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterDockerImage.property.basicAuth">BasicAuth</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterDockerImageBasicAuth">ClusterDockerImageBasicAuth</a></code> | basic_auth block. |

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktf/provider-databricks.cluster.ClusterDockerImage.property.url"></a>

```csharp
public string Url { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.19.0/docs/resources/cluster#url Cluster#url}.

---

##### `BasicAuth`<sup>Optional</sup> <a name="BasicAuth" id="@cdktf/provider-databricks.cluster.ClusterDockerImage.property.basicAuth"></a>

```csharp
public ClusterDockerImageBasicAuth BasicAuth { get; set; }
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterDockerImageBasicAuth">ClusterDockerImageBasicAuth</a>

basic_auth block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.19.0/docs/resources/cluster#basic_auth Cluster#basic_auth}

---

### ClusterDockerImageBasicAuth <a name="ClusterDockerImageBasicAuth" id="@cdktf/provider-databricks.cluster.ClusterDockerImageBasicAuth"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.cluster.ClusterDockerImageBasicAuth.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new ClusterDockerImageBasicAuth {
    string Password,
    string Username
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterDockerImageBasicAuth.property.password">Password</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.19.0/docs/resources/cluster#password Cluster#password}. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterDockerImageBasicAuth.property.username">Username</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.19.0/docs/resources/cluster#username Cluster#username}. |

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-databricks.cluster.ClusterDockerImageBasicAuth.property.password"></a>

```csharp
public string Password { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.19.0/docs/resources/cluster#password Cluster#password}.

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-databricks.cluster.ClusterDockerImageBasicAuth.property.username"></a>

```csharp
public string Username { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.19.0/docs/resources/cluster#username Cluster#username}.

---

### ClusterGcpAttributes <a name="ClusterGcpAttributes" id="@cdktf/provider-databricks.cluster.ClusterGcpAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.cluster.ClusterGcpAttributes.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new ClusterGcpAttributes {
    string Availability = null,
    double BootDiskSize = null,
    string GoogleServiceAccount = null,
    object UsePreemptibleExecutors = null,
    string ZoneId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterGcpAttributes.property.availability">Availability</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.19.0/docs/resources/cluster#availability Cluster#availability}. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterGcpAttributes.property.bootDiskSize">BootDiskSize</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.19.0/docs/resources/cluster#boot_disk_size Cluster#boot_disk_size}. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterGcpAttributes.property.googleServiceAccount">GoogleServiceAccount</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.19.0/docs/resources/cluster#google_service_account Cluster#google_service_account}. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterGcpAttributes.property.usePreemptibleExecutors">UsePreemptibleExecutors</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.19.0/docs/resources/cluster#use_preemptible_executors Cluster#use_preemptible_executors}. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterGcpAttributes.property.zoneId">ZoneId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.19.0/docs/resources/cluster#zone_id Cluster#zone_id}. |

---

##### `Availability`<sup>Optional</sup> <a name="Availability" id="@cdktf/provider-databricks.cluster.ClusterGcpAttributes.property.availability"></a>

```csharp
public string Availability { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.19.0/docs/resources/cluster#availability Cluster#availability}.

---

##### `BootDiskSize`<sup>Optional</sup> <a name="BootDiskSize" id="@cdktf/provider-databricks.cluster.ClusterGcpAttributes.property.bootDiskSize"></a>

```csharp
public double BootDiskSize { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.19.0/docs/resources/cluster#boot_disk_size Cluster#boot_disk_size}.

---

##### `GoogleServiceAccount`<sup>Optional</sup> <a name="GoogleServiceAccount" id="@cdktf/provider-databricks.cluster.ClusterGcpAttributes.property.googleServiceAccount"></a>

```csharp
public string GoogleServiceAccount { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.19.0/docs/resources/cluster#google_service_account Cluster#google_service_account}.

---

##### `UsePreemptibleExecutors`<sup>Optional</sup> <a name="UsePreemptibleExecutors" id="@cdktf/provider-databricks.cluster.ClusterGcpAttributes.property.usePreemptibleExecutors"></a>

```csharp
public object UsePreemptibleExecutors { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.19.0/docs/resources/cluster#use_preemptible_executors Cluster#use_preemptible_executors}.

---

##### `ZoneId`<sup>Optional</sup> <a name="ZoneId" id="@cdktf/provider-databricks.cluster.ClusterGcpAttributes.property.zoneId"></a>

```csharp
public string ZoneId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.19.0/docs/resources/cluster#zone_id Cluster#zone_id}.

---

### ClusterInitScripts <a name="ClusterInitScripts" id="@cdktf/provider-databricks.cluster.ClusterInitScripts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.cluster.ClusterInitScripts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new ClusterInitScripts {
    ClusterInitScriptsAbfss Abfss = null,
    ClusterInitScriptsDbfs Dbfs = null,
    ClusterInitScriptsFile File = null,
    ClusterInitScriptsGcs Gcs = null,
    ClusterInitScriptsS3 S3 = null,
    ClusterInitScriptsWorkspace Workspace = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScripts.property.abfss">Abfss</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsAbfss">ClusterInitScriptsAbfss</a></code> | abfss block. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScripts.property.dbfs">Dbfs</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsDbfs">ClusterInitScriptsDbfs</a></code> | dbfs block. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScripts.property.file">File</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsFile">ClusterInitScriptsFile</a></code> | file block. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScripts.property.gcs">Gcs</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsGcs">ClusterInitScriptsGcs</a></code> | gcs block. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScripts.property.s3">S3</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsS3">ClusterInitScriptsS3</a></code> | s3 block. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScripts.property.workspace">Workspace</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsWorkspace">ClusterInitScriptsWorkspace</a></code> | workspace block. |

---

##### `Abfss`<sup>Optional</sup> <a name="Abfss" id="@cdktf/provider-databricks.cluster.ClusterInitScripts.property.abfss"></a>

```csharp
public ClusterInitScriptsAbfss Abfss { get; set; }
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsAbfss">ClusterInitScriptsAbfss</a>

abfss block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.19.0/docs/resources/cluster#abfss Cluster#abfss}

---

##### `Dbfs`<sup>Optional</sup> <a name="Dbfs" id="@cdktf/provider-databricks.cluster.ClusterInitScripts.property.dbfs"></a>

```csharp
public ClusterInitScriptsDbfs Dbfs { get; set; }
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsDbfs">ClusterInitScriptsDbfs</a>

dbfs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.19.0/docs/resources/cluster#dbfs Cluster#dbfs}

---

##### `File`<sup>Optional</sup> <a name="File" id="@cdktf/provider-databricks.cluster.ClusterInitScripts.property.file"></a>

```csharp
public ClusterInitScriptsFile File { get; set; }
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsFile">ClusterInitScriptsFile</a>

file block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.19.0/docs/resources/cluster#file Cluster#file}

---

##### `Gcs`<sup>Optional</sup> <a name="Gcs" id="@cdktf/provider-databricks.cluster.ClusterInitScripts.property.gcs"></a>

```csharp
public ClusterInitScriptsGcs Gcs { get; set; }
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsGcs">ClusterInitScriptsGcs</a>

gcs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.19.0/docs/resources/cluster#gcs Cluster#gcs}

---

##### `S3`<sup>Optional</sup> <a name="S3" id="@cdktf/provider-databricks.cluster.ClusterInitScripts.property.s3"></a>

```csharp
public ClusterInitScriptsS3 S3 { get; set; }
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsS3">ClusterInitScriptsS3</a>

s3 block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.19.0/docs/resources/cluster#s3 Cluster#s3}

---

##### `Workspace`<sup>Optional</sup> <a name="Workspace" id="@cdktf/provider-databricks.cluster.ClusterInitScripts.property.workspace"></a>

```csharp
public ClusterInitScriptsWorkspace Workspace { get; set; }
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsWorkspace">ClusterInitScriptsWorkspace</a>

workspace block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.19.0/docs/resources/cluster#workspace Cluster#workspace}

---

### ClusterInitScriptsAbfss <a name="ClusterInitScriptsAbfss" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsAbfss"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsAbfss.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new ClusterInitScriptsAbfss {
    string Destination = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsAbfss.property.destination">Destination</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.19.0/docs/resources/cluster#destination Cluster#destination}. |

---

##### `Destination`<sup>Optional</sup> <a name="Destination" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsAbfss.property.destination"></a>

```csharp
public string Destination { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.19.0/docs/resources/cluster#destination Cluster#destination}.

---

### ClusterInitScriptsDbfs <a name="ClusterInitScriptsDbfs" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsDbfs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsDbfs.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new ClusterInitScriptsDbfs {
    string Destination
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsDbfs.property.destination">Destination</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.19.0/docs/resources/cluster#destination Cluster#destination}. |

---

##### `Destination`<sup>Required</sup> <a name="Destination" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsDbfs.property.destination"></a>

```csharp
public string Destination { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.19.0/docs/resources/cluster#destination Cluster#destination}.

---

### ClusterInitScriptsFile <a name="ClusterInitScriptsFile" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsFile"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsFile.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new ClusterInitScriptsFile {
    string Destination = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsFile.property.destination">Destination</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.19.0/docs/resources/cluster#destination Cluster#destination}. |

---

##### `Destination`<sup>Optional</sup> <a name="Destination" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsFile.property.destination"></a>

```csharp
public string Destination { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.19.0/docs/resources/cluster#destination Cluster#destination}.

---

### ClusterInitScriptsGcs <a name="ClusterInitScriptsGcs" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsGcs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsGcs.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new ClusterInitScriptsGcs {
    string Destination = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsGcs.property.destination">Destination</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.19.0/docs/resources/cluster#destination Cluster#destination}. |

---

##### `Destination`<sup>Optional</sup> <a name="Destination" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsGcs.property.destination"></a>

```csharp
public string Destination { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.19.0/docs/resources/cluster#destination Cluster#destination}.

---

### ClusterInitScriptsS3 <a name="ClusterInitScriptsS3" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsS3"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsS3.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new ClusterInitScriptsS3 {
    string Destination,
    string CannedAcl = null,
    object EnableEncryption = null,
    string EncryptionType = null,
    string Endpoint = null,
    string KmsKey = null,
    string Region = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsS3.property.destination">Destination</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.19.0/docs/resources/cluster#destination Cluster#destination}. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsS3.property.cannedAcl">CannedAcl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.19.0/docs/resources/cluster#canned_acl Cluster#canned_acl}. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsS3.property.enableEncryption">EnableEncryption</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.19.0/docs/resources/cluster#enable_encryption Cluster#enable_encryption}. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsS3.property.encryptionType">EncryptionType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.19.0/docs/resources/cluster#encryption_type Cluster#encryption_type}. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsS3.property.endpoint">Endpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.19.0/docs/resources/cluster#endpoint Cluster#endpoint}. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsS3.property.kmsKey">KmsKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.19.0/docs/resources/cluster#kms_key Cluster#kms_key}. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsS3.property.region">Region</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.19.0/docs/resources/cluster#region Cluster#region}. |

---

##### `Destination`<sup>Required</sup> <a name="Destination" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsS3.property.destination"></a>

```csharp
public string Destination { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.19.0/docs/resources/cluster#destination Cluster#destination}.

---

##### `CannedAcl`<sup>Optional</sup> <a name="CannedAcl" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsS3.property.cannedAcl"></a>

```csharp
public string CannedAcl { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.19.0/docs/resources/cluster#canned_acl Cluster#canned_acl}.

---

##### `EnableEncryption`<sup>Optional</sup> <a name="EnableEncryption" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsS3.property.enableEncryption"></a>

```csharp
public object EnableEncryption { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.19.0/docs/resources/cluster#enable_encryption Cluster#enable_encryption}.

---

##### `EncryptionType`<sup>Optional</sup> <a name="EncryptionType" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsS3.property.encryptionType"></a>

```csharp
public string EncryptionType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.19.0/docs/resources/cluster#encryption_type Cluster#encryption_type}.

---

##### `Endpoint`<sup>Optional</sup> <a name="Endpoint" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsS3.property.endpoint"></a>

```csharp
public string Endpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.19.0/docs/resources/cluster#endpoint Cluster#endpoint}.

---

##### `KmsKey`<sup>Optional</sup> <a name="KmsKey" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsS3.property.kmsKey"></a>

```csharp
public string KmsKey { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.19.0/docs/resources/cluster#kms_key Cluster#kms_key}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsS3.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.19.0/docs/resources/cluster#region Cluster#region}.

---

### ClusterInitScriptsWorkspace <a name="ClusterInitScriptsWorkspace" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsWorkspace"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsWorkspace.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new ClusterInitScriptsWorkspace {
    string Destination = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsWorkspace.property.destination">Destination</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.19.0/docs/resources/cluster#destination Cluster#destination}. |

---

##### `Destination`<sup>Optional</sup> <a name="Destination" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsWorkspace.property.destination"></a>

```csharp
public string Destination { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.19.0/docs/resources/cluster#destination Cluster#destination}.

---

### ClusterLibrary <a name="ClusterLibrary" id="@cdktf/provider-databricks.cluster.ClusterLibrary"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.cluster.ClusterLibrary.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new ClusterLibrary {
    ClusterLibraryCran Cran = null,
    string Egg = null,
    string Jar = null,
    ClusterLibraryMaven Maven = null,
    ClusterLibraryPypi Pypi = null,
    string Whl = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibrary.property.cran">Cran</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryCran">ClusterLibraryCran</a></code> | cran block. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibrary.property.egg">Egg</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.19.0/docs/resources/cluster#egg Cluster#egg}. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibrary.property.jar">Jar</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.19.0/docs/resources/cluster#jar Cluster#jar}. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibrary.property.maven">Maven</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryMaven">ClusterLibraryMaven</a></code> | maven block. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibrary.property.pypi">Pypi</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryPypi">ClusterLibraryPypi</a></code> | pypi block. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibrary.property.whl">Whl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.19.0/docs/resources/cluster#whl Cluster#whl}. |

---

##### `Cran`<sup>Optional</sup> <a name="Cran" id="@cdktf/provider-databricks.cluster.ClusterLibrary.property.cran"></a>

```csharp
public ClusterLibraryCran Cran { get; set; }
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterLibraryCran">ClusterLibraryCran</a>

cran block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.19.0/docs/resources/cluster#cran Cluster#cran}

---

##### `Egg`<sup>Optional</sup> <a name="Egg" id="@cdktf/provider-databricks.cluster.ClusterLibrary.property.egg"></a>

```csharp
public string Egg { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.19.0/docs/resources/cluster#egg Cluster#egg}.

---

##### `Jar`<sup>Optional</sup> <a name="Jar" id="@cdktf/provider-databricks.cluster.ClusterLibrary.property.jar"></a>

```csharp
public string Jar { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.19.0/docs/resources/cluster#jar Cluster#jar}.

---

##### `Maven`<sup>Optional</sup> <a name="Maven" id="@cdktf/provider-databricks.cluster.ClusterLibrary.property.maven"></a>

```csharp
public ClusterLibraryMaven Maven { get; set; }
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterLibraryMaven">ClusterLibraryMaven</a>

maven block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.19.0/docs/resources/cluster#maven Cluster#maven}

---

##### `Pypi`<sup>Optional</sup> <a name="Pypi" id="@cdktf/provider-databricks.cluster.ClusterLibrary.property.pypi"></a>

```csharp
public ClusterLibraryPypi Pypi { get; set; }
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterLibraryPypi">ClusterLibraryPypi</a>

pypi block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.19.0/docs/resources/cluster#pypi Cluster#pypi}

---

##### `Whl`<sup>Optional</sup> <a name="Whl" id="@cdktf/provider-databricks.cluster.ClusterLibrary.property.whl"></a>

```csharp
public string Whl { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.19.0/docs/resources/cluster#whl Cluster#whl}.

---

### ClusterLibraryCran <a name="ClusterLibraryCran" id="@cdktf/provider-databricks.cluster.ClusterLibraryCran"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.cluster.ClusterLibraryCran.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new ClusterLibraryCran {
    string Package,
    string Repo = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryCran.property.package">Package</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.19.0/docs/resources/cluster#package Cluster#package}. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryCran.property.repo">Repo</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.19.0/docs/resources/cluster#repo Cluster#repo}. |

---

##### `Package`<sup>Required</sup> <a name="Package" id="@cdktf/provider-databricks.cluster.ClusterLibraryCran.property.package"></a>

```csharp
public string Package { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.19.0/docs/resources/cluster#package Cluster#package}.

---

##### `Repo`<sup>Optional</sup> <a name="Repo" id="@cdktf/provider-databricks.cluster.ClusterLibraryCran.property.repo"></a>

```csharp
public string Repo { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.19.0/docs/resources/cluster#repo Cluster#repo}.

---

### ClusterLibraryMaven <a name="ClusterLibraryMaven" id="@cdktf/provider-databricks.cluster.ClusterLibraryMaven"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.cluster.ClusterLibraryMaven.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new ClusterLibraryMaven {
    string Coordinates,
    string[] Exclusions = null,
    string Repo = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryMaven.property.coordinates">Coordinates</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.19.0/docs/resources/cluster#coordinates Cluster#coordinates}. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryMaven.property.exclusions">Exclusions</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.19.0/docs/resources/cluster#exclusions Cluster#exclusions}. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryMaven.property.repo">Repo</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.19.0/docs/resources/cluster#repo Cluster#repo}. |

---

##### `Coordinates`<sup>Required</sup> <a name="Coordinates" id="@cdktf/provider-databricks.cluster.ClusterLibraryMaven.property.coordinates"></a>

```csharp
public string Coordinates { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.19.0/docs/resources/cluster#coordinates Cluster#coordinates}.

---

##### `Exclusions`<sup>Optional</sup> <a name="Exclusions" id="@cdktf/provider-databricks.cluster.ClusterLibraryMaven.property.exclusions"></a>

```csharp
public string[] Exclusions { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.19.0/docs/resources/cluster#exclusions Cluster#exclusions}.

---

##### `Repo`<sup>Optional</sup> <a name="Repo" id="@cdktf/provider-databricks.cluster.ClusterLibraryMaven.property.repo"></a>

```csharp
public string Repo { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.19.0/docs/resources/cluster#repo Cluster#repo}.

---

### ClusterLibraryPypi <a name="ClusterLibraryPypi" id="@cdktf/provider-databricks.cluster.ClusterLibraryPypi"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.cluster.ClusterLibraryPypi.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new ClusterLibraryPypi {
    string Package,
    string Repo = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryPypi.property.package">Package</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.19.0/docs/resources/cluster#package Cluster#package}. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryPypi.property.repo">Repo</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.19.0/docs/resources/cluster#repo Cluster#repo}. |

---

##### `Package`<sup>Required</sup> <a name="Package" id="@cdktf/provider-databricks.cluster.ClusterLibraryPypi.property.package"></a>

```csharp
public string Package { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.19.0/docs/resources/cluster#package Cluster#package}.

---

##### `Repo`<sup>Optional</sup> <a name="Repo" id="@cdktf/provider-databricks.cluster.ClusterLibraryPypi.property.repo"></a>

```csharp
public string Repo { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.19.0/docs/resources/cluster#repo Cluster#repo}.

---

### ClusterTimeouts <a name="ClusterTimeouts" id="@cdktf/provider-databricks.cluster.ClusterTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.cluster.ClusterTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new ClusterTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.19.0/docs/resources/cluster#create Cluster#create}. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.19.0/docs/resources/cluster#delete Cluster#delete}. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.19.0/docs/resources/cluster#update Cluster#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-databricks.cluster.ClusterTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.19.0/docs/resources/cluster#create Cluster#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-databricks.cluster.ClusterTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.19.0/docs/resources/cluster#delete Cluster#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-databricks.cluster.ClusterTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.19.0/docs/resources/cluster#update Cluster#update}.

---

### ClusterWorkloadType <a name="ClusterWorkloadType" id="@cdktf/provider-databricks.cluster.ClusterWorkloadType"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.cluster.ClusterWorkloadType.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new ClusterWorkloadType {
    ClusterWorkloadTypeClients Clients
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterWorkloadType.property.clients">Clients</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterWorkloadTypeClients">ClusterWorkloadTypeClients</a></code> | clients block. |

---

##### `Clients`<sup>Required</sup> <a name="Clients" id="@cdktf/provider-databricks.cluster.ClusterWorkloadType.property.clients"></a>

```csharp
public ClusterWorkloadTypeClients Clients { get; set; }
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterWorkloadTypeClients">ClusterWorkloadTypeClients</a>

clients block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.19.0/docs/resources/cluster#clients Cluster#clients}

---

### ClusterWorkloadTypeClients <a name="ClusterWorkloadTypeClients" id="@cdktf/provider-databricks.cluster.ClusterWorkloadTypeClients"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.cluster.ClusterWorkloadTypeClients.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new ClusterWorkloadTypeClients {
    object Jobs = null,
    object Notebooks = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterWorkloadTypeClients.property.jobs">Jobs</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.19.0/docs/resources/cluster#jobs Cluster#jobs}. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterWorkloadTypeClients.property.notebooks">Notebooks</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.19.0/docs/resources/cluster#notebooks Cluster#notebooks}. |

---

##### `Jobs`<sup>Optional</sup> <a name="Jobs" id="@cdktf/provider-databricks.cluster.ClusterWorkloadTypeClients.property.jobs"></a>

```csharp
public object Jobs { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.19.0/docs/resources/cluster#jobs Cluster#jobs}.

---

##### `Notebooks`<sup>Optional</sup> <a name="Notebooks" id="@cdktf/provider-databricks.cluster.ClusterWorkloadTypeClients.property.notebooks"></a>

```csharp
public object Notebooks { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.19.0/docs/resources/cluster#notebooks Cluster#notebooks}.

---

## Classes <a name="Classes" id="Classes"></a>

### ClusterAutoscaleOutputReference <a name="ClusterAutoscaleOutputReference" id="@cdktf/provider-databricks.cluster.ClusterAutoscaleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.cluster.ClusterAutoscaleOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new ClusterAutoscaleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAutoscaleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAutoscaleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.cluster.ClusterAutoscaleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterAutoscaleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAutoscaleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAutoscaleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAutoscaleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAutoscaleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAutoscaleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAutoscaleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAutoscaleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAutoscaleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAutoscaleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAutoscaleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAutoscaleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAutoscaleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAutoscaleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAutoscaleOutputReference.resetMaxWorkers">ResetMaxWorkers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAutoscaleOutputReference.resetMinWorkers">ResetMinWorkers</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.cluster.ClusterAutoscaleOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterAutoscaleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterAutoscaleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.cluster.ClusterAutoscaleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterAutoscaleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterAutoscaleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterAutoscaleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.cluster.ClusterAutoscaleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterAutoscaleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.cluster.ClusterAutoscaleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterAutoscaleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.cluster.ClusterAutoscaleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterAutoscaleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterAutoscaleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterAutoscaleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.cluster.ClusterAutoscaleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterAutoscaleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterAutoscaleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterAutoscaleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.cluster.ClusterAutoscaleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.cluster.ClusterAutoscaleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.cluster.ClusterAutoscaleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.cluster.ClusterAutoscaleOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.cluster.ClusterAutoscaleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMaxWorkers` <a name="ResetMaxWorkers" id="@cdktf/provider-databricks.cluster.ClusterAutoscaleOutputReference.resetMaxWorkers"></a>

```csharp
private void ResetMaxWorkers()
```

##### `ResetMinWorkers` <a name="ResetMinWorkers" id="@cdktf/provider-databricks.cluster.ClusterAutoscaleOutputReference.resetMinWorkers"></a>

```csharp
private void ResetMinWorkers()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAutoscaleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAutoscaleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAutoscaleOutputReference.property.maxWorkersInput">MaxWorkersInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAutoscaleOutputReference.property.minWorkersInput">MinWorkersInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAutoscaleOutputReference.property.maxWorkers">MaxWorkers</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAutoscaleOutputReference.property.minWorkers">MinWorkers</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAutoscaleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterAutoscale">ClusterAutoscale</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.cluster.ClusterAutoscaleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.cluster.ClusterAutoscaleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MaxWorkersInput`<sup>Optional</sup> <a name="MaxWorkersInput" id="@cdktf/provider-databricks.cluster.ClusterAutoscaleOutputReference.property.maxWorkersInput"></a>

```csharp
public double MaxWorkersInput { get; }
```

- *Type:* double

---

##### `MinWorkersInput`<sup>Optional</sup> <a name="MinWorkersInput" id="@cdktf/provider-databricks.cluster.ClusterAutoscaleOutputReference.property.minWorkersInput"></a>

```csharp
public double MinWorkersInput { get; }
```

- *Type:* double

---

##### `MaxWorkers`<sup>Required</sup> <a name="MaxWorkers" id="@cdktf/provider-databricks.cluster.ClusterAutoscaleOutputReference.property.maxWorkers"></a>

```csharp
public double MaxWorkers { get; }
```

- *Type:* double

---

##### `MinWorkers`<sup>Required</sup> <a name="MinWorkers" id="@cdktf/provider-databricks.cluster.ClusterAutoscaleOutputReference.property.minWorkers"></a>

```csharp
public double MinWorkers { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.cluster.ClusterAutoscaleOutputReference.property.internalValue"></a>

```csharp
public ClusterAutoscale InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterAutoscale">ClusterAutoscale</a>

---


### ClusterAwsAttributesOutputReference <a name="ClusterAwsAttributesOutputReference" id="@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new ClusterAwsAttributesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.resetAvailability">ResetAvailability</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.resetEbsVolumeCount">ResetEbsVolumeCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.resetEbsVolumeSize">ResetEbsVolumeSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.resetEbsVolumeType">ResetEbsVolumeType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.resetFirstOnDemand">ResetFirstOnDemand</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.resetInstanceProfileArn">ResetInstanceProfileArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.resetSpotBidPricePercent">ResetSpotBidPricePercent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.resetZoneId">ResetZoneId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAvailability` <a name="ResetAvailability" id="@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.resetAvailability"></a>

```csharp
private void ResetAvailability()
```

##### `ResetEbsVolumeCount` <a name="ResetEbsVolumeCount" id="@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.resetEbsVolumeCount"></a>

```csharp
private void ResetEbsVolumeCount()
```

##### `ResetEbsVolumeSize` <a name="ResetEbsVolumeSize" id="@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.resetEbsVolumeSize"></a>

```csharp
private void ResetEbsVolumeSize()
```

##### `ResetEbsVolumeType` <a name="ResetEbsVolumeType" id="@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.resetEbsVolumeType"></a>

```csharp
private void ResetEbsVolumeType()
```

##### `ResetFirstOnDemand` <a name="ResetFirstOnDemand" id="@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.resetFirstOnDemand"></a>

```csharp
private void ResetFirstOnDemand()
```

##### `ResetInstanceProfileArn` <a name="ResetInstanceProfileArn" id="@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.resetInstanceProfileArn"></a>

```csharp
private void ResetInstanceProfileArn()
```

##### `ResetSpotBidPricePercent` <a name="ResetSpotBidPricePercent" id="@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.resetSpotBidPricePercent"></a>

```csharp
private void ResetSpotBidPricePercent()
```

##### `ResetZoneId` <a name="ResetZoneId" id="@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.resetZoneId"></a>

```csharp
private void ResetZoneId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.property.availabilityInput">AvailabilityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.property.ebsVolumeCountInput">EbsVolumeCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.property.ebsVolumeSizeInput">EbsVolumeSizeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.property.ebsVolumeTypeInput">EbsVolumeTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.property.firstOnDemandInput">FirstOnDemandInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.property.instanceProfileArnInput">InstanceProfileArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.property.spotBidPricePercentInput">SpotBidPricePercentInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.property.zoneIdInput">ZoneIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.property.availability">Availability</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.property.ebsVolumeCount">EbsVolumeCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.property.ebsVolumeSize">EbsVolumeSize</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.property.ebsVolumeType">EbsVolumeType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.property.firstOnDemand">FirstOnDemand</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.property.instanceProfileArn">InstanceProfileArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.property.spotBidPricePercent">SpotBidPricePercent</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.property.zoneId">ZoneId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterAwsAttributes">ClusterAwsAttributes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AvailabilityInput`<sup>Optional</sup> <a name="AvailabilityInput" id="@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.property.availabilityInput"></a>

```csharp
public string AvailabilityInput { get; }
```

- *Type:* string

---

##### `EbsVolumeCountInput`<sup>Optional</sup> <a name="EbsVolumeCountInput" id="@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.property.ebsVolumeCountInput"></a>

```csharp
public double EbsVolumeCountInput { get; }
```

- *Type:* double

---

##### `EbsVolumeSizeInput`<sup>Optional</sup> <a name="EbsVolumeSizeInput" id="@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.property.ebsVolumeSizeInput"></a>

```csharp
public double EbsVolumeSizeInput { get; }
```

- *Type:* double

---

##### `EbsVolumeTypeInput`<sup>Optional</sup> <a name="EbsVolumeTypeInput" id="@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.property.ebsVolumeTypeInput"></a>

```csharp
public string EbsVolumeTypeInput { get; }
```

- *Type:* string

---

##### `FirstOnDemandInput`<sup>Optional</sup> <a name="FirstOnDemandInput" id="@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.property.firstOnDemandInput"></a>

```csharp
public double FirstOnDemandInput { get; }
```

- *Type:* double

---

##### `InstanceProfileArnInput`<sup>Optional</sup> <a name="InstanceProfileArnInput" id="@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.property.instanceProfileArnInput"></a>

```csharp
public string InstanceProfileArnInput { get; }
```

- *Type:* string

---

##### `SpotBidPricePercentInput`<sup>Optional</sup> <a name="SpotBidPricePercentInput" id="@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.property.spotBidPricePercentInput"></a>

```csharp
public double SpotBidPricePercentInput { get; }
```

- *Type:* double

---

##### `ZoneIdInput`<sup>Optional</sup> <a name="ZoneIdInput" id="@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.property.zoneIdInput"></a>

```csharp
public string ZoneIdInput { get; }
```

- *Type:* string

---

##### `Availability`<sup>Required</sup> <a name="Availability" id="@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.property.availability"></a>

```csharp
public string Availability { get; }
```

- *Type:* string

---

##### `EbsVolumeCount`<sup>Required</sup> <a name="EbsVolumeCount" id="@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.property.ebsVolumeCount"></a>

```csharp
public double EbsVolumeCount { get; }
```

- *Type:* double

---

##### `EbsVolumeSize`<sup>Required</sup> <a name="EbsVolumeSize" id="@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.property.ebsVolumeSize"></a>

```csharp
public double EbsVolumeSize { get; }
```

- *Type:* double

---

##### `EbsVolumeType`<sup>Required</sup> <a name="EbsVolumeType" id="@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.property.ebsVolumeType"></a>

```csharp
public string EbsVolumeType { get; }
```

- *Type:* string

---

##### `FirstOnDemand`<sup>Required</sup> <a name="FirstOnDemand" id="@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.property.firstOnDemand"></a>

```csharp
public double FirstOnDemand { get; }
```

- *Type:* double

---

##### `InstanceProfileArn`<sup>Required</sup> <a name="InstanceProfileArn" id="@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.property.instanceProfileArn"></a>

```csharp
public string InstanceProfileArn { get; }
```

- *Type:* string

---

##### `SpotBidPricePercent`<sup>Required</sup> <a name="SpotBidPricePercent" id="@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.property.spotBidPricePercent"></a>

```csharp
public double SpotBidPricePercent { get; }
```

- *Type:* double

---

##### `ZoneId`<sup>Required</sup> <a name="ZoneId" id="@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.property.zoneId"></a>

```csharp
public string ZoneId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.property.internalValue"></a>

```csharp
public ClusterAwsAttributes InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterAwsAttributes">ClusterAwsAttributes</a>

---


### ClusterAzureAttributesOutputReference <a name="ClusterAzureAttributesOutputReference" id="@cdktf/provider-databricks.cluster.ClusterAzureAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.cluster.ClusterAzureAttributesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new ClusterAzureAttributesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAzureAttributesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAzureAttributesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.cluster.ClusterAzureAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterAzureAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAzureAttributesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAzureAttributesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAzureAttributesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAzureAttributesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAzureAttributesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAzureAttributesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAzureAttributesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAzureAttributesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAzureAttributesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAzureAttributesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAzureAttributesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAzureAttributesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAzureAttributesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAzureAttributesOutputReference.resetAvailability">ResetAvailability</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAzureAttributesOutputReference.resetFirstOnDemand">ResetFirstOnDemand</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAzureAttributesOutputReference.resetSpotBidMaxPrice">ResetSpotBidMaxPrice</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.cluster.ClusterAzureAttributesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterAzureAttributesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterAzureAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.cluster.ClusterAzureAttributesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterAzureAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterAzureAttributesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterAzureAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.cluster.ClusterAzureAttributesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterAzureAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.cluster.ClusterAzureAttributesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterAzureAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.cluster.ClusterAzureAttributesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterAzureAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterAzureAttributesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterAzureAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.cluster.ClusterAzureAttributesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterAzureAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterAzureAttributesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterAzureAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.cluster.ClusterAzureAttributesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.cluster.ClusterAzureAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.cluster.ClusterAzureAttributesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.cluster.ClusterAzureAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.cluster.ClusterAzureAttributesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAvailability` <a name="ResetAvailability" id="@cdktf/provider-databricks.cluster.ClusterAzureAttributesOutputReference.resetAvailability"></a>

```csharp
private void ResetAvailability()
```

##### `ResetFirstOnDemand` <a name="ResetFirstOnDemand" id="@cdktf/provider-databricks.cluster.ClusterAzureAttributesOutputReference.resetFirstOnDemand"></a>

```csharp
private void ResetFirstOnDemand()
```

##### `ResetSpotBidMaxPrice` <a name="ResetSpotBidMaxPrice" id="@cdktf/provider-databricks.cluster.ClusterAzureAttributesOutputReference.resetSpotBidMaxPrice"></a>

```csharp
private void ResetSpotBidMaxPrice()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAzureAttributesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAzureAttributesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAzureAttributesOutputReference.property.availabilityInput">AvailabilityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAzureAttributesOutputReference.property.firstOnDemandInput">FirstOnDemandInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAzureAttributesOutputReference.property.spotBidMaxPriceInput">SpotBidMaxPriceInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAzureAttributesOutputReference.property.availability">Availability</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAzureAttributesOutputReference.property.firstOnDemand">FirstOnDemand</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAzureAttributesOutputReference.property.spotBidMaxPrice">SpotBidMaxPrice</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAzureAttributesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterAzureAttributes">ClusterAzureAttributes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.cluster.ClusterAzureAttributesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.cluster.ClusterAzureAttributesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AvailabilityInput`<sup>Optional</sup> <a name="AvailabilityInput" id="@cdktf/provider-databricks.cluster.ClusterAzureAttributesOutputReference.property.availabilityInput"></a>

```csharp
public string AvailabilityInput { get; }
```

- *Type:* string

---

##### `FirstOnDemandInput`<sup>Optional</sup> <a name="FirstOnDemandInput" id="@cdktf/provider-databricks.cluster.ClusterAzureAttributesOutputReference.property.firstOnDemandInput"></a>

```csharp
public double FirstOnDemandInput { get; }
```

- *Type:* double

---

##### `SpotBidMaxPriceInput`<sup>Optional</sup> <a name="SpotBidMaxPriceInput" id="@cdktf/provider-databricks.cluster.ClusterAzureAttributesOutputReference.property.spotBidMaxPriceInput"></a>

```csharp
public double SpotBidMaxPriceInput { get; }
```

- *Type:* double

---

##### `Availability`<sup>Required</sup> <a name="Availability" id="@cdktf/provider-databricks.cluster.ClusterAzureAttributesOutputReference.property.availability"></a>

```csharp
public string Availability { get; }
```

- *Type:* string

---

##### `FirstOnDemand`<sup>Required</sup> <a name="FirstOnDemand" id="@cdktf/provider-databricks.cluster.ClusterAzureAttributesOutputReference.property.firstOnDemand"></a>

```csharp
public double FirstOnDemand { get; }
```

- *Type:* double

---

##### `SpotBidMaxPrice`<sup>Required</sup> <a name="SpotBidMaxPrice" id="@cdktf/provider-databricks.cluster.ClusterAzureAttributesOutputReference.property.spotBidMaxPrice"></a>

```csharp
public double SpotBidMaxPrice { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.cluster.ClusterAzureAttributesOutputReference.property.internalValue"></a>

```csharp
public ClusterAzureAttributes InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterAzureAttributes">ClusterAzureAttributes</a>

---


### ClusterClusterLogConfDbfsOutputReference <a name="ClusterClusterLogConfDbfsOutputReference" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfDbfsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfDbfsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new ClusterClusterLogConfDbfsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfDbfsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfDbfsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfDbfsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfDbfsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfDbfsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfDbfsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfDbfsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfDbfsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfDbfsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfDbfsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfDbfsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfDbfsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfDbfsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfDbfsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfDbfsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfDbfsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfDbfsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfDbfsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfDbfsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfDbfsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfDbfsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfDbfsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfDbfsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfDbfsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfDbfsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfDbfsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfDbfsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfDbfsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfDbfsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfDbfsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfDbfsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfDbfsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfDbfsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfDbfsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfDbfsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfDbfsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfDbfsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfDbfsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfDbfsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfDbfsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfDbfsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfDbfsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfDbfsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfDbfsOutputReference.property.destinationInput">DestinationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfDbfsOutputReference.property.destination">Destination</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfDbfsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfDbfs">ClusterClusterLogConfDbfs</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfDbfsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfDbfsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DestinationInput`<sup>Optional</sup> <a name="DestinationInput" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfDbfsOutputReference.property.destinationInput"></a>

```csharp
public string DestinationInput { get; }
```

- *Type:* string

---

##### `Destination`<sup>Required</sup> <a name="Destination" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfDbfsOutputReference.property.destination"></a>

```csharp
public string Destination { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfDbfsOutputReference.property.internalValue"></a>

```csharp
public ClusterClusterLogConfDbfs InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfDbfs">ClusterClusterLogConfDbfs</a>

---


### ClusterClusterLogConfOutputReference <a name="ClusterClusterLogConfOutputReference" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new ClusterClusterLogConfOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfOutputReference.putDbfs">PutDbfs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfOutputReference.putS3">PutS3</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfOutputReference.resetDbfs">ResetDbfs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfOutputReference.resetS3">ResetS3</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDbfs` <a name="PutDbfs" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfOutputReference.putDbfs"></a>

```csharp
private void PutDbfs(ClusterClusterLogConfDbfs Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfOutputReference.putDbfs.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfDbfs">ClusterClusterLogConfDbfs</a>

---

##### `PutS3` <a name="PutS3" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfOutputReference.putS3"></a>

```csharp
private void PutS3(ClusterClusterLogConfS3 Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfOutputReference.putS3.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3">ClusterClusterLogConfS3</a>

---

##### `ResetDbfs` <a name="ResetDbfs" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfOutputReference.resetDbfs"></a>

```csharp
private void ResetDbfs()
```

##### `ResetS3` <a name="ResetS3" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfOutputReference.resetS3"></a>

```csharp
private void ResetS3()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfOutputReference.property.dbfs">Dbfs</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfDbfsOutputReference">ClusterClusterLogConfDbfsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfOutputReference.property.s3">S3</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference">ClusterClusterLogConfS3OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfOutputReference.property.dbfsInput">DbfsInput</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfDbfs">ClusterClusterLogConfDbfs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfOutputReference.property.s3Input">S3Input</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3">ClusterClusterLogConfS3</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConf">ClusterClusterLogConf</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Dbfs`<sup>Required</sup> <a name="Dbfs" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfOutputReference.property.dbfs"></a>

```csharp
public ClusterClusterLogConfDbfsOutputReference Dbfs { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfDbfsOutputReference">ClusterClusterLogConfDbfsOutputReference</a>

---

##### `S3`<sup>Required</sup> <a name="S3" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfOutputReference.property.s3"></a>

```csharp
public ClusterClusterLogConfS3OutputReference S3 { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference">ClusterClusterLogConfS3OutputReference</a>

---

##### `DbfsInput`<sup>Optional</sup> <a name="DbfsInput" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfOutputReference.property.dbfsInput"></a>

```csharp
public ClusterClusterLogConfDbfs DbfsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfDbfs">ClusterClusterLogConfDbfs</a>

---

##### `S3Input`<sup>Optional</sup> <a name="S3Input" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfOutputReference.property.s3Input"></a>

```csharp
public ClusterClusterLogConfS3 S3Input { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3">ClusterClusterLogConfS3</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfOutputReference.property.internalValue"></a>

```csharp
public ClusterClusterLogConf InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConf">ClusterClusterLogConf</a>

---


### ClusterClusterLogConfS3OutputReference <a name="ClusterClusterLogConfS3OutputReference" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new ClusterClusterLogConfS3OutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.resetCannedAcl">ResetCannedAcl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.resetEnableEncryption">ResetEnableEncryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.resetEncryptionType">ResetEncryptionType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.resetEndpoint">ResetEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.resetKmsKey">ResetKmsKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.resetRegion">ResetRegion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCannedAcl` <a name="ResetCannedAcl" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.resetCannedAcl"></a>

```csharp
private void ResetCannedAcl()
```

##### `ResetEnableEncryption` <a name="ResetEnableEncryption" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.resetEnableEncryption"></a>

```csharp
private void ResetEnableEncryption()
```

##### `ResetEncryptionType` <a name="ResetEncryptionType" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.resetEncryptionType"></a>

```csharp
private void ResetEncryptionType()
```

##### `ResetEndpoint` <a name="ResetEndpoint" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.resetEndpoint"></a>

```csharp
private void ResetEndpoint()
```

##### `ResetKmsKey` <a name="ResetKmsKey" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.resetKmsKey"></a>

```csharp
private void ResetKmsKey()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.resetRegion"></a>

```csharp
private void ResetRegion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.property.cannedAclInput">CannedAclInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.property.destinationInput">DestinationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.property.enableEncryptionInput">EnableEncryptionInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.property.encryptionTypeInput">EncryptionTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.property.endpointInput">EndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.property.kmsKeyInput">KmsKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.property.cannedAcl">CannedAcl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.property.destination">Destination</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.property.enableEncryption">EnableEncryption</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.property.encryptionType">EncryptionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.property.endpoint">Endpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.property.kmsKey">KmsKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3">ClusterClusterLogConfS3</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CannedAclInput`<sup>Optional</sup> <a name="CannedAclInput" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.property.cannedAclInput"></a>

```csharp
public string CannedAclInput { get; }
```

- *Type:* string

---

##### `DestinationInput`<sup>Optional</sup> <a name="DestinationInput" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.property.destinationInput"></a>

```csharp
public string DestinationInput { get; }
```

- *Type:* string

---

##### `EnableEncryptionInput`<sup>Optional</sup> <a name="EnableEncryptionInput" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.property.enableEncryptionInput"></a>

```csharp
public object EnableEncryptionInput { get; }
```

- *Type:* object

---

##### `EncryptionTypeInput`<sup>Optional</sup> <a name="EncryptionTypeInput" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.property.encryptionTypeInput"></a>

```csharp
public string EncryptionTypeInput { get; }
```

- *Type:* string

---

##### `EndpointInput`<sup>Optional</sup> <a name="EndpointInput" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.property.endpointInput"></a>

```csharp
public string EndpointInput { get; }
```

- *Type:* string

---

##### `KmsKeyInput`<sup>Optional</sup> <a name="KmsKeyInput" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.property.kmsKeyInput"></a>

```csharp
public string KmsKeyInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `CannedAcl`<sup>Required</sup> <a name="CannedAcl" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.property.cannedAcl"></a>

```csharp
public string CannedAcl { get; }
```

- *Type:* string

---

##### `Destination`<sup>Required</sup> <a name="Destination" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.property.destination"></a>

```csharp
public string Destination { get; }
```

- *Type:* string

---

##### `EnableEncryption`<sup>Required</sup> <a name="EnableEncryption" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.property.enableEncryption"></a>

```csharp
public object EnableEncryption { get; }
```

- *Type:* object

---

##### `EncryptionType`<sup>Required</sup> <a name="EncryptionType" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.property.encryptionType"></a>

```csharp
public string EncryptionType { get; }
```

- *Type:* string

---

##### `Endpoint`<sup>Required</sup> <a name="Endpoint" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.property.endpoint"></a>

```csharp
public string Endpoint { get; }
```

- *Type:* string

---

##### `KmsKey`<sup>Required</sup> <a name="KmsKey" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.property.kmsKey"></a>

```csharp
public string KmsKey { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.property.internalValue"></a>

```csharp
public ClusterClusterLogConfS3 InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3">ClusterClusterLogConfS3</a>

---


### ClusterClusterMountInfoList <a name="ClusterClusterMountInfoList" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new ClusterClusterMountInfoList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfoList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfoList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfoList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfoList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfoList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfoList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfoList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoList.get"></a>

```csharp
private ClusterClusterMountInfoOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfoList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfoList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfoList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ClusterClusterMountInfoNetworkFilesystemInfoOutputReference <a name="ClusterClusterMountInfoNetworkFilesystemInfoOutputReference" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoNetworkFilesystemInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoNetworkFilesystemInfoOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new ClusterClusterMountInfoNetworkFilesystemInfoOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfoNetworkFilesystemInfoOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfoNetworkFilesystemInfoOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoNetworkFilesystemInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoNetworkFilesystemInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfoNetworkFilesystemInfoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfoNetworkFilesystemInfoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfoNetworkFilesystemInfoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfoNetworkFilesystemInfoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfoNetworkFilesystemInfoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfoNetworkFilesystemInfoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfoNetworkFilesystemInfoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfoNetworkFilesystemInfoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfoNetworkFilesystemInfoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfoNetworkFilesystemInfoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfoNetworkFilesystemInfoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfoNetworkFilesystemInfoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfoNetworkFilesystemInfoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfoNetworkFilesystemInfoOutputReference.resetMountOptions">ResetMountOptions</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoNetworkFilesystemInfoOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoNetworkFilesystemInfoOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoNetworkFilesystemInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoNetworkFilesystemInfoOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoNetworkFilesystemInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoNetworkFilesystemInfoOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoNetworkFilesystemInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoNetworkFilesystemInfoOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoNetworkFilesystemInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoNetworkFilesystemInfoOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoNetworkFilesystemInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoNetworkFilesystemInfoOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoNetworkFilesystemInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoNetworkFilesystemInfoOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoNetworkFilesystemInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoNetworkFilesystemInfoOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoNetworkFilesystemInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoNetworkFilesystemInfoOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoNetworkFilesystemInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoNetworkFilesystemInfoOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoNetworkFilesystemInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoNetworkFilesystemInfoOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoNetworkFilesystemInfoOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoNetworkFilesystemInfoOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMountOptions` <a name="ResetMountOptions" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoNetworkFilesystemInfoOutputReference.resetMountOptions"></a>

```csharp
private void ResetMountOptions()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfoNetworkFilesystemInfoOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfoNetworkFilesystemInfoOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfoNetworkFilesystemInfoOutputReference.property.mountOptionsInput">MountOptionsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfoNetworkFilesystemInfoOutputReference.property.serverAddressInput">ServerAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfoNetworkFilesystemInfoOutputReference.property.mountOptions">MountOptions</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfoNetworkFilesystemInfoOutputReference.property.serverAddress">ServerAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfoNetworkFilesystemInfoOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfoNetworkFilesystemInfo">ClusterClusterMountInfoNetworkFilesystemInfo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoNetworkFilesystemInfoOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoNetworkFilesystemInfoOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MountOptionsInput`<sup>Optional</sup> <a name="MountOptionsInput" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoNetworkFilesystemInfoOutputReference.property.mountOptionsInput"></a>

```csharp
public string MountOptionsInput { get; }
```

- *Type:* string

---

##### `ServerAddressInput`<sup>Optional</sup> <a name="ServerAddressInput" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoNetworkFilesystemInfoOutputReference.property.serverAddressInput"></a>

```csharp
public string ServerAddressInput { get; }
```

- *Type:* string

---

##### `MountOptions`<sup>Required</sup> <a name="MountOptions" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoNetworkFilesystemInfoOutputReference.property.mountOptions"></a>

```csharp
public string MountOptions { get; }
```

- *Type:* string

---

##### `ServerAddress`<sup>Required</sup> <a name="ServerAddress" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoNetworkFilesystemInfoOutputReference.property.serverAddress"></a>

```csharp
public string ServerAddress { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoNetworkFilesystemInfoOutputReference.property.internalValue"></a>

```csharp
public ClusterClusterMountInfoNetworkFilesystemInfo InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfoNetworkFilesystemInfo">ClusterClusterMountInfoNetworkFilesystemInfo</a>

---


### ClusterClusterMountInfoOutputReference <a name="ClusterClusterMountInfoOutputReference" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new ClusterClusterMountInfoOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfoOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfoOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfoOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfoOutputReference.putNetworkFilesystemInfo">PutNetworkFilesystemInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfoOutputReference.resetRemoteMountDirPath">ResetRemoteMountDirPath</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutNetworkFilesystemInfo` <a name="PutNetworkFilesystemInfo" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoOutputReference.putNetworkFilesystemInfo"></a>

```csharp
private void PutNetworkFilesystemInfo(ClusterClusterMountInfoNetworkFilesystemInfo Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoOutputReference.putNetworkFilesystemInfo.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfoNetworkFilesystemInfo">ClusterClusterMountInfoNetworkFilesystemInfo</a>

---

##### `ResetRemoteMountDirPath` <a name="ResetRemoteMountDirPath" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoOutputReference.resetRemoteMountDirPath"></a>

```csharp
private void ResetRemoteMountDirPath()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfoOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfoOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfoOutputReference.property.networkFilesystemInfo">NetworkFilesystemInfo</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfoNetworkFilesystemInfoOutputReference">ClusterClusterMountInfoNetworkFilesystemInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfoOutputReference.property.localMountDirPathInput">LocalMountDirPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfoOutputReference.property.networkFilesystemInfoInput">NetworkFilesystemInfoInput</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfoNetworkFilesystemInfo">ClusterClusterMountInfoNetworkFilesystemInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfoOutputReference.property.remoteMountDirPathInput">RemoteMountDirPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfoOutputReference.property.localMountDirPath">LocalMountDirPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfoOutputReference.property.remoteMountDirPath">RemoteMountDirPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfoOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NetworkFilesystemInfo`<sup>Required</sup> <a name="NetworkFilesystemInfo" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoOutputReference.property.networkFilesystemInfo"></a>

```csharp
public ClusterClusterMountInfoNetworkFilesystemInfoOutputReference NetworkFilesystemInfo { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfoNetworkFilesystemInfoOutputReference">ClusterClusterMountInfoNetworkFilesystemInfoOutputReference</a>

---

##### `LocalMountDirPathInput`<sup>Optional</sup> <a name="LocalMountDirPathInput" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoOutputReference.property.localMountDirPathInput"></a>

```csharp
public string LocalMountDirPathInput { get; }
```

- *Type:* string

---

##### `NetworkFilesystemInfoInput`<sup>Optional</sup> <a name="NetworkFilesystemInfoInput" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoOutputReference.property.networkFilesystemInfoInput"></a>

```csharp
public ClusterClusterMountInfoNetworkFilesystemInfo NetworkFilesystemInfoInput { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfoNetworkFilesystemInfo">ClusterClusterMountInfoNetworkFilesystemInfo</a>

---

##### `RemoteMountDirPathInput`<sup>Optional</sup> <a name="RemoteMountDirPathInput" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoOutputReference.property.remoteMountDirPathInput"></a>

```csharp
public string RemoteMountDirPathInput { get; }
```

- *Type:* string

---

##### `LocalMountDirPath`<sup>Required</sup> <a name="LocalMountDirPath" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoOutputReference.property.localMountDirPath"></a>

```csharp
public string LocalMountDirPath { get; }
```

- *Type:* string

---

##### `RemoteMountDirPath`<sup>Required</sup> <a name="RemoteMountDirPath" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoOutputReference.property.remoteMountDirPath"></a>

```csharp
public string RemoteMountDirPath { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ClusterDockerImageBasicAuthOutputReference <a name="ClusterDockerImageBasicAuthOutputReference" id="@cdktf/provider-databricks.cluster.ClusterDockerImageBasicAuthOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.cluster.ClusterDockerImageBasicAuthOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new ClusterDockerImageBasicAuthOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterDockerImageBasicAuthOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterDockerImageBasicAuthOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.cluster.ClusterDockerImageBasicAuthOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterDockerImageBasicAuthOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterDockerImageBasicAuthOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterDockerImageBasicAuthOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterDockerImageBasicAuthOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterDockerImageBasicAuthOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterDockerImageBasicAuthOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterDockerImageBasicAuthOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterDockerImageBasicAuthOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterDockerImageBasicAuthOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterDockerImageBasicAuthOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterDockerImageBasicAuthOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterDockerImageBasicAuthOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterDockerImageBasicAuthOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterDockerImageBasicAuthOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.cluster.ClusterDockerImageBasicAuthOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterDockerImageBasicAuthOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterDockerImageBasicAuthOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.cluster.ClusterDockerImageBasicAuthOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterDockerImageBasicAuthOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterDockerImageBasicAuthOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterDockerImageBasicAuthOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.cluster.ClusterDockerImageBasicAuthOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterDockerImageBasicAuthOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.cluster.ClusterDockerImageBasicAuthOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterDockerImageBasicAuthOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.cluster.ClusterDockerImageBasicAuthOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterDockerImageBasicAuthOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterDockerImageBasicAuthOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterDockerImageBasicAuthOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.cluster.ClusterDockerImageBasicAuthOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterDockerImageBasicAuthOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterDockerImageBasicAuthOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterDockerImageBasicAuthOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.cluster.ClusterDockerImageBasicAuthOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.cluster.ClusterDockerImageBasicAuthOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.cluster.ClusterDockerImageBasicAuthOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.cluster.ClusterDockerImageBasicAuthOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.cluster.ClusterDockerImageBasicAuthOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterDockerImageBasicAuthOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterDockerImageBasicAuthOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterDockerImageBasicAuthOutputReference.property.passwordInput">PasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterDockerImageBasicAuthOutputReference.property.usernameInput">UsernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterDockerImageBasicAuthOutputReference.property.password">Password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterDockerImageBasicAuthOutputReference.property.username">Username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterDockerImageBasicAuthOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterDockerImageBasicAuth">ClusterDockerImageBasicAuth</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.cluster.ClusterDockerImageBasicAuthOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.cluster.ClusterDockerImageBasicAuthOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="@cdktf/provider-databricks.cluster.ClusterDockerImageBasicAuthOutputReference.property.passwordInput"></a>

```csharp
public string PasswordInput { get; }
```

- *Type:* string

---

##### `UsernameInput`<sup>Optional</sup> <a name="UsernameInput" id="@cdktf/provider-databricks.cluster.ClusterDockerImageBasicAuthOutputReference.property.usernameInput"></a>

```csharp
public string UsernameInput { get; }
```

- *Type:* string

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-databricks.cluster.ClusterDockerImageBasicAuthOutputReference.property.password"></a>

```csharp
public string Password { get; }
```

- *Type:* string

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-databricks.cluster.ClusterDockerImageBasicAuthOutputReference.property.username"></a>

```csharp
public string Username { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.cluster.ClusterDockerImageBasicAuthOutputReference.property.internalValue"></a>

```csharp
public ClusterDockerImageBasicAuth InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterDockerImageBasicAuth">ClusterDockerImageBasicAuth</a>

---


### ClusterDockerImageOutputReference <a name="ClusterDockerImageOutputReference" id="@cdktf/provider-databricks.cluster.ClusterDockerImageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.cluster.ClusterDockerImageOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new ClusterDockerImageOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterDockerImageOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterDockerImageOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.cluster.ClusterDockerImageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterDockerImageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterDockerImageOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterDockerImageOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterDockerImageOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterDockerImageOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterDockerImageOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterDockerImageOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterDockerImageOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterDockerImageOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterDockerImageOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterDockerImageOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterDockerImageOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterDockerImageOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterDockerImageOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterDockerImageOutputReference.putBasicAuth">PutBasicAuth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterDockerImageOutputReference.resetBasicAuth">ResetBasicAuth</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.cluster.ClusterDockerImageOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterDockerImageOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterDockerImageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.cluster.ClusterDockerImageOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterDockerImageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterDockerImageOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterDockerImageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.cluster.ClusterDockerImageOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterDockerImageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.cluster.ClusterDockerImageOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterDockerImageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.cluster.ClusterDockerImageOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterDockerImageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterDockerImageOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterDockerImageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.cluster.ClusterDockerImageOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterDockerImageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterDockerImageOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterDockerImageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.cluster.ClusterDockerImageOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.cluster.ClusterDockerImageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.cluster.ClusterDockerImageOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.cluster.ClusterDockerImageOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.cluster.ClusterDockerImageOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutBasicAuth` <a name="PutBasicAuth" id="@cdktf/provider-databricks.cluster.ClusterDockerImageOutputReference.putBasicAuth"></a>

```csharp
private void PutBasicAuth(ClusterDockerImageBasicAuth Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.cluster.ClusterDockerImageOutputReference.putBasicAuth.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterDockerImageBasicAuth">ClusterDockerImageBasicAuth</a>

---

##### `ResetBasicAuth` <a name="ResetBasicAuth" id="@cdktf/provider-databricks.cluster.ClusterDockerImageOutputReference.resetBasicAuth"></a>

```csharp
private void ResetBasicAuth()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterDockerImageOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterDockerImageOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterDockerImageOutputReference.property.basicAuth">BasicAuth</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterDockerImageBasicAuthOutputReference">ClusterDockerImageBasicAuthOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterDockerImageOutputReference.property.basicAuthInput">BasicAuthInput</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterDockerImageBasicAuth">ClusterDockerImageBasicAuth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterDockerImageOutputReference.property.urlInput">UrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterDockerImageOutputReference.property.url">Url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterDockerImageOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterDockerImage">ClusterDockerImage</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.cluster.ClusterDockerImageOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.cluster.ClusterDockerImageOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BasicAuth`<sup>Required</sup> <a name="BasicAuth" id="@cdktf/provider-databricks.cluster.ClusterDockerImageOutputReference.property.basicAuth"></a>

```csharp
public ClusterDockerImageBasicAuthOutputReference BasicAuth { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterDockerImageBasicAuthOutputReference">ClusterDockerImageBasicAuthOutputReference</a>

---

##### `BasicAuthInput`<sup>Optional</sup> <a name="BasicAuthInput" id="@cdktf/provider-databricks.cluster.ClusterDockerImageOutputReference.property.basicAuthInput"></a>

```csharp
public ClusterDockerImageBasicAuth BasicAuthInput { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterDockerImageBasicAuth">ClusterDockerImageBasicAuth</a>

---

##### `UrlInput`<sup>Optional</sup> <a name="UrlInput" id="@cdktf/provider-databricks.cluster.ClusterDockerImageOutputReference.property.urlInput"></a>

```csharp
public string UrlInput { get; }
```

- *Type:* string

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktf/provider-databricks.cluster.ClusterDockerImageOutputReference.property.url"></a>

```csharp
public string Url { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.cluster.ClusterDockerImageOutputReference.property.internalValue"></a>

```csharp
public ClusterDockerImage InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterDockerImage">ClusterDockerImage</a>

---


### ClusterGcpAttributesOutputReference <a name="ClusterGcpAttributesOutputReference" id="@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new ClusterGcpAttributesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.resetAvailability">ResetAvailability</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.resetBootDiskSize">ResetBootDiskSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.resetGoogleServiceAccount">ResetGoogleServiceAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.resetUsePreemptibleExecutors">ResetUsePreemptibleExecutors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.resetZoneId">ResetZoneId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAvailability` <a name="ResetAvailability" id="@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.resetAvailability"></a>

```csharp
private void ResetAvailability()
```

##### `ResetBootDiskSize` <a name="ResetBootDiskSize" id="@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.resetBootDiskSize"></a>

```csharp
private void ResetBootDiskSize()
```

##### `ResetGoogleServiceAccount` <a name="ResetGoogleServiceAccount" id="@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.resetGoogleServiceAccount"></a>

```csharp
private void ResetGoogleServiceAccount()
```

##### `ResetUsePreemptibleExecutors` <a name="ResetUsePreemptibleExecutors" id="@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.resetUsePreemptibleExecutors"></a>

```csharp
private void ResetUsePreemptibleExecutors()
```

##### `ResetZoneId` <a name="ResetZoneId" id="@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.resetZoneId"></a>

```csharp
private void ResetZoneId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.property.availabilityInput">AvailabilityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.property.bootDiskSizeInput">BootDiskSizeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.property.googleServiceAccountInput">GoogleServiceAccountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.property.usePreemptibleExecutorsInput">UsePreemptibleExecutorsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.property.zoneIdInput">ZoneIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.property.availability">Availability</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.property.bootDiskSize">BootDiskSize</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.property.googleServiceAccount">GoogleServiceAccount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.property.usePreemptibleExecutors">UsePreemptibleExecutors</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.property.zoneId">ZoneId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterGcpAttributes">ClusterGcpAttributes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AvailabilityInput`<sup>Optional</sup> <a name="AvailabilityInput" id="@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.property.availabilityInput"></a>

```csharp
public string AvailabilityInput { get; }
```

- *Type:* string

---

##### `BootDiskSizeInput`<sup>Optional</sup> <a name="BootDiskSizeInput" id="@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.property.bootDiskSizeInput"></a>

```csharp
public double BootDiskSizeInput { get; }
```

- *Type:* double

---

##### `GoogleServiceAccountInput`<sup>Optional</sup> <a name="GoogleServiceAccountInput" id="@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.property.googleServiceAccountInput"></a>

```csharp
public string GoogleServiceAccountInput { get; }
```

- *Type:* string

---

##### `UsePreemptibleExecutorsInput`<sup>Optional</sup> <a name="UsePreemptibleExecutorsInput" id="@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.property.usePreemptibleExecutorsInput"></a>

```csharp
public object UsePreemptibleExecutorsInput { get; }
```

- *Type:* object

---

##### `ZoneIdInput`<sup>Optional</sup> <a name="ZoneIdInput" id="@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.property.zoneIdInput"></a>

```csharp
public string ZoneIdInput { get; }
```

- *Type:* string

---

##### `Availability`<sup>Required</sup> <a name="Availability" id="@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.property.availability"></a>

```csharp
public string Availability { get; }
```

- *Type:* string

---

##### `BootDiskSize`<sup>Required</sup> <a name="BootDiskSize" id="@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.property.bootDiskSize"></a>

```csharp
public double BootDiskSize { get; }
```

- *Type:* double

---

##### `GoogleServiceAccount`<sup>Required</sup> <a name="GoogleServiceAccount" id="@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.property.googleServiceAccount"></a>

```csharp
public string GoogleServiceAccount { get; }
```

- *Type:* string

---

##### `UsePreemptibleExecutors`<sup>Required</sup> <a name="UsePreemptibleExecutors" id="@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.property.usePreemptibleExecutors"></a>

```csharp
public object UsePreemptibleExecutors { get; }
```

- *Type:* object

---

##### `ZoneId`<sup>Required</sup> <a name="ZoneId" id="@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.property.zoneId"></a>

```csharp
public string ZoneId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.property.internalValue"></a>

```csharp
public ClusterGcpAttributes InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterGcpAttributes">ClusterGcpAttributes</a>

---


### ClusterInitScriptsAbfssOutputReference <a name="ClusterInitScriptsAbfssOutputReference" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsAbfssOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsAbfssOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new ClusterInitScriptsAbfssOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsAbfssOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsAbfssOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsAbfssOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsAbfssOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsAbfssOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsAbfssOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsAbfssOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsAbfssOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsAbfssOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsAbfssOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsAbfssOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsAbfssOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsAbfssOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsAbfssOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsAbfssOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsAbfssOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsAbfssOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsAbfssOutputReference.resetDestination">ResetDestination</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsAbfssOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsAbfssOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsAbfssOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsAbfssOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsAbfssOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsAbfssOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsAbfssOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsAbfssOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsAbfssOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsAbfssOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsAbfssOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsAbfssOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsAbfssOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsAbfssOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsAbfssOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsAbfssOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsAbfssOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsAbfssOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsAbfssOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsAbfssOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsAbfssOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsAbfssOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsAbfssOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsAbfssOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDestination` <a name="ResetDestination" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsAbfssOutputReference.resetDestination"></a>

```csharp
private void ResetDestination()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsAbfssOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsAbfssOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsAbfssOutputReference.property.destinationInput">DestinationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsAbfssOutputReference.property.destination">Destination</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsAbfssOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsAbfss">ClusterInitScriptsAbfss</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsAbfssOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsAbfssOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DestinationInput`<sup>Optional</sup> <a name="DestinationInput" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsAbfssOutputReference.property.destinationInput"></a>

```csharp
public string DestinationInput { get; }
```

- *Type:* string

---

##### `Destination`<sup>Required</sup> <a name="Destination" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsAbfssOutputReference.property.destination"></a>

```csharp
public string Destination { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsAbfssOutputReference.property.internalValue"></a>

```csharp
public ClusterInitScriptsAbfss InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsAbfss">ClusterInitScriptsAbfss</a>

---


### ClusterInitScriptsDbfsOutputReference <a name="ClusterInitScriptsDbfsOutputReference" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsDbfsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsDbfsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new ClusterInitScriptsDbfsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsDbfsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsDbfsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsDbfsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsDbfsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsDbfsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsDbfsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsDbfsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsDbfsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsDbfsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsDbfsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsDbfsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsDbfsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsDbfsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsDbfsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsDbfsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsDbfsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsDbfsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsDbfsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsDbfsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsDbfsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsDbfsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsDbfsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsDbfsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsDbfsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsDbfsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsDbfsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsDbfsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsDbfsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsDbfsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsDbfsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsDbfsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsDbfsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsDbfsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsDbfsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsDbfsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsDbfsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsDbfsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsDbfsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsDbfsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsDbfsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsDbfsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsDbfsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsDbfsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsDbfsOutputReference.property.destinationInput">DestinationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsDbfsOutputReference.property.destination">Destination</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsDbfsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsDbfs">ClusterInitScriptsDbfs</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsDbfsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsDbfsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DestinationInput`<sup>Optional</sup> <a name="DestinationInput" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsDbfsOutputReference.property.destinationInput"></a>

```csharp
public string DestinationInput { get; }
```

- *Type:* string

---

##### `Destination`<sup>Required</sup> <a name="Destination" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsDbfsOutputReference.property.destination"></a>

```csharp
public string Destination { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsDbfsOutputReference.property.internalValue"></a>

```csharp
public ClusterInitScriptsDbfs InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsDbfs">ClusterInitScriptsDbfs</a>

---


### ClusterInitScriptsFileOutputReference <a name="ClusterInitScriptsFileOutputReference" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsFileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsFileOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new ClusterInitScriptsFileOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsFileOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsFileOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsFileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsFileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsFileOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsFileOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsFileOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsFileOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsFileOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsFileOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsFileOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsFileOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsFileOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsFileOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsFileOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsFileOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsFileOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsFileOutputReference.resetDestination">ResetDestination</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsFileOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsFileOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsFileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsFileOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsFileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsFileOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsFileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsFileOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsFileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsFileOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsFileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsFileOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsFileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsFileOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsFileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsFileOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsFileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsFileOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsFileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsFileOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsFileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsFileOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsFileOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsFileOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDestination` <a name="ResetDestination" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsFileOutputReference.resetDestination"></a>

```csharp
private void ResetDestination()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsFileOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsFileOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsFileOutputReference.property.destinationInput">DestinationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsFileOutputReference.property.destination">Destination</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsFileOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsFile">ClusterInitScriptsFile</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsFileOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsFileOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DestinationInput`<sup>Optional</sup> <a name="DestinationInput" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsFileOutputReference.property.destinationInput"></a>

```csharp
public string DestinationInput { get; }
```

- *Type:* string

---

##### `Destination`<sup>Required</sup> <a name="Destination" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsFileOutputReference.property.destination"></a>

```csharp
public string Destination { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsFileOutputReference.property.internalValue"></a>

```csharp
public ClusterInitScriptsFile InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsFile">ClusterInitScriptsFile</a>

---


### ClusterInitScriptsGcsOutputReference <a name="ClusterInitScriptsGcsOutputReference" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsGcsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsGcsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new ClusterInitScriptsGcsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsGcsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsGcsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsGcsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsGcsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsGcsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsGcsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsGcsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsGcsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsGcsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsGcsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsGcsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsGcsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsGcsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsGcsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsGcsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsGcsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsGcsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsGcsOutputReference.resetDestination">ResetDestination</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsGcsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsGcsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsGcsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsGcsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsGcsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsGcsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsGcsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsGcsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsGcsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsGcsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsGcsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsGcsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsGcsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsGcsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsGcsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsGcsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsGcsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsGcsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsGcsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsGcsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsGcsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsGcsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsGcsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsGcsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDestination` <a name="ResetDestination" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsGcsOutputReference.resetDestination"></a>

```csharp
private void ResetDestination()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsGcsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsGcsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsGcsOutputReference.property.destinationInput">DestinationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsGcsOutputReference.property.destination">Destination</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsGcsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsGcs">ClusterInitScriptsGcs</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsGcsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsGcsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DestinationInput`<sup>Optional</sup> <a name="DestinationInput" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsGcsOutputReference.property.destinationInput"></a>

```csharp
public string DestinationInput { get; }
```

- *Type:* string

---

##### `Destination`<sup>Required</sup> <a name="Destination" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsGcsOutputReference.property.destination"></a>

```csharp
public string Destination { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsGcsOutputReference.property.internalValue"></a>

```csharp
public ClusterInitScriptsGcs InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsGcs">ClusterInitScriptsGcs</a>

---


### ClusterInitScriptsList <a name="ClusterInitScriptsList" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new ClusterInitScriptsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsList.get"></a>

```csharp
private ClusterInitScriptsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ClusterInitScriptsOutputReference <a name="ClusterInitScriptsOutputReference" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new ClusterInitScriptsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.putAbfss">PutAbfss</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.putDbfs">PutDbfs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.putFile">PutFile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.putGcs">PutGcs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.putS3">PutS3</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.putWorkspace">PutWorkspace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.resetAbfss">ResetAbfss</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.resetDbfs">ResetDbfs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.resetFile">ResetFile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.resetGcs">ResetGcs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.resetS3">ResetS3</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.resetWorkspace">ResetWorkspace</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAbfss` <a name="PutAbfss" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.putAbfss"></a>

```csharp
private void PutAbfss(ClusterInitScriptsAbfss Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.putAbfss.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsAbfss">ClusterInitScriptsAbfss</a>

---

##### `PutDbfs` <a name="PutDbfs" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.putDbfs"></a>

```csharp
private void PutDbfs(ClusterInitScriptsDbfs Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.putDbfs.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsDbfs">ClusterInitScriptsDbfs</a>

---

##### `PutFile` <a name="PutFile" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.putFile"></a>

```csharp
private void PutFile(ClusterInitScriptsFile Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.putFile.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsFile">ClusterInitScriptsFile</a>

---

##### `PutGcs` <a name="PutGcs" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.putGcs"></a>

```csharp
private void PutGcs(ClusterInitScriptsGcs Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.putGcs.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsGcs">ClusterInitScriptsGcs</a>

---

##### `PutS3` <a name="PutS3" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.putS3"></a>

```csharp
private void PutS3(ClusterInitScriptsS3 Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.putS3.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsS3">ClusterInitScriptsS3</a>

---

##### `PutWorkspace` <a name="PutWorkspace" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.putWorkspace"></a>

```csharp
private void PutWorkspace(ClusterInitScriptsWorkspace Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.putWorkspace.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsWorkspace">ClusterInitScriptsWorkspace</a>

---

##### `ResetAbfss` <a name="ResetAbfss" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.resetAbfss"></a>

```csharp
private void ResetAbfss()
```

##### `ResetDbfs` <a name="ResetDbfs" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.resetDbfs"></a>

```csharp
private void ResetDbfs()
```

##### `ResetFile` <a name="ResetFile" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.resetFile"></a>

```csharp
private void ResetFile()
```

##### `ResetGcs` <a name="ResetGcs" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.resetGcs"></a>

```csharp
private void ResetGcs()
```

##### `ResetS3` <a name="ResetS3" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.resetS3"></a>

```csharp
private void ResetS3()
```

##### `ResetWorkspace` <a name="ResetWorkspace" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.resetWorkspace"></a>

```csharp
private void ResetWorkspace()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.property.abfss">Abfss</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsAbfssOutputReference">ClusterInitScriptsAbfssOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.property.dbfs">Dbfs</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsDbfsOutputReference">ClusterInitScriptsDbfsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.property.file">File</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsFileOutputReference">ClusterInitScriptsFileOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.property.gcs">Gcs</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsGcsOutputReference">ClusterInitScriptsGcsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.property.s3">S3</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference">ClusterInitScriptsS3OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.property.workspace">Workspace</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsWorkspaceOutputReference">ClusterInitScriptsWorkspaceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.property.abfssInput">AbfssInput</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsAbfss">ClusterInitScriptsAbfss</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.property.dbfsInput">DbfsInput</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsDbfs">ClusterInitScriptsDbfs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.property.fileInput">FileInput</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsFile">ClusterInitScriptsFile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.property.gcsInput">GcsInput</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsGcs">ClusterInitScriptsGcs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.property.s3Input">S3Input</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsS3">ClusterInitScriptsS3</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.property.workspaceInput">WorkspaceInput</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsWorkspace">ClusterInitScriptsWorkspace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Abfss`<sup>Required</sup> <a name="Abfss" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.property.abfss"></a>

```csharp
public ClusterInitScriptsAbfssOutputReference Abfss { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsAbfssOutputReference">ClusterInitScriptsAbfssOutputReference</a>

---

##### `Dbfs`<sup>Required</sup> <a name="Dbfs" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.property.dbfs"></a>

```csharp
public ClusterInitScriptsDbfsOutputReference Dbfs { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsDbfsOutputReference">ClusterInitScriptsDbfsOutputReference</a>

---

##### `File`<sup>Required</sup> <a name="File" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.property.file"></a>

```csharp
public ClusterInitScriptsFileOutputReference File { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsFileOutputReference">ClusterInitScriptsFileOutputReference</a>

---

##### `Gcs`<sup>Required</sup> <a name="Gcs" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.property.gcs"></a>

```csharp
public ClusterInitScriptsGcsOutputReference Gcs { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsGcsOutputReference">ClusterInitScriptsGcsOutputReference</a>

---

##### `S3`<sup>Required</sup> <a name="S3" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.property.s3"></a>

```csharp
public ClusterInitScriptsS3OutputReference S3 { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference">ClusterInitScriptsS3OutputReference</a>

---

##### `Workspace`<sup>Required</sup> <a name="Workspace" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.property.workspace"></a>

```csharp
public ClusterInitScriptsWorkspaceOutputReference Workspace { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsWorkspaceOutputReference">ClusterInitScriptsWorkspaceOutputReference</a>

---

##### `AbfssInput`<sup>Optional</sup> <a name="AbfssInput" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.property.abfssInput"></a>

```csharp
public ClusterInitScriptsAbfss AbfssInput { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsAbfss">ClusterInitScriptsAbfss</a>

---

##### `DbfsInput`<sup>Optional</sup> <a name="DbfsInput" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.property.dbfsInput"></a>

```csharp
public ClusterInitScriptsDbfs DbfsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsDbfs">ClusterInitScriptsDbfs</a>

---

##### `FileInput`<sup>Optional</sup> <a name="FileInput" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.property.fileInput"></a>

```csharp
public ClusterInitScriptsFile FileInput { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsFile">ClusterInitScriptsFile</a>

---

##### `GcsInput`<sup>Optional</sup> <a name="GcsInput" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.property.gcsInput"></a>

```csharp
public ClusterInitScriptsGcs GcsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsGcs">ClusterInitScriptsGcs</a>

---

##### `S3Input`<sup>Optional</sup> <a name="S3Input" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.property.s3Input"></a>

```csharp
public ClusterInitScriptsS3 S3Input { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsS3">ClusterInitScriptsS3</a>

---

##### `WorkspaceInput`<sup>Optional</sup> <a name="WorkspaceInput" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.property.workspaceInput"></a>

```csharp
public ClusterInitScriptsWorkspace WorkspaceInput { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsWorkspace">ClusterInitScriptsWorkspace</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ClusterInitScriptsS3OutputReference <a name="ClusterInitScriptsS3OutputReference" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new ClusterInitScriptsS3OutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.resetCannedAcl">ResetCannedAcl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.resetEnableEncryption">ResetEnableEncryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.resetEncryptionType">ResetEncryptionType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.resetEndpoint">ResetEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.resetKmsKey">ResetKmsKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.resetRegion">ResetRegion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCannedAcl` <a name="ResetCannedAcl" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.resetCannedAcl"></a>

```csharp
private void ResetCannedAcl()
```

##### `ResetEnableEncryption` <a name="ResetEnableEncryption" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.resetEnableEncryption"></a>

```csharp
private void ResetEnableEncryption()
```

##### `ResetEncryptionType` <a name="ResetEncryptionType" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.resetEncryptionType"></a>

```csharp
private void ResetEncryptionType()
```

##### `ResetEndpoint` <a name="ResetEndpoint" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.resetEndpoint"></a>

```csharp
private void ResetEndpoint()
```

##### `ResetKmsKey` <a name="ResetKmsKey" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.resetKmsKey"></a>

```csharp
private void ResetKmsKey()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.resetRegion"></a>

```csharp
private void ResetRegion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.property.cannedAclInput">CannedAclInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.property.destinationInput">DestinationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.property.enableEncryptionInput">EnableEncryptionInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.property.encryptionTypeInput">EncryptionTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.property.endpointInput">EndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.property.kmsKeyInput">KmsKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.property.cannedAcl">CannedAcl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.property.destination">Destination</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.property.enableEncryption">EnableEncryption</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.property.encryptionType">EncryptionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.property.endpoint">Endpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.property.kmsKey">KmsKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsS3">ClusterInitScriptsS3</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CannedAclInput`<sup>Optional</sup> <a name="CannedAclInput" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.property.cannedAclInput"></a>

```csharp
public string CannedAclInput { get; }
```

- *Type:* string

---

##### `DestinationInput`<sup>Optional</sup> <a name="DestinationInput" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.property.destinationInput"></a>

```csharp
public string DestinationInput { get; }
```

- *Type:* string

---

##### `EnableEncryptionInput`<sup>Optional</sup> <a name="EnableEncryptionInput" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.property.enableEncryptionInput"></a>

```csharp
public object EnableEncryptionInput { get; }
```

- *Type:* object

---

##### `EncryptionTypeInput`<sup>Optional</sup> <a name="EncryptionTypeInput" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.property.encryptionTypeInput"></a>

```csharp
public string EncryptionTypeInput { get; }
```

- *Type:* string

---

##### `EndpointInput`<sup>Optional</sup> <a name="EndpointInput" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.property.endpointInput"></a>

```csharp
public string EndpointInput { get; }
```

- *Type:* string

---

##### `KmsKeyInput`<sup>Optional</sup> <a name="KmsKeyInput" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.property.kmsKeyInput"></a>

```csharp
public string KmsKeyInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `CannedAcl`<sup>Required</sup> <a name="CannedAcl" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.property.cannedAcl"></a>

```csharp
public string CannedAcl { get; }
```

- *Type:* string

---

##### `Destination`<sup>Required</sup> <a name="Destination" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.property.destination"></a>

```csharp
public string Destination { get; }
```

- *Type:* string

---

##### `EnableEncryption`<sup>Required</sup> <a name="EnableEncryption" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.property.enableEncryption"></a>

```csharp
public object EnableEncryption { get; }
```

- *Type:* object

---

##### `EncryptionType`<sup>Required</sup> <a name="EncryptionType" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.property.encryptionType"></a>

```csharp
public string EncryptionType { get; }
```

- *Type:* string

---

##### `Endpoint`<sup>Required</sup> <a name="Endpoint" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.property.endpoint"></a>

```csharp
public string Endpoint { get; }
```

- *Type:* string

---

##### `KmsKey`<sup>Required</sup> <a name="KmsKey" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.property.kmsKey"></a>

```csharp
public string KmsKey { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.property.internalValue"></a>

```csharp
public ClusterInitScriptsS3 InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsS3">ClusterInitScriptsS3</a>

---


### ClusterInitScriptsWorkspaceOutputReference <a name="ClusterInitScriptsWorkspaceOutputReference" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsWorkspaceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsWorkspaceOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new ClusterInitScriptsWorkspaceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsWorkspaceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsWorkspaceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsWorkspaceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsWorkspaceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsWorkspaceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsWorkspaceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsWorkspaceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsWorkspaceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsWorkspaceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsWorkspaceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsWorkspaceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsWorkspaceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsWorkspaceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsWorkspaceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsWorkspaceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsWorkspaceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsWorkspaceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsWorkspaceOutputReference.resetDestination">ResetDestination</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsWorkspaceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsWorkspaceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsWorkspaceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsWorkspaceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsWorkspaceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsWorkspaceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsWorkspaceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsWorkspaceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsWorkspaceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsWorkspaceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsWorkspaceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsWorkspaceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsWorkspaceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsWorkspaceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsWorkspaceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsWorkspaceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsWorkspaceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsWorkspaceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsWorkspaceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsWorkspaceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsWorkspaceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsWorkspaceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsWorkspaceOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsWorkspaceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDestination` <a name="ResetDestination" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsWorkspaceOutputReference.resetDestination"></a>

```csharp
private void ResetDestination()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsWorkspaceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsWorkspaceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsWorkspaceOutputReference.property.destinationInput">DestinationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsWorkspaceOutputReference.property.destination">Destination</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsWorkspaceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsWorkspace">ClusterInitScriptsWorkspace</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsWorkspaceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsWorkspaceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DestinationInput`<sup>Optional</sup> <a name="DestinationInput" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsWorkspaceOutputReference.property.destinationInput"></a>

```csharp
public string DestinationInput { get; }
```

- *Type:* string

---

##### `Destination`<sup>Required</sup> <a name="Destination" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsWorkspaceOutputReference.property.destination"></a>

```csharp
public string Destination { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsWorkspaceOutputReference.property.internalValue"></a>

```csharp
public ClusterInitScriptsWorkspace InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsWorkspace">ClusterInitScriptsWorkspace</a>

---


### ClusterLibraryCranOutputReference <a name="ClusterLibraryCranOutputReference" id="@cdktf/provider-databricks.cluster.ClusterLibraryCranOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.cluster.ClusterLibraryCranOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new ClusterLibraryCranOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryCranOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryCranOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.cluster.ClusterLibraryCranOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryCranOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryCranOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryCranOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryCranOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryCranOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryCranOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryCranOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryCranOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryCranOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryCranOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryCranOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryCranOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryCranOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryCranOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryCranOutputReference.resetRepo">ResetRepo</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.cluster.ClusterLibraryCranOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryCranOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryCranOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryCranOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryCranOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryCranOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryCranOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryCranOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryCranOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryCranOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryCranOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryCranOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryCranOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryCranOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryCranOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryCranOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryCranOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryCranOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryCranOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryCranOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.cluster.ClusterLibraryCranOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.cluster.ClusterLibraryCranOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.cluster.ClusterLibraryCranOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.cluster.ClusterLibraryCranOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRepo` <a name="ResetRepo" id="@cdktf/provider-databricks.cluster.ClusterLibraryCranOutputReference.resetRepo"></a>

```csharp
private void ResetRepo()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryCranOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryCranOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryCranOutputReference.property.packageInput">PackageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryCranOutputReference.property.repoInput">RepoInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryCranOutputReference.property.package">Package</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryCranOutputReference.property.repo">Repo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryCranOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryCran">ClusterLibraryCran</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.cluster.ClusterLibraryCranOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.cluster.ClusterLibraryCranOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PackageInput`<sup>Optional</sup> <a name="PackageInput" id="@cdktf/provider-databricks.cluster.ClusterLibraryCranOutputReference.property.packageInput"></a>

```csharp
public string PackageInput { get; }
```

- *Type:* string

---

##### `RepoInput`<sup>Optional</sup> <a name="RepoInput" id="@cdktf/provider-databricks.cluster.ClusterLibraryCranOutputReference.property.repoInput"></a>

```csharp
public string RepoInput { get; }
```

- *Type:* string

---

##### `Package`<sup>Required</sup> <a name="Package" id="@cdktf/provider-databricks.cluster.ClusterLibraryCranOutputReference.property.package"></a>

```csharp
public string Package { get; }
```

- *Type:* string

---

##### `Repo`<sup>Required</sup> <a name="Repo" id="@cdktf/provider-databricks.cluster.ClusterLibraryCranOutputReference.property.repo"></a>

```csharp
public string Repo { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.cluster.ClusterLibraryCranOutputReference.property.internalValue"></a>

```csharp
public ClusterLibraryCran InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterLibraryCran">ClusterLibraryCran</a>

---


### ClusterLibraryList <a name="ClusterLibraryList" id="@cdktf/provider-databricks.cluster.ClusterLibraryList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.cluster.ClusterLibraryList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new ClusterLibraryList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.cluster.ClusterLibraryList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-databricks.cluster.ClusterLibraryList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.cluster.ClusterLibraryList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.cluster.ClusterLibraryList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.cluster.ClusterLibraryList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.cluster.ClusterLibraryList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-databricks.cluster.ClusterLibraryList.get"></a>

```csharp
private ClusterLibraryOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-databricks.cluster.ClusterLibraryList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.cluster.ClusterLibraryList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.cluster.ClusterLibraryList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.cluster.ClusterLibraryList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ClusterLibraryMavenOutputReference <a name="ClusterLibraryMavenOutputReference" id="@cdktf/provider-databricks.cluster.ClusterLibraryMavenOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.cluster.ClusterLibraryMavenOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new ClusterLibraryMavenOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryMavenOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryMavenOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.cluster.ClusterLibraryMavenOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryMavenOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryMavenOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryMavenOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryMavenOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryMavenOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryMavenOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryMavenOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryMavenOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryMavenOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryMavenOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryMavenOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryMavenOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryMavenOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryMavenOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryMavenOutputReference.resetExclusions">ResetExclusions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryMavenOutputReference.resetRepo">ResetRepo</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.cluster.ClusterLibraryMavenOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryMavenOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryMavenOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryMavenOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryMavenOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryMavenOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryMavenOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryMavenOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryMavenOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryMavenOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryMavenOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryMavenOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryMavenOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryMavenOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryMavenOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryMavenOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryMavenOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryMavenOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryMavenOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryMavenOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.cluster.ClusterLibraryMavenOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.cluster.ClusterLibraryMavenOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.cluster.ClusterLibraryMavenOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.cluster.ClusterLibraryMavenOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetExclusions` <a name="ResetExclusions" id="@cdktf/provider-databricks.cluster.ClusterLibraryMavenOutputReference.resetExclusions"></a>

```csharp
private void ResetExclusions()
```

##### `ResetRepo` <a name="ResetRepo" id="@cdktf/provider-databricks.cluster.ClusterLibraryMavenOutputReference.resetRepo"></a>

```csharp
private void ResetRepo()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryMavenOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryMavenOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryMavenOutputReference.property.coordinatesInput">CoordinatesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryMavenOutputReference.property.exclusionsInput">ExclusionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryMavenOutputReference.property.repoInput">RepoInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryMavenOutputReference.property.coordinates">Coordinates</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryMavenOutputReference.property.exclusions">Exclusions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryMavenOutputReference.property.repo">Repo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryMavenOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryMaven">ClusterLibraryMaven</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.cluster.ClusterLibraryMavenOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.cluster.ClusterLibraryMavenOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CoordinatesInput`<sup>Optional</sup> <a name="CoordinatesInput" id="@cdktf/provider-databricks.cluster.ClusterLibraryMavenOutputReference.property.coordinatesInput"></a>

```csharp
public string CoordinatesInput { get; }
```

- *Type:* string

---

##### `ExclusionsInput`<sup>Optional</sup> <a name="ExclusionsInput" id="@cdktf/provider-databricks.cluster.ClusterLibraryMavenOutputReference.property.exclusionsInput"></a>

```csharp
public string[] ExclusionsInput { get; }
```

- *Type:* string[]

---

##### `RepoInput`<sup>Optional</sup> <a name="RepoInput" id="@cdktf/provider-databricks.cluster.ClusterLibraryMavenOutputReference.property.repoInput"></a>

```csharp
public string RepoInput { get; }
```

- *Type:* string

---

##### `Coordinates`<sup>Required</sup> <a name="Coordinates" id="@cdktf/provider-databricks.cluster.ClusterLibraryMavenOutputReference.property.coordinates"></a>

```csharp
public string Coordinates { get; }
```

- *Type:* string

---

##### `Exclusions`<sup>Required</sup> <a name="Exclusions" id="@cdktf/provider-databricks.cluster.ClusterLibraryMavenOutputReference.property.exclusions"></a>

```csharp
public string[] Exclusions { get; }
```

- *Type:* string[]

---

##### `Repo`<sup>Required</sup> <a name="Repo" id="@cdktf/provider-databricks.cluster.ClusterLibraryMavenOutputReference.property.repo"></a>

```csharp
public string Repo { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.cluster.ClusterLibraryMavenOutputReference.property.internalValue"></a>

```csharp
public ClusterLibraryMaven InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterLibraryMaven">ClusterLibraryMaven</a>

---


### ClusterLibraryOutputReference <a name="ClusterLibraryOutputReference" id="@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new ClusterLibraryOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.putCran">PutCran</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.putMaven">PutMaven</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.putPypi">PutPypi</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.resetCran">ResetCran</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.resetEgg">ResetEgg</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.resetJar">ResetJar</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.resetMaven">ResetMaven</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.resetPypi">ResetPypi</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.resetWhl">ResetWhl</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCran` <a name="PutCran" id="@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.putCran"></a>

```csharp
private void PutCran(ClusterLibraryCran Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.putCran.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterLibraryCran">ClusterLibraryCran</a>

---

##### `PutMaven` <a name="PutMaven" id="@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.putMaven"></a>

```csharp
private void PutMaven(ClusterLibraryMaven Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.putMaven.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterLibraryMaven">ClusterLibraryMaven</a>

---

##### `PutPypi` <a name="PutPypi" id="@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.putPypi"></a>

```csharp
private void PutPypi(ClusterLibraryPypi Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.putPypi.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterLibraryPypi">ClusterLibraryPypi</a>

---

##### `ResetCran` <a name="ResetCran" id="@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.resetCran"></a>

```csharp
private void ResetCran()
```

##### `ResetEgg` <a name="ResetEgg" id="@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.resetEgg"></a>

```csharp
private void ResetEgg()
```

##### `ResetJar` <a name="ResetJar" id="@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.resetJar"></a>

```csharp
private void ResetJar()
```

##### `ResetMaven` <a name="ResetMaven" id="@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.resetMaven"></a>

```csharp
private void ResetMaven()
```

##### `ResetPypi` <a name="ResetPypi" id="@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.resetPypi"></a>

```csharp
private void ResetPypi()
```

##### `ResetWhl` <a name="ResetWhl" id="@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.resetWhl"></a>

```csharp
private void ResetWhl()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.property.cran">Cran</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryCranOutputReference">ClusterLibraryCranOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.property.maven">Maven</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryMavenOutputReference">ClusterLibraryMavenOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.property.pypi">Pypi</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryPypiOutputReference">ClusterLibraryPypiOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.property.cranInput">CranInput</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryCran">ClusterLibraryCran</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.property.eggInput">EggInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.property.jarInput">JarInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.property.mavenInput">MavenInput</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryMaven">ClusterLibraryMaven</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.property.pypiInput">PypiInput</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryPypi">ClusterLibraryPypi</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.property.whlInput">WhlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.property.egg">Egg</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.property.jar">Jar</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.property.whl">Whl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Cran`<sup>Required</sup> <a name="Cran" id="@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.property.cran"></a>

```csharp
public ClusterLibraryCranOutputReference Cran { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterLibraryCranOutputReference">ClusterLibraryCranOutputReference</a>

---

##### `Maven`<sup>Required</sup> <a name="Maven" id="@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.property.maven"></a>

```csharp
public ClusterLibraryMavenOutputReference Maven { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterLibraryMavenOutputReference">ClusterLibraryMavenOutputReference</a>

---

##### `Pypi`<sup>Required</sup> <a name="Pypi" id="@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.property.pypi"></a>

```csharp
public ClusterLibraryPypiOutputReference Pypi { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterLibraryPypiOutputReference">ClusterLibraryPypiOutputReference</a>

---

##### `CranInput`<sup>Optional</sup> <a name="CranInput" id="@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.property.cranInput"></a>

```csharp
public ClusterLibraryCran CranInput { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterLibraryCran">ClusterLibraryCran</a>

---

##### `EggInput`<sup>Optional</sup> <a name="EggInput" id="@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.property.eggInput"></a>

```csharp
public string EggInput { get; }
```

- *Type:* string

---

##### `JarInput`<sup>Optional</sup> <a name="JarInput" id="@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.property.jarInput"></a>

```csharp
public string JarInput { get; }
```

- *Type:* string

---

##### `MavenInput`<sup>Optional</sup> <a name="MavenInput" id="@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.property.mavenInput"></a>

```csharp
public ClusterLibraryMaven MavenInput { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterLibraryMaven">ClusterLibraryMaven</a>

---

##### `PypiInput`<sup>Optional</sup> <a name="PypiInput" id="@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.property.pypiInput"></a>

```csharp
public ClusterLibraryPypi PypiInput { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterLibraryPypi">ClusterLibraryPypi</a>

---

##### `WhlInput`<sup>Optional</sup> <a name="WhlInput" id="@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.property.whlInput"></a>

```csharp
public string WhlInput { get; }
```

- *Type:* string

---

##### `Egg`<sup>Required</sup> <a name="Egg" id="@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.property.egg"></a>

```csharp
public string Egg { get; }
```

- *Type:* string

---

##### `Jar`<sup>Required</sup> <a name="Jar" id="@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.property.jar"></a>

```csharp
public string Jar { get; }
```

- *Type:* string

---

##### `Whl`<sup>Required</sup> <a name="Whl" id="@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.property.whl"></a>

```csharp
public string Whl { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ClusterLibraryPypiOutputReference <a name="ClusterLibraryPypiOutputReference" id="@cdktf/provider-databricks.cluster.ClusterLibraryPypiOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.cluster.ClusterLibraryPypiOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new ClusterLibraryPypiOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryPypiOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryPypiOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.cluster.ClusterLibraryPypiOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryPypiOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryPypiOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryPypiOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryPypiOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryPypiOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryPypiOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryPypiOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryPypiOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryPypiOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryPypiOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryPypiOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryPypiOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryPypiOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryPypiOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryPypiOutputReference.resetRepo">ResetRepo</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.cluster.ClusterLibraryPypiOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryPypiOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryPypiOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryPypiOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryPypiOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryPypiOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryPypiOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryPypiOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryPypiOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryPypiOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryPypiOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryPypiOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryPypiOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryPypiOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryPypiOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryPypiOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryPypiOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryPypiOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryPypiOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryPypiOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.cluster.ClusterLibraryPypiOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.cluster.ClusterLibraryPypiOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.cluster.ClusterLibraryPypiOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.cluster.ClusterLibraryPypiOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRepo` <a name="ResetRepo" id="@cdktf/provider-databricks.cluster.ClusterLibraryPypiOutputReference.resetRepo"></a>

```csharp
private void ResetRepo()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryPypiOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryPypiOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryPypiOutputReference.property.packageInput">PackageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryPypiOutputReference.property.repoInput">RepoInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryPypiOutputReference.property.package">Package</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryPypiOutputReference.property.repo">Repo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryPypiOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryPypi">ClusterLibraryPypi</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.cluster.ClusterLibraryPypiOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.cluster.ClusterLibraryPypiOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PackageInput`<sup>Optional</sup> <a name="PackageInput" id="@cdktf/provider-databricks.cluster.ClusterLibraryPypiOutputReference.property.packageInput"></a>

```csharp
public string PackageInput { get; }
```

- *Type:* string

---

##### `RepoInput`<sup>Optional</sup> <a name="RepoInput" id="@cdktf/provider-databricks.cluster.ClusterLibraryPypiOutputReference.property.repoInput"></a>

```csharp
public string RepoInput { get; }
```

- *Type:* string

---

##### `Package`<sup>Required</sup> <a name="Package" id="@cdktf/provider-databricks.cluster.ClusterLibraryPypiOutputReference.property.package"></a>

```csharp
public string Package { get; }
```

- *Type:* string

---

##### `Repo`<sup>Required</sup> <a name="Repo" id="@cdktf/provider-databricks.cluster.ClusterLibraryPypiOutputReference.property.repo"></a>

```csharp
public string Repo { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.cluster.ClusterLibraryPypiOutputReference.property.internalValue"></a>

```csharp
public ClusterLibraryPypi InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterLibraryPypi">ClusterLibraryPypi</a>

---


### ClusterTimeoutsOutputReference <a name="ClusterTimeoutsOutputReference" id="@cdktf/provider-databricks.cluster.ClusterTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.cluster.ClusterTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new ClusterTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.cluster.ClusterTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.cluster.ClusterTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.cluster.ClusterTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.cluster.ClusterTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.cluster.ClusterTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.cluster.ClusterTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.cluster.ClusterTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.cluster.ClusterTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.cluster.ClusterTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.cluster.ClusterTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.cluster.ClusterTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.cluster.ClusterTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-databricks.cluster.ClusterTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-databricks.cluster.ClusterTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-databricks.cluster.ClusterTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.cluster.ClusterTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.cluster.ClusterTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-databricks.cluster.ClusterTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-databricks.cluster.ClusterTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-databricks.cluster.ClusterTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-databricks.cluster.ClusterTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-databricks.cluster.ClusterTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-databricks.cluster.ClusterTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.cluster.ClusterTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ClusterWorkloadTypeClientsOutputReference <a name="ClusterWorkloadTypeClientsOutputReference" id="@cdktf/provider-databricks.cluster.ClusterWorkloadTypeClientsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.cluster.ClusterWorkloadTypeClientsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new ClusterWorkloadTypeClientsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterWorkloadTypeClientsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterWorkloadTypeClientsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.cluster.ClusterWorkloadTypeClientsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterWorkloadTypeClientsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterWorkloadTypeClientsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterWorkloadTypeClientsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterWorkloadTypeClientsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterWorkloadTypeClientsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterWorkloadTypeClientsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterWorkloadTypeClientsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterWorkloadTypeClientsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterWorkloadTypeClientsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterWorkloadTypeClientsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterWorkloadTypeClientsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterWorkloadTypeClientsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterWorkloadTypeClientsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterWorkloadTypeClientsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterWorkloadTypeClientsOutputReference.resetJobs">ResetJobs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterWorkloadTypeClientsOutputReference.resetNotebooks">ResetNotebooks</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.cluster.ClusterWorkloadTypeClientsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterWorkloadTypeClientsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterWorkloadTypeClientsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.cluster.ClusterWorkloadTypeClientsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterWorkloadTypeClientsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterWorkloadTypeClientsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterWorkloadTypeClientsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.cluster.ClusterWorkloadTypeClientsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterWorkloadTypeClientsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.cluster.ClusterWorkloadTypeClientsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterWorkloadTypeClientsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.cluster.ClusterWorkloadTypeClientsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterWorkloadTypeClientsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterWorkloadTypeClientsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterWorkloadTypeClientsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.cluster.ClusterWorkloadTypeClientsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterWorkloadTypeClientsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterWorkloadTypeClientsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterWorkloadTypeClientsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.cluster.ClusterWorkloadTypeClientsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.cluster.ClusterWorkloadTypeClientsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.cluster.ClusterWorkloadTypeClientsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.cluster.ClusterWorkloadTypeClientsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.cluster.ClusterWorkloadTypeClientsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetJobs` <a name="ResetJobs" id="@cdktf/provider-databricks.cluster.ClusterWorkloadTypeClientsOutputReference.resetJobs"></a>

```csharp
private void ResetJobs()
```

##### `ResetNotebooks` <a name="ResetNotebooks" id="@cdktf/provider-databricks.cluster.ClusterWorkloadTypeClientsOutputReference.resetNotebooks"></a>

```csharp
private void ResetNotebooks()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterWorkloadTypeClientsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterWorkloadTypeClientsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterWorkloadTypeClientsOutputReference.property.jobsInput">JobsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterWorkloadTypeClientsOutputReference.property.notebooksInput">NotebooksInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterWorkloadTypeClientsOutputReference.property.jobs">Jobs</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterWorkloadTypeClientsOutputReference.property.notebooks">Notebooks</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterWorkloadTypeClientsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterWorkloadTypeClients">ClusterWorkloadTypeClients</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.cluster.ClusterWorkloadTypeClientsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.cluster.ClusterWorkloadTypeClientsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `JobsInput`<sup>Optional</sup> <a name="JobsInput" id="@cdktf/provider-databricks.cluster.ClusterWorkloadTypeClientsOutputReference.property.jobsInput"></a>

```csharp
public object JobsInput { get; }
```

- *Type:* object

---

##### `NotebooksInput`<sup>Optional</sup> <a name="NotebooksInput" id="@cdktf/provider-databricks.cluster.ClusterWorkloadTypeClientsOutputReference.property.notebooksInput"></a>

```csharp
public object NotebooksInput { get; }
```

- *Type:* object

---

##### `Jobs`<sup>Required</sup> <a name="Jobs" id="@cdktf/provider-databricks.cluster.ClusterWorkloadTypeClientsOutputReference.property.jobs"></a>

```csharp
public object Jobs { get; }
```

- *Type:* object

---

##### `Notebooks`<sup>Required</sup> <a name="Notebooks" id="@cdktf/provider-databricks.cluster.ClusterWorkloadTypeClientsOutputReference.property.notebooks"></a>

```csharp
public object Notebooks { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.cluster.ClusterWorkloadTypeClientsOutputReference.property.internalValue"></a>

```csharp
public ClusterWorkloadTypeClients InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterWorkloadTypeClients">ClusterWorkloadTypeClients</a>

---


### ClusterWorkloadTypeOutputReference <a name="ClusterWorkloadTypeOutputReference" id="@cdktf/provider-databricks.cluster.ClusterWorkloadTypeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.cluster.ClusterWorkloadTypeOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new ClusterWorkloadTypeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterWorkloadTypeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterWorkloadTypeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.cluster.ClusterWorkloadTypeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterWorkloadTypeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterWorkloadTypeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterWorkloadTypeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterWorkloadTypeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterWorkloadTypeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterWorkloadTypeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterWorkloadTypeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterWorkloadTypeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterWorkloadTypeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterWorkloadTypeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterWorkloadTypeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterWorkloadTypeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterWorkloadTypeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterWorkloadTypeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterWorkloadTypeOutputReference.putClients">PutClients</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.cluster.ClusterWorkloadTypeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterWorkloadTypeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterWorkloadTypeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.cluster.ClusterWorkloadTypeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterWorkloadTypeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterWorkloadTypeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterWorkloadTypeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.cluster.ClusterWorkloadTypeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterWorkloadTypeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.cluster.ClusterWorkloadTypeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterWorkloadTypeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.cluster.ClusterWorkloadTypeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterWorkloadTypeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterWorkloadTypeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterWorkloadTypeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.cluster.ClusterWorkloadTypeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterWorkloadTypeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterWorkloadTypeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterWorkloadTypeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.cluster.ClusterWorkloadTypeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.cluster.ClusterWorkloadTypeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.cluster.ClusterWorkloadTypeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.cluster.ClusterWorkloadTypeOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.cluster.ClusterWorkloadTypeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutClients` <a name="PutClients" id="@cdktf/provider-databricks.cluster.ClusterWorkloadTypeOutputReference.putClients"></a>

```csharp
private void PutClients(ClusterWorkloadTypeClients Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.cluster.ClusterWorkloadTypeOutputReference.putClients.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterWorkloadTypeClients">ClusterWorkloadTypeClients</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterWorkloadTypeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterWorkloadTypeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterWorkloadTypeOutputReference.property.clients">Clients</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterWorkloadTypeClientsOutputReference">ClusterWorkloadTypeClientsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterWorkloadTypeOutputReference.property.clientsInput">ClientsInput</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterWorkloadTypeClients">ClusterWorkloadTypeClients</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterWorkloadTypeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterWorkloadType">ClusterWorkloadType</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.cluster.ClusterWorkloadTypeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.cluster.ClusterWorkloadTypeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Clients`<sup>Required</sup> <a name="Clients" id="@cdktf/provider-databricks.cluster.ClusterWorkloadTypeOutputReference.property.clients"></a>

```csharp
public ClusterWorkloadTypeClientsOutputReference Clients { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterWorkloadTypeClientsOutputReference">ClusterWorkloadTypeClientsOutputReference</a>

---

##### `ClientsInput`<sup>Optional</sup> <a name="ClientsInput" id="@cdktf/provider-databricks.cluster.ClusterWorkloadTypeOutputReference.property.clientsInput"></a>

```csharp
public ClusterWorkloadTypeClients ClientsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterWorkloadTypeClients">ClusterWorkloadTypeClients</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.cluster.ClusterWorkloadTypeOutputReference.property.internalValue"></a>

```csharp
public ClusterWorkloadType InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterWorkloadType">ClusterWorkloadType</a>

---



