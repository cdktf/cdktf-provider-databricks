# `workspaceSettingV2` Submodule <a name="`workspaceSettingV2` Submodule" id="@cdktf/provider-databricks.workspaceSettingV2"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WorkspaceSettingV2 <a name="WorkspaceSettingV2" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/workspace_setting_v2 databricks_workspace_setting_v2}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.Initializer"></a>

```typescript
import { workspaceSettingV2 } from '@cdktf/provider-databricks'

new workspaceSettingV2.WorkspaceSettingV2(scope: Construct, id: string, config?: WorkspaceSettingV2Config)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2Config">WorkspaceSettingV2Config</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2Config">WorkspaceSettingV2Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.putAibiDashboardEmbeddingAccessPolicy">putAibiDashboardEmbeddingAccessPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.putAibiDashboardEmbeddingApprovedDomains">putAibiDashboardEmbeddingApprovedDomains</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.putAutomaticClusterUpdateWorkspace">putAutomaticClusterUpdateWorkspace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.putBooleanVal">putBooleanVal</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.putDefaultDataSecurityMode">putDefaultDataSecurityMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.putEffectiveAibiDashboardEmbeddingAccessPolicy">putEffectiveAibiDashboardEmbeddingAccessPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.putEffectiveAibiDashboardEmbeddingApprovedDomains">putEffectiveAibiDashboardEmbeddingApprovedDomains</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.putEffectiveAutomaticClusterUpdateWorkspace">putEffectiveAutomaticClusterUpdateWorkspace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.putEffectiveDefaultDataSecurityMode">putEffectiveDefaultDataSecurityMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.putEffectivePersonalCompute">putEffectivePersonalCompute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.putEffectiveRestrictWorkspaceAdmins">putEffectiveRestrictWorkspaceAdmins</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.putIntegerVal">putIntegerVal</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.putPersonalCompute">putPersonalCompute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.putRestrictWorkspaceAdmins">putRestrictWorkspaceAdmins</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.putStringVal">putStringVal</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.resetAibiDashboardEmbeddingAccessPolicy">resetAibiDashboardEmbeddingAccessPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.resetAibiDashboardEmbeddingApprovedDomains">resetAibiDashboardEmbeddingApprovedDomains</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.resetAutomaticClusterUpdateWorkspace">resetAutomaticClusterUpdateWorkspace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.resetBooleanVal">resetBooleanVal</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.resetDefaultDataSecurityMode">resetDefaultDataSecurityMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.resetEffectiveAibiDashboardEmbeddingAccessPolicy">resetEffectiveAibiDashboardEmbeddingAccessPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.resetEffectiveAibiDashboardEmbeddingApprovedDomains">resetEffectiveAibiDashboardEmbeddingApprovedDomains</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.resetEffectiveAutomaticClusterUpdateWorkspace">resetEffectiveAutomaticClusterUpdateWorkspace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.resetEffectiveDefaultDataSecurityMode">resetEffectiveDefaultDataSecurityMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.resetEffectivePersonalCompute">resetEffectivePersonalCompute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.resetEffectiveRestrictWorkspaceAdmins">resetEffectiveRestrictWorkspaceAdmins</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.resetIntegerVal">resetIntegerVal</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.resetPersonalCompute">resetPersonalCompute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.resetRestrictWorkspaceAdmins">resetRestrictWorkspaceAdmins</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.resetStringVal">resetStringVal</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.resetWorkspaceId">resetWorkspaceId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAibiDashboardEmbeddingAccessPolicy` <a name="putAibiDashboardEmbeddingAccessPolicy" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.putAibiDashboardEmbeddingAccessPolicy"></a>

```typescript
public putAibiDashboardEmbeddingAccessPolicy(value: WorkspaceSettingV2AibiDashboardEmbeddingAccessPolicy): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.putAibiDashboardEmbeddingAccessPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingAccessPolicy">WorkspaceSettingV2AibiDashboardEmbeddingAccessPolicy</a>

---

##### `putAibiDashboardEmbeddingApprovedDomains` <a name="putAibiDashboardEmbeddingApprovedDomains" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.putAibiDashboardEmbeddingApprovedDomains"></a>

```typescript
public putAibiDashboardEmbeddingApprovedDomains(value: WorkspaceSettingV2AibiDashboardEmbeddingApprovedDomains): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.putAibiDashboardEmbeddingApprovedDomains.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingApprovedDomains">WorkspaceSettingV2AibiDashboardEmbeddingApprovedDomains</a>

---

##### `putAutomaticClusterUpdateWorkspace` <a name="putAutomaticClusterUpdateWorkspace" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.putAutomaticClusterUpdateWorkspace"></a>

```typescript
public putAutomaticClusterUpdateWorkspace(value: WorkspaceSettingV2AutomaticClusterUpdateWorkspace): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.putAutomaticClusterUpdateWorkspace.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspace">WorkspaceSettingV2AutomaticClusterUpdateWorkspace</a>

---

##### `putBooleanVal` <a name="putBooleanVal" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.putBooleanVal"></a>

```typescript
public putBooleanVal(value: WorkspaceSettingV2BooleanVal): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.putBooleanVal.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2BooleanVal">WorkspaceSettingV2BooleanVal</a>

---

##### `putDefaultDataSecurityMode` <a name="putDefaultDataSecurityMode" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.putDefaultDataSecurityMode"></a>

```typescript
public putDefaultDataSecurityMode(value: WorkspaceSettingV2DefaultDataSecurityMode): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.putDefaultDataSecurityMode.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2DefaultDataSecurityMode">WorkspaceSettingV2DefaultDataSecurityMode</a>

---

##### `putEffectiveAibiDashboardEmbeddingAccessPolicy` <a name="putEffectiveAibiDashboardEmbeddingAccessPolicy" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.putEffectiveAibiDashboardEmbeddingAccessPolicy"></a>

```typescript
public putEffectiveAibiDashboardEmbeddingAccessPolicy(value: WorkspaceSettingV2EffectiveAibiDashboardEmbeddingAccessPolicy): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.putEffectiveAibiDashboardEmbeddingAccessPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingAccessPolicy">WorkspaceSettingV2EffectiveAibiDashboardEmbeddingAccessPolicy</a>

---

##### `putEffectiveAibiDashboardEmbeddingApprovedDomains` <a name="putEffectiveAibiDashboardEmbeddingApprovedDomains" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.putEffectiveAibiDashboardEmbeddingApprovedDomains"></a>

```typescript
public putEffectiveAibiDashboardEmbeddingApprovedDomains(value: WorkspaceSettingV2EffectiveAibiDashboardEmbeddingApprovedDomains): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.putEffectiveAibiDashboardEmbeddingApprovedDomains.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingApprovedDomains">WorkspaceSettingV2EffectiveAibiDashboardEmbeddingApprovedDomains</a>

---

##### `putEffectiveAutomaticClusterUpdateWorkspace` <a name="putEffectiveAutomaticClusterUpdateWorkspace" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.putEffectiveAutomaticClusterUpdateWorkspace"></a>

```typescript
public putEffectiveAutomaticClusterUpdateWorkspace(value: WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspace): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.putEffectiveAutomaticClusterUpdateWorkspace.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspace">WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspace</a>

---

##### `putEffectiveDefaultDataSecurityMode` <a name="putEffectiveDefaultDataSecurityMode" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.putEffectiveDefaultDataSecurityMode"></a>

```typescript
public putEffectiveDefaultDataSecurityMode(value: WorkspaceSettingV2EffectiveDefaultDataSecurityMode): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.putEffectiveDefaultDataSecurityMode.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveDefaultDataSecurityMode">WorkspaceSettingV2EffectiveDefaultDataSecurityMode</a>

---

##### `putEffectivePersonalCompute` <a name="putEffectivePersonalCompute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.putEffectivePersonalCompute"></a>

```typescript
public putEffectivePersonalCompute(value: WorkspaceSettingV2EffectivePersonalCompute): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.putEffectivePersonalCompute.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectivePersonalCompute">WorkspaceSettingV2EffectivePersonalCompute</a>

---

##### `putEffectiveRestrictWorkspaceAdmins` <a name="putEffectiveRestrictWorkspaceAdmins" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.putEffectiveRestrictWorkspaceAdmins"></a>

```typescript
public putEffectiveRestrictWorkspaceAdmins(value: WorkspaceSettingV2EffectiveRestrictWorkspaceAdmins): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.putEffectiveRestrictWorkspaceAdmins.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveRestrictWorkspaceAdmins">WorkspaceSettingV2EffectiveRestrictWorkspaceAdmins</a>

---

##### `putIntegerVal` <a name="putIntegerVal" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.putIntegerVal"></a>

```typescript
public putIntegerVal(value: WorkspaceSettingV2IntegerVal): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.putIntegerVal.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2IntegerVal">WorkspaceSettingV2IntegerVal</a>

---

##### `putPersonalCompute` <a name="putPersonalCompute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.putPersonalCompute"></a>

```typescript
public putPersonalCompute(value: WorkspaceSettingV2PersonalCompute): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.putPersonalCompute.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2PersonalCompute">WorkspaceSettingV2PersonalCompute</a>

---

##### `putRestrictWorkspaceAdmins` <a name="putRestrictWorkspaceAdmins" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.putRestrictWorkspaceAdmins"></a>

```typescript
public putRestrictWorkspaceAdmins(value: WorkspaceSettingV2RestrictWorkspaceAdmins): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.putRestrictWorkspaceAdmins.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2RestrictWorkspaceAdmins">WorkspaceSettingV2RestrictWorkspaceAdmins</a>

---

##### `putStringVal` <a name="putStringVal" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.putStringVal"></a>

```typescript
public putStringVal(value: WorkspaceSettingV2StringVal): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.putStringVal.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2StringVal">WorkspaceSettingV2StringVal</a>

---

##### `resetAibiDashboardEmbeddingAccessPolicy` <a name="resetAibiDashboardEmbeddingAccessPolicy" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.resetAibiDashboardEmbeddingAccessPolicy"></a>

```typescript
public resetAibiDashboardEmbeddingAccessPolicy(): void
```

##### `resetAibiDashboardEmbeddingApprovedDomains` <a name="resetAibiDashboardEmbeddingApprovedDomains" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.resetAibiDashboardEmbeddingApprovedDomains"></a>

```typescript
public resetAibiDashboardEmbeddingApprovedDomains(): void
```

##### `resetAutomaticClusterUpdateWorkspace` <a name="resetAutomaticClusterUpdateWorkspace" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.resetAutomaticClusterUpdateWorkspace"></a>

```typescript
public resetAutomaticClusterUpdateWorkspace(): void
```

##### `resetBooleanVal` <a name="resetBooleanVal" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.resetBooleanVal"></a>

```typescript
public resetBooleanVal(): void
```

##### `resetDefaultDataSecurityMode` <a name="resetDefaultDataSecurityMode" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.resetDefaultDataSecurityMode"></a>

```typescript
public resetDefaultDataSecurityMode(): void
```

##### `resetEffectiveAibiDashboardEmbeddingAccessPolicy` <a name="resetEffectiveAibiDashboardEmbeddingAccessPolicy" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.resetEffectiveAibiDashboardEmbeddingAccessPolicy"></a>

```typescript
public resetEffectiveAibiDashboardEmbeddingAccessPolicy(): void
```

##### `resetEffectiveAibiDashboardEmbeddingApprovedDomains` <a name="resetEffectiveAibiDashboardEmbeddingApprovedDomains" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.resetEffectiveAibiDashboardEmbeddingApprovedDomains"></a>

```typescript
public resetEffectiveAibiDashboardEmbeddingApprovedDomains(): void
```

##### `resetEffectiveAutomaticClusterUpdateWorkspace` <a name="resetEffectiveAutomaticClusterUpdateWorkspace" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.resetEffectiveAutomaticClusterUpdateWorkspace"></a>

```typescript
public resetEffectiveAutomaticClusterUpdateWorkspace(): void
```

##### `resetEffectiveDefaultDataSecurityMode` <a name="resetEffectiveDefaultDataSecurityMode" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.resetEffectiveDefaultDataSecurityMode"></a>

```typescript
public resetEffectiveDefaultDataSecurityMode(): void
```

##### `resetEffectivePersonalCompute` <a name="resetEffectivePersonalCompute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.resetEffectivePersonalCompute"></a>

```typescript
public resetEffectivePersonalCompute(): void
```

##### `resetEffectiveRestrictWorkspaceAdmins` <a name="resetEffectiveRestrictWorkspaceAdmins" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.resetEffectiveRestrictWorkspaceAdmins"></a>

```typescript
public resetEffectiveRestrictWorkspaceAdmins(): void
```

##### `resetIntegerVal` <a name="resetIntegerVal" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.resetIntegerVal"></a>

```typescript
public resetIntegerVal(): void
```

##### `resetName` <a name="resetName" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.resetName"></a>

```typescript
public resetName(): void
```

##### `resetPersonalCompute` <a name="resetPersonalCompute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.resetPersonalCompute"></a>

```typescript
public resetPersonalCompute(): void
```

##### `resetRestrictWorkspaceAdmins` <a name="resetRestrictWorkspaceAdmins" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.resetRestrictWorkspaceAdmins"></a>

```typescript
public resetRestrictWorkspaceAdmins(): void
```

##### `resetStringVal` <a name="resetStringVal" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.resetStringVal"></a>

```typescript
public resetStringVal(): void
```

##### `resetWorkspaceId` <a name="resetWorkspaceId" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.resetWorkspaceId"></a>

```typescript
public resetWorkspaceId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a WorkspaceSettingV2 resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.isConstruct"></a>

```typescript
import { workspaceSettingV2 } from '@cdktf/provider-databricks'

workspaceSettingV2.WorkspaceSettingV2.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.isTerraformElement"></a>

```typescript
import { workspaceSettingV2 } from '@cdktf/provider-databricks'

workspaceSettingV2.WorkspaceSettingV2.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.isTerraformResource"></a>

```typescript
import { workspaceSettingV2 } from '@cdktf/provider-databricks'

workspaceSettingV2.WorkspaceSettingV2.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.generateConfigForImport"></a>

```typescript
import { workspaceSettingV2 } from '@cdktf/provider-databricks'

workspaceSettingV2.WorkspaceSettingV2.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a WorkspaceSettingV2 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the WorkspaceSettingV2 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing WorkspaceSettingV2 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/workspace_setting_v2#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the WorkspaceSettingV2 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.property.aibiDashboardEmbeddingAccessPolicy">aibiDashboardEmbeddingAccessPolicy</a></code> | <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference">WorkspaceSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.property.aibiDashboardEmbeddingApprovedDomains">aibiDashboardEmbeddingApprovedDomains</a></code> | <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference">WorkspaceSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.property.automaticClusterUpdateWorkspace">automaticClusterUpdateWorkspace</a></code> | <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceOutputReference">WorkspaceSettingV2AutomaticClusterUpdateWorkspaceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.property.booleanVal">booleanVal</a></code> | <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2BooleanValOutputReference">WorkspaceSettingV2BooleanValOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.property.defaultDataSecurityMode">defaultDataSecurityMode</a></code> | <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2DefaultDataSecurityModeOutputReference">WorkspaceSettingV2DefaultDataSecurityModeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.property.effectiveAibiDashboardEmbeddingAccessPolicy">effectiveAibiDashboardEmbeddingAccessPolicy</a></code> | <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference">WorkspaceSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.property.effectiveAibiDashboardEmbeddingApprovedDomains">effectiveAibiDashboardEmbeddingApprovedDomains</a></code> | <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference">WorkspaceSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.property.effectiveAutomaticClusterUpdateWorkspace">effectiveAutomaticClusterUpdateWorkspace</a></code> | <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference">WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.property.effectiveBooleanVal">effectiveBooleanVal</a></code> | <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveBooleanValOutputReference">WorkspaceSettingV2EffectiveBooleanValOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.property.effectiveDefaultDataSecurityMode">effectiveDefaultDataSecurityMode</a></code> | <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveDefaultDataSecurityModeOutputReference">WorkspaceSettingV2EffectiveDefaultDataSecurityModeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.property.effectiveIntegerVal">effectiveIntegerVal</a></code> | <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveIntegerValOutputReference">WorkspaceSettingV2EffectiveIntegerValOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.property.effectivePersonalCompute">effectivePersonalCompute</a></code> | <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectivePersonalComputeOutputReference">WorkspaceSettingV2EffectivePersonalComputeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.property.effectiveRestrictWorkspaceAdmins">effectiveRestrictWorkspaceAdmins</a></code> | <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveRestrictWorkspaceAdminsOutputReference">WorkspaceSettingV2EffectiveRestrictWorkspaceAdminsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.property.effectiveStringVal">effectiveStringVal</a></code> | <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveStringValOutputReference">WorkspaceSettingV2EffectiveStringValOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.property.integerVal">integerVal</a></code> | <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2IntegerValOutputReference">WorkspaceSettingV2IntegerValOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.property.personalCompute">personalCompute</a></code> | <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2PersonalComputeOutputReference">WorkspaceSettingV2PersonalComputeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.property.restrictWorkspaceAdmins">restrictWorkspaceAdmins</a></code> | <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2RestrictWorkspaceAdminsOutputReference">WorkspaceSettingV2RestrictWorkspaceAdminsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.property.stringVal">stringVal</a></code> | <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2StringValOutputReference">WorkspaceSettingV2StringValOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.property.aibiDashboardEmbeddingAccessPolicyInput">aibiDashboardEmbeddingAccessPolicyInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingAccessPolicy">WorkspaceSettingV2AibiDashboardEmbeddingAccessPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.property.aibiDashboardEmbeddingApprovedDomainsInput">aibiDashboardEmbeddingApprovedDomainsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingApprovedDomains">WorkspaceSettingV2AibiDashboardEmbeddingApprovedDomains</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.property.automaticClusterUpdateWorkspaceInput">automaticClusterUpdateWorkspaceInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspace">WorkspaceSettingV2AutomaticClusterUpdateWorkspace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.property.booleanValInput">booleanValInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2BooleanVal">WorkspaceSettingV2BooleanVal</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.property.defaultDataSecurityModeInput">defaultDataSecurityModeInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2DefaultDataSecurityMode">WorkspaceSettingV2DefaultDataSecurityMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.property.effectiveAibiDashboardEmbeddingAccessPolicyInput">effectiveAibiDashboardEmbeddingAccessPolicyInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingAccessPolicy">WorkspaceSettingV2EffectiveAibiDashboardEmbeddingAccessPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.property.effectiveAibiDashboardEmbeddingApprovedDomainsInput">effectiveAibiDashboardEmbeddingApprovedDomainsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingApprovedDomains">WorkspaceSettingV2EffectiveAibiDashboardEmbeddingApprovedDomains</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.property.effectiveAutomaticClusterUpdateWorkspaceInput">effectiveAutomaticClusterUpdateWorkspaceInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspace">WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.property.effectiveDefaultDataSecurityModeInput">effectiveDefaultDataSecurityModeInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveDefaultDataSecurityMode">WorkspaceSettingV2EffectiveDefaultDataSecurityMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.property.effectivePersonalComputeInput">effectivePersonalComputeInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectivePersonalCompute">WorkspaceSettingV2EffectivePersonalCompute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.property.effectiveRestrictWorkspaceAdminsInput">effectiveRestrictWorkspaceAdminsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveRestrictWorkspaceAdmins">WorkspaceSettingV2EffectiveRestrictWorkspaceAdmins</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.property.integerValInput">integerValInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2IntegerVal">WorkspaceSettingV2IntegerVal</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.property.personalComputeInput">personalComputeInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2PersonalCompute">WorkspaceSettingV2PersonalCompute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.property.restrictWorkspaceAdminsInput">restrictWorkspaceAdminsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2RestrictWorkspaceAdmins">WorkspaceSettingV2RestrictWorkspaceAdmins</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.property.stringValInput">stringValInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2StringVal">WorkspaceSettingV2StringVal</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.property.workspaceIdInput">workspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.property.workspaceId">workspaceId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `aibiDashboardEmbeddingAccessPolicy`<sup>Required</sup> <a name="aibiDashboardEmbeddingAccessPolicy" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.property.aibiDashboardEmbeddingAccessPolicy"></a>

```typescript
public readonly aibiDashboardEmbeddingAccessPolicy: WorkspaceSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference;
```

- *Type:* <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference">WorkspaceSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference</a>

---

##### `aibiDashboardEmbeddingApprovedDomains`<sup>Required</sup> <a name="aibiDashboardEmbeddingApprovedDomains" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.property.aibiDashboardEmbeddingApprovedDomains"></a>

```typescript
public readonly aibiDashboardEmbeddingApprovedDomains: WorkspaceSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference">WorkspaceSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference</a>

---

##### `automaticClusterUpdateWorkspace`<sup>Required</sup> <a name="automaticClusterUpdateWorkspace" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.property.automaticClusterUpdateWorkspace"></a>

```typescript
public readonly automaticClusterUpdateWorkspace: WorkspaceSettingV2AutomaticClusterUpdateWorkspaceOutputReference;
```

- *Type:* <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceOutputReference">WorkspaceSettingV2AutomaticClusterUpdateWorkspaceOutputReference</a>

---

##### `booleanVal`<sup>Required</sup> <a name="booleanVal" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.property.booleanVal"></a>

```typescript
public readonly booleanVal: WorkspaceSettingV2BooleanValOutputReference;
```

- *Type:* <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2BooleanValOutputReference">WorkspaceSettingV2BooleanValOutputReference</a>

---

##### `defaultDataSecurityMode`<sup>Required</sup> <a name="defaultDataSecurityMode" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.property.defaultDataSecurityMode"></a>

```typescript
public readonly defaultDataSecurityMode: WorkspaceSettingV2DefaultDataSecurityModeOutputReference;
```

- *Type:* <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2DefaultDataSecurityModeOutputReference">WorkspaceSettingV2DefaultDataSecurityModeOutputReference</a>

---

##### `effectiveAibiDashboardEmbeddingAccessPolicy`<sup>Required</sup> <a name="effectiveAibiDashboardEmbeddingAccessPolicy" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.property.effectiveAibiDashboardEmbeddingAccessPolicy"></a>

```typescript
public readonly effectiveAibiDashboardEmbeddingAccessPolicy: WorkspaceSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference;
```

- *Type:* <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference">WorkspaceSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference</a>

---

##### `effectiveAibiDashboardEmbeddingApprovedDomains`<sup>Required</sup> <a name="effectiveAibiDashboardEmbeddingApprovedDomains" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.property.effectiveAibiDashboardEmbeddingApprovedDomains"></a>

```typescript
public readonly effectiveAibiDashboardEmbeddingApprovedDomains: WorkspaceSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference">WorkspaceSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference</a>

---

##### `effectiveAutomaticClusterUpdateWorkspace`<sup>Required</sup> <a name="effectiveAutomaticClusterUpdateWorkspace" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.property.effectiveAutomaticClusterUpdateWorkspace"></a>

```typescript
public readonly effectiveAutomaticClusterUpdateWorkspace: WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference;
```

- *Type:* <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference">WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference</a>

---

##### `effectiveBooleanVal`<sup>Required</sup> <a name="effectiveBooleanVal" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.property.effectiveBooleanVal"></a>

```typescript
public readonly effectiveBooleanVal: WorkspaceSettingV2EffectiveBooleanValOutputReference;
```

- *Type:* <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveBooleanValOutputReference">WorkspaceSettingV2EffectiveBooleanValOutputReference</a>

---

##### `effectiveDefaultDataSecurityMode`<sup>Required</sup> <a name="effectiveDefaultDataSecurityMode" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.property.effectiveDefaultDataSecurityMode"></a>

```typescript
public readonly effectiveDefaultDataSecurityMode: WorkspaceSettingV2EffectiveDefaultDataSecurityModeOutputReference;
```

- *Type:* <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveDefaultDataSecurityModeOutputReference">WorkspaceSettingV2EffectiveDefaultDataSecurityModeOutputReference</a>

---

##### `effectiveIntegerVal`<sup>Required</sup> <a name="effectiveIntegerVal" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.property.effectiveIntegerVal"></a>

```typescript
public readonly effectiveIntegerVal: WorkspaceSettingV2EffectiveIntegerValOutputReference;
```

- *Type:* <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveIntegerValOutputReference">WorkspaceSettingV2EffectiveIntegerValOutputReference</a>

---

##### `effectivePersonalCompute`<sup>Required</sup> <a name="effectivePersonalCompute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.property.effectivePersonalCompute"></a>

```typescript
public readonly effectivePersonalCompute: WorkspaceSettingV2EffectivePersonalComputeOutputReference;
```

- *Type:* <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectivePersonalComputeOutputReference">WorkspaceSettingV2EffectivePersonalComputeOutputReference</a>

---

##### `effectiveRestrictWorkspaceAdmins`<sup>Required</sup> <a name="effectiveRestrictWorkspaceAdmins" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.property.effectiveRestrictWorkspaceAdmins"></a>

```typescript
public readonly effectiveRestrictWorkspaceAdmins: WorkspaceSettingV2EffectiveRestrictWorkspaceAdminsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveRestrictWorkspaceAdminsOutputReference">WorkspaceSettingV2EffectiveRestrictWorkspaceAdminsOutputReference</a>

---

##### `effectiveStringVal`<sup>Required</sup> <a name="effectiveStringVal" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.property.effectiveStringVal"></a>

```typescript
public readonly effectiveStringVal: WorkspaceSettingV2EffectiveStringValOutputReference;
```

- *Type:* <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveStringValOutputReference">WorkspaceSettingV2EffectiveStringValOutputReference</a>

---

##### `integerVal`<sup>Required</sup> <a name="integerVal" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.property.integerVal"></a>

```typescript
public readonly integerVal: WorkspaceSettingV2IntegerValOutputReference;
```

- *Type:* <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2IntegerValOutputReference">WorkspaceSettingV2IntegerValOutputReference</a>

---

##### `personalCompute`<sup>Required</sup> <a name="personalCompute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.property.personalCompute"></a>

```typescript
public readonly personalCompute: WorkspaceSettingV2PersonalComputeOutputReference;
```

- *Type:* <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2PersonalComputeOutputReference">WorkspaceSettingV2PersonalComputeOutputReference</a>

---

##### `restrictWorkspaceAdmins`<sup>Required</sup> <a name="restrictWorkspaceAdmins" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.property.restrictWorkspaceAdmins"></a>

```typescript
public readonly restrictWorkspaceAdmins: WorkspaceSettingV2RestrictWorkspaceAdminsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2RestrictWorkspaceAdminsOutputReference">WorkspaceSettingV2RestrictWorkspaceAdminsOutputReference</a>

---

##### `stringVal`<sup>Required</sup> <a name="stringVal" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.property.stringVal"></a>

```typescript
public readonly stringVal: WorkspaceSettingV2StringValOutputReference;
```

- *Type:* <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2StringValOutputReference">WorkspaceSettingV2StringValOutputReference</a>

---

##### `aibiDashboardEmbeddingAccessPolicyInput`<sup>Optional</sup> <a name="aibiDashboardEmbeddingAccessPolicyInput" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.property.aibiDashboardEmbeddingAccessPolicyInput"></a>

```typescript
public readonly aibiDashboardEmbeddingAccessPolicyInput: IResolvable | WorkspaceSettingV2AibiDashboardEmbeddingAccessPolicy;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingAccessPolicy">WorkspaceSettingV2AibiDashboardEmbeddingAccessPolicy</a>

---

##### `aibiDashboardEmbeddingApprovedDomainsInput`<sup>Optional</sup> <a name="aibiDashboardEmbeddingApprovedDomainsInput" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.property.aibiDashboardEmbeddingApprovedDomainsInput"></a>

```typescript
public readonly aibiDashboardEmbeddingApprovedDomainsInput: IResolvable | WorkspaceSettingV2AibiDashboardEmbeddingApprovedDomains;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingApprovedDomains">WorkspaceSettingV2AibiDashboardEmbeddingApprovedDomains</a>

---

##### `automaticClusterUpdateWorkspaceInput`<sup>Optional</sup> <a name="automaticClusterUpdateWorkspaceInput" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.property.automaticClusterUpdateWorkspaceInput"></a>

```typescript
public readonly automaticClusterUpdateWorkspaceInput: IResolvable | WorkspaceSettingV2AutomaticClusterUpdateWorkspace;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspace">WorkspaceSettingV2AutomaticClusterUpdateWorkspace</a>

---

##### `booleanValInput`<sup>Optional</sup> <a name="booleanValInput" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.property.booleanValInput"></a>

```typescript
public readonly booleanValInput: IResolvable | WorkspaceSettingV2BooleanVal;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2BooleanVal">WorkspaceSettingV2BooleanVal</a>

---

##### `defaultDataSecurityModeInput`<sup>Optional</sup> <a name="defaultDataSecurityModeInput" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.property.defaultDataSecurityModeInput"></a>

```typescript
public readonly defaultDataSecurityModeInput: IResolvable | WorkspaceSettingV2DefaultDataSecurityMode;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2DefaultDataSecurityMode">WorkspaceSettingV2DefaultDataSecurityMode</a>

---

##### `effectiveAibiDashboardEmbeddingAccessPolicyInput`<sup>Optional</sup> <a name="effectiveAibiDashboardEmbeddingAccessPolicyInput" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.property.effectiveAibiDashboardEmbeddingAccessPolicyInput"></a>

```typescript
public readonly effectiveAibiDashboardEmbeddingAccessPolicyInput: IResolvable | WorkspaceSettingV2EffectiveAibiDashboardEmbeddingAccessPolicy;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingAccessPolicy">WorkspaceSettingV2EffectiveAibiDashboardEmbeddingAccessPolicy</a>

---

##### `effectiveAibiDashboardEmbeddingApprovedDomainsInput`<sup>Optional</sup> <a name="effectiveAibiDashboardEmbeddingApprovedDomainsInput" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.property.effectiveAibiDashboardEmbeddingApprovedDomainsInput"></a>

```typescript
public readonly effectiveAibiDashboardEmbeddingApprovedDomainsInput: IResolvable | WorkspaceSettingV2EffectiveAibiDashboardEmbeddingApprovedDomains;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingApprovedDomains">WorkspaceSettingV2EffectiveAibiDashboardEmbeddingApprovedDomains</a>

---

##### `effectiveAutomaticClusterUpdateWorkspaceInput`<sup>Optional</sup> <a name="effectiveAutomaticClusterUpdateWorkspaceInput" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.property.effectiveAutomaticClusterUpdateWorkspaceInput"></a>

```typescript
public readonly effectiveAutomaticClusterUpdateWorkspaceInput: IResolvable | WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspace;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspace">WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspace</a>

---

##### `effectiveDefaultDataSecurityModeInput`<sup>Optional</sup> <a name="effectiveDefaultDataSecurityModeInput" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.property.effectiveDefaultDataSecurityModeInput"></a>

```typescript
public readonly effectiveDefaultDataSecurityModeInput: IResolvable | WorkspaceSettingV2EffectiveDefaultDataSecurityMode;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveDefaultDataSecurityMode">WorkspaceSettingV2EffectiveDefaultDataSecurityMode</a>

---

##### `effectivePersonalComputeInput`<sup>Optional</sup> <a name="effectivePersonalComputeInput" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.property.effectivePersonalComputeInput"></a>

```typescript
public readonly effectivePersonalComputeInput: IResolvable | WorkspaceSettingV2EffectivePersonalCompute;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectivePersonalCompute">WorkspaceSettingV2EffectivePersonalCompute</a>

---

##### `effectiveRestrictWorkspaceAdminsInput`<sup>Optional</sup> <a name="effectiveRestrictWorkspaceAdminsInput" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.property.effectiveRestrictWorkspaceAdminsInput"></a>

```typescript
public readonly effectiveRestrictWorkspaceAdminsInput: IResolvable | WorkspaceSettingV2EffectiveRestrictWorkspaceAdmins;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveRestrictWorkspaceAdmins">WorkspaceSettingV2EffectiveRestrictWorkspaceAdmins</a>

---

##### `integerValInput`<sup>Optional</sup> <a name="integerValInput" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.property.integerValInput"></a>

```typescript
public readonly integerValInput: IResolvable | WorkspaceSettingV2IntegerVal;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2IntegerVal">WorkspaceSettingV2IntegerVal</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `personalComputeInput`<sup>Optional</sup> <a name="personalComputeInput" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.property.personalComputeInput"></a>

```typescript
public readonly personalComputeInput: IResolvable | WorkspaceSettingV2PersonalCompute;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2PersonalCompute">WorkspaceSettingV2PersonalCompute</a>

---

##### `restrictWorkspaceAdminsInput`<sup>Optional</sup> <a name="restrictWorkspaceAdminsInput" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.property.restrictWorkspaceAdminsInput"></a>

```typescript
public readonly restrictWorkspaceAdminsInput: IResolvable | WorkspaceSettingV2RestrictWorkspaceAdmins;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2RestrictWorkspaceAdmins">WorkspaceSettingV2RestrictWorkspaceAdmins</a>

---

##### `stringValInput`<sup>Optional</sup> <a name="stringValInput" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.property.stringValInput"></a>

```typescript
public readonly stringValInput: IResolvable | WorkspaceSettingV2StringVal;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2StringVal">WorkspaceSettingV2StringVal</a>

---

##### `workspaceIdInput`<sup>Optional</sup> <a name="workspaceIdInput" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.property.workspaceIdInput"></a>

```typescript
public readonly workspaceIdInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### WorkspaceSettingV2AibiDashboardEmbeddingAccessPolicy <a name="WorkspaceSettingV2AibiDashboardEmbeddingAccessPolicy" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingAccessPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingAccessPolicy.Initializer"></a>

```typescript
import { workspaceSettingV2 } from '@cdktf/provider-databricks'

const workspaceSettingV2AibiDashboardEmbeddingAccessPolicy: workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingAccessPolicy = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingAccessPolicy.property.accessPolicyType">accessPolicyType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/workspace_setting_v2#access_policy_type WorkspaceSettingV2#access_policy_type}. |

---

##### `accessPolicyType`<sup>Required</sup> <a name="accessPolicyType" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingAccessPolicy.property.accessPolicyType"></a>

```typescript
public readonly accessPolicyType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/workspace_setting_v2#access_policy_type WorkspaceSettingV2#access_policy_type}.

---

### WorkspaceSettingV2AibiDashboardEmbeddingApprovedDomains <a name="WorkspaceSettingV2AibiDashboardEmbeddingApprovedDomains" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingApprovedDomains"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingApprovedDomains.Initializer"></a>

```typescript
import { workspaceSettingV2 } from '@cdktf/provider-databricks'

const workspaceSettingV2AibiDashboardEmbeddingApprovedDomains: workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingApprovedDomains = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingApprovedDomains.property.approvedDomains">approvedDomains</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/workspace_setting_v2#approved_domains WorkspaceSettingV2#approved_domains}. |

---

##### `approvedDomains`<sup>Optional</sup> <a name="approvedDomains" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingApprovedDomains.property.approvedDomains"></a>

```typescript
public readonly approvedDomains: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/workspace_setting_v2#approved_domains WorkspaceSettingV2#approved_domains}.

---

### WorkspaceSettingV2AutomaticClusterUpdateWorkspace <a name="WorkspaceSettingV2AutomaticClusterUpdateWorkspace" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspace"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspace.Initializer"></a>

```typescript
import { workspaceSettingV2 } from '@cdktf/provider-databricks'

const workspaceSettingV2AutomaticClusterUpdateWorkspace: workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspace = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspace.property.canToggle">canToggle</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/workspace_setting_v2#can_toggle WorkspaceSettingV2#can_toggle}. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspace.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/workspace_setting_v2#enabled WorkspaceSettingV2#enabled}. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspace.property.enablementDetails">enablementDetails</a></code> | <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetails">WorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetails</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/workspace_setting_v2#enablement_details WorkspaceSettingV2#enablement_details}. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspace.property.maintenanceWindow">maintenanceWindow</a></code> | <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindow">WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindow</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/workspace_setting_v2#maintenance_window WorkspaceSettingV2#maintenance_window}. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspace.property.restartEvenIfNoUpdatesAvailable">restartEvenIfNoUpdatesAvailable</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/workspace_setting_v2#restart_even_if_no_updates_available WorkspaceSettingV2#restart_even_if_no_updates_available}. |

---

##### `canToggle`<sup>Optional</sup> <a name="canToggle" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspace.property.canToggle"></a>

```typescript
public readonly canToggle: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/workspace_setting_v2#can_toggle WorkspaceSettingV2#can_toggle}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspace.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/workspace_setting_v2#enabled WorkspaceSettingV2#enabled}.

---

##### `enablementDetails`<sup>Optional</sup> <a name="enablementDetails" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspace.property.enablementDetails"></a>

```typescript
public readonly enablementDetails: WorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetails;
```

- *Type:* <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetails">WorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetails</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/workspace_setting_v2#enablement_details WorkspaceSettingV2#enablement_details}.

---

##### `maintenanceWindow`<sup>Optional</sup> <a name="maintenanceWindow" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspace.property.maintenanceWindow"></a>

```typescript
public readonly maintenanceWindow: WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindow;
```

- *Type:* <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindow">WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindow</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/workspace_setting_v2#maintenance_window WorkspaceSettingV2#maintenance_window}.

---

##### `restartEvenIfNoUpdatesAvailable`<sup>Optional</sup> <a name="restartEvenIfNoUpdatesAvailable" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspace.property.restartEvenIfNoUpdatesAvailable"></a>

```typescript
public readonly restartEvenIfNoUpdatesAvailable: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/workspace_setting_v2#restart_even_if_no_updates_available WorkspaceSettingV2#restart_even_if_no_updates_available}.

---

### WorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetails <a name="WorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetails" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetails"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetails.Initializer"></a>

```typescript
import { workspaceSettingV2 } from '@cdktf/provider-databricks'

const workspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetails: workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetails = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetails.property.forcedForComplianceMode">forcedForComplianceMode</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/workspace_setting_v2#forced_for_compliance_mode WorkspaceSettingV2#forced_for_compliance_mode}. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetails.property.unavailableForDisabledEntitlement">unavailableForDisabledEntitlement</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/workspace_setting_v2#unavailable_for_disabled_entitlement WorkspaceSettingV2#unavailable_for_disabled_entitlement}. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetails.property.unavailableForNonEnterpriseTier">unavailableForNonEnterpriseTier</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/workspace_setting_v2#unavailable_for_non_enterprise_tier WorkspaceSettingV2#unavailable_for_non_enterprise_tier}. |

---

##### `forcedForComplianceMode`<sup>Optional</sup> <a name="forcedForComplianceMode" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetails.property.forcedForComplianceMode"></a>

```typescript
public readonly forcedForComplianceMode: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/workspace_setting_v2#forced_for_compliance_mode WorkspaceSettingV2#forced_for_compliance_mode}.

---

##### `unavailableForDisabledEntitlement`<sup>Optional</sup> <a name="unavailableForDisabledEntitlement" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetails.property.unavailableForDisabledEntitlement"></a>

```typescript
public readonly unavailableForDisabledEntitlement: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/workspace_setting_v2#unavailable_for_disabled_entitlement WorkspaceSettingV2#unavailable_for_disabled_entitlement}.

---

##### `unavailableForNonEnterpriseTier`<sup>Optional</sup> <a name="unavailableForNonEnterpriseTier" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetails.property.unavailableForNonEnterpriseTier"></a>

```typescript
public readonly unavailableForNonEnterpriseTier: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/workspace_setting_v2#unavailable_for_non_enterprise_tier WorkspaceSettingV2#unavailable_for_non_enterprise_tier}.

---

### WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindow <a name="WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindow" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindow"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindow.Initializer"></a>

```typescript
import { workspaceSettingV2 } from '@cdktf/provider-databricks'

const workspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindow: workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindow = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindow.property.weekDayBasedSchedule">weekDayBasedSchedule</a></code> | <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule">WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/workspace_setting_v2#week_day_based_schedule WorkspaceSettingV2#week_day_based_schedule}. |

---

##### `weekDayBasedSchedule`<sup>Optional</sup> <a name="weekDayBasedSchedule" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindow.property.weekDayBasedSchedule"></a>

```typescript
public readonly weekDayBasedSchedule: WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule;
```

- *Type:* <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule">WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/workspace_setting_v2#week_day_based_schedule WorkspaceSettingV2#week_day_based_schedule}.

---

### WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule <a name="WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule.Initializer"></a>

```typescript
import { workspaceSettingV2 } from '@cdktf/provider-databricks'

const workspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule: workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule.property.dayOfWeek">dayOfWeek</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/workspace_setting_v2#day_of_week WorkspaceSettingV2#day_of_week}. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule.property.frequency">frequency</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/workspace_setting_v2#frequency WorkspaceSettingV2#frequency}. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule.property.windowStartTime">windowStartTime</a></code> | <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime">WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/workspace_setting_v2#window_start_time WorkspaceSettingV2#window_start_time}. |

---

##### `dayOfWeek`<sup>Optional</sup> <a name="dayOfWeek" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule.property.dayOfWeek"></a>

```typescript
public readonly dayOfWeek: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/workspace_setting_v2#day_of_week WorkspaceSettingV2#day_of_week}.

---

##### `frequency`<sup>Optional</sup> <a name="frequency" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule.property.frequency"></a>

```typescript
public readonly frequency: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/workspace_setting_v2#frequency WorkspaceSettingV2#frequency}.

---

##### `windowStartTime`<sup>Optional</sup> <a name="windowStartTime" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule.property.windowStartTime"></a>

```typescript
public readonly windowStartTime: WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime;
```

- *Type:* <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime">WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/workspace_setting_v2#window_start_time WorkspaceSettingV2#window_start_time}.

---

### WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime <a name="WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime.Initializer"></a>

```typescript
import { workspaceSettingV2 } from '@cdktf/provider-databricks'

const workspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime: workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime.property.hours">hours</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/workspace_setting_v2#hours WorkspaceSettingV2#hours}. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime.property.minutes">minutes</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/workspace_setting_v2#minutes WorkspaceSettingV2#minutes}. |

---

##### `hours`<sup>Optional</sup> <a name="hours" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime.property.hours"></a>

```typescript
public readonly hours: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/workspace_setting_v2#hours WorkspaceSettingV2#hours}.

---

##### `minutes`<sup>Optional</sup> <a name="minutes" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime.property.minutes"></a>

```typescript
public readonly minutes: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/workspace_setting_v2#minutes WorkspaceSettingV2#minutes}.

---

### WorkspaceSettingV2BooleanVal <a name="WorkspaceSettingV2BooleanVal" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2BooleanVal"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2BooleanVal.Initializer"></a>

```typescript
import { workspaceSettingV2 } from '@cdktf/provider-databricks'

const workspaceSettingV2BooleanVal: workspaceSettingV2.WorkspaceSettingV2BooleanVal = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2BooleanVal.property.value">value</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/workspace_setting_v2#value WorkspaceSettingV2#value}. |

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2BooleanVal.property.value"></a>

```typescript
public readonly value: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/workspace_setting_v2#value WorkspaceSettingV2#value}.

---

### WorkspaceSettingV2Config <a name="WorkspaceSettingV2Config" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2Config.Initializer"></a>

```typescript
import { workspaceSettingV2 } from '@cdktf/provider-databricks'

const workspaceSettingV2Config: workspaceSettingV2.WorkspaceSettingV2Config = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2Config.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2Config.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2Config.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2Config.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2Config.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2Config.property.aibiDashboardEmbeddingAccessPolicy">aibiDashboardEmbeddingAccessPolicy</a></code> | <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingAccessPolicy">WorkspaceSettingV2AibiDashboardEmbeddingAccessPolicy</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/workspace_setting_v2#aibi_dashboard_embedding_access_policy WorkspaceSettingV2#aibi_dashboard_embedding_access_policy}. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2Config.property.aibiDashboardEmbeddingApprovedDomains">aibiDashboardEmbeddingApprovedDomains</a></code> | <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingApprovedDomains">WorkspaceSettingV2AibiDashboardEmbeddingApprovedDomains</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/workspace_setting_v2#aibi_dashboard_embedding_approved_domains WorkspaceSettingV2#aibi_dashboard_embedding_approved_domains}. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2Config.property.automaticClusterUpdateWorkspace">automaticClusterUpdateWorkspace</a></code> | <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspace">WorkspaceSettingV2AutomaticClusterUpdateWorkspace</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/workspace_setting_v2#automatic_cluster_update_workspace WorkspaceSettingV2#automatic_cluster_update_workspace}. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2Config.property.booleanVal">booleanVal</a></code> | <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2BooleanVal">WorkspaceSettingV2BooleanVal</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/workspace_setting_v2#boolean_val WorkspaceSettingV2#boolean_val}. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2Config.property.defaultDataSecurityMode">defaultDataSecurityMode</a></code> | <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2DefaultDataSecurityMode">WorkspaceSettingV2DefaultDataSecurityMode</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/workspace_setting_v2#default_data_security_mode WorkspaceSettingV2#default_data_security_mode}. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2Config.property.effectiveAibiDashboardEmbeddingAccessPolicy">effectiveAibiDashboardEmbeddingAccessPolicy</a></code> | <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingAccessPolicy">WorkspaceSettingV2EffectiveAibiDashboardEmbeddingAccessPolicy</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/workspace_setting_v2#effective_aibi_dashboard_embedding_access_policy WorkspaceSettingV2#effective_aibi_dashboard_embedding_access_policy}. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2Config.property.effectiveAibiDashboardEmbeddingApprovedDomains">effectiveAibiDashboardEmbeddingApprovedDomains</a></code> | <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingApprovedDomains">WorkspaceSettingV2EffectiveAibiDashboardEmbeddingApprovedDomains</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/workspace_setting_v2#effective_aibi_dashboard_embedding_approved_domains WorkspaceSettingV2#effective_aibi_dashboard_embedding_approved_domains}. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2Config.property.effectiveAutomaticClusterUpdateWorkspace">effectiveAutomaticClusterUpdateWorkspace</a></code> | <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspace">WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspace</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/workspace_setting_v2#effective_automatic_cluster_update_workspace WorkspaceSettingV2#effective_automatic_cluster_update_workspace}. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2Config.property.effectiveDefaultDataSecurityMode">effectiveDefaultDataSecurityMode</a></code> | <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveDefaultDataSecurityMode">WorkspaceSettingV2EffectiveDefaultDataSecurityMode</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/workspace_setting_v2#effective_default_data_security_mode WorkspaceSettingV2#effective_default_data_security_mode}. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2Config.property.effectivePersonalCompute">effectivePersonalCompute</a></code> | <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectivePersonalCompute">WorkspaceSettingV2EffectivePersonalCompute</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/workspace_setting_v2#effective_personal_compute WorkspaceSettingV2#effective_personal_compute}. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2Config.property.effectiveRestrictWorkspaceAdmins">effectiveRestrictWorkspaceAdmins</a></code> | <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveRestrictWorkspaceAdmins">WorkspaceSettingV2EffectiveRestrictWorkspaceAdmins</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/workspace_setting_v2#effective_restrict_workspace_admins WorkspaceSettingV2#effective_restrict_workspace_admins}. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2Config.property.integerVal">integerVal</a></code> | <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2IntegerVal">WorkspaceSettingV2IntegerVal</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/workspace_setting_v2#integer_val WorkspaceSettingV2#integer_val}. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2Config.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/workspace_setting_v2#name WorkspaceSettingV2#name}. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2Config.property.personalCompute">personalCompute</a></code> | <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2PersonalCompute">WorkspaceSettingV2PersonalCompute</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/workspace_setting_v2#personal_compute WorkspaceSettingV2#personal_compute}. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2Config.property.restrictWorkspaceAdmins">restrictWorkspaceAdmins</a></code> | <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2RestrictWorkspaceAdmins">WorkspaceSettingV2RestrictWorkspaceAdmins</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/workspace_setting_v2#restrict_workspace_admins WorkspaceSettingV2#restrict_workspace_admins}. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2Config.property.stringVal">stringVal</a></code> | <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2StringVal">WorkspaceSettingV2StringVal</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/workspace_setting_v2#string_val WorkspaceSettingV2#string_val}. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2Config.property.workspaceId">workspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/workspace_setting_v2#workspace_id WorkspaceSettingV2#workspace_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2Config.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2Config.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2Config.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2Config.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2Config.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2Config.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2Config.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `aibiDashboardEmbeddingAccessPolicy`<sup>Optional</sup> <a name="aibiDashboardEmbeddingAccessPolicy" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2Config.property.aibiDashboardEmbeddingAccessPolicy"></a>

```typescript
public readonly aibiDashboardEmbeddingAccessPolicy: WorkspaceSettingV2AibiDashboardEmbeddingAccessPolicy;
```

- *Type:* <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingAccessPolicy">WorkspaceSettingV2AibiDashboardEmbeddingAccessPolicy</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/workspace_setting_v2#aibi_dashboard_embedding_access_policy WorkspaceSettingV2#aibi_dashboard_embedding_access_policy}.

---

##### `aibiDashboardEmbeddingApprovedDomains`<sup>Optional</sup> <a name="aibiDashboardEmbeddingApprovedDomains" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2Config.property.aibiDashboardEmbeddingApprovedDomains"></a>

```typescript
public readonly aibiDashboardEmbeddingApprovedDomains: WorkspaceSettingV2AibiDashboardEmbeddingApprovedDomains;
```

- *Type:* <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingApprovedDomains">WorkspaceSettingV2AibiDashboardEmbeddingApprovedDomains</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/workspace_setting_v2#aibi_dashboard_embedding_approved_domains WorkspaceSettingV2#aibi_dashboard_embedding_approved_domains}.

---

##### `automaticClusterUpdateWorkspace`<sup>Optional</sup> <a name="automaticClusterUpdateWorkspace" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2Config.property.automaticClusterUpdateWorkspace"></a>

```typescript
public readonly automaticClusterUpdateWorkspace: WorkspaceSettingV2AutomaticClusterUpdateWorkspace;
```

- *Type:* <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspace">WorkspaceSettingV2AutomaticClusterUpdateWorkspace</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/workspace_setting_v2#automatic_cluster_update_workspace WorkspaceSettingV2#automatic_cluster_update_workspace}.

---

##### `booleanVal`<sup>Optional</sup> <a name="booleanVal" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2Config.property.booleanVal"></a>

```typescript
public readonly booleanVal: WorkspaceSettingV2BooleanVal;
```

- *Type:* <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2BooleanVal">WorkspaceSettingV2BooleanVal</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/workspace_setting_v2#boolean_val WorkspaceSettingV2#boolean_val}.

---

##### `defaultDataSecurityMode`<sup>Optional</sup> <a name="defaultDataSecurityMode" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2Config.property.defaultDataSecurityMode"></a>

```typescript
public readonly defaultDataSecurityMode: WorkspaceSettingV2DefaultDataSecurityMode;
```

- *Type:* <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2DefaultDataSecurityMode">WorkspaceSettingV2DefaultDataSecurityMode</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/workspace_setting_v2#default_data_security_mode WorkspaceSettingV2#default_data_security_mode}.

---

##### `effectiveAibiDashboardEmbeddingAccessPolicy`<sup>Optional</sup> <a name="effectiveAibiDashboardEmbeddingAccessPolicy" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2Config.property.effectiveAibiDashboardEmbeddingAccessPolicy"></a>

```typescript
public readonly effectiveAibiDashboardEmbeddingAccessPolicy: WorkspaceSettingV2EffectiveAibiDashboardEmbeddingAccessPolicy;
```

- *Type:* <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingAccessPolicy">WorkspaceSettingV2EffectiveAibiDashboardEmbeddingAccessPolicy</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/workspace_setting_v2#effective_aibi_dashboard_embedding_access_policy WorkspaceSettingV2#effective_aibi_dashboard_embedding_access_policy}.

---

##### `effectiveAibiDashboardEmbeddingApprovedDomains`<sup>Optional</sup> <a name="effectiveAibiDashboardEmbeddingApprovedDomains" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2Config.property.effectiveAibiDashboardEmbeddingApprovedDomains"></a>

```typescript
public readonly effectiveAibiDashboardEmbeddingApprovedDomains: WorkspaceSettingV2EffectiveAibiDashboardEmbeddingApprovedDomains;
```

- *Type:* <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingApprovedDomains">WorkspaceSettingV2EffectiveAibiDashboardEmbeddingApprovedDomains</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/workspace_setting_v2#effective_aibi_dashboard_embedding_approved_domains WorkspaceSettingV2#effective_aibi_dashboard_embedding_approved_domains}.

---

##### `effectiveAutomaticClusterUpdateWorkspace`<sup>Optional</sup> <a name="effectiveAutomaticClusterUpdateWorkspace" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2Config.property.effectiveAutomaticClusterUpdateWorkspace"></a>

```typescript
public readonly effectiveAutomaticClusterUpdateWorkspace: WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspace;
```

- *Type:* <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspace">WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspace</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/workspace_setting_v2#effective_automatic_cluster_update_workspace WorkspaceSettingV2#effective_automatic_cluster_update_workspace}.

---

##### `effectiveDefaultDataSecurityMode`<sup>Optional</sup> <a name="effectiveDefaultDataSecurityMode" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2Config.property.effectiveDefaultDataSecurityMode"></a>

```typescript
public readonly effectiveDefaultDataSecurityMode: WorkspaceSettingV2EffectiveDefaultDataSecurityMode;
```

- *Type:* <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveDefaultDataSecurityMode">WorkspaceSettingV2EffectiveDefaultDataSecurityMode</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/workspace_setting_v2#effective_default_data_security_mode WorkspaceSettingV2#effective_default_data_security_mode}.

---

##### `effectivePersonalCompute`<sup>Optional</sup> <a name="effectivePersonalCompute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2Config.property.effectivePersonalCompute"></a>

```typescript
public readonly effectivePersonalCompute: WorkspaceSettingV2EffectivePersonalCompute;
```

- *Type:* <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectivePersonalCompute">WorkspaceSettingV2EffectivePersonalCompute</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/workspace_setting_v2#effective_personal_compute WorkspaceSettingV2#effective_personal_compute}.

---

##### `effectiveRestrictWorkspaceAdmins`<sup>Optional</sup> <a name="effectiveRestrictWorkspaceAdmins" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2Config.property.effectiveRestrictWorkspaceAdmins"></a>

```typescript
public readonly effectiveRestrictWorkspaceAdmins: WorkspaceSettingV2EffectiveRestrictWorkspaceAdmins;
```

- *Type:* <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveRestrictWorkspaceAdmins">WorkspaceSettingV2EffectiveRestrictWorkspaceAdmins</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/workspace_setting_v2#effective_restrict_workspace_admins WorkspaceSettingV2#effective_restrict_workspace_admins}.

---

##### `integerVal`<sup>Optional</sup> <a name="integerVal" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2Config.property.integerVal"></a>

```typescript
public readonly integerVal: WorkspaceSettingV2IntegerVal;
```

- *Type:* <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2IntegerVal">WorkspaceSettingV2IntegerVal</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/workspace_setting_v2#integer_val WorkspaceSettingV2#integer_val}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2Config.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/workspace_setting_v2#name WorkspaceSettingV2#name}.

---

##### `personalCompute`<sup>Optional</sup> <a name="personalCompute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2Config.property.personalCompute"></a>

```typescript
public readonly personalCompute: WorkspaceSettingV2PersonalCompute;
```

- *Type:* <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2PersonalCompute">WorkspaceSettingV2PersonalCompute</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/workspace_setting_v2#personal_compute WorkspaceSettingV2#personal_compute}.

---

##### `restrictWorkspaceAdmins`<sup>Optional</sup> <a name="restrictWorkspaceAdmins" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2Config.property.restrictWorkspaceAdmins"></a>

```typescript
public readonly restrictWorkspaceAdmins: WorkspaceSettingV2RestrictWorkspaceAdmins;
```

- *Type:* <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2RestrictWorkspaceAdmins">WorkspaceSettingV2RestrictWorkspaceAdmins</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/workspace_setting_v2#restrict_workspace_admins WorkspaceSettingV2#restrict_workspace_admins}.

---

##### `stringVal`<sup>Optional</sup> <a name="stringVal" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2Config.property.stringVal"></a>

```typescript
public readonly stringVal: WorkspaceSettingV2StringVal;
```

- *Type:* <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2StringVal">WorkspaceSettingV2StringVal</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/workspace_setting_v2#string_val WorkspaceSettingV2#string_val}.

---

##### `workspaceId`<sup>Optional</sup> <a name="workspaceId" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2Config.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/workspace_setting_v2#workspace_id WorkspaceSettingV2#workspace_id}.

---

### WorkspaceSettingV2DefaultDataSecurityMode <a name="WorkspaceSettingV2DefaultDataSecurityMode" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2DefaultDataSecurityMode"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2DefaultDataSecurityMode.Initializer"></a>

```typescript
import { workspaceSettingV2 } from '@cdktf/provider-databricks'

const workspaceSettingV2DefaultDataSecurityMode: workspaceSettingV2.WorkspaceSettingV2DefaultDataSecurityMode = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2DefaultDataSecurityMode.property.status">status</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/workspace_setting_v2#status WorkspaceSettingV2#status}. |

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2DefaultDataSecurityMode.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/workspace_setting_v2#status WorkspaceSettingV2#status}.

---

### WorkspaceSettingV2EffectiveAibiDashboardEmbeddingAccessPolicy <a name="WorkspaceSettingV2EffectiveAibiDashboardEmbeddingAccessPolicy" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingAccessPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingAccessPolicy.Initializer"></a>

```typescript
import { workspaceSettingV2 } from '@cdktf/provider-databricks'

const workspaceSettingV2EffectiveAibiDashboardEmbeddingAccessPolicy: workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingAccessPolicy = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingAccessPolicy.property.accessPolicyType">accessPolicyType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/workspace_setting_v2#access_policy_type WorkspaceSettingV2#access_policy_type}. |

---

##### `accessPolicyType`<sup>Required</sup> <a name="accessPolicyType" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingAccessPolicy.property.accessPolicyType"></a>

```typescript
public readonly accessPolicyType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/workspace_setting_v2#access_policy_type WorkspaceSettingV2#access_policy_type}.

---

### WorkspaceSettingV2EffectiveAibiDashboardEmbeddingApprovedDomains <a name="WorkspaceSettingV2EffectiveAibiDashboardEmbeddingApprovedDomains" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingApprovedDomains"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingApprovedDomains.Initializer"></a>

```typescript
import { workspaceSettingV2 } from '@cdktf/provider-databricks'

const workspaceSettingV2EffectiveAibiDashboardEmbeddingApprovedDomains: workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingApprovedDomains = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingApprovedDomains.property.approvedDomains">approvedDomains</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/workspace_setting_v2#approved_domains WorkspaceSettingV2#approved_domains}. |

---

##### `approvedDomains`<sup>Optional</sup> <a name="approvedDomains" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingApprovedDomains.property.approvedDomains"></a>

```typescript
public readonly approvedDomains: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/workspace_setting_v2#approved_domains WorkspaceSettingV2#approved_domains}.

---

### WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspace <a name="WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspace" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspace"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspace.Initializer"></a>

```typescript
import { workspaceSettingV2 } from '@cdktf/provider-databricks'

const workspaceSettingV2EffectiveAutomaticClusterUpdateWorkspace: workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspace = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspace.property.canToggle">canToggle</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/workspace_setting_v2#can_toggle WorkspaceSettingV2#can_toggle}. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspace.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/workspace_setting_v2#enabled WorkspaceSettingV2#enabled}. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspace.property.enablementDetails">enablementDetails</a></code> | <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetails">WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetails</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/workspace_setting_v2#enablement_details WorkspaceSettingV2#enablement_details}. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspace.property.maintenanceWindow">maintenanceWindow</a></code> | <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindow">WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindow</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/workspace_setting_v2#maintenance_window WorkspaceSettingV2#maintenance_window}. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspace.property.restartEvenIfNoUpdatesAvailable">restartEvenIfNoUpdatesAvailable</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/workspace_setting_v2#restart_even_if_no_updates_available WorkspaceSettingV2#restart_even_if_no_updates_available}. |

---

##### `canToggle`<sup>Optional</sup> <a name="canToggle" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspace.property.canToggle"></a>

```typescript
public readonly canToggle: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/workspace_setting_v2#can_toggle WorkspaceSettingV2#can_toggle}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspace.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/workspace_setting_v2#enabled WorkspaceSettingV2#enabled}.

---

##### `enablementDetails`<sup>Optional</sup> <a name="enablementDetails" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspace.property.enablementDetails"></a>

```typescript
public readonly enablementDetails: WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetails;
```

- *Type:* <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetails">WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetails</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/workspace_setting_v2#enablement_details WorkspaceSettingV2#enablement_details}.

---

##### `maintenanceWindow`<sup>Optional</sup> <a name="maintenanceWindow" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspace.property.maintenanceWindow"></a>

```typescript
public readonly maintenanceWindow: WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindow;
```

- *Type:* <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindow">WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindow</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/workspace_setting_v2#maintenance_window WorkspaceSettingV2#maintenance_window}.

---

##### `restartEvenIfNoUpdatesAvailable`<sup>Optional</sup> <a name="restartEvenIfNoUpdatesAvailable" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspace.property.restartEvenIfNoUpdatesAvailable"></a>

```typescript
public readonly restartEvenIfNoUpdatesAvailable: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/workspace_setting_v2#restart_even_if_no_updates_available WorkspaceSettingV2#restart_even_if_no_updates_available}.

---

### WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetails <a name="WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetails" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetails"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetails.Initializer"></a>

```typescript
import { workspaceSettingV2 } from '@cdktf/provider-databricks'

const workspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetails: workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetails = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetails.property.forcedForComplianceMode">forcedForComplianceMode</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/workspace_setting_v2#forced_for_compliance_mode WorkspaceSettingV2#forced_for_compliance_mode}. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetails.property.unavailableForDisabledEntitlement">unavailableForDisabledEntitlement</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/workspace_setting_v2#unavailable_for_disabled_entitlement WorkspaceSettingV2#unavailable_for_disabled_entitlement}. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetails.property.unavailableForNonEnterpriseTier">unavailableForNonEnterpriseTier</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/workspace_setting_v2#unavailable_for_non_enterprise_tier WorkspaceSettingV2#unavailable_for_non_enterprise_tier}. |

---

##### `forcedForComplianceMode`<sup>Optional</sup> <a name="forcedForComplianceMode" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetails.property.forcedForComplianceMode"></a>

```typescript
public readonly forcedForComplianceMode: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/workspace_setting_v2#forced_for_compliance_mode WorkspaceSettingV2#forced_for_compliance_mode}.

---

##### `unavailableForDisabledEntitlement`<sup>Optional</sup> <a name="unavailableForDisabledEntitlement" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetails.property.unavailableForDisabledEntitlement"></a>

```typescript
public readonly unavailableForDisabledEntitlement: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/workspace_setting_v2#unavailable_for_disabled_entitlement WorkspaceSettingV2#unavailable_for_disabled_entitlement}.

---

##### `unavailableForNonEnterpriseTier`<sup>Optional</sup> <a name="unavailableForNonEnterpriseTier" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetails.property.unavailableForNonEnterpriseTier"></a>

```typescript
public readonly unavailableForNonEnterpriseTier: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/workspace_setting_v2#unavailable_for_non_enterprise_tier WorkspaceSettingV2#unavailable_for_non_enterprise_tier}.

---

### WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindow <a name="WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindow" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindow"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindow.Initializer"></a>

```typescript
import { workspaceSettingV2 } from '@cdktf/provider-databricks'

const workspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindow: workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindow = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindow.property.weekDayBasedSchedule">weekDayBasedSchedule</a></code> | <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule">WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/workspace_setting_v2#week_day_based_schedule WorkspaceSettingV2#week_day_based_schedule}. |

---

##### `weekDayBasedSchedule`<sup>Optional</sup> <a name="weekDayBasedSchedule" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindow.property.weekDayBasedSchedule"></a>

```typescript
public readonly weekDayBasedSchedule: WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule;
```

- *Type:* <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule">WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/workspace_setting_v2#week_day_based_schedule WorkspaceSettingV2#week_day_based_schedule}.

---

### WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule <a name="WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule.Initializer"></a>

```typescript
import { workspaceSettingV2 } from '@cdktf/provider-databricks'

const workspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule: workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule.property.dayOfWeek">dayOfWeek</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/workspace_setting_v2#day_of_week WorkspaceSettingV2#day_of_week}. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule.property.frequency">frequency</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/workspace_setting_v2#frequency WorkspaceSettingV2#frequency}. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule.property.windowStartTime">windowStartTime</a></code> | <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime">WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/workspace_setting_v2#window_start_time WorkspaceSettingV2#window_start_time}. |

---

##### `dayOfWeek`<sup>Optional</sup> <a name="dayOfWeek" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule.property.dayOfWeek"></a>

```typescript
public readonly dayOfWeek: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/workspace_setting_v2#day_of_week WorkspaceSettingV2#day_of_week}.

---

##### `frequency`<sup>Optional</sup> <a name="frequency" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule.property.frequency"></a>

```typescript
public readonly frequency: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/workspace_setting_v2#frequency WorkspaceSettingV2#frequency}.

---

##### `windowStartTime`<sup>Optional</sup> <a name="windowStartTime" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule.property.windowStartTime"></a>

```typescript
public readonly windowStartTime: WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime;
```

- *Type:* <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime">WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/workspace_setting_v2#window_start_time WorkspaceSettingV2#window_start_time}.

---

### WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime <a name="WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime.Initializer"></a>

```typescript
import { workspaceSettingV2 } from '@cdktf/provider-databricks'

const workspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime: workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime.property.hours">hours</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/workspace_setting_v2#hours WorkspaceSettingV2#hours}. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime.property.minutes">minutes</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/workspace_setting_v2#minutes WorkspaceSettingV2#minutes}. |

---

##### `hours`<sup>Optional</sup> <a name="hours" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime.property.hours"></a>

```typescript
public readonly hours: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/workspace_setting_v2#hours WorkspaceSettingV2#hours}.

---

##### `minutes`<sup>Optional</sup> <a name="minutes" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime.property.minutes"></a>

```typescript
public readonly minutes: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/workspace_setting_v2#minutes WorkspaceSettingV2#minutes}.

---

### WorkspaceSettingV2EffectiveBooleanVal <a name="WorkspaceSettingV2EffectiveBooleanVal" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveBooleanVal"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveBooleanVal.Initializer"></a>

```typescript
import { workspaceSettingV2 } from '@cdktf/provider-databricks'

const workspaceSettingV2EffectiveBooleanVal: workspaceSettingV2.WorkspaceSettingV2EffectiveBooleanVal = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveBooleanVal.property.value">value</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/workspace_setting_v2#value WorkspaceSettingV2#value}. |

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveBooleanVal.property.value"></a>

```typescript
public readonly value: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/workspace_setting_v2#value WorkspaceSettingV2#value}.

---

### WorkspaceSettingV2EffectiveDefaultDataSecurityMode <a name="WorkspaceSettingV2EffectiveDefaultDataSecurityMode" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveDefaultDataSecurityMode"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveDefaultDataSecurityMode.Initializer"></a>

```typescript
import { workspaceSettingV2 } from '@cdktf/provider-databricks'

const workspaceSettingV2EffectiveDefaultDataSecurityMode: workspaceSettingV2.WorkspaceSettingV2EffectiveDefaultDataSecurityMode = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveDefaultDataSecurityMode.property.status">status</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/workspace_setting_v2#status WorkspaceSettingV2#status}. |

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveDefaultDataSecurityMode.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/workspace_setting_v2#status WorkspaceSettingV2#status}.

---

### WorkspaceSettingV2EffectiveIntegerVal <a name="WorkspaceSettingV2EffectiveIntegerVal" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveIntegerVal"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveIntegerVal.Initializer"></a>

```typescript
import { workspaceSettingV2 } from '@cdktf/provider-databricks'

const workspaceSettingV2EffectiveIntegerVal: workspaceSettingV2.WorkspaceSettingV2EffectiveIntegerVal = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveIntegerVal.property.value">value</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/workspace_setting_v2#value WorkspaceSettingV2#value}. |

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveIntegerVal.property.value"></a>

```typescript
public readonly value: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/workspace_setting_v2#value WorkspaceSettingV2#value}.

---

### WorkspaceSettingV2EffectivePersonalCompute <a name="WorkspaceSettingV2EffectivePersonalCompute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectivePersonalCompute"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectivePersonalCompute.Initializer"></a>

```typescript
import { workspaceSettingV2 } from '@cdktf/provider-databricks'

const workspaceSettingV2EffectivePersonalCompute: workspaceSettingV2.WorkspaceSettingV2EffectivePersonalCompute = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectivePersonalCompute.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/workspace_setting_v2#value WorkspaceSettingV2#value}. |

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectivePersonalCompute.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/workspace_setting_v2#value WorkspaceSettingV2#value}.

---

### WorkspaceSettingV2EffectiveRestrictWorkspaceAdmins <a name="WorkspaceSettingV2EffectiveRestrictWorkspaceAdmins" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveRestrictWorkspaceAdmins"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveRestrictWorkspaceAdmins.Initializer"></a>

```typescript
import { workspaceSettingV2 } from '@cdktf/provider-databricks'

const workspaceSettingV2EffectiveRestrictWorkspaceAdmins: workspaceSettingV2.WorkspaceSettingV2EffectiveRestrictWorkspaceAdmins = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveRestrictWorkspaceAdmins.property.status">status</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/workspace_setting_v2#status WorkspaceSettingV2#status}. |

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveRestrictWorkspaceAdmins.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/workspace_setting_v2#status WorkspaceSettingV2#status}.

---

### WorkspaceSettingV2EffectiveStringVal <a name="WorkspaceSettingV2EffectiveStringVal" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveStringVal"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveStringVal.Initializer"></a>

```typescript
import { workspaceSettingV2 } from '@cdktf/provider-databricks'

const workspaceSettingV2EffectiveStringVal: workspaceSettingV2.WorkspaceSettingV2EffectiveStringVal = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveStringVal.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/workspace_setting_v2#value WorkspaceSettingV2#value}. |

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveStringVal.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/workspace_setting_v2#value WorkspaceSettingV2#value}.

---

### WorkspaceSettingV2IntegerVal <a name="WorkspaceSettingV2IntegerVal" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2IntegerVal"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2IntegerVal.Initializer"></a>

```typescript
import { workspaceSettingV2 } from '@cdktf/provider-databricks'

const workspaceSettingV2IntegerVal: workspaceSettingV2.WorkspaceSettingV2IntegerVal = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2IntegerVal.property.value">value</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/workspace_setting_v2#value WorkspaceSettingV2#value}. |

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2IntegerVal.property.value"></a>

```typescript
public readonly value: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/workspace_setting_v2#value WorkspaceSettingV2#value}.

---

### WorkspaceSettingV2PersonalCompute <a name="WorkspaceSettingV2PersonalCompute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2PersonalCompute"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2PersonalCompute.Initializer"></a>

```typescript
import { workspaceSettingV2 } from '@cdktf/provider-databricks'

const workspaceSettingV2PersonalCompute: workspaceSettingV2.WorkspaceSettingV2PersonalCompute = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2PersonalCompute.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/workspace_setting_v2#value WorkspaceSettingV2#value}. |

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2PersonalCompute.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/workspace_setting_v2#value WorkspaceSettingV2#value}.

---

### WorkspaceSettingV2RestrictWorkspaceAdmins <a name="WorkspaceSettingV2RestrictWorkspaceAdmins" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2RestrictWorkspaceAdmins"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2RestrictWorkspaceAdmins.Initializer"></a>

```typescript
import { workspaceSettingV2 } from '@cdktf/provider-databricks'

const workspaceSettingV2RestrictWorkspaceAdmins: workspaceSettingV2.WorkspaceSettingV2RestrictWorkspaceAdmins = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2RestrictWorkspaceAdmins.property.status">status</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/workspace_setting_v2#status WorkspaceSettingV2#status}. |

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2RestrictWorkspaceAdmins.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/workspace_setting_v2#status WorkspaceSettingV2#status}.

---

### WorkspaceSettingV2StringVal <a name="WorkspaceSettingV2StringVal" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2StringVal"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2StringVal.Initializer"></a>

```typescript
import { workspaceSettingV2 } from '@cdktf/provider-databricks'

const workspaceSettingV2StringVal: workspaceSettingV2.WorkspaceSettingV2StringVal = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2StringVal.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/workspace_setting_v2#value WorkspaceSettingV2#value}. |

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2StringVal.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/workspace_setting_v2#value WorkspaceSettingV2#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### WorkspaceSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference <a name="WorkspaceSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference.Initializer"></a>

```typescript
import { workspaceSettingV2 } from '@cdktf/provider-databricks'

new workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference.property.accessPolicyTypeInput">accessPolicyTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference.property.accessPolicyType">accessPolicyType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingAccessPolicy">WorkspaceSettingV2AibiDashboardEmbeddingAccessPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `accessPolicyTypeInput`<sup>Optional</sup> <a name="accessPolicyTypeInput" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference.property.accessPolicyTypeInput"></a>

```typescript
public readonly accessPolicyTypeInput: string;
```

- *Type:* string

---

##### `accessPolicyType`<sup>Required</sup> <a name="accessPolicyType" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference.property.accessPolicyType"></a>

```typescript
public readonly accessPolicyType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | WorkspaceSettingV2AibiDashboardEmbeddingAccessPolicy;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingAccessPolicy">WorkspaceSettingV2AibiDashboardEmbeddingAccessPolicy</a>

---


### WorkspaceSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference <a name="WorkspaceSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference.Initializer"></a>

```typescript
import { workspaceSettingV2 } from '@cdktf/provider-databricks'

new workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference.resetApprovedDomains">resetApprovedDomains</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetApprovedDomains` <a name="resetApprovedDomains" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference.resetApprovedDomains"></a>

```typescript
public resetApprovedDomains(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference.property.approvedDomainsInput">approvedDomainsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference.property.approvedDomains">approvedDomains</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingApprovedDomains">WorkspaceSettingV2AibiDashboardEmbeddingApprovedDomains</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `approvedDomainsInput`<sup>Optional</sup> <a name="approvedDomainsInput" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference.property.approvedDomainsInput"></a>

```typescript
public readonly approvedDomainsInput: string[];
```

- *Type:* string[]

---

##### `approvedDomains`<sup>Required</sup> <a name="approvedDomains" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference.property.approvedDomains"></a>

```typescript
public readonly approvedDomains: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | WorkspaceSettingV2AibiDashboardEmbeddingApprovedDomains;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AibiDashboardEmbeddingApprovedDomains">WorkspaceSettingV2AibiDashboardEmbeddingApprovedDomains</a>

---


### WorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference <a name="WorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.Initializer"></a>

```typescript
import { workspaceSettingV2 } from '@cdktf/provider-databricks'

new workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.resetForcedForComplianceMode">resetForcedForComplianceMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.resetUnavailableForDisabledEntitlement">resetUnavailableForDisabledEntitlement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.resetUnavailableForNonEnterpriseTier">resetUnavailableForNonEnterpriseTier</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetForcedForComplianceMode` <a name="resetForcedForComplianceMode" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.resetForcedForComplianceMode"></a>

```typescript
public resetForcedForComplianceMode(): void
```

##### `resetUnavailableForDisabledEntitlement` <a name="resetUnavailableForDisabledEntitlement" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.resetUnavailableForDisabledEntitlement"></a>

```typescript
public resetUnavailableForDisabledEntitlement(): void
```

##### `resetUnavailableForNonEnterpriseTier` <a name="resetUnavailableForNonEnterpriseTier" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.resetUnavailableForNonEnterpriseTier"></a>

```typescript
public resetUnavailableForNonEnterpriseTier(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.property.forcedForComplianceModeInput">forcedForComplianceModeInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.property.unavailableForDisabledEntitlementInput">unavailableForDisabledEntitlementInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.property.unavailableForNonEnterpriseTierInput">unavailableForNonEnterpriseTierInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.property.forcedForComplianceMode">forcedForComplianceMode</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.property.unavailableForDisabledEntitlement">unavailableForDisabledEntitlement</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.property.unavailableForNonEnterpriseTier">unavailableForNonEnterpriseTier</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetails">WorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `forcedForComplianceModeInput`<sup>Optional</sup> <a name="forcedForComplianceModeInput" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.property.forcedForComplianceModeInput"></a>

```typescript
public readonly forcedForComplianceModeInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `unavailableForDisabledEntitlementInput`<sup>Optional</sup> <a name="unavailableForDisabledEntitlementInput" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.property.unavailableForDisabledEntitlementInput"></a>

```typescript
public readonly unavailableForDisabledEntitlementInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `unavailableForNonEnterpriseTierInput`<sup>Optional</sup> <a name="unavailableForNonEnterpriseTierInput" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.property.unavailableForNonEnterpriseTierInput"></a>

```typescript
public readonly unavailableForNonEnterpriseTierInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `forcedForComplianceMode`<sup>Required</sup> <a name="forcedForComplianceMode" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.property.forcedForComplianceMode"></a>

```typescript
public readonly forcedForComplianceMode: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `unavailableForDisabledEntitlement`<sup>Required</sup> <a name="unavailableForDisabledEntitlement" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.property.unavailableForDisabledEntitlement"></a>

```typescript
public readonly unavailableForDisabledEntitlement: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `unavailableForNonEnterpriseTier`<sup>Required</sup> <a name="unavailableForNonEnterpriseTier" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.property.unavailableForNonEnterpriseTier"></a>

```typescript
public readonly unavailableForNonEnterpriseTier: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | WorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetails;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetails">WorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetails</a>

---


### WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference <a name="WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.Initializer"></a>

```typescript
import { workspaceSettingV2 } from '@cdktf/provider-databricks'

new workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.putWeekDayBasedSchedule">putWeekDayBasedSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.resetWeekDayBasedSchedule">resetWeekDayBasedSchedule</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putWeekDayBasedSchedule` <a name="putWeekDayBasedSchedule" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.putWeekDayBasedSchedule"></a>

```typescript
public putWeekDayBasedSchedule(value: WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.putWeekDayBasedSchedule.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule">WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule</a>

---

##### `resetWeekDayBasedSchedule` <a name="resetWeekDayBasedSchedule" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.resetWeekDayBasedSchedule"></a>

```typescript
public resetWeekDayBasedSchedule(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.property.weekDayBasedSchedule">weekDayBasedSchedule</a></code> | <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference">WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.property.weekDayBasedScheduleInput">weekDayBasedScheduleInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule">WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindow">WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindow</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `weekDayBasedSchedule`<sup>Required</sup> <a name="weekDayBasedSchedule" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.property.weekDayBasedSchedule"></a>

```typescript
public readonly weekDayBasedSchedule: WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference;
```

- *Type:* <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference">WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference</a>

---

##### `weekDayBasedScheduleInput`<sup>Optional</sup> <a name="weekDayBasedScheduleInput" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.property.weekDayBasedScheduleInput"></a>

```typescript
public readonly weekDayBasedScheduleInput: IResolvable | WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule">WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindow;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindow">WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindow</a>

---


### WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference <a name="WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.Initializer"></a>

```typescript
import { workspaceSettingV2 } from '@cdktf/provider-databricks'

new workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.putWindowStartTime">putWindowStartTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.resetDayOfWeek">resetDayOfWeek</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.resetFrequency">resetFrequency</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.resetWindowStartTime">resetWindowStartTime</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putWindowStartTime` <a name="putWindowStartTime" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.putWindowStartTime"></a>

```typescript
public putWindowStartTime(value: WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.putWindowStartTime.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime">WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime</a>

---

##### `resetDayOfWeek` <a name="resetDayOfWeek" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.resetDayOfWeek"></a>

```typescript
public resetDayOfWeek(): void
```

##### `resetFrequency` <a name="resetFrequency" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.resetFrequency"></a>

```typescript
public resetFrequency(): void
```

##### `resetWindowStartTime` <a name="resetWindowStartTime" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.resetWindowStartTime"></a>

```typescript
public resetWindowStartTime(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.property.windowStartTime">windowStartTime</a></code> | <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference">WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.property.dayOfWeekInput">dayOfWeekInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.property.frequencyInput">frequencyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.property.windowStartTimeInput">windowStartTimeInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime">WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.property.dayOfWeek">dayOfWeek</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.property.frequency">frequency</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule">WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `windowStartTime`<sup>Required</sup> <a name="windowStartTime" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.property.windowStartTime"></a>

```typescript
public readonly windowStartTime: WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference;
```

- *Type:* <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference">WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference</a>

---

##### `dayOfWeekInput`<sup>Optional</sup> <a name="dayOfWeekInput" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.property.dayOfWeekInput"></a>

```typescript
public readonly dayOfWeekInput: string;
```

- *Type:* string

---

##### `frequencyInput`<sup>Optional</sup> <a name="frequencyInput" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.property.frequencyInput"></a>

```typescript
public readonly frequencyInput: string;
```

- *Type:* string

---

##### `windowStartTimeInput`<sup>Optional</sup> <a name="windowStartTimeInput" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.property.windowStartTimeInput"></a>

```typescript
public readonly windowStartTimeInput: IResolvable | WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime">WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime</a>

---

##### `dayOfWeek`<sup>Required</sup> <a name="dayOfWeek" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.property.dayOfWeek"></a>

```typescript
public readonly dayOfWeek: string;
```

- *Type:* string

---

##### `frequency`<sup>Required</sup> <a name="frequency" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.property.frequency"></a>

```typescript
public readonly frequency: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule">WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule</a>

---


### WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference <a name="WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.Initializer"></a>

```typescript
import { workspaceSettingV2 } from '@cdktf/provider-databricks'

new workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.resetHours">resetHours</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.resetMinutes">resetMinutes</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetHours` <a name="resetHours" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.resetHours"></a>

```typescript
public resetHours(): void
```

##### `resetMinutes` <a name="resetMinutes" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.resetMinutes"></a>

```typescript
public resetMinutes(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.property.hoursInput">hoursInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.property.minutesInput">minutesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.property.hours">hours</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.property.minutes">minutes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime">WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `hoursInput`<sup>Optional</sup> <a name="hoursInput" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.property.hoursInput"></a>

```typescript
public readonly hoursInput: number;
```

- *Type:* number

---

##### `minutesInput`<sup>Optional</sup> <a name="minutesInput" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.property.minutesInput"></a>

```typescript
public readonly minutesInput: number;
```

- *Type:* number

---

##### `hours`<sup>Required</sup> <a name="hours" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.property.hours"></a>

```typescript
public readonly hours: number;
```

- *Type:* number

---

##### `minutes`<sup>Required</sup> <a name="minutes" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.property.minutes"></a>

```typescript
public readonly minutes: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime">WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime</a>

---


### WorkspaceSettingV2AutomaticClusterUpdateWorkspaceOutputReference <a name="WorkspaceSettingV2AutomaticClusterUpdateWorkspaceOutputReference" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceOutputReference.Initializer"></a>

```typescript
import { workspaceSettingV2 } from '@cdktf/provider-databricks'

new workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceOutputReference.putEnablementDetails">putEnablementDetails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceOutputReference.putMaintenanceWindow">putMaintenanceWindow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceOutputReference.resetCanToggle">resetCanToggle</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceOutputReference.resetEnablementDetails">resetEnablementDetails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceOutputReference.resetMaintenanceWindow">resetMaintenanceWindow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceOutputReference.resetRestartEvenIfNoUpdatesAvailable">resetRestartEvenIfNoUpdatesAvailable</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putEnablementDetails` <a name="putEnablementDetails" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceOutputReference.putEnablementDetails"></a>

```typescript
public putEnablementDetails(value: WorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetails): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceOutputReference.putEnablementDetails.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetails">WorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetails</a>

---

##### `putMaintenanceWindow` <a name="putMaintenanceWindow" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceOutputReference.putMaintenanceWindow"></a>

```typescript
public putMaintenanceWindow(value: WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindow): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceOutputReference.putMaintenanceWindow.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindow">WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindow</a>

---

##### `resetCanToggle` <a name="resetCanToggle" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceOutputReference.resetCanToggle"></a>

```typescript
public resetCanToggle(): void
```

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceOutputReference.resetEnabled"></a>

```typescript
public resetEnabled(): void
```

##### `resetEnablementDetails` <a name="resetEnablementDetails" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceOutputReference.resetEnablementDetails"></a>

```typescript
public resetEnablementDetails(): void
```

##### `resetMaintenanceWindow` <a name="resetMaintenanceWindow" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceOutputReference.resetMaintenanceWindow"></a>

```typescript
public resetMaintenanceWindow(): void
```

##### `resetRestartEvenIfNoUpdatesAvailable` <a name="resetRestartEvenIfNoUpdatesAvailable" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceOutputReference.resetRestartEvenIfNoUpdatesAvailable"></a>

```typescript
public resetRestartEvenIfNoUpdatesAvailable(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceOutputReference.property.enablementDetails">enablementDetails</a></code> | <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference">WorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceOutputReference.property.maintenanceWindow">maintenanceWindow</a></code> | <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference">WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceOutputReference.property.canToggleInput">canToggleInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceOutputReference.property.enablementDetailsInput">enablementDetailsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetails">WorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceOutputReference.property.maintenanceWindowInput">maintenanceWindowInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindow">WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceOutputReference.property.restartEvenIfNoUpdatesAvailableInput">restartEvenIfNoUpdatesAvailableInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceOutputReference.property.canToggle">canToggle</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceOutputReference.property.restartEvenIfNoUpdatesAvailable">restartEvenIfNoUpdatesAvailable</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspace">WorkspaceSettingV2AutomaticClusterUpdateWorkspace</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enablementDetails`<sup>Required</sup> <a name="enablementDetails" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceOutputReference.property.enablementDetails"></a>

```typescript
public readonly enablementDetails: WorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference">WorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference</a>

---

##### `maintenanceWindow`<sup>Required</sup> <a name="maintenanceWindow" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceOutputReference.property.maintenanceWindow"></a>

```typescript
public readonly maintenanceWindow: WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference;
```

- *Type:* <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference">WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference</a>

---

##### `canToggleInput`<sup>Optional</sup> <a name="canToggleInput" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceOutputReference.property.canToggleInput"></a>

```typescript
public readonly canToggleInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enablementDetailsInput`<sup>Optional</sup> <a name="enablementDetailsInput" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceOutputReference.property.enablementDetailsInput"></a>

```typescript
public readonly enablementDetailsInput: IResolvable | WorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetails;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetails">WorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetails</a>

---

##### `maintenanceWindowInput`<sup>Optional</sup> <a name="maintenanceWindowInput" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceOutputReference.property.maintenanceWindowInput"></a>

```typescript
public readonly maintenanceWindowInput: IResolvable | WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindow;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindow">WorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindow</a>

---

##### `restartEvenIfNoUpdatesAvailableInput`<sup>Optional</sup> <a name="restartEvenIfNoUpdatesAvailableInput" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceOutputReference.property.restartEvenIfNoUpdatesAvailableInput"></a>

```typescript
public readonly restartEvenIfNoUpdatesAvailableInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `canToggle`<sup>Required</sup> <a name="canToggle" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceOutputReference.property.canToggle"></a>

```typescript
public readonly canToggle: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `restartEvenIfNoUpdatesAvailable`<sup>Required</sup> <a name="restartEvenIfNoUpdatesAvailable" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceOutputReference.property.restartEvenIfNoUpdatesAvailable"></a>

```typescript
public readonly restartEvenIfNoUpdatesAvailable: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspaceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | WorkspaceSettingV2AutomaticClusterUpdateWorkspace;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2AutomaticClusterUpdateWorkspace">WorkspaceSettingV2AutomaticClusterUpdateWorkspace</a>

---


### WorkspaceSettingV2BooleanValOutputReference <a name="WorkspaceSettingV2BooleanValOutputReference" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2BooleanValOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2BooleanValOutputReference.Initializer"></a>

```typescript
import { workspaceSettingV2 } from '@cdktf/provider-databricks'

new workspaceSettingV2.WorkspaceSettingV2BooleanValOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2BooleanValOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2BooleanValOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2BooleanValOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2BooleanValOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2BooleanValOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2BooleanValOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2BooleanValOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2BooleanValOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2BooleanValOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2BooleanValOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2BooleanValOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2BooleanValOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2BooleanValOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2BooleanValOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2BooleanValOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2BooleanValOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2BooleanValOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2BooleanValOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2BooleanValOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2BooleanValOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2BooleanValOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2BooleanValOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2BooleanValOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2BooleanValOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2BooleanValOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2BooleanValOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2BooleanValOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2BooleanValOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2BooleanValOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2BooleanValOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2BooleanValOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2BooleanValOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2BooleanValOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2BooleanValOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2BooleanValOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2BooleanValOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2BooleanValOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2BooleanValOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2BooleanValOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2BooleanValOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2BooleanValOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2BooleanValOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetValue` <a name="resetValue" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2BooleanValOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2BooleanValOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2BooleanValOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2BooleanValOutputReference.property.valueInput">valueInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2BooleanValOutputReference.property.value">value</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2BooleanValOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2BooleanVal">WorkspaceSettingV2BooleanVal</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2BooleanValOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2BooleanValOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2BooleanValOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2BooleanValOutputReference.property.value"></a>

```typescript
public readonly value: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2BooleanValOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | WorkspaceSettingV2BooleanVal;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2BooleanVal">WorkspaceSettingV2BooleanVal</a>

---


### WorkspaceSettingV2DefaultDataSecurityModeOutputReference <a name="WorkspaceSettingV2DefaultDataSecurityModeOutputReference" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2DefaultDataSecurityModeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2DefaultDataSecurityModeOutputReference.Initializer"></a>

```typescript
import { workspaceSettingV2 } from '@cdktf/provider-databricks'

new workspaceSettingV2.WorkspaceSettingV2DefaultDataSecurityModeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2DefaultDataSecurityModeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2DefaultDataSecurityModeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2DefaultDataSecurityModeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2DefaultDataSecurityModeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2DefaultDataSecurityModeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2DefaultDataSecurityModeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2DefaultDataSecurityModeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2DefaultDataSecurityModeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2DefaultDataSecurityModeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2DefaultDataSecurityModeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2DefaultDataSecurityModeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2DefaultDataSecurityModeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2DefaultDataSecurityModeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2DefaultDataSecurityModeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2DefaultDataSecurityModeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2DefaultDataSecurityModeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2DefaultDataSecurityModeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2DefaultDataSecurityModeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2DefaultDataSecurityModeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2DefaultDataSecurityModeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2DefaultDataSecurityModeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2DefaultDataSecurityModeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2DefaultDataSecurityModeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2DefaultDataSecurityModeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2DefaultDataSecurityModeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2DefaultDataSecurityModeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2DefaultDataSecurityModeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2DefaultDataSecurityModeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2DefaultDataSecurityModeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2DefaultDataSecurityModeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2DefaultDataSecurityModeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2DefaultDataSecurityModeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2DefaultDataSecurityModeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2DefaultDataSecurityModeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2DefaultDataSecurityModeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2DefaultDataSecurityModeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2DefaultDataSecurityModeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2DefaultDataSecurityModeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2DefaultDataSecurityModeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2DefaultDataSecurityModeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2DefaultDataSecurityModeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2DefaultDataSecurityModeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2DefaultDataSecurityModeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2DefaultDataSecurityModeOutputReference.property.statusInput">statusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2DefaultDataSecurityModeOutputReference.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2DefaultDataSecurityModeOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2DefaultDataSecurityMode">WorkspaceSettingV2DefaultDataSecurityMode</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2DefaultDataSecurityModeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2DefaultDataSecurityModeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2DefaultDataSecurityModeOutputReference.property.statusInput"></a>

```typescript
public readonly statusInput: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2DefaultDataSecurityModeOutputReference.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2DefaultDataSecurityModeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | WorkspaceSettingV2DefaultDataSecurityMode;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2DefaultDataSecurityMode">WorkspaceSettingV2DefaultDataSecurityMode</a>

---


### WorkspaceSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference <a name="WorkspaceSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference.Initializer"></a>

```typescript
import { workspaceSettingV2 } from '@cdktf/provider-databricks'

new workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference.property.accessPolicyTypeInput">accessPolicyTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference.property.accessPolicyType">accessPolicyType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingAccessPolicy">WorkspaceSettingV2EffectiveAibiDashboardEmbeddingAccessPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `accessPolicyTypeInput`<sup>Optional</sup> <a name="accessPolicyTypeInput" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference.property.accessPolicyTypeInput"></a>

```typescript
public readonly accessPolicyTypeInput: string;
```

- *Type:* string

---

##### `accessPolicyType`<sup>Required</sup> <a name="accessPolicyType" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference.property.accessPolicyType"></a>

```typescript
public readonly accessPolicyType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | WorkspaceSettingV2EffectiveAibiDashboardEmbeddingAccessPolicy;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingAccessPolicy">WorkspaceSettingV2EffectiveAibiDashboardEmbeddingAccessPolicy</a>

---


### WorkspaceSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference <a name="WorkspaceSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference.Initializer"></a>

```typescript
import { workspaceSettingV2 } from '@cdktf/provider-databricks'

new workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference.resetApprovedDomains">resetApprovedDomains</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetApprovedDomains` <a name="resetApprovedDomains" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference.resetApprovedDomains"></a>

```typescript
public resetApprovedDomains(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference.property.approvedDomainsInput">approvedDomainsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference.property.approvedDomains">approvedDomains</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingApprovedDomains">WorkspaceSettingV2EffectiveAibiDashboardEmbeddingApprovedDomains</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `approvedDomainsInput`<sup>Optional</sup> <a name="approvedDomainsInput" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference.property.approvedDomainsInput"></a>

```typescript
public readonly approvedDomainsInput: string[];
```

- *Type:* string[]

---

##### `approvedDomains`<sup>Required</sup> <a name="approvedDomains" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference.property.approvedDomains"></a>

```typescript
public readonly approvedDomains: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | WorkspaceSettingV2EffectiveAibiDashboardEmbeddingApprovedDomains;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAibiDashboardEmbeddingApprovedDomains">WorkspaceSettingV2EffectiveAibiDashboardEmbeddingApprovedDomains</a>

---


### WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference <a name="WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.Initializer"></a>

```typescript
import { workspaceSettingV2 } from '@cdktf/provider-databricks'

new workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.resetForcedForComplianceMode">resetForcedForComplianceMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.resetUnavailableForDisabledEntitlement">resetUnavailableForDisabledEntitlement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.resetUnavailableForNonEnterpriseTier">resetUnavailableForNonEnterpriseTier</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetForcedForComplianceMode` <a name="resetForcedForComplianceMode" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.resetForcedForComplianceMode"></a>

```typescript
public resetForcedForComplianceMode(): void
```

##### `resetUnavailableForDisabledEntitlement` <a name="resetUnavailableForDisabledEntitlement" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.resetUnavailableForDisabledEntitlement"></a>

```typescript
public resetUnavailableForDisabledEntitlement(): void
```

##### `resetUnavailableForNonEnterpriseTier` <a name="resetUnavailableForNonEnterpriseTier" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.resetUnavailableForNonEnterpriseTier"></a>

```typescript
public resetUnavailableForNonEnterpriseTier(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.property.forcedForComplianceModeInput">forcedForComplianceModeInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.property.unavailableForDisabledEntitlementInput">unavailableForDisabledEntitlementInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.property.unavailableForNonEnterpriseTierInput">unavailableForNonEnterpriseTierInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.property.forcedForComplianceMode">forcedForComplianceMode</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.property.unavailableForDisabledEntitlement">unavailableForDisabledEntitlement</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.property.unavailableForNonEnterpriseTier">unavailableForNonEnterpriseTier</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetails">WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `forcedForComplianceModeInput`<sup>Optional</sup> <a name="forcedForComplianceModeInput" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.property.forcedForComplianceModeInput"></a>

```typescript
public readonly forcedForComplianceModeInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `unavailableForDisabledEntitlementInput`<sup>Optional</sup> <a name="unavailableForDisabledEntitlementInput" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.property.unavailableForDisabledEntitlementInput"></a>

```typescript
public readonly unavailableForDisabledEntitlementInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `unavailableForNonEnterpriseTierInput`<sup>Optional</sup> <a name="unavailableForNonEnterpriseTierInput" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.property.unavailableForNonEnterpriseTierInput"></a>

```typescript
public readonly unavailableForNonEnterpriseTierInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `forcedForComplianceMode`<sup>Required</sup> <a name="forcedForComplianceMode" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.property.forcedForComplianceMode"></a>

```typescript
public readonly forcedForComplianceMode: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `unavailableForDisabledEntitlement`<sup>Required</sup> <a name="unavailableForDisabledEntitlement" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.property.unavailableForDisabledEntitlement"></a>

```typescript
public readonly unavailableForDisabledEntitlement: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `unavailableForNonEnterpriseTier`<sup>Required</sup> <a name="unavailableForNonEnterpriseTier" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.property.unavailableForNonEnterpriseTier"></a>

```typescript
public readonly unavailableForNonEnterpriseTier: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetails;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetails">WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetails</a>

---


### WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference <a name="WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.Initializer"></a>

```typescript
import { workspaceSettingV2 } from '@cdktf/provider-databricks'

new workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.putWeekDayBasedSchedule">putWeekDayBasedSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.resetWeekDayBasedSchedule">resetWeekDayBasedSchedule</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putWeekDayBasedSchedule` <a name="putWeekDayBasedSchedule" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.putWeekDayBasedSchedule"></a>

```typescript
public putWeekDayBasedSchedule(value: WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.putWeekDayBasedSchedule.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule">WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule</a>

---

##### `resetWeekDayBasedSchedule` <a name="resetWeekDayBasedSchedule" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.resetWeekDayBasedSchedule"></a>

```typescript
public resetWeekDayBasedSchedule(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.property.weekDayBasedSchedule">weekDayBasedSchedule</a></code> | <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference">WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.property.weekDayBasedScheduleInput">weekDayBasedScheduleInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule">WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindow">WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindow</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `weekDayBasedSchedule`<sup>Required</sup> <a name="weekDayBasedSchedule" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.property.weekDayBasedSchedule"></a>

```typescript
public readonly weekDayBasedSchedule: WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference;
```

- *Type:* <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference">WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference</a>

---

##### `weekDayBasedScheduleInput`<sup>Optional</sup> <a name="weekDayBasedScheduleInput" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.property.weekDayBasedScheduleInput"></a>

```typescript
public readonly weekDayBasedScheduleInput: IResolvable | WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule">WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindow;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindow">WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindow</a>

---


### WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference <a name="WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.Initializer"></a>

```typescript
import { workspaceSettingV2 } from '@cdktf/provider-databricks'

new workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.putWindowStartTime">putWindowStartTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.resetDayOfWeek">resetDayOfWeek</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.resetFrequency">resetFrequency</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.resetWindowStartTime">resetWindowStartTime</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putWindowStartTime` <a name="putWindowStartTime" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.putWindowStartTime"></a>

```typescript
public putWindowStartTime(value: WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.putWindowStartTime.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime">WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime</a>

---

##### `resetDayOfWeek` <a name="resetDayOfWeek" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.resetDayOfWeek"></a>

```typescript
public resetDayOfWeek(): void
```

##### `resetFrequency` <a name="resetFrequency" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.resetFrequency"></a>

```typescript
public resetFrequency(): void
```

##### `resetWindowStartTime` <a name="resetWindowStartTime" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.resetWindowStartTime"></a>

```typescript
public resetWindowStartTime(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.property.windowStartTime">windowStartTime</a></code> | <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference">WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.property.dayOfWeekInput">dayOfWeekInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.property.frequencyInput">frequencyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.property.windowStartTimeInput">windowStartTimeInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime">WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.property.dayOfWeek">dayOfWeek</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.property.frequency">frequency</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule">WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `windowStartTime`<sup>Required</sup> <a name="windowStartTime" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.property.windowStartTime"></a>

```typescript
public readonly windowStartTime: WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference;
```

- *Type:* <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference">WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference</a>

---

##### `dayOfWeekInput`<sup>Optional</sup> <a name="dayOfWeekInput" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.property.dayOfWeekInput"></a>

```typescript
public readonly dayOfWeekInput: string;
```

- *Type:* string

---

##### `frequencyInput`<sup>Optional</sup> <a name="frequencyInput" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.property.frequencyInput"></a>

```typescript
public readonly frequencyInput: string;
```

- *Type:* string

---

##### `windowStartTimeInput`<sup>Optional</sup> <a name="windowStartTimeInput" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.property.windowStartTimeInput"></a>

```typescript
public readonly windowStartTimeInput: IResolvable | WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime">WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime</a>

---

##### `dayOfWeek`<sup>Required</sup> <a name="dayOfWeek" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.property.dayOfWeek"></a>

```typescript
public readonly dayOfWeek: string;
```

- *Type:* string

---

##### `frequency`<sup>Required</sup> <a name="frequency" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.property.frequency"></a>

```typescript
public readonly frequency: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule">WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule</a>

---


### WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference <a name="WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.Initializer"></a>

```typescript
import { workspaceSettingV2 } from '@cdktf/provider-databricks'

new workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.resetHours">resetHours</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.resetMinutes">resetMinutes</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetHours` <a name="resetHours" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.resetHours"></a>

```typescript
public resetHours(): void
```

##### `resetMinutes` <a name="resetMinutes" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.resetMinutes"></a>

```typescript
public resetMinutes(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.property.hoursInput">hoursInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.property.minutesInput">minutesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.property.hours">hours</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.property.minutes">minutes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime">WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `hoursInput`<sup>Optional</sup> <a name="hoursInput" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.property.hoursInput"></a>

```typescript
public readonly hoursInput: number;
```

- *Type:* number

---

##### `minutesInput`<sup>Optional</sup> <a name="minutesInput" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.property.minutesInput"></a>

```typescript
public readonly minutesInput: number;
```

- *Type:* number

---

##### `hours`<sup>Required</sup> <a name="hours" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.property.hours"></a>

```typescript
public readonly hours: number;
```

- *Type:* number

---

##### `minutes`<sup>Required</sup> <a name="minutes" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.property.minutes"></a>

```typescript
public readonly minutes: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime">WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime</a>

---


### WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference <a name="WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.Initializer"></a>

```typescript
import { workspaceSettingV2 } from '@cdktf/provider-databricks'

new workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.putEnablementDetails">putEnablementDetails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.putMaintenanceWindow">putMaintenanceWindow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.resetCanToggle">resetCanToggle</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.resetEnablementDetails">resetEnablementDetails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.resetMaintenanceWindow">resetMaintenanceWindow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.resetRestartEvenIfNoUpdatesAvailable">resetRestartEvenIfNoUpdatesAvailable</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putEnablementDetails` <a name="putEnablementDetails" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.putEnablementDetails"></a>

```typescript
public putEnablementDetails(value: WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetails): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.putEnablementDetails.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetails">WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetails</a>

---

##### `putMaintenanceWindow` <a name="putMaintenanceWindow" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.putMaintenanceWindow"></a>

```typescript
public putMaintenanceWindow(value: WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindow): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.putMaintenanceWindow.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindow">WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindow</a>

---

##### `resetCanToggle` <a name="resetCanToggle" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.resetCanToggle"></a>

```typescript
public resetCanToggle(): void
```

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.resetEnabled"></a>

```typescript
public resetEnabled(): void
```

##### `resetEnablementDetails` <a name="resetEnablementDetails" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.resetEnablementDetails"></a>

```typescript
public resetEnablementDetails(): void
```

##### `resetMaintenanceWindow` <a name="resetMaintenanceWindow" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.resetMaintenanceWindow"></a>

```typescript
public resetMaintenanceWindow(): void
```

##### `resetRestartEvenIfNoUpdatesAvailable` <a name="resetRestartEvenIfNoUpdatesAvailable" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.resetRestartEvenIfNoUpdatesAvailable"></a>

```typescript
public resetRestartEvenIfNoUpdatesAvailable(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.property.enablementDetails">enablementDetails</a></code> | <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference">WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.property.maintenanceWindow">maintenanceWindow</a></code> | <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference">WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.property.canToggleInput">canToggleInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.property.enablementDetailsInput">enablementDetailsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetails">WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.property.maintenanceWindowInput">maintenanceWindowInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindow">WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.property.restartEvenIfNoUpdatesAvailableInput">restartEvenIfNoUpdatesAvailableInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.property.canToggle">canToggle</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.property.restartEvenIfNoUpdatesAvailable">restartEvenIfNoUpdatesAvailable</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspace">WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspace</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enablementDetails`<sup>Required</sup> <a name="enablementDetails" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.property.enablementDetails"></a>

```typescript
public readonly enablementDetails: WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference">WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference</a>

---

##### `maintenanceWindow`<sup>Required</sup> <a name="maintenanceWindow" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.property.maintenanceWindow"></a>

```typescript
public readonly maintenanceWindow: WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference;
```

- *Type:* <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference">WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference</a>

---

##### `canToggleInput`<sup>Optional</sup> <a name="canToggleInput" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.property.canToggleInput"></a>

```typescript
public readonly canToggleInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enablementDetailsInput`<sup>Optional</sup> <a name="enablementDetailsInput" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.property.enablementDetailsInput"></a>

```typescript
public readonly enablementDetailsInput: IResolvable | WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetails;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetails">WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetails</a>

---

##### `maintenanceWindowInput`<sup>Optional</sup> <a name="maintenanceWindowInput" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.property.maintenanceWindowInput"></a>

```typescript
public readonly maintenanceWindowInput: IResolvable | WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindow;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindow">WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindow</a>

---

##### `restartEvenIfNoUpdatesAvailableInput`<sup>Optional</sup> <a name="restartEvenIfNoUpdatesAvailableInput" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.property.restartEvenIfNoUpdatesAvailableInput"></a>

```typescript
public readonly restartEvenIfNoUpdatesAvailableInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `canToggle`<sup>Required</sup> <a name="canToggle" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.property.canToggle"></a>

```typescript
public readonly canToggle: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `restartEvenIfNoUpdatesAvailable`<sup>Required</sup> <a name="restartEvenIfNoUpdatesAvailable" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.property.restartEvenIfNoUpdatesAvailable"></a>

```typescript
public readonly restartEvenIfNoUpdatesAvailable: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspace;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspace">WorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspace</a>

---


### WorkspaceSettingV2EffectiveBooleanValOutputReference <a name="WorkspaceSettingV2EffectiveBooleanValOutputReference" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveBooleanValOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveBooleanValOutputReference.Initializer"></a>

```typescript
import { workspaceSettingV2 } from '@cdktf/provider-databricks'

new workspaceSettingV2.WorkspaceSettingV2EffectiveBooleanValOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveBooleanValOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveBooleanValOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveBooleanValOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveBooleanValOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveBooleanValOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveBooleanValOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveBooleanValOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveBooleanValOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveBooleanValOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveBooleanValOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveBooleanValOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveBooleanValOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveBooleanValOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveBooleanValOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveBooleanValOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveBooleanValOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveBooleanValOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveBooleanValOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveBooleanValOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveBooleanValOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveBooleanValOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveBooleanValOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveBooleanValOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveBooleanValOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveBooleanValOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveBooleanValOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveBooleanValOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveBooleanValOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveBooleanValOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveBooleanValOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveBooleanValOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveBooleanValOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveBooleanValOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveBooleanValOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveBooleanValOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveBooleanValOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveBooleanValOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveBooleanValOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveBooleanValOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveBooleanValOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveBooleanValOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveBooleanValOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetValue` <a name="resetValue" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveBooleanValOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveBooleanValOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveBooleanValOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveBooleanValOutputReference.property.valueInput">valueInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveBooleanValOutputReference.property.value">value</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveBooleanValOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveBooleanVal">WorkspaceSettingV2EffectiveBooleanVal</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveBooleanValOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveBooleanValOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveBooleanValOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveBooleanValOutputReference.property.value"></a>

```typescript
public readonly value: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveBooleanValOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: WorkspaceSettingV2EffectiveBooleanVal;
```

- *Type:* <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveBooleanVal">WorkspaceSettingV2EffectiveBooleanVal</a>

---


### WorkspaceSettingV2EffectiveDefaultDataSecurityModeOutputReference <a name="WorkspaceSettingV2EffectiveDefaultDataSecurityModeOutputReference" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveDefaultDataSecurityModeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveDefaultDataSecurityModeOutputReference.Initializer"></a>

```typescript
import { workspaceSettingV2 } from '@cdktf/provider-databricks'

new workspaceSettingV2.WorkspaceSettingV2EffectiveDefaultDataSecurityModeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveDefaultDataSecurityModeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveDefaultDataSecurityModeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveDefaultDataSecurityModeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveDefaultDataSecurityModeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveDefaultDataSecurityModeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveDefaultDataSecurityModeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveDefaultDataSecurityModeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveDefaultDataSecurityModeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveDefaultDataSecurityModeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveDefaultDataSecurityModeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveDefaultDataSecurityModeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveDefaultDataSecurityModeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveDefaultDataSecurityModeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveDefaultDataSecurityModeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveDefaultDataSecurityModeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveDefaultDataSecurityModeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveDefaultDataSecurityModeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveDefaultDataSecurityModeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveDefaultDataSecurityModeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveDefaultDataSecurityModeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveDefaultDataSecurityModeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveDefaultDataSecurityModeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveDefaultDataSecurityModeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveDefaultDataSecurityModeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveDefaultDataSecurityModeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveDefaultDataSecurityModeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveDefaultDataSecurityModeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveDefaultDataSecurityModeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveDefaultDataSecurityModeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveDefaultDataSecurityModeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveDefaultDataSecurityModeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveDefaultDataSecurityModeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveDefaultDataSecurityModeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveDefaultDataSecurityModeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveDefaultDataSecurityModeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveDefaultDataSecurityModeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveDefaultDataSecurityModeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveDefaultDataSecurityModeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveDefaultDataSecurityModeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveDefaultDataSecurityModeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveDefaultDataSecurityModeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveDefaultDataSecurityModeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveDefaultDataSecurityModeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveDefaultDataSecurityModeOutputReference.property.statusInput">statusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveDefaultDataSecurityModeOutputReference.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveDefaultDataSecurityModeOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveDefaultDataSecurityMode">WorkspaceSettingV2EffectiveDefaultDataSecurityMode</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveDefaultDataSecurityModeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveDefaultDataSecurityModeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveDefaultDataSecurityModeOutputReference.property.statusInput"></a>

```typescript
public readonly statusInput: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveDefaultDataSecurityModeOutputReference.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveDefaultDataSecurityModeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | WorkspaceSettingV2EffectiveDefaultDataSecurityMode;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveDefaultDataSecurityMode">WorkspaceSettingV2EffectiveDefaultDataSecurityMode</a>

---


### WorkspaceSettingV2EffectiveIntegerValOutputReference <a name="WorkspaceSettingV2EffectiveIntegerValOutputReference" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveIntegerValOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveIntegerValOutputReference.Initializer"></a>

```typescript
import { workspaceSettingV2 } from '@cdktf/provider-databricks'

new workspaceSettingV2.WorkspaceSettingV2EffectiveIntegerValOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveIntegerValOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveIntegerValOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveIntegerValOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveIntegerValOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveIntegerValOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveIntegerValOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveIntegerValOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveIntegerValOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveIntegerValOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveIntegerValOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveIntegerValOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveIntegerValOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveIntegerValOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveIntegerValOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveIntegerValOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveIntegerValOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveIntegerValOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveIntegerValOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveIntegerValOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveIntegerValOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveIntegerValOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveIntegerValOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveIntegerValOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveIntegerValOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveIntegerValOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveIntegerValOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveIntegerValOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveIntegerValOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveIntegerValOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveIntegerValOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveIntegerValOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveIntegerValOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveIntegerValOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveIntegerValOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveIntegerValOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveIntegerValOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveIntegerValOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveIntegerValOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveIntegerValOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveIntegerValOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveIntegerValOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveIntegerValOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetValue` <a name="resetValue" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveIntegerValOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveIntegerValOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveIntegerValOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveIntegerValOutputReference.property.valueInput">valueInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveIntegerValOutputReference.property.value">value</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveIntegerValOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveIntegerVal">WorkspaceSettingV2EffectiveIntegerVal</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveIntegerValOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveIntegerValOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveIntegerValOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: number;
```

- *Type:* number

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveIntegerValOutputReference.property.value"></a>

```typescript
public readonly value: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveIntegerValOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: WorkspaceSettingV2EffectiveIntegerVal;
```

- *Type:* <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveIntegerVal">WorkspaceSettingV2EffectiveIntegerVal</a>

---


### WorkspaceSettingV2EffectivePersonalComputeOutputReference <a name="WorkspaceSettingV2EffectivePersonalComputeOutputReference" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectivePersonalComputeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectivePersonalComputeOutputReference.Initializer"></a>

```typescript
import { workspaceSettingV2 } from '@cdktf/provider-databricks'

new workspaceSettingV2.WorkspaceSettingV2EffectivePersonalComputeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectivePersonalComputeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectivePersonalComputeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectivePersonalComputeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectivePersonalComputeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectivePersonalComputeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectivePersonalComputeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectivePersonalComputeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectivePersonalComputeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectivePersonalComputeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectivePersonalComputeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectivePersonalComputeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectivePersonalComputeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectivePersonalComputeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectivePersonalComputeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectivePersonalComputeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectivePersonalComputeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectivePersonalComputeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectivePersonalComputeOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectivePersonalComputeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectivePersonalComputeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectivePersonalComputeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectivePersonalComputeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectivePersonalComputeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectivePersonalComputeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectivePersonalComputeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectivePersonalComputeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectivePersonalComputeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectivePersonalComputeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectivePersonalComputeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectivePersonalComputeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectivePersonalComputeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectivePersonalComputeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectivePersonalComputeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectivePersonalComputeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectivePersonalComputeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectivePersonalComputeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectivePersonalComputeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectivePersonalComputeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectivePersonalComputeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectivePersonalComputeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectivePersonalComputeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectivePersonalComputeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetValue` <a name="resetValue" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectivePersonalComputeOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectivePersonalComputeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectivePersonalComputeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectivePersonalComputeOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectivePersonalComputeOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectivePersonalComputeOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectivePersonalCompute">WorkspaceSettingV2EffectivePersonalCompute</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectivePersonalComputeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectivePersonalComputeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectivePersonalComputeOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectivePersonalComputeOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectivePersonalComputeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | WorkspaceSettingV2EffectivePersonalCompute;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectivePersonalCompute">WorkspaceSettingV2EffectivePersonalCompute</a>

---


### WorkspaceSettingV2EffectiveRestrictWorkspaceAdminsOutputReference <a name="WorkspaceSettingV2EffectiveRestrictWorkspaceAdminsOutputReference" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveRestrictWorkspaceAdminsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveRestrictWorkspaceAdminsOutputReference.Initializer"></a>

```typescript
import { workspaceSettingV2 } from '@cdktf/provider-databricks'

new workspaceSettingV2.WorkspaceSettingV2EffectiveRestrictWorkspaceAdminsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveRestrictWorkspaceAdminsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveRestrictWorkspaceAdminsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveRestrictWorkspaceAdminsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveRestrictWorkspaceAdminsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveRestrictWorkspaceAdminsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveRestrictWorkspaceAdminsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveRestrictWorkspaceAdminsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveRestrictWorkspaceAdminsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveRestrictWorkspaceAdminsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveRestrictWorkspaceAdminsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveRestrictWorkspaceAdminsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveRestrictWorkspaceAdminsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveRestrictWorkspaceAdminsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveRestrictWorkspaceAdminsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveRestrictWorkspaceAdminsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveRestrictWorkspaceAdminsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveRestrictWorkspaceAdminsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveRestrictWorkspaceAdminsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveRestrictWorkspaceAdminsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveRestrictWorkspaceAdminsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveRestrictWorkspaceAdminsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveRestrictWorkspaceAdminsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveRestrictWorkspaceAdminsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveRestrictWorkspaceAdminsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveRestrictWorkspaceAdminsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveRestrictWorkspaceAdminsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveRestrictWorkspaceAdminsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveRestrictWorkspaceAdminsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveRestrictWorkspaceAdminsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveRestrictWorkspaceAdminsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveRestrictWorkspaceAdminsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveRestrictWorkspaceAdminsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveRestrictWorkspaceAdminsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveRestrictWorkspaceAdminsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveRestrictWorkspaceAdminsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveRestrictWorkspaceAdminsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveRestrictWorkspaceAdminsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveRestrictWorkspaceAdminsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveRestrictWorkspaceAdminsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveRestrictWorkspaceAdminsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveRestrictWorkspaceAdminsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveRestrictWorkspaceAdminsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveRestrictWorkspaceAdminsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveRestrictWorkspaceAdminsOutputReference.property.statusInput">statusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveRestrictWorkspaceAdminsOutputReference.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveRestrictWorkspaceAdminsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveRestrictWorkspaceAdmins">WorkspaceSettingV2EffectiveRestrictWorkspaceAdmins</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveRestrictWorkspaceAdminsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveRestrictWorkspaceAdminsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveRestrictWorkspaceAdminsOutputReference.property.statusInput"></a>

```typescript
public readonly statusInput: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveRestrictWorkspaceAdminsOutputReference.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveRestrictWorkspaceAdminsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | WorkspaceSettingV2EffectiveRestrictWorkspaceAdmins;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveRestrictWorkspaceAdmins">WorkspaceSettingV2EffectiveRestrictWorkspaceAdmins</a>

---


### WorkspaceSettingV2EffectiveStringValOutputReference <a name="WorkspaceSettingV2EffectiveStringValOutputReference" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveStringValOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveStringValOutputReference.Initializer"></a>

```typescript
import { workspaceSettingV2 } from '@cdktf/provider-databricks'

new workspaceSettingV2.WorkspaceSettingV2EffectiveStringValOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveStringValOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveStringValOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveStringValOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveStringValOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveStringValOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveStringValOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveStringValOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveStringValOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveStringValOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveStringValOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveStringValOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveStringValOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveStringValOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveStringValOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveStringValOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveStringValOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveStringValOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveStringValOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveStringValOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveStringValOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveStringValOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveStringValOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveStringValOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveStringValOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveStringValOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveStringValOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveStringValOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveStringValOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveStringValOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveStringValOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveStringValOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveStringValOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveStringValOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveStringValOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveStringValOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveStringValOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveStringValOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveStringValOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveStringValOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveStringValOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveStringValOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveStringValOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetValue` <a name="resetValue" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveStringValOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveStringValOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveStringValOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveStringValOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveStringValOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveStringValOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveStringVal">WorkspaceSettingV2EffectiveStringVal</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveStringValOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveStringValOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveStringValOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveStringValOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveStringValOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: WorkspaceSettingV2EffectiveStringVal;
```

- *Type:* <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2EffectiveStringVal">WorkspaceSettingV2EffectiveStringVal</a>

---


### WorkspaceSettingV2IntegerValOutputReference <a name="WorkspaceSettingV2IntegerValOutputReference" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2IntegerValOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2IntegerValOutputReference.Initializer"></a>

```typescript
import { workspaceSettingV2 } from '@cdktf/provider-databricks'

new workspaceSettingV2.WorkspaceSettingV2IntegerValOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2IntegerValOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2IntegerValOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2IntegerValOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2IntegerValOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2IntegerValOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2IntegerValOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2IntegerValOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2IntegerValOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2IntegerValOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2IntegerValOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2IntegerValOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2IntegerValOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2IntegerValOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2IntegerValOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2IntegerValOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2IntegerValOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2IntegerValOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2IntegerValOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2IntegerValOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2IntegerValOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2IntegerValOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2IntegerValOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2IntegerValOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2IntegerValOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2IntegerValOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2IntegerValOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2IntegerValOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2IntegerValOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2IntegerValOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2IntegerValOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2IntegerValOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2IntegerValOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2IntegerValOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2IntegerValOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2IntegerValOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2IntegerValOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2IntegerValOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2IntegerValOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2IntegerValOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2IntegerValOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2IntegerValOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2IntegerValOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetValue` <a name="resetValue" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2IntegerValOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2IntegerValOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2IntegerValOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2IntegerValOutputReference.property.valueInput">valueInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2IntegerValOutputReference.property.value">value</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2IntegerValOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2IntegerVal">WorkspaceSettingV2IntegerVal</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2IntegerValOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2IntegerValOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2IntegerValOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: number;
```

- *Type:* number

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2IntegerValOutputReference.property.value"></a>

```typescript
public readonly value: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2IntegerValOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | WorkspaceSettingV2IntegerVal;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2IntegerVal">WorkspaceSettingV2IntegerVal</a>

---


### WorkspaceSettingV2PersonalComputeOutputReference <a name="WorkspaceSettingV2PersonalComputeOutputReference" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2PersonalComputeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2PersonalComputeOutputReference.Initializer"></a>

```typescript
import { workspaceSettingV2 } from '@cdktf/provider-databricks'

new workspaceSettingV2.WorkspaceSettingV2PersonalComputeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2PersonalComputeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2PersonalComputeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2PersonalComputeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2PersonalComputeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2PersonalComputeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2PersonalComputeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2PersonalComputeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2PersonalComputeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2PersonalComputeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2PersonalComputeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2PersonalComputeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2PersonalComputeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2PersonalComputeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2PersonalComputeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2PersonalComputeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2PersonalComputeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2PersonalComputeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2PersonalComputeOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2PersonalComputeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2PersonalComputeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2PersonalComputeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2PersonalComputeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2PersonalComputeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2PersonalComputeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2PersonalComputeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2PersonalComputeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2PersonalComputeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2PersonalComputeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2PersonalComputeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2PersonalComputeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2PersonalComputeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2PersonalComputeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2PersonalComputeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2PersonalComputeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2PersonalComputeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2PersonalComputeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2PersonalComputeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2PersonalComputeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2PersonalComputeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2PersonalComputeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2PersonalComputeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2PersonalComputeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetValue` <a name="resetValue" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2PersonalComputeOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2PersonalComputeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2PersonalComputeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2PersonalComputeOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2PersonalComputeOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2PersonalComputeOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2PersonalCompute">WorkspaceSettingV2PersonalCompute</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2PersonalComputeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2PersonalComputeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2PersonalComputeOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2PersonalComputeOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2PersonalComputeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | WorkspaceSettingV2PersonalCompute;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2PersonalCompute">WorkspaceSettingV2PersonalCompute</a>

---


### WorkspaceSettingV2RestrictWorkspaceAdminsOutputReference <a name="WorkspaceSettingV2RestrictWorkspaceAdminsOutputReference" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2RestrictWorkspaceAdminsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2RestrictWorkspaceAdminsOutputReference.Initializer"></a>

```typescript
import { workspaceSettingV2 } from '@cdktf/provider-databricks'

new workspaceSettingV2.WorkspaceSettingV2RestrictWorkspaceAdminsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2RestrictWorkspaceAdminsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2RestrictWorkspaceAdminsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2RestrictWorkspaceAdminsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2RestrictWorkspaceAdminsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2RestrictWorkspaceAdminsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2RestrictWorkspaceAdminsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2RestrictWorkspaceAdminsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2RestrictWorkspaceAdminsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2RestrictWorkspaceAdminsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2RestrictWorkspaceAdminsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2RestrictWorkspaceAdminsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2RestrictWorkspaceAdminsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2RestrictWorkspaceAdminsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2RestrictWorkspaceAdminsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2RestrictWorkspaceAdminsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2RestrictWorkspaceAdminsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2RestrictWorkspaceAdminsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2RestrictWorkspaceAdminsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2RestrictWorkspaceAdminsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2RestrictWorkspaceAdminsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2RestrictWorkspaceAdminsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2RestrictWorkspaceAdminsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2RestrictWorkspaceAdminsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2RestrictWorkspaceAdminsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2RestrictWorkspaceAdminsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2RestrictWorkspaceAdminsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2RestrictWorkspaceAdminsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2RestrictWorkspaceAdminsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2RestrictWorkspaceAdminsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2RestrictWorkspaceAdminsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2RestrictWorkspaceAdminsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2RestrictWorkspaceAdminsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2RestrictWorkspaceAdminsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2RestrictWorkspaceAdminsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2RestrictWorkspaceAdminsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2RestrictWorkspaceAdminsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2RestrictWorkspaceAdminsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2RestrictWorkspaceAdminsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2RestrictWorkspaceAdminsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2RestrictWorkspaceAdminsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2RestrictWorkspaceAdminsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2RestrictWorkspaceAdminsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2RestrictWorkspaceAdminsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2RestrictWorkspaceAdminsOutputReference.property.statusInput">statusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2RestrictWorkspaceAdminsOutputReference.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2RestrictWorkspaceAdminsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2RestrictWorkspaceAdmins">WorkspaceSettingV2RestrictWorkspaceAdmins</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2RestrictWorkspaceAdminsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2RestrictWorkspaceAdminsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2RestrictWorkspaceAdminsOutputReference.property.statusInput"></a>

```typescript
public readonly statusInput: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2RestrictWorkspaceAdminsOutputReference.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2RestrictWorkspaceAdminsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | WorkspaceSettingV2RestrictWorkspaceAdmins;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2RestrictWorkspaceAdmins">WorkspaceSettingV2RestrictWorkspaceAdmins</a>

---


### WorkspaceSettingV2StringValOutputReference <a name="WorkspaceSettingV2StringValOutputReference" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2StringValOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2StringValOutputReference.Initializer"></a>

```typescript
import { workspaceSettingV2 } from '@cdktf/provider-databricks'

new workspaceSettingV2.WorkspaceSettingV2StringValOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2StringValOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2StringValOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2StringValOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2StringValOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2StringValOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2StringValOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2StringValOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2StringValOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2StringValOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2StringValOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2StringValOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2StringValOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2StringValOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2StringValOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2StringValOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2StringValOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2StringValOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2StringValOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2StringValOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2StringValOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2StringValOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2StringValOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2StringValOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2StringValOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2StringValOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2StringValOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2StringValOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2StringValOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2StringValOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2StringValOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2StringValOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2StringValOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2StringValOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2StringValOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2StringValOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2StringValOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2StringValOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2StringValOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2StringValOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2StringValOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2StringValOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2StringValOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetValue` <a name="resetValue" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2StringValOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2StringValOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2StringValOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2StringValOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2StringValOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2StringValOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2StringVal">WorkspaceSettingV2StringVal</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2StringValOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2StringValOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2StringValOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2StringValOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2StringValOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | WorkspaceSettingV2StringVal;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.workspaceSettingV2.WorkspaceSettingV2StringVal">WorkspaceSettingV2StringVal</a>

---



