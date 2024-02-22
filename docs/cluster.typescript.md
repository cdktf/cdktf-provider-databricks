# `cluster` Submodule <a name="`cluster` Submodule" id="@cdktf/provider-databricks.cluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Cluster <a name="Cluster" id="@cdktf/provider-databricks.cluster.Cluster"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster databricks_cluster}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.cluster.Cluster.Initializer"></a>

```typescript
import { cluster } from '@cdktf/provider-databricks'

new cluster.Cluster(scope: Construct, id: string, config: ClusterConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterConfig">ClusterConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.cluster.Cluster.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.cluster.Cluster.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-databricks.cluster.Cluster.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterConfig">ClusterConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.putAutoscale">putAutoscale</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.putAwsAttributes">putAwsAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.putAzureAttributes">putAzureAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.putClusterLogConf">putClusterLogConf</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.putClusterMountInfo">putClusterMountInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.putDockerImage">putDockerImage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.putGcpAttributes">putGcpAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.putInitScripts">putInitScripts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.putLibrary">putLibrary</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.putWorkloadType">putWorkloadType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.resetApplyPolicyDefaultValues">resetApplyPolicyDefaultValues</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.resetAutoscale">resetAutoscale</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.resetAutoterminationMinutes">resetAutoterminationMinutes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.resetAwsAttributes">resetAwsAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.resetAzureAttributes">resetAzureAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.resetClusterId">resetClusterId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.resetClusterLogConf">resetClusterLogConf</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.resetClusterMountInfo">resetClusterMountInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.resetClusterName">resetClusterName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.resetCustomTags">resetCustomTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.resetDataSecurityMode">resetDataSecurityMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.resetDockerImage">resetDockerImage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.resetDriverInstancePoolId">resetDriverInstancePoolId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.resetDriverNodeTypeId">resetDriverNodeTypeId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.resetEnableElasticDisk">resetEnableElasticDisk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.resetEnableLocalDiskEncryption">resetEnableLocalDiskEncryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.resetGcpAttributes">resetGcpAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.resetIdempotencyToken">resetIdempotencyToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.resetInitScripts">resetInitScripts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.resetInstancePoolId">resetInstancePoolId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.resetIsPinned">resetIsPinned</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.resetLibrary">resetLibrary</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.resetNodeTypeId">resetNodeTypeId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.resetNumWorkers">resetNumWorkers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.resetPolicyId">resetPolicyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.resetRuntimeEngine">resetRuntimeEngine</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.resetSingleUserName">resetSingleUserName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.resetSparkConf">resetSparkConf</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.resetSparkEnvVars">resetSparkEnvVars</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.resetSshPublicKeys">resetSshPublicKeys</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.resetWorkloadType">resetWorkloadType</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.cluster.Cluster.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-databricks.cluster.Cluster.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.cluster.Cluster.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.cluster.Cluster.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-databricks.cluster.Cluster.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-databricks.cluster.Cluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-databricks.cluster.Cluster.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-databricks.cluster.Cluster.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-databricks.cluster.Cluster.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-databricks.cluster.Cluster.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-databricks.cluster.Cluster.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-databricks.cluster.Cluster.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.cluster.Cluster.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.Cluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.cluster.Cluster.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.Cluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.cluster.Cluster.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.Cluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.cluster.Cluster.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.Cluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.cluster.Cluster.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.Cluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.cluster.Cluster.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.Cluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.cluster.Cluster.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.Cluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.cluster.Cluster.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.Cluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.cluster.Cluster.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.Cluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-databricks.cluster.Cluster.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-databricks.cluster.Cluster.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.cluster.Cluster.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.cluster.Cluster.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.cluster.Cluster.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.Cluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-databricks.cluster.Cluster.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.cluster.Cluster.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-databricks.cluster.Cluster.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-databricks.cluster.Cluster.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-databricks.cluster.Cluster.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-databricks.cluster.Cluster.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.cluster.Cluster.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAutoscale` <a name="putAutoscale" id="@cdktf/provider-databricks.cluster.Cluster.putAutoscale"></a>

```typescript
public putAutoscale(value: ClusterAutoscale): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.cluster.Cluster.putAutoscale.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterAutoscale">ClusterAutoscale</a>

---

##### `putAwsAttributes` <a name="putAwsAttributes" id="@cdktf/provider-databricks.cluster.Cluster.putAwsAttributes"></a>

```typescript
public putAwsAttributes(value: ClusterAwsAttributes): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.cluster.Cluster.putAwsAttributes.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterAwsAttributes">ClusterAwsAttributes</a>

---

##### `putAzureAttributes` <a name="putAzureAttributes" id="@cdktf/provider-databricks.cluster.Cluster.putAzureAttributes"></a>

```typescript
public putAzureAttributes(value: ClusterAzureAttributes): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.cluster.Cluster.putAzureAttributes.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterAzureAttributes">ClusterAzureAttributes</a>

---

##### `putClusterLogConf` <a name="putClusterLogConf" id="@cdktf/provider-databricks.cluster.Cluster.putClusterLogConf"></a>

```typescript
public putClusterLogConf(value: ClusterClusterLogConf): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.cluster.Cluster.putClusterLogConf.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConf">ClusterClusterLogConf</a>

---

##### `putClusterMountInfo` <a name="putClusterMountInfo" id="@cdktf/provider-databricks.cluster.Cluster.putClusterMountInfo"></a>

```typescript
public putClusterMountInfo(value: IResolvable | ClusterClusterMountInfo[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.cluster.Cluster.putClusterMountInfo.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfo">ClusterClusterMountInfo</a>[]

---

##### `putDockerImage` <a name="putDockerImage" id="@cdktf/provider-databricks.cluster.Cluster.putDockerImage"></a>

```typescript
public putDockerImage(value: ClusterDockerImage): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.cluster.Cluster.putDockerImage.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterDockerImage">ClusterDockerImage</a>

---

##### `putGcpAttributes` <a name="putGcpAttributes" id="@cdktf/provider-databricks.cluster.Cluster.putGcpAttributes"></a>

```typescript
public putGcpAttributes(value: ClusterGcpAttributes): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.cluster.Cluster.putGcpAttributes.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterGcpAttributes">ClusterGcpAttributes</a>

---

##### `putInitScripts` <a name="putInitScripts" id="@cdktf/provider-databricks.cluster.Cluster.putInitScripts"></a>

```typescript
public putInitScripts(value: IResolvable | ClusterInitScripts[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.cluster.Cluster.putInitScripts.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.cluster.ClusterInitScripts">ClusterInitScripts</a>[]

---

##### `putLibrary` <a name="putLibrary" id="@cdktf/provider-databricks.cluster.Cluster.putLibrary"></a>

```typescript
public putLibrary(value: IResolvable | ClusterLibrary[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.cluster.Cluster.putLibrary.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.cluster.ClusterLibrary">ClusterLibrary</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-databricks.cluster.Cluster.putTimeouts"></a>

```typescript
public putTimeouts(value: ClusterTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.cluster.Cluster.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterTimeouts">ClusterTimeouts</a>

---

##### `putWorkloadType` <a name="putWorkloadType" id="@cdktf/provider-databricks.cluster.Cluster.putWorkloadType"></a>

```typescript
public putWorkloadType(value: ClusterWorkloadType): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.cluster.Cluster.putWorkloadType.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterWorkloadType">ClusterWorkloadType</a>

---

##### `resetApplyPolicyDefaultValues` <a name="resetApplyPolicyDefaultValues" id="@cdktf/provider-databricks.cluster.Cluster.resetApplyPolicyDefaultValues"></a>

```typescript
public resetApplyPolicyDefaultValues(): void
```

##### `resetAutoscale` <a name="resetAutoscale" id="@cdktf/provider-databricks.cluster.Cluster.resetAutoscale"></a>

```typescript
public resetAutoscale(): void
```

##### `resetAutoterminationMinutes` <a name="resetAutoterminationMinutes" id="@cdktf/provider-databricks.cluster.Cluster.resetAutoterminationMinutes"></a>

```typescript
public resetAutoterminationMinutes(): void
```

##### `resetAwsAttributes` <a name="resetAwsAttributes" id="@cdktf/provider-databricks.cluster.Cluster.resetAwsAttributes"></a>

```typescript
public resetAwsAttributes(): void
```

##### `resetAzureAttributes` <a name="resetAzureAttributes" id="@cdktf/provider-databricks.cluster.Cluster.resetAzureAttributes"></a>

```typescript
public resetAzureAttributes(): void
```

##### `resetClusterId` <a name="resetClusterId" id="@cdktf/provider-databricks.cluster.Cluster.resetClusterId"></a>

```typescript
public resetClusterId(): void
```

##### `resetClusterLogConf` <a name="resetClusterLogConf" id="@cdktf/provider-databricks.cluster.Cluster.resetClusterLogConf"></a>

```typescript
public resetClusterLogConf(): void
```

##### `resetClusterMountInfo` <a name="resetClusterMountInfo" id="@cdktf/provider-databricks.cluster.Cluster.resetClusterMountInfo"></a>

```typescript
public resetClusterMountInfo(): void
```

##### `resetClusterName` <a name="resetClusterName" id="@cdktf/provider-databricks.cluster.Cluster.resetClusterName"></a>

```typescript
public resetClusterName(): void
```

##### `resetCustomTags` <a name="resetCustomTags" id="@cdktf/provider-databricks.cluster.Cluster.resetCustomTags"></a>

```typescript
public resetCustomTags(): void
```

##### `resetDataSecurityMode` <a name="resetDataSecurityMode" id="@cdktf/provider-databricks.cluster.Cluster.resetDataSecurityMode"></a>

```typescript
public resetDataSecurityMode(): void
```

##### `resetDockerImage` <a name="resetDockerImage" id="@cdktf/provider-databricks.cluster.Cluster.resetDockerImage"></a>

```typescript
public resetDockerImage(): void
```

##### `resetDriverInstancePoolId` <a name="resetDriverInstancePoolId" id="@cdktf/provider-databricks.cluster.Cluster.resetDriverInstancePoolId"></a>

```typescript
public resetDriverInstancePoolId(): void
```

##### `resetDriverNodeTypeId` <a name="resetDriverNodeTypeId" id="@cdktf/provider-databricks.cluster.Cluster.resetDriverNodeTypeId"></a>

```typescript
public resetDriverNodeTypeId(): void
```

##### `resetEnableElasticDisk` <a name="resetEnableElasticDisk" id="@cdktf/provider-databricks.cluster.Cluster.resetEnableElasticDisk"></a>

```typescript
public resetEnableElasticDisk(): void
```

##### `resetEnableLocalDiskEncryption` <a name="resetEnableLocalDiskEncryption" id="@cdktf/provider-databricks.cluster.Cluster.resetEnableLocalDiskEncryption"></a>

```typescript
public resetEnableLocalDiskEncryption(): void
```

##### `resetGcpAttributes` <a name="resetGcpAttributes" id="@cdktf/provider-databricks.cluster.Cluster.resetGcpAttributes"></a>

```typescript
public resetGcpAttributes(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-databricks.cluster.Cluster.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIdempotencyToken` <a name="resetIdempotencyToken" id="@cdktf/provider-databricks.cluster.Cluster.resetIdempotencyToken"></a>

```typescript
public resetIdempotencyToken(): void
```

##### `resetInitScripts` <a name="resetInitScripts" id="@cdktf/provider-databricks.cluster.Cluster.resetInitScripts"></a>

```typescript
public resetInitScripts(): void
```

##### `resetInstancePoolId` <a name="resetInstancePoolId" id="@cdktf/provider-databricks.cluster.Cluster.resetInstancePoolId"></a>

```typescript
public resetInstancePoolId(): void
```

##### `resetIsPinned` <a name="resetIsPinned" id="@cdktf/provider-databricks.cluster.Cluster.resetIsPinned"></a>

```typescript
public resetIsPinned(): void
```

##### `resetLibrary` <a name="resetLibrary" id="@cdktf/provider-databricks.cluster.Cluster.resetLibrary"></a>

```typescript
public resetLibrary(): void
```

##### `resetNodeTypeId` <a name="resetNodeTypeId" id="@cdktf/provider-databricks.cluster.Cluster.resetNodeTypeId"></a>

```typescript
public resetNodeTypeId(): void
```

##### `resetNumWorkers` <a name="resetNumWorkers" id="@cdktf/provider-databricks.cluster.Cluster.resetNumWorkers"></a>

```typescript
public resetNumWorkers(): void
```

##### `resetPolicyId` <a name="resetPolicyId" id="@cdktf/provider-databricks.cluster.Cluster.resetPolicyId"></a>

```typescript
public resetPolicyId(): void
```

##### `resetRuntimeEngine` <a name="resetRuntimeEngine" id="@cdktf/provider-databricks.cluster.Cluster.resetRuntimeEngine"></a>

```typescript
public resetRuntimeEngine(): void
```

##### `resetSingleUserName` <a name="resetSingleUserName" id="@cdktf/provider-databricks.cluster.Cluster.resetSingleUserName"></a>

```typescript
public resetSingleUserName(): void
```

##### `resetSparkConf` <a name="resetSparkConf" id="@cdktf/provider-databricks.cluster.Cluster.resetSparkConf"></a>

```typescript
public resetSparkConf(): void
```

##### `resetSparkEnvVars` <a name="resetSparkEnvVars" id="@cdktf/provider-databricks.cluster.Cluster.resetSparkEnvVars"></a>

```typescript
public resetSparkEnvVars(): void
```

##### `resetSshPublicKeys` <a name="resetSshPublicKeys" id="@cdktf/provider-databricks.cluster.Cluster.resetSshPublicKeys"></a>

```typescript
public resetSshPublicKeys(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-databricks.cluster.Cluster.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetWorkloadType` <a name="resetWorkloadType" id="@cdktf/provider-databricks.cluster.Cluster.resetWorkloadType"></a>

```typescript
public resetWorkloadType(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a Cluster resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-databricks.cluster.Cluster.isConstruct"></a>

```typescript
import { cluster } from '@cdktf/provider-databricks'

cluster.Cluster.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.cluster.Cluster.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-databricks.cluster.Cluster.isTerraformElement"></a>

```typescript
import { cluster } from '@cdktf/provider-databricks'

cluster.Cluster.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.cluster.Cluster.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-databricks.cluster.Cluster.isTerraformResource"></a>

```typescript
import { cluster } from '@cdktf/provider-databricks'

cluster.Cluster.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.cluster.Cluster.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-databricks.cluster.Cluster.generateConfigForImport"></a>

```typescript
import { cluster } from '@cdktf/provider-databricks'

cluster.Cluster.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a Cluster resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.cluster.Cluster.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-databricks.cluster.Cluster.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the Cluster to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-databricks.cluster.Cluster.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing Cluster that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.cluster.Cluster.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the Cluster to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.autoscale">autoscale</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterAutoscaleOutputReference">ClusterAutoscaleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.awsAttributes">awsAttributes</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference">ClusterAwsAttributesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.azureAttributes">azureAttributes</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterAzureAttributesOutputReference">ClusterAzureAttributesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.clusterLogConf">clusterLogConf</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfOutputReference">ClusterClusterLogConfOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.clusterMountInfo">clusterMountInfo</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfoList">ClusterClusterMountInfoList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.clusterSource">clusterSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.defaultTags">defaultTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.dockerImage">dockerImage</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterDockerImageOutputReference">ClusterDockerImageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.gcpAttributes">gcpAttributes</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference">ClusterGcpAttributesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.initScripts">initScripts</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsList">ClusterInitScriptsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.library">library</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryList">ClusterLibraryList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterTimeoutsOutputReference">ClusterTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.url">url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.workloadType">workloadType</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterWorkloadTypeOutputReference">ClusterWorkloadTypeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.applyPolicyDefaultValuesInput">applyPolicyDefaultValuesInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.autoscaleInput">autoscaleInput</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterAutoscale">ClusterAutoscale</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.autoterminationMinutesInput">autoterminationMinutesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.awsAttributesInput">awsAttributesInput</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterAwsAttributes">ClusterAwsAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.azureAttributesInput">azureAttributesInput</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterAzureAttributes">ClusterAzureAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.clusterIdInput">clusterIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.clusterLogConfInput">clusterLogConfInput</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConf">ClusterClusterLogConf</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.clusterMountInfoInput">clusterMountInfoInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfo">ClusterClusterMountInfo</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.clusterNameInput">clusterNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.customTagsInput">customTagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.dataSecurityModeInput">dataSecurityModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.dockerImageInput">dockerImageInput</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterDockerImage">ClusterDockerImage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.driverInstancePoolIdInput">driverInstancePoolIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.driverNodeTypeIdInput">driverNodeTypeIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.enableElasticDiskInput">enableElasticDiskInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.enableLocalDiskEncryptionInput">enableLocalDiskEncryptionInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.gcpAttributesInput">gcpAttributesInput</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterGcpAttributes">ClusterGcpAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.idempotencyTokenInput">idempotencyTokenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.initScriptsInput">initScriptsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.cluster.ClusterInitScripts">ClusterInitScripts</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.instancePoolIdInput">instancePoolIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.isPinnedInput">isPinnedInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.libraryInput">libraryInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.cluster.ClusterLibrary">ClusterLibrary</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.nodeTypeIdInput">nodeTypeIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.numWorkersInput">numWorkersInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.policyIdInput">policyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.runtimeEngineInput">runtimeEngineInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.singleUserNameInput">singleUserNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.sparkConfInput">sparkConfInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.sparkEnvVarsInput">sparkEnvVarsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.sparkVersionInput">sparkVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.sshPublicKeysInput">sshPublicKeysInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.cluster.ClusterTimeouts">ClusterTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.workloadTypeInput">workloadTypeInput</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterWorkloadType">ClusterWorkloadType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.applyPolicyDefaultValues">applyPolicyDefaultValues</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.autoterminationMinutes">autoterminationMinutes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.clusterId">clusterId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.clusterName">clusterName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.customTags">customTags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.dataSecurityMode">dataSecurityMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.driverInstancePoolId">driverInstancePoolId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.driverNodeTypeId">driverNodeTypeId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.enableElasticDisk">enableElasticDisk</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.enableLocalDiskEncryption">enableLocalDiskEncryption</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.idempotencyToken">idempotencyToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.instancePoolId">instancePoolId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.isPinned">isPinned</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.nodeTypeId">nodeTypeId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.numWorkers">numWorkers</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.policyId">policyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.runtimeEngine">runtimeEngine</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.singleUserName">singleUserName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.sparkConf">sparkConf</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.sparkEnvVars">sparkEnvVars</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.sparkVersion">sparkVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.sshPublicKeys">sshPublicKeys</a></code> | <code>string[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-databricks.cluster.Cluster.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-databricks.cluster.Cluster.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.cluster.Cluster.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-databricks.cluster.Cluster.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-databricks.cluster.Cluster.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-databricks.cluster.Cluster.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-databricks.cluster.Cluster.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.cluster.Cluster.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.cluster.Cluster.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.cluster.Cluster.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.cluster.Cluster.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.cluster.Cluster.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.cluster.Cluster.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.cluster.Cluster.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `autoscale`<sup>Required</sup> <a name="autoscale" id="@cdktf/provider-databricks.cluster.Cluster.property.autoscale"></a>

```typescript
public readonly autoscale: ClusterAutoscaleOutputReference;
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterAutoscaleOutputReference">ClusterAutoscaleOutputReference</a>

---

##### `awsAttributes`<sup>Required</sup> <a name="awsAttributes" id="@cdktf/provider-databricks.cluster.Cluster.property.awsAttributes"></a>

```typescript
public readonly awsAttributes: ClusterAwsAttributesOutputReference;
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference">ClusterAwsAttributesOutputReference</a>

---

##### `azureAttributes`<sup>Required</sup> <a name="azureAttributes" id="@cdktf/provider-databricks.cluster.Cluster.property.azureAttributes"></a>

```typescript
public readonly azureAttributes: ClusterAzureAttributesOutputReference;
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterAzureAttributesOutputReference">ClusterAzureAttributesOutputReference</a>

---

##### `clusterLogConf`<sup>Required</sup> <a name="clusterLogConf" id="@cdktf/provider-databricks.cluster.Cluster.property.clusterLogConf"></a>

```typescript
public readonly clusterLogConf: ClusterClusterLogConfOutputReference;
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfOutputReference">ClusterClusterLogConfOutputReference</a>

---

##### `clusterMountInfo`<sup>Required</sup> <a name="clusterMountInfo" id="@cdktf/provider-databricks.cluster.Cluster.property.clusterMountInfo"></a>

```typescript
public readonly clusterMountInfo: ClusterClusterMountInfoList;
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfoList">ClusterClusterMountInfoList</a>

---

##### `clusterSource`<sup>Required</sup> <a name="clusterSource" id="@cdktf/provider-databricks.cluster.Cluster.property.clusterSource"></a>

```typescript
public readonly clusterSource: string;
```

- *Type:* string

---

##### `defaultTags`<sup>Required</sup> <a name="defaultTags" id="@cdktf/provider-databricks.cluster.Cluster.property.defaultTags"></a>

```typescript
public readonly defaultTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `dockerImage`<sup>Required</sup> <a name="dockerImage" id="@cdktf/provider-databricks.cluster.Cluster.property.dockerImage"></a>

```typescript
public readonly dockerImage: ClusterDockerImageOutputReference;
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterDockerImageOutputReference">ClusterDockerImageOutputReference</a>

---

##### `gcpAttributes`<sup>Required</sup> <a name="gcpAttributes" id="@cdktf/provider-databricks.cluster.Cluster.property.gcpAttributes"></a>

```typescript
public readonly gcpAttributes: ClusterGcpAttributesOutputReference;
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference">ClusterGcpAttributesOutputReference</a>

---

##### `initScripts`<sup>Required</sup> <a name="initScripts" id="@cdktf/provider-databricks.cluster.Cluster.property.initScripts"></a>

```typescript
public readonly initScripts: ClusterInitScriptsList;
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsList">ClusterInitScriptsList</a>

---

##### `library`<sup>Required</sup> <a name="library" id="@cdktf/provider-databricks.cluster.Cluster.property.library"></a>

```typescript
public readonly library: ClusterLibraryList;
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterLibraryList">ClusterLibraryList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-databricks.cluster.Cluster.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-databricks.cluster.Cluster.property.timeouts"></a>

```typescript
public readonly timeouts: ClusterTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterTimeoutsOutputReference">ClusterTimeoutsOutputReference</a>

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-databricks.cluster.Cluster.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

---

##### `workloadType`<sup>Required</sup> <a name="workloadType" id="@cdktf/provider-databricks.cluster.Cluster.property.workloadType"></a>

```typescript
public readonly workloadType: ClusterWorkloadTypeOutputReference;
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterWorkloadTypeOutputReference">ClusterWorkloadTypeOutputReference</a>

---

##### `applyPolicyDefaultValuesInput`<sup>Optional</sup> <a name="applyPolicyDefaultValuesInput" id="@cdktf/provider-databricks.cluster.Cluster.property.applyPolicyDefaultValuesInput"></a>

```typescript
public readonly applyPolicyDefaultValuesInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `autoscaleInput`<sup>Optional</sup> <a name="autoscaleInput" id="@cdktf/provider-databricks.cluster.Cluster.property.autoscaleInput"></a>

```typescript
public readonly autoscaleInput: ClusterAutoscale;
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterAutoscale">ClusterAutoscale</a>

---

##### `autoterminationMinutesInput`<sup>Optional</sup> <a name="autoterminationMinutesInput" id="@cdktf/provider-databricks.cluster.Cluster.property.autoterminationMinutesInput"></a>

```typescript
public readonly autoterminationMinutesInput: number;
```

- *Type:* number

---

##### `awsAttributesInput`<sup>Optional</sup> <a name="awsAttributesInput" id="@cdktf/provider-databricks.cluster.Cluster.property.awsAttributesInput"></a>

```typescript
public readonly awsAttributesInput: ClusterAwsAttributes;
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterAwsAttributes">ClusterAwsAttributes</a>

---

##### `azureAttributesInput`<sup>Optional</sup> <a name="azureAttributesInput" id="@cdktf/provider-databricks.cluster.Cluster.property.azureAttributesInput"></a>

```typescript
public readonly azureAttributesInput: ClusterAzureAttributes;
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterAzureAttributes">ClusterAzureAttributes</a>

---

##### `clusterIdInput`<sup>Optional</sup> <a name="clusterIdInput" id="@cdktf/provider-databricks.cluster.Cluster.property.clusterIdInput"></a>

```typescript
public readonly clusterIdInput: string;
```

- *Type:* string

---

##### `clusterLogConfInput`<sup>Optional</sup> <a name="clusterLogConfInput" id="@cdktf/provider-databricks.cluster.Cluster.property.clusterLogConfInput"></a>

```typescript
public readonly clusterLogConfInput: ClusterClusterLogConf;
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConf">ClusterClusterLogConf</a>

---

##### `clusterMountInfoInput`<sup>Optional</sup> <a name="clusterMountInfoInput" id="@cdktf/provider-databricks.cluster.Cluster.property.clusterMountInfoInput"></a>

```typescript
public readonly clusterMountInfoInput: IResolvable | ClusterClusterMountInfo[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfo">ClusterClusterMountInfo</a>[]

---

##### `clusterNameInput`<sup>Optional</sup> <a name="clusterNameInput" id="@cdktf/provider-databricks.cluster.Cluster.property.clusterNameInput"></a>

```typescript
public readonly clusterNameInput: string;
```

- *Type:* string

---

##### `customTagsInput`<sup>Optional</sup> <a name="customTagsInput" id="@cdktf/provider-databricks.cluster.Cluster.property.customTagsInput"></a>

```typescript
public readonly customTagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `dataSecurityModeInput`<sup>Optional</sup> <a name="dataSecurityModeInput" id="@cdktf/provider-databricks.cluster.Cluster.property.dataSecurityModeInput"></a>

```typescript
public readonly dataSecurityModeInput: string;
```

- *Type:* string

---

##### `dockerImageInput`<sup>Optional</sup> <a name="dockerImageInput" id="@cdktf/provider-databricks.cluster.Cluster.property.dockerImageInput"></a>

```typescript
public readonly dockerImageInput: ClusterDockerImage;
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterDockerImage">ClusterDockerImage</a>

---

##### `driverInstancePoolIdInput`<sup>Optional</sup> <a name="driverInstancePoolIdInput" id="@cdktf/provider-databricks.cluster.Cluster.property.driverInstancePoolIdInput"></a>

```typescript
public readonly driverInstancePoolIdInput: string;
```

- *Type:* string

---

##### `driverNodeTypeIdInput`<sup>Optional</sup> <a name="driverNodeTypeIdInput" id="@cdktf/provider-databricks.cluster.Cluster.property.driverNodeTypeIdInput"></a>

```typescript
public readonly driverNodeTypeIdInput: string;
```

- *Type:* string

---

##### `enableElasticDiskInput`<sup>Optional</sup> <a name="enableElasticDiskInput" id="@cdktf/provider-databricks.cluster.Cluster.property.enableElasticDiskInput"></a>

```typescript
public readonly enableElasticDiskInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enableLocalDiskEncryptionInput`<sup>Optional</sup> <a name="enableLocalDiskEncryptionInput" id="@cdktf/provider-databricks.cluster.Cluster.property.enableLocalDiskEncryptionInput"></a>

```typescript
public readonly enableLocalDiskEncryptionInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `gcpAttributesInput`<sup>Optional</sup> <a name="gcpAttributesInput" id="@cdktf/provider-databricks.cluster.Cluster.property.gcpAttributesInput"></a>

```typescript
public readonly gcpAttributesInput: ClusterGcpAttributes;
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterGcpAttributes">ClusterGcpAttributes</a>

---

##### `idempotencyTokenInput`<sup>Optional</sup> <a name="idempotencyTokenInput" id="@cdktf/provider-databricks.cluster.Cluster.property.idempotencyTokenInput"></a>

```typescript
public readonly idempotencyTokenInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-databricks.cluster.Cluster.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `initScriptsInput`<sup>Optional</sup> <a name="initScriptsInput" id="@cdktf/provider-databricks.cluster.Cluster.property.initScriptsInput"></a>

```typescript
public readonly initScriptsInput: IResolvable | ClusterInitScripts[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.cluster.ClusterInitScripts">ClusterInitScripts</a>[]

---

##### `instancePoolIdInput`<sup>Optional</sup> <a name="instancePoolIdInput" id="@cdktf/provider-databricks.cluster.Cluster.property.instancePoolIdInput"></a>

```typescript
public readonly instancePoolIdInput: string;
```

- *Type:* string

---

##### `isPinnedInput`<sup>Optional</sup> <a name="isPinnedInput" id="@cdktf/provider-databricks.cluster.Cluster.property.isPinnedInput"></a>

```typescript
public readonly isPinnedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `libraryInput`<sup>Optional</sup> <a name="libraryInput" id="@cdktf/provider-databricks.cluster.Cluster.property.libraryInput"></a>

```typescript
public readonly libraryInput: IResolvable | ClusterLibrary[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.cluster.ClusterLibrary">ClusterLibrary</a>[]

---

##### `nodeTypeIdInput`<sup>Optional</sup> <a name="nodeTypeIdInput" id="@cdktf/provider-databricks.cluster.Cluster.property.nodeTypeIdInput"></a>

```typescript
public readonly nodeTypeIdInput: string;
```

- *Type:* string

---

##### `numWorkersInput`<sup>Optional</sup> <a name="numWorkersInput" id="@cdktf/provider-databricks.cluster.Cluster.property.numWorkersInput"></a>

```typescript
public readonly numWorkersInput: number;
```

- *Type:* number

---

##### `policyIdInput`<sup>Optional</sup> <a name="policyIdInput" id="@cdktf/provider-databricks.cluster.Cluster.property.policyIdInput"></a>

```typescript
public readonly policyIdInput: string;
```

- *Type:* string

---

##### `runtimeEngineInput`<sup>Optional</sup> <a name="runtimeEngineInput" id="@cdktf/provider-databricks.cluster.Cluster.property.runtimeEngineInput"></a>

```typescript
public readonly runtimeEngineInput: string;
```

- *Type:* string

---

##### `singleUserNameInput`<sup>Optional</sup> <a name="singleUserNameInput" id="@cdktf/provider-databricks.cluster.Cluster.property.singleUserNameInput"></a>

```typescript
public readonly singleUserNameInput: string;
```

- *Type:* string

---

##### `sparkConfInput`<sup>Optional</sup> <a name="sparkConfInput" id="@cdktf/provider-databricks.cluster.Cluster.property.sparkConfInput"></a>

```typescript
public readonly sparkConfInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `sparkEnvVarsInput`<sup>Optional</sup> <a name="sparkEnvVarsInput" id="@cdktf/provider-databricks.cluster.Cluster.property.sparkEnvVarsInput"></a>

```typescript
public readonly sparkEnvVarsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `sparkVersionInput`<sup>Optional</sup> <a name="sparkVersionInput" id="@cdktf/provider-databricks.cluster.Cluster.property.sparkVersionInput"></a>

```typescript
public readonly sparkVersionInput: string;
```

- *Type:* string

---

##### `sshPublicKeysInput`<sup>Optional</sup> <a name="sshPublicKeysInput" id="@cdktf/provider-databricks.cluster.Cluster.property.sshPublicKeysInput"></a>

```typescript
public readonly sshPublicKeysInput: string[];
```

- *Type:* string[]

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-databricks.cluster.Cluster.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | ClusterTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.cluster.ClusterTimeouts">ClusterTimeouts</a>

---

##### `workloadTypeInput`<sup>Optional</sup> <a name="workloadTypeInput" id="@cdktf/provider-databricks.cluster.Cluster.property.workloadTypeInput"></a>

```typescript
public readonly workloadTypeInput: ClusterWorkloadType;
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterWorkloadType">ClusterWorkloadType</a>

---

##### `applyPolicyDefaultValues`<sup>Required</sup> <a name="applyPolicyDefaultValues" id="@cdktf/provider-databricks.cluster.Cluster.property.applyPolicyDefaultValues"></a>

```typescript
public readonly applyPolicyDefaultValues: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `autoterminationMinutes`<sup>Required</sup> <a name="autoterminationMinutes" id="@cdktf/provider-databricks.cluster.Cluster.property.autoterminationMinutes"></a>

```typescript
public readonly autoterminationMinutes: number;
```

- *Type:* number

---

##### `clusterId`<sup>Required</sup> <a name="clusterId" id="@cdktf/provider-databricks.cluster.Cluster.property.clusterId"></a>

```typescript
public readonly clusterId: string;
```

- *Type:* string

---

##### `clusterName`<sup>Required</sup> <a name="clusterName" id="@cdktf/provider-databricks.cluster.Cluster.property.clusterName"></a>

```typescript
public readonly clusterName: string;
```

- *Type:* string

---

##### `customTags`<sup>Required</sup> <a name="customTags" id="@cdktf/provider-databricks.cluster.Cluster.property.customTags"></a>

```typescript
public readonly customTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `dataSecurityMode`<sup>Required</sup> <a name="dataSecurityMode" id="@cdktf/provider-databricks.cluster.Cluster.property.dataSecurityMode"></a>

```typescript
public readonly dataSecurityMode: string;
```

- *Type:* string

---

##### `driverInstancePoolId`<sup>Required</sup> <a name="driverInstancePoolId" id="@cdktf/provider-databricks.cluster.Cluster.property.driverInstancePoolId"></a>

```typescript
public readonly driverInstancePoolId: string;
```

- *Type:* string

---

##### `driverNodeTypeId`<sup>Required</sup> <a name="driverNodeTypeId" id="@cdktf/provider-databricks.cluster.Cluster.property.driverNodeTypeId"></a>

```typescript
public readonly driverNodeTypeId: string;
```

- *Type:* string

---

##### `enableElasticDisk`<sup>Required</sup> <a name="enableElasticDisk" id="@cdktf/provider-databricks.cluster.Cluster.property.enableElasticDisk"></a>

```typescript
public readonly enableElasticDisk: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enableLocalDiskEncryption`<sup>Required</sup> <a name="enableLocalDiskEncryption" id="@cdktf/provider-databricks.cluster.Cluster.property.enableLocalDiskEncryption"></a>

```typescript
public readonly enableLocalDiskEncryption: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.cluster.Cluster.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `idempotencyToken`<sup>Required</sup> <a name="idempotencyToken" id="@cdktf/provider-databricks.cluster.Cluster.property.idempotencyToken"></a>

```typescript
public readonly idempotencyToken: string;
```

- *Type:* string

---

##### `instancePoolId`<sup>Required</sup> <a name="instancePoolId" id="@cdktf/provider-databricks.cluster.Cluster.property.instancePoolId"></a>

```typescript
public readonly instancePoolId: string;
```

- *Type:* string

---

##### `isPinned`<sup>Required</sup> <a name="isPinned" id="@cdktf/provider-databricks.cluster.Cluster.property.isPinned"></a>

```typescript
public readonly isPinned: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `nodeTypeId`<sup>Required</sup> <a name="nodeTypeId" id="@cdktf/provider-databricks.cluster.Cluster.property.nodeTypeId"></a>

```typescript
public readonly nodeTypeId: string;
```

- *Type:* string

---

##### `numWorkers`<sup>Required</sup> <a name="numWorkers" id="@cdktf/provider-databricks.cluster.Cluster.property.numWorkers"></a>

```typescript
public readonly numWorkers: number;
```

- *Type:* number

---

##### `policyId`<sup>Required</sup> <a name="policyId" id="@cdktf/provider-databricks.cluster.Cluster.property.policyId"></a>

```typescript
public readonly policyId: string;
```

- *Type:* string

---

##### `runtimeEngine`<sup>Required</sup> <a name="runtimeEngine" id="@cdktf/provider-databricks.cluster.Cluster.property.runtimeEngine"></a>

```typescript
public readonly runtimeEngine: string;
```

- *Type:* string

---

##### `singleUserName`<sup>Required</sup> <a name="singleUserName" id="@cdktf/provider-databricks.cluster.Cluster.property.singleUserName"></a>

```typescript
public readonly singleUserName: string;
```

- *Type:* string

---

##### `sparkConf`<sup>Required</sup> <a name="sparkConf" id="@cdktf/provider-databricks.cluster.Cluster.property.sparkConf"></a>

```typescript
public readonly sparkConf: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `sparkEnvVars`<sup>Required</sup> <a name="sparkEnvVars" id="@cdktf/provider-databricks.cluster.Cluster.property.sparkEnvVars"></a>

```typescript
public readonly sparkEnvVars: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `sparkVersion`<sup>Required</sup> <a name="sparkVersion" id="@cdktf/provider-databricks.cluster.Cluster.property.sparkVersion"></a>

```typescript
public readonly sparkVersion: string;
```

- *Type:* string

---

##### `sshPublicKeys`<sup>Required</sup> <a name="sshPublicKeys" id="@cdktf/provider-databricks.cluster.Cluster.property.sshPublicKeys"></a>

```typescript
public readonly sshPublicKeys: string[];
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.Cluster.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-databricks.cluster.Cluster.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ClusterAutoscale <a name="ClusterAutoscale" id="@cdktf/provider-databricks.cluster.ClusterAutoscale"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.cluster.ClusterAutoscale.Initializer"></a>

```typescript
import { cluster } from '@cdktf/provider-databricks'

const clusterAutoscale: cluster.ClusterAutoscale = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAutoscale.property.maxWorkers">maxWorkers</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#max_workers Cluster#max_workers}. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAutoscale.property.minWorkers">minWorkers</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#min_workers Cluster#min_workers}. |

---

##### `maxWorkers`<sup>Optional</sup> <a name="maxWorkers" id="@cdktf/provider-databricks.cluster.ClusterAutoscale.property.maxWorkers"></a>

```typescript
public readonly maxWorkers: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#max_workers Cluster#max_workers}.

---

##### `minWorkers`<sup>Optional</sup> <a name="minWorkers" id="@cdktf/provider-databricks.cluster.ClusterAutoscale.property.minWorkers"></a>

```typescript
public readonly minWorkers: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#min_workers Cluster#min_workers}.

---

### ClusterAwsAttributes <a name="ClusterAwsAttributes" id="@cdktf/provider-databricks.cluster.ClusterAwsAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.cluster.ClusterAwsAttributes.Initializer"></a>

```typescript
import { cluster } from '@cdktf/provider-databricks'

const clusterAwsAttributes: cluster.ClusterAwsAttributes = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAwsAttributes.property.availability">availability</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#availability Cluster#availability}. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAwsAttributes.property.ebsVolumeCount">ebsVolumeCount</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#ebs_volume_count Cluster#ebs_volume_count}. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAwsAttributes.property.ebsVolumeIops">ebsVolumeIops</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#ebs_volume_iops Cluster#ebs_volume_iops}. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAwsAttributes.property.ebsVolumeSize">ebsVolumeSize</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#ebs_volume_size Cluster#ebs_volume_size}. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAwsAttributes.property.ebsVolumeThroughput">ebsVolumeThroughput</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#ebs_volume_throughput Cluster#ebs_volume_throughput}. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAwsAttributes.property.ebsVolumeType">ebsVolumeType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#ebs_volume_type Cluster#ebs_volume_type}. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAwsAttributes.property.firstOnDemand">firstOnDemand</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#first_on_demand Cluster#first_on_demand}. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAwsAttributes.property.instanceProfileArn">instanceProfileArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#instance_profile_arn Cluster#instance_profile_arn}. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAwsAttributes.property.spotBidPricePercent">spotBidPricePercent</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#spot_bid_price_percent Cluster#spot_bid_price_percent}. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAwsAttributes.property.zoneId">zoneId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#zone_id Cluster#zone_id}. |

---

##### `availability`<sup>Optional</sup> <a name="availability" id="@cdktf/provider-databricks.cluster.ClusterAwsAttributes.property.availability"></a>

```typescript
public readonly availability: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#availability Cluster#availability}.

---

##### `ebsVolumeCount`<sup>Optional</sup> <a name="ebsVolumeCount" id="@cdktf/provider-databricks.cluster.ClusterAwsAttributes.property.ebsVolumeCount"></a>

```typescript
public readonly ebsVolumeCount: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#ebs_volume_count Cluster#ebs_volume_count}.

---

##### `ebsVolumeIops`<sup>Optional</sup> <a name="ebsVolumeIops" id="@cdktf/provider-databricks.cluster.ClusterAwsAttributes.property.ebsVolumeIops"></a>

```typescript
public readonly ebsVolumeIops: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#ebs_volume_iops Cluster#ebs_volume_iops}.

---

##### `ebsVolumeSize`<sup>Optional</sup> <a name="ebsVolumeSize" id="@cdktf/provider-databricks.cluster.ClusterAwsAttributes.property.ebsVolumeSize"></a>

```typescript
public readonly ebsVolumeSize: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#ebs_volume_size Cluster#ebs_volume_size}.

---

##### `ebsVolumeThroughput`<sup>Optional</sup> <a name="ebsVolumeThroughput" id="@cdktf/provider-databricks.cluster.ClusterAwsAttributes.property.ebsVolumeThroughput"></a>

```typescript
public readonly ebsVolumeThroughput: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#ebs_volume_throughput Cluster#ebs_volume_throughput}.

---

##### `ebsVolumeType`<sup>Optional</sup> <a name="ebsVolumeType" id="@cdktf/provider-databricks.cluster.ClusterAwsAttributes.property.ebsVolumeType"></a>

```typescript
public readonly ebsVolumeType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#ebs_volume_type Cluster#ebs_volume_type}.

---

##### `firstOnDemand`<sup>Optional</sup> <a name="firstOnDemand" id="@cdktf/provider-databricks.cluster.ClusterAwsAttributes.property.firstOnDemand"></a>

```typescript
public readonly firstOnDemand: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#first_on_demand Cluster#first_on_demand}.

---

##### `instanceProfileArn`<sup>Optional</sup> <a name="instanceProfileArn" id="@cdktf/provider-databricks.cluster.ClusterAwsAttributes.property.instanceProfileArn"></a>

```typescript
public readonly instanceProfileArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#instance_profile_arn Cluster#instance_profile_arn}.

---

##### `spotBidPricePercent`<sup>Optional</sup> <a name="spotBidPricePercent" id="@cdktf/provider-databricks.cluster.ClusterAwsAttributes.property.spotBidPricePercent"></a>

```typescript
public readonly spotBidPricePercent: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#spot_bid_price_percent Cluster#spot_bid_price_percent}.

---

##### `zoneId`<sup>Optional</sup> <a name="zoneId" id="@cdktf/provider-databricks.cluster.ClusterAwsAttributes.property.zoneId"></a>

```typescript
public readonly zoneId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#zone_id Cluster#zone_id}.

---

### ClusterAzureAttributes <a name="ClusterAzureAttributes" id="@cdktf/provider-databricks.cluster.ClusterAzureAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.cluster.ClusterAzureAttributes.Initializer"></a>

```typescript
import { cluster } from '@cdktf/provider-databricks'

const clusterAzureAttributes: cluster.ClusterAzureAttributes = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAzureAttributes.property.availability">availability</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#availability Cluster#availability}. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAzureAttributes.property.firstOnDemand">firstOnDemand</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#first_on_demand Cluster#first_on_demand}. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAzureAttributes.property.logAnalyticsInfo">logAnalyticsInfo</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterAzureAttributesLogAnalyticsInfo">ClusterAzureAttributesLogAnalyticsInfo</a></code> | log_analytics_info block. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAzureAttributes.property.spotBidMaxPrice">spotBidMaxPrice</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#spot_bid_max_price Cluster#spot_bid_max_price}. |

---

##### `availability`<sup>Optional</sup> <a name="availability" id="@cdktf/provider-databricks.cluster.ClusterAzureAttributes.property.availability"></a>

```typescript
public readonly availability: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#availability Cluster#availability}.

---

##### `firstOnDemand`<sup>Optional</sup> <a name="firstOnDemand" id="@cdktf/provider-databricks.cluster.ClusterAzureAttributes.property.firstOnDemand"></a>

```typescript
public readonly firstOnDemand: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#first_on_demand Cluster#first_on_demand}.

---

##### `logAnalyticsInfo`<sup>Optional</sup> <a name="logAnalyticsInfo" id="@cdktf/provider-databricks.cluster.ClusterAzureAttributes.property.logAnalyticsInfo"></a>

```typescript
public readonly logAnalyticsInfo: ClusterAzureAttributesLogAnalyticsInfo;
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterAzureAttributesLogAnalyticsInfo">ClusterAzureAttributesLogAnalyticsInfo</a>

log_analytics_info block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#log_analytics_info Cluster#log_analytics_info}

---

##### `spotBidMaxPrice`<sup>Optional</sup> <a name="spotBidMaxPrice" id="@cdktf/provider-databricks.cluster.ClusterAzureAttributes.property.spotBidMaxPrice"></a>

```typescript
public readonly spotBidMaxPrice: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#spot_bid_max_price Cluster#spot_bid_max_price}.

---

### ClusterAzureAttributesLogAnalyticsInfo <a name="ClusterAzureAttributesLogAnalyticsInfo" id="@cdktf/provider-databricks.cluster.ClusterAzureAttributesLogAnalyticsInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.cluster.ClusterAzureAttributesLogAnalyticsInfo.Initializer"></a>

```typescript
import { cluster } from '@cdktf/provider-databricks'

const clusterAzureAttributesLogAnalyticsInfo: cluster.ClusterAzureAttributesLogAnalyticsInfo = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAzureAttributesLogAnalyticsInfo.property.logAnalyticsPrimaryKey">logAnalyticsPrimaryKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#log_analytics_primary_key Cluster#log_analytics_primary_key}. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAzureAttributesLogAnalyticsInfo.property.logAnalyticsWorkspaceId">logAnalyticsWorkspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#log_analytics_workspace_id Cluster#log_analytics_workspace_id}. |

---

##### `logAnalyticsPrimaryKey`<sup>Optional</sup> <a name="logAnalyticsPrimaryKey" id="@cdktf/provider-databricks.cluster.ClusterAzureAttributesLogAnalyticsInfo.property.logAnalyticsPrimaryKey"></a>

```typescript
public readonly logAnalyticsPrimaryKey: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#log_analytics_primary_key Cluster#log_analytics_primary_key}.

---

##### `logAnalyticsWorkspaceId`<sup>Optional</sup> <a name="logAnalyticsWorkspaceId" id="@cdktf/provider-databricks.cluster.ClusterAzureAttributesLogAnalyticsInfo.property.logAnalyticsWorkspaceId"></a>

```typescript
public readonly logAnalyticsWorkspaceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#log_analytics_workspace_id Cluster#log_analytics_workspace_id}.

---

### ClusterClusterLogConf <a name="ClusterClusterLogConf" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConf"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConf.Initializer"></a>

```typescript
import { cluster } from '@cdktf/provider-databricks'

const clusterClusterLogConf: cluster.ClusterClusterLogConf = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConf.property.dbfs">dbfs</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfDbfs">ClusterClusterLogConfDbfs</a></code> | dbfs block. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConf.property.s3">s3</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3">ClusterClusterLogConfS3</a></code> | s3 block. |

---

##### `dbfs`<sup>Optional</sup> <a name="dbfs" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConf.property.dbfs"></a>

```typescript
public readonly dbfs: ClusterClusterLogConfDbfs;
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfDbfs">ClusterClusterLogConfDbfs</a>

dbfs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#dbfs Cluster#dbfs}

---

##### `s3`<sup>Optional</sup> <a name="s3" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConf.property.s3"></a>

```typescript
public readonly s3: ClusterClusterLogConfS3;
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3">ClusterClusterLogConfS3</a>

s3 block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#s3 Cluster#s3}

---

### ClusterClusterLogConfDbfs <a name="ClusterClusterLogConfDbfs" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfDbfs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfDbfs.Initializer"></a>

```typescript
import { cluster } from '@cdktf/provider-databricks'

const clusterClusterLogConfDbfs: cluster.ClusterClusterLogConfDbfs = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfDbfs.property.destination">destination</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#destination Cluster#destination}. |

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfDbfs.property.destination"></a>

```typescript
public readonly destination: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#destination Cluster#destination}.

---

### ClusterClusterLogConfS3 <a name="ClusterClusterLogConfS3" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3.Initializer"></a>

```typescript
import { cluster } from '@cdktf/provider-databricks'

const clusterClusterLogConfS3: cluster.ClusterClusterLogConfS3 = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3.property.destination">destination</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#destination Cluster#destination}. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3.property.cannedAcl">cannedAcl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#canned_acl Cluster#canned_acl}. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3.property.enableEncryption">enableEncryption</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#enable_encryption Cluster#enable_encryption}. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3.property.encryptionType">encryptionType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#encryption_type Cluster#encryption_type}. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3.property.endpoint">endpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#endpoint Cluster#endpoint}. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3.property.kmsKey">kmsKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#kms_key Cluster#kms_key}. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3.property.region">region</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#region Cluster#region}. |

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3.property.destination"></a>

```typescript
public readonly destination: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#destination Cluster#destination}.

---

##### `cannedAcl`<sup>Optional</sup> <a name="cannedAcl" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3.property.cannedAcl"></a>

```typescript
public readonly cannedAcl: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#canned_acl Cluster#canned_acl}.

---

##### `enableEncryption`<sup>Optional</sup> <a name="enableEncryption" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3.property.enableEncryption"></a>

```typescript
public readonly enableEncryption: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#enable_encryption Cluster#enable_encryption}.

---

##### `encryptionType`<sup>Optional</sup> <a name="encryptionType" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3.property.encryptionType"></a>

```typescript
public readonly encryptionType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#encryption_type Cluster#encryption_type}.

---

##### `endpoint`<sup>Optional</sup> <a name="endpoint" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3.property.endpoint"></a>

```typescript
public readonly endpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#endpoint Cluster#endpoint}.

---

##### `kmsKey`<sup>Optional</sup> <a name="kmsKey" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3.property.kmsKey"></a>

```typescript
public readonly kmsKey: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#kms_key Cluster#kms_key}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#region Cluster#region}.

---

### ClusterClusterMountInfo <a name="ClusterClusterMountInfo" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfo.Initializer"></a>

```typescript
import { cluster } from '@cdktf/provider-databricks'

const clusterClusterMountInfo: cluster.ClusterClusterMountInfo = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfo.property.localMountDirPath">localMountDirPath</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#local_mount_dir_path Cluster#local_mount_dir_path}. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfo.property.networkFilesystemInfo">networkFilesystemInfo</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfoNetworkFilesystemInfo">ClusterClusterMountInfoNetworkFilesystemInfo</a></code> | network_filesystem_info block. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfo.property.remoteMountDirPath">remoteMountDirPath</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#remote_mount_dir_path Cluster#remote_mount_dir_path}. |

---

##### `localMountDirPath`<sup>Required</sup> <a name="localMountDirPath" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfo.property.localMountDirPath"></a>

```typescript
public readonly localMountDirPath: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#local_mount_dir_path Cluster#local_mount_dir_path}.

---

##### `networkFilesystemInfo`<sup>Required</sup> <a name="networkFilesystemInfo" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfo.property.networkFilesystemInfo"></a>

```typescript
public readonly networkFilesystemInfo: ClusterClusterMountInfoNetworkFilesystemInfo;
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfoNetworkFilesystemInfo">ClusterClusterMountInfoNetworkFilesystemInfo</a>

network_filesystem_info block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#network_filesystem_info Cluster#network_filesystem_info}

---

##### `remoteMountDirPath`<sup>Optional</sup> <a name="remoteMountDirPath" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfo.property.remoteMountDirPath"></a>

```typescript
public readonly remoteMountDirPath: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#remote_mount_dir_path Cluster#remote_mount_dir_path}.

---

### ClusterClusterMountInfoNetworkFilesystemInfo <a name="ClusterClusterMountInfoNetworkFilesystemInfo" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoNetworkFilesystemInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoNetworkFilesystemInfo.Initializer"></a>

```typescript
import { cluster } from '@cdktf/provider-databricks'

const clusterClusterMountInfoNetworkFilesystemInfo: cluster.ClusterClusterMountInfoNetworkFilesystemInfo = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfoNetworkFilesystemInfo.property.serverAddress">serverAddress</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#server_address Cluster#server_address}. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfoNetworkFilesystemInfo.property.mountOptions">mountOptions</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#mount_options Cluster#mount_options}. |

---

##### `serverAddress`<sup>Required</sup> <a name="serverAddress" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoNetworkFilesystemInfo.property.serverAddress"></a>

```typescript
public readonly serverAddress: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#server_address Cluster#server_address}.

---

##### `mountOptions`<sup>Optional</sup> <a name="mountOptions" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoNetworkFilesystemInfo.property.mountOptions"></a>

```typescript
public readonly mountOptions: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#mount_options Cluster#mount_options}.

---

### ClusterConfig <a name="ClusterConfig" id="@cdktf/provider-databricks.cluster.ClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.cluster.ClusterConfig.Initializer"></a>

```typescript
import { cluster } from '@cdktf/provider-databricks'

const clusterConfig: cluster.ClusterConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterConfig.property.sparkVersion">sparkVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#spark_version Cluster#spark_version}. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterConfig.property.applyPolicyDefaultValues">applyPolicyDefaultValues</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#apply_policy_default_values Cluster#apply_policy_default_values}. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterConfig.property.autoscale">autoscale</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterAutoscale">ClusterAutoscale</a></code> | autoscale block. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterConfig.property.autoterminationMinutes">autoterminationMinutes</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#autotermination_minutes Cluster#autotermination_minutes}. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterConfig.property.awsAttributes">awsAttributes</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterAwsAttributes">ClusterAwsAttributes</a></code> | aws_attributes block. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterConfig.property.azureAttributes">azureAttributes</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterAzureAttributes">ClusterAzureAttributes</a></code> | azure_attributes block. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterConfig.property.clusterId">clusterId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#cluster_id Cluster#cluster_id}. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterConfig.property.clusterLogConf">clusterLogConf</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConf">ClusterClusterLogConf</a></code> | cluster_log_conf block. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterConfig.property.clusterMountInfo">clusterMountInfo</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfo">ClusterClusterMountInfo</a>[]</code> | cluster_mount_info block. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterConfig.property.clusterName">clusterName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#cluster_name Cluster#cluster_name}. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterConfig.property.customTags">customTags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#custom_tags Cluster#custom_tags}. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterConfig.property.dataSecurityMode">dataSecurityMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#data_security_mode Cluster#data_security_mode}. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterConfig.property.dockerImage">dockerImage</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterDockerImage">ClusterDockerImage</a></code> | docker_image block. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterConfig.property.driverInstancePoolId">driverInstancePoolId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#driver_instance_pool_id Cluster#driver_instance_pool_id}. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterConfig.property.driverNodeTypeId">driverNodeTypeId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#driver_node_type_id Cluster#driver_node_type_id}. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterConfig.property.enableElasticDisk">enableElasticDisk</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#enable_elastic_disk Cluster#enable_elastic_disk}. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterConfig.property.enableLocalDiskEncryption">enableLocalDiskEncryption</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#enable_local_disk_encryption Cluster#enable_local_disk_encryption}. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterConfig.property.gcpAttributes">gcpAttributes</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterGcpAttributes">ClusterGcpAttributes</a></code> | gcp_attributes block. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#id Cluster#id}. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterConfig.property.idempotencyToken">idempotencyToken</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#idempotency_token Cluster#idempotency_token}. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterConfig.property.initScripts">initScripts</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.cluster.ClusterInitScripts">ClusterInitScripts</a>[]</code> | init_scripts block. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterConfig.property.instancePoolId">instancePoolId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#instance_pool_id Cluster#instance_pool_id}. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterConfig.property.isPinned">isPinned</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#is_pinned Cluster#is_pinned}. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterConfig.property.library">library</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.cluster.ClusterLibrary">ClusterLibrary</a>[]</code> | library block. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterConfig.property.nodeTypeId">nodeTypeId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#node_type_id Cluster#node_type_id}. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterConfig.property.numWorkers">numWorkers</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#num_workers Cluster#num_workers}. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterConfig.property.policyId">policyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#policy_id Cluster#policy_id}. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterConfig.property.runtimeEngine">runtimeEngine</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#runtime_engine Cluster#runtime_engine}. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterConfig.property.singleUserName">singleUserName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#single_user_name Cluster#single_user_name}. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterConfig.property.sparkConf">sparkConf</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#spark_conf Cluster#spark_conf}. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterConfig.property.sparkEnvVars">sparkEnvVars</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#spark_env_vars Cluster#spark_env_vars}. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterConfig.property.sshPublicKeys">sshPublicKeys</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#ssh_public_keys Cluster#ssh_public_keys}. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterTimeouts">ClusterTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterConfig.property.workloadType">workloadType</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterWorkloadType">ClusterWorkloadType</a></code> | workload_type block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.cluster.ClusterConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.cluster.ClusterConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.cluster.ClusterConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.cluster.ClusterConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.cluster.ClusterConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.cluster.ClusterConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.cluster.ClusterConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `sparkVersion`<sup>Required</sup> <a name="sparkVersion" id="@cdktf/provider-databricks.cluster.ClusterConfig.property.sparkVersion"></a>

```typescript
public readonly sparkVersion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#spark_version Cluster#spark_version}.

---

##### `applyPolicyDefaultValues`<sup>Optional</sup> <a name="applyPolicyDefaultValues" id="@cdktf/provider-databricks.cluster.ClusterConfig.property.applyPolicyDefaultValues"></a>

```typescript
public readonly applyPolicyDefaultValues: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#apply_policy_default_values Cluster#apply_policy_default_values}.

---

##### `autoscale`<sup>Optional</sup> <a name="autoscale" id="@cdktf/provider-databricks.cluster.ClusterConfig.property.autoscale"></a>

```typescript
public readonly autoscale: ClusterAutoscale;
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterAutoscale">ClusterAutoscale</a>

autoscale block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#autoscale Cluster#autoscale}

---

##### `autoterminationMinutes`<sup>Optional</sup> <a name="autoterminationMinutes" id="@cdktf/provider-databricks.cluster.ClusterConfig.property.autoterminationMinutes"></a>

```typescript
public readonly autoterminationMinutes: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#autotermination_minutes Cluster#autotermination_minutes}.

---

##### `awsAttributes`<sup>Optional</sup> <a name="awsAttributes" id="@cdktf/provider-databricks.cluster.ClusterConfig.property.awsAttributes"></a>

```typescript
public readonly awsAttributes: ClusterAwsAttributes;
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterAwsAttributes">ClusterAwsAttributes</a>

aws_attributes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#aws_attributes Cluster#aws_attributes}

---

##### `azureAttributes`<sup>Optional</sup> <a name="azureAttributes" id="@cdktf/provider-databricks.cluster.ClusterConfig.property.azureAttributes"></a>

```typescript
public readonly azureAttributes: ClusterAzureAttributes;
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterAzureAttributes">ClusterAzureAttributes</a>

azure_attributes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#azure_attributes Cluster#azure_attributes}

---

##### `clusterId`<sup>Optional</sup> <a name="clusterId" id="@cdktf/provider-databricks.cluster.ClusterConfig.property.clusterId"></a>

```typescript
public readonly clusterId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#cluster_id Cluster#cluster_id}.

---

##### `clusterLogConf`<sup>Optional</sup> <a name="clusterLogConf" id="@cdktf/provider-databricks.cluster.ClusterConfig.property.clusterLogConf"></a>

```typescript
public readonly clusterLogConf: ClusterClusterLogConf;
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConf">ClusterClusterLogConf</a>

cluster_log_conf block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#cluster_log_conf Cluster#cluster_log_conf}

---

##### `clusterMountInfo`<sup>Optional</sup> <a name="clusterMountInfo" id="@cdktf/provider-databricks.cluster.ClusterConfig.property.clusterMountInfo"></a>

```typescript
public readonly clusterMountInfo: IResolvable | ClusterClusterMountInfo[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfo">ClusterClusterMountInfo</a>[]

cluster_mount_info block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#cluster_mount_info Cluster#cluster_mount_info}

---

##### `clusterName`<sup>Optional</sup> <a name="clusterName" id="@cdktf/provider-databricks.cluster.ClusterConfig.property.clusterName"></a>

```typescript
public readonly clusterName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#cluster_name Cluster#cluster_name}.

---

##### `customTags`<sup>Optional</sup> <a name="customTags" id="@cdktf/provider-databricks.cluster.ClusterConfig.property.customTags"></a>

```typescript
public readonly customTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#custom_tags Cluster#custom_tags}.

---

##### `dataSecurityMode`<sup>Optional</sup> <a name="dataSecurityMode" id="@cdktf/provider-databricks.cluster.ClusterConfig.property.dataSecurityMode"></a>

```typescript
public readonly dataSecurityMode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#data_security_mode Cluster#data_security_mode}.

---

##### `dockerImage`<sup>Optional</sup> <a name="dockerImage" id="@cdktf/provider-databricks.cluster.ClusterConfig.property.dockerImage"></a>

```typescript
public readonly dockerImage: ClusterDockerImage;
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterDockerImage">ClusterDockerImage</a>

docker_image block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#docker_image Cluster#docker_image}

---

##### `driverInstancePoolId`<sup>Optional</sup> <a name="driverInstancePoolId" id="@cdktf/provider-databricks.cluster.ClusterConfig.property.driverInstancePoolId"></a>

```typescript
public readonly driverInstancePoolId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#driver_instance_pool_id Cluster#driver_instance_pool_id}.

---

##### `driverNodeTypeId`<sup>Optional</sup> <a name="driverNodeTypeId" id="@cdktf/provider-databricks.cluster.ClusterConfig.property.driverNodeTypeId"></a>

```typescript
public readonly driverNodeTypeId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#driver_node_type_id Cluster#driver_node_type_id}.

---

##### `enableElasticDisk`<sup>Optional</sup> <a name="enableElasticDisk" id="@cdktf/provider-databricks.cluster.ClusterConfig.property.enableElasticDisk"></a>

```typescript
public readonly enableElasticDisk: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#enable_elastic_disk Cluster#enable_elastic_disk}.

---

##### `enableLocalDiskEncryption`<sup>Optional</sup> <a name="enableLocalDiskEncryption" id="@cdktf/provider-databricks.cluster.ClusterConfig.property.enableLocalDiskEncryption"></a>

```typescript
public readonly enableLocalDiskEncryption: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#enable_local_disk_encryption Cluster#enable_local_disk_encryption}.

---

##### `gcpAttributes`<sup>Optional</sup> <a name="gcpAttributes" id="@cdktf/provider-databricks.cluster.ClusterConfig.property.gcpAttributes"></a>

```typescript
public readonly gcpAttributes: ClusterGcpAttributes;
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterGcpAttributes">ClusterGcpAttributes</a>

gcp_attributes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#gcp_attributes Cluster#gcp_attributes}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-databricks.cluster.ClusterConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#id Cluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `idempotencyToken`<sup>Optional</sup> <a name="idempotencyToken" id="@cdktf/provider-databricks.cluster.ClusterConfig.property.idempotencyToken"></a>

```typescript
public readonly idempotencyToken: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#idempotency_token Cluster#idempotency_token}.

---

##### `initScripts`<sup>Optional</sup> <a name="initScripts" id="@cdktf/provider-databricks.cluster.ClusterConfig.property.initScripts"></a>

```typescript
public readonly initScripts: IResolvable | ClusterInitScripts[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.cluster.ClusterInitScripts">ClusterInitScripts</a>[]

init_scripts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#init_scripts Cluster#init_scripts}

---

##### `instancePoolId`<sup>Optional</sup> <a name="instancePoolId" id="@cdktf/provider-databricks.cluster.ClusterConfig.property.instancePoolId"></a>

```typescript
public readonly instancePoolId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#instance_pool_id Cluster#instance_pool_id}.

---

##### `isPinned`<sup>Optional</sup> <a name="isPinned" id="@cdktf/provider-databricks.cluster.ClusterConfig.property.isPinned"></a>

```typescript
public readonly isPinned: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#is_pinned Cluster#is_pinned}.

---

##### `library`<sup>Optional</sup> <a name="library" id="@cdktf/provider-databricks.cluster.ClusterConfig.property.library"></a>

```typescript
public readonly library: IResolvable | ClusterLibrary[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.cluster.ClusterLibrary">ClusterLibrary</a>[]

library block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#library Cluster#library}

---

##### `nodeTypeId`<sup>Optional</sup> <a name="nodeTypeId" id="@cdktf/provider-databricks.cluster.ClusterConfig.property.nodeTypeId"></a>

```typescript
public readonly nodeTypeId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#node_type_id Cluster#node_type_id}.

---

##### `numWorkers`<sup>Optional</sup> <a name="numWorkers" id="@cdktf/provider-databricks.cluster.ClusterConfig.property.numWorkers"></a>

```typescript
public readonly numWorkers: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#num_workers Cluster#num_workers}.

---

##### `policyId`<sup>Optional</sup> <a name="policyId" id="@cdktf/provider-databricks.cluster.ClusterConfig.property.policyId"></a>

```typescript
public readonly policyId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#policy_id Cluster#policy_id}.

---

##### `runtimeEngine`<sup>Optional</sup> <a name="runtimeEngine" id="@cdktf/provider-databricks.cluster.ClusterConfig.property.runtimeEngine"></a>

```typescript
public readonly runtimeEngine: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#runtime_engine Cluster#runtime_engine}.

---

##### `singleUserName`<sup>Optional</sup> <a name="singleUserName" id="@cdktf/provider-databricks.cluster.ClusterConfig.property.singleUserName"></a>

```typescript
public readonly singleUserName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#single_user_name Cluster#single_user_name}.

---

##### `sparkConf`<sup>Optional</sup> <a name="sparkConf" id="@cdktf/provider-databricks.cluster.ClusterConfig.property.sparkConf"></a>

```typescript
public readonly sparkConf: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#spark_conf Cluster#spark_conf}.

---

##### `sparkEnvVars`<sup>Optional</sup> <a name="sparkEnvVars" id="@cdktf/provider-databricks.cluster.ClusterConfig.property.sparkEnvVars"></a>

```typescript
public readonly sparkEnvVars: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#spark_env_vars Cluster#spark_env_vars}.

---

##### `sshPublicKeys`<sup>Optional</sup> <a name="sshPublicKeys" id="@cdktf/provider-databricks.cluster.ClusterConfig.property.sshPublicKeys"></a>

```typescript
public readonly sshPublicKeys: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#ssh_public_keys Cluster#ssh_public_keys}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-databricks.cluster.ClusterConfig.property.timeouts"></a>

```typescript
public readonly timeouts: ClusterTimeouts;
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterTimeouts">ClusterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#timeouts Cluster#timeouts}

---

##### `workloadType`<sup>Optional</sup> <a name="workloadType" id="@cdktf/provider-databricks.cluster.ClusterConfig.property.workloadType"></a>

```typescript
public readonly workloadType: ClusterWorkloadType;
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterWorkloadType">ClusterWorkloadType</a>

workload_type block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#workload_type Cluster#workload_type}

---

### ClusterDockerImage <a name="ClusterDockerImage" id="@cdktf/provider-databricks.cluster.ClusterDockerImage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.cluster.ClusterDockerImage.Initializer"></a>

```typescript
import { cluster } from '@cdktf/provider-databricks'

const clusterDockerImage: cluster.ClusterDockerImage = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterDockerImage.property.url">url</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#url Cluster#url}. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterDockerImage.property.basicAuth">basicAuth</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterDockerImageBasicAuth">ClusterDockerImageBasicAuth</a></code> | basic_auth block. |

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-databricks.cluster.ClusterDockerImage.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#url Cluster#url}.

---

##### `basicAuth`<sup>Optional</sup> <a name="basicAuth" id="@cdktf/provider-databricks.cluster.ClusterDockerImage.property.basicAuth"></a>

```typescript
public readonly basicAuth: ClusterDockerImageBasicAuth;
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterDockerImageBasicAuth">ClusterDockerImageBasicAuth</a>

basic_auth block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#basic_auth Cluster#basic_auth}

---

### ClusterDockerImageBasicAuth <a name="ClusterDockerImageBasicAuth" id="@cdktf/provider-databricks.cluster.ClusterDockerImageBasicAuth"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.cluster.ClusterDockerImageBasicAuth.Initializer"></a>

```typescript
import { cluster } from '@cdktf/provider-databricks'

const clusterDockerImageBasicAuth: cluster.ClusterDockerImageBasicAuth = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterDockerImageBasicAuth.property.password">password</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#password Cluster#password}. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterDockerImageBasicAuth.property.username">username</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#username Cluster#username}. |

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-databricks.cluster.ClusterDockerImageBasicAuth.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#password Cluster#password}.

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-databricks.cluster.ClusterDockerImageBasicAuth.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#username Cluster#username}.

---

### ClusterGcpAttributes <a name="ClusterGcpAttributes" id="@cdktf/provider-databricks.cluster.ClusterGcpAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.cluster.ClusterGcpAttributes.Initializer"></a>

```typescript
import { cluster } from '@cdktf/provider-databricks'

const clusterGcpAttributes: cluster.ClusterGcpAttributes = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterGcpAttributes.property.availability">availability</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#availability Cluster#availability}. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterGcpAttributes.property.bootDiskSize">bootDiskSize</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#boot_disk_size Cluster#boot_disk_size}. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterGcpAttributes.property.googleServiceAccount">googleServiceAccount</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#google_service_account Cluster#google_service_account}. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterGcpAttributes.property.localSsdCount">localSsdCount</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#local_ssd_count Cluster#local_ssd_count}. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterGcpAttributes.property.usePreemptibleExecutors">usePreemptibleExecutors</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#use_preemptible_executors Cluster#use_preemptible_executors}. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterGcpAttributes.property.zoneId">zoneId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#zone_id Cluster#zone_id}. |

---

##### `availability`<sup>Optional</sup> <a name="availability" id="@cdktf/provider-databricks.cluster.ClusterGcpAttributes.property.availability"></a>

```typescript
public readonly availability: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#availability Cluster#availability}.

---

##### `bootDiskSize`<sup>Optional</sup> <a name="bootDiskSize" id="@cdktf/provider-databricks.cluster.ClusterGcpAttributes.property.bootDiskSize"></a>

```typescript
public readonly bootDiskSize: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#boot_disk_size Cluster#boot_disk_size}.

---

##### `googleServiceAccount`<sup>Optional</sup> <a name="googleServiceAccount" id="@cdktf/provider-databricks.cluster.ClusterGcpAttributes.property.googleServiceAccount"></a>

```typescript
public readonly googleServiceAccount: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#google_service_account Cluster#google_service_account}.

---

##### `localSsdCount`<sup>Optional</sup> <a name="localSsdCount" id="@cdktf/provider-databricks.cluster.ClusterGcpAttributes.property.localSsdCount"></a>

```typescript
public readonly localSsdCount: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#local_ssd_count Cluster#local_ssd_count}.

---

##### `usePreemptibleExecutors`<sup>Optional</sup> <a name="usePreemptibleExecutors" id="@cdktf/provider-databricks.cluster.ClusterGcpAttributes.property.usePreemptibleExecutors"></a>

```typescript
public readonly usePreemptibleExecutors: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#use_preemptible_executors Cluster#use_preemptible_executors}.

---

##### `zoneId`<sup>Optional</sup> <a name="zoneId" id="@cdktf/provider-databricks.cluster.ClusterGcpAttributes.property.zoneId"></a>

```typescript
public readonly zoneId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#zone_id Cluster#zone_id}.

---

### ClusterInitScripts <a name="ClusterInitScripts" id="@cdktf/provider-databricks.cluster.ClusterInitScripts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.cluster.ClusterInitScripts.Initializer"></a>

```typescript
import { cluster } from '@cdktf/provider-databricks'

const clusterInitScripts: cluster.ClusterInitScripts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScripts.property.abfss">abfss</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsAbfss">ClusterInitScriptsAbfss</a></code> | abfss block. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScripts.property.dbfs">dbfs</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsDbfs">ClusterInitScriptsDbfs</a></code> | dbfs block. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScripts.property.file">file</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsFile">ClusterInitScriptsFile</a></code> | file block. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScripts.property.gcs">gcs</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsGcs">ClusterInitScriptsGcs</a></code> | gcs block. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScripts.property.s3">s3</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsS3">ClusterInitScriptsS3</a></code> | s3 block. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScripts.property.volumes">volumes</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsVolumes">ClusterInitScriptsVolumes</a></code> | volumes block. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScripts.property.workspace">workspace</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsWorkspace">ClusterInitScriptsWorkspace</a></code> | workspace block. |

---

##### `abfss`<sup>Optional</sup> <a name="abfss" id="@cdktf/provider-databricks.cluster.ClusterInitScripts.property.abfss"></a>

```typescript
public readonly abfss: ClusterInitScriptsAbfss;
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsAbfss">ClusterInitScriptsAbfss</a>

abfss block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#abfss Cluster#abfss}

---

##### `dbfs`<sup>Optional</sup> <a name="dbfs" id="@cdktf/provider-databricks.cluster.ClusterInitScripts.property.dbfs"></a>

```typescript
public readonly dbfs: ClusterInitScriptsDbfs;
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsDbfs">ClusterInitScriptsDbfs</a>

dbfs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#dbfs Cluster#dbfs}

---

##### `file`<sup>Optional</sup> <a name="file" id="@cdktf/provider-databricks.cluster.ClusterInitScripts.property.file"></a>

```typescript
public readonly file: ClusterInitScriptsFile;
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsFile">ClusterInitScriptsFile</a>

file block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#file Cluster#file}

---

##### `gcs`<sup>Optional</sup> <a name="gcs" id="@cdktf/provider-databricks.cluster.ClusterInitScripts.property.gcs"></a>

```typescript
public readonly gcs: ClusterInitScriptsGcs;
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsGcs">ClusterInitScriptsGcs</a>

gcs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#gcs Cluster#gcs}

---

##### `s3`<sup>Optional</sup> <a name="s3" id="@cdktf/provider-databricks.cluster.ClusterInitScripts.property.s3"></a>

```typescript
public readonly s3: ClusterInitScriptsS3;
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsS3">ClusterInitScriptsS3</a>

s3 block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#s3 Cluster#s3}

---

##### `volumes`<sup>Optional</sup> <a name="volumes" id="@cdktf/provider-databricks.cluster.ClusterInitScripts.property.volumes"></a>

```typescript
public readonly volumes: ClusterInitScriptsVolumes;
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsVolumes">ClusterInitScriptsVolumes</a>

volumes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#volumes Cluster#volumes}

---

##### `workspace`<sup>Optional</sup> <a name="workspace" id="@cdktf/provider-databricks.cluster.ClusterInitScripts.property.workspace"></a>

```typescript
public readonly workspace: ClusterInitScriptsWorkspace;
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsWorkspace">ClusterInitScriptsWorkspace</a>

workspace block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#workspace Cluster#workspace}

---

### ClusterInitScriptsAbfss <a name="ClusterInitScriptsAbfss" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsAbfss"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsAbfss.Initializer"></a>

```typescript
import { cluster } from '@cdktf/provider-databricks'

const clusterInitScriptsAbfss: cluster.ClusterInitScriptsAbfss = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsAbfss.property.destination">destination</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#destination Cluster#destination}. |

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsAbfss.property.destination"></a>

```typescript
public readonly destination: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#destination Cluster#destination}.

---

### ClusterInitScriptsDbfs <a name="ClusterInitScriptsDbfs" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsDbfs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsDbfs.Initializer"></a>

```typescript
import { cluster } from '@cdktf/provider-databricks'

const clusterInitScriptsDbfs: cluster.ClusterInitScriptsDbfs = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsDbfs.property.destination">destination</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#destination Cluster#destination}. |

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsDbfs.property.destination"></a>

```typescript
public readonly destination: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#destination Cluster#destination}.

---

### ClusterInitScriptsFile <a name="ClusterInitScriptsFile" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsFile"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsFile.Initializer"></a>

```typescript
import { cluster } from '@cdktf/provider-databricks'

const clusterInitScriptsFile: cluster.ClusterInitScriptsFile = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsFile.property.destination">destination</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#destination Cluster#destination}. |

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsFile.property.destination"></a>

```typescript
public readonly destination: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#destination Cluster#destination}.

---

### ClusterInitScriptsGcs <a name="ClusterInitScriptsGcs" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsGcs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsGcs.Initializer"></a>

```typescript
import { cluster } from '@cdktf/provider-databricks'

const clusterInitScriptsGcs: cluster.ClusterInitScriptsGcs = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsGcs.property.destination">destination</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#destination Cluster#destination}. |

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsGcs.property.destination"></a>

```typescript
public readonly destination: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#destination Cluster#destination}.

---

### ClusterInitScriptsS3 <a name="ClusterInitScriptsS3" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsS3"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsS3.Initializer"></a>

```typescript
import { cluster } from '@cdktf/provider-databricks'

const clusterInitScriptsS3: cluster.ClusterInitScriptsS3 = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsS3.property.destination">destination</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#destination Cluster#destination}. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsS3.property.cannedAcl">cannedAcl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#canned_acl Cluster#canned_acl}. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsS3.property.enableEncryption">enableEncryption</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#enable_encryption Cluster#enable_encryption}. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsS3.property.encryptionType">encryptionType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#encryption_type Cluster#encryption_type}. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsS3.property.endpoint">endpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#endpoint Cluster#endpoint}. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsS3.property.kmsKey">kmsKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#kms_key Cluster#kms_key}. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsS3.property.region">region</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#region Cluster#region}. |

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsS3.property.destination"></a>

```typescript
public readonly destination: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#destination Cluster#destination}.

---

##### `cannedAcl`<sup>Optional</sup> <a name="cannedAcl" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsS3.property.cannedAcl"></a>

```typescript
public readonly cannedAcl: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#canned_acl Cluster#canned_acl}.

---

##### `enableEncryption`<sup>Optional</sup> <a name="enableEncryption" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsS3.property.enableEncryption"></a>

```typescript
public readonly enableEncryption: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#enable_encryption Cluster#enable_encryption}.

---

##### `encryptionType`<sup>Optional</sup> <a name="encryptionType" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsS3.property.encryptionType"></a>

```typescript
public readonly encryptionType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#encryption_type Cluster#encryption_type}.

---

##### `endpoint`<sup>Optional</sup> <a name="endpoint" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsS3.property.endpoint"></a>

```typescript
public readonly endpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#endpoint Cluster#endpoint}.

---

##### `kmsKey`<sup>Optional</sup> <a name="kmsKey" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsS3.property.kmsKey"></a>

```typescript
public readonly kmsKey: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#kms_key Cluster#kms_key}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsS3.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#region Cluster#region}.

---

### ClusterInitScriptsVolumes <a name="ClusterInitScriptsVolumes" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsVolumes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsVolumes.Initializer"></a>

```typescript
import { cluster } from '@cdktf/provider-databricks'

const clusterInitScriptsVolumes: cluster.ClusterInitScriptsVolumes = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsVolumes.property.destination">destination</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#destination Cluster#destination}. |

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsVolumes.property.destination"></a>

```typescript
public readonly destination: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#destination Cluster#destination}.

---

### ClusterInitScriptsWorkspace <a name="ClusterInitScriptsWorkspace" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsWorkspace"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsWorkspace.Initializer"></a>

```typescript
import { cluster } from '@cdktf/provider-databricks'

const clusterInitScriptsWorkspace: cluster.ClusterInitScriptsWorkspace = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsWorkspace.property.destination">destination</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#destination Cluster#destination}. |

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsWorkspace.property.destination"></a>

```typescript
public readonly destination: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#destination Cluster#destination}.

---

### ClusterLibrary <a name="ClusterLibrary" id="@cdktf/provider-databricks.cluster.ClusterLibrary"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.cluster.ClusterLibrary.Initializer"></a>

```typescript
import { cluster } from '@cdktf/provider-databricks'

const clusterLibrary: cluster.ClusterLibrary = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibrary.property.cran">cran</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryCran">ClusterLibraryCran</a></code> | cran block. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibrary.property.egg">egg</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#egg Cluster#egg}. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibrary.property.jar">jar</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#jar Cluster#jar}. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibrary.property.maven">maven</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryMaven">ClusterLibraryMaven</a></code> | maven block. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibrary.property.pypi">pypi</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryPypi">ClusterLibraryPypi</a></code> | pypi block. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibrary.property.whl">whl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#whl Cluster#whl}. |

---

##### `cran`<sup>Optional</sup> <a name="cran" id="@cdktf/provider-databricks.cluster.ClusterLibrary.property.cran"></a>

```typescript
public readonly cran: ClusterLibraryCran;
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterLibraryCran">ClusterLibraryCran</a>

cran block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#cran Cluster#cran}

---

##### `egg`<sup>Optional</sup> <a name="egg" id="@cdktf/provider-databricks.cluster.ClusterLibrary.property.egg"></a>

```typescript
public readonly egg: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#egg Cluster#egg}.

---

##### `jar`<sup>Optional</sup> <a name="jar" id="@cdktf/provider-databricks.cluster.ClusterLibrary.property.jar"></a>

```typescript
public readonly jar: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#jar Cluster#jar}.

---

##### `maven`<sup>Optional</sup> <a name="maven" id="@cdktf/provider-databricks.cluster.ClusterLibrary.property.maven"></a>

```typescript
public readonly maven: ClusterLibraryMaven;
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterLibraryMaven">ClusterLibraryMaven</a>

maven block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#maven Cluster#maven}

---

##### `pypi`<sup>Optional</sup> <a name="pypi" id="@cdktf/provider-databricks.cluster.ClusterLibrary.property.pypi"></a>

```typescript
public readonly pypi: ClusterLibraryPypi;
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterLibraryPypi">ClusterLibraryPypi</a>

pypi block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#pypi Cluster#pypi}

---

##### `whl`<sup>Optional</sup> <a name="whl" id="@cdktf/provider-databricks.cluster.ClusterLibrary.property.whl"></a>

```typescript
public readonly whl: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#whl Cluster#whl}.

---

### ClusterLibraryCran <a name="ClusterLibraryCran" id="@cdktf/provider-databricks.cluster.ClusterLibraryCran"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.cluster.ClusterLibraryCran.Initializer"></a>

```typescript
import { cluster } from '@cdktf/provider-databricks'

const clusterLibraryCran: cluster.ClusterLibraryCran = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryCran.property.package">package</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#package Cluster#package}. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryCran.property.repo">repo</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#repo Cluster#repo}. |

---

##### `package`<sup>Required</sup> <a name="package" id="@cdktf/provider-databricks.cluster.ClusterLibraryCran.property.package"></a>

```typescript
public readonly package: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#package Cluster#package}.

---

##### `repo`<sup>Optional</sup> <a name="repo" id="@cdktf/provider-databricks.cluster.ClusterLibraryCran.property.repo"></a>

```typescript
public readonly repo: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#repo Cluster#repo}.

---

### ClusterLibraryMaven <a name="ClusterLibraryMaven" id="@cdktf/provider-databricks.cluster.ClusterLibraryMaven"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.cluster.ClusterLibraryMaven.Initializer"></a>

```typescript
import { cluster } from '@cdktf/provider-databricks'

const clusterLibraryMaven: cluster.ClusterLibraryMaven = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryMaven.property.coordinates">coordinates</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#coordinates Cluster#coordinates}. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryMaven.property.exclusions">exclusions</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#exclusions Cluster#exclusions}. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryMaven.property.repo">repo</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#repo Cluster#repo}. |

---

##### `coordinates`<sup>Required</sup> <a name="coordinates" id="@cdktf/provider-databricks.cluster.ClusterLibraryMaven.property.coordinates"></a>

```typescript
public readonly coordinates: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#coordinates Cluster#coordinates}.

---

##### `exclusions`<sup>Optional</sup> <a name="exclusions" id="@cdktf/provider-databricks.cluster.ClusterLibraryMaven.property.exclusions"></a>

```typescript
public readonly exclusions: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#exclusions Cluster#exclusions}.

---

##### `repo`<sup>Optional</sup> <a name="repo" id="@cdktf/provider-databricks.cluster.ClusterLibraryMaven.property.repo"></a>

```typescript
public readonly repo: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#repo Cluster#repo}.

---

### ClusterLibraryPypi <a name="ClusterLibraryPypi" id="@cdktf/provider-databricks.cluster.ClusterLibraryPypi"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.cluster.ClusterLibraryPypi.Initializer"></a>

```typescript
import { cluster } from '@cdktf/provider-databricks'

const clusterLibraryPypi: cluster.ClusterLibraryPypi = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryPypi.property.package">package</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#package Cluster#package}. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryPypi.property.repo">repo</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#repo Cluster#repo}. |

---

##### `package`<sup>Required</sup> <a name="package" id="@cdktf/provider-databricks.cluster.ClusterLibraryPypi.property.package"></a>

```typescript
public readonly package: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#package Cluster#package}.

---

##### `repo`<sup>Optional</sup> <a name="repo" id="@cdktf/provider-databricks.cluster.ClusterLibraryPypi.property.repo"></a>

```typescript
public readonly repo: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#repo Cluster#repo}.

---

### ClusterTimeouts <a name="ClusterTimeouts" id="@cdktf/provider-databricks.cluster.ClusterTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.cluster.ClusterTimeouts.Initializer"></a>

```typescript
import { cluster } from '@cdktf/provider-databricks'

const clusterTimeouts: cluster.ClusterTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#create Cluster#create}. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#delete Cluster#delete}. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#update Cluster#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-databricks.cluster.ClusterTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#create Cluster#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-databricks.cluster.ClusterTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#delete Cluster#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-databricks.cluster.ClusterTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#update Cluster#update}.

---

### ClusterWorkloadType <a name="ClusterWorkloadType" id="@cdktf/provider-databricks.cluster.ClusterWorkloadType"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.cluster.ClusterWorkloadType.Initializer"></a>

```typescript
import { cluster } from '@cdktf/provider-databricks'

const clusterWorkloadType: cluster.ClusterWorkloadType = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterWorkloadType.property.clients">clients</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterWorkloadTypeClients">ClusterWorkloadTypeClients</a></code> | clients block. |

---

##### `clients`<sup>Required</sup> <a name="clients" id="@cdktf/provider-databricks.cluster.ClusterWorkloadType.property.clients"></a>

```typescript
public readonly clients: ClusterWorkloadTypeClients;
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterWorkloadTypeClients">ClusterWorkloadTypeClients</a>

clients block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#clients Cluster#clients}

---

### ClusterWorkloadTypeClients <a name="ClusterWorkloadTypeClients" id="@cdktf/provider-databricks.cluster.ClusterWorkloadTypeClients"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.cluster.ClusterWorkloadTypeClients.Initializer"></a>

```typescript
import { cluster } from '@cdktf/provider-databricks'

const clusterWorkloadTypeClients: cluster.ClusterWorkloadTypeClients = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterWorkloadTypeClients.property.jobs">jobs</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#jobs Cluster#jobs}. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterWorkloadTypeClients.property.notebooks">notebooks</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#notebooks Cluster#notebooks}. |

---

##### `jobs`<sup>Optional</sup> <a name="jobs" id="@cdktf/provider-databricks.cluster.ClusterWorkloadTypeClients.property.jobs"></a>

```typescript
public readonly jobs: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#jobs Cluster#jobs}.

---

##### `notebooks`<sup>Optional</sup> <a name="notebooks" id="@cdktf/provider-databricks.cluster.ClusterWorkloadTypeClients.property.notebooks"></a>

```typescript
public readonly notebooks: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs/resources/cluster#notebooks Cluster#notebooks}.

---

## Classes <a name="Classes" id="Classes"></a>

### ClusterAutoscaleOutputReference <a name="ClusterAutoscaleOutputReference" id="@cdktf/provider-databricks.cluster.ClusterAutoscaleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.cluster.ClusterAutoscaleOutputReference.Initializer"></a>

```typescript
import { cluster } from '@cdktf/provider-databricks'

new cluster.ClusterAutoscaleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAutoscaleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAutoscaleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.cluster.ClusterAutoscaleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterAutoscaleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAutoscaleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAutoscaleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAutoscaleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAutoscaleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAutoscaleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAutoscaleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAutoscaleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAutoscaleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAutoscaleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAutoscaleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAutoscaleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAutoscaleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAutoscaleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAutoscaleOutputReference.resetMaxWorkers">resetMaxWorkers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAutoscaleOutputReference.resetMinWorkers">resetMinWorkers</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.cluster.ClusterAutoscaleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterAutoscaleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterAutoscaleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.cluster.ClusterAutoscaleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterAutoscaleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterAutoscaleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterAutoscaleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.cluster.ClusterAutoscaleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterAutoscaleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.cluster.ClusterAutoscaleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterAutoscaleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.cluster.ClusterAutoscaleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterAutoscaleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterAutoscaleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterAutoscaleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.cluster.ClusterAutoscaleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterAutoscaleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterAutoscaleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterAutoscaleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.cluster.ClusterAutoscaleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.cluster.ClusterAutoscaleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.cluster.ClusterAutoscaleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.cluster.ClusterAutoscaleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.cluster.ClusterAutoscaleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMaxWorkers` <a name="resetMaxWorkers" id="@cdktf/provider-databricks.cluster.ClusterAutoscaleOutputReference.resetMaxWorkers"></a>

```typescript
public resetMaxWorkers(): void
```

##### `resetMinWorkers` <a name="resetMinWorkers" id="@cdktf/provider-databricks.cluster.ClusterAutoscaleOutputReference.resetMinWorkers"></a>

```typescript
public resetMinWorkers(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAutoscaleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAutoscaleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAutoscaleOutputReference.property.maxWorkersInput">maxWorkersInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAutoscaleOutputReference.property.minWorkersInput">minWorkersInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAutoscaleOutputReference.property.maxWorkers">maxWorkers</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAutoscaleOutputReference.property.minWorkers">minWorkers</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAutoscaleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterAutoscale">ClusterAutoscale</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.cluster.ClusterAutoscaleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.cluster.ClusterAutoscaleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `maxWorkersInput`<sup>Optional</sup> <a name="maxWorkersInput" id="@cdktf/provider-databricks.cluster.ClusterAutoscaleOutputReference.property.maxWorkersInput"></a>

```typescript
public readonly maxWorkersInput: number;
```

- *Type:* number

---

##### `minWorkersInput`<sup>Optional</sup> <a name="minWorkersInput" id="@cdktf/provider-databricks.cluster.ClusterAutoscaleOutputReference.property.minWorkersInput"></a>

```typescript
public readonly minWorkersInput: number;
```

- *Type:* number

---

##### `maxWorkers`<sup>Required</sup> <a name="maxWorkers" id="@cdktf/provider-databricks.cluster.ClusterAutoscaleOutputReference.property.maxWorkers"></a>

```typescript
public readonly maxWorkers: number;
```

- *Type:* number

---

##### `minWorkers`<sup>Required</sup> <a name="minWorkers" id="@cdktf/provider-databricks.cluster.ClusterAutoscaleOutputReference.property.minWorkers"></a>

```typescript
public readonly minWorkers: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.cluster.ClusterAutoscaleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ClusterAutoscale;
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterAutoscale">ClusterAutoscale</a>

---


### ClusterAwsAttributesOutputReference <a name="ClusterAwsAttributesOutputReference" id="@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.Initializer"></a>

```typescript
import { cluster } from '@cdktf/provider-databricks'

new cluster.ClusterAwsAttributesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.resetAvailability">resetAvailability</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.resetEbsVolumeCount">resetEbsVolumeCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.resetEbsVolumeIops">resetEbsVolumeIops</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.resetEbsVolumeSize">resetEbsVolumeSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.resetEbsVolumeThroughput">resetEbsVolumeThroughput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.resetEbsVolumeType">resetEbsVolumeType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.resetFirstOnDemand">resetFirstOnDemand</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.resetInstanceProfileArn">resetInstanceProfileArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.resetSpotBidPricePercent">resetSpotBidPricePercent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.resetZoneId">resetZoneId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAvailability` <a name="resetAvailability" id="@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.resetAvailability"></a>

```typescript
public resetAvailability(): void
```

##### `resetEbsVolumeCount` <a name="resetEbsVolumeCount" id="@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.resetEbsVolumeCount"></a>

```typescript
public resetEbsVolumeCount(): void
```

##### `resetEbsVolumeIops` <a name="resetEbsVolumeIops" id="@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.resetEbsVolumeIops"></a>

```typescript
public resetEbsVolumeIops(): void
```

##### `resetEbsVolumeSize` <a name="resetEbsVolumeSize" id="@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.resetEbsVolumeSize"></a>

```typescript
public resetEbsVolumeSize(): void
```

##### `resetEbsVolumeThroughput` <a name="resetEbsVolumeThroughput" id="@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.resetEbsVolumeThroughput"></a>

```typescript
public resetEbsVolumeThroughput(): void
```

##### `resetEbsVolumeType` <a name="resetEbsVolumeType" id="@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.resetEbsVolumeType"></a>

```typescript
public resetEbsVolumeType(): void
```

##### `resetFirstOnDemand` <a name="resetFirstOnDemand" id="@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.resetFirstOnDemand"></a>

```typescript
public resetFirstOnDemand(): void
```

##### `resetInstanceProfileArn` <a name="resetInstanceProfileArn" id="@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.resetInstanceProfileArn"></a>

```typescript
public resetInstanceProfileArn(): void
```

##### `resetSpotBidPricePercent` <a name="resetSpotBidPricePercent" id="@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.resetSpotBidPricePercent"></a>

```typescript
public resetSpotBidPricePercent(): void
```

##### `resetZoneId` <a name="resetZoneId" id="@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.resetZoneId"></a>

```typescript
public resetZoneId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.property.availabilityInput">availabilityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.property.ebsVolumeCountInput">ebsVolumeCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.property.ebsVolumeIopsInput">ebsVolumeIopsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.property.ebsVolumeSizeInput">ebsVolumeSizeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.property.ebsVolumeThroughputInput">ebsVolumeThroughputInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.property.ebsVolumeTypeInput">ebsVolumeTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.property.firstOnDemandInput">firstOnDemandInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.property.instanceProfileArnInput">instanceProfileArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.property.spotBidPricePercentInput">spotBidPricePercentInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.property.zoneIdInput">zoneIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.property.availability">availability</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.property.ebsVolumeCount">ebsVolumeCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.property.ebsVolumeIops">ebsVolumeIops</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.property.ebsVolumeSize">ebsVolumeSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.property.ebsVolumeThroughput">ebsVolumeThroughput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.property.ebsVolumeType">ebsVolumeType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.property.firstOnDemand">firstOnDemand</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.property.instanceProfileArn">instanceProfileArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.property.spotBidPricePercent">spotBidPricePercent</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.property.zoneId">zoneId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterAwsAttributes">ClusterAwsAttributes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `availabilityInput`<sup>Optional</sup> <a name="availabilityInput" id="@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.property.availabilityInput"></a>

```typescript
public readonly availabilityInput: string;
```

- *Type:* string

---

##### `ebsVolumeCountInput`<sup>Optional</sup> <a name="ebsVolumeCountInput" id="@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.property.ebsVolumeCountInput"></a>

```typescript
public readonly ebsVolumeCountInput: number;
```

- *Type:* number

---

##### `ebsVolumeIopsInput`<sup>Optional</sup> <a name="ebsVolumeIopsInput" id="@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.property.ebsVolumeIopsInput"></a>

```typescript
public readonly ebsVolumeIopsInput: number;
```

- *Type:* number

---

##### `ebsVolumeSizeInput`<sup>Optional</sup> <a name="ebsVolumeSizeInput" id="@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.property.ebsVolumeSizeInput"></a>

```typescript
public readonly ebsVolumeSizeInput: number;
```

- *Type:* number

---

##### `ebsVolumeThroughputInput`<sup>Optional</sup> <a name="ebsVolumeThroughputInput" id="@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.property.ebsVolumeThroughputInput"></a>

```typescript
public readonly ebsVolumeThroughputInput: number;
```

- *Type:* number

---

##### `ebsVolumeTypeInput`<sup>Optional</sup> <a name="ebsVolumeTypeInput" id="@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.property.ebsVolumeTypeInput"></a>

```typescript
public readonly ebsVolumeTypeInput: string;
```

- *Type:* string

---

##### `firstOnDemandInput`<sup>Optional</sup> <a name="firstOnDemandInput" id="@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.property.firstOnDemandInput"></a>

```typescript
public readonly firstOnDemandInput: number;
```

- *Type:* number

---

##### `instanceProfileArnInput`<sup>Optional</sup> <a name="instanceProfileArnInput" id="@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.property.instanceProfileArnInput"></a>

```typescript
public readonly instanceProfileArnInput: string;
```

- *Type:* string

---

##### `spotBidPricePercentInput`<sup>Optional</sup> <a name="spotBidPricePercentInput" id="@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.property.spotBidPricePercentInput"></a>

```typescript
public readonly spotBidPricePercentInput: number;
```

- *Type:* number

---

##### `zoneIdInput`<sup>Optional</sup> <a name="zoneIdInput" id="@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.property.zoneIdInput"></a>

```typescript
public readonly zoneIdInput: string;
```

- *Type:* string

---

##### `availability`<sup>Required</sup> <a name="availability" id="@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.property.availability"></a>

```typescript
public readonly availability: string;
```

- *Type:* string

---

##### `ebsVolumeCount`<sup>Required</sup> <a name="ebsVolumeCount" id="@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.property.ebsVolumeCount"></a>

```typescript
public readonly ebsVolumeCount: number;
```

- *Type:* number

---

##### `ebsVolumeIops`<sup>Required</sup> <a name="ebsVolumeIops" id="@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.property.ebsVolumeIops"></a>

```typescript
public readonly ebsVolumeIops: number;
```

- *Type:* number

---

##### `ebsVolumeSize`<sup>Required</sup> <a name="ebsVolumeSize" id="@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.property.ebsVolumeSize"></a>

```typescript
public readonly ebsVolumeSize: number;
```

- *Type:* number

---

##### `ebsVolumeThroughput`<sup>Required</sup> <a name="ebsVolumeThroughput" id="@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.property.ebsVolumeThroughput"></a>

```typescript
public readonly ebsVolumeThroughput: number;
```

- *Type:* number

---

##### `ebsVolumeType`<sup>Required</sup> <a name="ebsVolumeType" id="@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.property.ebsVolumeType"></a>

```typescript
public readonly ebsVolumeType: string;
```

- *Type:* string

---

##### `firstOnDemand`<sup>Required</sup> <a name="firstOnDemand" id="@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.property.firstOnDemand"></a>

```typescript
public readonly firstOnDemand: number;
```

- *Type:* number

---

##### `instanceProfileArn`<sup>Required</sup> <a name="instanceProfileArn" id="@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.property.instanceProfileArn"></a>

```typescript
public readonly instanceProfileArn: string;
```

- *Type:* string

---

##### `spotBidPricePercent`<sup>Required</sup> <a name="spotBidPricePercent" id="@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.property.spotBidPricePercent"></a>

```typescript
public readonly spotBidPricePercent: number;
```

- *Type:* number

---

##### `zoneId`<sup>Required</sup> <a name="zoneId" id="@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.property.zoneId"></a>

```typescript
public readonly zoneId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.cluster.ClusterAwsAttributesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ClusterAwsAttributes;
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterAwsAttributes">ClusterAwsAttributes</a>

---


### ClusterAzureAttributesLogAnalyticsInfoOutputReference <a name="ClusterAzureAttributesLogAnalyticsInfoOutputReference" id="@cdktf/provider-databricks.cluster.ClusterAzureAttributesLogAnalyticsInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.cluster.ClusterAzureAttributesLogAnalyticsInfoOutputReference.Initializer"></a>

```typescript
import { cluster } from '@cdktf/provider-databricks'

new cluster.ClusterAzureAttributesLogAnalyticsInfoOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAzureAttributesLogAnalyticsInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAzureAttributesLogAnalyticsInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.cluster.ClusterAzureAttributesLogAnalyticsInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterAzureAttributesLogAnalyticsInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAzureAttributesLogAnalyticsInfoOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAzureAttributesLogAnalyticsInfoOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAzureAttributesLogAnalyticsInfoOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAzureAttributesLogAnalyticsInfoOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAzureAttributesLogAnalyticsInfoOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAzureAttributesLogAnalyticsInfoOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAzureAttributesLogAnalyticsInfoOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAzureAttributesLogAnalyticsInfoOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAzureAttributesLogAnalyticsInfoOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAzureAttributesLogAnalyticsInfoOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAzureAttributesLogAnalyticsInfoOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAzureAttributesLogAnalyticsInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAzureAttributesLogAnalyticsInfoOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAzureAttributesLogAnalyticsInfoOutputReference.resetLogAnalyticsPrimaryKey">resetLogAnalyticsPrimaryKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAzureAttributesLogAnalyticsInfoOutputReference.resetLogAnalyticsWorkspaceId">resetLogAnalyticsWorkspaceId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.cluster.ClusterAzureAttributesLogAnalyticsInfoOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterAzureAttributesLogAnalyticsInfoOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterAzureAttributesLogAnalyticsInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.cluster.ClusterAzureAttributesLogAnalyticsInfoOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterAzureAttributesLogAnalyticsInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterAzureAttributesLogAnalyticsInfoOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterAzureAttributesLogAnalyticsInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.cluster.ClusterAzureAttributesLogAnalyticsInfoOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterAzureAttributesLogAnalyticsInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.cluster.ClusterAzureAttributesLogAnalyticsInfoOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterAzureAttributesLogAnalyticsInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.cluster.ClusterAzureAttributesLogAnalyticsInfoOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterAzureAttributesLogAnalyticsInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterAzureAttributesLogAnalyticsInfoOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterAzureAttributesLogAnalyticsInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.cluster.ClusterAzureAttributesLogAnalyticsInfoOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterAzureAttributesLogAnalyticsInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterAzureAttributesLogAnalyticsInfoOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterAzureAttributesLogAnalyticsInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.cluster.ClusterAzureAttributesLogAnalyticsInfoOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.cluster.ClusterAzureAttributesLogAnalyticsInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.cluster.ClusterAzureAttributesLogAnalyticsInfoOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.cluster.ClusterAzureAttributesLogAnalyticsInfoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.cluster.ClusterAzureAttributesLogAnalyticsInfoOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetLogAnalyticsPrimaryKey` <a name="resetLogAnalyticsPrimaryKey" id="@cdktf/provider-databricks.cluster.ClusterAzureAttributesLogAnalyticsInfoOutputReference.resetLogAnalyticsPrimaryKey"></a>

```typescript
public resetLogAnalyticsPrimaryKey(): void
```

##### `resetLogAnalyticsWorkspaceId` <a name="resetLogAnalyticsWorkspaceId" id="@cdktf/provider-databricks.cluster.ClusterAzureAttributesLogAnalyticsInfoOutputReference.resetLogAnalyticsWorkspaceId"></a>

```typescript
public resetLogAnalyticsWorkspaceId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAzureAttributesLogAnalyticsInfoOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAzureAttributesLogAnalyticsInfoOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAzureAttributesLogAnalyticsInfoOutputReference.property.logAnalyticsPrimaryKeyInput">logAnalyticsPrimaryKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAzureAttributesLogAnalyticsInfoOutputReference.property.logAnalyticsWorkspaceIdInput">logAnalyticsWorkspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAzureAttributesLogAnalyticsInfoOutputReference.property.logAnalyticsPrimaryKey">logAnalyticsPrimaryKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAzureAttributesLogAnalyticsInfoOutputReference.property.logAnalyticsWorkspaceId">logAnalyticsWorkspaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAzureAttributesLogAnalyticsInfoOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterAzureAttributesLogAnalyticsInfo">ClusterAzureAttributesLogAnalyticsInfo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.cluster.ClusterAzureAttributesLogAnalyticsInfoOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.cluster.ClusterAzureAttributesLogAnalyticsInfoOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `logAnalyticsPrimaryKeyInput`<sup>Optional</sup> <a name="logAnalyticsPrimaryKeyInput" id="@cdktf/provider-databricks.cluster.ClusterAzureAttributesLogAnalyticsInfoOutputReference.property.logAnalyticsPrimaryKeyInput"></a>

```typescript
public readonly logAnalyticsPrimaryKeyInput: string;
```

- *Type:* string

---

##### `logAnalyticsWorkspaceIdInput`<sup>Optional</sup> <a name="logAnalyticsWorkspaceIdInput" id="@cdktf/provider-databricks.cluster.ClusterAzureAttributesLogAnalyticsInfoOutputReference.property.logAnalyticsWorkspaceIdInput"></a>

```typescript
public readonly logAnalyticsWorkspaceIdInput: string;
```

- *Type:* string

---

##### `logAnalyticsPrimaryKey`<sup>Required</sup> <a name="logAnalyticsPrimaryKey" id="@cdktf/provider-databricks.cluster.ClusterAzureAttributesLogAnalyticsInfoOutputReference.property.logAnalyticsPrimaryKey"></a>

```typescript
public readonly logAnalyticsPrimaryKey: string;
```

- *Type:* string

---

##### `logAnalyticsWorkspaceId`<sup>Required</sup> <a name="logAnalyticsWorkspaceId" id="@cdktf/provider-databricks.cluster.ClusterAzureAttributesLogAnalyticsInfoOutputReference.property.logAnalyticsWorkspaceId"></a>

```typescript
public readonly logAnalyticsWorkspaceId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.cluster.ClusterAzureAttributesLogAnalyticsInfoOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ClusterAzureAttributesLogAnalyticsInfo;
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterAzureAttributesLogAnalyticsInfo">ClusterAzureAttributesLogAnalyticsInfo</a>

---


### ClusterAzureAttributesOutputReference <a name="ClusterAzureAttributesOutputReference" id="@cdktf/provider-databricks.cluster.ClusterAzureAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.cluster.ClusterAzureAttributesOutputReference.Initializer"></a>

```typescript
import { cluster } from '@cdktf/provider-databricks'

new cluster.ClusterAzureAttributesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAzureAttributesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAzureAttributesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.cluster.ClusterAzureAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterAzureAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAzureAttributesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAzureAttributesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAzureAttributesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAzureAttributesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAzureAttributesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAzureAttributesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAzureAttributesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAzureAttributesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAzureAttributesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAzureAttributesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAzureAttributesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAzureAttributesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAzureAttributesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAzureAttributesOutputReference.putLogAnalyticsInfo">putLogAnalyticsInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAzureAttributesOutputReference.resetAvailability">resetAvailability</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAzureAttributesOutputReference.resetFirstOnDemand">resetFirstOnDemand</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAzureAttributesOutputReference.resetLogAnalyticsInfo">resetLogAnalyticsInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAzureAttributesOutputReference.resetSpotBidMaxPrice">resetSpotBidMaxPrice</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.cluster.ClusterAzureAttributesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterAzureAttributesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterAzureAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.cluster.ClusterAzureAttributesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterAzureAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterAzureAttributesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterAzureAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.cluster.ClusterAzureAttributesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterAzureAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.cluster.ClusterAzureAttributesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterAzureAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.cluster.ClusterAzureAttributesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterAzureAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterAzureAttributesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterAzureAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.cluster.ClusterAzureAttributesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterAzureAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterAzureAttributesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterAzureAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.cluster.ClusterAzureAttributesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.cluster.ClusterAzureAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.cluster.ClusterAzureAttributesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.cluster.ClusterAzureAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.cluster.ClusterAzureAttributesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putLogAnalyticsInfo` <a name="putLogAnalyticsInfo" id="@cdktf/provider-databricks.cluster.ClusterAzureAttributesOutputReference.putLogAnalyticsInfo"></a>

```typescript
public putLogAnalyticsInfo(value: ClusterAzureAttributesLogAnalyticsInfo): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.cluster.ClusterAzureAttributesOutputReference.putLogAnalyticsInfo.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterAzureAttributesLogAnalyticsInfo">ClusterAzureAttributesLogAnalyticsInfo</a>

---

##### `resetAvailability` <a name="resetAvailability" id="@cdktf/provider-databricks.cluster.ClusterAzureAttributesOutputReference.resetAvailability"></a>

```typescript
public resetAvailability(): void
```

##### `resetFirstOnDemand` <a name="resetFirstOnDemand" id="@cdktf/provider-databricks.cluster.ClusterAzureAttributesOutputReference.resetFirstOnDemand"></a>

```typescript
public resetFirstOnDemand(): void
```

##### `resetLogAnalyticsInfo` <a name="resetLogAnalyticsInfo" id="@cdktf/provider-databricks.cluster.ClusterAzureAttributesOutputReference.resetLogAnalyticsInfo"></a>

```typescript
public resetLogAnalyticsInfo(): void
```

##### `resetSpotBidMaxPrice` <a name="resetSpotBidMaxPrice" id="@cdktf/provider-databricks.cluster.ClusterAzureAttributesOutputReference.resetSpotBidMaxPrice"></a>

```typescript
public resetSpotBidMaxPrice(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAzureAttributesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAzureAttributesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAzureAttributesOutputReference.property.logAnalyticsInfo">logAnalyticsInfo</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterAzureAttributesLogAnalyticsInfoOutputReference">ClusterAzureAttributesLogAnalyticsInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAzureAttributesOutputReference.property.availabilityInput">availabilityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAzureAttributesOutputReference.property.firstOnDemandInput">firstOnDemandInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAzureAttributesOutputReference.property.logAnalyticsInfoInput">logAnalyticsInfoInput</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterAzureAttributesLogAnalyticsInfo">ClusterAzureAttributesLogAnalyticsInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAzureAttributesOutputReference.property.spotBidMaxPriceInput">spotBidMaxPriceInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAzureAttributesOutputReference.property.availability">availability</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAzureAttributesOutputReference.property.firstOnDemand">firstOnDemand</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAzureAttributesOutputReference.property.spotBidMaxPrice">spotBidMaxPrice</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterAzureAttributesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterAzureAttributes">ClusterAzureAttributes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.cluster.ClusterAzureAttributesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.cluster.ClusterAzureAttributesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `logAnalyticsInfo`<sup>Required</sup> <a name="logAnalyticsInfo" id="@cdktf/provider-databricks.cluster.ClusterAzureAttributesOutputReference.property.logAnalyticsInfo"></a>

```typescript
public readonly logAnalyticsInfo: ClusterAzureAttributesLogAnalyticsInfoOutputReference;
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterAzureAttributesLogAnalyticsInfoOutputReference">ClusterAzureAttributesLogAnalyticsInfoOutputReference</a>

---

##### `availabilityInput`<sup>Optional</sup> <a name="availabilityInput" id="@cdktf/provider-databricks.cluster.ClusterAzureAttributesOutputReference.property.availabilityInput"></a>

```typescript
public readonly availabilityInput: string;
```

- *Type:* string

---

##### `firstOnDemandInput`<sup>Optional</sup> <a name="firstOnDemandInput" id="@cdktf/provider-databricks.cluster.ClusterAzureAttributesOutputReference.property.firstOnDemandInput"></a>

```typescript
public readonly firstOnDemandInput: number;
```

- *Type:* number

---

##### `logAnalyticsInfoInput`<sup>Optional</sup> <a name="logAnalyticsInfoInput" id="@cdktf/provider-databricks.cluster.ClusterAzureAttributesOutputReference.property.logAnalyticsInfoInput"></a>

```typescript
public readonly logAnalyticsInfoInput: ClusterAzureAttributesLogAnalyticsInfo;
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterAzureAttributesLogAnalyticsInfo">ClusterAzureAttributesLogAnalyticsInfo</a>

---

##### `spotBidMaxPriceInput`<sup>Optional</sup> <a name="spotBidMaxPriceInput" id="@cdktf/provider-databricks.cluster.ClusterAzureAttributesOutputReference.property.spotBidMaxPriceInput"></a>

```typescript
public readonly spotBidMaxPriceInput: number;
```

- *Type:* number

---

##### `availability`<sup>Required</sup> <a name="availability" id="@cdktf/provider-databricks.cluster.ClusterAzureAttributesOutputReference.property.availability"></a>

```typescript
public readonly availability: string;
```

- *Type:* string

---

##### `firstOnDemand`<sup>Required</sup> <a name="firstOnDemand" id="@cdktf/provider-databricks.cluster.ClusterAzureAttributesOutputReference.property.firstOnDemand"></a>

```typescript
public readonly firstOnDemand: number;
```

- *Type:* number

---

##### `spotBidMaxPrice`<sup>Required</sup> <a name="spotBidMaxPrice" id="@cdktf/provider-databricks.cluster.ClusterAzureAttributesOutputReference.property.spotBidMaxPrice"></a>

```typescript
public readonly spotBidMaxPrice: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.cluster.ClusterAzureAttributesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ClusterAzureAttributes;
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterAzureAttributes">ClusterAzureAttributes</a>

---


### ClusterClusterLogConfDbfsOutputReference <a name="ClusterClusterLogConfDbfsOutputReference" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfDbfsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfDbfsOutputReference.Initializer"></a>

```typescript
import { cluster } from '@cdktf/provider-databricks'

new cluster.ClusterClusterLogConfDbfsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfDbfsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfDbfsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfDbfsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfDbfsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfDbfsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfDbfsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfDbfsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfDbfsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfDbfsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfDbfsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfDbfsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfDbfsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfDbfsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfDbfsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfDbfsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfDbfsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfDbfsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfDbfsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfDbfsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfDbfsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfDbfsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfDbfsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfDbfsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfDbfsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfDbfsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfDbfsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfDbfsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfDbfsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfDbfsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfDbfsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfDbfsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfDbfsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfDbfsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfDbfsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfDbfsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfDbfsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfDbfsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfDbfsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfDbfsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfDbfsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfDbfsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfDbfsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfDbfsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfDbfsOutputReference.property.destinationInput">destinationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfDbfsOutputReference.property.destination">destination</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfDbfsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfDbfs">ClusterClusterLogConfDbfs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfDbfsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfDbfsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `destinationInput`<sup>Optional</sup> <a name="destinationInput" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfDbfsOutputReference.property.destinationInput"></a>

```typescript
public readonly destinationInput: string;
```

- *Type:* string

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfDbfsOutputReference.property.destination"></a>

```typescript
public readonly destination: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfDbfsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ClusterClusterLogConfDbfs;
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfDbfs">ClusterClusterLogConfDbfs</a>

---


### ClusterClusterLogConfOutputReference <a name="ClusterClusterLogConfOutputReference" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfOutputReference.Initializer"></a>

```typescript
import { cluster } from '@cdktf/provider-databricks'

new cluster.ClusterClusterLogConfOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfOutputReference.putDbfs">putDbfs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfOutputReference.putS3">putS3</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfOutputReference.resetDbfs">resetDbfs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfOutputReference.resetS3">resetS3</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDbfs` <a name="putDbfs" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfOutputReference.putDbfs"></a>

```typescript
public putDbfs(value: ClusterClusterLogConfDbfs): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfOutputReference.putDbfs.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfDbfs">ClusterClusterLogConfDbfs</a>

---

##### `putS3` <a name="putS3" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfOutputReference.putS3"></a>

```typescript
public putS3(value: ClusterClusterLogConfS3): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfOutputReference.putS3.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3">ClusterClusterLogConfS3</a>

---

##### `resetDbfs` <a name="resetDbfs" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfOutputReference.resetDbfs"></a>

```typescript
public resetDbfs(): void
```

##### `resetS3` <a name="resetS3" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfOutputReference.resetS3"></a>

```typescript
public resetS3(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfOutputReference.property.dbfs">dbfs</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfDbfsOutputReference">ClusterClusterLogConfDbfsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfOutputReference.property.s3">s3</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference">ClusterClusterLogConfS3OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfOutputReference.property.dbfsInput">dbfsInput</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfDbfs">ClusterClusterLogConfDbfs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfOutputReference.property.s3Input">s3Input</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3">ClusterClusterLogConfS3</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConf">ClusterClusterLogConf</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dbfs`<sup>Required</sup> <a name="dbfs" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfOutputReference.property.dbfs"></a>

```typescript
public readonly dbfs: ClusterClusterLogConfDbfsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfDbfsOutputReference">ClusterClusterLogConfDbfsOutputReference</a>

---

##### `s3`<sup>Required</sup> <a name="s3" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfOutputReference.property.s3"></a>

```typescript
public readonly s3: ClusterClusterLogConfS3OutputReference;
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference">ClusterClusterLogConfS3OutputReference</a>

---

##### `dbfsInput`<sup>Optional</sup> <a name="dbfsInput" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfOutputReference.property.dbfsInput"></a>

```typescript
public readonly dbfsInput: ClusterClusterLogConfDbfs;
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfDbfs">ClusterClusterLogConfDbfs</a>

---

##### `s3Input`<sup>Optional</sup> <a name="s3Input" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfOutputReference.property.s3Input"></a>

```typescript
public readonly s3Input: ClusterClusterLogConfS3;
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3">ClusterClusterLogConfS3</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ClusterClusterLogConf;
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConf">ClusterClusterLogConf</a>

---


### ClusterClusterLogConfS3OutputReference <a name="ClusterClusterLogConfS3OutputReference" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.Initializer"></a>

```typescript
import { cluster } from '@cdktf/provider-databricks'

new cluster.ClusterClusterLogConfS3OutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.resetCannedAcl">resetCannedAcl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.resetEnableEncryption">resetEnableEncryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.resetEncryptionType">resetEncryptionType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.resetEndpoint">resetEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.resetKmsKey">resetKmsKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.resetRegion">resetRegion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCannedAcl` <a name="resetCannedAcl" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.resetCannedAcl"></a>

```typescript
public resetCannedAcl(): void
```

##### `resetEnableEncryption` <a name="resetEnableEncryption" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.resetEnableEncryption"></a>

```typescript
public resetEnableEncryption(): void
```

##### `resetEncryptionType` <a name="resetEncryptionType" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.resetEncryptionType"></a>

```typescript
public resetEncryptionType(): void
```

##### `resetEndpoint` <a name="resetEndpoint" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.resetEndpoint"></a>

```typescript
public resetEndpoint(): void
```

##### `resetKmsKey` <a name="resetKmsKey" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.resetKmsKey"></a>

```typescript
public resetKmsKey(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.resetRegion"></a>

```typescript
public resetRegion(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.property.cannedAclInput">cannedAclInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.property.destinationInput">destinationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.property.enableEncryptionInput">enableEncryptionInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.property.encryptionTypeInput">encryptionTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.property.endpointInput">endpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.property.kmsKeyInput">kmsKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.property.cannedAcl">cannedAcl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.property.destination">destination</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.property.enableEncryption">enableEncryption</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.property.encryptionType">encryptionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.property.endpoint">endpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.property.kmsKey">kmsKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3">ClusterClusterLogConfS3</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cannedAclInput`<sup>Optional</sup> <a name="cannedAclInput" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.property.cannedAclInput"></a>

```typescript
public readonly cannedAclInput: string;
```

- *Type:* string

---

##### `destinationInput`<sup>Optional</sup> <a name="destinationInput" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.property.destinationInput"></a>

```typescript
public readonly destinationInput: string;
```

- *Type:* string

---

##### `enableEncryptionInput`<sup>Optional</sup> <a name="enableEncryptionInput" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.property.enableEncryptionInput"></a>

```typescript
public readonly enableEncryptionInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `encryptionTypeInput`<sup>Optional</sup> <a name="encryptionTypeInput" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.property.encryptionTypeInput"></a>

```typescript
public readonly encryptionTypeInput: string;
```

- *Type:* string

---

##### `endpointInput`<sup>Optional</sup> <a name="endpointInput" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.property.endpointInput"></a>

```typescript
public readonly endpointInput: string;
```

- *Type:* string

---

##### `kmsKeyInput`<sup>Optional</sup> <a name="kmsKeyInput" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.property.kmsKeyInput"></a>

```typescript
public readonly kmsKeyInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `cannedAcl`<sup>Required</sup> <a name="cannedAcl" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.property.cannedAcl"></a>

```typescript
public readonly cannedAcl: string;
```

- *Type:* string

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.property.destination"></a>

```typescript
public readonly destination: string;
```

- *Type:* string

---

##### `enableEncryption`<sup>Required</sup> <a name="enableEncryption" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.property.enableEncryption"></a>

```typescript
public readonly enableEncryption: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `encryptionType`<sup>Required</sup> <a name="encryptionType" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.property.encryptionType"></a>

```typescript
public readonly encryptionType: string;
```

- *Type:* string

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.property.endpoint"></a>

```typescript
public readonly endpoint: string;
```

- *Type:* string

---

##### `kmsKey`<sup>Required</sup> <a name="kmsKey" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.property.kmsKey"></a>

```typescript
public readonly kmsKey: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3OutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ClusterClusterLogConfS3;
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterClusterLogConfS3">ClusterClusterLogConfS3</a>

---


### ClusterClusterMountInfoList <a name="ClusterClusterMountInfoList" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoList.Initializer"></a>

```typescript
import { cluster } from '@cdktf/provider-databricks'

new cluster.ClusterClusterMountInfoList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfoList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfoList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfoList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfoList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfoList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfoList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfoList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfoList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoList.get"></a>

```typescript
public get(index: number): ClusterClusterMountInfoOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfoList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfoList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfoList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfo">ClusterClusterMountInfo</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ClusterClusterMountInfo[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfo">ClusterClusterMountInfo</a>[]

---


### ClusterClusterMountInfoNetworkFilesystemInfoOutputReference <a name="ClusterClusterMountInfoNetworkFilesystemInfoOutputReference" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoNetworkFilesystemInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoNetworkFilesystemInfoOutputReference.Initializer"></a>

```typescript
import { cluster } from '@cdktf/provider-databricks'

new cluster.ClusterClusterMountInfoNetworkFilesystemInfoOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfoNetworkFilesystemInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfoNetworkFilesystemInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoNetworkFilesystemInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoNetworkFilesystemInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfoNetworkFilesystemInfoOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfoNetworkFilesystemInfoOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfoNetworkFilesystemInfoOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfoNetworkFilesystemInfoOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfoNetworkFilesystemInfoOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfoNetworkFilesystemInfoOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfoNetworkFilesystemInfoOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfoNetworkFilesystemInfoOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfoNetworkFilesystemInfoOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfoNetworkFilesystemInfoOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfoNetworkFilesystemInfoOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfoNetworkFilesystemInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfoNetworkFilesystemInfoOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfoNetworkFilesystemInfoOutputReference.resetMountOptions">resetMountOptions</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoNetworkFilesystemInfoOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoNetworkFilesystemInfoOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoNetworkFilesystemInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoNetworkFilesystemInfoOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoNetworkFilesystemInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoNetworkFilesystemInfoOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoNetworkFilesystemInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoNetworkFilesystemInfoOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoNetworkFilesystemInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoNetworkFilesystemInfoOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoNetworkFilesystemInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoNetworkFilesystemInfoOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoNetworkFilesystemInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoNetworkFilesystemInfoOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoNetworkFilesystemInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoNetworkFilesystemInfoOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoNetworkFilesystemInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoNetworkFilesystemInfoOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoNetworkFilesystemInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoNetworkFilesystemInfoOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoNetworkFilesystemInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoNetworkFilesystemInfoOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoNetworkFilesystemInfoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoNetworkFilesystemInfoOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMountOptions` <a name="resetMountOptions" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoNetworkFilesystemInfoOutputReference.resetMountOptions"></a>

```typescript
public resetMountOptions(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfoNetworkFilesystemInfoOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfoNetworkFilesystemInfoOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfoNetworkFilesystemInfoOutputReference.property.mountOptionsInput">mountOptionsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfoNetworkFilesystemInfoOutputReference.property.serverAddressInput">serverAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfoNetworkFilesystemInfoOutputReference.property.mountOptions">mountOptions</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfoNetworkFilesystemInfoOutputReference.property.serverAddress">serverAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfoNetworkFilesystemInfoOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfoNetworkFilesystemInfo">ClusterClusterMountInfoNetworkFilesystemInfo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoNetworkFilesystemInfoOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoNetworkFilesystemInfoOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `mountOptionsInput`<sup>Optional</sup> <a name="mountOptionsInput" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoNetworkFilesystemInfoOutputReference.property.mountOptionsInput"></a>

```typescript
public readonly mountOptionsInput: string;
```

- *Type:* string

---

##### `serverAddressInput`<sup>Optional</sup> <a name="serverAddressInput" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoNetworkFilesystemInfoOutputReference.property.serverAddressInput"></a>

```typescript
public readonly serverAddressInput: string;
```

- *Type:* string

---

##### `mountOptions`<sup>Required</sup> <a name="mountOptions" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoNetworkFilesystemInfoOutputReference.property.mountOptions"></a>

```typescript
public readonly mountOptions: string;
```

- *Type:* string

---

##### `serverAddress`<sup>Required</sup> <a name="serverAddress" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoNetworkFilesystemInfoOutputReference.property.serverAddress"></a>

```typescript
public readonly serverAddress: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoNetworkFilesystemInfoOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ClusterClusterMountInfoNetworkFilesystemInfo;
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfoNetworkFilesystemInfo">ClusterClusterMountInfoNetworkFilesystemInfo</a>

---


### ClusterClusterMountInfoOutputReference <a name="ClusterClusterMountInfoOutputReference" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoOutputReference.Initializer"></a>

```typescript
import { cluster } from '@cdktf/provider-databricks'

new cluster.ClusterClusterMountInfoOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfoOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfoOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfoOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfoOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfoOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfoOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfoOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfoOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfoOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfoOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfoOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfoOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfoOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfoOutputReference.putNetworkFilesystemInfo">putNetworkFilesystemInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfoOutputReference.resetRemoteMountDirPath">resetRemoteMountDirPath</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putNetworkFilesystemInfo` <a name="putNetworkFilesystemInfo" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoOutputReference.putNetworkFilesystemInfo"></a>

```typescript
public putNetworkFilesystemInfo(value: ClusterClusterMountInfoNetworkFilesystemInfo): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoOutputReference.putNetworkFilesystemInfo.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfoNetworkFilesystemInfo">ClusterClusterMountInfoNetworkFilesystemInfo</a>

---

##### `resetRemoteMountDirPath` <a name="resetRemoteMountDirPath" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoOutputReference.resetRemoteMountDirPath"></a>

```typescript
public resetRemoteMountDirPath(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfoOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfoOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfoOutputReference.property.networkFilesystemInfo">networkFilesystemInfo</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfoNetworkFilesystemInfoOutputReference">ClusterClusterMountInfoNetworkFilesystemInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfoOutputReference.property.localMountDirPathInput">localMountDirPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfoOutputReference.property.networkFilesystemInfoInput">networkFilesystemInfoInput</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfoNetworkFilesystemInfo">ClusterClusterMountInfoNetworkFilesystemInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfoOutputReference.property.remoteMountDirPathInput">remoteMountDirPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfoOutputReference.property.localMountDirPath">localMountDirPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfoOutputReference.property.remoteMountDirPath">remoteMountDirPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfoOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfo">ClusterClusterMountInfo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `networkFilesystemInfo`<sup>Required</sup> <a name="networkFilesystemInfo" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoOutputReference.property.networkFilesystemInfo"></a>

```typescript
public readonly networkFilesystemInfo: ClusterClusterMountInfoNetworkFilesystemInfoOutputReference;
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfoNetworkFilesystemInfoOutputReference">ClusterClusterMountInfoNetworkFilesystemInfoOutputReference</a>

---

##### `localMountDirPathInput`<sup>Optional</sup> <a name="localMountDirPathInput" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoOutputReference.property.localMountDirPathInput"></a>

```typescript
public readonly localMountDirPathInput: string;
```

- *Type:* string

---

##### `networkFilesystemInfoInput`<sup>Optional</sup> <a name="networkFilesystemInfoInput" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoOutputReference.property.networkFilesystemInfoInput"></a>

```typescript
public readonly networkFilesystemInfoInput: ClusterClusterMountInfoNetworkFilesystemInfo;
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfoNetworkFilesystemInfo">ClusterClusterMountInfoNetworkFilesystemInfo</a>

---

##### `remoteMountDirPathInput`<sup>Optional</sup> <a name="remoteMountDirPathInput" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoOutputReference.property.remoteMountDirPathInput"></a>

```typescript
public readonly remoteMountDirPathInput: string;
```

- *Type:* string

---

##### `localMountDirPath`<sup>Required</sup> <a name="localMountDirPath" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoOutputReference.property.localMountDirPath"></a>

```typescript
public readonly localMountDirPath: string;
```

- *Type:* string

---

##### `remoteMountDirPath`<sup>Required</sup> <a name="remoteMountDirPath" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoOutputReference.property.remoteMountDirPath"></a>

```typescript
public readonly remoteMountDirPath: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.cluster.ClusterClusterMountInfoOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ClusterClusterMountInfo;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.cluster.ClusterClusterMountInfo">ClusterClusterMountInfo</a>

---


### ClusterDockerImageBasicAuthOutputReference <a name="ClusterDockerImageBasicAuthOutputReference" id="@cdktf/provider-databricks.cluster.ClusterDockerImageBasicAuthOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.cluster.ClusterDockerImageBasicAuthOutputReference.Initializer"></a>

```typescript
import { cluster } from '@cdktf/provider-databricks'

new cluster.ClusterDockerImageBasicAuthOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterDockerImageBasicAuthOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterDockerImageBasicAuthOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.cluster.ClusterDockerImageBasicAuthOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterDockerImageBasicAuthOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterDockerImageBasicAuthOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterDockerImageBasicAuthOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterDockerImageBasicAuthOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterDockerImageBasicAuthOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterDockerImageBasicAuthOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterDockerImageBasicAuthOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterDockerImageBasicAuthOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterDockerImageBasicAuthOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterDockerImageBasicAuthOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterDockerImageBasicAuthOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterDockerImageBasicAuthOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterDockerImageBasicAuthOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterDockerImageBasicAuthOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.cluster.ClusterDockerImageBasicAuthOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterDockerImageBasicAuthOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterDockerImageBasicAuthOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.cluster.ClusterDockerImageBasicAuthOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterDockerImageBasicAuthOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterDockerImageBasicAuthOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterDockerImageBasicAuthOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.cluster.ClusterDockerImageBasicAuthOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterDockerImageBasicAuthOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.cluster.ClusterDockerImageBasicAuthOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterDockerImageBasicAuthOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.cluster.ClusterDockerImageBasicAuthOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterDockerImageBasicAuthOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterDockerImageBasicAuthOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterDockerImageBasicAuthOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.cluster.ClusterDockerImageBasicAuthOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterDockerImageBasicAuthOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterDockerImageBasicAuthOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterDockerImageBasicAuthOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.cluster.ClusterDockerImageBasicAuthOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.cluster.ClusterDockerImageBasicAuthOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.cluster.ClusterDockerImageBasicAuthOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.cluster.ClusterDockerImageBasicAuthOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.cluster.ClusterDockerImageBasicAuthOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterDockerImageBasicAuthOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterDockerImageBasicAuthOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterDockerImageBasicAuthOutputReference.property.passwordInput">passwordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterDockerImageBasicAuthOutputReference.property.usernameInput">usernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterDockerImageBasicAuthOutputReference.property.password">password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterDockerImageBasicAuthOutputReference.property.username">username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterDockerImageBasicAuthOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterDockerImageBasicAuth">ClusterDockerImageBasicAuth</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.cluster.ClusterDockerImageBasicAuthOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.cluster.ClusterDockerImageBasicAuthOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktf/provider-databricks.cluster.ClusterDockerImageBasicAuthOutputReference.property.passwordInput"></a>

```typescript
public readonly passwordInput: string;
```

- *Type:* string

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktf/provider-databricks.cluster.ClusterDockerImageBasicAuthOutputReference.property.usernameInput"></a>

```typescript
public readonly usernameInput: string;
```

- *Type:* string

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-databricks.cluster.ClusterDockerImageBasicAuthOutputReference.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-databricks.cluster.ClusterDockerImageBasicAuthOutputReference.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.cluster.ClusterDockerImageBasicAuthOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ClusterDockerImageBasicAuth;
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterDockerImageBasicAuth">ClusterDockerImageBasicAuth</a>

---


### ClusterDockerImageOutputReference <a name="ClusterDockerImageOutputReference" id="@cdktf/provider-databricks.cluster.ClusterDockerImageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.cluster.ClusterDockerImageOutputReference.Initializer"></a>

```typescript
import { cluster } from '@cdktf/provider-databricks'

new cluster.ClusterDockerImageOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterDockerImageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterDockerImageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.cluster.ClusterDockerImageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterDockerImageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterDockerImageOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterDockerImageOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterDockerImageOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterDockerImageOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterDockerImageOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterDockerImageOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterDockerImageOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterDockerImageOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterDockerImageOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterDockerImageOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterDockerImageOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterDockerImageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterDockerImageOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterDockerImageOutputReference.putBasicAuth">putBasicAuth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterDockerImageOutputReference.resetBasicAuth">resetBasicAuth</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.cluster.ClusterDockerImageOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterDockerImageOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterDockerImageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.cluster.ClusterDockerImageOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterDockerImageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterDockerImageOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterDockerImageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.cluster.ClusterDockerImageOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterDockerImageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.cluster.ClusterDockerImageOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterDockerImageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.cluster.ClusterDockerImageOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterDockerImageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterDockerImageOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterDockerImageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.cluster.ClusterDockerImageOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterDockerImageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterDockerImageOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterDockerImageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.cluster.ClusterDockerImageOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.cluster.ClusterDockerImageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.cluster.ClusterDockerImageOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.cluster.ClusterDockerImageOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.cluster.ClusterDockerImageOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putBasicAuth` <a name="putBasicAuth" id="@cdktf/provider-databricks.cluster.ClusterDockerImageOutputReference.putBasicAuth"></a>

```typescript
public putBasicAuth(value: ClusterDockerImageBasicAuth): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.cluster.ClusterDockerImageOutputReference.putBasicAuth.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterDockerImageBasicAuth">ClusterDockerImageBasicAuth</a>

---

##### `resetBasicAuth` <a name="resetBasicAuth" id="@cdktf/provider-databricks.cluster.ClusterDockerImageOutputReference.resetBasicAuth"></a>

```typescript
public resetBasicAuth(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterDockerImageOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterDockerImageOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterDockerImageOutputReference.property.basicAuth">basicAuth</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterDockerImageBasicAuthOutputReference">ClusterDockerImageBasicAuthOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterDockerImageOutputReference.property.basicAuthInput">basicAuthInput</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterDockerImageBasicAuth">ClusterDockerImageBasicAuth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterDockerImageOutputReference.property.urlInput">urlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterDockerImageOutputReference.property.url">url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterDockerImageOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterDockerImage">ClusterDockerImage</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.cluster.ClusterDockerImageOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.cluster.ClusterDockerImageOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `basicAuth`<sup>Required</sup> <a name="basicAuth" id="@cdktf/provider-databricks.cluster.ClusterDockerImageOutputReference.property.basicAuth"></a>

```typescript
public readonly basicAuth: ClusterDockerImageBasicAuthOutputReference;
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterDockerImageBasicAuthOutputReference">ClusterDockerImageBasicAuthOutputReference</a>

---

##### `basicAuthInput`<sup>Optional</sup> <a name="basicAuthInput" id="@cdktf/provider-databricks.cluster.ClusterDockerImageOutputReference.property.basicAuthInput"></a>

```typescript
public readonly basicAuthInput: ClusterDockerImageBasicAuth;
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterDockerImageBasicAuth">ClusterDockerImageBasicAuth</a>

---

##### `urlInput`<sup>Optional</sup> <a name="urlInput" id="@cdktf/provider-databricks.cluster.ClusterDockerImageOutputReference.property.urlInput"></a>

```typescript
public readonly urlInput: string;
```

- *Type:* string

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-databricks.cluster.ClusterDockerImageOutputReference.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.cluster.ClusterDockerImageOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ClusterDockerImage;
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterDockerImage">ClusterDockerImage</a>

---


### ClusterGcpAttributesOutputReference <a name="ClusterGcpAttributesOutputReference" id="@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.Initializer"></a>

```typescript
import { cluster } from '@cdktf/provider-databricks'

new cluster.ClusterGcpAttributesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.resetAvailability">resetAvailability</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.resetBootDiskSize">resetBootDiskSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.resetGoogleServiceAccount">resetGoogleServiceAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.resetLocalSsdCount">resetLocalSsdCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.resetUsePreemptibleExecutors">resetUsePreemptibleExecutors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.resetZoneId">resetZoneId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAvailability` <a name="resetAvailability" id="@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.resetAvailability"></a>

```typescript
public resetAvailability(): void
```

##### `resetBootDiskSize` <a name="resetBootDiskSize" id="@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.resetBootDiskSize"></a>

```typescript
public resetBootDiskSize(): void
```

##### `resetGoogleServiceAccount` <a name="resetGoogleServiceAccount" id="@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.resetGoogleServiceAccount"></a>

```typescript
public resetGoogleServiceAccount(): void
```

##### `resetLocalSsdCount` <a name="resetLocalSsdCount" id="@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.resetLocalSsdCount"></a>

```typescript
public resetLocalSsdCount(): void
```

##### `resetUsePreemptibleExecutors` <a name="resetUsePreemptibleExecutors" id="@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.resetUsePreemptibleExecutors"></a>

```typescript
public resetUsePreemptibleExecutors(): void
```

##### `resetZoneId` <a name="resetZoneId" id="@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.resetZoneId"></a>

```typescript
public resetZoneId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.property.availabilityInput">availabilityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.property.bootDiskSizeInput">bootDiskSizeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.property.googleServiceAccountInput">googleServiceAccountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.property.localSsdCountInput">localSsdCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.property.usePreemptibleExecutorsInput">usePreemptibleExecutorsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.property.zoneIdInput">zoneIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.property.availability">availability</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.property.bootDiskSize">bootDiskSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.property.googleServiceAccount">googleServiceAccount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.property.localSsdCount">localSsdCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.property.usePreemptibleExecutors">usePreemptibleExecutors</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.property.zoneId">zoneId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterGcpAttributes">ClusterGcpAttributes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `availabilityInput`<sup>Optional</sup> <a name="availabilityInput" id="@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.property.availabilityInput"></a>

```typescript
public readonly availabilityInput: string;
```

- *Type:* string

---

##### `bootDiskSizeInput`<sup>Optional</sup> <a name="bootDiskSizeInput" id="@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.property.bootDiskSizeInput"></a>

```typescript
public readonly bootDiskSizeInput: number;
```

- *Type:* number

---

##### `googleServiceAccountInput`<sup>Optional</sup> <a name="googleServiceAccountInput" id="@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.property.googleServiceAccountInput"></a>

```typescript
public readonly googleServiceAccountInput: string;
```

- *Type:* string

---

##### `localSsdCountInput`<sup>Optional</sup> <a name="localSsdCountInput" id="@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.property.localSsdCountInput"></a>

```typescript
public readonly localSsdCountInput: number;
```

- *Type:* number

---

##### `usePreemptibleExecutorsInput`<sup>Optional</sup> <a name="usePreemptibleExecutorsInput" id="@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.property.usePreemptibleExecutorsInput"></a>

```typescript
public readonly usePreemptibleExecutorsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `zoneIdInput`<sup>Optional</sup> <a name="zoneIdInput" id="@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.property.zoneIdInput"></a>

```typescript
public readonly zoneIdInput: string;
```

- *Type:* string

---

##### `availability`<sup>Required</sup> <a name="availability" id="@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.property.availability"></a>

```typescript
public readonly availability: string;
```

- *Type:* string

---

##### `bootDiskSize`<sup>Required</sup> <a name="bootDiskSize" id="@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.property.bootDiskSize"></a>

```typescript
public readonly bootDiskSize: number;
```

- *Type:* number

---

##### `googleServiceAccount`<sup>Required</sup> <a name="googleServiceAccount" id="@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.property.googleServiceAccount"></a>

```typescript
public readonly googleServiceAccount: string;
```

- *Type:* string

---

##### `localSsdCount`<sup>Required</sup> <a name="localSsdCount" id="@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.property.localSsdCount"></a>

```typescript
public readonly localSsdCount: number;
```

- *Type:* number

---

##### `usePreemptibleExecutors`<sup>Required</sup> <a name="usePreemptibleExecutors" id="@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.property.usePreemptibleExecutors"></a>

```typescript
public readonly usePreemptibleExecutors: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `zoneId`<sup>Required</sup> <a name="zoneId" id="@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.property.zoneId"></a>

```typescript
public readonly zoneId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.cluster.ClusterGcpAttributesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ClusterGcpAttributes;
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterGcpAttributes">ClusterGcpAttributes</a>

---


### ClusterInitScriptsAbfssOutputReference <a name="ClusterInitScriptsAbfssOutputReference" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsAbfssOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsAbfssOutputReference.Initializer"></a>

```typescript
import { cluster } from '@cdktf/provider-databricks'

new cluster.ClusterInitScriptsAbfssOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsAbfssOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsAbfssOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsAbfssOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsAbfssOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsAbfssOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsAbfssOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsAbfssOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsAbfssOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsAbfssOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsAbfssOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsAbfssOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsAbfssOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsAbfssOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsAbfssOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsAbfssOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsAbfssOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsAbfssOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsAbfssOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsAbfssOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsAbfssOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsAbfssOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsAbfssOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsAbfssOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsAbfssOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsAbfssOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsAbfssOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsAbfssOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsAbfssOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsAbfssOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsAbfssOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsAbfssOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsAbfssOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsAbfssOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsAbfssOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsAbfssOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsAbfssOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsAbfssOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsAbfssOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsAbfssOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsAbfssOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsAbfssOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsAbfssOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsAbfssOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsAbfssOutputReference.property.destinationInput">destinationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsAbfssOutputReference.property.destination">destination</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsAbfssOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsAbfss">ClusterInitScriptsAbfss</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsAbfssOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsAbfssOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `destinationInput`<sup>Optional</sup> <a name="destinationInput" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsAbfssOutputReference.property.destinationInput"></a>

```typescript
public readonly destinationInput: string;
```

- *Type:* string

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsAbfssOutputReference.property.destination"></a>

```typescript
public readonly destination: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsAbfssOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ClusterInitScriptsAbfss;
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsAbfss">ClusterInitScriptsAbfss</a>

---


### ClusterInitScriptsDbfsOutputReference <a name="ClusterInitScriptsDbfsOutputReference" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsDbfsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsDbfsOutputReference.Initializer"></a>

```typescript
import { cluster } from '@cdktf/provider-databricks'

new cluster.ClusterInitScriptsDbfsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsDbfsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsDbfsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsDbfsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsDbfsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsDbfsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsDbfsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsDbfsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsDbfsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsDbfsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsDbfsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsDbfsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsDbfsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsDbfsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsDbfsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsDbfsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsDbfsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsDbfsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsDbfsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsDbfsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsDbfsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsDbfsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsDbfsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsDbfsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsDbfsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsDbfsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsDbfsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsDbfsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsDbfsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsDbfsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsDbfsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsDbfsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsDbfsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsDbfsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsDbfsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsDbfsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsDbfsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsDbfsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsDbfsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsDbfsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsDbfsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsDbfsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsDbfsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsDbfsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsDbfsOutputReference.property.destinationInput">destinationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsDbfsOutputReference.property.destination">destination</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsDbfsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsDbfs">ClusterInitScriptsDbfs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsDbfsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsDbfsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `destinationInput`<sup>Optional</sup> <a name="destinationInput" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsDbfsOutputReference.property.destinationInput"></a>

```typescript
public readonly destinationInput: string;
```

- *Type:* string

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsDbfsOutputReference.property.destination"></a>

```typescript
public readonly destination: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsDbfsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ClusterInitScriptsDbfs;
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsDbfs">ClusterInitScriptsDbfs</a>

---


### ClusterInitScriptsFileOutputReference <a name="ClusterInitScriptsFileOutputReference" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsFileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsFileOutputReference.Initializer"></a>

```typescript
import { cluster } from '@cdktf/provider-databricks'

new cluster.ClusterInitScriptsFileOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsFileOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsFileOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsFileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsFileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsFileOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsFileOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsFileOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsFileOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsFileOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsFileOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsFileOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsFileOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsFileOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsFileOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsFileOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsFileOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsFileOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsFileOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsFileOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsFileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsFileOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsFileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsFileOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsFileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsFileOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsFileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsFileOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsFileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsFileOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsFileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsFileOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsFileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsFileOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsFileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsFileOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsFileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsFileOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsFileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsFileOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsFileOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsFileOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsFileOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsFileOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsFileOutputReference.property.destinationInput">destinationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsFileOutputReference.property.destination">destination</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsFileOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsFile">ClusterInitScriptsFile</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsFileOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsFileOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `destinationInput`<sup>Optional</sup> <a name="destinationInput" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsFileOutputReference.property.destinationInput"></a>

```typescript
public readonly destinationInput: string;
```

- *Type:* string

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsFileOutputReference.property.destination"></a>

```typescript
public readonly destination: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsFileOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ClusterInitScriptsFile;
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsFile">ClusterInitScriptsFile</a>

---


### ClusterInitScriptsGcsOutputReference <a name="ClusterInitScriptsGcsOutputReference" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsGcsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsGcsOutputReference.Initializer"></a>

```typescript
import { cluster } from '@cdktf/provider-databricks'

new cluster.ClusterInitScriptsGcsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsGcsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsGcsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsGcsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsGcsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsGcsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsGcsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsGcsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsGcsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsGcsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsGcsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsGcsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsGcsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsGcsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsGcsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsGcsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsGcsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsGcsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsGcsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsGcsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsGcsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsGcsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsGcsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsGcsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsGcsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsGcsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsGcsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsGcsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsGcsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsGcsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsGcsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsGcsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsGcsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsGcsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsGcsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsGcsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsGcsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsGcsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsGcsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsGcsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsGcsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsGcsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsGcsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsGcsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsGcsOutputReference.property.destinationInput">destinationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsGcsOutputReference.property.destination">destination</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsGcsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsGcs">ClusterInitScriptsGcs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsGcsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsGcsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `destinationInput`<sup>Optional</sup> <a name="destinationInput" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsGcsOutputReference.property.destinationInput"></a>

```typescript
public readonly destinationInput: string;
```

- *Type:* string

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsGcsOutputReference.property.destination"></a>

```typescript
public readonly destination: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsGcsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ClusterInitScriptsGcs;
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsGcs">ClusterInitScriptsGcs</a>

---


### ClusterInitScriptsList <a name="ClusterInitScriptsList" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsList.Initializer"></a>

```typescript
import { cluster } from '@cdktf/provider-databricks'

new cluster.ClusterInitScriptsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsList.get"></a>

```typescript
public get(index: number): ClusterInitScriptsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.cluster.ClusterInitScripts">ClusterInitScripts</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ClusterInitScripts[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.cluster.ClusterInitScripts">ClusterInitScripts</a>[]

---


### ClusterInitScriptsOutputReference <a name="ClusterInitScriptsOutputReference" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.Initializer"></a>

```typescript
import { cluster } from '@cdktf/provider-databricks'

new cluster.ClusterInitScriptsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.putAbfss">putAbfss</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.putDbfs">putDbfs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.putFile">putFile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.putGcs">putGcs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.putS3">putS3</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.putVolumes">putVolumes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.putWorkspace">putWorkspace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.resetAbfss">resetAbfss</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.resetDbfs">resetDbfs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.resetFile">resetFile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.resetGcs">resetGcs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.resetS3">resetS3</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.resetVolumes">resetVolumes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.resetWorkspace">resetWorkspace</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAbfss` <a name="putAbfss" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.putAbfss"></a>

```typescript
public putAbfss(value: ClusterInitScriptsAbfss): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.putAbfss.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsAbfss">ClusterInitScriptsAbfss</a>

---

##### `putDbfs` <a name="putDbfs" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.putDbfs"></a>

```typescript
public putDbfs(value: ClusterInitScriptsDbfs): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.putDbfs.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsDbfs">ClusterInitScriptsDbfs</a>

---

##### `putFile` <a name="putFile" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.putFile"></a>

```typescript
public putFile(value: ClusterInitScriptsFile): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.putFile.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsFile">ClusterInitScriptsFile</a>

---

##### `putGcs` <a name="putGcs" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.putGcs"></a>

```typescript
public putGcs(value: ClusterInitScriptsGcs): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.putGcs.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsGcs">ClusterInitScriptsGcs</a>

---

##### `putS3` <a name="putS3" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.putS3"></a>

```typescript
public putS3(value: ClusterInitScriptsS3): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.putS3.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsS3">ClusterInitScriptsS3</a>

---

##### `putVolumes` <a name="putVolumes" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.putVolumes"></a>

```typescript
public putVolumes(value: ClusterInitScriptsVolumes): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.putVolumes.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsVolumes">ClusterInitScriptsVolumes</a>

---

##### `putWorkspace` <a name="putWorkspace" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.putWorkspace"></a>

```typescript
public putWorkspace(value: ClusterInitScriptsWorkspace): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.putWorkspace.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsWorkspace">ClusterInitScriptsWorkspace</a>

---

##### `resetAbfss` <a name="resetAbfss" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.resetAbfss"></a>

```typescript
public resetAbfss(): void
```

##### `resetDbfs` <a name="resetDbfs" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.resetDbfs"></a>

```typescript
public resetDbfs(): void
```

##### `resetFile` <a name="resetFile" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.resetFile"></a>

```typescript
public resetFile(): void
```

##### `resetGcs` <a name="resetGcs" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.resetGcs"></a>

```typescript
public resetGcs(): void
```

##### `resetS3` <a name="resetS3" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.resetS3"></a>

```typescript
public resetS3(): void
```

##### `resetVolumes` <a name="resetVolumes" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.resetVolumes"></a>

```typescript
public resetVolumes(): void
```

##### `resetWorkspace` <a name="resetWorkspace" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.resetWorkspace"></a>

```typescript
public resetWorkspace(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.property.abfss">abfss</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsAbfssOutputReference">ClusterInitScriptsAbfssOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.property.dbfs">dbfs</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsDbfsOutputReference">ClusterInitScriptsDbfsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.property.file">file</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsFileOutputReference">ClusterInitScriptsFileOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.property.gcs">gcs</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsGcsOutputReference">ClusterInitScriptsGcsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.property.s3">s3</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference">ClusterInitScriptsS3OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.property.volumes">volumes</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsVolumesOutputReference">ClusterInitScriptsVolumesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.property.workspace">workspace</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsWorkspaceOutputReference">ClusterInitScriptsWorkspaceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.property.abfssInput">abfssInput</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsAbfss">ClusterInitScriptsAbfss</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.property.dbfsInput">dbfsInput</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsDbfs">ClusterInitScriptsDbfs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.property.fileInput">fileInput</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsFile">ClusterInitScriptsFile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.property.gcsInput">gcsInput</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsGcs">ClusterInitScriptsGcs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.property.s3Input">s3Input</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsS3">ClusterInitScriptsS3</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.property.volumesInput">volumesInput</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsVolumes">ClusterInitScriptsVolumes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.property.workspaceInput">workspaceInput</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsWorkspace">ClusterInitScriptsWorkspace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.cluster.ClusterInitScripts">ClusterInitScripts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `abfss`<sup>Required</sup> <a name="abfss" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.property.abfss"></a>

```typescript
public readonly abfss: ClusterInitScriptsAbfssOutputReference;
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsAbfssOutputReference">ClusterInitScriptsAbfssOutputReference</a>

---

##### `dbfs`<sup>Required</sup> <a name="dbfs" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.property.dbfs"></a>

```typescript
public readonly dbfs: ClusterInitScriptsDbfsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsDbfsOutputReference">ClusterInitScriptsDbfsOutputReference</a>

---

##### `file`<sup>Required</sup> <a name="file" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.property.file"></a>

```typescript
public readonly file: ClusterInitScriptsFileOutputReference;
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsFileOutputReference">ClusterInitScriptsFileOutputReference</a>

---

##### `gcs`<sup>Required</sup> <a name="gcs" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.property.gcs"></a>

```typescript
public readonly gcs: ClusterInitScriptsGcsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsGcsOutputReference">ClusterInitScriptsGcsOutputReference</a>

---

##### `s3`<sup>Required</sup> <a name="s3" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.property.s3"></a>

```typescript
public readonly s3: ClusterInitScriptsS3OutputReference;
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference">ClusterInitScriptsS3OutputReference</a>

---

##### `volumes`<sup>Required</sup> <a name="volumes" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.property.volumes"></a>

```typescript
public readonly volumes: ClusterInitScriptsVolumesOutputReference;
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsVolumesOutputReference">ClusterInitScriptsVolumesOutputReference</a>

---

##### `workspace`<sup>Required</sup> <a name="workspace" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.property.workspace"></a>

```typescript
public readonly workspace: ClusterInitScriptsWorkspaceOutputReference;
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsWorkspaceOutputReference">ClusterInitScriptsWorkspaceOutputReference</a>

---

##### `abfssInput`<sup>Optional</sup> <a name="abfssInput" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.property.abfssInput"></a>

```typescript
public readonly abfssInput: ClusterInitScriptsAbfss;
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsAbfss">ClusterInitScriptsAbfss</a>

---

##### `dbfsInput`<sup>Optional</sup> <a name="dbfsInput" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.property.dbfsInput"></a>

```typescript
public readonly dbfsInput: ClusterInitScriptsDbfs;
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsDbfs">ClusterInitScriptsDbfs</a>

---

##### `fileInput`<sup>Optional</sup> <a name="fileInput" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.property.fileInput"></a>

```typescript
public readonly fileInput: ClusterInitScriptsFile;
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsFile">ClusterInitScriptsFile</a>

---

##### `gcsInput`<sup>Optional</sup> <a name="gcsInput" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.property.gcsInput"></a>

```typescript
public readonly gcsInput: ClusterInitScriptsGcs;
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsGcs">ClusterInitScriptsGcs</a>

---

##### `s3Input`<sup>Optional</sup> <a name="s3Input" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.property.s3Input"></a>

```typescript
public readonly s3Input: ClusterInitScriptsS3;
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsS3">ClusterInitScriptsS3</a>

---

##### `volumesInput`<sup>Optional</sup> <a name="volumesInput" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.property.volumesInput"></a>

```typescript
public readonly volumesInput: ClusterInitScriptsVolumes;
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsVolumes">ClusterInitScriptsVolumes</a>

---

##### `workspaceInput`<sup>Optional</sup> <a name="workspaceInput" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.property.workspaceInput"></a>

```typescript
public readonly workspaceInput: ClusterInitScriptsWorkspace;
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsWorkspace">ClusterInitScriptsWorkspace</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ClusterInitScripts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.cluster.ClusterInitScripts">ClusterInitScripts</a>

---


### ClusterInitScriptsS3OutputReference <a name="ClusterInitScriptsS3OutputReference" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.Initializer"></a>

```typescript
import { cluster } from '@cdktf/provider-databricks'

new cluster.ClusterInitScriptsS3OutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.resetCannedAcl">resetCannedAcl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.resetEnableEncryption">resetEnableEncryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.resetEncryptionType">resetEncryptionType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.resetEndpoint">resetEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.resetKmsKey">resetKmsKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.resetRegion">resetRegion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCannedAcl` <a name="resetCannedAcl" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.resetCannedAcl"></a>

```typescript
public resetCannedAcl(): void
```

##### `resetEnableEncryption` <a name="resetEnableEncryption" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.resetEnableEncryption"></a>

```typescript
public resetEnableEncryption(): void
```

##### `resetEncryptionType` <a name="resetEncryptionType" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.resetEncryptionType"></a>

```typescript
public resetEncryptionType(): void
```

##### `resetEndpoint` <a name="resetEndpoint" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.resetEndpoint"></a>

```typescript
public resetEndpoint(): void
```

##### `resetKmsKey` <a name="resetKmsKey" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.resetKmsKey"></a>

```typescript
public resetKmsKey(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.resetRegion"></a>

```typescript
public resetRegion(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.property.cannedAclInput">cannedAclInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.property.destinationInput">destinationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.property.enableEncryptionInput">enableEncryptionInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.property.encryptionTypeInput">encryptionTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.property.endpointInput">endpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.property.kmsKeyInput">kmsKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.property.cannedAcl">cannedAcl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.property.destination">destination</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.property.enableEncryption">enableEncryption</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.property.encryptionType">encryptionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.property.endpoint">endpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.property.kmsKey">kmsKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsS3">ClusterInitScriptsS3</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cannedAclInput`<sup>Optional</sup> <a name="cannedAclInput" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.property.cannedAclInput"></a>

```typescript
public readonly cannedAclInput: string;
```

- *Type:* string

---

##### `destinationInput`<sup>Optional</sup> <a name="destinationInput" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.property.destinationInput"></a>

```typescript
public readonly destinationInput: string;
```

- *Type:* string

---

##### `enableEncryptionInput`<sup>Optional</sup> <a name="enableEncryptionInput" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.property.enableEncryptionInput"></a>

```typescript
public readonly enableEncryptionInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `encryptionTypeInput`<sup>Optional</sup> <a name="encryptionTypeInput" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.property.encryptionTypeInput"></a>

```typescript
public readonly encryptionTypeInput: string;
```

- *Type:* string

---

##### `endpointInput`<sup>Optional</sup> <a name="endpointInput" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.property.endpointInput"></a>

```typescript
public readonly endpointInput: string;
```

- *Type:* string

---

##### `kmsKeyInput`<sup>Optional</sup> <a name="kmsKeyInput" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.property.kmsKeyInput"></a>

```typescript
public readonly kmsKeyInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `cannedAcl`<sup>Required</sup> <a name="cannedAcl" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.property.cannedAcl"></a>

```typescript
public readonly cannedAcl: string;
```

- *Type:* string

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.property.destination"></a>

```typescript
public readonly destination: string;
```

- *Type:* string

---

##### `enableEncryption`<sup>Required</sup> <a name="enableEncryption" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.property.enableEncryption"></a>

```typescript
public readonly enableEncryption: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `encryptionType`<sup>Required</sup> <a name="encryptionType" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.property.encryptionType"></a>

```typescript
public readonly encryptionType: string;
```

- *Type:* string

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.property.endpoint"></a>

```typescript
public readonly endpoint: string;
```

- *Type:* string

---

##### `kmsKey`<sup>Required</sup> <a name="kmsKey" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.property.kmsKey"></a>

```typescript
public readonly kmsKey: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsS3OutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ClusterInitScriptsS3;
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsS3">ClusterInitScriptsS3</a>

---


### ClusterInitScriptsVolumesOutputReference <a name="ClusterInitScriptsVolumesOutputReference" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsVolumesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsVolumesOutputReference.Initializer"></a>

```typescript
import { cluster } from '@cdktf/provider-databricks'

new cluster.ClusterInitScriptsVolumesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsVolumesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsVolumesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsVolumesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsVolumesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsVolumesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsVolumesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsVolumesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsVolumesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsVolumesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsVolumesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsVolumesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsVolumesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsVolumesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsVolumesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsVolumesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsVolumesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsVolumesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsVolumesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsVolumesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsVolumesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsVolumesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsVolumesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsVolumesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsVolumesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsVolumesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsVolumesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsVolumesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsVolumesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsVolumesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsVolumesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsVolumesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsVolumesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsVolumesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsVolumesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsVolumesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsVolumesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsVolumesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsVolumesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsVolumesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsVolumesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsVolumesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsVolumesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsVolumesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsVolumesOutputReference.property.destinationInput">destinationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsVolumesOutputReference.property.destination">destination</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsVolumesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsVolumes">ClusterInitScriptsVolumes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsVolumesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsVolumesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `destinationInput`<sup>Optional</sup> <a name="destinationInput" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsVolumesOutputReference.property.destinationInput"></a>

```typescript
public readonly destinationInput: string;
```

- *Type:* string

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsVolumesOutputReference.property.destination"></a>

```typescript
public readonly destination: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsVolumesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ClusterInitScriptsVolumes;
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsVolumes">ClusterInitScriptsVolumes</a>

---


### ClusterInitScriptsWorkspaceOutputReference <a name="ClusterInitScriptsWorkspaceOutputReference" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsWorkspaceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsWorkspaceOutputReference.Initializer"></a>

```typescript
import { cluster } from '@cdktf/provider-databricks'

new cluster.ClusterInitScriptsWorkspaceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsWorkspaceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsWorkspaceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsWorkspaceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsWorkspaceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsWorkspaceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsWorkspaceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsWorkspaceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsWorkspaceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsWorkspaceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsWorkspaceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsWorkspaceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsWorkspaceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsWorkspaceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsWorkspaceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsWorkspaceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsWorkspaceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsWorkspaceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsWorkspaceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsWorkspaceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsWorkspaceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsWorkspaceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsWorkspaceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsWorkspaceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsWorkspaceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsWorkspaceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsWorkspaceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsWorkspaceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsWorkspaceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsWorkspaceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsWorkspaceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsWorkspaceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsWorkspaceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsWorkspaceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsWorkspaceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsWorkspaceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsWorkspaceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsWorkspaceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsWorkspaceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsWorkspaceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsWorkspaceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsWorkspaceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsWorkspaceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsWorkspaceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsWorkspaceOutputReference.property.destinationInput">destinationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsWorkspaceOutputReference.property.destination">destination</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsWorkspaceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsWorkspace">ClusterInitScriptsWorkspace</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsWorkspaceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsWorkspaceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `destinationInput`<sup>Optional</sup> <a name="destinationInput" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsWorkspaceOutputReference.property.destinationInput"></a>

```typescript
public readonly destinationInput: string;
```

- *Type:* string

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsWorkspaceOutputReference.property.destination"></a>

```typescript
public readonly destination: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.cluster.ClusterInitScriptsWorkspaceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ClusterInitScriptsWorkspace;
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterInitScriptsWorkspace">ClusterInitScriptsWorkspace</a>

---


### ClusterLibraryCranOutputReference <a name="ClusterLibraryCranOutputReference" id="@cdktf/provider-databricks.cluster.ClusterLibraryCranOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.cluster.ClusterLibraryCranOutputReference.Initializer"></a>

```typescript
import { cluster } from '@cdktf/provider-databricks'

new cluster.ClusterLibraryCranOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryCranOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryCranOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.cluster.ClusterLibraryCranOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryCranOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryCranOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryCranOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryCranOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryCranOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryCranOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryCranOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryCranOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryCranOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryCranOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryCranOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryCranOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryCranOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryCranOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryCranOutputReference.resetRepo">resetRepo</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.cluster.ClusterLibraryCranOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryCranOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryCranOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryCranOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryCranOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryCranOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryCranOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryCranOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryCranOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryCranOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryCranOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryCranOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryCranOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryCranOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryCranOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryCranOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryCranOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryCranOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryCranOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryCranOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.cluster.ClusterLibraryCranOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.cluster.ClusterLibraryCranOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.cluster.ClusterLibraryCranOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.cluster.ClusterLibraryCranOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRepo` <a name="resetRepo" id="@cdktf/provider-databricks.cluster.ClusterLibraryCranOutputReference.resetRepo"></a>

```typescript
public resetRepo(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryCranOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryCranOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryCranOutputReference.property.packageInput">packageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryCranOutputReference.property.repoInput">repoInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryCranOutputReference.property.package">package</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryCranOutputReference.property.repo">repo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryCranOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryCran">ClusterLibraryCran</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.cluster.ClusterLibraryCranOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.cluster.ClusterLibraryCranOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `packageInput`<sup>Optional</sup> <a name="packageInput" id="@cdktf/provider-databricks.cluster.ClusterLibraryCranOutputReference.property.packageInput"></a>

```typescript
public readonly packageInput: string;
```

- *Type:* string

---

##### `repoInput`<sup>Optional</sup> <a name="repoInput" id="@cdktf/provider-databricks.cluster.ClusterLibraryCranOutputReference.property.repoInput"></a>

```typescript
public readonly repoInput: string;
```

- *Type:* string

---

##### `package`<sup>Required</sup> <a name="package" id="@cdktf/provider-databricks.cluster.ClusterLibraryCranOutputReference.property.package"></a>

```typescript
public readonly package: string;
```

- *Type:* string

---

##### `repo`<sup>Required</sup> <a name="repo" id="@cdktf/provider-databricks.cluster.ClusterLibraryCranOutputReference.property.repo"></a>

```typescript
public readonly repo: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.cluster.ClusterLibraryCranOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ClusterLibraryCran;
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterLibraryCran">ClusterLibraryCran</a>

---


### ClusterLibraryList <a name="ClusterLibraryList" id="@cdktf/provider-databricks.cluster.ClusterLibraryList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.cluster.ClusterLibraryList.Initializer"></a>

```typescript
import { cluster } from '@cdktf/provider-databricks'

new cluster.ClusterLibraryList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.cluster.ClusterLibraryList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-databricks.cluster.ClusterLibraryList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-databricks.cluster.ClusterLibraryList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-databricks.cluster.ClusterLibraryList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.cluster.ClusterLibraryList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.cluster.ClusterLibraryList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.cluster.ClusterLibraryList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.cluster.ClusterLibraryList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-databricks.cluster.ClusterLibraryList.get"></a>

```typescript
public get(index: number): ClusterLibraryOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.cluster.ClusterLibraryList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.cluster.ClusterLibrary">ClusterLibrary</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.cluster.ClusterLibraryList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.cluster.ClusterLibraryList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.cluster.ClusterLibraryList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ClusterLibrary[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.cluster.ClusterLibrary">ClusterLibrary</a>[]

---


### ClusterLibraryMavenOutputReference <a name="ClusterLibraryMavenOutputReference" id="@cdktf/provider-databricks.cluster.ClusterLibraryMavenOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.cluster.ClusterLibraryMavenOutputReference.Initializer"></a>

```typescript
import { cluster } from '@cdktf/provider-databricks'

new cluster.ClusterLibraryMavenOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryMavenOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryMavenOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.cluster.ClusterLibraryMavenOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryMavenOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryMavenOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryMavenOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryMavenOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryMavenOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryMavenOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryMavenOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryMavenOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryMavenOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryMavenOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryMavenOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryMavenOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryMavenOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryMavenOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryMavenOutputReference.resetExclusions">resetExclusions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryMavenOutputReference.resetRepo">resetRepo</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.cluster.ClusterLibraryMavenOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryMavenOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryMavenOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryMavenOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryMavenOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryMavenOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryMavenOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryMavenOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryMavenOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryMavenOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryMavenOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryMavenOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryMavenOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryMavenOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryMavenOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryMavenOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryMavenOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryMavenOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryMavenOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryMavenOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.cluster.ClusterLibraryMavenOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.cluster.ClusterLibraryMavenOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.cluster.ClusterLibraryMavenOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.cluster.ClusterLibraryMavenOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetExclusions` <a name="resetExclusions" id="@cdktf/provider-databricks.cluster.ClusterLibraryMavenOutputReference.resetExclusions"></a>

```typescript
public resetExclusions(): void
```

##### `resetRepo` <a name="resetRepo" id="@cdktf/provider-databricks.cluster.ClusterLibraryMavenOutputReference.resetRepo"></a>

```typescript
public resetRepo(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryMavenOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryMavenOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryMavenOutputReference.property.coordinatesInput">coordinatesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryMavenOutputReference.property.exclusionsInput">exclusionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryMavenOutputReference.property.repoInput">repoInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryMavenOutputReference.property.coordinates">coordinates</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryMavenOutputReference.property.exclusions">exclusions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryMavenOutputReference.property.repo">repo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryMavenOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryMaven">ClusterLibraryMaven</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.cluster.ClusterLibraryMavenOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.cluster.ClusterLibraryMavenOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `coordinatesInput`<sup>Optional</sup> <a name="coordinatesInput" id="@cdktf/provider-databricks.cluster.ClusterLibraryMavenOutputReference.property.coordinatesInput"></a>

```typescript
public readonly coordinatesInput: string;
```

- *Type:* string

---

##### `exclusionsInput`<sup>Optional</sup> <a name="exclusionsInput" id="@cdktf/provider-databricks.cluster.ClusterLibraryMavenOutputReference.property.exclusionsInput"></a>

```typescript
public readonly exclusionsInput: string[];
```

- *Type:* string[]

---

##### `repoInput`<sup>Optional</sup> <a name="repoInput" id="@cdktf/provider-databricks.cluster.ClusterLibraryMavenOutputReference.property.repoInput"></a>

```typescript
public readonly repoInput: string;
```

- *Type:* string

---

##### `coordinates`<sup>Required</sup> <a name="coordinates" id="@cdktf/provider-databricks.cluster.ClusterLibraryMavenOutputReference.property.coordinates"></a>

```typescript
public readonly coordinates: string;
```

- *Type:* string

---

##### `exclusions`<sup>Required</sup> <a name="exclusions" id="@cdktf/provider-databricks.cluster.ClusterLibraryMavenOutputReference.property.exclusions"></a>

```typescript
public readonly exclusions: string[];
```

- *Type:* string[]

---

##### `repo`<sup>Required</sup> <a name="repo" id="@cdktf/provider-databricks.cluster.ClusterLibraryMavenOutputReference.property.repo"></a>

```typescript
public readonly repo: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.cluster.ClusterLibraryMavenOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ClusterLibraryMaven;
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterLibraryMaven">ClusterLibraryMaven</a>

---


### ClusterLibraryOutputReference <a name="ClusterLibraryOutputReference" id="@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.Initializer"></a>

```typescript
import { cluster } from '@cdktf/provider-databricks'

new cluster.ClusterLibraryOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.putCran">putCran</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.putMaven">putMaven</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.putPypi">putPypi</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.resetCran">resetCran</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.resetEgg">resetEgg</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.resetJar">resetJar</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.resetMaven">resetMaven</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.resetPypi">resetPypi</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.resetWhl">resetWhl</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCran` <a name="putCran" id="@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.putCran"></a>

```typescript
public putCran(value: ClusterLibraryCran): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.putCran.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterLibraryCran">ClusterLibraryCran</a>

---

##### `putMaven` <a name="putMaven" id="@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.putMaven"></a>

```typescript
public putMaven(value: ClusterLibraryMaven): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.putMaven.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterLibraryMaven">ClusterLibraryMaven</a>

---

##### `putPypi` <a name="putPypi" id="@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.putPypi"></a>

```typescript
public putPypi(value: ClusterLibraryPypi): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.putPypi.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterLibraryPypi">ClusterLibraryPypi</a>

---

##### `resetCran` <a name="resetCran" id="@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.resetCran"></a>

```typescript
public resetCran(): void
```

##### `resetEgg` <a name="resetEgg" id="@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.resetEgg"></a>

```typescript
public resetEgg(): void
```

##### `resetJar` <a name="resetJar" id="@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.resetJar"></a>

```typescript
public resetJar(): void
```

##### `resetMaven` <a name="resetMaven" id="@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.resetMaven"></a>

```typescript
public resetMaven(): void
```

##### `resetPypi` <a name="resetPypi" id="@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.resetPypi"></a>

```typescript
public resetPypi(): void
```

##### `resetWhl` <a name="resetWhl" id="@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.resetWhl"></a>

```typescript
public resetWhl(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.property.cran">cran</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryCranOutputReference">ClusterLibraryCranOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.property.maven">maven</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryMavenOutputReference">ClusterLibraryMavenOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.property.pypi">pypi</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryPypiOutputReference">ClusterLibraryPypiOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.property.cranInput">cranInput</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryCran">ClusterLibraryCran</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.property.eggInput">eggInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.property.jarInput">jarInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.property.mavenInput">mavenInput</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryMaven">ClusterLibraryMaven</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.property.pypiInput">pypiInput</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryPypi">ClusterLibraryPypi</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.property.whlInput">whlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.property.egg">egg</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.property.jar">jar</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.property.whl">whl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.cluster.ClusterLibrary">ClusterLibrary</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cran`<sup>Required</sup> <a name="cran" id="@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.property.cran"></a>

```typescript
public readonly cran: ClusterLibraryCranOutputReference;
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterLibraryCranOutputReference">ClusterLibraryCranOutputReference</a>

---

##### `maven`<sup>Required</sup> <a name="maven" id="@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.property.maven"></a>

```typescript
public readonly maven: ClusterLibraryMavenOutputReference;
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterLibraryMavenOutputReference">ClusterLibraryMavenOutputReference</a>

---

##### `pypi`<sup>Required</sup> <a name="pypi" id="@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.property.pypi"></a>

```typescript
public readonly pypi: ClusterLibraryPypiOutputReference;
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterLibraryPypiOutputReference">ClusterLibraryPypiOutputReference</a>

---

##### `cranInput`<sup>Optional</sup> <a name="cranInput" id="@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.property.cranInput"></a>

```typescript
public readonly cranInput: ClusterLibraryCran;
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterLibraryCran">ClusterLibraryCran</a>

---

##### `eggInput`<sup>Optional</sup> <a name="eggInput" id="@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.property.eggInput"></a>

```typescript
public readonly eggInput: string;
```

- *Type:* string

---

##### `jarInput`<sup>Optional</sup> <a name="jarInput" id="@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.property.jarInput"></a>

```typescript
public readonly jarInput: string;
```

- *Type:* string

---

##### `mavenInput`<sup>Optional</sup> <a name="mavenInput" id="@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.property.mavenInput"></a>

```typescript
public readonly mavenInput: ClusterLibraryMaven;
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterLibraryMaven">ClusterLibraryMaven</a>

---

##### `pypiInput`<sup>Optional</sup> <a name="pypiInput" id="@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.property.pypiInput"></a>

```typescript
public readonly pypiInput: ClusterLibraryPypi;
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterLibraryPypi">ClusterLibraryPypi</a>

---

##### `whlInput`<sup>Optional</sup> <a name="whlInput" id="@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.property.whlInput"></a>

```typescript
public readonly whlInput: string;
```

- *Type:* string

---

##### `egg`<sup>Required</sup> <a name="egg" id="@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.property.egg"></a>

```typescript
public readonly egg: string;
```

- *Type:* string

---

##### `jar`<sup>Required</sup> <a name="jar" id="@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.property.jar"></a>

```typescript
public readonly jar: string;
```

- *Type:* string

---

##### `whl`<sup>Required</sup> <a name="whl" id="@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.property.whl"></a>

```typescript
public readonly whl: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.cluster.ClusterLibraryOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ClusterLibrary;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.cluster.ClusterLibrary">ClusterLibrary</a>

---


### ClusterLibraryPypiOutputReference <a name="ClusterLibraryPypiOutputReference" id="@cdktf/provider-databricks.cluster.ClusterLibraryPypiOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.cluster.ClusterLibraryPypiOutputReference.Initializer"></a>

```typescript
import { cluster } from '@cdktf/provider-databricks'

new cluster.ClusterLibraryPypiOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryPypiOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryPypiOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.cluster.ClusterLibraryPypiOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryPypiOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryPypiOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryPypiOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryPypiOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryPypiOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryPypiOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryPypiOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryPypiOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryPypiOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryPypiOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryPypiOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryPypiOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryPypiOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryPypiOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryPypiOutputReference.resetRepo">resetRepo</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.cluster.ClusterLibraryPypiOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryPypiOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryPypiOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryPypiOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryPypiOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryPypiOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryPypiOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryPypiOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryPypiOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryPypiOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryPypiOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryPypiOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryPypiOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryPypiOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryPypiOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryPypiOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryPypiOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryPypiOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryPypiOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.cluster.ClusterLibraryPypiOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.cluster.ClusterLibraryPypiOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.cluster.ClusterLibraryPypiOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.cluster.ClusterLibraryPypiOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.cluster.ClusterLibraryPypiOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRepo` <a name="resetRepo" id="@cdktf/provider-databricks.cluster.ClusterLibraryPypiOutputReference.resetRepo"></a>

```typescript
public resetRepo(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryPypiOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryPypiOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryPypiOutputReference.property.packageInput">packageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryPypiOutputReference.property.repoInput">repoInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryPypiOutputReference.property.package">package</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryPypiOutputReference.property.repo">repo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryPypiOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterLibraryPypi">ClusterLibraryPypi</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.cluster.ClusterLibraryPypiOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.cluster.ClusterLibraryPypiOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `packageInput`<sup>Optional</sup> <a name="packageInput" id="@cdktf/provider-databricks.cluster.ClusterLibraryPypiOutputReference.property.packageInput"></a>

```typescript
public readonly packageInput: string;
```

- *Type:* string

---

##### `repoInput`<sup>Optional</sup> <a name="repoInput" id="@cdktf/provider-databricks.cluster.ClusterLibraryPypiOutputReference.property.repoInput"></a>

```typescript
public readonly repoInput: string;
```

- *Type:* string

---

##### `package`<sup>Required</sup> <a name="package" id="@cdktf/provider-databricks.cluster.ClusterLibraryPypiOutputReference.property.package"></a>

```typescript
public readonly package: string;
```

- *Type:* string

---

##### `repo`<sup>Required</sup> <a name="repo" id="@cdktf/provider-databricks.cluster.ClusterLibraryPypiOutputReference.property.repo"></a>

```typescript
public readonly repo: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.cluster.ClusterLibraryPypiOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ClusterLibraryPypi;
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterLibraryPypi">ClusterLibraryPypi</a>

---


### ClusterTimeoutsOutputReference <a name="ClusterTimeoutsOutputReference" id="@cdktf/provider-databricks.cluster.ClusterTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.cluster.ClusterTimeoutsOutputReference.Initializer"></a>

```typescript
import { cluster } from '@cdktf/provider-databricks'

new cluster.ClusterTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.cluster.ClusterTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.cluster.ClusterTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.cluster.ClusterTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.cluster.ClusterTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.cluster.ClusterTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.cluster.ClusterTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.cluster.ClusterTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.cluster.ClusterTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.cluster.ClusterTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.cluster.ClusterTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.cluster.ClusterTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.cluster.ClusterTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-databricks.cluster.ClusterTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-databricks.cluster.ClusterTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-databricks.cluster.ClusterTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.cluster.ClusterTimeouts">ClusterTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.cluster.ClusterTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.cluster.ClusterTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-databricks.cluster.ClusterTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-databricks.cluster.ClusterTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-databricks.cluster.ClusterTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-databricks.cluster.ClusterTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-databricks.cluster.ClusterTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-databricks.cluster.ClusterTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.cluster.ClusterTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ClusterTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.cluster.ClusterTimeouts">ClusterTimeouts</a>

---


### ClusterWorkloadTypeClientsOutputReference <a name="ClusterWorkloadTypeClientsOutputReference" id="@cdktf/provider-databricks.cluster.ClusterWorkloadTypeClientsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.cluster.ClusterWorkloadTypeClientsOutputReference.Initializer"></a>

```typescript
import { cluster } from '@cdktf/provider-databricks'

new cluster.ClusterWorkloadTypeClientsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterWorkloadTypeClientsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterWorkloadTypeClientsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.cluster.ClusterWorkloadTypeClientsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterWorkloadTypeClientsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterWorkloadTypeClientsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterWorkloadTypeClientsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterWorkloadTypeClientsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterWorkloadTypeClientsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterWorkloadTypeClientsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterWorkloadTypeClientsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterWorkloadTypeClientsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterWorkloadTypeClientsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterWorkloadTypeClientsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterWorkloadTypeClientsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterWorkloadTypeClientsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterWorkloadTypeClientsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterWorkloadTypeClientsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterWorkloadTypeClientsOutputReference.resetJobs">resetJobs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterWorkloadTypeClientsOutputReference.resetNotebooks">resetNotebooks</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.cluster.ClusterWorkloadTypeClientsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterWorkloadTypeClientsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterWorkloadTypeClientsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.cluster.ClusterWorkloadTypeClientsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterWorkloadTypeClientsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterWorkloadTypeClientsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterWorkloadTypeClientsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.cluster.ClusterWorkloadTypeClientsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterWorkloadTypeClientsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.cluster.ClusterWorkloadTypeClientsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterWorkloadTypeClientsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.cluster.ClusterWorkloadTypeClientsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterWorkloadTypeClientsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterWorkloadTypeClientsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterWorkloadTypeClientsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.cluster.ClusterWorkloadTypeClientsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterWorkloadTypeClientsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterWorkloadTypeClientsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterWorkloadTypeClientsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.cluster.ClusterWorkloadTypeClientsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.cluster.ClusterWorkloadTypeClientsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.cluster.ClusterWorkloadTypeClientsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.cluster.ClusterWorkloadTypeClientsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.cluster.ClusterWorkloadTypeClientsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetJobs` <a name="resetJobs" id="@cdktf/provider-databricks.cluster.ClusterWorkloadTypeClientsOutputReference.resetJobs"></a>

```typescript
public resetJobs(): void
```

##### `resetNotebooks` <a name="resetNotebooks" id="@cdktf/provider-databricks.cluster.ClusterWorkloadTypeClientsOutputReference.resetNotebooks"></a>

```typescript
public resetNotebooks(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterWorkloadTypeClientsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterWorkloadTypeClientsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterWorkloadTypeClientsOutputReference.property.jobsInput">jobsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterWorkloadTypeClientsOutputReference.property.notebooksInput">notebooksInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterWorkloadTypeClientsOutputReference.property.jobs">jobs</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterWorkloadTypeClientsOutputReference.property.notebooks">notebooks</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterWorkloadTypeClientsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterWorkloadTypeClients">ClusterWorkloadTypeClients</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.cluster.ClusterWorkloadTypeClientsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.cluster.ClusterWorkloadTypeClientsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `jobsInput`<sup>Optional</sup> <a name="jobsInput" id="@cdktf/provider-databricks.cluster.ClusterWorkloadTypeClientsOutputReference.property.jobsInput"></a>

```typescript
public readonly jobsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `notebooksInput`<sup>Optional</sup> <a name="notebooksInput" id="@cdktf/provider-databricks.cluster.ClusterWorkloadTypeClientsOutputReference.property.notebooksInput"></a>

```typescript
public readonly notebooksInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `jobs`<sup>Required</sup> <a name="jobs" id="@cdktf/provider-databricks.cluster.ClusterWorkloadTypeClientsOutputReference.property.jobs"></a>

```typescript
public readonly jobs: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `notebooks`<sup>Required</sup> <a name="notebooks" id="@cdktf/provider-databricks.cluster.ClusterWorkloadTypeClientsOutputReference.property.notebooks"></a>

```typescript
public readonly notebooks: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.cluster.ClusterWorkloadTypeClientsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ClusterWorkloadTypeClients;
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterWorkloadTypeClients">ClusterWorkloadTypeClients</a>

---


### ClusterWorkloadTypeOutputReference <a name="ClusterWorkloadTypeOutputReference" id="@cdktf/provider-databricks.cluster.ClusterWorkloadTypeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.cluster.ClusterWorkloadTypeOutputReference.Initializer"></a>

```typescript
import { cluster } from '@cdktf/provider-databricks'

new cluster.ClusterWorkloadTypeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterWorkloadTypeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterWorkloadTypeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.cluster.ClusterWorkloadTypeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterWorkloadTypeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterWorkloadTypeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterWorkloadTypeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterWorkloadTypeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterWorkloadTypeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterWorkloadTypeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterWorkloadTypeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterWorkloadTypeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterWorkloadTypeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterWorkloadTypeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterWorkloadTypeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterWorkloadTypeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterWorkloadTypeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterWorkloadTypeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterWorkloadTypeOutputReference.putClients">putClients</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.cluster.ClusterWorkloadTypeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterWorkloadTypeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterWorkloadTypeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.cluster.ClusterWorkloadTypeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterWorkloadTypeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterWorkloadTypeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterWorkloadTypeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.cluster.ClusterWorkloadTypeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterWorkloadTypeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.cluster.ClusterWorkloadTypeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterWorkloadTypeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.cluster.ClusterWorkloadTypeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterWorkloadTypeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterWorkloadTypeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterWorkloadTypeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.cluster.ClusterWorkloadTypeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterWorkloadTypeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.cluster.ClusterWorkloadTypeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cluster.ClusterWorkloadTypeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.cluster.ClusterWorkloadTypeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.cluster.ClusterWorkloadTypeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.cluster.ClusterWorkloadTypeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.cluster.ClusterWorkloadTypeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.cluster.ClusterWorkloadTypeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putClients` <a name="putClients" id="@cdktf/provider-databricks.cluster.ClusterWorkloadTypeOutputReference.putClients"></a>

```typescript
public putClients(value: ClusterWorkloadTypeClients): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.cluster.ClusterWorkloadTypeOutputReference.putClients.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterWorkloadTypeClients">ClusterWorkloadTypeClients</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterWorkloadTypeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterWorkloadTypeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterWorkloadTypeOutputReference.property.clients">clients</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterWorkloadTypeClientsOutputReference">ClusterWorkloadTypeClientsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterWorkloadTypeOutputReference.property.clientsInput">clientsInput</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterWorkloadTypeClients">ClusterWorkloadTypeClients</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cluster.ClusterWorkloadTypeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.cluster.ClusterWorkloadType">ClusterWorkloadType</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.cluster.ClusterWorkloadTypeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.cluster.ClusterWorkloadTypeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `clients`<sup>Required</sup> <a name="clients" id="@cdktf/provider-databricks.cluster.ClusterWorkloadTypeOutputReference.property.clients"></a>

```typescript
public readonly clients: ClusterWorkloadTypeClientsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterWorkloadTypeClientsOutputReference">ClusterWorkloadTypeClientsOutputReference</a>

---

##### `clientsInput`<sup>Optional</sup> <a name="clientsInput" id="@cdktf/provider-databricks.cluster.ClusterWorkloadTypeOutputReference.property.clientsInput"></a>

```typescript
public readonly clientsInput: ClusterWorkloadTypeClients;
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterWorkloadTypeClients">ClusterWorkloadTypeClients</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.cluster.ClusterWorkloadTypeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ClusterWorkloadType;
```

- *Type:* <a href="#@cdktf/provider-databricks.cluster.ClusterWorkloadType">ClusterWorkloadType</a>

---



