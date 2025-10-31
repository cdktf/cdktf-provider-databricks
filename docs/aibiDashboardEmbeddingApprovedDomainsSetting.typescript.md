# `aibiDashboardEmbeddingApprovedDomainsSetting` Submodule <a name="`aibiDashboardEmbeddingApprovedDomainsSetting` Submodule" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AibiDashboardEmbeddingApprovedDomainsSetting <a name="AibiDashboardEmbeddingApprovedDomainsSetting" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/aibi_dashboard_embedding_approved_domains_setting databricks_aibi_dashboard_embedding_approved_domains_setting}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.Initializer"></a>

```typescript
import { aibiDashboardEmbeddingApprovedDomainsSetting } from '@cdktf/provider-databricks'

new aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting(scope: Construct, id: string, config: AibiDashboardEmbeddingApprovedDomainsSettingConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingConfig">AibiDashboardEmbeddingApprovedDomainsSettingConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingConfig">AibiDashboardEmbeddingApprovedDomainsSettingConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.putAibiDashboardEmbeddingApprovedDomains">putAibiDashboardEmbeddingApprovedDomains</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.resetEtag">resetEtag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.resetSettingName">resetSettingName</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAibiDashboardEmbeddingApprovedDomains` <a name="putAibiDashboardEmbeddingApprovedDomains" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.putAibiDashboardEmbeddingApprovedDomains"></a>

```typescript
public putAibiDashboardEmbeddingApprovedDomains(value: AibiDashboardEmbeddingApprovedDomainsSettingAibiDashboardEmbeddingApprovedDomains): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.putAibiDashboardEmbeddingApprovedDomains.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingAibiDashboardEmbeddingApprovedDomains">AibiDashboardEmbeddingApprovedDomainsSettingAibiDashboardEmbeddingApprovedDomains</a>

---

##### `resetEtag` <a name="resetEtag" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.resetEtag"></a>

```typescript
public resetEtag(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.resetId"></a>

```typescript
public resetId(): void
```

##### `resetSettingName` <a name="resetSettingName" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.resetSettingName"></a>

```typescript
public resetSettingName(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a AibiDashboardEmbeddingApprovedDomainsSetting resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.isConstruct"></a>

```typescript
import { aibiDashboardEmbeddingApprovedDomainsSetting } from '@cdktf/provider-databricks'

aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.isTerraformElement"></a>

```typescript
import { aibiDashboardEmbeddingApprovedDomainsSetting } from '@cdktf/provider-databricks'

aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.isTerraformResource"></a>

```typescript
import { aibiDashboardEmbeddingApprovedDomainsSetting } from '@cdktf/provider-databricks'

aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.generateConfigForImport"></a>

```typescript
import { aibiDashboardEmbeddingApprovedDomainsSetting } from '@cdktf/provider-databricks'

aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a AibiDashboardEmbeddingApprovedDomainsSetting resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the AibiDashboardEmbeddingApprovedDomainsSetting to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing AibiDashboardEmbeddingApprovedDomainsSetting that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/aibi_dashboard_embedding_approved_domains_setting#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the AibiDashboardEmbeddingApprovedDomainsSetting to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.property.aibiDashboardEmbeddingApprovedDomains">aibiDashboardEmbeddingApprovedDomains</a></code> | <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingAibiDashboardEmbeddingApprovedDomainsOutputReference">AibiDashboardEmbeddingApprovedDomainsSettingAibiDashboardEmbeddingApprovedDomainsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.property.aibiDashboardEmbeddingApprovedDomainsInput">aibiDashboardEmbeddingApprovedDomainsInput</a></code> | <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingAibiDashboardEmbeddingApprovedDomains">AibiDashboardEmbeddingApprovedDomainsSettingAibiDashboardEmbeddingApprovedDomains</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.property.etagInput">etagInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.property.settingNameInput">settingNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.property.etag">etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.property.settingName">settingName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `aibiDashboardEmbeddingApprovedDomains`<sup>Required</sup> <a name="aibiDashboardEmbeddingApprovedDomains" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.property.aibiDashboardEmbeddingApprovedDomains"></a>

```typescript
public readonly aibiDashboardEmbeddingApprovedDomains: AibiDashboardEmbeddingApprovedDomainsSettingAibiDashboardEmbeddingApprovedDomainsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingAibiDashboardEmbeddingApprovedDomainsOutputReference">AibiDashboardEmbeddingApprovedDomainsSettingAibiDashboardEmbeddingApprovedDomainsOutputReference</a>

---

##### `aibiDashboardEmbeddingApprovedDomainsInput`<sup>Optional</sup> <a name="aibiDashboardEmbeddingApprovedDomainsInput" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.property.aibiDashboardEmbeddingApprovedDomainsInput"></a>

```typescript
public readonly aibiDashboardEmbeddingApprovedDomainsInput: AibiDashboardEmbeddingApprovedDomainsSettingAibiDashboardEmbeddingApprovedDomains;
```

- *Type:* <a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingAibiDashboardEmbeddingApprovedDomains">AibiDashboardEmbeddingApprovedDomainsSettingAibiDashboardEmbeddingApprovedDomains</a>

---

##### `etagInput`<sup>Optional</sup> <a name="etagInput" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.property.etagInput"></a>

```typescript
public readonly etagInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `settingNameInput`<sup>Optional</sup> <a name="settingNameInput" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.property.settingNameInput"></a>

```typescript
public readonly settingNameInput: string;
```

- *Type:* string

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.property.etag"></a>

```typescript
public readonly etag: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `settingName`<sup>Required</sup> <a name="settingName" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.property.settingName"></a>

```typescript
public readonly settingName: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AibiDashboardEmbeddingApprovedDomainsSettingAibiDashboardEmbeddingApprovedDomains <a name="AibiDashboardEmbeddingApprovedDomainsSettingAibiDashboardEmbeddingApprovedDomains" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingAibiDashboardEmbeddingApprovedDomains"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingAibiDashboardEmbeddingApprovedDomains.Initializer"></a>

```typescript
import { aibiDashboardEmbeddingApprovedDomainsSetting } from '@cdktf/provider-databricks'

const aibiDashboardEmbeddingApprovedDomainsSettingAibiDashboardEmbeddingApprovedDomains: aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingAibiDashboardEmbeddingApprovedDomains = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingAibiDashboardEmbeddingApprovedDomains.property.approvedDomains">approvedDomains</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/aibi_dashboard_embedding_approved_domains_setting#approved_domains AibiDashboardEmbeddingApprovedDomainsSetting#approved_domains}. |

---

##### `approvedDomains`<sup>Required</sup> <a name="approvedDomains" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingAibiDashboardEmbeddingApprovedDomains.property.approvedDomains"></a>

```typescript
public readonly approvedDomains: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/aibi_dashboard_embedding_approved_domains_setting#approved_domains AibiDashboardEmbeddingApprovedDomainsSetting#approved_domains}.

---

### AibiDashboardEmbeddingApprovedDomainsSettingConfig <a name="AibiDashboardEmbeddingApprovedDomainsSettingConfig" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingConfig.Initializer"></a>

```typescript
import { aibiDashboardEmbeddingApprovedDomainsSetting } from '@cdktf/provider-databricks'

const aibiDashboardEmbeddingApprovedDomainsSettingConfig: aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingConfig.property.aibiDashboardEmbeddingApprovedDomains">aibiDashboardEmbeddingApprovedDomains</a></code> | <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingAibiDashboardEmbeddingApprovedDomains">AibiDashboardEmbeddingApprovedDomainsSettingAibiDashboardEmbeddingApprovedDomains</a></code> | aibi_dashboard_embedding_approved_domains block. |
| <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingConfig.property.etag">etag</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/aibi_dashboard_embedding_approved_domains_setting#etag AibiDashboardEmbeddingApprovedDomainsSetting#etag}. |
| <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/aibi_dashboard_embedding_approved_domains_setting#id AibiDashboardEmbeddingApprovedDomainsSetting#id}. |
| <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingConfig.property.settingName">settingName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/aibi_dashboard_embedding_approved_domains_setting#setting_name AibiDashboardEmbeddingApprovedDomainsSetting#setting_name}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `aibiDashboardEmbeddingApprovedDomains`<sup>Required</sup> <a name="aibiDashboardEmbeddingApprovedDomains" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingConfig.property.aibiDashboardEmbeddingApprovedDomains"></a>

```typescript
public readonly aibiDashboardEmbeddingApprovedDomains: AibiDashboardEmbeddingApprovedDomainsSettingAibiDashboardEmbeddingApprovedDomains;
```

- *Type:* <a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingAibiDashboardEmbeddingApprovedDomains">AibiDashboardEmbeddingApprovedDomainsSettingAibiDashboardEmbeddingApprovedDomains</a>

aibi_dashboard_embedding_approved_domains block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/aibi_dashboard_embedding_approved_domains_setting#aibi_dashboard_embedding_approved_domains AibiDashboardEmbeddingApprovedDomainsSetting#aibi_dashboard_embedding_approved_domains}

---

##### `etag`<sup>Optional</sup> <a name="etag" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingConfig.property.etag"></a>

```typescript
public readonly etag: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/aibi_dashboard_embedding_approved_domains_setting#etag AibiDashboardEmbeddingApprovedDomainsSetting#etag}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/aibi_dashboard_embedding_approved_domains_setting#id AibiDashboardEmbeddingApprovedDomainsSetting#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `settingName`<sup>Optional</sup> <a name="settingName" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingConfig.property.settingName"></a>

```typescript
public readonly settingName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/aibi_dashboard_embedding_approved_domains_setting#setting_name AibiDashboardEmbeddingApprovedDomainsSetting#setting_name}.

---

## Classes <a name="Classes" id="Classes"></a>

### AibiDashboardEmbeddingApprovedDomainsSettingAibiDashboardEmbeddingApprovedDomainsOutputReference <a name="AibiDashboardEmbeddingApprovedDomainsSettingAibiDashboardEmbeddingApprovedDomainsOutputReference" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingAibiDashboardEmbeddingApprovedDomainsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingAibiDashboardEmbeddingApprovedDomainsOutputReference.Initializer"></a>

```typescript
import { aibiDashboardEmbeddingApprovedDomainsSetting } from '@cdktf/provider-databricks'

new aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingAibiDashboardEmbeddingApprovedDomainsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingAibiDashboardEmbeddingApprovedDomainsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingAibiDashboardEmbeddingApprovedDomainsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingAibiDashboardEmbeddingApprovedDomainsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingAibiDashboardEmbeddingApprovedDomainsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingAibiDashboardEmbeddingApprovedDomainsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingAibiDashboardEmbeddingApprovedDomainsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingAibiDashboardEmbeddingApprovedDomainsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingAibiDashboardEmbeddingApprovedDomainsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingAibiDashboardEmbeddingApprovedDomainsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingAibiDashboardEmbeddingApprovedDomainsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingAibiDashboardEmbeddingApprovedDomainsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingAibiDashboardEmbeddingApprovedDomainsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingAibiDashboardEmbeddingApprovedDomainsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingAibiDashboardEmbeddingApprovedDomainsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingAibiDashboardEmbeddingApprovedDomainsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingAibiDashboardEmbeddingApprovedDomainsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingAibiDashboardEmbeddingApprovedDomainsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingAibiDashboardEmbeddingApprovedDomainsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingAibiDashboardEmbeddingApprovedDomainsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingAibiDashboardEmbeddingApprovedDomainsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingAibiDashboardEmbeddingApprovedDomainsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingAibiDashboardEmbeddingApprovedDomainsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingAibiDashboardEmbeddingApprovedDomainsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingAibiDashboardEmbeddingApprovedDomainsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingAibiDashboardEmbeddingApprovedDomainsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingAibiDashboardEmbeddingApprovedDomainsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingAibiDashboardEmbeddingApprovedDomainsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingAibiDashboardEmbeddingApprovedDomainsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingAibiDashboardEmbeddingApprovedDomainsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingAibiDashboardEmbeddingApprovedDomainsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingAibiDashboardEmbeddingApprovedDomainsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingAibiDashboardEmbeddingApprovedDomainsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingAibiDashboardEmbeddingApprovedDomainsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingAibiDashboardEmbeddingApprovedDomainsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingAibiDashboardEmbeddingApprovedDomainsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingAibiDashboardEmbeddingApprovedDomainsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingAibiDashboardEmbeddingApprovedDomainsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingAibiDashboardEmbeddingApprovedDomainsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingAibiDashboardEmbeddingApprovedDomainsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingAibiDashboardEmbeddingApprovedDomainsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingAibiDashboardEmbeddingApprovedDomainsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingAibiDashboardEmbeddingApprovedDomainsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingAibiDashboardEmbeddingApprovedDomainsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingAibiDashboardEmbeddingApprovedDomainsOutputReference.property.approvedDomainsInput">approvedDomainsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingAibiDashboardEmbeddingApprovedDomainsOutputReference.property.approvedDomains">approvedDomains</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingAibiDashboardEmbeddingApprovedDomainsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingAibiDashboardEmbeddingApprovedDomains">AibiDashboardEmbeddingApprovedDomainsSettingAibiDashboardEmbeddingApprovedDomains</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingAibiDashboardEmbeddingApprovedDomainsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingAibiDashboardEmbeddingApprovedDomainsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `approvedDomainsInput`<sup>Optional</sup> <a name="approvedDomainsInput" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingAibiDashboardEmbeddingApprovedDomainsOutputReference.property.approvedDomainsInput"></a>

```typescript
public readonly approvedDomainsInput: string[];
```

- *Type:* string[]

---

##### `approvedDomains`<sup>Required</sup> <a name="approvedDomains" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingAibiDashboardEmbeddingApprovedDomainsOutputReference.property.approvedDomains"></a>

```typescript
public readonly approvedDomains: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingAibiDashboardEmbeddingApprovedDomainsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AibiDashboardEmbeddingApprovedDomainsSettingAibiDashboardEmbeddingApprovedDomains;
```

- *Type:* <a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingAibiDashboardEmbeddingApprovedDomains">AibiDashboardEmbeddingApprovedDomainsSettingAibiDashboardEmbeddingApprovedDomains</a>

---



