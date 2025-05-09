# `budget` Submodule <a name="`budget` Submodule" id="@cdktf/provider-databricks.budget"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Budget <a name="Budget" id="@cdktf/provider-databricks.budget.Budget"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.77.0/docs/resources/budget databricks_budget}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.budget.Budget.Initializer"></a>

```typescript
import { budget } from '@cdktf/provider-databricks'

new budget.Budget(scope: Construct, id: string, config?: BudgetConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.budget.Budget.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.budget.Budget.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.budget.Budget.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-databricks.budget.BudgetConfig">BudgetConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.budget.Budget.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.budget.Budget.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-databricks.budget.Budget.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-databricks.budget.BudgetConfig">BudgetConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.budget.Budget.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.budget.Budget.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.Budget.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.budget.Budget.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.budget.Budget.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.Budget.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.Budget.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.budget.Budget.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-databricks.budget.Budget.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.Budget.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.Budget.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.Budget.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.Budget.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.Budget.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.Budget.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.Budget.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.Budget.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.Budget.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.Budget.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.Budget.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.Budget.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-databricks.budget.Budget.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-databricks.budget.Budget.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-databricks.budget.Budget.putAlertConfigurations">putAlertConfigurations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.Budget.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.Budget.resetAccountId">resetAccountId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.Budget.resetAlertConfigurations">resetAlertConfigurations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.Budget.resetBudgetConfigurationId">resetBudgetConfigurationId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.Budget.resetCreateTime">resetCreateTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.Budget.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.Budget.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.Budget.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.Budget.resetUpdateTime">resetUpdateTime</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.budget.Budget.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-databricks.budget.Budget.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.budget.Budget.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.budget.Budget.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-databricks.budget.Budget.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-databricks.budget.Budget.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-databricks.budget.Budget.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-databricks.budget.Budget.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-databricks.budget.Budget.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-databricks.budget.Budget.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-databricks.budget.Budget.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-databricks.budget.Budget.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.budget.Budget.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.budget.Budget.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.budget.Budget.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.budget.Budget.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.budget.Budget.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.budget.Budget.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.budget.Budget.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.budget.Budget.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.budget.Budget.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.budget.Budget.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.budget.Budget.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.budget.Budget.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.budget.Budget.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.budget.Budget.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.budget.Budget.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.budget.Budget.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.budget.Budget.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.budget.Budget.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-databricks.budget.Budget.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-databricks.budget.Budget.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.budget.Budget.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.budget.Budget.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.budget.Budget.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.budget.Budget.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-databricks.budget.Budget.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.budget.Budget.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-databricks.budget.Budget.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-databricks.budget.Budget.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-databricks.budget.Budget.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-databricks.budget.Budget.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.budget.Budget.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAlertConfigurations` <a name="putAlertConfigurations" id="@cdktf/provider-databricks.budget.Budget.putAlertConfigurations"></a>

```typescript
public putAlertConfigurations(value: IResolvable | BudgetAlertConfigurations[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.budget.Budget.putAlertConfigurations.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.budget.BudgetAlertConfigurations">BudgetAlertConfigurations</a>[]

---

##### `putFilter` <a name="putFilter" id="@cdktf/provider-databricks.budget.Budget.putFilter"></a>

```typescript
public putFilter(value: BudgetFilter): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.budget.Budget.putFilter.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.budget.BudgetFilter">BudgetFilter</a>

---

##### `resetAccountId` <a name="resetAccountId" id="@cdktf/provider-databricks.budget.Budget.resetAccountId"></a>

```typescript
public resetAccountId(): void
```

##### `resetAlertConfigurations` <a name="resetAlertConfigurations" id="@cdktf/provider-databricks.budget.Budget.resetAlertConfigurations"></a>

```typescript
public resetAlertConfigurations(): void
```

##### `resetBudgetConfigurationId` <a name="resetBudgetConfigurationId" id="@cdktf/provider-databricks.budget.Budget.resetBudgetConfigurationId"></a>

```typescript
public resetBudgetConfigurationId(): void
```

##### `resetCreateTime` <a name="resetCreateTime" id="@cdktf/provider-databricks.budget.Budget.resetCreateTime"></a>

```typescript
public resetCreateTime(): void
```

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktf/provider-databricks.budget.Budget.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetFilter` <a name="resetFilter" id="@cdktf/provider-databricks.budget.Budget.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-databricks.budget.Budget.resetId"></a>

```typescript
public resetId(): void
```

##### `resetUpdateTime` <a name="resetUpdateTime" id="@cdktf/provider-databricks.budget.Budget.resetUpdateTime"></a>

```typescript
public resetUpdateTime(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.budget.Budget.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.budget.Budget.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.Budget.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.Budget.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a Budget resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-databricks.budget.Budget.isConstruct"></a>

```typescript
import { budget } from '@cdktf/provider-databricks'

budget.Budget.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.budget.Budget.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-databricks.budget.Budget.isTerraformElement"></a>

```typescript
import { budget } from '@cdktf/provider-databricks'

budget.Budget.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.budget.Budget.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-databricks.budget.Budget.isTerraformResource"></a>

```typescript
import { budget } from '@cdktf/provider-databricks'

budget.Budget.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.budget.Budget.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-databricks.budget.Budget.generateConfigForImport"></a>

```typescript
import { budget } from '@cdktf/provider-databricks'

budget.Budget.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a Budget resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.budget.Budget.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-databricks.budget.Budget.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the Budget to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-databricks.budget.Budget.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing Budget that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.77.0/docs/resources/budget#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.budget.Budget.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the Budget to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.budget.Budget.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.budget.Budget.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.Budget.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.Budget.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.Budget.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.Budget.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.Budget.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.Budget.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.Budget.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.Budget.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.Budget.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.Budget.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.Budget.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.Budget.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.Budget.property.alertConfigurations">alertConfigurations</a></code> | <code><a href="#@cdktf/provider-databricks.budget.BudgetAlertConfigurationsList">BudgetAlertConfigurationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.Budget.property.filter">filter</a></code> | <code><a href="#@cdktf/provider-databricks.budget.BudgetFilterOutputReference">BudgetFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.Budget.property.accountIdInput">accountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.Budget.property.alertConfigurationsInput">alertConfigurationsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.budget.BudgetAlertConfigurations">BudgetAlertConfigurations</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.Budget.property.budgetConfigurationIdInput">budgetConfigurationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.Budget.property.createTimeInput">createTimeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.Budget.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.Budget.property.filterInput">filterInput</a></code> | <code><a href="#@cdktf/provider-databricks.budget.BudgetFilter">BudgetFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.Budget.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.Budget.property.updateTimeInput">updateTimeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.Budget.property.accountId">accountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.Budget.property.budgetConfigurationId">budgetConfigurationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.Budget.property.createTime">createTime</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.Budget.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.Budget.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.Budget.property.updateTime">updateTime</a></code> | <code>number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-databricks.budget.Budget.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-databricks.budget.Budget.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.budget.Budget.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-databricks.budget.Budget.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-databricks.budget.Budget.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-databricks.budget.Budget.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-databricks.budget.Budget.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.budget.Budget.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.budget.Budget.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.budget.Budget.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.budget.Budget.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.budget.Budget.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.budget.Budget.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.budget.Budget.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `alertConfigurations`<sup>Required</sup> <a name="alertConfigurations" id="@cdktf/provider-databricks.budget.Budget.property.alertConfigurations"></a>

```typescript
public readonly alertConfigurations: BudgetAlertConfigurationsList;
```

- *Type:* <a href="#@cdktf/provider-databricks.budget.BudgetAlertConfigurationsList">BudgetAlertConfigurationsList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-databricks.budget.Budget.property.filter"></a>

```typescript
public readonly filter: BudgetFilterOutputReference;
```

- *Type:* <a href="#@cdktf/provider-databricks.budget.BudgetFilterOutputReference">BudgetFilterOutputReference</a>

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktf/provider-databricks.budget.Budget.property.accountIdInput"></a>

```typescript
public readonly accountIdInput: string;
```

- *Type:* string

---

##### `alertConfigurationsInput`<sup>Optional</sup> <a name="alertConfigurationsInput" id="@cdktf/provider-databricks.budget.Budget.property.alertConfigurationsInput"></a>

```typescript
public readonly alertConfigurationsInput: IResolvable | BudgetAlertConfigurations[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.budget.BudgetAlertConfigurations">BudgetAlertConfigurations</a>[]

---

##### `budgetConfigurationIdInput`<sup>Optional</sup> <a name="budgetConfigurationIdInput" id="@cdktf/provider-databricks.budget.Budget.property.budgetConfigurationIdInput"></a>

```typescript
public readonly budgetConfigurationIdInput: string;
```

- *Type:* string

---

##### `createTimeInput`<sup>Optional</sup> <a name="createTimeInput" id="@cdktf/provider-databricks.budget.Budget.property.createTimeInput"></a>

```typescript
public readonly createTimeInput: number;
```

- *Type:* number

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-databricks.budget.Budget.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="@cdktf/provider-databricks.budget.Budget.property.filterInput"></a>

```typescript
public readonly filterInput: BudgetFilter;
```

- *Type:* <a href="#@cdktf/provider-databricks.budget.BudgetFilter">BudgetFilter</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-databricks.budget.Budget.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `updateTimeInput`<sup>Optional</sup> <a name="updateTimeInput" id="@cdktf/provider-databricks.budget.Budget.property.updateTimeInput"></a>

```typescript
public readonly updateTimeInput: number;
```

- *Type:* number

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-databricks.budget.Budget.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

---

##### `budgetConfigurationId`<sup>Required</sup> <a name="budgetConfigurationId" id="@cdktf/provider-databricks.budget.Budget.property.budgetConfigurationId"></a>

```typescript
public readonly budgetConfigurationId: string;
```

- *Type:* string

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-databricks.budget.Budget.property.createTime"></a>

```typescript
public readonly createTime: number;
```

- *Type:* number

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-databricks.budget.Budget.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.budget.Budget.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-databricks.budget.Budget.property.updateTime"></a>

```typescript
public readonly updateTime: number;
```

- *Type:* number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.budget.Budget.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-databricks.budget.Budget.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### BudgetAlertConfigurations <a name="BudgetAlertConfigurations" id="@cdktf/provider-databricks.budget.BudgetAlertConfigurations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.budget.BudgetAlertConfigurations.Initializer"></a>

```typescript
import { budget } from '@cdktf/provider-databricks'

const budgetAlertConfigurations: budget.BudgetAlertConfigurations = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetAlertConfigurations.property.actionConfigurations">actionConfigurations</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.budget.BudgetAlertConfigurationsActionConfigurations">BudgetAlertConfigurationsActionConfigurations</a>[]</code> | action_configurations block. |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetAlertConfigurations.property.alertConfigurationId">alertConfigurationId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.77.0/docs/resources/budget#alert_configuration_id Budget#alert_configuration_id}. |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetAlertConfigurations.property.quantityThreshold">quantityThreshold</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.77.0/docs/resources/budget#quantity_threshold Budget#quantity_threshold}. |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetAlertConfigurations.property.quantityType">quantityType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.77.0/docs/resources/budget#quantity_type Budget#quantity_type}. |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetAlertConfigurations.property.timePeriod">timePeriod</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.77.0/docs/resources/budget#time_period Budget#time_period}. |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetAlertConfigurations.property.triggerType">triggerType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.77.0/docs/resources/budget#trigger_type Budget#trigger_type}. |

---

##### `actionConfigurations`<sup>Optional</sup> <a name="actionConfigurations" id="@cdktf/provider-databricks.budget.BudgetAlertConfigurations.property.actionConfigurations"></a>

```typescript
public readonly actionConfigurations: IResolvable | BudgetAlertConfigurationsActionConfigurations[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.budget.BudgetAlertConfigurationsActionConfigurations">BudgetAlertConfigurationsActionConfigurations</a>[]

action_configurations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.77.0/docs/resources/budget#action_configurations Budget#action_configurations}

---

##### `alertConfigurationId`<sup>Optional</sup> <a name="alertConfigurationId" id="@cdktf/provider-databricks.budget.BudgetAlertConfigurations.property.alertConfigurationId"></a>

```typescript
public readonly alertConfigurationId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.77.0/docs/resources/budget#alert_configuration_id Budget#alert_configuration_id}.

---

##### `quantityThreshold`<sup>Optional</sup> <a name="quantityThreshold" id="@cdktf/provider-databricks.budget.BudgetAlertConfigurations.property.quantityThreshold"></a>

```typescript
public readonly quantityThreshold: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.77.0/docs/resources/budget#quantity_threshold Budget#quantity_threshold}.

---

##### `quantityType`<sup>Optional</sup> <a name="quantityType" id="@cdktf/provider-databricks.budget.BudgetAlertConfigurations.property.quantityType"></a>

```typescript
public readonly quantityType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.77.0/docs/resources/budget#quantity_type Budget#quantity_type}.

---

##### `timePeriod`<sup>Optional</sup> <a name="timePeriod" id="@cdktf/provider-databricks.budget.BudgetAlertConfigurations.property.timePeriod"></a>

```typescript
public readonly timePeriod: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.77.0/docs/resources/budget#time_period Budget#time_period}.

---

##### `triggerType`<sup>Optional</sup> <a name="triggerType" id="@cdktf/provider-databricks.budget.BudgetAlertConfigurations.property.triggerType"></a>

```typescript
public readonly triggerType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.77.0/docs/resources/budget#trigger_type Budget#trigger_type}.

---

### BudgetAlertConfigurationsActionConfigurations <a name="BudgetAlertConfigurationsActionConfigurations" id="@cdktf/provider-databricks.budget.BudgetAlertConfigurationsActionConfigurations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.budget.BudgetAlertConfigurationsActionConfigurations.Initializer"></a>

```typescript
import { budget } from '@cdktf/provider-databricks'

const budgetAlertConfigurationsActionConfigurations: budget.BudgetAlertConfigurationsActionConfigurations = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetAlertConfigurationsActionConfigurations.property.actionConfigurationId">actionConfigurationId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.77.0/docs/resources/budget#action_configuration_id Budget#action_configuration_id}. |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetAlertConfigurationsActionConfigurations.property.actionType">actionType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.77.0/docs/resources/budget#action_type Budget#action_type}. |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetAlertConfigurationsActionConfigurations.property.target">target</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.77.0/docs/resources/budget#target Budget#target}. |

---

##### `actionConfigurationId`<sup>Optional</sup> <a name="actionConfigurationId" id="@cdktf/provider-databricks.budget.BudgetAlertConfigurationsActionConfigurations.property.actionConfigurationId"></a>

```typescript
public readonly actionConfigurationId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.77.0/docs/resources/budget#action_configuration_id Budget#action_configuration_id}.

---

##### `actionType`<sup>Optional</sup> <a name="actionType" id="@cdktf/provider-databricks.budget.BudgetAlertConfigurationsActionConfigurations.property.actionType"></a>

```typescript
public readonly actionType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.77.0/docs/resources/budget#action_type Budget#action_type}.

---

##### `target`<sup>Optional</sup> <a name="target" id="@cdktf/provider-databricks.budget.BudgetAlertConfigurationsActionConfigurations.property.target"></a>

```typescript
public readonly target: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.77.0/docs/resources/budget#target Budget#target}.

---

### BudgetConfig <a name="BudgetConfig" id="@cdktf/provider-databricks.budget.BudgetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.budget.BudgetConfig.Initializer"></a>

```typescript
import { budget } from '@cdktf/provider-databricks'

const budgetConfig: budget.BudgetConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetConfig.property.accountId">accountId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.77.0/docs/resources/budget#account_id Budget#account_id}. |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetConfig.property.alertConfigurations">alertConfigurations</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.budget.BudgetAlertConfigurations">BudgetAlertConfigurations</a>[]</code> | alert_configurations block. |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetConfig.property.budgetConfigurationId">budgetConfigurationId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.77.0/docs/resources/budget#budget_configuration_id Budget#budget_configuration_id}. |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetConfig.property.createTime">createTime</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.77.0/docs/resources/budget#create_time Budget#create_time}. |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetConfig.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.77.0/docs/resources/budget#display_name Budget#display_name}. |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetConfig.property.filter">filter</a></code> | <code><a href="#@cdktf/provider-databricks.budget.BudgetFilter">BudgetFilter</a></code> | filter block. |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.77.0/docs/resources/budget#id Budget#id}. |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetConfig.property.updateTime">updateTime</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.77.0/docs/resources/budget#update_time Budget#update_time}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.budget.BudgetConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.budget.BudgetConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.budget.BudgetConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.budget.BudgetConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.budget.BudgetConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.budget.BudgetConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.budget.BudgetConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `accountId`<sup>Optional</sup> <a name="accountId" id="@cdktf/provider-databricks.budget.BudgetConfig.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.77.0/docs/resources/budget#account_id Budget#account_id}.

---

##### `alertConfigurations`<sup>Optional</sup> <a name="alertConfigurations" id="@cdktf/provider-databricks.budget.BudgetConfig.property.alertConfigurations"></a>

```typescript
public readonly alertConfigurations: IResolvable | BudgetAlertConfigurations[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.budget.BudgetAlertConfigurations">BudgetAlertConfigurations</a>[]

alert_configurations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.77.0/docs/resources/budget#alert_configurations Budget#alert_configurations}

---

##### `budgetConfigurationId`<sup>Optional</sup> <a name="budgetConfigurationId" id="@cdktf/provider-databricks.budget.BudgetConfig.property.budgetConfigurationId"></a>

```typescript
public readonly budgetConfigurationId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.77.0/docs/resources/budget#budget_configuration_id Budget#budget_configuration_id}.

---

##### `createTime`<sup>Optional</sup> <a name="createTime" id="@cdktf/provider-databricks.budget.BudgetConfig.property.createTime"></a>

```typescript
public readonly createTime: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.77.0/docs/resources/budget#create_time Budget#create_time}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktf/provider-databricks.budget.BudgetConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.77.0/docs/resources/budget#display_name Budget#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-databricks.budget.BudgetConfig.property.filter"></a>

```typescript
public readonly filter: BudgetFilter;
```

- *Type:* <a href="#@cdktf/provider-databricks.budget.BudgetFilter">BudgetFilter</a>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.77.0/docs/resources/budget#filter Budget#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-databricks.budget.BudgetConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.77.0/docs/resources/budget#id Budget#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `updateTime`<sup>Optional</sup> <a name="updateTime" id="@cdktf/provider-databricks.budget.BudgetConfig.property.updateTime"></a>

```typescript
public readonly updateTime: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.77.0/docs/resources/budget#update_time Budget#update_time}.

---

### BudgetFilter <a name="BudgetFilter" id="@cdktf/provider-databricks.budget.BudgetFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.budget.BudgetFilter.Initializer"></a>

```typescript
import { budget } from '@cdktf/provider-databricks'

const budgetFilter: budget.BudgetFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetFilter.property.tags">tags</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.budget.BudgetFilterTags">BudgetFilterTags</a>[]</code> | tags block. |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetFilter.property.workspaceId">workspaceId</a></code> | <code><a href="#@cdktf/provider-databricks.budget.BudgetFilterWorkspaceId">BudgetFilterWorkspaceId</a></code> | workspace_id block. |

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-databricks.budget.BudgetFilter.property.tags"></a>

```typescript
public readonly tags: IResolvable | BudgetFilterTags[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.budget.BudgetFilterTags">BudgetFilterTags</a>[]

tags block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.77.0/docs/resources/budget#tags Budget#tags}

---

##### `workspaceId`<sup>Optional</sup> <a name="workspaceId" id="@cdktf/provider-databricks.budget.BudgetFilter.property.workspaceId"></a>

```typescript
public readonly workspaceId: BudgetFilterWorkspaceId;
```

- *Type:* <a href="#@cdktf/provider-databricks.budget.BudgetFilterWorkspaceId">BudgetFilterWorkspaceId</a>

workspace_id block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.77.0/docs/resources/budget#workspace_id Budget#workspace_id}

---

### BudgetFilterTags <a name="BudgetFilterTags" id="@cdktf/provider-databricks.budget.BudgetFilterTags"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.budget.BudgetFilterTags.Initializer"></a>

```typescript
import { budget } from '@cdktf/provider-databricks'

const budgetFilterTags: budget.BudgetFilterTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetFilterTags.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.77.0/docs/resources/budget#key Budget#key}. |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetFilterTags.property.value">value</a></code> | <code><a href="#@cdktf/provider-databricks.budget.BudgetFilterTagsValue">BudgetFilterTagsValue</a></code> | value block. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-databricks.budget.BudgetFilterTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.77.0/docs/resources/budget#key Budget#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-databricks.budget.BudgetFilterTags.property.value"></a>

```typescript
public readonly value: BudgetFilterTagsValue;
```

- *Type:* <a href="#@cdktf/provider-databricks.budget.BudgetFilterTagsValue">BudgetFilterTagsValue</a>

value block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.77.0/docs/resources/budget#value Budget#value}

---

### BudgetFilterTagsValue <a name="BudgetFilterTagsValue" id="@cdktf/provider-databricks.budget.BudgetFilterTagsValue"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.budget.BudgetFilterTagsValue.Initializer"></a>

```typescript
import { budget } from '@cdktf/provider-databricks'

const budgetFilterTagsValue: budget.BudgetFilterTagsValue = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetFilterTagsValue.property.operator">operator</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.77.0/docs/resources/budget#operator Budget#operator}. |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetFilterTagsValue.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.77.0/docs/resources/budget#values Budget#values}. |

---

##### `operator`<sup>Optional</sup> <a name="operator" id="@cdktf/provider-databricks.budget.BudgetFilterTagsValue.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.77.0/docs/resources/budget#operator Budget#operator}.

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktf/provider-databricks.budget.BudgetFilterTagsValue.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.77.0/docs/resources/budget#values Budget#values}.

---

### BudgetFilterWorkspaceId <a name="BudgetFilterWorkspaceId" id="@cdktf/provider-databricks.budget.BudgetFilterWorkspaceId"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.budget.BudgetFilterWorkspaceId.Initializer"></a>

```typescript
import { budget } from '@cdktf/provider-databricks'

const budgetFilterWorkspaceId: budget.BudgetFilterWorkspaceId = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetFilterWorkspaceId.property.operator">operator</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.77.0/docs/resources/budget#operator Budget#operator}. |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetFilterWorkspaceId.property.values">values</a></code> | <code>number[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.77.0/docs/resources/budget#values Budget#values}. |

---

##### `operator`<sup>Optional</sup> <a name="operator" id="@cdktf/provider-databricks.budget.BudgetFilterWorkspaceId.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.77.0/docs/resources/budget#operator Budget#operator}.

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktf/provider-databricks.budget.BudgetFilterWorkspaceId.property.values"></a>

```typescript
public readonly values: number[];
```

- *Type:* number[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.77.0/docs/resources/budget#values Budget#values}.

---

## Classes <a name="Classes" id="Classes"></a>

### BudgetAlertConfigurationsActionConfigurationsList <a name="BudgetAlertConfigurationsActionConfigurationsList" id="@cdktf/provider-databricks.budget.BudgetAlertConfigurationsActionConfigurationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.budget.BudgetAlertConfigurationsActionConfigurationsList.Initializer"></a>

```typescript
import { budget } from '@cdktf/provider-databricks'

new budget.BudgetAlertConfigurationsActionConfigurationsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetAlertConfigurationsActionConfigurationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetAlertConfigurationsActionConfigurationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetAlertConfigurationsActionConfigurationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.budget.BudgetAlertConfigurationsActionConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.budget.BudgetAlertConfigurationsActionConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-databricks.budget.BudgetAlertConfigurationsActionConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetAlertConfigurationsActionConfigurationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetAlertConfigurationsActionConfigurationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetAlertConfigurationsActionConfigurationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetAlertConfigurationsActionConfigurationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetAlertConfigurationsActionConfigurationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-databricks.budget.BudgetAlertConfigurationsActionConfigurationsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-databricks.budget.BudgetAlertConfigurationsActionConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.budget.BudgetAlertConfigurationsActionConfigurationsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.budget.BudgetAlertConfigurationsActionConfigurationsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.budget.BudgetAlertConfigurationsActionConfigurationsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.budget.BudgetAlertConfigurationsActionConfigurationsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-databricks.budget.BudgetAlertConfigurationsActionConfigurationsList.get"></a>

```typescript
public get(index: number): BudgetAlertConfigurationsActionConfigurationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.budget.BudgetAlertConfigurationsActionConfigurationsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetAlertConfigurationsActionConfigurationsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetAlertConfigurationsActionConfigurationsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetAlertConfigurationsActionConfigurationsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.budget.BudgetAlertConfigurationsActionConfigurations">BudgetAlertConfigurationsActionConfigurations</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.budget.BudgetAlertConfigurationsActionConfigurationsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.budget.BudgetAlertConfigurationsActionConfigurationsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.budget.BudgetAlertConfigurationsActionConfigurationsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BudgetAlertConfigurationsActionConfigurations[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.budget.BudgetAlertConfigurationsActionConfigurations">BudgetAlertConfigurationsActionConfigurations</a>[]

---


### BudgetAlertConfigurationsActionConfigurationsOutputReference <a name="BudgetAlertConfigurationsActionConfigurationsOutputReference" id="@cdktf/provider-databricks.budget.BudgetAlertConfigurationsActionConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.budget.BudgetAlertConfigurationsActionConfigurationsOutputReference.Initializer"></a>

```typescript
import { budget } from '@cdktf/provider-databricks'

new budget.BudgetAlertConfigurationsActionConfigurationsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetAlertConfigurationsActionConfigurationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetAlertConfigurationsActionConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetAlertConfigurationsActionConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetAlertConfigurationsActionConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.budget.BudgetAlertConfigurationsActionConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.budget.BudgetAlertConfigurationsActionConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-databricks.budget.BudgetAlertConfigurationsActionConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-databricks.budget.BudgetAlertConfigurationsActionConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetAlertConfigurationsActionConfigurationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetAlertConfigurationsActionConfigurationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetAlertConfigurationsActionConfigurationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetAlertConfigurationsActionConfigurationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetAlertConfigurationsActionConfigurationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetAlertConfigurationsActionConfigurationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetAlertConfigurationsActionConfigurationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetAlertConfigurationsActionConfigurationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetAlertConfigurationsActionConfigurationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetAlertConfigurationsActionConfigurationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetAlertConfigurationsActionConfigurationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetAlertConfigurationsActionConfigurationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetAlertConfigurationsActionConfigurationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetAlertConfigurationsActionConfigurationsOutputReference.resetActionConfigurationId">resetActionConfigurationId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetAlertConfigurationsActionConfigurationsOutputReference.resetActionType">resetActionType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetAlertConfigurationsActionConfigurationsOutputReference.resetTarget">resetTarget</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.budget.BudgetAlertConfigurationsActionConfigurationsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.budget.BudgetAlertConfigurationsActionConfigurationsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.budget.BudgetAlertConfigurationsActionConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.budget.BudgetAlertConfigurationsActionConfigurationsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.budget.BudgetAlertConfigurationsActionConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.budget.BudgetAlertConfigurationsActionConfigurationsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.budget.BudgetAlertConfigurationsActionConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.budget.BudgetAlertConfigurationsActionConfigurationsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.budget.BudgetAlertConfigurationsActionConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.budget.BudgetAlertConfigurationsActionConfigurationsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.budget.BudgetAlertConfigurationsActionConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.budget.BudgetAlertConfigurationsActionConfigurationsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.budget.BudgetAlertConfigurationsActionConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.budget.BudgetAlertConfigurationsActionConfigurationsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.budget.BudgetAlertConfigurationsActionConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.budget.BudgetAlertConfigurationsActionConfigurationsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.budget.BudgetAlertConfigurationsActionConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.budget.BudgetAlertConfigurationsActionConfigurationsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.budget.BudgetAlertConfigurationsActionConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.budget.BudgetAlertConfigurationsActionConfigurationsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.budget.BudgetAlertConfigurationsActionConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.budget.BudgetAlertConfigurationsActionConfigurationsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.budget.BudgetAlertConfigurationsActionConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.budget.BudgetAlertConfigurationsActionConfigurationsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetActionConfigurationId` <a name="resetActionConfigurationId" id="@cdktf/provider-databricks.budget.BudgetAlertConfigurationsActionConfigurationsOutputReference.resetActionConfigurationId"></a>

```typescript
public resetActionConfigurationId(): void
```

##### `resetActionType` <a name="resetActionType" id="@cdktf/provider-databricks.budget.BudgetAlertConfigurationsActionConfigurationsOutputReference.resetActionType"></a>

```typescript
public resetActionType(): void
```

##### `resetTarget` <a name="resetTarget" id="@cdktf/provider-databricks.budget.BudgetAlertConfigurationsActionConfigurationsOutputReference.resetTarget"></a>

```typescript
public resetTarget(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetAlertConfigurationsActionConfigurationsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetAlertConfigurationsActionConfigurationsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetAlertConfigurationsActionConfigurationsOutputReference.property.actionConfigurationIdInput">actionConfigurationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetAlertConfigurationsActionConfigurationsOutputReference.property.actionTypeInput">actionTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetAlertConfigurationsActionConfigurationsOutputReference.property.targetInput">targetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetAlertConfigurationsActionConfigurationsOutputReference.property.actionConfigurationId">actionConfigurationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetAlertConfigurationsActionConfigurationsOutputReference.property.actionType">actionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetAlertConfigurationsActionConfigurationsOutputReference.property.target">target</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetAlertConfigurationsActionConfigurationsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.budget.BudgetAlertConfigurationsActionConfigurations">BudgetAlertConfigurationsActionConfigurations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.budget.BudgetAlertConfigurationsActionConfigurationsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.budget.BudgetAlertConfigurationsActionConfigurationsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `actionConfigurationIdInput`<sup>Optional</sup> <a name="actionConfigurationIdInput" id="@cdktf/provider-databricks.budget.BudgetAlertConfigurationsActionConfigurationsOutputReference.property.actionConfigurationIdInput"></a>

```typescript
public readonly actionConfigurationIdInput: string;
```

- *Type:* string

---

##### `actionTypeInput`<sup>Optional</sup> <a name="actionTypeInput" id="@cdktf/provider-databricks.budget.BudgetAlertConfigurationsActionConfigurationsOutputReference.property.actionTypeInput"></a>

```typescript
public readonly actionTypeInput: string;
```

- *Type:* string

---

##### `targetInput`<sup>Optional</sup> <a name="targetInput" id="@cdktf/provider-databricks.budget.BudgetAlertConfigurationsActionConfigurationsOutputReference.property.targetInput"></a>

```typescript
public readonly targetInput: string;
```

- *Type:* string

---

##### `actionConfigurationId`<sup>Required</sup> <a name="actionConfigurationId" id="@cdktf/provider-databricks.budget.BudgetAlertConfigurationsActionConfigurationsOutputReference.property.actionConfigurationId"></a>

```typescript
public readonly actionConfigurationId: string;
```

- *Type:* string

---

##### `actionType`<sup>Required</sup> <a name="actionType" id="@cdktf/provider-databricks.budget.BudgetAlertConfigurationsActionConfigurationsOutputReference.property.actionType"></a>

```typescript
public readonly actionType: string;
```

- *Type:* string

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktf/provider-databricks.budget.BudgetAlertConfigurationsActionConfigurationsOutputReference.property.target"></a>

```typescript
public readonly target: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.budget.BudgetAlertConfigurationsActionConfigurationsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BudgetAlertConfigurationsActionConfigurations;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.budget.BudgetAlertConfigurationsActionConfigurations">BudgetAlertConfigurationsActionConfigurations</a>

---


### BudgetAlertConfigurationsList <a name="BudgetAlertConfigurationsList" id="@cdktf/provider-databricks.budget.BudgetAlertConfigurationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.budget.BudgetAlertConfigurationsList.Initializer"></a>

```typescript
import { budget } from '@cdktf/provider-databricks'

new budget.BudgetAlertConfigurationsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetAlertConfigurationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetAlertConfigurationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetAlertConfigurationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.budget.BudgetAlertConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.budget.BudgetAlertConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-databricks.budget.BudgetAlertConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetAlertConfigurationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetAlertConfigurationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetAlertConfigurationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetAlertConfigurationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetAlertConfigurationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-databricks.budget.BudgetAlertConfigurationsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-databricks.budget.BudgetAlertConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.budget.BudgetAlertConfigurationsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.budget.BudgetAlertConfigurationsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.budget.BudgetAlertConfigurationsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.budget.BudgetAlertConfigurationsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-databricks.budget.BudgetAlertConfigurationsList.get"></a>

```typescript
public get(index: number): BudgetAlertConfigurationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.budget.BudgetAlertConfigurationsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetAlertConfigurationsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetAlertConfigurationsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetAlertConfigurationsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.budget.BudgetAlertConfigurations">BudgetAlertConfigurations</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.budget.BudgetAlertConfigurationsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.budget.BudgetAlertConfigurationsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.budget.BudgetAlertConfigurationsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BudgetAlertConfigurations[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.budget.BudgetAlertConfigurations">BudgetAlertConfigurations</a>[]

---


### BudgetAlertConfigurationsOutputReference <a name="BudgetAlertConfigurationsOutputReference" id="@cdktf/provider-databricks.budget.BudgetAlertConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.budget.BudgetAlertConfigurationsOutputReference.Initializer"></a>

```typescript
import { budget } from '@cdktf/provider-databricks'

new budget.BudgetAlertConfigurationsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetAlertConfigurationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetAlertConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetAlertConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetAlertConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.budget.BudgetAlertConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.budget.BudgetAlertConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-databricks.budget.BudgetAlertConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-databricks.budget.BudgetAlertConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetAlertConfigurationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetAlertConfigurationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetAlertConfigurationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetAlertConfigurationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetAlertConfigurationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetAlertConfigurationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetAlertConfigurationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetAlertConfigurationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetAlertConfigurationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetAlertConfigurationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetAlertConfigurationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetAlertConfigurationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetAlertConfigurationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetAlertConfigurationsOutputReference.putActionConfigurations">putActionConfigurations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetAlertConfigurationsOutputReference.resetActionConfigurations">resetActionConfigurations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetAlertConfigurationsOutputReference.resetAlertConfigurationId">resetAlertConfigurationId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetAlertConfigurationsOutputReference.resetQuantityThreshold">resetQuantityThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetAlertConfigurationsOutputReference.resetQuantityType">resetQuantityType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetAlertConfigurationsOutputReference.resetTimePeriod">resetTimePeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetAlertConfigurationsOutputReference.resetTriggerType">resetTriggerType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.budget.BudgetAlertConfigurationsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.budget.BudgetAlertConfigurationsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.budget.BudgetAlertConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.budget.BudgetAlertConfigurationsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.budget.BudgetAlertConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.budget.BudgetAlertConfigurationsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.budget.BudgetAlertConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.budget.BudgetAlertConfigurationsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.budget.BudgetAlertConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.budget.BudgetAlertConfigurationsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.budget.BudgetAlertConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.budget.BudgetAlertConfigurationsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.budget.BudgetAlertConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.budget.BudgetAlertConfigurationsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.budget.BudgetAlertConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.budget.BudgetAlertConfigurationsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.budget.BudgetAlertConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.budget.BudgetAlertConfigurationsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.budget.BudgetAlertConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.budget.BudgetAlertConfigurationsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.budget.BudgetAlertConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.budget.BudgetAlertConfigurationsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.budget.BudgetAlertConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.budget.BudgetAlertConfigurationsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putActionConfigurations` <a name="putActionConfigurations" id="@cdktf/provider-databricks.budget.BudgetAlertConfigurationsOutputReference.putActionConfigurations"></a>

```typescript
public putActionConfigurations(value: IResolvable | BudgetAlertConfigurationsActionConfigurations[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.budget.BudgetAlertConfigurationsOutputReference.putActionConfigurations.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.budget.BudgetAlertConfigurationsActionConfigurations">BudgetAlertConfigurationsActionConfigurations</a>[]

---

##### `resetActionConfigurations` <a name="resetActionConfigurations" id="@cdktf/provider-databricks.budget.BudgetAlertConfigurationsOutputReference.resetActionConfigurations"></a>

```typescript
public resetActionConfigurations(): void
```

##### `resetAlertConfigurationId` <a name="resetAlertConfigurationId" id="@cdktf/provider-databricks.budget.BudgetAlertConfigurationsOutputReference.resetAlertConfigurationId"></a>

```typescript
public resetAlertConfigurationId(): void
```

##### `resetQuantityThreshold` <a name="resetQuantityThreshold" id="@cdktf/provider-databricks.budget.BudgetAlertConfigurationsOutputReference.resetQuantityThreshold"></a>

```typescript
public resetQuantityThreshold(): void
```

##### `resetQuantityType` <a name="resetQuantityType" id="@cdktf/provider-databricks.budget.BudgetAlertConfigurationsOutputReference.resetQuantityType"></a>

```typescript
public resetQuantityType(): void
```

##### `resetTimePeriod` <a name="resetTimePeriod" id="@cdktf/provider-databricks.budget.BudgetAlertConfigurationsOutputReference.resetTimePeriod"></a>

```typescript
public resetTimePeriod(): void
```

##### `resetTriggerType` <a name="resetTriggerType" id="@cdktf/provider-databricks.budget.BudgetAlertConfigurationsOutputReference.resetTriggerType"></a>

```typescript
public resetTriggerType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetAlertConfigurationsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetAlertConfigurationsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetAlertConfigurationsOutputReference.property.actionConfigurations">actionConfigurations</a></code> | <code><a href="#@cdktf/provider-databricks.budget.BudgetAlertConfigurationsActionConfigurationsList">BudgetAlertConfigurationsActionConfigurationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetAlertConfigurationsOutputReference.property.actionConfigurationsInput">actionConfigurationsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.budget.BudgetAlertConfigurationsActionConfigurations">BudgetAlertConfigurationsActionConfigurations</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetAlertConfigurationsOutputReference.property.alertConfigurationIdInput">alertConfigurationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetAlertConfigurationsOutputReference.property.quantityThresholdInput">quantityThresholdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetAlertConfigurationsOutputReference.property.quantityTypeInput">quantityTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetAlertConfigurationsOutputReference.property.timePeriodInput">timePeriodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetAlertConfigurationsOutputReference.property.triggerTypeInput">triggerTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetAlertConfigurationsOutputReference.property.alertConfigurationId">alertConfigurationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetAlertConfigurationsOutputReference.property.quantityThreshold">quantityThreshold</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetAlertConfigurationsOutputReference.property.quantityType">quantityType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetAlertConfigurationsOutputReference.property.timePeriod">timePeriod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetAlertConfigurationsOutputReference.property.triggerType">triggerType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetAlertConfigurationsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.budget.BudgetAlertConfigurations">BudgetAlertConfigurations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.budget.BudgetAlertConfigurationsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.budget.BudgetAlertConfigurationsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `actionConfigurations`<sup>Required</sup> <a name="actionConfigurations" id="@cdktf/provider-databricks.budget.BudgetAlertConfigurationsOutputReference.property.actionConfigurations"></a>

```typescript
public readonly actionConfigurations: BudgetAlertConfigurationsActionConfigurationsList;
```

- *Type:* <a href="#@cdktf/provider-databricks.budget.BudgetAlertConfigurationsActionConfigurationsList">BudgetAlertConfigurationsActionConfigurationsList</a>

---

##### `actionConfigurationsInput`<sup>Optional</sup> <a name="actionConfigurationsInput" id="@cdktf/provider-databricks.budget.BudgetAlertConfigurationsOutputReference.property.actionConfigurationsInput"></a>

```typescript
public readonly actionConfigurationsInput: IResolvable | BudgetAlertConfigurationsActionConfigurations[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.budget.BudgetAlertConfigurationsActionConfigurations">BudgetAlertConfigurationsActionConfigurations</a>[]

---

##### `alertConfigurationIdInput`<sup>Optional</sup> <a name="alertConfigurationIdInput" id="@cdktf/provider-databricks.budget.BudgetAlertConfigurationsOutputReference.property.alertConfigurationIdInput"></a>

```typescript
public readonly alertConfigurationIdInput: string;
```

- *Type:* string

---

##### `quantityThresholdInput`<sup>Optional</sup> <a name="quantityThresholdInput" id="@cdktf/provider-databricks.budget.BudgetAlertConfigurationsOutputReference.property.quantityThresholdInput"></a>

```typescript
public readonly quantityThresholdInput: string;
```

- *Type:* string

---

##### `quantityTypeInput`<sup>Optional</sup> <a name="quantityTypeInput" id="@cdktf/provider-databricks.budget.BudgetAlertConfigurationsOutputReference.property.quantityTypeInput"></a>

```typescript
public readonly quantityTypeInput: string;
```

- *Type:* string

---

##### `timePeriodInput`<sup>Optional</sup> <a name="timePeriodInput" id="@cdktf/provider-databricks.budget.BudgetAlertConfigurationsOutputReference.property.timePeriodInput"></a>

```typescript
public readonly timePeriodInput: string;
```

- *Type:* string

---

##### `triggerTypeInput`<sup>Optional</sup> <a name="triggerTypeInput" id="@cdktf/provider-databricks.budget.BudgetAlertConfigurationsOutputReference.property.triggerTypeInput"></a>

```typescript
public readonly triggerTypeInput: string;
```

- *Type:* string

---

##### `alertConfigurationId`<sup>Required</sup> <a name="alertConfigurationId" id="@cdktf/provider-databricks.budget.BudgetAlertConfigurationsOutputReference.property.alertConfigurationId"></a>

```typescript
public readonly alertConfigurationId: string;
```

- *Type:* string

---

##### `quantityThreshold`<sup>Required</sup> <a name="quantityThreshold" id="@cdktf/provider-databricks.budget.BudgetAlertConfigurationsOutputReference.property.quantityThreshold"></a>

```typescript
public readonly quantityThreshold: string;
```

- *Type:* string

---

##### `quantityType`<sup>Required</sup> <a name="quantityType" id="@cdktf/provider-databricks.budget.BudgetAlertConfigurationsOutputReference.property.quantityType"></a>

```typescript
public readonly quantityType: string;
```

- *Type:* string

---

##### `timePeriod`<sup>Required</sup> <a name="timePeriod" id="@cdktf/provider-databricks.budget.BudgetAlertConfigurationsOutputReference.property.timePeriod"></a>

```typescript
public readonly timePeriod: string;
```

- *Type:* string

---

##### `triggerType`<sup>Required</sup> <a name="triggerType" id="@cdktf/provider-databricks.budget.BudgetAlertConfigurationsOutputReference.property.triggerType"></a>

```typescript
public readonly triggerType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.budget.BudgetAlertConfigurationsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BudgetAlertConfigurations;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.budget.BudgetAlertConfigurations">BudgetAlertConfigurations</a>

---


### BudgetFilterOutputReference <a name="BudgetFilterOutputReference" id="@cdktf/provider-databricks.budget.BudgetFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.budget.BudgetFilterOutputReference.Initializer"></a>

```typescript
import { budget } from '@cdktf/provider-databricks'

new budget.BudgetFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.budget.BudgetFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.budget.BudgetFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetFilterOutputReference.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetFilterOutputReference.putWorkspaceId">putWorkspaceId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetFilterOutputReference.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetFilterOutputReference.resetWorkspaceId">resetWorkspaceId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.budget.BudgetFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.budget.BudgetFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.budget.BudgetFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.budget.BudgetFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.budget.BudgetFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.budget.BudgetFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.budget.BudgetFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.budget.BudgetFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.budget.BudgetFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.budget.BudgetFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.budget.BudgetFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.budget.BudgetFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.budget.BudgetFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.budget.BudgetFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.budget.BudgetFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.budget.BudgetFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.budget.BudgetFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.budget.BudgetFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.budget.BudgetFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.budget.BudgetFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.budget.BudgetFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.budget.BudgetFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.budget.BudgetFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.budget.BudgetFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putTags` <a name="putTags" id="@cdktf/provider-databricks.budget.BudgetFilterOutputReference.putTags"></a>

```typescript
public putTags(value: IResolvable | BudgetFilterTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.budget.BudgetFilterOutputReference.putTags.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.budget.BudgetFilterTags">BudgetFilterTags</a>[]

---

##### `putWorkspaceId` <a name="putWorkspaceId" id="@cdktf/provider-databricks.budget.BudgetFilterOutputReference.putWorkspaceId"></a>

```typescript
public putWorkspaceId(value: BudgetFilterWorkspaceId): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.budget.BudgetFilterOutputReference.putWorkspaceId.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.budget.BudgetFilterWorkspaceId">BudgetFilterWorkspaceId</a>

---

##### `resetTags` <a name="resetTags" id="@cdktf/provider-databricks.budget.BudgetFilterOutputReference.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetWorkspaceId` <a name="resetWorkspaceId" id="@cdktf/provider-databricks.budget.BudgetFilterOutputReference.resetWorkspaceId"></a>

```typescript
public resetWorkspaceId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetFilterOutputReference.property.tags">tags</a></code> | <code><a href="#@cdktf/provider-databricks.budget.BudgetFilterTagsList">BudgetFilterTagsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetFilterOutputReference.property.workspaceId">workspaceId</a></code> | <code><a href="#@cdktf/provider-databricks.budget.BudgetFilterWorkspaceIdOutputReference">BudgetFilterWorkspaceIdOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetFilterOutputReference.property.tagsInput">tagsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.budget.BudgetFilterTags">BudgetFilterTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetFilterOutputReference.property.workspaceIdInput">workspaceIdInput</a></code> | <code><a href="#@cdktf/provider-databricks.budget.BudgetFilterWorkspaceId">BudgetFilterWorkspaceId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetFilterOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.budget.BudgetFilter">BudgetFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.budget.BudgetFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.budget.BudgetFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-databricks.budget.BudgetFilterOutputReference.property.tags"></a>

```typescript
public readonly tags: BudgetFilterTagsList;
```

- *Type:* <a href="#@cdktf/provider-databricks.budget.BudgetFilterTagsList">BudgetFilterTagsList</a>

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktf/provider-databricks.budget.BudgetFilterOutputReference.property.workspaceId"></a>

```typescript
public readonly workspaceId: BudgetFilterWorkspaceIdOutputReference;
```

- *Type:* <a href="#@cdktf/provider-databricks.budget.BudgetFilterWorkspaceIdOutputReference">BudgetFilterWorkspaceIdOutputReference</a>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-databricks.budget.BudgetFilterOutputReference.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | BudgetFilterTags[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.budget.BudgetFilterTags">BudgetFilterTags</a>[]

---

##### `workspaceIdInput`<sup>Optional</sup> <a name="workspaceIdInput" id="@cdktf/provider-databricks.budget.BudgetFilterOutputReference.property.workspaceIdInput"></a>

```typescript
public readonly workspaceIdInput: BudgetFilterWorkspaceId;
```

- *Type:* <a href="#@cdktf/provider-databricks.budget.BudgetFilterWorkspaceId">BudgetFilterWorkspaceId</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.budget.BudgetFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: BudgetFilter;
```

- *Type:* <a href="#@cdktf/provider-databricks.budget.BudgetFilter">BudgetFilter</a>

---


### BudgetFilterTagsList <a name="BudgetFilterTagsList" id="@cdktf/provider-databricks.budget.BudgetFilterTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.budget.BudgetFilterTagsList.Initializer"></a>

```typescript
import { budget } from '@cdktf/provider-databricks'

new budget.BudgetFilterTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetFilterTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetFilterTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetFilterTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.budget.BudgetFilterTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.budget.BudgetFilterTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-databricks.budget.BudgetFilterTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetFilterTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetFilterTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetFilterTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetFilterTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetFilterTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-databricks.budget.BudgetFilterTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-databricks.budget.BudgetFilterTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.budget.BudgetFilterTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.budget.BudgetFilterTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.budget.BudgetFilterTagsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.budget.BudgetFilterTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-databricks.budget.BudgetFilterTagsList.get"></a>

```typescript
public get(index: number): BudgetFilterTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.budget.BudgetFilterTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetFilterTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetFilterTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetFilterTagsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.budget.BudgetFilterTags">BudgetFilterTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.budget.BudgetFilterTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.budget.BudgetFilterTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.budget.BudgetFilterTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BudgetFilterTags[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.budget.BudgetFilterTags">BudgetFilterTags</a>[]

---


### BudgetFilterTagsOutputReference <a name="BudgetFilterTagsOutputReference" id="@cdktf/provider-databricks.budget.BudgetFilterTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.budget.BudgetFilterTagsOutputReference.Initializer"></a>

```typescript
import { budget } from '@cdktf/provider-databricks'

new budget.BudgetFilterTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetFilterTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetFilterTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetFilterTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetFilterTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.budget.BudgetFilterTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.budget.BudgetFilterTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-databricks.budget.BudgetFilterTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-databricks.budget.BudgetFilterTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetFilterTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetFilterTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetFilterTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetFilterTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetFilterTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetFilterTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetFilterTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetFilterTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetFilterTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetFilterTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetFilterTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetFilterTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetFilterTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetFilterTagsOutputReference.putValue">putValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetFilterTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetFilterTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.budget.BudgetFilterTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.budget.BudgetFilterTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.budget.BudgetFilterTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.budget.BudgetFilterTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.budget.BudgetFilterTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.budget.BudgetFilterTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.budget.BudgetFilterTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.budget.BudgetFilterTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.budget.BudgetFilterTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.budget.BudgetFilterTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.budget.BudgetFilterTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.budget.BudgetFilterTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.budget.BudgetFilterTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.budget.BudgetFilterTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.budget.BudgetFilterTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.budget.BudgetFilterTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.budget.BudgetFilterTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.budget.BudgetFilterTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.budget.BudgetFilterTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.budget.BudgetFilterTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.budget.BudgetFilterTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.budget.BudgetFilterTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.budget.BudgetFilterTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.budget.BudgetFilterTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putValue` <a name="putValue" id="@cdktf/provider-databricks.budget.BudgetFilterTagsOutputReference.putValue"></a>

```typescript
public putValue(value: BudgetFilterTagsValue): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.budget.BudgetFilterTagsOutputReference.putValue.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.budget.BudgetFilterTagsValue">BudgetFilterTagsValue</a>

---

##### `resetKey` <a name="resetKey" id="@cdktf/provider-databricks.budget.BudgetFilterTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktf/provider-databricks.budget.BudgetFilterTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetFilterTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetFilterTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetFilterTagsOutputReference.property.value">value</a></code> | <code><a href="#@cdktf/provider-databricks.budget.BudgetFilterTagsValueOutputReference">BudgetFilterTagsValueOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetFilterTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetFilterTagsOutputReference.property.valueInput">valueInput</a></code> | <code><a href="#@cdktf/provider-databricks.budget.BudgetFilterTagsValue">BudgetFilterTagsValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetFilterTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetFilterTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.budget.BudgetFilterTags">BudgetFilterTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.budget.BudgetFilterTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.budget.BudgetFilterTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.budget.BudgetFilterTagsOutputReference.property.value"></a>

```typescript
public readonly value: BudgetFilterTagsValueOutputReference;
```

- *Type:* <a href="#@cdktf/provider-databricks.budget.BudgetFilterTagsValueOutputReference">BudgetFilterTagsValueOutputReference</a>

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-databricks.budget.BudgetFilterTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-databricks.budget.BudgetFilterTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: BudgetFilterTagsValue;
```

- *Type:* <a href="#@cdktf/provider-databricks.budget.BudgetFilterTagsValue">BudgetFilterTagsValue</a>

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-databricks.budget.BudgetFilterTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.budget.BudgetFilterTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BudgetFilterTags;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.budget.BudgetFilterTags">BudgetFilterTags</a>

---


### BudgetFilterTagsValueOutputReference <a name="BudgetFilterTagsValueOutputReference" id="@cdktf/provider-databricks.budget.BudgetFilterTagsValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.budget.BudgetFilterTagsValueOutputReference.Initializer"></a>

```typescript
import { budget } from '@cdktf/provider-databricks'

new budget.BudgetFilterTagsValueOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetFilterTagsValueOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetFilterTagsValueOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.budget.BudgetFilterTagsValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.budget.BudgetFilterTagsValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetFilterTagsValueOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetFilterTagsValueOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetFilterTagsValueOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetFilterTagsValueOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetFilterTagsValueOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetFilterTagsValueOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetFilterTagsValueOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetFilterTagsValueOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetFilterTagsValueOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetFilterTagsValueOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetFilterTagsValueOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetFilterTagsValueOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetFilterTagsValueOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetFilterTagsValueOutputReference.resetOperator">resetOperator</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetFilterTagsValueOutputReference.resetValues">resetValues</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.budget.BudgetFilterTagsValueOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.budget.BudgetFilterTagsValueOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.budget.BudgetFilterTagsValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.budget.BudgetFilterTagsValueOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.budget.BudgetFilterTagsValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.budget.BudgetFilterTagsValueOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.budget.BudgetFilterTagsValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.budget.BudgetFilterTagsValueOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.budget.BudgetFilterTagsValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.budget.BudgetFilterTagsValueOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.budget.BudgetFilterTagsValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.budget.BudgetFilterTagsValueOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.budget.BudgetFilterTagsValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.budget.BudgetFilterTagsValueOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.budget.BudgetFilterTagsValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.budget.BudgetFilterTagsValueOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.budget.BudgetFilterTagsValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.budget.BudgetFilterTagsValueOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.budget.BudgetFilterTagsValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.budget.BudgetFilterTagsValueOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.budget.BudgetFilterTagsValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.budget.BudgetFilterTagsValueOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.budget.BudgetFilterTagsValueOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.budget.BudgetFilterTagsValueOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetOperator` <a name="resetOperator" id="@cdktf/provider-databricks.budget.BudgetFilterTagsValueOutputReference.resetOperator"></a>

```typescript
public resetOperator(): void
```

##### `resetValues` <a name="resetValues" id="@cdktf/provider-databricks.budget.BudgetFilterTagsValueOutputReference.resetValues"></a>

```typescript
public resetValues(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetFilterTagsValueOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetFilterTagsValueOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetFilterTagsValueOutputReference.property.operatorInput">operatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetFilterTagsValueOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetFilterTagsValueOutputReference.property.operator">operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetFilterTagsValueOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetFilterTagsValueOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.budget.BudgetFilterTagsValue">BudgetFilterTagsValue</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.budget.BudgetFilterTagsValueOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.budget.BudgetFilterTagsValueOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `operatorInput`<sup>Optional</sup> <a name="operatorInput" id="@cdktf/provider-databricks.budget.BudgetFilterTagsValueOutputReference.property.operatorInput"></a>

```typescript
public readonly operatorInput: string;
```

- *Type:* string

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/provider-databricks.budget.BudgetFilterTagsValueOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-databricks.budget.BudgetFilterTagsValueOutputReference.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-databricks.budget.BudgetFilterTagsValueOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.budget.BudgetFilterTagsValueOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: BudgetFilterTagsValue;
```

- *Type:* <a href="#@cdktf/provider-databricks.budget.BudgetFilterTagsValue">BudgetFilterTagsValue</a>

---


### BudgetFilterWorkspaceIdOutputReference <a name="BudgetFilterWorkspaceIdOutputReference" id="@cdktf/provider-databricks.budget.BudgetFilterWorkspaceIdOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.budget.BudgetFilterWorkspaceIdOutputReference.Initializer"></a>

```typescript
import { budget } from '@cdktf/provider-databricks'

new budget.BudgetFilterWorkspaceIdOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetFilterWorkspaceIdOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetFilterWorkspaceIdOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.budget.BudgetFilterWorkspaceIdOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.budget.BudgetFilterWorkspaceIdOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetFilterWorkspaceIdOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetFilterWorkspaceIdOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetFilterWorkspaceIdOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetFilterWorkspaceIdOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetFilterWorkspaceIdOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetFilterWorkspaceIdOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetFilterWorkspaceIdOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetFilterWorkspaceIdOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetFilterWorkspaceIdOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetFilterWorkspaceIdOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetFilterWorkspaceIdOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetFilterWorkspaceIdOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetFilterWorkspaceIdOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetFilterWorkspaceIdOutputReference.resetOperator">resetOperator</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetFilterWorkspaceIdOutputReference.resetValues">resetValues</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.budget.BudgetFilterWorkspaceIdOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.budget.BudgetFilterWorkspaceIdOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.budget.BudgetFilterWorkspaceIdOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.budget.BudgetFilterWorkspaceIdOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.budget.BudgetFilterWorkspaceIdOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.budget.BudgetFilterWorkspaceIdOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.budget.BudgetFilterWorkspaceIdOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.budget.BudgetFilterWorkspaceIdOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.budget.BudgetFilterWorkspaceIdOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.budget.BudgetFilterWorkspaceIdOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.budget.BudgetFilterWorkspaceIdOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.budget.BudgetFilterWorkspaceIdOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.budget.BudgetFilterWorkspaceIdOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.budget.BudgetFilterWorkspaceIdOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.budget.BudgetFilterWorkspaceIdOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.budget.BudgetFilterWorkspaceIdOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.budget.BudgetFilterWorkspaceIdOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.budget.BudgetFilterWorkspaceIdOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.budget.BudgetFilterWorkspaceIdOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.budget.BudgetFilterWorkspaceIdOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.budget.BudgetFilterWorkspaceIdOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.budget.BudgetFilterWorkspaceIdOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.budget.BudgetFilterWorkspaceIdOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.budget.BudgetFilterWorkspaceIdOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetOperator` <a name="resetOperator" id="@cdktf/provider-databricks.budget.BudgetFilterWorkspaceIdOutputReference.resetOperator"></a>

```typescript
public resetOperator(): void
```

##### `resetValues` <a name="resetValues" id="@cdktf/provider-databricks.budget.BudgetFilterWorkspaceIdOutputReference.resetValues"></a>

```typescript
public resetValues(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetFilterWorkspaceIdOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetFilterWorkspaceIdOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetFilterWorkspaceIdOutputReference.property.operatorInput">operatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetFilterWorkspaceIdOutputReference.property.valuesInput">valuesInput</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetFilterWorkspaceIdOutputReference.property.operator">operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetFilterWorkspaceIdOutputReference.property.values">values</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetFilterWorkspaceIdOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.budget.BudgetFilterWorkspaceId">BudgetFilterWorkspaceId</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.budget.BudgetFilterWorkspaceIdOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.budget.BudgetFilterWorkspaceIdOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `operatorInput`<sup>Optional</sup> <a name="operatorInput" id="@cdktf/provider-databricks.budget.BudgetFilterWorkspaceIdOutputReference.property.operatorInput"></a>

```typescript
public readonly operatorInput: string;
```

- *Type:* string

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/provider-databricks.budget.BudgetFilterWorkspaceIdOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: number[];
```

- *Type:* number[]

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-databricks.budget.BudgetFilterWorkspaceIdOutputReference.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-databricks.budget.BudgetFilterWorkspaceIdOutputReference.property.values"></a>

```typescript
public readonly values: number[];
```

- *Type:* number[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.budget.BudgetFilterWorkspaceIdOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: BudgetFilterWorkspaceId;
```

- *Type:* <a href="#@cdktf/provider-databricks.budget.BudgetFilterWorkspaceId">BudgetFilterWorkspaceId</a>

---



