# `metastoreDataAccess` Submodule <a name="`metastoreDataAccess` Submodule" id="@cdktf/provider-databricks.metastoreDataAccess"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MetastoreDataAccess <a name="MetastoreDataAccess" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/metastore_data_access databricks_metastore_data_access}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.Initializer"></a>

```typescript
import { metastoreDataAccess } from '@cdktf/provider-databricks'

new metastoreDataAccess.MetastoreDataAccess(scope: Construct, id: string, config: MetastoreDataAccessConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessConfig">MetastoreDataAccessConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessConfig">MetastoreDataAccessConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.putAwsIamRole">putAwsIamRole</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.putAzureManagedIdentity">putAzureManagedIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.putAzureServicePrincipal">putAzureServicePrincipal</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.putDatabricksGcpServiceAccount">putDatabricksGcpServiceAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.putGcpServiceAccountKey">putGcpServiceAccountKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.resetAwsIamRole">resetAwsIamRole</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.resetAzureManagedIdentity">resetAzureManagedIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.resetAzureServicePrincipal">resetAzureServicePrincipal</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.resetComment">resetComment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.resetDatabricksGcpServiceAccount">resetDatabricksGcpServiceAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.resetForceDestroy">resetForceDestroy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.resetForceUpdate">resetForceUpdate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.resetGcpServiceAccountKey">resetGcpServiceAccountKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.resetIsDefault">resetIsDefault</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.resetMetastoreId">resetMetastoreId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.resetOwner">resetOwner</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.resetReadOnly">resetReadOnly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.resetSkipValidation">resetSkipValidation</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAwsIamRole` <a name="putAwsIamRole" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.putAwsIamRole"></a>

```typescript
public putAwsIamRole(value: MetastoreDataAccessAwsIamRole): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.putAwsIamRole.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAwsIamRole">MetastoreDataAccessAwsIamRole</a>

---

##### `putAzureManagedIdentity` <a name="putAzureManagedIdentity" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.putAzureManagedIdentity"></a>

```typescript
public putAzureManagedIdentity(value: MetastoreDataAccessAzureManagedIdentity): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.putAzureManagedIdentity.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAzureManagedIdentity">MetastoreDataAccessAzureManagedIdentity</a>

---

##### `putAzureServicePrincipal` <a name="putAzureServicePrincipal" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.putAzureServicePrincipal"></a>

```typescript
public putAzureServicePrincipal(value: MetastoreDataAccessAzureServicePrincipal): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.putAzureServicePrincipal.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAzureServicePrincipal">MetastoreDataAccessAzureServicePrincipal</a>

---

##### `putDatabricksGcpServiceAccount` <a name="putDatabricksGcpServiceAccount" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.putDatabricksGcpServiceAccount"></a>

```typescript
public putDatabricksGcpServiceAccount(value: MetastoreDataAccessDatabricksGcpServiceAccount): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.putDatabricksGcpServiceAccount.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessDatabricksGcpServiceAccount">MetastoreDataAccessDatabricksGcpServiceAccount</a>

---

##### `putGcpServiceAccountKey` <a name="putGcpServiceAccountKey" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.putGcpServiceAccountKey"></a>

```typescript
public putGcpServiceAccountKey(value: MetastoreDataAccessGcpServiceAccountKey): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.putGcpServiceAccountKey.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessGcpServiceAccountKey">MetastoreDataAccessGcpServiceAccountKey</a>

---

##### `resetAwsIamRole` <a name="resetAwsIamRole" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.resetAwsIamRole"></a>

```typescript
public resetAwsIamRole(): void
```

##### `resetAzureManagedIdentity` <a name="resetAzureManagedIdentity" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.resetAzureManagedIdentity"></a>

```typescript
public resetAzureManagedIdentity(): void
```

##### `resetAzureServicePrincipal` <a name="resetAzureServicePrincipal" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.resetAzureServicePrincipal"></a>

```typescript
public resetAzureServicePrincipal(): void
```

##### `resetComment` <a name="resetComment" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.resetComment"></a>

```typescript
public resetComment(): void
```

##### `resetDatabricksGcpServiceAccount` <a name="resetDatabricksGcpServiceAccount" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.resetDatabricksGcpServiceAccount"></a>

```typescript
public resetDatabricksGcpServiceAccount(): void
```

##### `resetForceDestroy` <a name="resetForceDestroy" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.resetForceDestroy"></a>

```typescript
public resetForceDestroy(): void
```

##### `resetForceUpdate` <a name="resetForceUpdate" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.resetForceUpdate"></a>

```typescript
public resetForceUpdate(): void
```

##### `resetGcpServiceAccountKey` <a name="resetGcpServiceAccountKey" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.resetGcpServiceAccountKey"></a>

```typescript
public resetGcpServiceAccountKey(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIsDefault` <a name="resetIsDefault" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.resetIsDefault"></a>

```typescript
public resetIsDefault(): void
```

##### `resetMetastoreId` <a name="resetMetastoreId" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.resetMetastoreId"></a>

```typescript
public resetMetastoreId(): void
```

##### `resetOwner` <a name="resetOwner" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.resetOwner"></a>

```typescript
public resetOwner(): void
```

##### `resetReadOnly` <a name="resetReadOnly" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.resetReadOnly"></a>

```typescript
public resetReadOnly(): void
```

##### `resetSkipValidation` <a name="resetSkipValidation" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.resetSkipValidation"></a>

```typescript
public resetSkipValidation(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a MetastoreDataAccess resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.isConstruct"></a>

```typescript
import { metastoreDataAccess } from '@cdktf/provider-databricks'

metastoreDataAccess.MetastoreDataAccess.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.isTerraformElement"></a>

```typescript
import { metastoreDataAccess } from '@cdktf/provider-databricks'

metastoreDataAccess.MetastoreDataAccess.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.isTerraformResource"></a>

```typescript
import { metastoreDataAccess } from '@cdktf/provider-databricks'

metastoreDataAccess.MetastoreDataAccess.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.generateConfigForImport"></a>

```typescript
import { metastoreDataAccess } from '@cdktf/provider-databricks'

metastoreDataAccess.MetastoreDataAccess.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a MetastoreDataAccess resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the MetastoreDataAccess to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing MetastoreDataAccess that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/metastore_data_access#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the MetastoreDataAccess to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.property.awsIamRole">awsIamRole</a></code> | <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAwsIamRoleOutputReference">MetastoreDataAccessAwsIamRoleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.property.azureManagedIdentity">azureManagedIdentity</a></code> | <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAzureManagedIdentityOutputReference">MetastoreDataAccessAzureManagedIdentityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.property.azureServicePrincipal">azureServicePrincipal</a></code> | <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAzureServicePrincipalOutputReference">MetastoreDataAccessAzureServicePrincipalOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.property.databricksGcpServiceAccount">databricksGcpServiceAccount</a></code> | <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessDatabricksGcpServiceAccountOutputReference">MetastoreDataAccessDatabricksGcpServiceAccountOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.property.gcpServiceAccountKey">gcpServiceAccountKey</a></code> | <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessGcpServiceAccountKeyOutputReference">MetastoreDataAccessGcpServiceAccountKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.property.awsIamRoleInput">awsIamRoleInput</a></code> | <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAwsIamRole">MetastoreDataAccessAwsIamRole</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.property.azureManagedIdentityInput">azureManagedIdentityInput</a></code> | <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAzureManagedIdentity">MetastoreDataAccessAzureManagedIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.property.azureServicePrincipalInput">azureServicePrincipalInput</a></code> | <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAzureServicePrincipal">MetastoreDataAccessAzureServicePrincipal</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.property.commentInput">commentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.property.databricksGcpServiceAccountInput">databricksGcpServiceAccountInput</a></code> | <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessDatabricksGcpServiceAccount">MetastoreDataAccessDatabricksGcpServiceAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.property.forceDestroyInput">forceDestroyInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.property.forceUpdateInput">forceUpdateInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.property.gcpServiceAccountKeyInput">gcpServiceAccountKeyInput</a></code> | <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessGcpServiceAccountKey">MetastoreDataAccessGcpServiceAccountKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.property.isDefaultInput">isDefaultInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.property.metastoreIdInput">metastoreIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.property.ownerInput">ownerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.property.readOnlyInput">readOnlyInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.property.skipValidationInput">skipValidationInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.property.comment">comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.property.forceDestroy">forceDestroy</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.property.forceUpdate">forceUpdate</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.property.isDefault">isDefault</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.property.metastoreId">metastoreId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.property.owner">owner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.property.readOnly">readOnly</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.property.skipValidation">skipValidation</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `awsIamRole`<sup>Required</sup> <a name="awsIamRole" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.property.awsIamRole"></a>

```typescript
public readonly awsIamRole: MetastoreDataAccessAwsIamRoleOutputReference;
```

- *Type:* <a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAwsIamRoleOutputReference">MetastoreDataAccessAwsIamRoleOutputReference</a>

---

##### `azureManagedIdentity`<sup>Required</sup> <a name="azureManagedIdentity" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.property.azureManagedIdentity"></a>

```typescript
public readonly azureManagedIdentity: MetastoreDataAccessAzureManagedIdentityOutputReference;
```

- *Type:* <a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAzureManagedIdentityOutputReference">MetastoreDataAccessAzureManagedIdentityOutputReference</a>

---

##### `azureServicePrincipal`<sup>Required</sup> <a name="azureServicePrincipal" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.property.azureServicePrincipal"></a>

```typescript
public readonly azureServicePrincipal: MetastoreDataAccessAzureServicePrincipalOutputReference;
```

- *Type:* <a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAzureServicePrincipalOutputReference">MetastoreDataAccessAzureServicePrincipalOutputReference</a>

---

##### `databricksGcpServiceAccount`<sup>Required</sup> <a name="databricksGcpServiceAccount" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.property.databricksGcpServiceAccount"></a>

```typescript
public readonly databricksGcpServiceAccount: MetastoreDataAccessDatabricksGcpServiceAccountOutputReference;
```

- *Type:* <a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessDatabricksGcpServiceAccountOutputReference">MetastoreDataAccessDatabricksGcpServiceAccountOutputReference</a>

---

##### `gcpServiceAccountKey`<sup>Required</sup> <a name="gcpServiceAccountKey" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.property.gcpServiceAccountKey"></a>

```typescript
public readonly gcpServiceAccountKey: MetastoreDataAccessGcpServiceAccountKeyOutputReference;
```

- *Type:* <a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessGcpServiceAccountKeyOutputReference">MetastoreDataAccessGcpServiceAccountKeyOutputReference</a>

---

##### `awsIamRoleInput`<sup>Optional</sup> <a name="awsIamRoleInput" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.property.awsIamRoleInput"></a>

```typescript
public readonly awsIamRoleInput: MetastoreDataAccessAwsIamRole;
```

- *Type:* <a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAwsIamRole">MetastoreDataAccessAwsIamRole</a>

---

##### `azureManagedIdentityInput`<sup>Optional</sup> <a name="azureManagedIdentityInput" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.property.azureManagedIdentityInput"></a>

```typescript
public readonly azureManagedIdentityInput: MetastoreDataAccessAzureManagedIdentity;
```

- *Type:* <a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAzureManagedIdentity">MetastoreDataAccessAzureManagedIdentity</a>

---

##### `azureServicePrincipalInput`<sup>Optional</sup> <a name="azureServicePrincipalInput" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.property.azureServicePrincipalInput"></a>

```typescript
public readonly azureServicePrincipalInput: MetastoreDataAccessAzureServicePrincipal;
```

- *Type:* <a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAzureServicePrincipal">MetastoreDataAccessAzureServicePrincipal</a>

---

##### `commentInput`<sup>Optional</sup> <a name="commentInput" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.property.commentInput"></a>

```typescript
public readonly commentInput: string;
```

- *Type:* string

---

##### `databricksGcpServiceAccountInput`<sup>Optional</sup> <a name="databricksGcpServiceAccountInput" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.property.databricksGcpServiceAccountInput"></a>

```typescript
public readonly databricksGcpServiceAccountInput: MetastoreDataAccessDatabricksGcpServiceAccount;
```

- *Type:* <a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessDatabricksGcpServiceAccount">MetastoreDataAccessDatabricksGcpServiceAccount</a>

---

##### `forceDestroyInput`<sup>Optional</sup> <a name="forceDestroyInput" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.property.forceDestroyInput"></a>

```typescript
public readonly forceDestroyInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `forceUpdateInput`<sup>Optional</sup> <a name="forceUpdateInput" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.property.forceUpdateInput"></a>

```typescript
public readonly forceUpdateInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `gcpServiceAccountKeyInput`<sup>Optional</sup> <a name="gcpServiceAccountKeyInput" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.property.gcpServiceAccountKeyInput"></a>

```typescript
public readonly gcpServiceAccountKeyInput: MetastoreDataAccessGcpServiceAccountKey;
```

- *Type:* <a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessGcpServiceAccountKey">MetastoreDataAccessGcpServiceAccountKey</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `isDefaultInput`<sup>Optional</sup> <a name="isDefaultInput" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.property.isDefaultInput"></a>

```typescript
public readonly isDefaultInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `metastoreIdInput`<sup>Optional</sup> <a name="metastoreIdInput" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.property.metastoreIdInput"></a>

```typescript
public readonly metastoreIdInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `ownerInput`<sup>Optional</sup> <a name="ownerInput" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.property.ownerInput"></a>

```typescript
public readonly ownerInput: string;
```

- *Type:* string

---

##### `readOnlyInput`<sup>Optional</sup> <a name="readOnlyInput" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.property.readOnlyInput"></a>

```typescript
public readonly readOnlyInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `skipValidationInput`<sup>Optional</sup> <a name="skipValidationInput" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.property.skipValidationInput"></a>

```typescript
public readonly skipValidationInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

---

##### `forceDestroy`<sup>Required</sup> <a name="forceDestroy" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.property.forceDestroy"></a>

```typescript
public readonly forceDestroy: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `forceUpdate`<sup>Required</sup> <a name="forceUpdate" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.property.forceUpdate"></a>

```typescript
public readonly forceUpdate: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `isDefault`<sup>Required</sup> <a name="isDefault" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.property.isDefault"></a>

```typescript
public readonly isDefault: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `metastoreId`<sup>Required</sup> <a name="metastoreId" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.property.metastoreId"></a>

```typescript
public readonly metastoreId: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.property.owner"></a>

```typescript
public readonly owner: string;
```

- *Type:* string

---

##### `readOnly`<sup>Required</sup> <a name="readOnly" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.property.readOnly"></a>

```typescript
public readonly readOnly: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `skipValidation`<sup>Required</sup> <a name="skipValidation" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.property.skipValidation"></a>

```typescript
public readonly skipValidation: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### MetastoreDataAccessAwsIamRole <a name="MetastoreDataAccessAwsIamRole" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAwsIamRole"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAwsIamRole.Initializer"></a>

```typescript
import { metastoreDataAccess } from '@cdktf/provider-databricks'

const metastoreDataAccessAwsIamRole: metastoreDataAccess.MetastoreDataAccessAwsIamRole = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAwsIamRole.property.roleArn">roleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/metastore_data_access#role_arn MetastoreDataAccess#role_arn}. |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAwsIamRole.property.externalId">externalId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/metastore_data_access#external_id MetastoreDataAccess#external_id}. |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAwsIamRole.property.unityCatalogIamArn">unityCatalogIamArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/metastore_data_access#unity_catalog_iam_arn MetastoreDataAccess#unity_catalog_iam_arn}. |

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAwsIamRole.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/metastore_data_access#role_arn MetastoreDataAccess#role_arn}.

---

##### `externalId`<sup>Optional</sup> <a name="externalId" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAwsIamRole.property.externalId"></a>

```typescript
public readonly externalId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/metastore_data_access#external_id MetastoreDataAccess#external_id}.

---

##### `unityCatalogIamArn`<sup>Optional</sup> <a name="unityCatalogIamArn" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAwsIamRole.property.unityCatalogIamArn"></a>

```typescript
public readonly unityCatalogIamArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/metastore_data_access#unity_catalog_iam_arn MetastoreDataAccess#unity_catalog_iam_arn}.

---

### MetastoreDataAccessAzureManagedIdentity <a name="MetastoreDataAccessAzureManagedIdentity" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAzureManagedIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAzureManagedIdentity.Initializer"></a>

```typescript
import { metastoreDataAccess } from '@cdktf/provider-databricks'

const metastoreDataAccessAzureManagedIdentity: metastoreDataAccess.MetastoreDataAccessAzureManagedIdentity = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAzureManagedIdentity.property.accessConnectorId">accessConnectorId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/metastore_data_access#access_connector_id MetastoreDataAccess#access_connector_id}. |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAzureManagedIdentity.property.credentialId">credentialId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/metastore_data_access#credential_id MetastoreDataAccess#credential_id}. |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAzureManagedIdentity.property.managedIdentityId">managedIdentityId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/metastore_data_access#managed_identity_id MetastoreDataAccess#managed_identity_id}. |

---

##### `accessConnectorId`<sup>Required</sup> <a name="accessConnectorId" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAzureManagedIdentity.property.accessConnectorId"></a>

```typescript
public readonly accessConnectorId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/metastore_data_access#access_connector_id MetastoreDataAccess#access_connector_id}.

---

##### `credentialId`<sup>Optional</sup> <a name="credentialId" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAzureManagedIdentity.property.credentialId"></a>

```typescript
public readonly credentialId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/metastore_data_access#credential_id MetastoreDataAccess#credential_id}.

---

##### `managedIdentityId`<sup>Optional</sup> <a name="managedIdentityId" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAzureManagedIdentity.property.managedIdentityId"></a>

```typescript
public readonly managedIdentityId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/metastore_data_access#managed_identity_id MetastoreDataAccess#managed_identity_id}.

---

### MetastoreDataAccessAzureServicePrincipal <a name="MetastoreDataAccessAzureServicePrincipal" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAzureServicePrincipal"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAzureServicePrincipal.Initializer"></a>

```typescript
import { metastoreDataAccess } from '@cdktf/provider-databricks'

const metastoreDataAccessAzureServicePrincipal: metastoreDataAccess.MetastoreDataAccessAzureServicePrincipal = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAzureServicePrincipal.property.applicationId">applicationId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/metastore_data_access#application_id MetastoreDataAccess#application_id}. |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAzureServicePrincipal.property.clientSecret">clientSecret</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/metastore_data_access#client_secret MetastoreDataAccess#client_secret}. |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAzureServicePrincipal.property.directoryId">directoryId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/metastore_data_access#directory_id MetastoreDataAccess#directory_id}. |

---

##### `applicationId`<sup>Required</sup> <a name="applicationId" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAzureServicePrincipal.property.applicationId"></a>

```typescript
public readonly applicationId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/metastore_data_access#application_id MetastoreDataAccess#application_id}.

---

##### `clientSecret`<sup>Required</sup> <a name="clientSecret" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAzureServicePrincipal.property.clientSecret"></a>

```typescript
public readonly clientSecret: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/metastore_data_access#client_secret MetastoreDataAccess#client_secret}.

---

##### `directoryId`<sup>Required</sup> <a name="directoryId" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAzureServicePrincipal.property.directoryId"></a>

```typescript
public readonly directoryId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/metastore_data_access#directory_id MetastoreDataAccess#directory_id}.

---

### MetastoreDataAccessConfig <a name="MetastoreDataAccessConfig" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessConfig.Initializer"></a>

```typescript
import { metastoreDataAccess } from '@cdktf/provider-databricks'

const metastoreDataAccessConfig: metastoreDataAccess.MetastoreDataAccessConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/metastore_data_access#name MetastoreDataAccess#name}. |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessConfig.property.awsIamRole">awsIamRole</a></code> | <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAwsIamRole">MetastoreDataAccessAwsIamRole</a></code> | aws_iam_role block. |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessConfig.property.azureManagedIdentity">azureManagedIdentity</a></code> | <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAzureManagedIdentity">MetastoreDataAccessAzureManagedIdentity</a></code> | azure_managed_identity block. |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessConfig.property.azureServicePrincipal">azureServicePrincipal</a></code> | <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAzureServicePrincipal">MetastoreDataAccessAzureServicePrincipal</a></code> | azure_service_principal block. |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessConfig.property.comment">comment</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/metastore_data_access#comment MetastoreDataAccess#comment}. |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessConfig.property.databricksGcpServiceAccount">databricksGcpServiceAccount</a></code> | <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessDatabricksGcpServiceAccount">MetastoreDataAccessDatabricksGcpServiceAccount</a></code> | databricks_gcp_service_account block. |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessConfig.property.forceDestroy">forceDestroy</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/metastore_data_access#force_destroy MetastoreDataAccess#force_destroy}. |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessConfig.property.forceUpdate">forceUpdate</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/metastore_data_access#force_update MetastoreDataAccess#force_update}. |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessConfig.property.gcpServiceAccountKey">gcpServiceAccountKey</a></code> | <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessGcpServiceAccountKey">MetastoreDataAccessGcpServiceAccountKey</a></code> | gcp_service_account_key block. |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/metastore_data_access#id MetastoreDataAccess#id}. |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessConfig.property.isDefault">isDefault</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/metastore_data_access#is_default MetastoreDataAccess#is_default}. |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessConfig.property.metastoreId">metastoreId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/metastore_data_access#metastore_id MetastoreDataAccess#metastore_id}. |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessConfig.property.owner">owner</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/metastore_data_access#owner MetastoreDataAccess#owner}. |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessConfig.property.readOnly">readOnly</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/metastore_data_access#read_only MetastoreDataAccess#read_only}. |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessConfig.property.skipValidation">skipValidation</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/metastore_data_access#skip_validation MetastoreDataAccess#skip_validation}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/metastore_data_access#name MetastoreDataAccess#name}.

---

##### `awsIamRole`<sup>Optional</sup> <a name="awsIamRole" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessConfig.property.awsIamRole"></a>

```typescript
public readonly awsIamRole: MetastoreDataAccessAwsIamRole;
```

- *Type:* <a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAwsIamRole">MetastoreDataAccessAwsIamRole</a>

aws_iam_role block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/metastore_data_access#aws_iam_role MetastoreDataAccess#aws_iam_role}

---

##### `azureManagedIdentity`<sup>Optional</sup> <a name="azureManagedIdentity" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessConfig.property.azureManagedIdentity"></a>

```typescript
public readonly azureManagedIdentity: MetastoreDataAccessAzureManagedIdentity;
```

- *Type:* <a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAzureManagedIdentity">MetastoreDataAccessAzureManagedIdentity</a>

azure_managed_identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/metastore_data_access#azure_managed_identity MetastoreDataAccess#azure_managed_identity}

---

##### `azureServicePrincipal`<sup>Optional</sup> <a name="azureServicePrincipal" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessConfig.property.azureServicePrincipal"></a>

```typescript
public readonly azureServicePrincipal: MetastoreDataAccessAzureServicePrincipal;
```

- *Type:* <a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAzureServicePrincipal">MetastoreDataAccessAzureServicePrincipal</a>

azure_service_principal block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/metastore_data_access#azure_service_principal MetastoreDataAccess#azure_service_principal}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessConfig.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/metastore_data_access#comment MetastoreDataAccess#comment}.

---

##### `databricksGcpServiceAccount`<sup>Optional</sup> <a name="databricksGcpServiceAccount" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessConfig.property.databricksGcpServiceAccount"></a>

```typescript
public readonly databricksGcpServiceAccount: MetastoreDataAccessDatabricksGcpServiceAccount;
```

- *Type:* <a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessDatabricksGcpServiceAccount">MetastoreDataAccessDatabricksGcpServiceAccount</a>

databricks_gcp_service_account block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/metastore_data_access#databricks_gcp_service_account MetastoreDataAccess#databricks_gcp_service_account}

---

##### `forceDestroy`<sup>Optional</sup> <a name="forceDestroy" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessConfig.property.forceDestroy"></a>

```typescript
public readonly forceDestroy: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/metastore_data_access#force_destroy MetastoreDataAccess#force_destroy}.

---

##### `forceUpdate`<sup>Optional</sup> <a name="forceUpdate" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessConfig.property.forceUpdate"></a>

```typescript
public readonly forceUpdate: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/metastore_data_access#force_update MetastoreDataAccess#force_update}.

---

##### `gcpServiceAccountKey`<sup>Optional</sup> <a name="gcpServiceAccountKey" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessConfig.property.gcpServiceAccountKey"></a>

```typescript
public readonly gcpServiceAccountKey: MetastoreDataAccessGcpServiceAccountKey;
```

- *Type:* <a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessGcpServiceAccountKey">MetastoreDataAccessGcpServiceAccountKey</a>

gcp_service_account_key block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/metastore_data_access#gcp_service_account_key MetastoreDataAccess#gcp_service_account_key}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/metastore_data_access#id MetastoreDataAccess#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `isDefault`<sup>Optional</sup> <a name="isDefault" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessConfig.property.isDefault"></a>

```typescript
public readonly isDefault: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/metastore_data_access#is_default MetastoreDataAccess#is_default}.

---

##### `metastoreId`<sup>Optional</sup> <a name="metastoreId" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessConfig.property.metastoreId"></a>

```typescript
public readonly metastoreId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/metastore_data_access#metastore_id MetastoreDataAccess#metastore_id}.

---

##### `owner`<sup>Optional</sup> <a name="owner" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessConfig.property.owner"></a>

```typescript
public readonly owner: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/metastore_data_access#owner MetastoreDataAccess#owner}.

---

##### `readOnly`<sup>Optional</sup> <a name="readOnly" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessConfig.property.readOnly"></a>

```typescript
public readonly readOnly: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/metastore_data_access#read_only MetastoreDataAccess#read_only}.

---

##### `skipValidation`<sup>Optional</sup> <a name="skipValidation" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessConfig.property.skipValidation"></a>

```typescript
public readonly skipValidation: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/metastore_data_access#skip_validation MetastoreDataAccess#skip_validation}.

---

### MetastoreDataAccessDatabricksGcpServiceAccount <a name="MetastoreDataAccessDatabricksGcpServiceAccount" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessDatabricksGcpServiceAccount"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessDatabricksGcpServiceAccount.Initializer"></a>

```typescript
import { metastoreDataAccess } from '@cdktf/provider-databricks'

const metastoreDataAccessDatabricksGcpServiceAccount: metastoreDataAccess.MetastoreDataAccessDatabricksGcpServiceAccount = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessDatabricksGcpServiceAccount.property.credentialId">credentialId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/metastore_data_access#credential_id MetastoreDataAccess#credential_id}. |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessDatabricksGcpServiceAccount.property.email">email</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/metastore_data_access#email MetastoreDataAccess#email}. |

---

##### `credentialId`<sup>Optional</sup> <a name="credentialId" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessDatabricksGcpServiceAccount.property.credentialId"></a>

```typescript
public readonly credentialId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/metastore_data_access#credential_id MetastoreDataAccess#credential_id}.

---

##### `email`<sup>Optional</sup> <a name="email" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessDatabricksGcpServiceAccount.property.email"></a>

```typescript
public readonly email: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/metastore_data_access#email MetastoreDataAccess#email}.

---

### MetastoreDataAccessGcpServiceAccountKey <a name="MetastoreDataAccessGcpServiceAccountKey" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessGcpServiceAccountKey"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessGcpServiceAccountKey.Initializer"></a>

```typescript
import { metastoreDataAccess } from '@cdktf/provider-databricks'

const metastoreDataAccessGcpServiceAccountKey: metastoreDataAccess.MetastoreDataAccessGcpServiceAccountKey = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessGcpServiceAccountKey.property.email">email</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/metastore_data_access#email MetastoreDataAccess#email}. |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessGcpServiceAccountKey.property.privateKey">privateKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/metastore_data_access#private_key MetastoreDataAccess#private_key}. |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessGcpServiceAccountKey.property.privateKeyId">privateKeyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/metastore_data_access#private_key_id MetastoreDataAccess#private_key_id}. |

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessGcpServiceAccountKey.property.email"></a>

```typescript
public readonly email: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/metastore_data_access#email MetastoreDataAccess#email}.

---

##### `privateKey`<sup>Required</sup> <a name="privateKey" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessGcpServiceAccountKey.property.privateKey"></a>

```typescript
public readonly privateKey: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/metastore_data_access#private_key MetastoreDataAccess#private_key}.

---

##### `privateKeyId`<sup>Required</sup> <a name="privateKeyId" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessGcpServiceAccountKey.property.privateKeyId"></a>

```typescript
public readonly privateKeyId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/metastore_data_access#private_key_id MetastoreDataAccess#private_key_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### MetastoreDataAccessAwsIamRoleOutputReference <a name="MetastoreDataAccessAwsIamRoleOutputReference" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAwsIamRoleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAwsIamRoleOutputReference.Initializer"></a>

```typescript
import { metastoreDataAccess } from '@cdktf/provider-databricks'

new metastoreDataAccess.MetastoreDataAccessAwsIamRoleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAwsIamRoleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAwsIamRoleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAwsIamRoleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAwsIamRoleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAwsIamRoleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAwsIamRoleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAwsIamRoleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAwsIamRoleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAwsIamRoleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAwsIamRoleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAwsIamRoleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAwsIamRoleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAwsIamRoleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAwsIamRoleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAwsIamRoleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAwsIamRoleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAwsIamRoleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAwsIamRoleOutputReference.resetExternalId">resetExternalId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAwsIamRoleOutputReference.resetUnityCatalogIamArn">resetUnityCatalogIamArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAwsIamRoleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAwsIamRoleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAwsIamRoleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAwsIamRoleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAwsIamRoleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAwsIamRoleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAwsIamRoleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAwsIamRoleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAwsIamRoleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAwsIamRoleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAwsIamRoleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAwsIamRoleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAwsIamRoleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAwsIamRoleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAwsIamRoleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAwsIamRoleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAwsIamRoleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAwsIamRoleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAwsIamRoleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAwsIamRoleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAwsIamRoleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAwsIamRoleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAwsIamRoleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAwsIamRoleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetExternalId` <a name="resetExternalId" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAwsIamRoleOutputReference.resetExternalId"></a>

```typescript
public resetExternalId(): void
```

##### `resetUnityCatalogIamArn` <a name="resetUnityCatalogIamArn" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAwsIamRoleOutputReference.resetUnityCatalogIamArn"></a>

```typescript
public resetUnityCatalogIamArn(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAwsIamRoleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAwsIamRoleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAwsIamRoleOutputReference.property.externalIdInput">externalIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAwsIamRoleOutputReference.property.roleArnInput">roleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAwsIamRoleOutputReference.property.unityCatalogIamArnInput">unityCatalogIamArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAwsIamRoleOutputReference.property.externalId">externalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAwsIamRoleOutputReference.property.roleArn">roleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAwsIamRoleOutputReference.property.unityCatalogIamArn">unityCatalogIamArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAwsIamRoleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAwsIamRole">MetastoreDataAccessAwsIamRole</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAwsIamRoleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAwsIamRoleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `externalIdInput`<sup>Optional</sup> <a name="externalIdInput" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAwsIamRoleOutputReference.property.externalIdInput"></a>

```typescript
public readonly externalIdInput: string;
```

- *Type:* string

---

##### `roleArnInput`<sup>Optional</sup> <a name="roleArnInput" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAwsIamRoleOutputReference.property.roleArnInput"></a>

```typescript
public readonly roleArnInput: string;
```

- *Type:* string

---

##### `unityCatalogIamArnInput`<sup>Optional</sup> <a name="unityCatalogIamArnInput" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAwsIamRoleOutputReference.property.unityCatalogIamArnInput"></a>

```typescript
public readonly unityCatalogIamArnInput: string;
```

- *Type:* string

---

##### `externalId`<sup>Required</sup> <a name="externalId" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAwsIamRoleOutputReference.property.externalId"></a>

```typescript
public readonly externalId: string;
```

- *Type:* string

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAwsIamRoleOutputReference.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

---

##### `unityCatalogIamArn`<sup>Required</sup> <a name="unityCatalogIamArn" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAwsIamRoleOutputReference.property.unityCatalogIamArn"></a>

```typescript
public readonly unityCatalogIamArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAwsIamRoleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: MetastoreDataAccessAwsIamRole;
```

- *Type:* <a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAwsIamRole">MetastoreDataAccessAwsIamRole</a>

---


### MetastoreDataAccessAzureManagedIdentityOutputReference <a name="MetastoreDataAccessAzureManagedIdentityOutputReference" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAzureManagedIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAzureManagedIdentityOutputReference.Initializer"></a>

```typescript
import { metastoreDataAccess } from '@cdktf/provider-databricks'

new metastoreDataAccess.MetastoreDataAccessAzureManagedIdentityOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAzureManagedIdentityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAzureManagedIdentityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAzureManagedIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAzureManagedIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAzureManagedIdentityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAzureManagedIdentityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAzureManagedIdentityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAzureManagedIdentityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAzureManagedIdentityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAzureManagedIdentityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAzureManagedIdentityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAzureManagedIdentityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAzureManagedIdentityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAzureManagedIdentityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAzureManagedIdentityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAzureManagedIdentityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAzureManagedIdentityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAzureManagedIdentityOutputReference.resetCredentialId">resetCredentialId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAzureManagedIdentityOutputReference.resetManagedIdentityId">resetManagedIdentityId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAzureManagedIdentityOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAzureManagedIdentityOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAzureManagedIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAzureManagedIdentityOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAzureManagedIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAzureManagedIdentityOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAzureManagedIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAzureManagedIdentityOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAzureManagedIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAzureManagedIdentityOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAzureManagedIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAzureManagedIdentityOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAzureManagedIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAzureManagedIdentityOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAzureManagedIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAzureManagedIdentityOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAzureManagedIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAzureManagedIdentityOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAzureManagedIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAzureManagedIdentityOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAzureManagedIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAzureManagedIdentityOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAzureManagedIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAzureManagedIdentityOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCredentialId` <a name="resetCredentialId" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAzureManagedIdentityOutputReference.resetCredentialId"></a>

```typescript
public resetCredentialId(): void
```

##### `resetManagedIdentityId` <a name="resetManagedIdentityId" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAzureManagedIdentityOutputReference.resetManagedIdentityId"></a>

```typescript
public resetManagedIdentityId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAzureManagedIdentityOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAzureManagedIdentityOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAzureManagedIdentityOutputReference.property.accessConnectorIdInput">accessConnectorIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAzureManagedIdentityOutputReference.property.credentialIdInput">credentialIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAzureManagedIdentityOutputReference.property.managedIdentityIdInput">managedIdentityIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAzureManagedIdentityOutputReference.property.accessConnectorId">accessConnectorId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAzureManagedIdentityOutputReference.property.credentialId">credentialId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAzureManagedIdentityOutputReference.property.managedIdentityId">managedIdentityId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAzureManagedIdentityOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAzureManagedIdentity">MetastoreDataAccessAzureManagedIdentity</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAzureManagedIdentityOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAzureManagedIdentityOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `accessConnectorIdInput`<sup>Optional</sup> <a name="accessConnectorIdInput" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAzureManagedIdentityOutputReference.property.accessConnectorIdInput"></a>

```typescript
public readonly accessConnectorIdInput: string;
```

- *Type:* string

---

##### `credentialIdInput`<sup>Optional</sup> <a name="credentialIdInput" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAzureManagedIdentityOutputReference.property.credentialIdInput"></a>

```typescript
public readonly credentialIdInput: string;
```

- *Type:* string

---

##### `managedIdentityIdInput`<sup>Optional</sup> <a name="managedIdentityIdInput" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAzureManagedIdentityOutputReference.property.managedIdentityIdInput"></a>

```typescript
public readonly managedIdentityIdInput: string;
```

- *Type:* string

---

##### `accessConnectorId`<sup>Required</sup> <a name="accessConnectorId" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAzureManagedIdentityOutputReference.property.accessConnectorId"></a>

```typescript
public readonly accessConnectorId: string;
```

- *Type:* string

---

##### `credentialId`<sup>Required</sup> <a name="credentialId" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAzureManagedIdentityOutputReference.property.credentialId"></a>

```typescript
public readonly credentialId: string;
```

- *Type:* string

---

##### `managedIdentityId`<sup>Required</sup> <a name="managedIdentityId" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAzureManagedIdentityOutputReference.property.managedIdentityId"></a>

```typescript
public readonly managedIdentityId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAzureManagedIdentityOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: MetastoreDataAccessAzureManagedIdentity;
```

- *Type:* <a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAzureManagedIdentity">MetastoreDataAccessAzureManagedIdentity</a>

---


### MetastoreDataAccessAzureServicePrincipalOutputReference <a name="MetastoreDataAccessAzureServicePrincipalOutputReference" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAzureServicePrincipalOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAzureServicePrincipalOutputReference.Initializer"></a>

```typescript
import { metastoreDataAccess } from '@cdktf/provider-databricks'

new metastoreDataAccess.MetastoreDataAccessAzureServicePrincipalOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAzureServicePrincipalOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAzureServicePrincipalOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAzureServicePrincipalOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAzureServicePrincipalOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAzureServicePrincipalOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAzureServicePrincipalOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAzureServicePrincipalOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAzureServicePrincipalOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAzureServicePrincipalOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAzureServicePrincipalOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAzureServicePrincipalOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAzureServicePrincipalOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAzureServicePrincipalOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAzureServicePrincipalOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAzureServicePrincipalOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAzureServicePrincipalOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAzureServicePrincipalOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAzureServicePrincipalOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAzureServicePrincipalOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAzureServicePrincipalOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAzureServicePrincipalOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAzureServicePrincipalOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAzureServicePrincipalOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAzureServicePrincipalOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAzureServicePrincipalOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAzureServicePrincipalOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAzureServicePrincipalOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAzureServicePrincipalOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAzureServicePrincipalOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAzureServicePrincipalOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAzureServicePrincipalOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAzureServicePrincipalOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAzureServicePrincipalOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAzureServicePrincipalOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAzureServicePrincipalOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAzureServicePrincipalOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAzureServicePrincipalOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAzureServicePrincipalOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAzureServicePrincipalOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAzureServicePrincipalOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAzureServicePrincipalOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAzureServicePrincipalOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAzureServicePrincipalOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAzureServicePrincipalOutputReference.property.applicationIdInput">applicationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAzureServicePrincipalOutputReference.property.clientSecretInput">clientSecretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAzureServicePrincipalOutputReference.property.directoryIdInput">directoryIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAzureServicePrincipalOutputReference.property.applicationId">applicationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAzureServicePrincipalOutputReference.property.clientSecret">clientSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAzureServicePrincipalOutputReference.property.directoryId">directoryId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAzureServicePrincipalOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAzureServicePrincipal">MetastoreDataAccessAzureServicePrincipal</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAzureServicePrincipalOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAzureServicePrincipalOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `applicationIdInput`<sup>Optional</sup> <a name="applicationIdInput" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAzureServicePrincipalOutputReference.property.applicationIdInput"></a>

```typescript
public readonly applicationIdInput: string;
```

- *Type:* string

---

##### `clientSecretInput`<sup>Optional</sup> <a name="clientSecretInput" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAzureServicePrincipalOutputReference.property.clientSecretInput"></a>

```typescript
public readonly clientSecretInput: string;
```

- *Type:* string

---

##### `directoryIdInput`<sup>Optional</sup> <a name="directoryIdInput" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAzureServicePrincipalOutputReference.property.directoryIdInput"></a>

```typescript
public readonly directoryIdInput: string;
```

- *Type:* string

---

##### `applicationId`<sup>Required</sup> <a name="applicationId" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAzureServicePrincipalOutputReference.property.applicationId"></a>

```typescript
public readonly applicationId: string;
```

- *Type:* string

---

##### `clientSecret`<sup>Required</sup> <a name="clientSecret" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAzureServicePrincipalOutputReference.property.clientSecret"></a>

```typescript
public readonly clientSecret: string;
```

- *Type:* string

---

##### `directoryId`<sup>Required</sup> <a name="directoryId" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAzureServicePrincipalOutputReference.property.directoryId"></a>

```typescript
public readonly directoryId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAzureServicePrincipalOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: MetastoreDataAccessAzureServicePrincipal;
```

- *Type:* <a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAzureServicePrincipal">MetastoreDataAccessAzureServicePrincipal</a>

---


### MetastoreDataAccessDatabricksGcpServiceAccountOutputReference <a name="MetastoreDataAccessDatabricksGcpServiceAccountOutputReference" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessDatabricksGcpServiceAccountOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessDatabricksGcpServiceAccountOutputReference.Initializer"></a>

```typescript
import { metastoreDataAccess } from '@cdktf/provider-databricks'

new metastoreDataAccess.MetastoreDataAccessDatabricksGcpServiceAccountOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessDatabricksGcpServiceAccountOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessDatabricksGcpServiceAccountOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessDatabricksGcpServiceAccountOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessDatabricksGcpServiceAccountOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessDatabricksGcpServiceAccountOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessDatabricksGcpServiceAccountOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessDatabricksGcpServiceAccountOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessDatabricksGcpServiceAccountOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessDatabricksGcpServiceAccountOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessDatabricksGcpServiceAccountOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessDatabricksGcpServiceAccountOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessDatabricksGcpServiceAccountOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessDatabricksGcpServiceAccountOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessDatabricksGcpServiceAccountOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessDatabricksGcpServiceAccountOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessDatabricksGcpServiceAccountOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessDatabricksGcpServiceAccountOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessDatabricksGcpServiceAccountOutputReference.resetCredentialId">resetCredentialId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessDatabricksGcpServiceAccountOutputReference.resetEmail">resetEmail</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessDatabricksGcpServiceAccountOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessDatabricksGcpServiceAccountOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessDatabricksGcpServiceAccountOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessDatabricksGcpServiceAccountOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessDatabricksGcpServiceAccountOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessDatabricksGcpServiceAccountOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessDatabricksGcpServiceAccountOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessDatabricksGcpServiceAccountOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessDatabricksGcpServiceAccountOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessDatabricksGcpServiceAccountOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessDatabricksGcpServiceAccountOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessDatabricksGcpServiceAccountOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessDatabricksGcpServiceAccountOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessDatabricksGcpServiceAccountOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessDatabricksGcpServiceAccountOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessDatabricksGcpServiceAccountOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessDatabricksGcpServiceAccountOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessDatabricksGcpServiceAccountOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessDatabricksGcpServiceAccountOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessDatabricksGcpServiceAccountOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessDatabricksGcpServiceAccountOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessDatabricksGcpServiceAccountOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessDatabricksGcpServiceAccountOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessDatabricksGcpServiceAccountOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCredentialId` <a name="resetCredentialId" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessDatabricksGcpServiceAccountOutputReference.resetCredentialId"></a>

```typescript
public resetCredentialId(): void
```

##### `resetEmail` <a name="resetEmail" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessDatabricksGcpServiceAccountOutputReference.resetEmail"></a>

```typescript
public resetEmail(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessDatabricksGcpServiceAccountOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessDatabricksGcpServiceAccountOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessDatabricksGcpServiceAccountOutputReference.property.credentialIdInput">credentialIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessDatabricksGcpServiceAccountOutputReference.property.emailInput">emailInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessDatabricksGcpServiceAccountOutputReference.property.credentialId">credentialId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessDatabricksGcpServiceAccountOutputReference.property.email">email</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessDatabricksGcpServiceAccountOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessDatabricksGcpServiceAccount">MetastoreDataAccessDatabricksGcpServiceAccount</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessDatabricksGcpServiceAccountOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessDatabricksGcpServiceAccountOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `credentialIdInput`<sup>Optional</sup> <a name="credentialIdInput" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessDatabricksGcpServiceAccountOutputReference.property.credentialIdInput"></a>

```typescript
public readonly credentialIdInput: string;
```

- *Type:* string

---

##### `emailInput`<sup>Optional</sup> <a name="emailInput" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessDatabricksGcpServiceAccountOutputReference.property.emailInput"></a>

```typescript
public readonly emailInput: string;
```

- *Type:* string

---

##### `credentialId`<sup>Required</sup> <a name="credentialId" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessDatabricksGcpServiceAccountOutputReference.property.credentialId"></a>

```typescript
public readonly credentialId: string;
```

- *Type:* string

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessDatabricksGcpServiceAccountOutputReference.property.email"></a>

```typescript
public readonly email: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessDatabricksGcpServiceAccountOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: MetastoreDataAccessDatabricksGcpServiceAccount;
```

- *Type:* <a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessDatabricksGcpServiceAccount">MetastoreDataAccessDatabricksGcpServiceAccount</a>

---


### MetastoreDataAccessGcpServiceAccountKeyOutputReference <a name="MetastoreDataAccessGcpServiceAccountKeyOutputReference" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessGcpServiceAccountKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessGcpServiceAccountKeyOutputReference.Initializer"></a>

```typescript
import { metastoreDataAccess } from '@cdktf/provider-databricks'

new metastoreDataAccess.MetastoreDataAccessGcpServiceAccountKeyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessGcpServiceAccountKeyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessGcpServiceAccountKeyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessGcpServiceAccountKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessGcpServiceAccountKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessGcpServiceAccountKeyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessGcpServiceAccountKeyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessGcpServiceAccountKeyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessGcpServiceAccountKeyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessGcpServiceAccountKeyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessGcpServiceAccountKeyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessGcpServiceAccountKeyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessGcpServiceAccountKeyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessGcpServiceAccountKeyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessGcpServiceAccountKeyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessGcpServiceAccountKeyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessGcpServiceAccountKeyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessGcpServiceAccountKeyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessGcpServiceAccountKeyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessGcpServiceAccountKeyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessGcpServiceAccountKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessGcpServiceAccountKeyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessGcpServiceAccountKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessGcpServiceAccountKeyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessGcpServiceAccountKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessGcpServiceAccountKeyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessGcpServiceAccountKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessGcpServiceAccountKeyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessGcpServiceAccountKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessGcpServiceAccountKeyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessGcpServiceAccountKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessGcpServiceAccountKeyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessGcpServiceAccountKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessGcpServiceAccountKeyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessGcpServiceAccountKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessGcpServiceAccountKeyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessGcpServiceAccountKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessGcpServiceAccountKeyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessGcpServiceAccountKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessGcpServiceAccountKeyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessGcpServiceAccountKeyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessGcpServiceAccountKeyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessGcpServiceAccountKeyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessGcpServiceAccountKeyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessGcpServiceAccountKeyOutputReference.property.emailInput">emailInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessGcpServiceAccountKeyOutputReference.property.privateKeyIdInput">privateKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessGcpServiceAccountKeyOutputReference.property.privateKeyInput">privateKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessGcpServiceAccountKeyOutputReference.property.email">email</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessGcpServiceAccountKeyOutputReference.property.privateKey">privateKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessGcpServiceAccountKeyOutputReference.property.privateKeyId">privateKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessGcpServiceAccountKeyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessGcpServiceAccountKey">MetastoreDataAccessGcpServiceAccountKey</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessGcpServiceAccountKeyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessGcpServiceAccountKeyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `emailInput`<sup>Optional</sup> <a name="emailInput" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessGcpServiceAccountKeyOutputReference.property.emailInput"></a>

```typescript
public readonly emailInput: string;
```

- *Type:* string

---

##### `privateKeyIdInput`<sup>Optional</sup> <a name="privateKeyIdInput" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessGcpServiceAccountKeyOutputReference.property.privateKeyIdInput"></a>

```typescript
public readonly privateKeyIdInput: string;
```

- *Type:* string

---

##### `privateKeyInput`<sup>Optional</sup> <a name="privateKeyInput" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessGcpServiceAccountKeyOutputReference.property.privateKeyInput"></a>

```typescript
public readonly privateKeyInput: string;
```

- *Type:* string

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessGcpServiceAccountKeyOutputReference.property.email"></a>

```typescript
public readonly email: string;
```

- *Type:* string

---

##### `privateKey`<sup>Required</sup> <a name="privateKey" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessGcpServiceAccountKeyOutputReference.property.privateKey"></a>

```typescript
public readonly privateKey: string;
```

- *Type:* string

---

##### `privateKeyId`<sup>Required</sup> <a name="privateKeyId" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessGcpServiceAccountKeyOutputReference.property.privateKeyId"></a>

```typescript
public readonly privateKeyId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessGcpServiceAccountKeyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: MetastoreDataAccessGcpServiceAccountKey;
```

- *Type:* <a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessGcpServiceAccountKey">MetastoreDataAccessGcpServiceAccountKey</a>

---



